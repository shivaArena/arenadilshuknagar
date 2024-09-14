// DOM
// Document Object Model

// document.getElementById()

// let emptyDiv = document.getElementById("empty")
// console.log(emptyDiv)

// let links = document.getElementsByTagName("a")
// console.log(links)

// document.querySelector()
// document.querySelectorAll()

/*
// type select
let imgEle = document.querySelector("img")
console.log(imgEle)

let link = document.querySelector("a")
console.log(link)

let allLinks = document.querySelectorAll("a")
console.log(allLinks)
console.log(allLinks[1])


// class select
let classDiv = document.querySelector(".row")
console.log(classDiv)


// ID select
let idSelect = document.querySelector("#empty")
console.log(idSelect)

// descendant select

let desc = document.querySelector(".col a")
console.log(desc)
*/

let h1Ele = document.querySelector("h1")
h1Ele.innerText = "DOM Selector"

let emptyDiv = document.querySelector("#empty")
// emptyDiv.innerText = "<h1>This a empty div</h1>"
// emptyDiv.innerHTML = `<h1>This a empty div</h1> <br> sub heading`

let newDiv = document.createElement("a")
newDiv.innerText= "navlink"
newDiv.setAttribute("href","#")

// attribute methods -------------------------------------------------------------------
/*
let img = document.querySelector("img")
console.log(img.hasAttribute("alt"))
console.log(img.hasAttribute("width"))
console.log(img.hasAttribute("height"))

console.log(img.getAttribute("width"))

img.setAttribute("src","images/woman.png")

img.removeAttribute("width")
*/

// insertion methods----------------------------------------------------------------------

// h1Ele.append(" at end")
// h1Ele.prepend("before ")

// h1Ele.after("after")
// h1Ele.before("first")
// h1Ele.before(newDiv)
// h1Ele.replaceWith(newDiv)


// node Remove ---------------------------------------------------------------------------

// h1Ele.remove()

// CSS -----------------------------------------------------------------------------------

let bodyEle = document.querySelector("body")

// bodyEle.style.backgroundColor = "yellow"
// emptyDiv.style.width = "350px"
// emptyDiv.style.height = "350px"
// emptyDiv.style.backgroundColor = "orange"

emptyDiv.className = "box"

let colDiv = document.querySelector(".col")

// colDiv.className = "box"
// colDiv.classList.add("box")
colDiv.classList.toggle("box1")


let rowDiv = document.querySelector(".row")
rowDiv.classList.remove("box1")

console.log(rowDiv.classList.contains("row"))

