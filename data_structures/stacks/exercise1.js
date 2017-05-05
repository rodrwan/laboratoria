const sumArrayElements = (arr) => arr.reduce((a, b) => a + b, 0)

function sumArrayElements1 (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i]
  }
  return sum
}

let arr = [1,2,3,4]
console.log(sumArrayElements(arr))
console.log(sumArrayElements1(arr))
arr = [5,4,8,9]
console.log(sumArrayElements(arr))
console.log(sumArrayElements1(arr))
