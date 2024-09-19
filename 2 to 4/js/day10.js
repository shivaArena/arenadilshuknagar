let chat = document.querySelector("#chat")

let h3 = document.querySelector("h3")

h3.onclick = ()=>{
    chat.classList.toggle("active")
}

let chatMessage = document.querySelector("#chatInput")
let submitBtn = document.querySelector("#submit")

let chatBody = document.querySelector(".chatBody")


submitBtn.onclick = ()=>{

    let newDiv = document.createElement("p")
    newDiv.innerHTML = chatMessage.value
    chatBody.appendChild(newDiv)
    chatMessage.value = ""
}


// form Validation
let user = document.querySelector("#user")
let userInfo = document.querySelector(".userInfo")
user.onfocus = ()=>{
    userInfo.innerHTML = "please enter user name"

}

user.onblur = ()=>{
    if(user.value == ""){
        userInfo.innerHTML = "user name mandatory !"
        userInfo.style.color= "red"
        user.style.border = "1px solid red"
    }else if(user.value.length < 4){
        userInfo.innerHTML = "user name should be more then 4 letters"
        userInfo.style.color= "red"
        user.style.border = "1px solid red" 
    }else{
        userInfo.innerHTML = ""
        userInfo.style.color= ""
        user.style.border = "" 
    }
}