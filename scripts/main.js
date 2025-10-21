console.log(27 + 11 + 4 + 24 + 200 + 12 + 8 + 7);

function example() {
  // NOT recommended to use var (globally scoped)
   var num1 = 5
  //  use let instead which is block-level scoped
   let num2 = 8
   num2 = "hello!"

   const name = "Finn"
   console.log(name)
  //  name = "Bobbi" cannot do since constant
   console.log(num1)
   console.log(num2)
}

example()
