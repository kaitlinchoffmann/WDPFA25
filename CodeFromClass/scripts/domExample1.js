// alert("Welcome to my site!!")

document.querySelector('h1').style.color = "hotpink"

// 1. access form by id
let noteForm = document.getElementById('noteForm')

// 2. add your event listener
noteForm.addEventListener('submit', addNote)

// 3. create your function to be triggered
function addNote(e) {
  e.preventDefault()

  // 4. create an object literal. (will send to server later on)
  const note = {
    noteContent: document.getElementById('note').value
  } 

  console.log(note) // in future, we will send to backend/server
}

function validPassword(password) {
  return password.length >= 8
}