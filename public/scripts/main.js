// 1. retrieve element where adding data
let recipes = document.getElementById("recipes")

// 2. Make a request to the API
fetch("https://www.themealdb.com/api/json/v1/1/search.php?f=a")
  // 3. Convert the response into JSON
  .then(response => response.json())
  // 4. Use the data
  .then(data => {
   console.log(data.meals);
  //  data.meals.map(i => console.log(i))
   /*
    data.meals.map(i => {
      recipes.innerHTML += `
        <h3>${i.strMeal}</h3>
        <img src="${i.strMealThumb}">
      `
    })
      */
  })
  // 5. Handle errors
  .catch(error => console.error("Error fetching data:", error));
