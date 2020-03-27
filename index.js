class Circle {
  constructor(radius) {
    this.radius = radius
  }
  
  get diameter() {
    this.diameter = this.radius * 2
    return this.diameter
  }
  
  get circumference() {
    let pi = Math.PI
    return this.diameter * pi
  }
}