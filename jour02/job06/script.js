const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
let konamiIndex=0;

document.addEventListener('keydown', (event) => {
    if (event.key === konamiCode[konamiIndex]) {
        konamiIndex++;

        if (konamiIndex === konamiCode.length) {
            activateKonamiMode();
            konamiIndex = 0; 
        }
    } else {
        konamiIndex = 0; 
    }
});

function activateKonamiMode(){
    document.body.classList.add('konami-style');
    alert('mode Plateforme activé');
    document.getElementById('konami-message').style.display = 'block';

}