console.log("Yo planet")
let digiButtonIn = 0
let displayNum = ""
let clearButt = ""
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
    console.dir(event.target.id);
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

// adds two arguments
function sum(){
    return arguments[0] + arguments[1];
}

// subtracts the second argument from the first 
function subtract(){
    return arguments[0] - arguments[1];
}

// multiplies two arguments 
function multiply(){
    return arguments[0] * arguments[1];
}

// divides the first argument by the second 
function divide(){
    return arguments[0] / arguments[1];
}

// selects which operator to use
function operate(){
    if (arguments[1] == "+"){
        return sum(arguments[0], arguments[2])
    }
    else if (arguments[1] == "-"){
        return subtract(arguments[0], arguments[2])
    }
    else if (arguments[1] == "*"){
        return multiply(arguments[0], arguments[2])
    }
    else if (arguments[1] == "/"){
        return divide(arguments[0], arguments[2])
    }
}


// stores the input various strings

function digitAccumulator(x) {
    //if digit then add to the stack of digits stored in a string & update the div 
    if (Number.isInteger(x)){
        displayNum = displayNum + x
        displayContent.textContent = `${displayNum}`
        return displayNum
    }
    else if (x === "clear"){
        displayNum = ""
        displayContent.textContent = "0"
    }
    //else if +-*/ run respective function  
}



