export function generate_collapse(index_collapse) {
    const $targetEl = document.getElementById(`targetEl-${index_collapse}`);
    const $triggerEl = document.getElementById(`triggerEl-${index_collapse}`);

    const options = {
        onCollapse: () => {},
        onExpand: () => {},
        onToggle: () => {},
    };

    const collapse = new Collapse($targetEl, $triggerEl, options);

    return collapse
}

