const numberContainer = document.querySelector('.number-container');
const numberBox = document.querySelectorAll('.number-box');
const startButton = document.querySelector('#start-button');



// function randomNumberGenerator () {
    for (let i = 0; i < 5; i++) {

        const randomNumber = getRandomNumber(1, 100);
        console.log(randomNumber);

        numberBox[i].innerHTML = randomNumber;
    }
// }


//creo il contatore dei secondi
let seconds = 30;

let timer = setInterval(function() {
    
    //decremento i secondi
    seconds--;

    if (seconds == 0) {
        alert('tempo scaduto');
        clearInterval (timer);
    }
}, 1000)


function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}