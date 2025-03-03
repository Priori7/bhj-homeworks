let playing = true,
    dead = 0,
    lost = 0,
    maxLost = 5,
    activeHole = null;

const getHole = index => document.getElementById(`hole${index}`);

const deactivateHole = () => {
    if (activeHole !== null) {
        getHole(activeHole).classList.remove('hole_has-mole');
        activeHole = null;
    }
};

const activateRandomHole = () => {
    deactivateHole();
    activeHole = Math.floor(Math.random() * 9) + 1;
    getHole(activeHole).classList.add('hole_has-mole');
};

const handleClick = index => {
    if (playing) {
        if (index === activeHole) {
            dead++;
            document.getElementById('dead').textContent = `Убито кротов: ${dead}`;
        } else {
            lost++;
            document.getElementById('lost').textContent = `Промахов: ${lost}`;
        }

        if (lost >= maxLost) {
            playing = false;
            alert("Вы проиграли! Нажмите ОК, чтобы начать заново.");
            resetGame();
        } else {
            setTimeout(activateRandomHole, 1000);
        }
    }
};

for (let i = 1; i <= 9; i++) {
    getHole(i).onclick = () => handleClick(i);
}

const resetGame = () => {
    dead = 0;
    lost = 0;
    document.getElementById('dead').textContent = `Убито кротов: ${dead}`;
    document.getElementById('lost').textContent = `Промахов: ${lost}`;
    playing = true;
    activateRandomHole();
};

resetGame();