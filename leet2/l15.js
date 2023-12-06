function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val
  this.left = left === undefined ? null : left
  this.right = right === undefined ? null : right
}

const root = new TreeNode(0)
root.left = new TreeNode(1)
root.right = new TreeNode(2)
root.left.left = new TreeNode(4)
root.left.right = new TreeNode(5)
root.right.left = new TreeNode(6)
root.right.right = new TreeNode(7)
root.left.left.left = new TreeNode(8)
root.left.left.right = new TreeNode(9)
root.right.right.right = new TreeNode(10)
root.right.right.left = new TreeNode(11)

const middlePrintTree = (root) => {
  if (root === null) {
    return
  }

  console.log(root.val)
  middlePrintTree(root.left)
  middlePrintTree(root.right)
}

const leftPrintTree = (root) => {
  if (root === null) {
    return
  }

  leftPrintTree(root.left)
  console.log(root.val);
  leftPrintTree(root.right)
}


const rightPrintTree = (root) => {
  if (root === null) {
    return
  }

  rightPrintTree(root.right)
  console.log(root.val);
  rightPrintTree(root.left)

}

console.log('middlePrintTree : ');
middlePrintTree(root)
console.log('----------------------------------------------');
console.log('leftPrintTree : ');
leftPrintTree(root)
console.log('----------------------------------------------');
console.log('rightPrintTree : ');
rightPrintTree(root)
console.log('----------------------------------------------');
