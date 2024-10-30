/*
Write a function called breadthFirstSearch that takes two nodes as arguments and
will traverse the given graph breadth-first, returning true if there is a path
from the first node to the second, and false if there is not.

For this exercise, try to write your code from scratch. It's good practice!
*/

const adjList = {
    1: [2, 5],
    2: [1, 3, 5],
    3: [2, 4],
    4: [3, 5],
    5: [1, 2, 4],
    6: []
}

function breadthFirstSearch(start, end) {

  // const res=[]

  const queue = [start]; // Initialize the queue with the starting node
  const visited = new Set([start]); // Track visited nodes

  while (queue.length) {
    const curr = queue.shift(); // Dequeue the next node

    // Check if we've reached the end node
    if (curr === end) return true;

    const neighbors = adjList[curr]; // Get neighbors of the current node

    // Iterate through neighbors
    for (const neighbor of neighbors) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor); // Mark neighbor as visited
        queue.push(neighbor); // Enqueue the neighbor
      }
    }
  }

  return false; // Return false if the end node is not reachable
}
  // while(queue.length){
  //   const current=queue.shift()
  //   res.push(current)
  //   const neighbors=adjList[current];
  //   neighbors.forEach(neighbor=> {
  //     if(!visited.has(neighbor)){
  //       queue.push(neighbor)
  //       visited.add(neighbor)
  //     }
  //   })
  // }
  // if (res.includes(start) && res.includes(end)) return true;
  // else return false;
// }
// console.log(breadthFirstSearch(1, 3)); // -> true
// console.log(breadthFirstSearch(4, 1)); // -> true
// console.log(breadthFirstSearch(6, 1)); // -> false


/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = breadthFirstSearch;
