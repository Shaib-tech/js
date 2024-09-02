const user = {
    username :"Shaib",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username},  Welcome`);
        // console.log(this);
        
    }

}
// user.welcomeMessage()
// user.username = "Zayed"
// user.welcomeMessage()
// console.log(this);

// function coffee (){
//     const username = "Shaib"
//     console.log(this.username);
    
// }
// coffee ()


// const coffee = function(){
//     const username = "Shaib"
//     console.log(this.username);
// }
// coffee()

/////////////// Arrow Function ///////////////////

// const coffee = () =>{
//     const username = "Shaib"
//     console.log(this);
// }
// coffee()

//////////////////////////////////////////////////


// const addTwo = (num1, num2) =>{
//     return num1 + num2
// }
// console.log(addTwo(5,5))


/////////// Implicit Return Arrow Function //////////////


// const addTwoo = (num1, num2) => num1 + num2
// console.log(addTwoo(5,6))


// let addTwo = (num1, num2) =>  (num1 + num2)
// console.log(addTwo(5,6))

////////// Object Define in Arrow Function ///////////////

let addTwo = (num1, num2) => ({username:"Shaib"})

console.log(addTwo());
