export class Counter {
  constructor(private initialValue: number = 0) {}
  
  public next() {
    this.initialValue += 1
    return this.initialValue
  }
}