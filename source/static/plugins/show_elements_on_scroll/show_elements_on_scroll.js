// use show-el-0 class
export function set_bind_show_elements(s_element, top_position, mob_top_position=0) {
    if (window.innerWidth < 768) {
        top_position = mob_top_position
    }

    $(document).ready(function() {
        let element = $(s_element)
        let scroll_pos = $(this).scrollTop()

        if (scroll_pos <= top_position) {
            element.hide()
            element.children().css("opacity", 0)

            $(window).on('scroll', function () {
                let element = $(s_element)
                let scroll_pos = $(this).scrollTop()

                if ((scroll_pos >= top_position) && (element.attr("style").indexOf('display: none') !== -1)) {
                    element.show(300)

                    setTimeout(() => {
                        element.children().animate({
                            opacity: 1,
                            queue: true
                        }, 1500)
                    }, 200)
                }
            })
        }
    })
}

export function set_bind_show_diff_query_elements(s_elements, top_position, mob_top_position) {
    if (window.innerWidth < 768) {
        top_position = mob_top_position
    }

    $(document).ready(function() {
        let elements = $(s_elements)
        elements.hide()

        $(window).on('scroll', function () {
            let scroll_pos = $(this).scrollTop()
            let element_last = $(s_elements).eq(2)

            if (scroll_pos >= top_position && element_last.parent().find("circle").hasClass("fill-lime-light-custom")) {
                let duration = 400

                $(s_elements).each(function(index) {
                    $(this).delay(duration * index).slideDown(duration, function (){
                        if($(this).parent().find("circle").hasClass("fill-lime-light-custom")) {
                            $(this).parent().find("circle").removeClass("fill-lime-light-custom")
                            $(this).parent().find("path").removeClass("fill-lime-custom")
                        } else {
                            $(this).finish()
                        }
                    });
                });
            }
        })
    })
}