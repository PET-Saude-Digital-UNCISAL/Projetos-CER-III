document.addEventListener('DOMContentLoaded', () => {
    // Carousel
    const images = document.querySelectorAll('.carousel-image');
    let currentIndex = 0;

    function showNextImage() {
        images[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % images.length;
        images[currentIndex].classList.add('active');
    }

    setInterval(showNextImage, 3000);

    // Modal
    const modal = document.getElementById('modal');
    const closeBtn = document.querySelector('.close');
    const confirmBtn = document.getElementById('confirm-redirect');
    const projectBtns = document.querySelectorAll('.btn-project');
    let targetUrl = '';

    projectBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            targetUrl = btn.getAttribute('data-url');
            modal.style.display = 'block';
        });
    });

    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    confirmBtn.addEventListener('click', () => {
        window.open(targetUrl, '_blank');
        modal.style.display = 'none';
    });

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
});
