const programming = ["js","Rjs","Mdb","Fm"]

programming.forEach(function (element) {
  // console.log(element);
})


programming.forEach((element)=>{
  // console.log(element);
})

function printMe (item){
   console.log(item);
}
programming.forEach(printMe)


programming.forEach((element,index,array)=>{
    console.log(`${element} ${index} ${array}`);  
})


