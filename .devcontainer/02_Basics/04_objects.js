// Singleton using constructor

// const tinderUser = new Object ()  // Singleton object syntax

// console.log(tinderUser);

const tinderUser = {}  // Non - Songleton Object syntax

tinderUser.id ="123456abcdefg"
tinderUser.name = "Hitesh"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {

    email: "Prateek@gmail.com",
    fullname :{
        username: {
            fullname:"Prateek",
            lastname : "Dixit"
        }
    }
}

// console.log(regularUser.email);


const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign ({},obj1, obj2 , obj4)

const obj3 = {...obj1, ...obj2, ... obj4}
// console.log(obj3);

// console.log(tinderUser);

const objectinArray = [
    {
        email:"Shaib"
    },
    {
        email:"Shaib"
    },
    {
        email:"Shaib"
    },
    
]
objectinArray[1].email

// console.log(objectinArray);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));


// console.log(tinderUser.hasOwnProperty(`id`));

/////////////////////// Objecte De - Structure and JSON API //////////////////////

const course = {
    courseName: "JavaScript",
    price: "999",
    courseInstructor: "Shaib"
}
course.courseInstructor // This is not a idustry method to write to call the object keys

const{courseInstructor:teacher} = course // This semicolon in property for change the name of particular key

console.log(teacher);

////////// JSON API Syntax //////////////


// {
//     "coursename" : "JavaScript",
//     "teacher": "Shaib"
//     "price" : "Free"
// }

[
    {

    },

    {

    }
]