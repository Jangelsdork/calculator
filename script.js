console.log("Yo planet")
let digiButtonIn = 0
let displayNum = ""
let clearButt = ""
let opButt = ""
let chosenOperator = 0
let equationArray = []
let results = 0
let popped = ""
displayContent = document.querySelector("#display")
//controls the digit of the button element that is pressed, runs it in the digit accumulator 

const digiButtons = document.querySelector('#digits')
digiButtons.addEventListener('click', function () {
    const isButton = event.target.nodeName ==='BUTTON';
    if (!isButton) {
        return;
    }
    digiButtonIn = parseInt(event.target.id);
    digitAccumulator(digiButtonIn)

})

//console logs a short-hand word for the expression/operator that is clicked 
const operatorButtons = document.querySelector('#operators')
operatorButtons.addEventListener('click', function () {
    const isButton = event.target.nodeName ==='BUTTON';
    if (!isButton) {
        return;
    }
    opButt = (event.target.id);
    digitAccumulator(opButt)
})

// listens for the "clear" button 
const clearButton = document.querySelector('#clear')
clearButton.addEventListener('click', function () {
    const isButton = event.target.nodeName ==='BUTTON';
    if (!isButton) {
        return;
    }
    clearButt = (event.target.id);
    digitAccumulator(clearButt);
})

// selects which operator to use
function operate(argument){
    if (argument[1] === "sum"){
        return (argument[0] + argument[2])
    }
    else if (argument[1] == "sub"){
        return (argument[0] - argument[2])
    }
    else if (argument[1] == "mul"){
        return (argument[0] * argument[2])
    }
    else if (argument[1] == "divi"){
        return (argument[0] / argument[2])
    }
}


// stores the input various strings

function digitAccumulator(x) {
    //if digit then add to the stack of digits stored in a string & update the div 
    if (Number.isInteger(x)){ 
        displayNum = displayNum + x
        displayContent.textContent = `${displayNum}`
        console.log(equationArray)
    }
    else if (x === "clear"){
        displayNum = ""
        displayContent.textContent = "0";
        equationArray = [];
    }
    else if (x === "sum" || "sub" || "mul" || "divi" || "equ"){
        console.log("clicked" + x)
        if (equationArray.length === 0){
            equationArray[0] = parseInt(displayNum)
            equationArray[1] = x
            displayNum = ""
        }
        else if (equationArray.length === 1){
            equationArray[1] = x;
            console.log(equationArray)
        }
        else if (equationArray.length === 2){
            equationArray[2] = parseInt(displayNum);
            results = operate(equationArray);
            displayNum = results;
            displayContent.textContent = `${displayNum}`;
            displayNum = "";
            equationArray.length = 0
            equationArray = [];
            equationArray[0] = parseInt(results);
            console.log(equationArray) // somewhere here, nan  is added as second item in array 
            if (x !== "equ"){
                equationArray[1] = x
            }
        }

    }
    
}



