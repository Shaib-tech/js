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
        console.log("Please enter a username");
        return
    }
    return `${username} Just logged in`

}
console.log(loginUserMessage("Zayed")) // If you don't pass argument then its gives you undefined.