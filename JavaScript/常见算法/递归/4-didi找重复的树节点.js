/*

     1
   2   3
 4    2  4
    4   


output = [[4], [2,4]] 


*/

function findNode(root) {

  let dups = {}
  const result = [];
  function processData(node) {
    if (node == null) return ''
    const left = processData(node.left)
    const right = processData(node.right)

    const subtree = `${node.val}, ${left}, ${right}`
    if (dups[subtree] === 1) {
      dups[subtree] += 1
      result.push(node)
    } else {
      dups[subtree] = 1
    }

    return subtree

  }

  processData(root)

  return result
}
