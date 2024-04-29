// source: https://stackoverflow.com/questions/31954089/how-can-i-reuse-a-navigation-bar-on-multiple-pages

var navbar = `<nav class="navbar navbar-expand-lg navbar-light bg-light">
    <span class="material-symbols-outlined">stadia_controller  </span>
    <a class="navbar-brand" href="index.html">Arcade</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav">
        <li class="nav-item active">
            <a class="nav-link" href="index.html">Home <span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="about.html">About</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="instructions.html">Instructions</a>
        </li>
        <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Games
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <a class="dropdown-item" href="tic-tac-toe.html">Tic-Tac-Toe</a>
            <a class="dropdown-item" href="rock-paper-scissors.html">Rock-Paper-Scissors</a>
            <a class="dropdown-item" href="hangman.html">Hangman</a>
            <a class="dropdown-item" href="minesweeper.html">Minesweeper</a>
            </div>
        </li>
        </ul>
    </div>
</nav>`

document.body.insertAdjacentHTML("afterbegin", navbar);