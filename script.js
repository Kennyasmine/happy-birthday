document.addEventListener('DOMContentLoaded', () => {
    const revealButton = document.getElementById('revealButton');
    const birthdayContainer = document.getElementById('birthdayContainer');
    
    revealButton.addEventListener('click', () => {
        birthdayContainer.classList.remove('hidden');
        revealButton.parentElement.classList.add('hidden');
        createFireworks();
    });
    
    const balloons = document.querySelectorAll('.balloon');
    
    balloons.forEach(balloon => {
        balloon.addEventListener('animationiteration', () => {
            const randomX = Math.floor(Math.random() * 100);
            balloon.style.left = `${randomX}%`;
        });
    });
});

function createFireworks() {
    const fireworksContainer = document.getElementById('fireworks');
    
    setInterval(() => {
        const firework = document.createElement('div');
        firework.className = 'firework';
        firework.style.left = `${Math.random() * 100}%`;
        firework.style.top = `${Math.random() * 100}%`;
        fireworksContainer.appendChild(firework);
        
        setTimeout(() => {
            firework.remove();
        }, 1000);
    }, 500);
}
