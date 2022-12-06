const inputs = document.querySelectorAll(".triangle-angel");
// console.log(inputs[0]);
const checkBtn = document.querySelector("#check-btn");
const outputBtn = document.querySelector("#output");


function calculateSumOfAngles(angle1 , angle2 , angle3){
    const sumOfAngles=angle1 + angle2 + angle3 ;
    return sumOfAngles;


}   

function isTrinagle(){

    const sumOfAngles = calculateSumOfAngles(Number(inputs[0].value), Number(inputs[1].value), Number(inputs[2].value));
    if(sumOfAngles > 0)
      if(sumOfAngles === 180 )
     {
        outputBtn.innerText="Yay ! The Angles will form a Triangle 🥳";
       }     
       
    else{
        outputBtn.innerText="Naah ! The Angles will not form a Triangle 😢";
    } 

    else{
        outputBtn.innerText="Invalid values ! Angles can not be less than or equal to 0 ";
    }
    }


checkBtn.addEventListener("click" , isTrinagle)

