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

