// Меняет disable для остановки работы аккордиона в зависимости от валидности формы и отправляет форму для проверки валидности
import {validate_email} from "/source/static/plugins/validate_email/validate_email.js";

function addClassTrue(selector, obj_class) {
    $(selector).removeClass(obj_class)
    $(selector).addClass(obj_class)
}

export function stop_acc_on_valid_listener(s_inputs,
                                           s_buttons,
                                           {check_auth = false,
                                            s_password = "",
                                            s_retype = "",
                                            s_message = "",
                                            s_valid_email_m = ""}) {

    $(s_buttons).on("mousedown", () => {
        let valid = document.querySelector(s_inputs).validity.valid
        let password = $(s_password).val()
        let retype = $(s_retype).val()
        let form = $("#"+$(s_buttons).attr("form"))

        form.submit()

        if(check_auth) {
            let valid_email = validate_email("#"+$(s_buttons).attr("form"))
            let valid_pasw = document.querySelector(s_password).validity.valid

            if(valid_email) {
                addClassTrue(s_buttons, "disabled")
                addClassTrue(s_valid_email_m, "invisible")

                if(password !== retype) {
                    $(s_message).removeClass("invisible")
                } else if (password === retype && (valid === false || valid_pasw === false)) {
                    addClassTrue(s_message,"invisible")
                } else if (password === retype && valid === true && valid_pasw === true) {
                    $(s_buttons).removeClass("disabled")
                    addClassTrue(s_message,"invisible")
                }
            } else {
                addClassTrue(s_buttons,"disabled")
                $(s_valid_email_m).removeClass("invisible")
                $(s_message).removeClass("invisible")

                if (password === retype) {
                    addClassTrue(s_message,"invisible")
                }
            }
        } else {
            if(!valid) {
                addClassTrue(s_buttons,"disabled")
            } else {
                $(s_buttons).removeClass("disabled")
            }
        }
    })
}