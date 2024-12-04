
const userEmail = 0

if (userEmail) {
   console.log('excuted');
} else {
    console.log('not excuted');
}

// False Value 
       // False , 0 , -0 , 0n bigint , "" , null , undefined , NaN

// truthy Value 
      // "false" , "0" , " " , anyNumber exp: 5 , [] , {} , function(){}


const userArrray = []
 
if (userArrray.length === 0) {
    console.log("excuted array");
}

const userObject = {}
  
if (Object.keys(userObject).length === 0) {
   console.log('object excuted');
}



false == 0
false ==''
0 == '' 
