let cashAmount = 0.00
let hourlyRate = 40
let dailyHours = 8
let cashPerSecond = hourlyRate/60/60

document.getElementById("count").innerHTML = cashAmount.toFixed(2)
document.getElementById("hourlyrate").innerHTML = hourlyRate.toFixed(2)
document.getElementById("cashpersecond").innerHTML = cashPerSecond.toFixed(2)


cashCounter()
function cashCounter() {
    let i = 0;
    setInterval(function() {
        if ( i == 100 ) clearInterval(this)
        else cashAmount = cashAmount + cashPerSecond
        document.getElementById("count").innerHTML = cashAmount.toFixed(2)
    }, 1000)

}
