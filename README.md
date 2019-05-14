dotenv-to-consul
================

Read .env file and populate consul directory with all key values

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/dotenv-to-consul.svg)](https://npmjs.org/package/dotenv-to-consul)
[![CircleCI](https://circleci.com/gh/jspenc72/dotenv-to-consul/tree/master.svg?style=shield)](https://circleci.com/gh/jspenc72/dotenv-to-consul/tree/master)
[![Codecov](https://codecov.io/gh/jspenc72/dotenv-to-consul/branch/master/graph/badge.svg)](https://codecov.io/gh/jspenc72/dotenv-to-consul)
[![Downloads/week](https://img.shields.io/npm/dw/dotenv-to-consul.svg)](https://npmjs.org/package/dotenv-to-consul)
[![License](https://img.shields.io/npm/l/dotenv-to-consul.svg)](https://github.com/jspenc72/dotenv-to-consul/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g dotenv-to-consul
$ dotenv-to-consul COMMAND
running command...
$ dotenv-to-consul (-v|--version|version)
dotenv-to-consul/0.0.1 darwin-x64 node-v8.11.1
$ dotenv-to-consul --help [COMMAND]
USAGE
  $ dotenv-to-consul COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`dotenv-to-consul hello [FILE]`](#dotenv-to-consul-hello-file)
* [`dotenv-to-consul help [COMMAND]`](#dotenv-to-consul-help-command)

## `dotenv-to-consul hello [FILE]`

describe the command here

```
USAGE
  $ dotenv-to-consul hello [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print

EXAMPLE
  $ dotenv-to-consul hello
  hello world from ./src/hello.ts!
```

_See code: [src/commands/hello.ts](https://github.com/jspenc72/dotenv-to-consul/blob/v0.0.1/src/commands/hello.ts)_

## `dotenv-to-consul help [COMMAND]`

display help for dotenv-to-consul

```
USAGE
  $ dotenv-to-consul help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v2.1.6/src/commands/help.ts)_
<!-- commandsstop -->
