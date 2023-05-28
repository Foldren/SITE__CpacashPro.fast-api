import {activate_empty_forms} from "/source/static/plugins/required-empty-form/required-empty-form.js";
import {set_form_ajax_listener} from "/source/static/plugins/send_ajax_form/send_ajax_form.js";

activate_empty_forms("#authorization-form")

set_form_ajax_listener(
    "#authorization-form",
    "api/registration/sign_in",
    "#auth-btn",
    {success_f: function(data) {
            if(data.status === 2) {
                let error_block = $("#error-authorization")

                if((data.error === "Enter code from image" || data.error === 'Wrong code')) { // Если неверный код меняем картинку
                    $("#auth-captcha-block").find("img").attr("src", data.captcha)
                    $("#auth-captcha-block").removeClass("hidden")
                    if (data.error === 'Wrong code') {
                        error_block.html("Код введен неверно") // Выводим ошибку
                    } else if (data.error === 'Enter code from image') {
                        error_block.html("Введите код с картинки. Иногда код нужно ввести несколько раз.")
                    } else {
                        error_block.html(data.error)
                    }
                    error_block.removeClass("invisible")
                }
                else {
                    error_block.html(data.error)
                    error_block.removeClass("invisible")
                    $("#auth-captcha-block").removeClass("hidden")
                    $("#auth-captcha-block").addClass("hidden")
                    $(".end-reg-btn").addClass("opacity-20")
                    $(".end-reg-btn").attr("disabled", "disabled")
                    $(".end-reg-btn").addClass("disabled")
                }
            } else if(data.status === 1) {
                $('#auth-btn').attr("disabled", "disabled")
                $("#auth-btn").addClass("opacity-20")
                $("#auth-btn").addClass("disabled")
                location.replace("https://my.cpacash.pro/")
            }
        }
    })