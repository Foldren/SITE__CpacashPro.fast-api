function set_range_progress_bar(css_variables, percent_progress_bg){
    css_variables.attr("style",
                    `--percents-fill-range-progress: ${percent_progress_bg};`)
}


export function generate_range(path_to_plugin, progress_bar_color, thumb_color, range_color, range_selector) { // Класс с точкой
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

    if(navigator.userAgent.indexOf("Firefox") === -1) // Если не firefox
        range.on("input", function(e) {
            let percent_progress_bg = e.target.value / (e.target.max / 100) + "%" //Считаем длину прогресс бара в процентах
            set_range_progress_bar(css_variables, percent_progress_bg)
        })
}

