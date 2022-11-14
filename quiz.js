const quizForm = document.querySelector(".quiz-form");
const submitBtn = document.querySelector("#submit");
const outputBox = document.querySelector("#output");
 

const correctAnswers = ['90°', 'right angled'];

function calculateScore(){
    let score =0;
    let index =0;
    const formResult = new FormData(quizForm);
    for(let value of formResult.values()){
        if(value === correctAnswers[index]){
            score=score+1;
        }
        index=index+1;
    }
// console.log(score);
outputBox.innerText="The value is : " + score;
}
submitBtn.addEventListener("click" , calculateScore)