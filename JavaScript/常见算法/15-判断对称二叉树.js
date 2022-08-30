// [8 null 6 6 null, 5 7 7 5]
test()
let node = {
  val: 8,
  left: {
    val: 6,
    left: {
      val: 5
    },
    right: {
      val: 8
    }
  },
  right: {
    val: 6,
    left: {
      val: 7
    },
    right: {
      val: 5
    }
  }
}
function checkTree(root) {
  if (root == null) {
    return true;
  }

  function check(left, right) {
    if (left == null && right == null) {
      return true
    }
    if (left && right) {
      return left.val === right.val && check(left.left, right.right) && check(left.right, right.left)
    }
    return false;
  }
  return check(root.left, root.right)
}

console.log(checkTree(node))