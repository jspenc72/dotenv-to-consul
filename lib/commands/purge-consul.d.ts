import { Command, flags } from '@oclif/command';
export default class PurgeConsul extends Command {
    static description: string;
    static flags: {
        help: import("@oclif/parser/lib/flags").IBooleanFlag<void>;
        force: import("@oclif/parser/lib/flags").IBooleanFlag<boolean>;
        path: flags.IOptionFlag<string | undefined>;
        token: flags.IOptionFlag<string | undefined>;
        server: flags.IOptionFlag<string | undefined>;
    };
    static args: {
        name: string;
    }[];
    envs: any;
    run(): Promise<void>;
}
