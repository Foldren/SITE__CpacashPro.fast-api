export function generate_collapse(index_collapse) {
    const $targetEl = document.getElementById(`targetEl-${index_collapse}`);
    const $triggerEl = document.getElementById(`triggerEl-${index_collapse}`);

    const options = {
        onCollapse: (e) => {
            $(e._targetEl).show()
            $(e._targetEl).slideUp(200).fadeOut({
                duration: 200,
                queue: false
            });
        },
        onExpand: (e) => {
            $(e._targetEl).hide()
            $(e._targetEl).slideDown(200).fadeIn({
                duration: 200,
                queue: false
            });
        },
        onToggle: () => {},
    };

    const collapse = new Collapse($targetEl, $triggerEl, options);

    return collapse
}

