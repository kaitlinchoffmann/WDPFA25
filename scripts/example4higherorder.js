const followers = [
  {
    userID: 12345,
    userName: "jdoe",
    following: false
  },
  {
    userID: 55555,
    userName: "spongebob",
    following: true
  },
  {
    userID: 56734,
    userName: "cathy123",
    following: true
  }
]

followers.forEach(i => console.log(i.userName))

const userNames = followers.map(i => i.userName)
console.log(userNames)

const following = followers.filter(i => i.following === true)
console.log(following)

// other example 
function isFollowing(follower) {
  return follower.following === true
}

const following2 = followers.filter(isFollowing)
console.log(following2)

// example of chaining 
const following3 = followers.filter(i => i.following === true).map(i => i.userID)

console.log(following3)