let arr = [1, 2, 4, 5, 7] ;

console.log(arr) ;
console.log(arr.length) ;
console.log(arr[2]);

arr[1] = 69 ;
console.log(arr) ;
console.log(typeof(arr)) ;

// covert array to string
console.log(arr.toString()) ;

arr.push(12) ;
console.log(arr) ;

arr.push("bc") ;
console.log(arr) ;

// see other methods in notes


// loops

// for loop
for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    console.log(element) ;
}

// for each loop
arr.forEach((value, index, arr) => {
    console.log(value, index, arr) ;
}) ;

// for in loop
// for (const key in object) {
//     if (Object.hasOwnProperty.call(object, key)) {
//         const element = object[key];

//     }
// }

// for of loop
// for (const iterator of object) {
    
// } 

let arr3 = [1,3,6,7] ;

const greaterThanFive = (e) => {
    if (e>5){
        return true ; 
    }
    return false ;
}
arr3.filter(greaterThanFive) ;
console.log(arr3.filter(greaterThanFive)) ;