/*
BMI < 18.5: Underweight         
18.5 ≤ BMI ≤ 25: Normal
25 < BMI ≤ 30: Overweight 
BMI > 30: Obese
bmi = (weight * 703) / (height ^2)
*/
let weight = 150
let height = 64
let bmi = (weight * 703)/(height**2)
let healthState;

console.log(bmi)
console.log((weight * 703)/(height**2))

if(bmi < 18.5) {
  healthState = "underweight"
} else if(bmi <= 25) {
  healthState = "normal"
} else if(bmi <= 30) {
  healthState = "overweight"
} else {
  healthState = "obese"
}

console.log("BMI = " + bmi + ", health state is " + healthState)
console.log(`BMI = ${bmi.toFixed(2)}, health state is ${healthState}`)
