// Data types in javascript
//String
let brand = 'arena 1'
console.log(typeof brand)

let branch = "09 dilsukhnagar"
console.log(typeof branch)

let address = `CN reddy complex`
console.log(typeof address)

console.log(typeof brand, typeof branch, typeof address)

// Number
let a = 10, b = 25.4, c = -5
console.log(typeof a, typeof b, typeof c )

// BigInt
// let bigNum = 7879887987897798989798797897
// let bigNum = BigInt(7879887987897798989798797897)
// console.log(bigNum)

// Boolean 
let student = true
let feePaid = false
console.log(typeof student, typeof feePaid)

// undefined
let x, y
console.log(typeof x, typeof y)

// Null
let anyValue = null
console.log(typeof anyValue)
// javascript object
// let emp = {}
// emp["name"]="sri"

let emp = {
    name : "sriraj",
    position:"trainee",
    salary:10,
    skills:{
        graphic:"PS",
        vector:"Il"
    },
    address:null
}
console.log(emp)
console.log(emp.salary)
console.log(emp.skills)
console.log(emp.skills.graphic)

console.log(emp["name"])
console.log(typeof emp)

// Array
let softwares = ["html","css","js",500]
console.log(typeof softwares)
console.log(softwares)
console.log(softwares[0])
console.log(softwares[2])

// function
let greet = function(){
    console.log("good afternoon!")
}

console.log(typeof greet)
greet()