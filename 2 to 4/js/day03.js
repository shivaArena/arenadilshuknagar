// Arithmetic Operators
// + - * / % ++ --

/*
let a = 10, b = 5, c = 2, d=-5
console.log(a+b) // 15
console.log(a-b) // 5
console.log(a*c) // 20
console.log(a+b*c) // 20
console.log((a+b)*c) // 30
console.log(a/c) // 5
console.log(a%c) // 0 
console.log(a++) // 10
console.log(a) // 11 
console.log(b--) // 5
console.log(b) // 4
console.log(d-a)// -16
*/

// Comparison Operators

// == === != > < >= <=

let x = 5, y = 10, z = "5", i = 5

/*
console.log(x == y ) // false
console.log(x == z ) // true
console.log(x != z ) // false
console.log(x != y ) // true
console.log(x === z ) // false
console.log(x < z ) // false
console.log(x < y ) // true
console.log(x > y ) // false
console.log(x > i ) // false
console.log(x < i ) // false
console.log(x <= i ) // true
console.log(x >= i ) // true
*/

// Logical Operators
// && || !

console.log(x<y && x==i && y>x ) // false
console.log(x<y || x!=i ) // true
console.log(x>y || x!=i ) // false
let result = x>y || x!=i //false
console.log(!result) //true


// Assignment Operators
// = +=, -=, *= /= %=

let foo = 10
foo += foo // 20
foo += 5 // 25
console.log(foo += 5) // 30
foo -= 20 // 10
console.log(foo *= 2) // 20
console.log(foo /= 2) // 10 
console.log(foo %= 2) // 0

