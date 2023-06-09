import {generate_accordion} from "/source/static/plugins/accordion/accordion.js";
import {stop_acc_on_valid_listener} from "/source/static/plugins/stop_acc_on_valid_form/stop_acc_on_valid_form.js";
import {activate_empty_forms} from "/source/static/plugins/required-empty-form/required-empty-form.js";
import {set_form_ajax_listener} from "/source/static/plugins/send_ajax_form/send_ajax_form.js";


activate_empty_forms("#recovery-form")

// generate_accordion(
//     3,
//     9,
//     {active_item: 1, without_fst_element: 1}
// )