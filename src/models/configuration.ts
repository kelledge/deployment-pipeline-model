/*
* Key-Value store. Immutable map.
*/
export class Configuration {
  constructor(public name: string, value: Map<string, string>) {}
}