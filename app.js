const dateInput = document.querySelector("#dateInput");
const userInput = document.querySelector("#userInput");
const checkButton = document.querySelector("#checkButton");
const finalOutput = document.querySelector("#finalOutput");

checkButton.addEventListener("click", function(){
    const dob = dateInput.value;
    calculateSum(dob);
    luckyCheck(sum);
})

function calculateSum(dob){
    dob = dob.replaceAll("-","")
    
    sum=0

    for(let i=0; i < dob.length; i++){
        sum += Number(dob.charAt(i))
    }
}

function luckyCheck(sum){
    const luckyNum = userInput.value

    if (luckyNum>0 || luckyNum == null){
        if (sum % luckyNum === 0){
            finalOutput.innerText ="Your birthday is lucky!"
        }else{
            finalOutput.innerText ="Your birthday is NOT lucky, so sad"
        }
    }else{
        finalOutput.innerText="Invalid Input"
    }

    
}