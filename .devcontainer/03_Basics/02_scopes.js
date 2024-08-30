// Global scope example

let a = 300


if (true){
    let a = 10;
    const b = 20;
     var c = 30;
    //  console.log("INNER SCOPE :",a);
     
} // Block scope example 

// console.log(a);
// console.log(b);
// console.log(c);

/////////////////// Nested Scope     ///////////////////

function one (){
    const username = "Shaib"

    function two (){
        const website = "Youtube"
        
        // console.log(username);
    }
    // console.log(website);
    
    two()
}
one()


if (true){
    const username ="Shaib"
    if(username === "Shaib"){
        const website =" GitHub"
        // console.log(username + website);
    }
    // console.log(website);
}
// console.log(username);


//************* Interesting ***************//

/// In the idustry, you can see two type of function syntax.

console.log(addone(5))
function addone(num){
    return num + 1
}

//////////////////////////
addtwo(5)

const addtwo = function(num){
    return num + 2
}

