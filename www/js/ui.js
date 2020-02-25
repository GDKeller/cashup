let cashAmount = 0.00
let dailyHours = 8

let hourRate = 5
let minuteRate = hourRate/60
let secondRate = minuteRate/60
let tenthSecRate = secondRate/10
let milRate = secondRate/1000

console.log(hourRate + ":" + minuteRate + ":" + secondRate + milRate)

var counterEl = document.getElementById("count")
counterEl.innerHTML = cashAmount.toFixed(2)

// var counterSecondEl = document.getElementById("countSecond")
//
// var counterHourEl = document.getElementById("cashHour")
//
// var counterMinEl = document.getElementById("cashMin")
//
// var counterSecEl = document.getElementById("cashSec")
//
// var counterMilEl = document.getElementById("cashMil")

var hourRateEl = document.getElementById("hourRate")
hourRateEl.innerHTML = hourRate.toFixed(2)

var minRateEl = document.getElementById("minRate")
minRateEl.innerHTML = minuteRate.toFixed(2)

var secRateEl = document.getElementById("secRate")
secRateEl.innerHTML = secondRate.toFixed(4)



// function cashCounter() {
//     let i = 0;
//     setInterval(function() {
//         if ( i == 10 ) clearInterval(this)
//         else cashAmount = cashAmount + tenthSecRate
//         document.getElementById("count").innerHTML = cashAmount.toFixed(4)
//     }, 100)
//
// }
//
//
// cashCounterSecond()
// function cashCounterSecond() {
//     let i = 0;
//     setInterval(function() {
//         if ( i == 100 ) clearInterval(this)
//         else cashAmount = cashAmount + cashPerSecond
//         document.getElementById("countSecond").innerHTML = cashAmount.toFixed(4)
//     }, 1000)
//
// }





// Stopwatch feature

let offset = 0,
    paused = true;

render();

var startButton = document.getElementById("start")
startButton.addEventListener("click", e => {
    startStopwatch()
});

var stopButton = document.getElementById("stop")
stopButton.addEventListener("click", e => {
    stopStopwatch()
});

var resetButton = document.getElementById("reset")
resetButton.addEventListener("click", e => {
    resetStopwatch()
});



function startStopwatch(e) {
    if (paused) {
        paused = false;
        offset -= Date.now();
        render();
    }
}

function stopStopwatch(e) {
    if (!paused) {
        paused = true;
        offset += Date.now();
    }
}

function resetStopwatch(e) {
    if (paused) {
        offset = 0;
        render();
    } else {
        offset = -Date.now();
    }
}


function format(value, scale, modulo, padding) {
    value = Math.floor(value / scale) % modulo;
    return value.toString().padStart(padding, 0);
}



function render() {
    var value = paused ? offset : Date.now() + offset;
    let mil = format(value, 1, 1000, 3)
    let sec = format(value, 1000, 60, 2)
    let min = format(value, 60000, 60, 2)
    let hour = format(value, 600000, 60, 2)

    let cashMil = mil * milRate
    let cashSec = sec * secondRate
    let cashMin = min * minuteRate
    let cashHour = hour * hourRate

    let totalCount = (cashHour + cashMin + cashSec + cashMil).toFixed(5)
    let totalCountRound = (cashHour + cashMin + cashSec + cashMil).toFixed(2)
    let lastThree = totalCount.slice(totalCount.length - 3)
    document.getElementById("lastThree").innerHTML = lastThree
    counterEl.innerHTML = totalCountRound



    document.querySelector('#s_ms').textContent = mil
    document.querySelector('#s_seconds').textContent = sec
    document.querySelector('#s_minutes').textContent = min

    if(!paused) {
        requestAnimationFrame(render);
    }
}