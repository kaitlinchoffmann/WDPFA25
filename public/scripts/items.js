/*
Call the fetch() API and assign the return value to a variable if needed.
Pass a handler function into the Promise's then() method. When (and if) the fetch operation succeeds, the promise will call our handler, passing in a Response object, which contains the server's response.
Chain methods if needed using then().
Do something with the response (such as append it to an HTML page).
*/

let itemSection = document.getElementById("items")

fetch("https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json")
.then(response => response.json()) //converting from JSON to JavaScript
.then(data => { // doing something with the JavaScript, such as printing as seen below.
  console.log(data)
  // data.map(i => {
  //   itemSection.innerHTML += `
  //    <div>${i.name}</div>
  //   `
  // })
})
.catch(error => console.error("Error fetching data:", error));

