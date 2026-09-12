document.addEventListener('DOMContentLoaded', () => {
    const ctaButton = document.querySelector('.cta-button');
    
    if (ctaButton) {
        ctaButton.addEventListener('click', () => {
            alert('Botão clicado! Você pode adicionar mais interatividade aqui.');
        });
    }
});
