export function set_form_ajax_listener(s_form, url, s_submit_btn, {success_f = null}) {
    $(s_submit_btn).on("click", () => {
        let valid = document.querySelector(s_form).checkValidity()

        if(valid || !check_valid_email){
            $.ajax({
                url: url,
                method: 'post',
                data: $(s_form).serialize(),
                success: function (data) {
                    if(success_f !== null) {
                        success_f(data)
                    }
                }
            })
        }
    })
}


