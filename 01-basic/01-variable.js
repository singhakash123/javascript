
const accountId = 864863
let accountEmail = "Akash@123"
var accountPassword = '12345'
accountCity = "Jaipur"
let accountState ; 


 // accountId = 2   // not allowed 

 accountEmail = "Rohit@123"
 accountPassword = '63636'
 accountCity = 'Indore'
   //accountState = 'mp'


                /*
Key points about const:
Block-scoped: Similar to let, const is block-scoped, meaning the variable is only accessible within the block in which it is defined (such as inside a function, if statement, or loop).
No reassignment: You cannot reassign the value of a const variable once it has been initialized.
Initialization required: A const variable must be initialized at the time of declaration. You cannot declare a const variable without assigning a value to it.
Mutable objects: If a const variable holds an object or array, the contents can still be modified (such as adding properties to an object or changing elements of an array).

                */
const person = { name: "Alice", age: 25 };
person.age = 26; // This is allowed because we're modifying the contents of the object, not reassigning the variable itself.
console.log(person);  // Output: { name: "Alice", age: 26 }

const numbers = [1, 2, 3];
numbers.push(4);  // This is allowed because we're modifying the contents of the array, not reassigning the variable.
console.log(numbers);  // Output: [1, 2, 3, 4]

/*
let: Block-scoped and can be reassigned but cannot be re-declared in the same scope.
const: Block-scoped and cannot be reassigned, but the value it holds can be mutable (if it is an object or array).

Conclusion:
The const keyword is useful for variables whose values you do not intend to change after initialization, and it helps ensure that you don't accidentally overwrite or reassign a variable's value. However, if the variable holds an object or array, the contents of the object/array can still be modified.
*/

/* 
prefer not to use var 
because of an issue with block scope and functionl scope
*/

/*
variabe name should be in CamelCase  , 

Here are some examples of camelCase:
           myVariableName
           calculateTotalAmount
           isUserAuthenticated
*/ 

 console.table([accountId,accountEmail,accountPassword,accountCity,accountState])




 // Sumarray : 
          // const and let is a block scope or ( local scope ) variable 
      
   
