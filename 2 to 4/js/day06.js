// Practice Session

let a = 10, b = 5, c= 20

// if(a<b){
//     console.log("a is smaller")
// }else{
//     console.log("b is smaller")
// }

/*
if( a>b && a>c ){
    console.log( "a is grater then B & C ")
}else if(b>a && b>c){
    console.log("B is grater then A & C")
}else if(c > a && c > b){
    console.log("C is grater then A & B")
}
*/

// Check the given number Odd or Even
let myNum = 23

// if(myNum%2 == 0){
//     console.log("Even")
// }else{
//     console.log("Odd")
// }

let password  = "arena@123" // "arena@123" //  "arena@123dilsukhnagar"

if(password.length < 6){
    console.log("Weak")
}else if(password.length > 6 && password.length < 12){
    console.log("Medium")
}else if(password.length >= 12){
    console.log("Strong")
}

//Simple Calculator
let x = 6, ope = "+" , y = 10
switch(ope){
    case "+" : console.log(x+y)
    break;
    case "-" : console.log(x-y)
    break;
    case "*" : console.log(x*y)
    break;
    case "/" : console.log(x/y)
    default:console.log("Please enter only '+', '-', '*', '/' ")
}
