class Scoreboard  {
    constructor(score, previousWords) {
        this.scoreBoard = document.getElementById('scoreboard');
        this.score = score;
        this.previousWords = previousWords;
        this.showScore();
        this.showPreviousWords(); 
    }
    showScore(){
        this.scoreBoard.innerHTML = `<strong>Score</strong><br>${this.score}`;
    }
    showPreviousWords(){
        const container = document.querySelector('#previous-words');
        container.innerHTML = '';
        this.previousWords.forEach( word => {
            const newPrevWord = document.createElement('li');
            newPrevWord.className = 'previous-word'; 
            newPrevWord.innerText = word;
            container.appendChild(newPrevWord)
        })
    }
}