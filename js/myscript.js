let secondi = 0;
let contatore = 0;
let timer;
let userNumbers;

// richiamo il container
const container = document.querySelector(".container");
// richiamo score
const score = document.querySelector(".score");

// genero 5 numeri casuali
let numRand = arrayRandDiversi();
console.log(numRand);

// visualizzo in pagina i 5 numeri casuali.
container.append(numRand);

// parte un timer di 30 secondi.
startTimer();




// FUNZIONI

// avvia timer
function startTimer() {
    timer = setInterval(
        function() {
            secondi++;
            // Dopo 30 secondi i numeri scompaiono
            if(secondi === 30) {
                // faccio scomparire i numeri generati e il timer
                container.classList.add("hide");
                score.classList.add("hide");
            
            }else if(secondi === 31) {
                // fermo il timer
                stopTimer();
                // chiedo all'utente i 5 numeri
                for(let i = 0; i < 5; i++) {
                    userNumbers = parseInt(prompt("Quali sono i numeri scomparsi?"));
                    
                    // se i numeri inseriti fanno parte dell'array di numeri random
                    if(numRand.includes(userNumbers)) {
                        // aumento contatore punteggio
                        contatore++;
                        // inserisco messaggio per l'utente
                        const daInserire = `Ti sei ricordato ${contatore} numeri`;
                        score.classList.remove("hide");
                        score.innerHTML = daInserire;
                    }else{
                        const daInserire = `Ti sei ricordato ${contatore} numeri`;
                        score.classList.remove("hide");
                        score.innerHTML = daInserire;
                    }
                }
                 
            }else {
                // altrimenti li vedo in pagina
                score.innerHTML = secondi;
            }
        }, 1000);
}

// ferma timer
function stopTimer() {
    clearInterval(timer);
}