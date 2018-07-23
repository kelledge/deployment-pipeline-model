/*
* Key-Value store. Immutable map.
*/
export class Configuration {
  constructor(public name: string, private value: Map<string, string>) {}
  public get(key: string) {}
  public entries() {
    for (let entry of this.value.entries()) {}
  }
}