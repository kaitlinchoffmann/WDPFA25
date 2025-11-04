// id = registerForm
let registerForm = document.getElementById("registerForm")
if(registerForm) registerForm.addEventListener('submit', register)

function register(e) {
  e.preventDefault()

  pswd = document.getElementById("pswd").value
  confirmPswd = document.getElementById("confirmPswd").value

  if(validPassword(pswd, confirmPswd)) {
    const user = {
      username: document.getElementById("username").value,
      email: document.getElementById("email").value,
      password: pswd
    }

    console.log(user)
  } else {
    console.log("Passwords must match!!")
  }

}

function validPassword(password, confimPassword) {
  return password === confimPassword;
}