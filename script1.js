alert("Welcome to lecture 1 ") ;
console.log(`Welcome to lecture 1 with Ayush`) ;

let a = prompt("Enter your number");
console.log("Entered number is " + a) ;

let x = confirm("Are you sure to delete this file ?");
if (x){
    console.log("File is deleted") ;
}
else {
    console.log('File is not deleted') ;
}

// In summary, alert is for displaying messages, prompt is for getting input from the user, and confirm is for getting a yes/no confirmation from the user.


document.title = `Pehli js title` ; 

document.body.style.backgroundColor = "pink" ;