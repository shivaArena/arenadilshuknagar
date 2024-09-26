let quotes = document.querySelectorAll(".quote")
let wrapper = document.querySelector(".wrapper")

let allQuotes = [
"Education is the most powerful weapon which you can use to change the world.",
"The beautiful thing about learning is that no one can take it away from you." ,
"Education is not the filling of a pail, but the lighting of a fire." ,
"Live as if you were to die tomorrow. Learn as if you were to live forever." ,
"The mind is not a vessel to be filled, but a fire to be kindled.",
"Education is not just about going to school and getting a degree. It's about widening your knowledge and absorbing the "
]


// console.log(quotes)
// console.log(ranNumber)


let changeQuotes = ()=>{
    let ranNumber = Math.floor(Math.random() * allQuotes.length) 
    wrapper.innerHTML = allQuotes[ranNumber]
    // console.log(allQuotes[ranNumber])
}
setInterval(changeQuotes, 2000)


/*
let nextBtn = document.querySelector("#nextBtn")
nextBtn.addEventListener("click",()=>{
    quotes[ranNumber].classList.remove("active")
    ranNumber++
    if(ranNumber>=quotes.length){
        ranNumber = 0
    }
    quotes[ranNumber].classList.add("active")
})
*/

