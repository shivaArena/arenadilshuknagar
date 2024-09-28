$(document).ready(function(){

    /*
    // basic selectors
    $('#product').css("border","2px solid blue")

    $('.box').css("border","2px solid red")

    $('h1').css("color","red")

    $('h1,h2').css("color","red")

    $('#product a').css({
        "background-color":"lightblue",
        "border":"2px solid red",
        "border-radius":"8px",
        "padding":"16px",
        "display":"block",
        "width":"125px"
    })


    // attributes
    $('div[id]').css("border","10px solid blue")
    $('div[class]').css("border","20px solid yellow")
    $('div[class=one]').css("border","20px solid red")


    // filters
    $("li").css("border","2px solid blue")

    $("li:first").css("border","5px solid orange")
    
    $("li:last").css("border","5px solid orange")
    
    $("li:odd").css("border","5px solid olive")
    
    $("li:even").css("border","5px solid black")
    */

    // $('h1').text("<li>welcome to jquery")
    // $('h1').html("<li>welcome to jquery")

    // $('img').attr("width","500")
    
    // $('a').text("arena")
    // $('.one').addClass("active")
    // $('.two').removeClass("two")
    // $("#product").toggleClass("active")

    // $('h1').after("<h1>javascript</h1>")
    // $('h1').before("<h1>javascript</h1>")

    // $('h1').append("next")
    // $('h1').prepend(" before ")

    // mouse events

    // $('body').on('click',function(){
    //     // alert("welcome to programming")
    // })

    $('h1').on('click',function(){
        $(this).html("<input type='text'>")
    })

})