$(function () {
    const nanobar = new Nanobar({
        id: 'progressbar'
    })

    let last_scroll_value = 0
    $(document).on('scroll', function() {
        const num = $(window).scrollTop()
        let denom = $(document).height() - $(window).height()
        denom -= ($('footer').outerHeight() || 0)
        denom -= ($('.subscribe-wrapper').outerHeight() || 0)
        const percentage = Math.min(num / denom * 100, 100)
        if (percentage != last_scroll_value) {
            nanobar.go(percentage)
        }
        last_scroll_value = percentage
    })
})