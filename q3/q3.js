const decimal = document.getElementById("decimal");
const clear = document.getElementById("clear");
const displayValElement = document.getElementById("display__numbers");
const btnNumbers = document.getElementsByClassName("btn--number");
const btnOperators = document.getElementsByClassName("btn--operator");
console.log(btnOperators);




let defaultNumber = "0";




updateDisplayVal = (e) => {
    var btnText = e.target.innerText;
    if(defaultNumber === "0") { 
      defaultNumber = ""; 
    }

    // Append the content of the button we clicked to our displayVal variable and display it
    defaultNumber += btnText; 
    displayValElement.innerText = defaultNumber;
} 


// Perform the mathematical operations
performOperation = (e) => {
  let operator = e.target.innerText;  
  let pendingVal; 
  let evalStringArray = [];

    switch (operator) {
        case '+':
            pendingVal = defaultNumber;
            defaultNumber = "0";
            displayValElement.innerText = defaultNumber;
            evalStringArray.push(pendingVal);
            evalStringArray.push('+');
            break;
        case '-':
            pendingVal = displayVal;
            defaultNumber = '0';
            displayValElement.innerText = defaultNumber;
            evalStringArray.push(pendingVal);
            evalStringArray.push('-');
            break;
        case '×':
            pendingVal = defaultNumber;
            defaultNumber = '0';
            displayValElement.innerText = defaultNumber;
            evalStringArray.push(pendingVal);
            evalStringArray.push('*');
            break;
        case '÷':
            pendingVal = defaultNumber;
            defaultNumber = '0';
            displayValElement.innerText = defaultNumber;
            evalStringArray.push(pendingVal);
            evalStringArray.push('/');
            break;
        case '=':
            evalStringArray.push(defaultNumber);
            var evaluation = eval(evalStringArray.join(' '));
            // convert datatype from number to string
            defaultNumber = evaluation + ''; 
            console.log(typeof defaultNumber);
            displayValElement.innerText = defaultNumber;
            evalStringArray = []; // clear the array
            break;
        default:
            break;
    }
}

// Event listeners for the number and operator buttons
for (let i = 0; i < btnNumbers.length; i++) {
    btnNumbers[i].addEventListener('click', updateDisplayVal) 
}

for (let i = 0; i < btnOperators.length; i++) {
    // console.log(btnOperators[i]);
    
    btnOperators[i].addEventListener('click', performOperation);
}

// On clicking the clear button, all values and the display are being reset 
clear.onclick = () => {
    defaultNumber = '0';
    pendingVal = undefined;
    evalStringArray = [];
    displayValElement.innerHTML = defaultNumber;
}

// Not allowing two decimal points in input
decimal.onclick = () => { 
    if(!defaultNumber.includes('.')) {
        defaultNumber += '.';
    }
    displayValElement.innerText = defaultNumber;
}
