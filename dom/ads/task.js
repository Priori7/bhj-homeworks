const rotators = document.getElementsByClassName('rotator');

for (let i = 0; i < rotators.length; i++) {
    const cases = rotators[i].getElementsByClassName('rotator__case');

    if (cases.length > 0) {
        cases[0].classList.add('rotator__case_active');

        let currentIndex = 0;

        setInterval(function () {
            cases[currentIndex].classList.remove('rotator__case_active');
            currentIndex = (currentIndex + 1) % cases.length;
            cases[currentIndex].classList.add('rotator__case_active');
        }, 1000);
    }
}