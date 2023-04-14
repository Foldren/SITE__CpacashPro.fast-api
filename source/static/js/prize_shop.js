import {generate_range} from "/source/static/plugins/range/range.js"
import {generate_carousel} from "/source/static/plugins/carousel/carousel.js"
import {generate_dropdown} from "/source/static/plugins/dropdown/dropdown.js"
import {generate_accordion} from "/source/static/plugins/accordion/accordion.js"

const carousel_prize_shop = generate_carousel(2, 2)

generate_range(
    '/source/static/plugins/range',
    'rgb(132 204 22)',
    'rgb(0 0 0)',
    '#E5E7EB',
    '.range-lime')

const dropdown_prize_shop_sort = generate_dropdown(
    1,
    'bottom')

const accordion_prize_shop = generate_accordion(
    2,
    1,
    {active_item: 1, active_classes: 'bg-lime-500', inactive_classes: 'bg_white'})

const accordion_answer_questions = generate_accordion(
    6,
    2,
    {active_item: 0, active_classes: 'is-active-ac-i bg-white/100'})



