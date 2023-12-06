import { and, log } from "mathjs";

const alreadyHasElement = (arr, ele) => {
  return arr.some((item) => {
    return item === ele
  })
}

const arr = [1, 2, 3, 4, 5, 6]
const ele = 3
const alreadyHas = alreadyHasElement(arr, ele)
console.log(alreadyHas)
