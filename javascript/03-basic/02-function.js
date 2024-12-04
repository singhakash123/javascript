

/// Rest operator 

function calculatePrice (value,number,...num1){
          return num1
}
const result = calculatePrice(100,200,300,400,500)
    console.log(result);
    



// 
const user = {
     name : "Akash Singh Chauhan", 
     age : 26 
}

function handleObject (objectUser) {
        return `my name ${objectUser.name} and my age is ${objectUser.age}`
}
//const returnValue = handleObject(user)
const returnValue = handleObject({
  name : "Akash Singh Chauhan",
  age : 26
})
    console.log(returnValue);
    

const array = [100,200,300,400]
  
function handleArray (myArray){
       return myArray[1]
}
    // const returnArrayValue = handleArray(array)
    const returnArrayValue = handleArray([100,200,300,400])
      console.log(returnArrayValue);
      