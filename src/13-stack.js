/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
  constructor() {
    this.stack13 = [];
  }

  push(element) {
    this.stack13.push(element);
  }

  pop() {
    return this.stack13.pop();
  }

  peek() {
    return this.stack13[this.stack13.length - 1];
  }
}

module.exports = Stack;
