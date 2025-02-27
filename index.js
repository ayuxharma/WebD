console.log(`Loops`) ;

let obj = {
    name: "Ayush" ,
    role: "SDE" , 
    company: "Samsung"
}


// for in loop
for (const key in obj) {
        const element = obj[key];
        console.log(element) ;
}

for (const key in obj) {
    console.log(key) ;
}

// for of loop
for (const x of "ayush") {
    console.log(x) ;
}

// while loop
let i = 6 ;
while (i<9) {
    console.log(i) ;
    i++ ;
}
