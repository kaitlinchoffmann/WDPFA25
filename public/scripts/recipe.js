// 1. retrieve element where adding data
let recipes = document.getElementById("recipe")

// 2. Make a request to the API
fetch("http://localhost:3000/recipes/getrecipes")
  // 3. Convert the response into JSON
  .then(response => response.json())
  // 4. Use the data
  .then(data => {
  //  console.log(data.meals);
  //  data.meals.map(i => console.log(i))
    data.map(i => {
      recipes.innerHTML += `
        <h3>${i.recipeId}</h3>
        <p>${i.recipeName}</p>
      `
    })
  })
  // 5. Handle errors
  .catch(error => console.error("Error fetching data:", error));
