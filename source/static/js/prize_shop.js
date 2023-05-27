import {generate_range} from "/source/static/plugins/range/range.js"
import {generate_dropdown} from "/source/static/plugins/dropdown/dropdown.js"
import {generate_accordion} from "/source/static/plugins/accordion/accordion.js"
import {generate_filter_el} from "/source/static/plugins/filter-elements/filter-elements.js";
import {generate_carousel_flick} from "/source/static/plugins/carousel_flick/carousel_flick.js";
import {add_sticky_object} from "/source/static/plugins/sticky-object/sticky-object.js";


add_sticky_object(
    "<a id='sticky-0' href='#carousel-8' class='bg-lime-custom text-black-custom text-regular-16-400-L24 absolute -bottom-8 w-full -ml-12 pl-12 py-2'>Вернуться к фильтрам</a>",
    '#sticky-0',
    "#products-container",
    ".green-grid-block",
    '#navbar-item',
)

generate_filter_el(
    "#products-container",
    ".product-element",
    "filters-form",
    ".products-number",
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

generate_dropdown(
    2,
    'bottom')

const accordion_prize_shop = generate_accordion(
    2,
    1,
    {active_item: 1, active_classes: 'bg-lime-custom !text-white', inactive_classes: 'bg_white'})

const accordion_answer_questions = generate_accordion(
    6,
    2,
    {active_item: 0, active_classes: 'is-active-ac-i bg-white/100'})

generate_carousel_flick(
    '#carousel-8',
    {"prevNextButtons": false,
            "groupCells": '100%',
            "initialIndex": 0,
            "pageDots": false,
            'cellAlign': 'left',
    },
    {}
)



