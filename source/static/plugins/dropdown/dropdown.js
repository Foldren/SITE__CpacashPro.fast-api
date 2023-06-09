// set the dropdown menu element
export function generate_dropdown(index_dropdown, placement) {
    let result = {
        $targetEl: document.getElementById(`dropdownMenu-${index_dropdown}`),
        // set the element that trigger the dropdown menu on click
        $triggerEl: document.getElementById(`dropdownButton-${index_dropdown}`),
        // options with default values
        options: {
            placement: placement,
            triggerType: 'click',
            offsetSkidding: 0,
            offsetDistance: 5,
            delay: 300,
            onHide: (e) => {
                $(e._targetEl).show()
                $(e._targetEl).slideUp(200).fadeOut({
                    duration: 200,
                    queue: false
                });
            },
            onShow: (e) => {
                $(e._targetEl).hide()
                $(e._targetEl).slideDown(200).fadeIn({
                    duration: 200,
                    queue: false
                });
            },
            onToggle: () => {}
        }
    }

    // При выборе пункта вставляем содержимое в кнопку
    $(`#dropdownMenu-${index_dropdown}`).find(".dropdown-radio").on("input", function(e){
        let dropdown_item_text = $(e.target).parent().find(".dropdown-text").html()
        $(`#dropdownButton-${index_dropdown}>span`).html(dropdown_item_text)
    })

    return new Dropdown(result.$targetEl, result.$triggerEl, result.options)

}
