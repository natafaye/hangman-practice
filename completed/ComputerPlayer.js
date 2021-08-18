
/* A computer player that can pick a word and pick letters */
class ComputerPlayer {
    constructor() {
        this.letters = LETTERS.slice();
    }

    /* Pick a word with only alphabetical letters, could be one that was picked previously, in all caps */
    pickWord() {
        const randomIndex = Math.floor(Math.random() * WORDS.length);
        return WORDS[randomIndex];
    }

    /* Pick a letter from the alphabet that hasn't been guessed yet, in all caps */
    pickLetter() {
        
        // Just to keep it from potentially causing problems if it runs out of letters
        // If it reaches the last letter left to guess it will just keep guessing that letter over and over again
        if(this.letters.length === 1) 
            return this.letters[0];

        const randomIndex = Math.floor(Math.random() * this.letters.length);
        // const guessedLetter = this.letters[randomIndex];
        // this.letters.splice(randomIndex, 1);
        // return guessedLetter;
        return this.letters.splice(randomIndex, 1)[0];
    }
}