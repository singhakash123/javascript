//.forEach() doesn't return a new array or any value. It's used for executing side effects like logging or modifying external variables.
//.map() and .filter(): Return a new array. creates and returns a new array based on the results of the callback function.
// .reduce(): Returns a single value (not a new array).
// So, your statement that "map(), filter(), and reduce create and return a new array" is only partially true. map() and filter() return a new array, but reduce() does not. It returns a single accumulated value instead.

const myArray = [1,2,3,4,5,6,7,8,9]

// for each 
// const myForEach = myArray.forEach((num)=>{
//            return num 
// })
// console.log(myForEach); // note : for each doesnt return any value , either you return by yourself 


// filter 

const myFilter = myArray.filter ((num)=>{
     return  num > 5
})
//console.log(myFilter);


// map 
const myMap = myArray.map ((num)=>{
  return  num + 10
})
//console.log(myMap);


// reduce 
const myReduce = myArray.reduce((currentValue,accumlate)=>{
       return  currentValue + accumlate
},0)

//console.log(myReduce);



// Chainhing 

const myAllValues = [12,14,16,17,18]

const finalOutPut = myAllValues
.map((num)=>{
  return  num*2
})
.filter((num)=>{
   return num>10
})
.reduce((currentValue,accumlate)=>{
     return currentValue + accumlate
},0)
//console.log(finalOutPut);



const books = [
  { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
  { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
  { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
  { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
  { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
  { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
  { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
  { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
  { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];

let filterValue = books.filter((bk)=> bk.genre === "Fiction" && bk.publish > 1980 )
    filterValue = books.filter((bk)=>bk.genre === "Fiction" && bk.edition >1990 )
console.log(filterValue);
