// Mouse events
// onclick
let bodyEle = document.querySelector("body")
let imgEle = document.querySelector("img")

// bodyEle.onclick = ()=>{
//     // alert("you have clicked on body")
//     // bodyEle.style.backgroundColor = "orange"
// }

let imgChange = ()=>{
    imgEle.setAttribute("src","images/service.png")
}

// imgEle.onclick = imgChange

// select the box class
let boxAny = document.querySelector(".box")

boxAny.onclick = ()=>{
    // boxAny.classList.add("select")
    boxAny.classList.toggle("select")
}

imgEle.oncontextmenu = imgChange

bodyEle.oncontextmenu = ()=>{
    alert("Right click is disabled")
    // imgEle.setAttribute("src","images/service.png")
    return false
}

boxAny.ondblclick = ()=>{
    alert("you have clicked")
}


let thumbs = document.querySelectorAll(".thumb")
// console.log(thumbs)
// option -1 
// for(let i = 0; i< thumbs.length; i++){
//     thumbs[i].onclick = ()=>{
//         thumbs[i].classList.toggle("select")
//     }
// }


// Option -2 

let grid = document.querySelector(".grid")

grid.addEventListener("click",(event)=>{
    // console.log(event)
    // console.log(event.srcElement.attributes.id) 
//    console.log(event.target.attributes.id.nodeValue) 
    divNum = event.target.attributes.id.nodeValue
    thumbs[divNum].classList.toggle("select")
})


let imgGrid = document.querySelector(".imgGrid")
let hero = document.querySelector("#hero")

imgGrid.addEventListener("mouseover",(e)=>{
    // console.log(e.target.attributes.src.nodeValue)
    let imgPath = e.target.attributes.src.nodeValue
    hero.setAttribute("src",imgPath)
})

