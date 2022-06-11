//Function returns randomly either ‘Rock’, ‘Paper’ or ‘Scissors’
function computerPlay() {
    let random = ["rock", "paper", "scissors"];
    return random[Math.floor(Math.random() * 3)];

}

let playerScore = 0;
let computerScore = 0;


function playRound(playerSelection, computerSelection) {

    if (playerSelection === "rock") {
        if (computerSelection === "rock") {
            return "You are equal!";
        } else if (computerSelection === "paper") {
            computerScore++;
            return "Computer Win! Paper beats Rock.";
        } else {
            playerScore++;
            return "You Win! Rock beats Scissors";
        }
    } else if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            playerScore++;
            return "You Win! Paper beats Rock";
        } else if (computerSelection === "paper") {
            return "You are equal!";

        } else {
            computerScore++;
            return "Computer Win! Scissors beats Paper";
        }
    } else if (playerSelection === "scissors") {

        if (computerSelection === "rock") {
            computerScore++;
            return "Computer Win! Rock beats Scissors";
        } else if (computerSelection === "paper") {
            playerScore++;
            return "You Win! Scissors beats Paper";
        } else {
            return "You are equal!";
        }
    }

}

let round = 1;

function game(yourChoice) {

    const playerSelection = yourChoice;
    const computerSelection = computerPlay().toLowerCase();

    const table = document.querySelector('.table');
    const tr1 = document.createElement('tr');
    tr1.className = "tr1";
    const tr2 = document.createElement('tr');
    tr2.className = "tr2";
    const tr3 = document.createElement('tr');
    tr3.className = "tr3";
    const td1 = document.createElement('td');
    const td2 = document.createElement('td');
    const td3 = document.createElement('td');
    const td4 = document.createElement('td');
    const td5 = document.createElement('td');
    const td6 = document.createElement('td');

    td1.innerHTML = "Round " + round + ": ";
    td2.innerHTML = playRound(playerSelection, computerSelection);
    td3.innerHTML = "Your choice is: " + playerSelection;
    td4.innerHTML = "Computer choice is: " + computerSelection;
    td5.innerHTML = "Your Score is: " + playerScore;
    td6.innerHTML = "Computer Score is: " + computerScore;
    tr1.appendChild(td1);
    tr1.appendChild(td2);
    tr2.appendChild(td3);
    tr2.appendChild(td4);
    tr3.appendChild(td5);
    tr3.appendChild(td6);
    table.appendChild(tr1);
    table.appendChild(tr2);
    table.appendChild(tr3);

    round++;

    if (playerScore == 5 && computerScore == 5) {

        finalH1.innerHTML = "You are equal! <br> your score is: "+playerScore+" , computer score: "+computerScore;
        const element = document.getElementById("table");
        element.remove();
        

    }else if (playerScore == 5 || computerScore == 5) {


        if (playerScore == 5) {

            finalH1.innerHTML = "You are the winner ! <br> your score is: "+playerScore+" , computer score: "+computerScore;
            const element = document.getElementById("table");
            element.remove();

        } else if (computerScore == 5) {

            finalH1.innerHTML = "computer is the winner ! <br> your score is: "+playerScore+" , computer score: "+computerScore;
            const element = document.getElementById("table");
            element.remove();

        }
    }

}

const finalresult = document.querySelector('.finalResult');
const finalH1 = document.createElement('h1');
finalresult.appendChild(finalH1);

document.getElementById("rock").addEventListener("click", function () {
    game("rock")
});

document.getElementById("paper").addEventListener("click", function () {
    game("paper")
});

document.getElementById("scissors").addEventListener("click", function () {
    game("scissors")
});


