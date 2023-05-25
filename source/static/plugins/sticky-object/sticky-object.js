export function add_sticky_object(html_obj, s_obj, position_top, position_bottom, s_push_in_element) {
    var lastScrollTop = 0

    $(window).on('scroll', function() {

        let st = $(this).scrollTop()
        if(st < lastScrollTop) {
            if(st < position_top && st < position_bottom){
                $(s_push_in_element).find(s_obj).remove()
            }
            else if (st >= position_bottom) {
                $(s_push_in_element).find(s_obj).remove()
            }
        }
        else {
            if(st >= position_top && st < position_bottom){
                $(s_push_in_element).find(s_obj).remove()
                $(s_push_in_element).append(html_obj)
            }
            else if (st >= position_bottom) {
                $(s_push_in_element).find(s_obj).remove()
            }
        }
        lastScrollTop = st
    })

    $(s_obj).on('click', function () {
        $(s_obj).remove()
    })
}
