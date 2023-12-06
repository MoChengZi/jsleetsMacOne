function generateTrees(n) {
  // 当 n 为 0 时，没有有效的树可以生成，因此返回空数组
  if (n === 0) {
    return [];
  }

  // 内部递归函数，用于生成所有可能的二叉搜索树
  // start 和 end 定义了树节点值的范围
  function generate(start, end) {
    const trees = [];

    // 当 start 大于 end 时，不存在节点，因此返回包含 null 的数组
    if (start > end) {
      trees.push(null);
      return trees;
    }
    // 遍历每个可能的根节点值
    for (let i = start; i <= end; i++) {
      // 递归生成所有可能的左子树，节点值小于 i
      const leftTrees = generate(start, i - 1);

      // 递归生成所有可能的右子树，节点值大于 i
      const rightTrees = generate(i + 1, end);

      // 将每个左子树和右子树与当前的根节点 i 结合
      for (const left of leftTrees) {
        for (const right of rightTrees) {
          // 创建新的树节点作为根
          const currentTree = new TreeNode(i);
          currentTree.left = left; // 设置左子树
          currentTree.right = right; // 设置右子树
          trees.push(currentTree); // 将新树添加到结果列表中
        }
      }
    }
    return trees;
  }

  // 调用递归函数，返回所有可能的树
  return generate(1, n);
}

// TreeNode 类定义了树的节点结构
function TreeNode(val = 0, left = null, right = null) {
  this.val = val; // 节点值
  this.left = left; // 左子节点
  this.right = right; // 右子节点
}

const trees = generateTrees(3);
console.log(trees);
