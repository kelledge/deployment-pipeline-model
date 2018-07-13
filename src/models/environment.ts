import { ConfigurationRepository } from "./configuration_repository"
import { ReleasePipe } from "./release_pipe"
import { Release } from "./release"
import { Artifact } from "./artifact"

interface NamedVersion {
  name: string
  version: number
}

/*
* Hosts releases of artifacts
*/
export class Environment {
  private releases: Map<string, Release>
  private configuration: Map<string, NamedVersion>

  constructor(
    readonly title: string,
    private configurationRepo: ConfigurationRepository,
    private releasePipes: Array<ReleasePipe>
  ) {
    this.releases = new Map<string, Release>()
    this.configuration = new Map<string, NamedVersion>()
  }

  /*
  * Configure what configuration will be for which artifacts
  */
  public configure(name: string, pointer: NamedVersion) {
    this.configuration.set(name, pointer)
  }

  /*
  * Forward artifact to all pipelines. 
  */
  public promote() {
    this.releasePipes.forEach((pipe) => {
      /* 
      * How to handle releases. Should deploy current artifact with next environments most current
      * configuration version.
      * EnvironmentReleaseSet? Searchable by artifact name and desired configuration version?
      */
    })
  }

  /*
  * Make a specific release the current deployment for this environment.
  */
  public releaseArtifact(artifact: Artifact) {
    const configPtr = this.configuration.get(artifact.name)
    if (!configPtr) {
      throw new Error(`No configuration settings found for ${artifact.name}`)
    }

    const configuration = this.configurationRepo.retrieve(configPtr.name, configPtr.version)
    if (!configuration) {
      throw new Error('No configuration found in repository')
    }
    
    const release = new Release(artifact, configuration)
    this.releases.set(artifact.name, release)
  }

  /*
  * Returns valid release objects for this environment.
  */
  public validReleases() {}

  get runningReleases() {
    return Array.from(this.releases.entries()).map((e) => {
      const [ , release ] = e
      return release
    })
  }
}
