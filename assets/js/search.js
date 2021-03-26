async function init_search() {
    await new Promise((resolve, reject) => {
        $.getJSON('/content.json', function(data) {
    
            const fuse = new Fuse(Object.values(data), {
                includeScore: true,
                minMatchCharLength: 3,
                ignoreLocation: true,
                threshold: 0,
                keys: [
                    {
                        name: 'title',
                        weight: 10
                    },
                    {
                        name: 'tags',
                        weight: 5
                    },
                    'content'
                ]
            })
    
            $('#search-term').typeahead({
                minLength: 3
            }, {
                name: 'posts',
                source: (query, callback, async_callback) => {
                    setTimeout(() => {
                        query = query.trim()
                        const found = fuse.search(query)
                        const result = []
                        for (const f of found) {
                            result.push(f.item)
                        }
                        async_callback(result)
                    }, 1)
                },
                display: item => {
                    return $('<div></div>').html(item.title).text()
                },
                templates: {
                    notFound: item => {
                        return `<div>Erre sajnos nem találok semmit...</div>`
                    }
                }
            })

            $('#search-term').bind('typeahead:select', function(ev, suggestion) {
                window.location = suggestion.url
            })

            resolve()
        })
    })
}

$(function() {

    init_search().then(() => {
        $('#search-loading').hide()
        $('#search-term').show()
    })

    const mm_config = {
        onShow: () => {
            $('#search-term').focus()
        }
    }
    MicroModal.init(mm_config)
    hotkeys('f,k,esc', event => {
        if ($('#search-modal').hasClass('is-open')) return true
        event.preventDefault()
        MicroModal.show('search-modal', mm_config)
    })
})