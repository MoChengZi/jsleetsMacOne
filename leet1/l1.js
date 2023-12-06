const check = (str) => {
  for (let i = 0; i < str.length / 2; i++) {
    if (str[i] !== str[str.length - 1 - i]) {
      return false
    }
  }
  return true
}
const string = 'abcba'
const string1 = 'abcaaaabbc'
console.log(check(string));
console.log(check(string1));

