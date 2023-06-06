console.log('JS OK') 

// ! PALIDROMA VALIDATOR /
// Recupero dal DOM input e button 
const wordInput = document.getElementById('word');
const controlButton = document.getElementById('button');
const resultPlaceholder = document.getElementById('result');

// Creo una funzione che stabilisca se la parola inserita dall'utente è palindroma 
function isPalindrome(word){
    for (let i = 0; i < word.length / 2; i++){
        if (word[i] !== word[word.length - 1 - i]){
            return 'Non è palindroma';
        }
    }

    return 'Si, è palindroma';
    
}

// Creo un event listener che raccoglie il value dell'input dove l'utente inserisce la parola 
controlButton.addEventListener('click', function(){
    const word = wordInput.value;
    const result = isPalindrome(word);
    console.log(result)
    resultPlaceholder.innerHTML = result
})


// !  EVEN OR ODD /

// Recupero gli elementi dal DOM 
const userNumberChoice = document.getElementById('number')
const userChoice = document.getElementById('userChoice')
const winner = document.getElementById('winner')
const cpuNumber = document.getElementById('cpu-number')
const playButton = document.getElementById('play')

// Creo una funzione che generi un numero random da 1 a 5 
function randomNum(){
    const result = Math.floor(Math.random() * 5) + 1;
    return result
}

// Funzione che controlla se è pari
function isEven(a){
    result = false;
    if (a % 2 === 0) result = true;
    return result;
}

// Al click comincio logica
playButton.addEventListener('click', function(){
    // Creo due variabili con le scelte dell'utente 
    const userChoiceValue = userChoice.value;
    const num1 = parseInt(userNumberChoice.value);

    // Salvo in una variabile il numero generato
    const num2 = randomNum();
    cpuNumber.innerHTML = num2;

    // Sommo i due numeri e li inserisco in variabile
    const resultNumber = num1 + num2;


    let result = `Il numero ${num1} sommato al numero ${num2} da risultato ${resultNumber}.  `

    if (userChoiceValue === 'even' && isEven(resultNumber)) result += `Complimenti hai vinto!`;
    else if (userChoiceValue === 'odd' && !isEven(resultNumber)) result += `Complimenti, hai vinto!`;
    else result += `Vince la CPU!`;

    winner.innerHTML = result;

})