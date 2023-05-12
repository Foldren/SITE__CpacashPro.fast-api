export function validate_email(s_form) {
    let result = false
    $.ajax({
        url: 'api/registration/validate_email',
        method: 'post',
        data: $(s_form).serialize(),
        async: false,
        success: function (data) {
            result = data
        }
    })
    return result
}


