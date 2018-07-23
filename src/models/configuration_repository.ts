import { Configuration } from "./configuration";

/*
* Provides an API for publishing and retrieving configurations.
*/
export class ConfigurationRepository {
  constructor(private initialState: Array<Configuration>) {}

  public set(configuration: Configuration) {

  }

  public get() {}

  public list() {}
}
