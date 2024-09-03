// function

// function greet(){
//     console.log("good afternoon")
// }

// greet()

/*
function greet(name){
    console.log("good afternoon " + name)
}

greet("sriraj")
greet("ajay")

let printNum = function(x,y){
    while(x<=y){
        if(x%2 == 0){
            console.log(x)
        }
        x++
    }
}
printNum(0,10)

// arrow functions  ES6
let OddNum = (x,y)=>{
    while(x<=y){
        if(x%2 == 1){
            console.log(x)
        }
        x++
    }
}
OddNum(0,10)
*/

/*

let total = (x,y,z)=>{
    return x+y+z
}
let amount = total(150, 300, 500)

let tax = (t)=>{
    return (amount * t) / 100
}

tax = tax(10)
console.log("Total : " + amount + " Tax : " + tax)

*/

// String methods

let company = "arena animation"
let branch = 'dilsukh nagar'
let address = `hyderabad`


console.log(typeof company)

let fullAddress = company + branch + address
console.log(company.concat(" complex 5th floor"))

// console.log("company name: " + company)
console.log(`company name: ${company} branch is : ${branch}`)
console.log(fullAddress.length)

console.log(company.indexOf("a"))
console.log(company.lastIndexOf("a"))
console.log(company.repeat(5))
console.log(company.replace("arena","sriraj"))

let uppStr = company.toUpperCase()
console.log(uppStr)

let lowStr = uppStr.toLowerCase()
console.log(lowStr)

console.log(company.slice(0,3))
let newArr = company.split("")
console.log(newArr)
console.log(typeof newArr)
