/*
Let’s create an object constructor for Product.
Product should have a productId, name, price.
Product should have a function that prints the name and price.
I’ll create this using prototypes.
*/

// example using prototypes
function Product(id, name, price) {
  this.id = id
  this.name = name
  this.price = price
}

Product.prototype.getDetails = function() {
  return `Name: ${this.name}, Price: ${this.price}`
}

const product1 = new Product(123, "table", 100)

console.log(product1)

let output = product1.getDetails()
console.log(output)

//example using classes
class Product2 {
  constructor(id, name, price) {
    this.id = id
    this.name = name
    this.price = price
  }
  getDetails() {
    return `Name: ${this.name}, Price: ${this.price}`
  }
}

const product2 = new Product(555, "chair", 75)

console.log(product2)

let output2 = product2.getDetails()
console.log(output2)