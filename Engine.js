class Engine {
    
    constructor() {
        this.dice = {
            0:{
                possibleLetters:['A','A','E','E','G','N'], 
                currentLetter: ''
            }, //array of  letter
            1:{
                possibleLetters:['A','B','B','J','O','O'], 
                currentLetter:''
            },
            2:{
                possibleLetters:['A','C','H','O','P','S'], 
                currentLetter:'' 
            },
            3:{
                possibleLetters:['A','F','F','K','P','S'], 
                currentLetter:'' 
            },
            4:{
                possibleLetters:['A','O','O','T','T','W'], 
                currentLetter:'' 
            },
            5:{
                possibleLetters:['C','I','M','O','T','U'], 
                currentLetter:'' 
            },
            6:{
                possibleLetters:['D','E','I','L','R','X'], 
                currentLetter:'' 
            },
            7:{
                possibleLetters:['D','E','L','R','V','Y'], 
                currentLetter:'' 
            },
            8:{
                possibleLetters:['D','I','S','T','T','Y'], 
                currentLetter:'' 
            },
            9:{
                possibleLetters:['E','E','G','H','N','W'], 
                currentLetter:'' 
            },
            10:{
                possibleLetters:['E','E','I','N','S','U'], 
                currentLetter:''
            },
            11:{
                possibleLetters:['E','H','R','T','V','W'], 
                currentLetter:''
            },
            12:{
                possibleLetters:['E','I','O','S','S','T'], 
                currentLetter:''
            },
            13:{
                possibleLetters:[ 'E','L','R','T','T','Y'], 
                currentLetter:''
            },
            14:{
                possibleLetters:[ 'H','I','M','N','Q','U'], 
                currentLetter:''
            },
            15:{
                possibleLetters:['H','L','N','N','R','Z'], 
                currentLetter:''
            }
            }
        this.currentword = ''//user's current  word
        this.gameon = false;
        this.score = 0;
        // this.scoreboard = new Scoreboard(this.score);
        }
            

    randomize() {
        //change letters on each dice
        // iterate through dice object -- will give us access to each individual dice object
        // set currentLetter equal to randomly generated index of possibleLetter array
        for (const key in this.dice) {

            let randomIndex = Math.floor(Math.random() * 6);
            this.dice[key].currentLetter = this.dice[key].possibleLetters[randomIndex];
        }
    }
    checkWord(str){
    //return boolean of whether str is a word  or not 
    }
    buildWord(event){
    // going to add the letter the user has clicked to the empty string of currentword
    }
    addScore(num){
        //update score property
        this.score += num
    }
    updateScore(){
        //would update score on score board
        this.scoreboard = new Scoreboard(this.score)
    }
    gamestart(){
    }
    gameend(){
    }
    timer(){ 
    }
    populateDice(){
        // use the diceID to get access to each dice 
        this.randomize();
        const allDice = document.querySelectorAll('.dice');
    
        allDice.forEach((dice, i) => {
           
            dice.innerText = this.dice[i].currentLetter;
        })
    }
}


const testEngine = new Engine();
testEngine.populateDice();
// console.log(testEngine.dice);
























