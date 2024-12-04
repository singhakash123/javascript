const name = "Akash"
const age = 20 

// console.log(name +" "+ age + " " + "Singh Chauhan");

// use string interpulation // because we can use some method also 

console.log(`Hello!,my name is ${name.toUpperCase()} and my age is ${age}`);




const gameName = "Singh"
   console.log(gameName[0]);
   console.log(gameName.length);
   console.log(gameName.toUpperCase());
   console.log(gameName.charAt(2));
   console.log(gameName.indexOf('S'));
   
   
   
const newString = gameName.substring(0,3)   
     console.log(newString);   // but not including, the character indicated by end
     
const anotherString = gameName.slice(0,3)
   console.log(anotherString);

              // note : slice and substring have only one difference , slice accept negative index while substring accept only positive index 
             // length start from 1 and index start from 0 
             // length is a property not a method  

const newStringOne = "   Akash "
   console.log(newStringOne.trim());


const url = 'https%20/hitesh@gmail.com'
     console.log(url.replace('%20',"-"));
     
  
     console.log(url.includes(20));
     
   /// split 
let text = "apple,banana,cherry";  // A string with items separated by commas
let result = text.split(",");       // The split() method divides the string at each comma
      console.log(result);                // Output the resulting array to the console
     
let sentence = "This is an example sentence";
let words = sentence.split(" ");
      console.log(words);
   
         
let date = "2024-12-01";
let parts = date.split("-");
      console.log(parts);
    
let text1 = "apple,banana,cherry,grape";
      let result1 = text1.split(",", 2);
      console.log(result1);
      // Output: ["apple", "banana"]
           

let sentence1 = "one two three four five";
      let words1 = sentence1.split(" ", 3);
      console.log(words1);

      


const stringValue = new String('Akash Singh Chauhan')
         console.log(stringValue); // [String: 'Akash Singh Chauhan']
         