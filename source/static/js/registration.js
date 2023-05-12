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
        check_pasw: true,
        s_password: "#password-reg",
        s_retype: "#retype-password-reg",
        s_message: "#invaild-password"},
)

stop_acc_on_valid_listener(
    ".reg-input-required",
    ".reg-info-btn", {}
)

activate_empty_forms("#registration-form")

set_form_ajax_listener("#registration-form", ".end-reg-btn")