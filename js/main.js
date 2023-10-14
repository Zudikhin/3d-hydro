$(document).ready(function() {
    "use strict";

    $(".hydro_block_left_play").click(function() {
        $(".hydro_video").addClass("active");
    });
    
    $(".hydro_video_back").click(function() {
        $(".hydro_video").removeClass("active");
        $("#video").get(0).pause();
        $('#video').get(0).currentTime = 0;
    });

    $(".hydro_video_close").click(function() {
        $(".hydro_video").removeClass("active");
        $("#video").get(0).pause();
        $('#video').get(0).currentTime = 0;
    });

});