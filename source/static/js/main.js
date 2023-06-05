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

generate_carousel_flick(
    '#carousel-3',
    {"prevNextButtons": false,
            "groupCells": '100%',
            "initialIndex": 0,
            "pageDots": false,
            "cellAlign": 'left',
    },
    {s_prev: '#carousel-prev-3',
                             s_next: '#carousel-next-3'}
)

generate_carousel_flick(
    '#carousel-4',
    {"prevNextButtons": false,
            "groupCells": '100%',
            "initialIndex": 0,
            "pageDots": false,
            "cellAlign": 'left',
    },
    {}
)