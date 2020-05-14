class Timer {
    constructor(time) {
        this.timeRemaining = time;
        this.timer = document.getElementById('timer')
        this.renderTimer();
    }
    renderTimer(){
        this.timer.innerHTML = `<span id='time-remaining'>${this.timeRemaining}</span>`
    }
}