$(document).ready(() => {
    $('button').click(function () {
        var content = $(this).html() + ''
        console.log(content)
        var splite = content.split(':')
        var container = $('#container');
        var css = {}
        css[splite[0]] = splite[1].trim();
        console.log(css)
        container.css(css)
    })
})