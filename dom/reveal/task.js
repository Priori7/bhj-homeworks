const reveals = document.querySelectorAll('.reveal');

function isVisible() {
    reveals.forEach(div => {
        const { top, bottom } = div.getBoundingClientRect();
    
    if (top < window.innerHeight && bottom >0) {
        if (!div.classList.contains('reveal_active')) {
          div.classList.add('reveal_active');  
        }   
    }
    });
}

window.addEventListener('scroll', isVisible);

isVisible();