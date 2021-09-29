var base = document.querySelector(".side1") ;
var height = document.querySelector(".side2") ;
var checkButton = document.querySelector(".check") ;
var textOut = document.querySelector(".opa") ;

function calculateArea(a,b)
{
    console.log(a) ;
    return (a*b)/2 ;
}
function calcArea(){
    if(base.value=="" || height.value==""){
        textOut.innerText = "Enter all the fields correctly" ;
    }
    else {
        var area=calculateArea(Number(base.value),Number(height.value)) ;
        textOut.innerText = "Area of triangle is "+area.toString()+ " cm*cm" ;
    }
}

checkButton.addEventListener("click",calcArea) ;