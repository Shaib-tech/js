/// Immediately Invoked Function Exprrssions (IIFE) ///

(function chai (){
    // This Iis named (IIFE)
    console.log("DB is coneect");
    
} )();

/// You have to end first function with semi-Column to run second function ////


( () => {
    console.log(`DB is connected Two`);
    
})();


( (name)=> {
    console.log(`DB is Not connected ${name}`);
    
})(`Shaib`)


// Wrong Syntax For (IIFE) //

//  ( function code () => {
//     console.log(`DB is connected `);
    
// })()