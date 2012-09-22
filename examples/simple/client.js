$(function () {
    $(window).click(function (event) {
        $('#debug').append($(event.target).data('hook'));
    });
});