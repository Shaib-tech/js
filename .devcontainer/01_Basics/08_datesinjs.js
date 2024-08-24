//////////////////// DATES ////////////////////

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);



// let date = new Date(2024 , 1 , 23)

// let anotherDate = new Date(2024 , 1 , 23 , 7 , 30 , 10)
// let anotherDate = new Date("2024-01-24")

let anotherDate = new Date("11-29-2000")
// console.log(anotherDate.toLocaleString());



let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(anotherDate.getTime());
// console.log(Math.floor(Date.now()/1000));


let newDate = new  Date ()
// console.log(newDate);
// console.log(newDate.getMonth() + 1);
// console.log(newDate.getDay() + 1);

newDate.toLocaleString('Default',{
    weekday: "short",
    
})
console.log(newDate);

