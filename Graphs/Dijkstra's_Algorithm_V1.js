//Priority Queue using binary heap
class PriorityQueue {
  constructor() {
    this.values = [];
  }
  enqueue(val, priority) {
    let newNode = new Node(val, priority);
    this.values.push(newNode);
    this.bubbleUp();
  }
  //It will make sure the element inserted finds its correct spot in the heap by bubbling up
  bubbleUp() {
    let index = this.values.length - 1;
    let element = this.values[index];
    while (index < 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      let parent = this.values[parentIndex];
      if (element.priority <= parent.parent) break;
      this.values[parentIndex] = element;
      this.values[index] = parent;
      index = parentIndex;
    }
  }
  dequeue() {
    const max = this.values[0];
    const end = this.values.pop();
    //Makes sure you dont replace max with itself when you have one element left in your heap
    if (this.values.length > 0) {
      this.values[0] = end;
      this.bubbleDown();
    }
    return max;
  }
  bubbleDown() {
    let index = 0;
    const length = this.values.length;
    const element = this.values[0];
    while (true) {
      let leftChildIndex = 2 * index + 1;
      let rightChildIndex = 2 * index + 2;
      let leftChild, rightChild;
      let swap = null;

      if (leftChildIndex < length) {
        leftChild = this.values[leftChildIndex];
        if (leftChild.priority > element.priority) {
          swap = leftChildIndex;
        }
      }

      if (rightChildIndex < length) {
        rightChild = this.values[rightChildIndex];
        if (
          (swap === null && rightChild.priority > element.priority) ||
          (swap !== null && rightChild.priority > leftChild.priority)
        ) {
          swap = leftChildIndex;
        }
      }

      if (swap === null) break;
      this.values[index] = this.values[swap];
      this.values[swap] = element;
      index = swap;
    }
  }
}

class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
}

//Weigthted Graph to hold values on its edges
class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }
  addEdge(vertex1, vertex2, weight) {
    if (this.adjacencyList[vertex1]) {
      this.adjacencyList[vertex1].push({ node: vertex2, weight });
    }
    if (this.adjacencyList[vertex2]) {
      this.adjacencyList[vertex2].push({ node: vertex1, weight });
    }
  }
  Dijkstra(start, finish) {
    const nodes = new PriorityQueue();
    const distance = {};
    let path = []; //result to return
    const previous = {};
    let smallest;

    //Initial state: set starting node to equal 0 and all the other nodes to be Infinity
    for (let vertex in this.adjacencyList) {
      if (vertex === start) {
        distance[vertex] = 0;
        nodes.enqueue(vertex, 0);
      } else {
        distance[vertex] = Infinity;
        nodes.enqueue(vertex, Infinity);
      }
      previous[vertex] = null;
    }
    //
    while (nodes.values.length) {
      smallest = nodes.dequeue().value;
      if (smallest === finish) {
        while (previous[smallest]) {
          path.push(smallest);
          smallest = previous[smallest];
        }
        break;
      }
      if (smallest || distance[smallest] !== Infinity) {
        for (let neighbor in this.adjacencyList[smallest]) {
          //Find the neighbor
          let nextNode = this.adjacencyList[smallest][neighbor];
          let nextNeighbor = nextNode.node;
          //Distance to the new node
          let candidate = distance[smallest] + nextNode.weight;
          if (candidate < distance[nextNeighbor]) {
            //updating new smallest distance to another node(neighbor)
            distance[nextNeighbor] = candidate;
            //updating the node we came from
            previous[nextNeighbor] = smallest;
            //enqueue in priority queue with ne priority
            nodes.enqueue(nextNeighbor, candidate);
          }
        }
      }
    }
    return path.concat(smallest).reverse();
    //['A', 'C', 'D', 'F', 'E']
  }
}

let graph = new WeightedGraph();
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('E');
graph.addVertex('F');

graph.addEdge('A', 'B', 4);
graph.addEdge('A', 'C', 2);
graph.addEdge('B', 'E', 3);
graph.addEdge('C', 'D', 2);
graph.addEdge('C', 'F', 4);
graph.addEdge('D', 'E', 3);
graph.addEdge('D', 'F', 1);
graph.addEdge('E', 'F', 1);

graph.Dijkstra('A', 'E');
