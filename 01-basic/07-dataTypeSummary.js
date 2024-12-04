
// Value (primitive)
           // : 7 types : String , Nunber , Boolean ,Null ,Undefined , Symbol , Bigint

  let userName = "Akash Singh Chauhan"; 

  let value = 100 
  let flotValue =100.5

  let isActive = true 
  let outSideWeather = null 

  let detail ; 
  let userDeatil = undefined

  let id = Symbol('123')
  let userId = Symbol('123')
     console.log(id === userId);
     
  let bigNumber = 86386328628628682698987n 



  // refrence (non-primitive)
         // Array , object , function 

  let userArray = ["Akash","Singh","Chauhan"]

  let userObject = {
    name : "Akash",
    age: 13
  }

  let userFunction = function(){
       console.log("Hello World!");
  }


  console.log(typeof userFunction);
  