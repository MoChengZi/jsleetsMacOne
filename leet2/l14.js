
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val
  this.left = left === undefined ? null : left
  this.right = right === undefined ? null : right
}

let root = new TreeNode(4)
root.left = new TreeNode(6)
root.right = new TreeNode(2)
root.right.right = new TreeNode(5)


function printTree(root) {
  if (!root) {
    return
  }
  printTree(root.left)
  console.log(root.val);
  printTree(root.right)
}

// ------------------------------------------------------------------------------------

const alterNodes = (root) => {
  if (root.left.val > root.val) {
    let main = root
    let left = root.left
    let orgright = main.right

    main.left = left.left
    main.right = left.right
    left.left = main
    left.right = orgright
    return left;
  }
}

printTree(root)

console.log('-------------');
const after = alterNodes(root)
printTree(after)

