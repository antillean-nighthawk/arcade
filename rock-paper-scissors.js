// code by me
let computerScore = 0;
let playerScore = 0;

// main logic
function playRound(playerSelection) {
    changeColor(playerSelection, "player");
    const computerSelection = computerPlay();
    const result = getResult(playerSelection, computerSelection);
    document.getElementsByClassName("result").innerText = result;
}

// computer chooses an option at random
function computerPlay() {
    const choices = ["rock", "paper", "scissors"];
    var choice = choices[Math.floor(Math.random() * choices.length)];
    changeColor(choice, "computer");
    return choice;
}

// find out who won
function getResult(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
    } else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
    ) {
        playerScore++;
        document.getElementById("player-score").innerText = "Score: " + playerScore;
    } else {
        computerScore++;
        document.getElementById("computer-score").innerText = "Score: " + computerScore;
    }
}

// Define Variables with Bootstrap colors
var primaryColor = "#007bff";
var secondaryColor = "#6c757d";
var successColor = "#28a745";
var dangerColor = "#dc3545";
var warningColor = "#ffc107";
var infoColor = "#17a2b8";
var lightColor = "#f8f9fa";
var darkColor = "#343a40";

// change color depending on click
function changeColor(choice, player) {
    if (player == "player") {
        if (choice == "rock") {
            document.getElementById("player-rock").style.backgroundColor = successColor;
            document.getElementById("player-paper").style.backgroundColor = secondaryColor;
            document.getElementById("player-scissors").style.backgroundColor = secondaryColor;
        } else if (choice == "paper") {
            document.getElementById("player-rock").style.backgroundColor = secondaryColor;
            document.getElementById("player-paper").style.backgroundColor = infoColor;
            document.getElementById("player-scissors").style.backgroundColor = secondaryColor;
        } else if (choice == "scissors") {
            document.getElementById("player-rock").style.backgroundColor = secondaryColor;
            document.getElementById("player-paper").style.backgroundColor = secondaryColor;
            document.getElementById("player-scissors").style.backgroundColor = dangerColor;
        }
    } else if (player == "computer") {
        if (choice == "rock") {
            document.getElementById("computer-rock").style.backgroundColor = successColor;
            document.getElementById("computer-paper").style.backgroundColor = secondaryColor;
            document.getElementById("computer-scissors").style.backgroundColor = secondaryColor;
        } else if (choice == "paper") {
            document.getElementById("computer-rock").style.backgroundColor = secondaryColor;
            document.getElementById("computer-paper").style.backgroundColor = infoColor;
            document.getElementById("computer-scissors").style.backgroundColor = secondaryColor;
        } else if (choice == "scissors") {
            document.getElementById("computer-rock").style.backgroundColor = secondaryColor;
            document.getElementById("computer-paper").style.backgroundColor = secondaryColor;
            document.getElementById("computer-scissors").style.backgroundColor = dangerColor;
        }
    }
}