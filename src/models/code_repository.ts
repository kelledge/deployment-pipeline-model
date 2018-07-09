class CodeRepository {
  constructor() {}
  public commit(content: string, message: string, author: string, date: Date) {}
  public remoteAdd(name: string, repository: CodeRepository) {}
  public pull(remoteName: string) {}
  public push(remoteName: string) {}
  get state() {
    return null
  }
}
