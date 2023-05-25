export function add_sticky_object(html_obj, position_top, s_push_in_element) {
    var lastScrollTop = 0;
    $(window).on('scroll', function() {
        let st = $(this).scrollTop();
        if(st < lastScrollTop) {
            if(st >= position_top):

        }
        else {
            console.log('down 1');
        }
        lastScrollTop = st;
    });
}
