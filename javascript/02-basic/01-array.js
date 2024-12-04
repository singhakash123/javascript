// Array 

const myArray2 = new Array(1,2,3,4,5)
const myHeros = ["Akash","Singh","Chauhan"]
     console.log(myHeros[0]);
     


//************array method******** */

const myArray = [0,1,2,3,4,5]
    console.log(myArray[0]);

myArray.push(9)
myArray.push(10)
myArray.pop()
myArray.unshift(10)
myArray.shift()

console.log(myArray.includes(9));
console.log(myArray.indexOf(3));

console.log(myArray);

const newArray = myArray.join() // Adds all the elements of an array into a string, separated by the specified separator string.
  console.log(myArray);
   console.log("join Method :",newArray);
   


   // slice and splice 
               // slice doesnt change orignal array 
               // splice change orignal array 

  const arrayForMethod = [1,2,3,4,5,6,7,8,9]
                  console.log("orignal Array : " ,arrayForMethod);
  const sliceMethodElement = arrayForMethod.slice(0,3)  // start from 0 index and end at 2nd index , last index will not be inclueded
                  console.log("sliceMethod Value : " ,sliceMethodElement);
                  console.log("orignal Value after slice : " , sliceMethodElement);

  const spliceMethod = arrayForMethod.splice(1,4)  // start from index 1 and remove 4 element from 1st index 
                  console.log("spliceMethod Value : " ,spliceMethod);
                  console.log("orignal value after splice :", arrayForMethod);
                  
                  
                  
        
        