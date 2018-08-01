import { Counter } from "./counter";

interface Vertex<T> {
  value: T
  id: number
}

export class DirectedGraph<T> {
  private nodeIndex: Counter

  constructor() {
    this.nodeIndex = new Counter()
  }

  public add(node: T, ...neighbors: Array<T>) {
    const vertex: Vertex<T> = {
      value: node,
      id: this.nodeIndex.next()
    }


  }
}