export function add_sticky_object(html_obj, s_obj, s_container_top, s_container_bottom, s_push_in_element) {
    $(document).ready(function() {
        let position_top = $(s_container_top).position().top + 500

        if (window.innerWidth < 768) {
            position_top = $(s_container_top).position().top - 200
        }

        let position_bottom = $(s_container_bottom).position().top + 500

        if (window.innerWidth < 768) {
            position_bottom = $(s_container_bottom).position().top
        }

        var lastScrollTop = 0
        $(window).on('scroll', function () {
            if (window.innerWidth < 1025) {
                let st = $(this).scrollTop()
                if (st < lastScrollTop) {
                    if (st < position_top && st < position_bottom) {
                        $(s_push_in_element).find(s_obj).remove()
                    } else if (st >= position_bottom) {
                        $(s_push_in_element).find(s_obj).remove()
                    } else if (st < position_bottom && st > position_top) {
                        $(s_push_in_element).find(s_obj).remove()
                        $(s_push_in_element).append(html_obj)
                    }
                } else {
                    if (st >= position_top && st < position_bottom) {
                        $(s_push_in_element).find(s_obj).remove()
                        $(s_push_in_element).append(html_obj)
                    } else if (st >= position_bottom) {
                        $(s_push_in_element).find(s_obj).remove()
                    }
                }
                lastScrollTop = st
            }
        })

        $(s_obj).on('click', function () {
            $(s_obj).remove()
        })
    })
}
