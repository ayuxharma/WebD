// bloacking vs non-blocking code
// blocking is synchronous (Line by Line execution)
// non-blocking is asynchronous (Line by Line execution , Call backs are fired)


// this is an asynchronous , this is a message pehle implement ho jaega
const fs = require("fs");
fs.readFile("lulu.text" , "utf-8" , (err , data)=>{
    console.log(data) ;
}) ;
console.log("This is a message");