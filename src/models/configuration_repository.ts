/*
* Provides an API for publishing and retrieving configurations.
*/
export class ConfigurationRepository {
  constructor(private initialValue: Map<string, Map<string, string>>) {}
}