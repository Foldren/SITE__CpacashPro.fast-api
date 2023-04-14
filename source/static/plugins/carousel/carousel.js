export function generate_carousel(number_items, index_carousel) {
    let result = {
        items: [],
        options: {
            defaultPosition: 0,
            interval: 3000,

            indicators: {
                activeClasses: 'bg-lime-500',
                inactiveClasses: 'bg-gray-400',
                items: []
            },

            // callback functions
            onNext: () => {
            },
            onPrev: () => {
            },
            onChange: () => {
            }
        }
    }

    for(let i=0; i<number_items; i++){
        result.items.push({
            position: i,
            el: document.getElementById(`carousel-${index_carousel}-item-${i+1}`)})
        result.options.indicators.items.push({
            position: i,
            el: document.getElementById(`carousel-${index_carousel}-indicator-${i+1}`)})
    }

    const carousel = new Carousel(result.items, result.options)

    const $prevButton = document.getElementById(`data-carousel-${index_carousel}-prev`);
    const $nextButton = document.getElementById(`data-carousel-${index_carousel}-next`);

    $prevButton.addEventListener('click', () => {
        carousel.prev();
    });

    $nextButton.addEventListener('click', () => {
        carousel.next();
    });

    return carousel
}



