let time = document.querySelector(".line-bar");
let play = document.getElementById("play");
let btnNext = document.querySelector(".next");
let btnPrev = document.querySelector(".prev");
let audio = document.getElementById('audio');
let vol = document.getElementById('customRange1');
let img = document.getElementById('pbt');

let sng = new Audio("/static/music/aye.mp3");
let check = 1;
let v = 50;
let trk = 0;


async function switchTreck (numTreck) {
    console.log("switch");
    sng.pause();
    let name = await eel.give_track_py(numTreck)();
    sng = new Audio("/static/music/" + name);
    sng.currentTime = 0;
    sng.play();
}


play.addEventListener("click", function() {
    if (check == 1) 
{       console.log("1");
        sng.play();
        audioPlay = setInterval(function() {
            let audioTime = Math.round(sng.currentTime);
            let audioLength = Math.round(sng.duration);
            time.style.width = (audioTime * 100) / audioLength + '%';
        }, 10)
        check = 0;
        img.src = "/static/pause.png";
    }
    else {sng.pause(); check = 1; img.src = "/static/play.png";}
    if (Math.round(sng.currentTime) == Math.round(sng.duration)) {
        trk++;
        switchTreck(trk);
        console.log("время кончилось");}

});
vol.addEventListener("click", function() {
    console.log(v);
    v = vol.value;
    sng.volume = v / 100;
    vol.value = v;
});

btnPrev.addEventListener("click", function() {
    console.log("prev");
    if ((Math.round(sng.currentTime) * 100) / Math.round(sng.duration) < 2) {
        trk--;
        console.log(22);
        switchTreck(trk);
    } else {
        sng.currentTime = 0;
    }
});

btnNext.addEventListener("click", function() {
    console.log("next");
    trk++;
    switchTreck(trk);
});

