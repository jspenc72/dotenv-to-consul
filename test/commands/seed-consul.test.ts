import {expect, test} from '@oclif/test'

describe('seed-consul', () => {
  test
    .stdout()
    .command(['seed-consul'])
    .it('runs hello', ctx => {
      expect(ctx.stdout).to.contain('hello world')
    })

  test
    .stdout()
    .command(['seed-consul', '--name', 'jeff'])
    .it('runs hello --name jeff', ctx => {
      expect(ctx.stdout).to.contain('hello jeff')
    })
})
