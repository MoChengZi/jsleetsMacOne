const valid = ["()()()()", "(()()())", "()(()())", "(()())()", "((()()))", "()()(())", "()(())()", "(()(()))", "(())()()", "((())())", "()((()))", "((()))()", "(((())))"]

const myAnswers = ["(((())))", "((()()))", "((())())", "((()))()", "(()(()))", "(()()())", "(()())()", "(())(())", "(())()()", "()((()))", "()(()())", "()(())()", "()()(())", "()()()()"]

const answerlength = valid.length
const mylength = answerlength.length

console.log('answerlength = ' + answerlength)
console.log('mylength = ' + mylength)
const has = (old, tartget) => {
  return old.some(item => item === tartget)
}

const out = []
for (let i = 0; i < myAnswers.length; i++) {
  if (!has(valid, myAnswers[i])) {
    out.push(myAnswers[i])
  }
}
console.log(out)
