const time = document.getElementById('time-left')

const birthday = new Date('06/01/1994')

const second = 1000
const minute = second * 60
const hour = minute * 60
const day = hour * 24 //milliseconds
let timerId

function countDown() {
    const today = new Date()
    const timeSpan = birthday - today
    if (timeSpan <= -day ) {
        timeLeft.innerHTML = "Hope you had a nice Birthday!!!";
        clearInterval(timerId)
        return
    } else if (timeSpan <= 0) {timeSpan}
    if (timeSpan <=0) {
        timeLeft.innerHTML = "Happy Birthday!!!";
        clearInterval(timerId)
        return
    }

    const days = Math.floor(timeSpan / day)
    const hours = Math.floor((timeSpan % days) / hour)
    const minutes = Math.floor((timeSpan % hour) / minute)
    const seconds = Math.floor((timeSpan % minute) / second)

    timeleft.innerHTML = days + 'days ' + hours + 'hours ' + minutes + 'minutes' + seconds + 'seconds'
}

setInterval(countDown, second)