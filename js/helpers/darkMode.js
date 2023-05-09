export function switchDarkmode() {
    window.alert("Cambiando Dark Mode!")
    const ls = window.localStorage

    const theme = ls.getItem('theme')

    if (theme === 'dark') {
        body.classList.remove('dark-mode-background')
        titular.classList.remove('dark-mode-letter-color')
        ls.setItem('light')
    } 
}

/******** */
export function setdisplayMode() {
    // window.alert("Cambiando Display Mode")
    const body = document.body
    const titular = document.getElementById('titular')
    const ls = window.localStorage
    const theme = ls.getItem('theme')
    const btn =document.getElementById('darkmode-button')

    if (theme === 'dark') {
        ls.setItem('theme', 'dark')
    } else{
        ls.setItem('theme', 'light')
    }

    if (theme === 'dark') {
        body.classList.add('dark-mode-background')
        titular.classList.add('dark-mode-letter-color')
    } else {
        body.classList.remove('dark-mode-background')
        titular.classList.remove('dark-mode-letter-color')
    }


    btn.addEventListener('click', function () {
        let theme = ls.getItem('theme')
        /*window.alert("Cambio de modo visualización!")*/
        if (theme === 'dark'){
            ls.setItem('theme', 'light')
            body.classList.remove('dark-mode-background')
            titular.classList.remove('dark-mode-letter-color')
        }else{
            ls.setItem('theme', 'dark')
            body.classList.add('dark-mode-background')
            titular.classList.add('dark-mode-letter-color')
        }

       })
}

