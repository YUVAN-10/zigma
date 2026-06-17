// Zigma Software - Main JavaScript

(function () {
    function adjustForMobile() {
        const isMobile = window.innerWidth < 640;
        if (isMobile) {
            document.documentElement.setAttribute('data-mobile', 'true');
        } else {
            document.documentElement.removeAttribute('data-mobile');
        }
    }

    adjustForMobile();
    window.addEventListener('resize', adjustForMobile);
})();

document.addEventListener('DOMContentLoaded', () => {
    console.log('Zigma Software site initialized.');
});
