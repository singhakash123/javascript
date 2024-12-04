
// if 

// syntax
// if (true) {
  
// }


const isUserLoggedIn = true 
const temprature = 40 
if (isUserLoggedIn) {
    console.log("excuted");
} else {
  console.log("not excuted");
}

console.log('temprate is greater then 50 ');

// < , > , <= , >= , == , === , != , !== , 




// scope 
    // var is treated as a gloabl scope 
    // let and const is treated as a block scope

const score = 200 
if (score > 100) {
     const power = "Fly"
     console.log(`user power is : ${power}`);
}
   // console.log(`user power is : ${power}`);



// shortHand property of if 
const balance = 1000; 
if (balance > 500) console.log('test'); 


// if - else if 
const bankBalance  = 500 

if (bankBalance > 600) {
    console.log('excuted 1');
} else if (bankBalance > 500) {
    console.log('excuted 2')
} else if (bankBalance > 300 ) {
    console.log('excuted 3');
} else {
     console.log("excuted 4"); 
}


// multiple condition 
const userLoggedIn = true 
const debitCard = true 
const loggedInFromGoogle = false 
const loggedInFromEmail = true 

if (userLoggedIn && debitCard && 2 === 2) {
      console.log("Allow to buy course");
} else if (loggedInFromEmail || loggedInFromGoogle) {
    console.log('User Logged in  ');
}
