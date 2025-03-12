// ERROR HANDLING

let a = prompt("Enter first number");

let b = prompt("Enter second number");

// let sum = a+b ; // append kr dega

if (isNaN(a) || isNaN(b)) {
    throw SyntaxError("Please enter a valid number");
}
let sum = parseInt(a) + parseInt(b); // ab add kr dega

// console.log("The sum is " , sum*x) ; // but x is not defined


function main() {

    // try catch se handle krte h error ko
    try {
        console.log("The sum is ", sum * x);
        return true ;
    } catch (error) {
        console.log("Error aagya bhaijaan");
        return false ;
    }

    // yeh toh chalega dono try aur catch error mai , and this is used in functions , kyunki return k baad ka code nhi chalta h normally, so we use finally // IMPORTANT FOR INTERVIEW
    finally {
        console.log("Files are being closed and db connection is being closed");
    }
}

let c = main() ;