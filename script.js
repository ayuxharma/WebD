// JS has an asynchronous nature

console.log(`Hii Ayush`) ;

setTimeout(() => {
    console.log("I am inside set timeout function") ;
}, 1000);

const callback = (arg) => {
  console.log(arg) ;
}

const loadScript = (src, callback) => {
    let sc = document.createElement("script") ;
    sc.src = src ;
    sc.onload = callback("Ayush") ;

    document.head.append(sc) ;
}

loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js", callback) ;

console.log('Hi Ayush 2') ;
