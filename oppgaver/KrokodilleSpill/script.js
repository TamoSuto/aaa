var randomNumber1, randomNumber2, userInput, result;

function getRandomNumber() {
   return Math.floor(Math.random() * 10) + 1;
}

function generateNumbers() {
    var num1 = getRandomNumber();
    var num2 = getRandomNumber();
    randomNumber1.innerHTML = num1
    randomNumber2.innerHTML = num2
    result.innerHTML = '';
    userInput.value = '';
}
function checkAnswer() {
    var num1 = parseInt(randomNumber1.innerHTML)
    var num2 = parseInt(randomNumber2.innerHTML)
    var userAnswer = userInput.value.trim();

    if ((userAnswer === '>' && num1 > num2) || (userAnswer === '<' && num1 < num2)) {
        result.innerHTML = 'Correct!';
        result.style.color = 'green';
    } else {
        result.innerHTML = 'Incorrect';
        result.style.color = 'red';
    }
    }

function resetNumber() {
    generateNumbers();
}

generateNumbers();

document.addEventListener('DOMContentLoaded', function() { 
    randomNumber1 = document.getElementById('randomNumber'); 
    randomNumber2 = document.getElementById('randomNumber2'); 
    userInput = document.getElementById('userInput'); 
    result = document.getElementById('result'); 
    generateNumbers(); 
});


   
    

    
