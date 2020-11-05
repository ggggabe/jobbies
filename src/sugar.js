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
