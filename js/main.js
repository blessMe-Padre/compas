import { initNav } from "./module/nav.js";
import { initSlider } from "./module/sliders.js";
import { initCurrentYear } from "./module/current-year.js";
import { initScrollToTop } from "./module/scroll-to-top.js";
import { initScroll } from "./module/scroll.js";
import { initAccordionMenu } from "./module/accordion-menu.js";
import { initCardSlider } from "./module/card-slider.js";
import { initPopup } from "./module/popup.js";

window.addEventListener('DOMContentLoaded', () => {
    console.log('подключен скрипт main.js');

    initNav();
    initSlider();
    initCurrentYear();
    initScrollToTop();
    initScroll();
    baguetteBox.run('.gallery-wrapper');
    initAccordionMenu();
    initCardSlider();
    initPopup();

    // DOMContentLoaded
});
