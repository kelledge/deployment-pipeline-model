import { Optional } from "../types";

export class Stack<T> {
  private state: Array<T>
  
  constructor(initialState: Array<T>) {}
  
  public push(node: T) {
    this.state.push(node)
  }

  public pop(): Optional<T> {
    return this.state.pop() || null
  }
}
