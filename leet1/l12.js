function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}

const root = new TreeNode(0)
root.left = new TreeNode(1)
root.right = new TreeNode(2)
root.left.left = new TreeNode(3)
root.left.right = new TreeNode(4)
root.right.left = new TreeNode(5)



const printTreeNodes = (root) => {
  const helper = (root, arr) => {
    if (!root) {
      return
    }
    helper(root.left, arr)
    arr.push(root.val)
    helper(root.right, arr)
  }

  const arr = []
  helper(root, arr)
  console.log(arr)
}

printTreeNodes(root)
