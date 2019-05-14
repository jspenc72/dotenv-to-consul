import {expect, test} from '@oclif/test'

describe('purge-consul', () => {
  test
    .stdout()
    .command(['purge-consul'])
    .it('runs hello', ctx => {
      expect(ctx.stdout).to.contain('hello world')
    })

  test
    .stdout()
    .command(['purge-consul', '--name', 'jeff'])
    .it('runs hello --name jeff', ctx => {
      expect(ctx.stdout).to.contain('hello jeff')
    })
})
