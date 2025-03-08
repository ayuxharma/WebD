console.log(`Events`) ;

let button = document.getElementById("btn") ;

button.addEventListener("click" , ()=>{
    //alert("I was clicked") ;
    document.querySelector(".box").innerHTML = "Clicked" ;
})

// there are lot of mouse events , see mdn reference

button.addEventListener("dblclick" , ()=>{
    //alert("I was clicked") ;
    document.querySelector(".box").innerHTML = "Double Clicked" ;
})

button.addEventListener("contextmenu" , ()=>{
    alert(`aapne right click kr diya bhaijaan`) ;
})

document.addEventListener("keydown" , (e)=>{
    console.log(e) ;
})