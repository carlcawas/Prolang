class Shape {
  area()      { return 0; }
  toString()  { return `Shape with area ${this.area().toFixed(2)}`; }
}

class Rectangle extends Shape {
  constructor(w, h) { super(); this.w = w; this.h = h; }
  area() { return this.w * this.h; }
}

class Circle extends Shape {
  constructor(r) { super(); this.r = r; }
  area() { return Math.PI * this.r ** 2; }
}

const shapes = [new Rectangle(4, 5), new Circle(3)];
shapes.forEach(s => console.log(s.toString()));
// "Shape with area 20.00"
// "Shape with area 28.27"