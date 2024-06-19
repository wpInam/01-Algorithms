class Graph {
    constructor() {
        this.vertices = [];
        this.adjacencyMatrix = [];
    }

    addVertex(vertex) {
        debugger
        if (!this.vertices.includes(vertex)) {
            this.vertices.push(vertex);
            this.adjacencyMatrix.forEach(row => row.push(0));
            this.adjacencyMatrix.push(new Array(this.vertices.length).fill(0));
        }
    }

    addEdge(vertex1, vertex2) {
        let index1 = this.vertices.indexOf(vertex1);
        let index2 = this.vertices.indexOf(vertex2);

        if (index1 === -1) {
            this.addVertex(vertex1);
            index1 = this.vertices.indexOf(vertex1);
        }

        if (index2 === -1) {
            this.addVertex(vertex2);
            index2 = this.vertices.indexOf(vertex2);
        }

        this.adjacencyMatrix[index1][index2] = 1;
        this.adjacencyMatrix[index2][index1] = 1;
    }

    removeEdge(vertex1, vertex2) {
        let index1 = this.vertices.indexOf(vertex1);
        let index2 = this.vertices.indexOf(vertex2);

        if (index1 !== -1 && index2 !== -1) {
            this.adjacencyMatrix[index1][index2] = 0;
            this.adjacencyMatrix[index2][index1] = 0;
        }
    }

    removeVertex(vertex) { // I Have to do RND on this as well
        let index = this.vertices.indexOf(vertex);

        if (index !== -1) {
            this.vertices.splice(index, 1);
            this.adjacencyMatrix.splice(index, 1);
            this.adjacencyMatrix.forEach(row => row.splice(index, 1));
        }
    }

    hasEdge(vertex1, vertex2) {
        let index1 = this.vertices.indexOf(vertex1);
        let index2 = this.vertices.indexOf(vertex2);

        return index1 !== -1 && index2 !== -1 && this.adjacencyMatrix[index1][index2] === 1;
    }

    display() {
        console.log('  ' + this.vertices.join(' '));
        for (let i = 0; i < this.adjacencyMatrix.length; i++) {
            console.log(this.vertices[i] + ' ' + this.adjacencyMatrix[i].join(' '));
        }
    }
}

const graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "C");
graph.display();
graph.removeEdge("A", "B");
graph.display();
graph.removeVertex("A");
graph.display();
