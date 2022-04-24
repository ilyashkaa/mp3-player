let time = document.querySelector(".line-bar");
let play = document.getElementById("play");
let btnPause = document.querySelector(".next");
let btnPrev = document.querySelector(".prev");
let audio = document.getElementById('audio');
let vol = document.getElementById('customRange1');

let sng = new Audio("/static/aye.mp3");
let check = 1;
let v = 50;
play.addEventListener("click", function() {
    if (check == 1)
{       console.log("1");
        sng.play();
        audioPlay = setInterval(function() {
            let audioTime = Math.round(sng.currentTime);
            let audioLength = Math.round(sng.duration)
            time.style.width = (audioTime * 100) / audioLength + '%';
        }, 10)
        check = 0
    }
    else {sng.pause(); check = 1;}

});
vol.addEventListener("click", function() {
    console.log(v);
    v = vol.value;
    sng.volume = v / 100;
});