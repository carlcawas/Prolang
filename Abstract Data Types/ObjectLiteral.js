function createStack() {
  const items = [];    // private — closure hides it

  return {
    push:    (item) => items.push(item),
    pop:     ()     => items.pop(),
    peek:    ()     => items[items.length - 1],
    isEmpty: ()     => items.length === 0,
    size:    ()     => items.length
  };
}

const stack = createStack();
stack.push(1); stack.push(2); stack.push(3);
console.log(stack.peek()); // 3
console.log(stack.pop());  // 3
console.log(stack.size()); // 2