let arr = Array(10).fill(0)

let numTrees = function (n) {
  if (arr.length < n) {
    console.log('arr的长度已扩张...');
    arr = Array(n + 1).fill(0)
    console.log('nowArrLength = ' + arr.length);
  }

  if (n === 0 || n === 1) {
    arr[n] = 1
    return 1
  }

  if (arr[n] !== 0) {
    return arr[n]
  }

  let res = 0

  for (let i = 1; i <= n; i++) {
    res += numTrees(i - 1) * numTrees(n - i)
  }

  arr[n] = res
  return res
};

const test = numTrees(100)
console.log(test)
console.log('arr = ' + arr);

