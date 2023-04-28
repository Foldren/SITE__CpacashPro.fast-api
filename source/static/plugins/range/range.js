function set_range_progress_bar(css_variables, percent_progress_bg){
    css_variables.attr("style",
                    `--percents-fill-range-progress: ${percent_progress_bg};`)
}


export function generate_range(progress_bar_color, thumb_color, range_color, range_selector, {value_selector=null, path_to_plugin='/source/static/plugins/range'}) { // Класс с точкой
    $('head').append(`<link rel="stylesheet" href="${path_to_plugin}/range.css" type="text/css"/>`);
    let css_variables = $(':root')
    let range = $(range_selector)

    // Задаем цвета для range
    css_variables.attr("style",
            `--bg-color-range-progress: ${progress_bar_color};\
             --bg-color-range-thumb: ${thumb_color};\
             --bg-color-range: ${range_color};`)

    // Задаем начальную длину прогесс бара (при загрузке страницы)
    set_range_progress_bar(css_variables, range.attr("value") / (range.attr("max") / 100) + "%" )


    range.on("input", function(e) {
        if(navigator.userAgent.indexOf("Firefox") === -1) { // Если не firefox
            let percent_progress_bg = e.target.value / (e.target.max / 100) + "%" //Считаем длину прогресс бара в процентах
            set_range_progress_bar(css_variables, percent_progress_bg)
        }
        if(value_selector != null) {
            $(value_selector).html("до " + e.target.value)
        }
    })
}

