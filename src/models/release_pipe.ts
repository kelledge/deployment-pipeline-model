import { Environment } from 'src/models/environment'
import { Artifact } from 'src/models/artifact'

type DeploymentReason = 'featureIncomplete' | 'bugFix' | 'release'

export class ReleasePipe {
  constructor(private destinationEnvironment: Environment) {}
  public forward(artifact: Artifact, reason: DeploymentReason) {
    this.destinationEnvironment.releaseArtifact(artifact)
  }
}
