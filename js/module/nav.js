export const initNav = () => {
    const body = document.querySelector('body');
    // Меню
    const mobileMenu = document.querySelector('.mobile-menu');
    const menuButtons = document.querySelectorAll('.btn-close-menu');
    const mobileMenuLinks = document.querySelectorAll('.mobile-menu a');

    menuButtons.forEach((menuButton) => {
        menuButton.addEventListener('click', e => {
            menuButton.classList.toggle('active');
            mobileMenu.classList.toggle('is-active');
            // body.classList.toggle('lock');
        });
    });

    mobileMenuLinks.forEach(link => {
        link.addEventListener('click', (evt) => {
            evt.preventDefault();
            menuButton.classList.remove('active');
            mobileMenu.classList.remove('is-active');
            // body.classList.remove('lock');
        });
    });
}