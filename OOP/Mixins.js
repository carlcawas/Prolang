// Mixins simulate interfaces — JavaScript has no native interface keyword
const Serializable = (Base) => class extends Base {
  serialize()   { return JSON.stringify(this); }
  deserialize(json) { return Object.assign(this, JSON.parse(json)); }
};

const Timestamped = (Base) => class extends Base {
  constructor(...args) {
    super(...args);
    this.createdAt = new Date().toISOString();
  }
};

class User { constructor(name) { this.name = name; } }

class EnhancedUser extends Serializable(Timestamped(User)) {}

const u = new EnhancedUser("Nina");
console.log(u.serialize());  // JSON with name and createdAt