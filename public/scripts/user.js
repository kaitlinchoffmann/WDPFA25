// id = registerForm
let registerForm = document.getElementById("registerForm")
if(registerForm) registerForm.addEventListener('submit', register)

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