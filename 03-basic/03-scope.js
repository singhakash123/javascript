

// global scope and local(block) scope 

// global scope is the scope that is outside of any curlsy bracket , it is the scope that is available to all the functions and variables in the program , it is the default scope of the program

// local scope is the scope that is inside the curlsy bracket , it is the scope that is ,available to the variables and functions inside the curlsy bracket , it is the scope that is created when a function is called or a block of code is executed


let x = 10; // global scope variable
function myFunction() {
  let y = 20; // block or local scope variable
  console.log(x); // accessing global scope variable from local scope
  console.log(y); // accessing local scope variable from local scope
}
myFunction()
 // console.log(y); // this will throw an error because y is not defined in global scope




