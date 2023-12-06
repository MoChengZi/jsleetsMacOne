const getRandom = () => {
  return Math.floor(Math.random() * 101) <= 50
}

const arr = []

for (let i = 0; i < 100; i++) {
  const random = getRandom();
  arr.push(random)
}

const trueArr = arr.filter(item => item === true);
const falseArr = arr.filter(item => item === false);
const one = trueArr.length;
const two = falseArr.length;

console.log(one);
console.log(two);

const diff = Math.abs(one - two);

console.log('diff: ' + diff);

if (diff === 0) {
  console.log('equal');
}
