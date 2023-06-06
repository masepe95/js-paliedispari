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
