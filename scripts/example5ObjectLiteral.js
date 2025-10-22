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