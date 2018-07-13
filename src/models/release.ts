import { Configuration } from "src/models/configuration";
import { Artifact } from "src/models/artifact"

export class Release {
  constructor(readonly artifact: Artifact, readonly configuration: Configuration) {}
}
