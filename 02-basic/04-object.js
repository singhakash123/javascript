// const tinderUser = new Object()  // this is called singleton

const tinderUser = {}
tinderUser.id ="123ABC"
tinderUser.name = "Akash"
tinderUser.email = "Akash@123"

console.log(tinderUser);
console.log(Object.values(tinderUser));
console.log(Object.keys(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty("email"));

const regularUser = {
       age : 25 , 
       userName:{
           userFullName:{
            firstName:"Akash",
            LastName: "Chauhan"
           }
       }
}

console.log(regularUser.userName?.userFullName.firstName);

// The ?. syntax in JavaScript is called optional chaining. It allows you to safely access properties of an object that may be null or undefined, without causing a runtime error.
 // If a value is missing (i.e., null or undefined) and you use optional chaining (?.), undefined will be returned, not null.

 /*
 Why undefined and not null?
undefined is the default value JavaScript returns when something is missing or undefined.

null is a special value used explicitly to indicate "no value" or "intentional absence of any object value." It is not automatically returned when a property doesn't exist or is missing, like undefined is.
So, when using optional chaining and the value is missing or null, the result will always be **undefined**, never null.

mplicit means something is done automatically or without being stated clearly, while explicit means something is stated clearly and directly.

*/

const obj1 = { 1: "a" , 2:"b"}
const obj2 = {3:"c",4:"d"}

 // const obj3 = { obj1, obj2}
 // const obj3 = Object.assign({},obj1,obj2)  // assign(target: {}, source: any)
  const obj3 = {...obj1,...obj2}    

    console.log(obj3);
    

const user = [
     {
       id:1,
       name:"Rohit"
     },
     {
      id:2,
      name : "Akash"
     }
    ]
    console.log(user[1].id);
    