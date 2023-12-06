class TreeNode {
  constructor(val, left, right) {
    this.val = val === undefined ? 0 : val
    this.left = left === undefined ? null : left
    this.right = right === undefined ? null : right
  }
}

const root = new TreeNode(10);
root.left = new TreeNode(1)
root.right = new TreeNode(2)
root.left.left = new TreeNode(3)
root.left.right = new TreeNode(4)
root.right.left = new TreeNode(5)
root.right.right = new TreeNode(6)
root.left.left.left = new TreeNode(7)

const middlePrintTree = (root) => {
  if (!root) {
    return
  }
  middlePrintTree(root.left)
  console.log(root.val)
  middlePrintTree(root.right)
}

middlePrintTree(root)
