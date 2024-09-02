function sayMyName (){
    console.log("s");
    console.log("H");
    console.log("A");
    console.log("I");
    console.log("B");
    
}
// sayMyName()

// function addTwoNumbers (number1, number2){
//     console.log(number1 + number2);
    
// }

//////////////////////////////////////////////

function addTwoNumbers (number1, number2){
    // let result = number1 + number2 
    
    // return result // This and below return are both correct syntax
    return number1 + number2
    
    // console.log("Shaib"); After declaration of return, nothing will execute.

}
const result = addTwoNumbers(3,4)

// console.log("The result is :", result);

////////////////////////////////////////////////

function loginUserMessage (username = "Shaib"){
    if(username === undefined ){ // <=This syntax and this => "(!username)" syntax, both conditions are same.  
        // console.log("Please enter a username");
        return
    }
    return `${username} Just logged in`

}
// console.log(loginUserMessage("Zayed")) // If you don't pass argument then its gives you undefined.

function calculateCartPrice (val1, val2, ...num1){
    return num1 

}
// console.log(calculateCartPrice(200 , 400 , 500))


const user = {
    name : "Shaib",
    price : 199
}

function handleObject (anyobject){
console.log(`Username is ${anyobject.name} and price is ${anyobject.price}`);

}

// handleObject(user)

// handleObject({
//     name : "Zayed",
//     price : 199
// })

////////////// Function in Array /////////////

// const myNewArray = [100,400,500,800]
// function returnSecondValue (getArray){
//     return getArray[2]
// }
// console.log(returnSecondValue(myNewArray));

///// Function Syntax ///////

(function chai (){
    console.log("DB is coneect");
    
} )()