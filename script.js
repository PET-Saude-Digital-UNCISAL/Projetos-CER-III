document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('.link-item');
    const logo = document.querySelector('.logo');
    let selectedLink = null;
    
    // Animação de entrada
    links.forEach((link, index) => {
        link.style.opacity = '0';
        link.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            link.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
            link.style.opacity = '1';
            link.style.transform = 'translateY(0)';
        }, index * 80 + 200);
    });
    
    // Eventos de clique nos links
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Remove seleção anterior
            selectedLink?.classList.remove('selected');
            
            // Adiciona seleção atual
            link.classList.add('selected');
            selectedLink = link;
            
            // Remove seleção após 1 segundo
            setTimeout(() => {
                link.classList.remove('selected');
                selectedLink = null;
            }, 1000);
        });
    });
    
    // Animação da logo
    logo.addEventListener('click', () => {
        logo.style.transform = 'rotate(360deg) scale(1.1)';
        setTimeout(() => {
            logo.style.transform = '';
        }, 600);
    });
});