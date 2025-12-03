// Register Form
// 1. Store form in a variable
let registerForm = document.getElementById("registerForm")

// 2. Add event listener
if(registerForm) registerForm.addEventListener('submit', register)

// 3. Create applicable function
function register(e) {
  e.preventDefault()

  pswd = document.getElementById("pswd").value
  confirmPswd = document.getElementById("confirmPswd").value
  let h1 = document.getElementById("welcome")

  if(validPassword(pswd, confirmPswd)) {
    const user = {
      username: document.getElementById("username").value,
      email: document.getElementById("email").value,
      password: pswd
    }

    let userJSON = JSON.stringify(user) 
    console.log(userJSON)
    console.log(JSON.parse(userJSON))
    

    h1.innerHTML = `Welcome ${user.username}!`
    document.getElementById("username").value=""
    document.getElementById("email").value=""
    
  } else {    
    h1.innerHTML = `Passwords must match!!`
  }
  document.getElementById("pswd").value=""
  document.getElementById("confirmPswd").value=""
}

function validPassword(password, confimPassword) {
  return password === confimPassword;
}

/*
// local storage functions
export function setCurrentUser(user) {
  localStorage.setItem('user', JSON.stringify(user))
}

export function getCurrentUser() {
  return JSON.parse(localStorage.getItem('user'))
}
// example accessing userId for second entity
// let currentUser = getCurrentUser()
// let userId = currentUser.userId

export function removeCurrentUser() {
  localStorage.removeItem('user')
  window.location.href = "index.html"
}
*/