class Queue {
    constructor() {
        this.items = [];
    }

    // Add an element to the end of the queue
    enqueue(element) {
        this.items.push(element);
    }

    // Remove and return the first element from the queue
    dequeue() {
        if (this.isEmpty()) {
            return "Queue is empty";
        }
        return this.items.shift();
    }

    // Return the first element of the queue without removing it
    front() {
        if (this.isEmpty()) {
            return "Queue is empty";
        }
        return this.items[0];
    }

    // Check if the queue is empty
    isEmpty() {
        return this.items.length === 0;
    }

    // Return the number of elements in the queue
    size() {
        return this.items.length;
    }

    // Print the elements in the queue
    print() {
        console.log(this.items.toString());
    }
}

// Example usage:
let queue = new Queue();
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
console.log(queue.dequeue()); // 10
console.log(queue.front()); // 20
queue.print(); // 20,30
