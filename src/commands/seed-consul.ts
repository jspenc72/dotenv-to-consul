import {Command, flags} from '@oclif/command'
const http = require('http')
const fs = require('fs')
const lineReader = require('readline')
const axios = require('axios')

export default class SeedConsul extends Command {
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
  envs: [] = []
  async run() {
    const {args, flags} = this.parse(SeedConsul)
    const path = args.file || `${process.cwd()}/.env`

    // this.log(`Parsing ${path}`)

    try {
      if (fs.existsSync(path)) {
        //file exists
        let count = 0;
        let lineReader = require('readline').createInterface({
          input: require('fs').createReadStream(path)
        })
        lineReader.on('line', (line) => {
          let kv = {
            key: line.split('=')[0],
            value: line.split('=')[1]
          }
          this.envs.push(kv)
          count++
          // this.log(`${count}`)
        })
        lineReader.on('close', () => {
          this.log(`${this.envs.length}`)
          let config = {
            headers: {'X-Consul-Token': flags.token},
          }
          this.envs.forEach(kv => {
            axios.put(`${flags.server}/v1/kv/${flags.path}/${kv.key}`, kv.value, config)
              .then((response) => {
                this.log(response)
              })
              .catch((error) => {
                this.log(error)
              })
          })
        })
      } else{
        this.error(`file does not exist at path: ${path}`)
      }
    } catch (err) {
      this.error(err)
    }

  }
}
