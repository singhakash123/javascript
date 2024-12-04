// note : this work in the object only , not in the function 

const user = {
      username : "Akash Singh Chauhan",
      age : 30 ,
      email : "Akash@123" , 
      greeting(){
             //console.log(`my name is ${this.username} and my age is ${this.age} and my email id is ${this.email}`);
            console.log(this);    
      }
}

// user.greeting()
// user.age = 40 
// user.greeting()

//console.log(this);




// function chai () {
//      let userName = "Akash singh Chauhan"; 
//       // console.log(`my name is ${this.userName}`); // this doesnt use in the function , this use in the object only 
//       console.log(this);
      
// }
// chai()


const chai = function(){
      console.log(this)
}
//chai()


const tea = () =>{
      console.log(this);  
}
// tea()

/// arrow function 
           // arrow function is a function that is defined with the => operator






const addTwo = (num,num1) =>{
   return num + num1
}
const result = addTwo(9,7)
    console.log(result);
    

const addThree = (num,num1) => num + num1 
     console.log(addThree(10,12));
     

const addFoure = (num,num1) => (num + num1)
           console.log(addFoure(10,15));


const addFive = () => ({name : "Akash Singh Chauhan"})
     console.log(addFive());
     

      