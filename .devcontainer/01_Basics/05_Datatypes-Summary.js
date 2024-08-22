/* Pirimitive Datatype Has 7 Types 

 String, Number, Boolean, Null, Undefined, Symbol, BigInt

*/

// const score = 100
// const scoreValue = 100.3

// const isLoggedIn = false
// let outSideTemp = null

// let userEmail;

const id = Symbol('123');

const anotherId = Symbol('123');

console.log(id == anotherId);

const bigNum = 12168485858484848656n

/* Non Primitive (Reference) Has 3 Types
 Arrays, Objects, Functions
*/

const heros = ["Shaktiman", "Balveer", "Hatim"]

const obj = {

    name : "Shaib",
    age : 23,
    city : "Lucknow"
}

const myFunction = function(){
    console.log("Hello World");
    
}

console.log(typeof obj);
