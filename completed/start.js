
function start() {
    const player = new ComputerPlayer();
    const game = new HangmanGame(player.pickWord());

    while(!game.isOver()) {
        alert(game.render());
        game.guessLetter(player.pickLetter());
    }
    
    alert(game.render())
}