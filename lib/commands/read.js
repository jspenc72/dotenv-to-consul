"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const command_1 = require("@oclif/command");
const fs = require('fs');
const lineReader = require('readline');
class Read extends command_1.Command {
    async run() {
        const { args, flags } = this.parse(Read);
        const path = args.file || `${process.cwd()}/.env`;
        // this.log(`Parsing ${path}`)
        try {
            if (fs.existsSync(path)) {
                //file exists
                let count = 0;
                let lineReader = require('readline').createInterface({
                    input: require('fs').createReadStream(path)
                });
                lineReader.on('line', (line) => {
                    let k = line.split('=')[0];
                    let v = line.split('=')[1];
                    count++;
                    this.log(`${k} = ${v}`);
                });
                lineReader.on('close', () => {
                    this.log(`Found ${count} kv pairs.`);
                });
            }
            else {
                this.error(`file does not exist at path: ${path}`);
            }
        }
        catch (err) {
            this.error(err);
        }
        if (args.file && flags.force) {
            this.log(`you input --force and --file: ${args.file}`);
        }
    }
}
Read.description = 'Read a .env file and print the corresponding key value pairs';
Read.flags = {
    help: command_1.flags.help({ char: 'h' }),
    // flag with a value (-n, --name=VALUE)
    name: command_1.flags.string({ char: 'n', description: 'name to print' }),
    // flag with no value (-f, --force)
    force: command_1.flags.boolean({ char: 'f' }),
};
Read.args = [{ name: 'file' }];
exports.default = Read;
