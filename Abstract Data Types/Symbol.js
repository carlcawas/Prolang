const _id = Symbol("id");

class User {
  constructor(name, id) {
    this.name = name;
    this[_id] = id;   // Symbol key — not in for...in or Object.keys()
  }

  getId() { return this[_id]; }
}

const u = new User("Marco", 42);
console.log(Object.keys(u));        // ["name"] — id is hidden
console.log(JSON.stringify(u));     // {"name":"Marco"} — Symbol omitted
console.log(u.getId());             // 42