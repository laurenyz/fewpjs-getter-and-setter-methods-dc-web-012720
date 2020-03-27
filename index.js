class Circle {
  constructor(radius) {
    this.radius = radius
  }
  
  get diameter() {
    return this.radius * 2
  }
  
  set diameter() {
    this.diameter = this.diameter()
  }
  
  get circumference() {
    let pi = Math.PI
    return (this.diameter()) * pi
  }
}