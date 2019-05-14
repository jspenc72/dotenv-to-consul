dotenv-to-consul
================

Cli tool to parse key values from a .env file and populate consul key value store.

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
* [`dotenv-to-consul help [COMMAND]`](#dotenv-to-consul-help-command)
* [`dotenv-to-consul purge-consul [FILE]`](#dotenv-to-consul-purge-consul-file)
* [`dotenv-to-consul read [FILE]`](#dotenv-to-consul-read-file)
* [`dotenv-to-consul seed-consul [FILE]`](#dotenv-to-consul-seed-consul-file)

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

## `dotenv-to-consul purge-consul [FILE]`

describe the command here

```
USAGE
  $ dotenv-to-consul purge-consul [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print
```

_See code: [src/commands/purge-consul.ts](https://github.com/jspenc72/dotenv-to-consul/blob/v0.0.1/src/commands/purge-consul.ts)_

## `dotenv-to-consul read [FILE]`

Read a .env file and print the corresponding key value pairs

```
USAGE
  $ dotenv-to-consul read [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print
```

_See code: [src/commands/read.ts](https://github.com/jspenc72/dotenv-to-consul/blob/v0.0.1/src/commands/read.ts)_

## `dotenv-to-consul seed-consul [FILE]`

Read a .env file and seed consul kv store

```
USAGE
  $ dotenv-to-consul seed-consul [FILE]

OPTIONS
  -f, --force
  -h, --help           show CLI help
  -p, --path=path      path
  -s, --server=server  server
  -t, --token=token    token
```

_See code: [src/commands/seed-consul.ts](https://github.com/jspenc72/dotenv-to-consul/blob/v0.0.1/src/commands/seed-consul.ts)_
<!-- commandsstop -->
