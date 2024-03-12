function timer() {
    let days, hours, minutes, seconds;
    let endDate = new Date("2024-05-26T00:00:00").getTime();
    function calc() {
        let startDate = new Date().getTime();
        let timeLeft = parseInt((endDate - startDate) / 1000);
        if (timeLeft >= 0) {
            days = parseInt(timeLeft / 86400);
            timeLeft = timeLeft % 86400;

            hours = parseInt(timeLeft / 3600);
            timeLeft = timeLeft % 3600;

            minutes = parseInt(timeLeft / 60);
            seconds = parseInt(timeLeft % 60);

            document.getElementById('days').innerHTML = ('0' + days).slice(-2);
            document.getElementById('hours').innerHTML = ('0' + hours).slice(-2);
            document.getElementById('minutes').innerHTML = ('0' + minutes).slice(-2);
            document.getElementById('seconds').innerHTML = ('0' + seconds).slice(-2);
        } else {
            clearInterval(timer);
        }
    }
    calc();
    let timer = setInterval(calc, 1000);
}
timer();