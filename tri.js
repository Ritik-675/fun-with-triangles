var angle1 = document.querySelector(".angle1") ;
var angle2 = document.querySelector(".angle2") ;
var angle3 = document.querySelector(".angle3") ;
var checkButton = document.querySelector(".check") ;
var textOut = document.querySelector(".opa") ;

function checkTriangle(){
    if(Number(angle1.value) + Number(angle2.value) + Number(angle3.value) === 180)
    {
        textOut.innerText = "yess it is a triangle" ;
    }
    else{
        textOut.innerText = "No , It is  not a triangle" ;
    }
}

checkButton.addEventListener("click",checkTriangle) ;