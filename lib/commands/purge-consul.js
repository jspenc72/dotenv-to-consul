"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const command_1 = require("@oclif/command");
const http = require('http');
const fs = require('fs');
const lineReader = require('readline');
const axios = require('axios');
class PurgeConsul extends command_1.Command {
    constructor() {
        super(...arguments);
        this.envs = [];
    }
    async run() {
        const { args, flags } = this.parse(PurgeConsul);
        const path = args.file || `${process.cwd()}/.env`;
        try {
            if (fs.existsSync(path)) {
                //file exists
                let count = 0;
                let lineReader = require('readline').createInterface({
                    input: require('fs').createReadStream(path)
                });
                lineReader.on('line', (line) => {
                    let kv = {
                        key: line.split('=')[0],
                        value: line.split('=')[1]
                    };
                    this.envs.push(kv);
                    count++;
                    // this.log(`${count}`)
                });
                lineReader.on('close', () => {
                    this.log(`${this.envs.length}`);
                    let config = {
                        headers: { 'X-Consul-Token': flags.token },
                    };
                    this.envs.forEach((kv) => {
                        axios.delete(`${flags.server}/v1/kv/${flags.path}/${kv.key}`, config)
                            .then((response) => {
                            this.log(response);
                        })
                            .catch((error) => {
                            this.log(error);
                        });
                    });
                });
            }
            else {
                this.error(`file does not exist at path: ${path}`);
            }
        }
        catch (err) {
            this.error(err);
        }
    }
}
PurgeConsul.description = 'Read a .env file and purge its contents from consul kv store';
PurgeConsul.flags = {
    help: command_1.flags.help({ char: 'h' }),
    // flag with a value (-n, --name=VALUE)
    force: command_1.flags.boolean({ char: 'f' }),
    path: command_1.flags.string({ char: 'p', description: 'path' }),
    token: command_1.flags.string({ char: 't', description: 'token' }),
    server: command_1.flags.string({ char: 's', description: 'server' }),
};
PurgeConsul.args = [{ name: 'file' }];
exports.default = PurgeConsul;
