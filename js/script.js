/*-----Javascript for Project Name */
$(document).ready(function () {

   
});


$(function () {
    $('#progress-elements').waypoint(function() {
        $('.progress-bar').each(function() {
            $(this).animate({
                width: $(this).attr('aria-valuenow') + '%'

            }, 1500);

        });

        this.destroy();

    }, {
        offset: '100%'
    });
});