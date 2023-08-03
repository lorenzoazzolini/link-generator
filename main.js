$(function () {
    $('.btn-whatsapp').on('click', function () {
        var urlBase = 'https://wa.me/?text=',
            shareText = $('#input').val();
        $('#output').html(urlBase + encodeURIComponent(shareText));


    });
    $('#output').on('mouseenter', function(){
        $("#myTooltip").html('Copy to clipboard');
    });
    $('#output').on('mouseup', function(){
        $("#myTooltip").html('Copied to clipboard!');
    });
    $('#output').on('click', function(){
        var copyText = document.getElementById("output");
        copyText.select();
        document.execCommand("copy");
    });
});

$(function () {
    $('.btn-telegram').on('click', function () {
        var urlBase = 'https://t.me/share/url?url=&text=',
            shareText = $('#input').val();
        $('#output2').html(urlBase + encodeURIComponent(shareText));


    });
    $('#output2').on('mouseenter', function(){
        $("#myTooltip2").html('Copy to clipboard');
    });
    $('#output2').on('mouseup', function(){
        $("#myTooltip2").html('Copied to clipboard!');
    });
    $('#output2').on('click', function(){
        var copyText = document.getElementById("output2");
        copyText.select();
        document.execCommand("copy");
    });
});
