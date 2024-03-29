export const initAccordionMenu = () => {
    const accordion = document.querySelectorAll('.menu > li');

    accordion.forEach((el) => {
        const button = el.querySelector('a');
        const content = el.querySelector('ul');

        button.addEventListener('click', (evt) => {
            evt.preventDefault();


            const currentButton = evt.currentTarget;
            currentButton.classList.toggle('is-active');
            content.classList.toggle('is-active');

            if (currentButton.classList.contains('is-active')) {
                content.style.maxHeight = content.scrollHeight + 'px';
            } else {
                content.style.maxHeight = null;
            }

        });
    });


    const sidebarButton = document.querySelector('.catalog-menu-button');
    const sidebarContent = document.querySelector('.catalog-form__sidebar');

    if (sidebarButton) {
        sidebarButton.addEventListener('click', () => {
            sidebarButton.classList.toggle('is-active');
            sidebarContent.classList.toggle('is-active');
        });
    }
}