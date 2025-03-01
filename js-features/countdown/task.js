let timer;
let timeLeft = 40;
function startTimer() {
    document.getElementById("timer").innerText = timeLeft;

    timer = setInterval(() => {
        timeLeft--;
        document.getElementById("timer").innerText = timeLeft;

        if (timeLeft < 0) {
            clearInterval(timer);
            alert("Вы победили в конкурсе");            
        }
    }, 1000);
}

window.onload = startTimer;

