// Меняет disable для остановки работы аккордиона в зависимости от валидности формы и отправляет форму для проверки валидности
export function stop_acc_on_valid_listener(s_inputs,
                                           s_buttons,
                                           {check_pasw = false,
                                            s_password = "",
                                            s_retype = "",
                                            s_message = ""}) {

    $(s_buttons).on("mousedown", () => {
        let valid = document.querySelector(s_inputs).validity.valid
        // let form = $("#"+$(s_buttons).attr("form"))
        let password = $(s_password).val()
        let retype = $(s_retype).val()

        if(check_pasw) {
            if(password !== retype && valid === false) {
                $(s_buttons).addClass("disabled")
                $(s_message).removeClass("invisible")
            } else if(password === retype && valid === true) {
                $(s_buttons).removeClass("disabled")
                $(s_message).addClass("invisible")
            }
        } else {
            if(!valid) {
                $(s_buttons).addClass("disabled")
            } else {
                $(s_buttons).removeClass("disabled")
            }
        }
    })
}