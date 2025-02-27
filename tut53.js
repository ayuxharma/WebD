console.log("This is tutorial 53");

function greet(name, text) {
    console.log(name + " is a good boy");
    console.log(text + name);

}

function sum(a, b, c) {
    let d = a + b + c;
    return d;
}

function great(x, y) {
    if (x > y) {
        return x;
    }
    else {
        return y;
    }
}

let name = "Ayush";
let name1 = "Ayush1";
let name2 = "Ayush2";
let name3 = "Ayush3";

let text = "Good Morning ";

greet(name, text);
greet(name1, text);
greet(name2, text);
greet(name3, text);

let ans = sum(2, 3, 4);
console.log(ans);

let solve = great(4, 3);
console.log(solve);