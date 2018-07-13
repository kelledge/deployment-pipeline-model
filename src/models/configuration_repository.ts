import { Configuration } from "./configuration";

/*
* Provides an API for publishing and retrieving configuration histories.
*/
export class ConfigurationRepository {
  private state: Set<Configuration>

  constructor() {
    this.state = new Set<Configuration>()
  }

  public publish(configuration: Configuration) {
    this.state.add(configuration)
  }
  
  public retrieve(name: string, version: number): Configuration | null {
    const result = Array.from(this.state).find((configuration) => {
      return configuration.equal(name, version)
    })

    return result || null
  }
}