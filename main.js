$(function () {
    $('.btn-whatsapp').on('click', function () {
        var urlBase = 'https://api.whatsapp.com/send?text=',
            shareText = $('textarea.input').val();
        $('p.output').html(urlBase + encodeURIComponent(shareText));
    });
});