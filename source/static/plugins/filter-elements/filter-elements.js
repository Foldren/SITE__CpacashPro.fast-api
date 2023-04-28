function hide_elements(container, elements_sel) {
    container.find(`${elements_sel}:not(.hidden)`).toggleClass("hidden")
}


function format_form_to_obj(id_form_de_hash) {
    let FiltersFormObject = {
        number: String(),
        category: String(),
        tags: Array(),
        search: String(),
        price: String(),
        sort: 0, // 0 - По умолчанию, 1 - По убыванию цены, 2 - По возрастанию цены
    };

    let form_array = $("#"+id_form_de_hash).serializeArray()

    for (let key in form_array) {
        if (form_array.hasOwnProperty(key)) {
            switch (form_array[key].name) {
                case 'number':
                    FiltersFormObject.number = form_array[key].value
                    break
                case 'category':
                    FiltersFormObject.category = form_array[key].value
                    break
                case 'tags':
                    FiltersFormObject.tags.push(form_array[key].value)
                    break
                case 'search':
                    FiltersFormObject.search = form_array[key].value
                    break
                case 'price':
                    FiltersFormObject.price = form_array[key].value
                    break
                case 'sort':
                    FiltersFormObject.sort = form_array[key].value
                    break
            }
        }
    }

    return FiltersFormObject
}

function filter_element_list(elements, form_obj) {
    return elements.filter(function(index, el){
        let price = $(el).data('price'); // получаем цену элемента
        let category = $(el).data('category'); // получаем категорию элемента
        let tags = $(el).data('tags'); // получаем теги элемента
        let name = $(el).data('name'); // получаем имя элемента

        //Формируем условие
        let condition = price < form_obj.price

        if(form_obj.category !== '') {
            condition &&= category === form_obj.category
        }

        if(form_obj.tags !== '' && form_obj.tags.indexOf("Все") === -1) {
            let obj_tags = tags.indexOf(",") !== -1 ? tags.split(",") : tags

            for (let [i, value] of form_obj.tags.entries()) {
                if (obj_tags.indexOf(value) !== -1) {
                    break
                }
                if(i === (form_obj.tags.length - 1)) {
                    condition &&= false
                }
            }
        }

        if(form_obj.search !== '') {
            condition &&= name.toLowerCase().indexOf(form_obj.search.toLowerCase()) !== -1
        }

        return condition; //оставляем его в наборе при следующих условиях
    })
}

// Добавить data-order для значения расстановки элементов по умолчанию
function sort_element_list(container, selector_items, sort_direction) {
    let sorted_elems_arr = $(selector_items).sort(function(a,b){
        let an = parseInt($(a).data('price'))
        let bn = parseInt($(b).data('price'))
        let order_a = parseInt($(a).data('order'))
        let order_b = parseInt($(b).data('order'))

        if ((sort_direction === "0") && (order_a < order_b)) {
            return 1
        } else if ((sort_direction === "0") && (order_a > order_b)) {
            return -1
        }

        if(((sort_direction === "1") && (an > bn)) || ((sort_direction === "2") && (an < bn))) {
            return 1
        } else if(((sort_direction === "1") && (an < bn)) || ((sort_direction === "2") && (an > bn))) {
            return -1
        }
    })

    $.each(sorted_elems_arr, function(index, row) {
        $(container).prepend(row);
    });
}


// При загрузке страницы элементы должны быть с классом hidden, все элементы привязаны к форме через id,
// теги перечислены через запятую
export function generate_filter_el(container_sel, elements_sel, id_form_de_hash, find_products_sel, reset_btn_sel) {
    let form_inputs = $(`[form=${id_form_de_hash}]`)
    let form_obj = format_form_to_obj(id_form_de_hash)

    // Привязываем событие изменения фильтров
    form_inputs.on('input', function () {
        if (window.sessionStorage.getItem('filters_form') !== form_obj) {
            let container = $(container_sel)
            let elements = $(container_sel).children()

            // Скрываем все элементы
            hide_elements(container, elements_sel)

            // Сортируем если нужно
            sort_element_list(container, elements_sel, form_obj.sort)

            // Применяем фильтры
            let show_elements_obj = filter_element_list(elements, form_obj)

            // Обрезаем выборку по нужному количеству элементов
            show_elements_obj = show_elements_obj.slice(0, form_obj.number)

            // Отображаем результаты
            show_elements_obj.toggleClass("hidden")

            // Отображаем количество найденных продуктов
            $(find_products_sel).html($(`${elements_sel}:not(.hidden)`).length)

            // Сохраняем форму
            window.sessionStorage.setItem('filters_form', form_obj)
        }
    })

    // Привязываем событие для кнопки сброса
    $(reset_btn_sel).click(function (){

    })

    // Вызываем событие при загрузке страницы
    form_inputs.first().trigger('input')

    // Сохраняем первые фильтры
    window.sessionStorage.setItem('fst_filters_form', form_obj)

    // При загрузке страницы удаляем переменные
    document.addEventListener("DOMContentLoaded", function(){
        window.sessionStorage.removeItem('filters_form')
        window.sessionStorage.removeItem('fst_filters_form')
    });
}