import {generate_collapse} from "/source/static/plugins/collapse/collapse.js";

const collapse_main = generate_collapse(1)

// Корректировка шрифтов для FireFox
$('span,h2,h3,h1,input,div:not(.main-carousel,.carousel-cell,.flickity-viewport,.flickity-slider)').css("cssText", "font-weight: 100 !important;")

