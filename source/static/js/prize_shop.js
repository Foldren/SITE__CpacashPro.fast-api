import {generate_range} from "/source/static/plugins/range/range.js"
import {generate_dropdown} from "/source/static/plugins/dropdown/dropdown.js"
import {generate_accordion} from "/source/static/plugins/accordion/accordion.js"
import {generate_filter_el} from "/source/static/plugins/filter-elements/filter-elements.js";
import {generate_carousel_flick} from "/source/static/plugins/carousel_flick/carousel_flick.js";
import {add_sticky_object} from "/source/static/plugins/sticky-object/sticky-object.js";
import {generate_modal} from "/source/static/plugins/modal/modal.js";
import {activate_empty_forms} from "/source/static/plugins/required-empty-form/required-empty-form.js";
import {set_form_ajax_listener} from "/source/static/plugins/send_ajax_form/send_ajax_form.js";


activate_empty_forms("#exchange-prize-form")

const modal_exchange_prize = generate_modal(1, ".open-modal")

set_form_ajax_listener(
    "#exchange-prize-form",
    "/api/prizes/send_request",
    "#get-prize-submit",
    {success_f: function(data) {
        location.replace("/page-success?event=prize")
    }
})

add_sticky_object(
    "<a id='sticky-0' href='#carousel-8' class='bg-black-custom text-white text-regular-16-400-L24 absolute -bottom-8 py-2 px-8 rounded-b-3xl text-center w-full self-center'>Вернуться к фильтрам</a>",
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



