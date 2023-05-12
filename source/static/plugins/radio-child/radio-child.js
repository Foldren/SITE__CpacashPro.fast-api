// Добавляет класс is-active для включенных лейблов
export function set_radio_listener(name, group_selector) {
    $(`[name=${name}]`).on("input", function(e) {
        $(group_selector).removeClass("is-active")
        $(e.target).parent().find(group_selector).addClass("is-active")
    })
}