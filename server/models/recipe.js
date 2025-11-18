// Pseudo database. Will add MySQL tables later.
const recipes = [
  {
    recipeId: 34212,
    recipeName: "chicken parm"
  },
  {
    recipeId: 32352,
    recipeName: "mac and cheese"
  }
]

function getAllRecipes() {
  return recipes
}

module.exports = { getAllRecipes }