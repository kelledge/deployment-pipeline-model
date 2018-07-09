import { Environment } from 'src/models/environment'

type DeploymentReason = 'featureIncomplete' | 'bugFix' | 'release'

export class ReleasePipe {
  constructor(destinationEnvironment: Environment) {}
  public pipe(artifact: any, configurationVersion: number, reason: DeploymentReason) {}
}
