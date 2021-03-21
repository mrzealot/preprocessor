function set_theme(theme) {
    if (theme == 'light') {
        $('#lightmode').hide()
        $('#darkmode').css('display', '')
    } else if (theme == 'dark') {
        $('#lightmode').css('display', '')
        $('#darkmode').hide()
    }
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
}

const prefers_dark = window.matchMedia('(prefers-color-scheme: dark)')
const storage_theme = localStorage.getItem('theme')

// initial setup
set_theme(storage_theme || (prefers_dark.matches ? 'dark' : 'light'))

// handle preference change
prefers_dark.addEventListener('change', event => {
    set_theme(event.matches ? 'dark' : 'light')
})

// handle manual switch buttons
$('#lightmode').on('click', () => set_theme('light'))
$('#darkmode').on('click', () => set_theme('dark'))