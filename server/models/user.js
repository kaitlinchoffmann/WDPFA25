// Pseudo database. Will add MySQL tables later.
const users = [
  {
    userId: 12345,
    userName: "cathy123",
    password: "icecream"
  },
  {
    userId: 55555,
    userName: "bobbi",
    password: "badpasswd"
  }
]

// CRUD Operation
// READ for grabbing all users
function getAllUsers() {
  // if(users.length == 0) {
  //   throw Error("No users to send over!!")
  // }
  return users
}

/* Eventually will add all CRUD operations:
Create: Register function
Read: Login function
Update: Update password/name function
Delete: Delete user account function*/

/* We need to add each function we create to "module.exports", or 
   else cannot access the functions in our route files*/
module.exports = { getAllUsers }