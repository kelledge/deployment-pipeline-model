import { Artifact } from "../artifact"
import { ArtifactRepository } from "../artifact_repository"

describe('artifacts', () => {
    it('can retrieve', () => {
        const a1 = new Artifact('api', 1)
        const repo = new ArtifactRepository()
        repo.publish(a1)
        const res = repo.retrieve('api', 1)
        expect(res).toBe(a1)
    })
})