$(function () {
    $('div > blockquote, li > blockquote').each(function () {
        var quote = $(this)
        var translations = quote.children('blockquote')
        if (!translations.length) return
        var button = $('<button class="quote-translate">?</button>')
        button.prop('title', 'Mutasd az eredetit!')
        quote.prepend(button)
        button.on('click', function () {
            translations.each(function () {
                $(this).toggle()
            })
        })
        translations.hide()
    })
})