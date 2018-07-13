import { Artifact } from "../artifact";
import { ConfigurationRepository } from "../configuration_repository";
import { Environment } from "../environment";
import { Configuration } from "../configuration";


describe('integration', () => {
  it('environment test', () => {
    const a = new Artifact('test', 1)
    const c = new ConfigurationRepository()
    const c1 = new Configuration('test', 1, new Map<string, string>([
      ['host', 'example.com'],
      ['token', '1337'],
    ]))
    c.publish(c1)
    const e = new Environment(
      'test',
      c,
      [],
    )
    e.configure('test', { name: 'test', version: 1 })
    e.releaseArtifact(a)
    console.log(e.runningReleases)
  })
})