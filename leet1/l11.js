var divide = function (dividend, divisor) {
  let flag

  dividend * divisor < 0 ? flag = -1 : flag = 1
  let dividendAbs = Math.abs(dividend)
  let divisorAbs = Math.abs(divisor)

  let res = 0
  while (dividendAbs >= divisorAbs) {
    res++
    dividendAbs -= divisorAbs
  }
  return res * flag
};

let a = 13
let b = 3
console.log(divide(a, b))
