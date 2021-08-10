
/* A class that allows the user to pick a word and pick letters */
class HumanPlayer {
    constructor() {
        this.letters = LETTERS.slice();
    }

    /* Pick a word with only alphabetical letters, could be one that was picked previously, in all caps */
    pickWord() {
        let word = prompt("Pick a word:");
        while(!word.match(/^[a-z]+$/i)) {
            word = prompt("Pick a word with only letters:");
        }
        return word.toUpperCase();
    }

    /* Pick a letter from the alphabet that hasn't been guessed yet, in all caps */
    pickLetter() {
        let letter = prompt("Pick a letter:");
        while(!this.letters.includes(letter.toUpperCase())) {
            letter = prompt("Pick a letter you haven't guessed before:");
        }
        this.letters.splice(this.letters.indexOf(letter.toUpperCase()), 1);
        return letter.toUpperCase();
    }
}