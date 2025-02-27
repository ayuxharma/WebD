const fs = require("fs");
const text = fs.readFileSync("lulu.txt" , "utf-8");

// replace the word content by Rohan
text = text.replace("content" , "Rohan") ;


console.log("The content of file is ") ;
console.log(text);

console.log("Creating a new file")
fs.writeFileSync("rohan.txt" , text); 