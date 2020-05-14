// dictionary = new Typo('en_US', false, false, { dictionaryPath: '../Codesmith/Typo.js/typo/dictionaries/en_US'})

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
        this.currentWord = ''//user's current  word
        this.previousWords = []; 
        this.gameon = false;
        this.score = 0;
        this.timeRemaining = 60;
        this.timer = new Timer(this.timeRemaining)
        this.timerVar;
        this.diceStore = document.querySelectorAll('.dice');
        this.scoreboard = new Scoreboard(this.score, this.previousWords)
        this.addToPreviousList = this.addToPreviousList.bind(this);
        this.buildWord = this.buildWord.bind(this); 
        this.checkWord = this.checkWord.bind(this);
        this.addMouseoverEvent = this.addMouseoverEvent.bind(this);
        this.gameStart = this.gameStart.bind(this);
        this.tick = this.tick.bind(this);
       
        // this.wordList = wordList
        //iterate diceStore array
        this.diceStore.forEach( ele => {
            //add event listner to each element, listen for  click
            ele.addEventListener('mousedown', (event) => {
                
                this.buildWord(event)
                this.addMouseoverEvent()
            })
        }) 

        document.querySelector('#game-start').addEventListener('click', this.gameStart)
        

    }
        
            
    addMouseoverEvent(){
        //create 2 event listeners on every dice
        
        this.diceStore.forEach( ele =>{
            ele.addEventListener('mouseover', this.buildWord)
            ele.addEventListener('mouseup', this.checkWord)
        })
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
    checkWord(){
    //return boolean of whether str is a word  or not 
    // check if its a word
    const checkedWord = this.currentWord.toLowerCase();
  
    this.addToPreviousList();
    this.addScore(checkedWord.length)
    this.updateScore(); 

    this.diceStore.forEach( ele => {
       
        ele.removeEventListener('mouseover', this.buildWord)
        ele.classList.remove('selected')
    })
    // dictionary.check(this.currentWord)
    this.currentWord = '';
   

    }
    addToPreviousList() {
        this.previousWords = [...this.previousWords, this.currentWord]
        console.log('previousWords:     ', this.previousWords)
    }
    buildWord(event){
    // going to add the letter the user has clicked to the empty string of currentword
    // buildword will take cin an event and take the event.target (what the event is targeting)
    // will take the inner text  of targe of event and add that to the word currently stored stored in current word to str stored in this.current currentword
        
        event.preventDefault()
        event.target.classList.add('selected')
        this.currentWord += event.target.innerText
        
    }
    addScore(num){
        //update score property
        this.score += num
    }
    updateScore(){
        //would update score on score board
        delete this.scoreboard;
        this.scoreboard = new Scoreboard(this.score, this.previousWords)
    }
    gameStart(){
        console.log('fired!')
        this.handleTimer();
        this.populateDice();
    }
    endGame(){
        this.gameon = false; 
        clearInterval(this.timerVar);
    }
    handleTimer(){ 
        this.gameon = !this.gameon; 
        let btnText = this.gameon ? 'PAUSE' : 'START';
        if (this.gameon) {
            this.timerVar = setInterval(this.tick, 1000); 
        } else {
            this.gameon = false;
            clearInterval(this.timerVar);
        }
        document.getElementById('game-start').innerHTML = btnText;
    }
    tick() {
        if (this.timeRemaining > 0) {

            this.timeRemaining--; 
            delete this.timer;
            this.timer = new Timer(this.timeRemaining)
        } else {

            this.endGame();
        }
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
























