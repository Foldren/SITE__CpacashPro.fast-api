export function set_form_ajax_listener(s_form, url, s_submit_btn, {success_f = null}) {
    $(s_submit_btn).on("click", () => {
        let valid = document.querySelector(s_form).checkValidity()

        if(valid){
            $(s_submit_btn).attr("disabled","disabled")
            $(s_submit_btn).removeClass("opacity-20")
            $(s_submit_btn).addClass("opacity-20")

            $.ajax({
                url: url,
                method: 'post',
                data: $(s_form).serialize(),
                success: function (data) {
                    $(s_submit_btn).removeAttr("disabled")
                    $(s_submit_btn).removeClass("opacity-20")

                    if(success_f !== null) {
                        success_f(data)
                    }
                }
            })
        }
    })
}


