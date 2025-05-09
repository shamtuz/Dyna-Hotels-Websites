document.addEventListener('DOMContentLoaded', () => {
    // Card hover effects
    document.querySelectorAll('.card').forEach(card => {
        card.addEventListener('mouseover', () => {
            card.style.background = 'rgba(255, 255, 255, 0.2)';
        });
        card.addEventListener('mouseout', () => {
            card.style.background = 'rgba(255, 255, 255, 0.1)';
        });
    });

    // Button and CTA click animations
    document.querySelectorAll('.cta, button').forEach(btn => {
        btn.addEventListener('click', () => {
            btn.style.transform = 'scale(0.95)';
            setTimeout(() => btn.style.transform = 'scale(1)', 100);
        });
    });

    // Navigation link highlight
    document.querySelectorAll('nav ul li a').forEach(link => {
        link.addEventListener('click', () => {
            document.querySelectorAll('nav ul li a').forEach(l => l.style.color = '#fff');
            link.style.color = '#ffeb3b';
        });
    });
});