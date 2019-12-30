class Graph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }
  addEdge(vertex1, vertex2) {
    if (this.adjacencyList[vertex1]) {
      this.adjacencyList[vertex1].push(vertex2);
    }
    if (this.adjacencyList[vertex2]) {
      this.adjacencyList[vertex2].push(vertex1);
    }
  }
  removeEdge(vertex1, vertex2) {
    if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
      this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
        v => v !== vertex2
      );
      this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
        v => v !== vertex1
      );
    }
  }
  removeVertex(vertex) {
    while (this.adjacencyList[vertex].length) {
      const adjacentVertex = this.adjacencyList[vertex].pop();
      this.removeEdge(vertex.adjacentVertex);
    }
    delete this.adjacencyList[vertex];
  }
  DFSRecursive(vertex) {
    let result = [];
    let visited = {};
    let adjacencyList = this.adjacencyList;

    //immediately invoked helper function
    (function _helper(vertex) {
      if (!vertex) return null;
      visited[vertex] = true;
      result.push[vertex];
      adjacencyList[vertex].forEach(neighbor => {
        if (!visited[vertex]) {
          _helper(neighbor);
        }
      });
    })(vertex);
    return result;
  }
  DFSIteratively(vertex) {
    let stack = [vertex];
    let result = [];
    let visited = {};
    let current;
    visited[vertex] = true;
    while (stack.length) {
      current = stack.pop();
      result.push(current);
      this.adjacencyList[current].forEach(neighbor => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          stack.push(neighbor);
        }
      });
    }
    return result;
  }

  BFS(vertex) {
    let queue = [vertex];
    let result = [];
    let visited = {};
    let current;
    visited[vertex] = true;
    while (queue.length) {
      current = queue.shift();
      result.push(current);
      this.adjacencyList[current].forEach(neighbor => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          queue.push[neighbor];
        }
      });
    }
    return result;
  }
}
//Cities
let graph = new Graph();
graph.addVertex('New York');
graph.addVertex('Tokyo');
graph.addVertex('London');
graph.addEdge('New York', 'Tokyo');
