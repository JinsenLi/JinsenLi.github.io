document.addEventListener('DOMContentLoaded', () => {
    const yearSpan = document.querySelector('footer p');
    yearSpan.textContent = `© Jinsen Li ${new Date().getFullYear()}`;
});
