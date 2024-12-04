//Key points:
// The for...of loop works with iterable objects (objects that implement the Symbol.iterator method).
// It does not work on plain objects. For iterating over properties of an object, you'd typically use for...in or Object.keys(), Object.values(), or Object.entries() in combination with for...of.

/*
Summary of Data Types that for...of can loop through:
Arrays
Strings
Maps
Sets
Typed Arrays
NodeLists (DOM collections)
Arguments (in functions)
Generators
Custom Iterable Objects
The common theme is that the data type must be iterable, meaning it implements the Symbol.iterator method, which includes the majority of collections that work in a sequential order. Non-iterable objects, like plain objects (e.g., {a: 1, b: 2}), do not work with for...of.

*/
// ["","",""]
// [{}.{},{}]

const myArray = [1,2,3,4,5,7,8]
for (const element of myArray) {
       console.log(element); 
}

const greeting = "Hello Akash"
for (const element of greeting) {
        console.log(element);
}


// note : map is use for the uniqueNess and map doesnt allow duplicate value  , map remmber order of key and value 
const map = new Map()
map.set("IN","India")
map.set("US","UNITED STATE OF INDIA")
map.set('NW',"New Zealand")
// map.set("IN","India") // map does not allow duplicate key
console.log(map);

for (const [key,value] of map) {
       console.log(`${key} :=> ${value}`);
}

// Note : for of is not used for the object 