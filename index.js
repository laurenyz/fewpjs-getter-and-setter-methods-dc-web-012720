class Circle {
  constructor(radius) {
    this.radius = radius
  }
  
  get diameter() {
    return this.radius * 2
  }
  
  get circumference() {
    let pi = Math.PI
    return (this.diameter()) * pi
  }
}