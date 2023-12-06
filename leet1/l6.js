const obj = {
  2: 'abc',
  3: 'def',
  4: 'ghi',
  5: 'jkl',
  6: 'mno',
  7: 'pqrs',
  8: 'tuv',
  9: 'wxyz'
}

let getCombinations = (a, b, obj) => {
  const aele = obj[a]
  const bele = obj[b]
  console.log(aele, bele)
  let res = []
  for (let i = 0; i < aele.length; i++) {
    for (let j = 0; j < bele.length; j++) {
      const one = aele[i];
      const two = bele[j];
      res.push(one + two)
    }
  }
  return res
}

let result = getCombinations('2', '3', obj)
console.log(result)
