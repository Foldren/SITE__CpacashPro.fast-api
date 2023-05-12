export function activate_empty_forms(forms_selector) {
    $(forms_selector).on("submit", function(e) {
        e.preventDefault()
    })
}