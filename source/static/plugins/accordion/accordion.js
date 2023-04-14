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
            onOpen: () => {},
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
