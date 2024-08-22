let score = 33

console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number (score)
console.log(typeof valueInNumber);

console.log(valueInNumber);


// "33" => 33
// "33abc" => NaN
// True => 1
// False => 0


let isLoggedIn = 0

let isLoggedOut = Boolean (isLoggedIn)
console.log(typeof isLoggedOut);
console.log(isLoggedOut)

// 1 => True; 0 => False
// "" => False
// "Shaib" => True

let someNumber = 20
let someString = String (someNumber)
console.log(someString);
console.log(typeof someString);


// ****************************** OPERATIONS *************************************** \\

let num = 3
let negNumber = -value
console.log(negNumber);

// console.log (2+2);
// console.log (2-2);
// console.log (2*2);
// console.log (2**2);
// console.log (2/5);
// console.log (2%3);



let str1 = "Hello"
let str2 = " Shaib"
let str3 = str1 + str2
console.log(str3);

console.log("1" + 2);
console.log("1" + 2);
console.log("1" + 2 + 2);
console.log(1 + 2 + "2");


console.log(2 + 3 * 5 % 3);


console.log(+true);

console.log(+"");

// let num1, num2, num3
//  num1 = num2 = num3 = 2 + 2 + 2

let gameCounter = 100
gameCounter++;
console.log(gameCounter);

let gameCount = 100
++gameCount;
console.log(gameCounter);

let x = 3;
const y = ++x;
console.log(x);
