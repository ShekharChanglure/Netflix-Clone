// JavaScript to enhance responsiveness, e.g., for dynamic resizing or toggling classes

document.addEventListener('DOMContentLoaded', function() {
    // Adjust the hero section height based on window size
    function adjustHeroHeight() {
        const hero = document.querySelector('.hero');
        hero.style.height = window.innerHeight * 0.8 + 'px';
    }

    // Adjust hero section on load and resize
    window.addEventListener('resize', adjustHeroHeight);
    adjustHeroHeight(); // Initial call on page load

    // Example: Add a scroll listener for a sticky header effect
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        if (window.scrollY > 50) {
            header.classList.add('sticky');
        } else {
            header.classList.remove('sticky');
        }
    });
});
