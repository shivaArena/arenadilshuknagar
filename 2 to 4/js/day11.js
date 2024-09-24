// let box = document.querySelector(".box")

// box.onclick = ()=>{
// }

// box.addEventListener("click",function(){
//     box.classList.toggle("active")
// })

// form events // focus // blur // change // input

/*
let webPage = document.querySelector("body")
let bodyColor = document.querySelector("#bodyColor")

bodyColor.addEventListener("change",()=>{
    // console.log(bodyColor.value)
    webPage.style.backgroundColor = bodyColor.value
})

let inputColor = document.querySelector("#inputColor")

inputColor.addEventListener("change",()=>{
    // console.log(inputColor.value) 
    webPage.style.backgroundColor = inputColor.value
})

let message = document.querySelector("#message")
let messageInfo = document.querySelector("#messageInfo")

message.addEventListener("input",()=>{
    console.log(message.value.length)
    messageInfo.innerHTML = 100 - message.value.length
})
*/

/*
// keyboard Events
let boxMove = document.querySelector(".box")
let posX = 0
let posY = 0


window.addEventListener("keydown",(eve)=>{
    // console.log(eve.keyCode)
    if(eve.keyCode == 39){
        posX += 10
        boxMove.style.left = posX + "px"

        if(posX > window.innerWidth){
            posX = 0
        }
    }
    if(eve.keyCode == 37){
        posX -= 10
        boxMove.style.left = posX + "px"
    }
    
    if(eve.keyCode == 40){
        posY += 10
        boxMove.style.top = posY + "px"
    }
    if(eve.keyCode == 38){
        posY -= 10
        boxMove.style.top = posY + "px"
    }
})
*/

// Timers

// setInterval
// setTimeout

// let ranNumb = ()=>{
//    console.log(Math.round(Math.random() * 10)) 
// } 

// setTimeout(ranNumb,3000)
// setInterval(ranNumb,3000)


let allImages = document.querySelectorAll(".slide")
let imgIndex = 0

let slideShow = ()=>{
   
    allImages[imgIndex].classList.remove("view")
      imgIndex++

      if(imgIndex >= allImages.length){
        imgIndex = 0
    }

    allImages[imgIndex].classList.add("view")

   
}


setInterval(slideShow,2000)