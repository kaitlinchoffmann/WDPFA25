// pet example
const pet = {
  cutenessScale: 10,
  fur: true,
  color: "grey",
  name: "Dollie",
  breed: "tabby cat",
  chipID: false,
  nicknames: ["Dollie Parton", "Martin", "cat"]
}

console.log(pet)
console.log(pet.name)
console.log(pet.fur)

pet.name = "Martin"
console.log(pet)

pet.whiskerLength = 5

console.log(pet)


// user example
const user = {
  username: "cathy123",
  password: "icecream",
  firstName: "Cathy",
  lastName: "Smith"
}

// user = 5  cannot change the type due to user being "const"
// user = true

user.lastName = "Doe"
user.email = "cathy@fakemail.com"

console.log(user)
console.log(user.password)

// constructor for Posts

function Post(content, picture, location, title) {
  this.content = content
  this.pic = picture
  this.location = location
  this.title = title
}

Post.prototype.sendToBackend = function() {
  console.log("Sent to backend!")
}

Post.prototype.printOutput = function() {
  console.log(`Title: ${this.title}, Content: ${this.content}`)
}

let content = "Omg my first post!! :)"
const post1 = new Post(content, "picture of petey", "NY", "First Post Everrrr")
console.log(post1)
post1.sendToBackend()
post1.printOutput()

const post2 = new Post("Here in LA!!!", "pic of petey at venice beach", "LA")
console.log(post2)
post2.sendToBackend()
post2.printOutput()