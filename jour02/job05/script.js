const footer = document.getElementById('footer');

const updateFooterColor = () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight;
    const windowHeight = window.innerHeight;

    const scrollPercent = (scrollTop / (docHeight - windowHeight)) * 100;

    // Dégradé de couleurs en HSL (teinte de 0° à 240°)
    const hue = Math.round((300 * scrollPercent) / 100);
    footer.style.backgroundColor = `hsl(${hue}, 100%, 50%)`; 

    requestAnimationFrame(updateFooterColor);
};

updateFooterColor();

