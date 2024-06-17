const clickDarkMode = document.querySelector('.btn-darkmode')
const circleDarkMode = document.querySelector('.circle')
const mainBackground = document.querySelector('.main')
const headingTitle = document.querySelector('.heading h1')
const bodyTitle = document.querySelector('.body-samsung h1')
const boxBackground = document.querySelector('.box')
const paramBox = document.querySelector('.box p')
const button = document.querySelectorAll('.btn button')

clickDarkMode.addEventListener('click', (e) => {
    if (!circleDarkMode.classList.contains('active')) {
        clickDarkMode.style.background = '#4daf54'
        circleDarkMode.classList.add('active')
        mainBackground.style.background = '#2d2c2d'
        headingTitle.style.color = '#4daf54'
        bodyTitle.style.color = '#4daf54'
        boxBackground.style.background = '#3b3a3b'
        paramBox.style.color = 'white'
        for (let index = 0; index < button.length; index++) {
            const element = button[index];
            element.classList.add('active')

        }
    }
    else {
        circleDarkMode.classList.remove('active')
        clickDarkMode.style.background = '#aaaaaa'
        mainBackground.style.background = 'none'
        headingTitle.style.color = '#0a6cf1'
        bodyTitle.style.color = '#0a6cf1'
        boxBackground.style.background = '#dadada'
        paramBox.style.color = 'black'
        for (let index = 0; index < button.length; index++) {
            const element = button[index];
            element.classList.remove('active')

        }
    }
})