/*
* Self contained asset this is a runnable code-bundle. Uniquely identified amongst other artifacts
* of like type.
*/
export class Artifact {
  readonly name: string
  readonly version: number

  constructor(name: string, version: number) {
    this.name = name
    this.version = version
  }

  public equal(name: string, version: number) {
    return this.name === name && this.version === version
  }
}