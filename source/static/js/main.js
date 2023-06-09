import {generate_carousel_flick} from "/source/static/plugins/carousel_flick/carousel_flick.js";
import {
    set_bind_show_diff_query_elements,
    set_bind_show_elements
} from "/source/static/plugins/show_elements_on_scroll/show_elements_on_scroll.js";

set_bind_show_elements('#show-el-1', 600)
set_bind_show_elements('#show-el-2', 2300)
set_bind_show_elements('#show-el-3', 4164)
set_bind_show_elements('#show-el-4', 6600)
set_bind_show_diff_query_elements('.gifts-show', 4164, 5700)

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