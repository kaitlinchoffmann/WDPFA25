const express = require("express")
const Recipe = require("../models/recipe")
const router = express.Router()

router.get('/getRecipes', (req, res) => {
  try {
    const recipes = Recipe.getAllRecipes()
    res.send(recipes)
  } catch(err) {
    res.status(401).send({message: err.message})
  }
})

module.exports = router