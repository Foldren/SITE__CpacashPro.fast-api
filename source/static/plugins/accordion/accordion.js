export function generate_accordion(number_items,
                                   index_accordion,
                                   {active_item = 0,
                                    active_classes = "nothing",
                                    inactive_classes = "inactive-nothing",
                                    without_fst_element = 0}) {

    let result = {
        accordionItems: [],
        options: {
            alwaysOpen: false,
            activeClasses: active_classes,
            inactiveClasses: inactive_classes,
            onOpen: function(e) { // Если есть класс disabled не позволяем открыть слайд
                for(let key in e._items) {
                    let elem = e._items[key]
                    if(elem.active === true) {
                        let current_slide = $("#"+elem.id)
                        if(current_slide.hasClass("disabled")) {
                            let length_id = e._items[key].id.length
                            let id_item = e._items[key].id
                            let id_without_i = id_item.substring(0, id_item.lastIndexOf("-")+1)
                            let index_elem = parseInt(id_item.substring(id_item.lastIndexOf("-")+1, length_id))

                            if(index_elem !== 0) {
                                e.open(id_without_i+(index_elem-1))
                            } else {
                                e.open(id_without_i+"1")
                            }
                        }
                    }
                }
            },
            onClose: () => {},
            onToggle: () => {},
        }
    }

    if (without_fst_element) {
        $("body").append(`<div id='accordion-${index_accordion}-heading-1' class='hidden'></>`)
    }

    for(let i=1; i<=number_items; i++){
        result.accordionItems.push({
            id: `accordion-${index_accordion}-heading-${i}`,
            triggerEl: document.querySelector(`#accordion-${index_accordion}-heading-${i}`),
            targetEl: document.querySelector(`#accordion-${index_accordion}-body-${i}`),
            active: ((active_item>0) && (i==active_item)) ? true : false,
        })
    }

    const accordion = new Accordion(result.accordionItems, result.options);

    return accordion
}
