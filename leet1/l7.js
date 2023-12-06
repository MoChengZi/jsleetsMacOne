const arrsToString = (arr) => {
  const res = []
  for (let i = 0; i < arr.length; i++) {
    res.push(arr[i].join(''))
  }
  return res
}

const testArr = [["a"],["b"],["c"]]
console.log(arrsToString(testArr))

