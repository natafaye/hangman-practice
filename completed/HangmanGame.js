
class HangmanGame {
    constructor(word) {
        this.word = word;
        this.state = [];
        this.guessedLetters = [];
        for(let i = 0; i < this.word.length; i++) {
            this.state.push("_");
        }
    }

    isOver() {
        return !this.state.includes("_");
    }

    guessLetter(letter) {
        this.guessedLetters.push(letter);
        for(let i = 0; i < this.word.length; i++) {
            console.log(this.word[i], letter)
            if(this.word[i] === letter) {
                this.state[i] = letter;
            }
        }
    }

    render() {
        // Instead of using the ternary operator, we could use this:
        
        // let wonMessage;
        // if(this.isOver()) {
        //     wonMessage = "* * * You Won! * * * \n\n"
        // }
        // else {
        //     wonMessage = ""
        // }

        const wonMessage = (this.isOver()) ? "* * * You Won! * * * \n\n" : "";
        const alreadyGuessed = (!this.isOver()) ? "\n\nAlready Guessed Letters:\n" + this.guessedLetters.join(", ") : "";
        return (
            wonMessage +
            this.state.join(" ") +
            alreadyGuessed
        )
    }
}