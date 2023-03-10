const changeSlide = (current, last) => {
    const currentSlider = document.querySelectorAll('[data-slide]')
    const currentPointer = document.querySelectorAll('[data-pointer]')

    currentSlider[last]?.classList.remove('slider-active')
    currentPointer[last]?.classList.remove('pointer-active')

    currentSlider[current]?.classList.add('slider-active')
    currentPointer[current]?.classList.add('pointer-active')
}

document.querySelector('#menu').addEventListener('click', function (event) {
    const element = event.target.parentElement.classList

    if (!element.contains('active')) {
        document.querySelector('.active')?.classList.remove('active')
        element.add('active')
    }
})

document.querySelector('.sliders-pointers').addEventListener('click', function (event) {
    const element = event.target.classList

    console.log(document.querySelector('[data-slide]'))

    if (!element.contains('pointer-active')) {
        document.querySelector('.pointer-active')?.classList.remove('pointer-active')
        element.add('pointer-active')

        let teste = null
        const pointers = [...document.querySelectorAll('.pointer')]
        const current = pointers.filter((element, index) => {

            if (element.classList.contains('pointer-active')) {
                teste = index
            }
            return element.classList.contains('pointer-active')
        })
    }
})

window.addEventListener("load", function (event) {
    let current = 0
    let last = current
    changeSlide(current, last)


    this.setInterval(() => {
        changeSlide(current, last)

        last = current
        current = current === 2 ? 0 : current += 1
    }, 2000)
});