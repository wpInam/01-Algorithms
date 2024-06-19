class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.top = null; // This is Our Main Tree Where everything is stored
        this.size = 0;
    }

    // Add an element to the top of the stack
    push(value) {
        const newNode = new Node(value);
        if (this.top) {
            newNode.next = this.top; // Here is the Key point 
        }
        this.top = newNode;
        this.size++;
        console.log(this.top) // See the Tree
    }

    // Remove and return the top element from the stack
    pop() {
        if (this.isEmpty()) {
            return "Stack is empty";
        }
        const value = this.top.value;
        this.top = this.top.next;
        this.size--;
        console.log(this.top, value); // See the Tree and value
        return value;
    }

    // Return the top element of the stack without removing it
    peek() {
        if (this.isEmpty()) {
            return "Stack is empty";
        }
        return this.top.value;
    }

    // Check if the stack is empty
    isEmpty() {
        return this.size === 0;
    }

    // Return the number of elements in the stack
    getSize() {
        return this.size;
    }

    // Print the elements in the stack
    print() {
        let current = this.top;
        let result = [];
        while (current) {
            result.push(current.value);
            current = current.next;
        }
        console.log(result.join(","));
    }
}

// Example usage:
let stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);
console.log(stack.pop()); // 30
console.log(stack.peek()); // 20
stack.print(); // 20,10
