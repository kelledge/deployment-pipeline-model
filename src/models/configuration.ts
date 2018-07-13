/*
* Key-Value store. Immutable map.
*/
export class Configuration {
  constructor(readonly name: string, readonly version: number, private value: Map<string, string>) {}
  
  public get(key: string) {
    return this.value.get(key)
  }

  public entries() {
    return this.value.entries();
  }

  public equal(name: string, version: number) {
    return this.name === name && this.version === version
  }
}