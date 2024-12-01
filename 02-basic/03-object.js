// singleton 
       // object.create()

// object literal 
    const mySym = Symbol ('key1')
    const jsUser = {
         name : "Akash",
         "fullName": "Akash singh chauhan", 
         [mySym] : "key1",
         age : 25 ,
         location : "Hyderbaad",
         hobbies : ["Coding", "Reading", "Playing"],
         isLoggedIn : false 
    }

    console.log(jsUser.name);
    console.log(jsUser["name"]);
    console.log(jsUser["fullName"]);
    console.log(jsUser[mySym]);
    
    
    jsUser.location = "indore"
          console.log(jsUser.location);
            
       // Object.freeze(jsUser)
     jsUser.location = "Delhi"
           console.log(jsUser.location);
           
      jsUser.greeting = function(){
           console.log("Hello ! world");
      }
      jsUser.greeting()

      jsUser.greeting2 = function(){
           console.log(`hello me name is ${this.fullName}`);   
      }
      jsUser.greeting2()