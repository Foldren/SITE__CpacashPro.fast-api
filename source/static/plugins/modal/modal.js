// index = modalEl-{number}
export function generate_modal(index_model, s_btn_open) {
// set the modal menu element
    const $targetEl = document.getElementById(`modalEl-${index_model}`);

// options with default values
    const options = {
        placement: 'center',
        backdrop: 'dynamic',
        backdropClasses: 'z-40',
        closable: true,
        onHide: () => {
            $('body').find("#modal-backdrop-main").toggleClass('hidden')
        },
        onShow: () => {
            $('body').find("#modal-backdrop-main").toggleClass('hidden')
        },
        onToggle: () => {}
    }

    const modal = new Modal($targetEl, options)

    $(s_btn_open).on("click", function () {
        modal.show()
    })

    return modal
}