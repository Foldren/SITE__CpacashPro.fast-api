import {generate_collapse} from "/source/static/plugins/collapse/collapse.js";

const collapse_main = generate_collapse(1)

if(navigator.userAgent.search("Firefox") >= 0) {
    $('span, h2, label, div, input, button, h3, h1').css("cssText", "font-weight: 100 !important;")
}