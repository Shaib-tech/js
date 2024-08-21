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
