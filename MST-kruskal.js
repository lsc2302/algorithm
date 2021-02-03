class UnionFind {
    constructor(elements) {
       // Number of disconnected components
    //    this.count = elements.length;
 
       // Keep Track of connected components
       this.parent = {};
 
       // Initialize the data structure such that all
       // elements have themselves as parents
       elements.forEach(e => (this.parent[e] = e));
    }
 
    union(a, b) {
       let rootA = this.find(a);
       let rootB = this.find(b);
 
       // Roots are same so these are already connected.
       if (rootA === rootB) return;
 
       // Always make the element with smaller root the parent.
       if (rootA < rootB) {
          if (this.parent[b] != b) this.union(this.parent[b], a);
          this.parent[b] = this.parent[a];
       } else {
          if (this.parent[a] != a) this.union(this.parent[a],b);
            this.parent[a] = this.parent[b];
        }
     }
  
     // Returns final parent of a node
     find(a) {
        while (this.parent[a] !== a) {
           a = this.parent[a];
        }
        return a;
     }
  
     // Checks connectivity of the 2 nodes
     connected(a, b) {
        return this.find(a) === this.find(b);
     }
  }

let uf = new UnionFind(["A", "B", "C", "D", "E"]);
uf.union("A", "B"); uf.union("A", "C");
uf.union("C", "D");

console.log(uf.connected("B", "E"));
console.log(uf.connected("B", "D"));


// kruskalsMST() {
//     // Initialize graph that'll contain the MST
//     const MST = new Graph();
//     this.nodes.forEach(node => MST.addNode(node));
//     if (this.nodes.length === 0) {
//        return MST;
//     }
 
//     // Create a Priority Queue
//     edgeQueue = new PriorityQueue(this.nodes.length * this.nodes.length);
 
//     // Add all edges to the Queue:
//     for (let node in this.edges) {
//        this.edges[node].forEach(edge => {
//           edgeQueue.enqueue([node, edge.node], edge.weight);
//        });
//     }
 
//     let uf = new UnionFind(this.nodes);
 
//     // Loop until either we explore all nodes or queue is empty
//     while (!edgeQueue.isEmpty()) {
//        // Get the edge data using destructuring
//        let nextEdge = edgeQueue.dequeue();
//        let nodes = nextEdge.data;
//        let weight = nextEdge.priority;
 
//        if (!uf.connected(nodes[0], nodes[1])) {
//         MST.addEdge(nodes[0], nodes[1], weight);
//         uf.union(nodes[0], nodes[1]);
//      }
//   }
//   return MST;
// }

// let g = new Graph();
// g.addNode("A");
// g.addNode("B");
// g.addNode("C");
// g.addNode("D");
// g.addNode("E");
// g.addNode("F");
// g.addNode("G");

// g.addEdge("A", "C", 100);
// g.addEdge("A", "B", 3);
// g.addEdge("A", "D", 4);
// g.addEdge("C", "D", 3);
// g.addEdge("D", "E", 8);
// g.addEdge("E", "F", 10);
// g.addEdge("B", "G", 9);
// g.addEdge("E", "G", 50);

// g.kruskalsMST().display();