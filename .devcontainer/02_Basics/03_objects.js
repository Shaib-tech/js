//////////////////// SINGLETON ////////////////////////
//object.create // This syntax is use for Singleton Constructures method


//////////// Object Literals ////////// 

const mySym = Symbol ("MyKey") // Interview question add a symbol in object and caal it.

const JsUser = {
    name : "Shaib",
    "last name" : "Usmani",
    [mySym] :"MyKey1", // Interview important question check the symtax
    age : 23,
    location : "Lucknow",
    email : "shaib@gmail.com",
    isLoggedIn : false,
    lastLoggedIn : ["Monday", "Saturday"]
}

// console.log(JsUser.email);

// console.log(JsUser["email"]);

// console.log(JsUser[mySym]); // Mostly asked question in interview

// console.log(JsUser["last name"]); // This method is only use when object key is in Double quoted string

 JsUser.email = "Zayed@google.com"

//  Object.freeze (JsUser) // This function is used for Freeze objects  

 JsUser.email = "Iram@icloud.com"

//  console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS User");
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS User ${this.name}`);
}


console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
