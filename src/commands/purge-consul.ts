import {Command, flags} from '@oclif/command'

export default class PurgeConsul extends Command {
  static description = 'Read a .env file and purge its contents from consul kv store'

  static flags = {
    help: flags.help({char: 'h'}),
    // flag with a value (-n, --name=VALUE)
    name: flags.string({char: 'n', description: 'name to print'}),
    // flag with no value (-f, --force)
    force: flags.boolean({char: 'f'}),
  }

  static args = [{name: 'file'}]

  async run() {
    const {args, flags} = this.parse(PurgeConsul)

    const name = flags.name || 'world'
    this.log(`hello ${name} from /Users/331-SpencerJLPTP/Documents/GitHub/dotenv-to-consul/src/commands/purge-consul.ts`)
    if (args.file && flags.force) {
      this.log(`you input --force and --file: ${args.file}`)
    }
  }
}
