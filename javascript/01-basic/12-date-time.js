const myDate = new Date ()
      // console.log(myDate.toString());
      // console.log(myDate.toDateString());
      // console.log(myDate.toLocaleString());
      // console.log(typeof myDate);
      
      
      
// let myCreatedDate = new Date (2023, 0 ,14)
// let myCreatedDate = new Date (2023, 0 ,14,5,3)
                 // console.log(myCreatedDate.toDateString());.
                 //  console.log(myCreatedDate.toLocaleString());


// let myCreatedDate = new Date ('2024-01-14')      // it is yyyy mm dd
//    console.log(myCreatedDate.toLocaleString());
   
let myCreatedDate = new Date('01-14-2024') // it is mm  dd yyyy 
        //  console.log(myCreatedDate.toLocaleString());
         
            
let myTimeStamp = Date.now()
    console.log(myTimeStamp); // value come in mili second 
    console.log(myCreatedDate.getTime());
    console.log(Math.floor(Date.now() /1000 ));  // to convert into second 
    
    
const newDate = new Date ()   // year start from zero 
    console.log(newDate.getDate());
    console.log(newDate.getMonth());
    
  // `${newDate.getDate()}`

//   console.log(newDate.toLocaleString('default', {
//     weekday: "long", 
//     dateStyle: "full"
// }));
  
    
    
    