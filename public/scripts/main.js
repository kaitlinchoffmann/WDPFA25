// 1. Make a request to the API
fetch("https://www.themealdb.com/api/json/v1/1/search.php?f=a")
  // 2. Convert the response into JSON
  .then(response => response.json())
  // 3. Use the data
  .then(data => {
    console.log(data.meals); // See meal info in the console
  })
  // 4. Handle errors
  .catch(error => console.error("Error fetching data:", error));
