interface Vertex<T> {
  id: number
  content: T
}

interface Edge<T> {
  from: Vertex<T>
  to: Vertex<T>
}

class Dag<T> {
  constructor(private root: Vertex<T>) {}
  public addNode() {}
}