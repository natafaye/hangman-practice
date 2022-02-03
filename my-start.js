
function start() {
    // Have a player pick a word to guess
    const player = new ComputerPlayer();
    const wordToGuess = player.pickWord();
    const game = new HangmanGame( wordToGuess )

    while( !game.isOver() ) {
        // Show the status of the game before each guess
        alert( game.render() )
        // Have a player guess a letter until all the letters have been guessed
        const guessedLetter = player.pickLetter();
        game.guessLetter(guessedLetter)
    }

    // Show the status of the game now that it’s over
    alert( game.render() )
}