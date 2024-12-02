
function sayMyName (){
     console.log('A');
     console.log('K');
     console.log('A');
     console.log('S');
     console.log('H');
}
// sayMyName()


function addTwoNumber (number1,number2){
    console.log(number1 + number2);
}
// addTwoNumber(10,12)
//addTwoNumber(10,"12")
//addTwoNumber('A',10)


// 
function addNumber (number1,number2){
  //  let result = number1 + number2
  //     return result

  return number1 + number2
}
const result = addNumber(10,15)
  // console.log("Result :",result);
   



function loginUser (name = "Rohit"){
       if (!name) {
            console.log("please enter your name");
            return 
       }
       return `${name} logged in`
}
const user = loginUser("Akash")
     console.log(user);
     