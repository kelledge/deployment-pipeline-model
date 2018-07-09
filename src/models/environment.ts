import { ArtifactRepository } from './artifact_repository'
import { ConfigurationRepository } from "./configuration_repository";
import { ReleasePipe } from "./release_pipe"

export class Environment {
  constructor(
    private title: string,
    private artifactRepo: ArtifactRepository,
    private configurationRepo: ConfigurationRepository,
    private releasePipes: Array<ReleasePipe>
  ) {}

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
  public deployRelease() {}

  /*
  * Returns valid release objects for this environment.
  */
  public validReleases() {}
}
