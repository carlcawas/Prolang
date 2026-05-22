const _data = new WeakMap();

class Circle {
  constructor(radius) {
    _data.set(this, { radius });    // private storage
  }

  area() {
    const { radius } = _data.get(this);
    return Math.PI * radius ** 2;
  }

  get radius() { return _data.get(this).radius; }
}

const c = new Circle(7);
console.log(c.area());   // 153.94...
console.log(c.radius);   // 7