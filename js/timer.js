    let end = new Date(2024, 2, 26);
    function countdown() {
        let now = new Date();
        let str = "";
        let days = Math.floor((end - now) / (1000 * 60 * 60 * 24));
        let nowH = new Date();
        let hours = 24 - now.getHours();
        let minutes = 60 - now.getMinutes();
        let seconds = 60 - now.getSeconds();
        str = `До конца распродажи осталось ${days} дней ${hours} часов ${minutes} минут ${seconds} секунд`;
        document.querySelector(".timer").innerHTML = str;
    }
    setInterval("countdown()", 1000);    