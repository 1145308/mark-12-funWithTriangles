const inputs = document.querySelectorAll(".input-field");
const clickBtn = document.querySelector("#submit-btn");
const outputButton = document.querySelector("#output");

function calculateSumOfSquares(a,b){
    const sumOfSquares = a*a + b*b ;
    return sumOfSquares ;
}

function calculateHypotenuse(){
    const sumOfSquares = calculateSumOfSquares(Number(inputs[0].value ), Number(inputs[1].value));
    const rootOfSquares = Math.sqrt(sumOfSquares)
    //  console.log(rootOfSquares);
     outputButton.innerText = "The hypotenuse is : " + rootOfSquares;

}

clickBtn.addEventListener("click" , calculateHypotenuse);


