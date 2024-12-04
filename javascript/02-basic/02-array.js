

const marvel_heros = ["spiderman","superman","fangman"]
const dc_heros = ["saktiman","babbar"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// conacat return newArray
// const concatArray = marvel_heros.concat(dc_heros)
//     console.log(concatArray);


// spread operator 
const spreadOperator = [...marvel_heros,...dc_heros]
     console.log(spreadOperator);
     

// flat Method (2d)
const array = [1,2,3,[4,5,6],7,8]
const flatMethod = array.flat(Infinity)
    console.log(flatMethod);  // it return new array 
    


console.log(Array.isArray('Rohit'));



 // convert  into  array 
     // string and number 
     const userName = "Akash"
     const convertIntoArray = Array.from(userName) 
          console.log(convertIntoArray);

    // object 
    const userObject = {name:"Akash",age:25}
        const objectValue = Object.values(userObject)
           console.log(objectValue);
           

// array.of
let score1 = 100 
let score2 = 200 
let score3 = 300 
    
let arrayOf = Array.of(score1,score2,score3)
   console.log(arrayOf);
   
