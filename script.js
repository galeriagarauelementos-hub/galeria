// Script mínimo para o site funcionar
console.log('Garau Elementos carregado');

document.addEventListener('DOMContentLoaded', () => {
    // Theme toggle
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            document.documentElement.toggleAttribute('data-theme');
        });
    }
    
    console.log('Site pronto');
});