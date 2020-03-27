class Circle {
  constructor(radius) {
    this.radius = radius
  }
  
  let pi = Math.PI
  
  get diameter() {
    return this.radius * 2
  }
}