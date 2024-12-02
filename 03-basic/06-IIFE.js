// immediate invoked function  EXPRESSION 
// global scope ke pollution se bachne ke liye 


(function chai (){
    // Nmed IIFE
  console.log("immediately invoked function");
})();



((userName)=>{
  console.log(`immediately invoked function : ${userName}`);
})("Akash")
