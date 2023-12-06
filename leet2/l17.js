const allArr = [];
allArr.push(0)
allArr.push(1)
allArr.push(2)

const Fibonacci = (n) => {

  if (n === 1 || n === 2) {
    return 1
  }
  if (allArr[n]) {
    return allArr[n]
  }
  const res = Fibonacci(n - 1) + Fibonacci(n - 2);
  allArr.push(res)
  return res
}

const temp = Fibonacci(10000)
console.log(temp);

// for (let i = 3000; i <= 9000; i++) {
//   let tearr = []
//   for (let j = 1; j <= i; j++) {
//     const one = new Date()
//     tearr.push(Fibonacci(j))
//     const two = new Date()
//     console.log('当前的长度为：', i, '消耗的时间为： ', two - one);
//   }
// }
