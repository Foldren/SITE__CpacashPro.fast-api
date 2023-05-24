function set_blur_cell_items(s_carousel){
    let cell_items = $(`${s_carousel} .carousel-cell`)
    cell_items.removeClass("opacity-60 blur-sm")
    let non_selected_items = cell_items.not(".is-selected")
    non_selected_items.addClass("opacity-60 blur-sm")
}

export function generate_carousel_flick(s_carousel,
                                        params = {},
                                       {blur = false,
                                        s_indicators=false,
                                        s_prev=false,
                                        s_next = false
                                       }){

    var flkty = new Flickity(s_carousel, params)

    if(blur){
        set_blur_cell_items(s_carousel)
    }

    if(s_prev) {
        $(s_prev).on("click", function () {
            flkty.previous()
            if (blur) {
                set_blur_cell_items(s_carousel)
            }
        })
    }

    if(s_next) {
        $(s_next).on("click", function () {
            flkty.next()
            if (blur) {
                set_blur_cell_items(s_carousel)
            }
        })
    }

    if(s_indicators) {
        $(s_indicators + " .carousel-indicator").on("click", function() {
            flkty.select($(this).data("carousel-i"))
            if(blur){
                set_blur_cell_items(s_carousel)
            }
        })
    }

    return flkty
}
