import { Artifact } from "src/models/artifact";

/*
* Provides an API for publishing and retrieving artifacts.
*/
export class ArtifactRepository {
    private state: Set<Artifact> = new Set<Artifact>()

    public publish(artifact: Artifact) {
        return this.state.add(artifact)
    }

    public retrieve(name: string, version: number): Artifact | null {
        const artifact = Array.from(this.state).find((artifact) => {
            return artifact.equal(name, version)
        })

        return artifact || null
    }
}