// let obj = {
//     DOB : "14/03/2004" ,
//     Name : "Ayush Sharma" ,
//     age : 19
// }

// console.log(obj) ;

// console.log(obj.DOB) ;
// console.log(obj.Name) ;
// console.log(obj.age) ;


// let animal = {
//     eats: true ,
// } ;

// // what if we want to access eats property in rabbit
// let rabbit = {
//     jumps: true 
// } ;

// rabbit.__proto__ = animal ; // sets rabbit.[[Prototype]] = animal
// console.log(rabbit.eats) ;

// let a = new Animal("kutti") ;
// console.log(a) ;

// console.log(a.eats) ;
// console.log(a.jumps) ;



class Animal {

    constructor(name){
        this.name = name ;
        console.log("Animal ka Object is created") ;
    }

    eats () {
        console.log("khaa rha hu") ;
    }
    jumps () {
        console.log("kood rha hu") ;
    }
}

class Lion extends Animal {
    constructor(name){
        super(name) ;
        console.log("Lion ka object is created") ;
    }

    eats() {
        console.log("sher ambal kha rha h") ;
    }
}

let y = new Lion("Sher Puttar") ;
console.log(y) ;
