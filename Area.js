const inputs = document.querySelectorAll(".input-field");
const clickBtn = document.querySelector("#submit-btn");
const outputButton = document.querySelector("#output");


function calculateArea(a,b){
    const areaOfTriangle = (a*b);
    // console.log(areaOfTriangle);
    return areaOfTriangle ;
}


function calculateOutput(){
    // console.log("clicked")
  const areaOfTriangle = calculateArea(Number(inputs[0].value ), Number(inputs[1].value));
   const finalArea = areaOfTriangle/2;
  console.log(finalArea);
  outputButton.innerText = "The Area is : " + finalArea ;
}

clickBtn.addEventListener("click" , calculateOutput)