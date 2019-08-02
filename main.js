$(function () {
    $('.btn-whatsapp').on('click', function () {
        var urlBase = 'https://wa.me/?text=',
            shareText = $('#input').val();
        $('#output').html(urlBase + encodeURIComponent(shareText));

        var copyText = document.getElementById("output");
        copyText.select();
        document.execCommand("copy");
    });
    $('.btn-whatsapp').on('mouseenter', function(){
        console.log('foo')
        $("#myTooltip").html('Copy to clipboard');
    });
    $('.btn-whatsapp').on('mouseup', function(){
        $("#myTooltip").html('Copied to clipboard!');
    });
});

