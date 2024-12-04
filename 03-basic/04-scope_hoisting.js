


function one () {
       let userName = "Akash Singh Chauhan";

       function two (){
         let website = "Youtube"
              console.log(`my name is ${userName} and my website is ${website}`);
       }

          // console.log(website);  ReferenceError: website is not defined
       two()  
}
one()
                   //console.log(userName); // ReferenceError: userName is not defined


 if (true) {
     let userName = "Rohit" ; 
     if (userName === "Rohit") {
         let email = "Akash@123"
         console.log(`my name is ${userName} and email is ${email}`);
     }
                     // console.log(email);     // ReferenceError: email is not defined
 }                  

                    // console.log(userName);   // ReferenceError: userName is not defined
 


console.log(addOne(10));
function addOne(num){
       return num + 2
}


// console.log(addTwo(20)); // ReferenceError: Cannot access 'addTwo' before initialization

const addTwo = (num) =>{
      return num + 1
}
console.log(addTwo(20));
