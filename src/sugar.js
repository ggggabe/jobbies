import crypto from 'crypto'

export class Sugar {
  static move (arr, srcIndex, destIndex) {
    const direction = destIndex - srcIndex

    if (!direction) return [...arr]

    return direction < 0 ? [
      ...arr.slice(0, destIndex),
      arr[srcIndex],
      ...arr.slice(destIndex, srcIndex),
      ...arr.slice(srcIndex + 1)
    ] : [
      ...arr.slice(0, srcIndex),
      ...arr.slice(srcIndex + 1, destIndex),
      arr[srcIndex],
      ...arr.slice(destIndex)
    ]
  }
}

export class FullyConnectedGraph {
  constructor() {
    this.graph = {}
    this.size = 0
  }

  addNode(node) {
    node.hash = this.size

    node.connected = Object.values(this.graph).reduce(
      (graph, n) => {
        console.log(graph,n)
        n.connected[node.hash] = node
        graph[n.hash] = n

        return graph
      }, {})

    this.graph[node.hash] = node
    this.size++
  }
}

