import {generate_accordion} from "/source/static/plugins/accordion/accordion.js";
import {set_radio_listener} from "/source/static/plugins/radio-child/radio-child.js";
import {activate_empty_forms} from "/source/static/plugins/required-empty-form/required-empty-form.js";
import {stop_acc_on_valid_listener} from "/source/static/plugins/stop_acc_on_valid_form/stop_acc_on_valid_form.js";
import {set_form_ajax_listener} from "/source/static/plugins/send_ajax_form/send_ajax_form.js";

generate_accordion(
    3,
    3,
    {active_item: 1, without_fst_element: 1}
)

set_radio_listener(
    "social_network",
    ".group-social"
)

stop_acc_on_valid_listener(
    ".auth-block input",
    ".auth-btn",
    {
        check_auth: true,
        s_password: "#password-reg",
        s_retype: "#retype-password-reg",
        s_message: "#invaild-password",
        s_valid_email_m: "#invaild-email"},
)

stop_acc_on_valid_listener(
    ".reg-input-required",
    ".reg-info-btn", {}
)

activate_empty_forms("#registration-form")

set_form_ajax_listener(
    "#registration-form",
    "api/registration/signup",
    ".end-reg-btn",
    {success_f: function(data) {
            if(data.status === 2) {
                let error_block = $("#error-registration")

                if((data.error === "Enter code from image" || data.error === 'Wrong code')) { // Если неверный код меняем картинку
                    $("#reg-captcha-block").find("img").attr("src", data.captcha)
                    $("#reg-captcha-block").removeClass("hidden")
                    if (data.error === 'Wrong code') {
                        error_block.html("Код введен неверно") // Выводим ошибку
                    } else if (data.error === 'Enter code from image') {
                        error_block.html("Введите код с картинки. Иногда код нужно ввести несколько раз.")
                    } else {
                        error_block.html(data.error)
                    }
                    error_block.removeClass("invisible")
                }
                else if(data.error === "Такой email уже зарегистрирован") {
                    error_block.html(data.error + ". Обновите страницу и укажите другой email.")
                    error_block.removeClass("invisible")
                    $("#reg-captcha-block").removeClass("hidden")
                    $("#reg-captcha-block").addClass("hidden")
                    $(".end-reg-btn").addClass("opacity-20")
                    $(".end-reg-btn").attr("disabled", "disabled")
                    $(".end-reg-btn").addClass("disabled")
                }
            } else if(data.status === 1) {
                $(".end-reg-btn").attr("disabled", "disabled")
                $(".end-reg-btn").addClass("opacity-20")
                $(".end-reg-btn").addClass("disabled")
                location.replace("/page-success?event=reg")
            }
        }
    })