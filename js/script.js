const numberContainer = document.querySelector('.number-container');
const numberBox = document.querySelectorAll('.number-box');
const Boxtimer = document.querySelector('.timer');

const randomNumberArr = []; //array dove mi salvo i 5 numeri random generati


// genero in pagina i 5 numeri casuali
for (let i = 0; i < 5; i++) {

    const randomNumber = getRandomNumber(1, 100);
    console.log(randomNumber);

    const numberBox = document.createElement('div');
    numberBox.innerHTML = randomNumber;
    numberBox.classList.add('number-box');
    numberContainer.append(numberBox);

    randomNumberArr.push(randomNumber);

}


//creo e mostro un timer di 30 secondi
let seconds = 30;

let timer = setInterval(function() {
    
    document.querySelector('#seconds').innerHTML = seconds;
    //decremento i secondi
    seconds--;

    if (seconds == 0) {
        // alert('tempo scaduto');
        clearInterval (timer);
    }
}, 1000)


// dopo 30 secondi nascondo i numeri e chiedo l'input all'utente
setTimeout (function() {

    numberContainer.classList.add('d-none');
    Boxtimer.classList.add('d-none');

    setTimeout (function() {
        userInputArr = []; //array per salvare gli input dell'utente

        // utilizzo un ciclo for per chiedere all'utente i 5 numeri
        for (let i = 1; i <= 5; i++) {
            userInputNumber = parseInt(prompt(`inserisci il ${i}° numero:`));
            userInputArr.push(userInputNumber);
            console.log('userInputArr', userInputArr);
        }

        // confronto i due array per verificare se i valori inseriti sono uguali
        let counter = 0; //contatore per salvare quanti numeri vengono indovinati
        const rightNumbersArr = []; //mi salvo in un array i numeri indovinati

        for (let i = 0; i < randomNumberArr.length; i++) {
            if (randomNumberArr[i] == userInputArr[i]) {
                counter++;
                rightNumbersArr.push(userInputArr[i]);
            }
        }

        alert(`hai indovinato ${counter} numeri`);
        
    },1000);

}, 30000);


// funzione per generare i numeri casuali
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


