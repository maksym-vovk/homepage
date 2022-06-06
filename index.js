const removeLoader = () => {
    console.log('loaded');
    const loader = document.querySelector('.loader')
    setTimeout(() => {
        loader.classList.add('loader--hidden')
        document.body.classList.remove('no-scroll')
    }, 3500)
}

window.addEventListener('load', removeLoader)
