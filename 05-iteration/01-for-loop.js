// 1) 

for (let i = 0; i < 5; i++) {
  const element = i
       // console.log(element);  
}



// 2 )

for (let i = 5; i > 0 ; i--) {
   // console.log(i);
}


// 3) : 

let arrayValue = [1,2,3,4,5,6,7,8,9]
     for (let j = 0; j < arrayValue.length; j++) {
         //  console.log(arrayValue[j]);    
     }



 // 4)    
let nestedArray = [[1,2,3],[4,5,6],[7,8]]

// Outer loop
for (let k = 0; k < nestedArray.length; k++) {
  
    
  // Inner loop
  for (let l = 0; l < nestedArray[k].length; l++) {
                  // console.log(nestedArray[k][l]);   // Print each element in the sub-array    
  }

}


// 5) 
// for (let i = 0; i < 5; i++) {
//   // const element = i
//    if (element === 3) {
//     //console.log('3 is best number');
//    }
//     // console.log(element);
// }



for (let i = 1; i <= 10; i++) {
    for (let j = 0; j <= 10; j++) {
       // console.log(`${i} * ${j} => ${i*j}`);   
    }
  
}


const fruits = ["Apple","banana","orange"]

for (let i = 0; i < fruits.length; i++) {
// console.log(fruits[i]);
}


// break and continue 
let mySubjects = ["Node js" , "Express js" , "React js" , "Mongo"] 
for (let j = 0; j < mySubjects.length; j++) {
     let element = mySubjects[j]
     if (element === "React js") {
       // console.log('exit after react');
        break
     }
    // console.log(element);
}

let myExp = ["Apple","Node","React"]
for (let j = 0; j < myExp.length; j++) {
  const element = myExp[j]
  if (element === "Node") {
      console.log('skip only node');
      continue
  }
  console.log(element);
}