var side1 = document.querySelector(".side1") ;
var side2 = document.querySelector(".side2") ;
var checkButton = document.querySelector(".check") ;
var textOut = document.querySelector(".opa") ;
var textBox =document.querySelector(".text-out") ;

function calculateSumSquares(a,b)
{
    console.log(a) ;
    return a*a + b*b ;
}
function calcHypot(){
    textBox.style.display="block";
    if(side1.value=="" || side2.value==""){
        textOut.innerText = "Enter all the fields correctly" ;
    }
    else {
        var sum=Math.sqrt(calculateSumSquares(Number(side1.value),Number(side2.value))) ;
        textOut.innerText = "Length of Hypotenuses is "+sum.toString()+ " cm*cm" ;
    }
}
textBox.style.display="none";
checkButton.addEventListener("click",calcHypot) ;