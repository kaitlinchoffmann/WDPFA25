/*
-Create an array of about 8 numbers. Make a couple divisible by 3: [4,  3,  25,  21,  45, 7, 20];
Print the array.
-Go through the array and count how many numbers are divisible by 3.
-Then, remove that number from the array. —> splice
-Display the array and count.
*/
let numbers = [1, 3, 21, 4, 6, 9, 10, 11]
//             0  1   2  3  4  5   6   7
console.log(numbers)
let count = 0

for(let i = 0; i < numbers.length; i++) {
  if(numbers[i] % 3 == 0) {
    count++
    numbers.splice(i, 1)
    i--
  }
}

console.log(numbers)
console.log(`Number of values divisible by 3 is ${count}`)

// arrow function example

let findSum = (i1, i2, i3) => i1 + i2 + i3

let findAverage = (i1, i2, i3) => findSum(i1, i2, i3) / 3

let avg = findAverage(1, 2, 3)

console.log(findAverage(1,2,3))
console.log(avg)