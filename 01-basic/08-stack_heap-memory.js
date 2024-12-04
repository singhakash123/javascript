// stack (primitive) copy


let myYoutubeName = "Akash@youtube.com"
let anotherYoutubeName = myYoutubeName
    anotherYoutubeName = "Rohit@youtube.com"
console.log(anotherYoutubeName);



// heap (non-primitive) refrence of orignal value 
let user = {
  email : "Akash@123",
  age:25
}
let userTwo = user 
userTwo.email = "Rohit@123"

console.log(user.email);
console.log(userTwo.email);

