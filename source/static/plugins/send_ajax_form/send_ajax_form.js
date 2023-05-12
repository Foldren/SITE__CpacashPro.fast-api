export function set_form_ajax_listener(s_form, s_submit_btn) {
    $(s_submit_btn).on("click", () => {
        let valid = document.querySelector(s_form).checkValidity()

        if(valid){
            $.ajax({
                url: 'api/registration/signup',
                method: 'post',
                data: $(s_form).serialize(),
                success: function (data) {
                    alert(data)
                }
            })
        }
    })
}


