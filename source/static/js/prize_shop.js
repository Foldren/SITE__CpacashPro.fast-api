import {generate_range} from "/source/static/plugins/range/range.js"
import {generate_dropdown} from "/source/static/plugins/dropdown/dropdown.js"
import {generate_accordion} from "/source/static/plugins/accordion/accordion.js"
import {generate_filter_el} from "/source/static/plugins/filter-elements/filter-elements.js";

generate_filter_el(
    "#products-container",
    ".product-element",
    "filters-form",
    "#products-number",
    "#reset-filters-btn"
)

generate_range(
    'rgb(132 204 22)',
    'rgb(0 0 0)',
    'rgb(243 244 246)',
    '.range-lime',
    {value_selector: '#range-price-value'}
)

const dropdown_prize_shop_sort = generate_dropdown(
    1,
    'bottom')

const accordion_prize_shop = generate_accordion(
    2,
    1,
    {active_item: 1, active_classes: 'bg-lime-custom text-white', inactive_classes: 'bg_white'})

const accordion_answer_questions = generate_accordion(
    6,
    2,
    {active_item: 0, active_classes: 'is-active-ac-i bg-white/100'})



