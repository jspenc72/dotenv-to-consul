import {Command, flags} from '@oclif/command'
const http = require('http')
const fs = require('fs')
const lineReader = require('readline')
const axios = require('axios')

export default class PullConsul extends Command {
  static description = 'Read a .env file and seed consul kv store'

  static flags = {
    help: flags.help({char: 'h'}),
    // flag with no value (-f, --force)
    force: flags.boolean({char: 'f'}),
    path: flags.string({char: 'p', description: 'path'}),
    token: flags.string({char: 't', description: 'token'}),
    server: flags.string({char: 's', description: 'server'}),
  }

  static args = [{name: 'file'}]
  envs: any = []
  async run() {
    const {args, flags} = this.parse(PullConsul)
    const path = args.file || `${process.cwd()}/.env`

    try {
      if (fs.existsSync(path)) {
        //file exists
        let count = 0
        let keys = []
        let values = []
          let config = {
            headers: {'X-Consul-Token': flags.token},
          }
          axios.get(`${flags.server}/v1/kv/${flags.path}/?keys`, config)
            .then((response: any) => {
              
              response.data.forEach(key => {
                var keytmp = key.split('/')
                var targetkey = keytmp[keytmp.length-1]
                axios.get(`${flags.server}/v1/kv/${flags.path}/${targetkey}`, config)
                .then((res: any) => {
                  let buff = new Buffer(res.data[0].Value, 'base64');
                  let text = buff.toString('ascii');                   
                  keys.push(targetkey)
                  values.push(text)
                  fs.appendFile(path, targetkey+"="+text+"\n", function (err) {
                    if (err) throw err;
                    console.log('Saved!');
                  });
                })
                .catch((error: any) => {
                  this.log(error)
                })
              });
            })
            .catch((error: any) => {
              this.log(error)
            })
      } else {
        this.error(`file does not exist at path: ${path}`)
      }
    } catch (err) {
      this.error(err)
    }

  }
}
