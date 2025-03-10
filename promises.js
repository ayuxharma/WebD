console.log(`This is Promises`);

// .then , .catch

let prom1 = new Promise((resolve, reject) => {
    let a = Math.random();
    if (a < 0.5) {
        reject("No random number was supporting you");
    }
    else {
        setTimeout(() => {
            console.log('Yes I am done');
            resolve("Ayush");
        }, 3000);
    }
})

let prom2 = new Promise((resolve, reject) => {
    let a = Math.random();
    if (a < 0.5) {
        reject("No random number was supporting you hehe");
    }
    else {
        setTimeout(() => {
            console.log('done bhai hogya');
            resolve("billu");
        }, 3000);
    }
})


// prom1.then((a) => {
//     console.log(a);
// }).catch((err)=>{
//     console.log(err) ;
// })


// let p3 = Promise.all([prom1 , prom2])
// p3.then((a)=>{
//     console.log(a) ;
// }).catch((err)=>{
//     console.log(err) ;
// })

let p3 = Promise.allSettled([prom1 , prom2])
p3.then((a)=>{
    console.log(a) ;
}).catch((err)=>{
    console.log(err) ;
})

// see in notes for all kinds of promise API