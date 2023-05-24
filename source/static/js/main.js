import {generate_carousel_flick} from "/source/static/plugins/carousel_flick/carousel_flick.js";


generate_carousel_flick(
    '#carousel-1',
    {"prevNextButtons": false,
            "groupCells": '100%',
            "initialIndex": 0,
            "pageDots": false,
    },
    {s_prev: '#carousel-prev-1',
                             s_next: '#carousel-next-1'}
)

generate_carousel_flick(
    '#carousel-2',
    {"prevNextButtons": false,
            "groupCells": '100%',
            "initialIndex": 0,
            "pageDots": false,
    },
    {}
)