class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.front = null;
        this.rear = null;
        this.size = 0;
    }

    // Add an element to the end of the queue
    enqueue(value) {
        const newNode = new Node(value);
        if (this.rear) {
            this.rear.next = newNode;
        }
        this.rear = newNode;
        if (!this.front) {
            this.front = this.rear;
        }
        this.size++;
    }
 
    // Remove and return the first element from the queue
    dequeue() {
        if (this.isEmpty()) {
            return "Queue is empty";
        }
        const value = this.front.value;
        this.front = this.front.next;
        if (!this.front) {
            this.rear = null;
        }
        this.size--;
        return value;
    }

    // Return the first element of the queue without removing it
    peek() {
        if (this.isEmpty()) {
            return "Queue is empty";
        }
        return this.front.value;
    }

    // Check if the queue is empty
    isEmpty() {
        return this.size === 0;
    }

    // Return the number of elements in the queue
    getSize() {
        return this.size;
    }

    // Print the elements in the queue
    print() {
        let current = this.front;
        let result = [];
        while (current) {
            result.push(current.value);
            current = current.next;
        }
        console.log(result.join(","));
    }
}

// Example usage:
let queue = new Queue();
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
console.log(queue.dequeue()); // 10
console.log(queue.peek()); // 20
queue.print(); // 20,30
