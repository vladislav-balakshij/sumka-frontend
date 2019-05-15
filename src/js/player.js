jQuery(function ($) {
    $('[data-play]').click(function () {
        player = $('#' + $(this).attr("data-play")).get(0);
        if(player.paused){
            player.play();
            $(".icons.play").hide();
            $(".icons.pause").show();
        }else{
            player.pause();
            $(".icons.play").show();
            $(".icons.pause").hide();
        }
        console.log(player);

        // console.log($('#' . video).get(0));
    });

});