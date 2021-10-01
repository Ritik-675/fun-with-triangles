const quizForm= document.querySelector(".quiz-form") ;
const submitAnswerBtn= document.querySelector(".submit-button") ;
const outputE1= document.querySelector(".output") ;
var textBox =document.querySelector(".text-out") ;

const correctAnswers=["3 sides, 3 angles","180"] ;


function calculateScore(){
    textBox.style.display="block";
    let score=0 ;
    let index=0 ;
    const formResults =  new FormData(quizForm) ;
    for(let entry of formResults.values()){
        if(entry===correctAnswers[index])
        {
            score=score+1;
        }
        index=index+1 ;
    }
    console.log(score) ;
    outputE1.innerText = "Your score is "+score ;
}
textBox.style.display="none";
submitAnswerBtn.addEventListener("click",calculateScore) ;