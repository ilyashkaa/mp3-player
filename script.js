let time = document.querySelector(".line-bar");
let play = document.querySelector(".play");
let btnPause = document.querySelector(".next");
let btnPrev = document.querySelector(".prev");

let treck;
window.onload = function() {
    treck = 0;
}
let audio = new Audio('pirat.mp3');

play.addEventListener("click", function() {
    audio.play();
    audioPlay = setInterval(function() {
        let audioTime = Math.round(audio.currentTime);
        let audioLength = Math.round(audio.duration)
        time.style.width = (audioTime * 100) / audioLength + '%';
    }, 10)
});