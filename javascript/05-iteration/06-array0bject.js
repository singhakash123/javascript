const books = [
  {
    "id": 1,
    "title": "Book 1",
  },
  {
    "id": 2,
    "title": "Book 2",
  }
]

// for each 
books.forEach((element)=>{
  // console.log(element.title);
})

// for of loop 
for (const element of books) {
        //console.log(element.title);
}
// for loop : 
for (let i = 0; i < books.length; i++) {
 // console.log(books[i].title)
}
// map 
books.map((element)=>{
  // console.log(element.title);
   
})



const myBooks = {
    name : "lib",
    books : [
      {
        "id": 1,
        "title": "Book 1",
       },
       {
        "id": 2,
        "title": "Book 2",
       },
       {
        "id": 3,
        "title": "Book 3",
       },
    ]
}

// for each 
myBooks.books.forEach((element)=>{
         //  console.log(element.id);         
})
// for of loop
for (const element of myBooks.books) {
//  console.log(element.id);
}
// for loop 
for (let i = 0; i < myBooks.books.length; i++) {
  let element = myBooks.books[i]
  console.log(element.id);
}