jQuery(function(a){a("[data-play]").click(function(){player=a("#"+a(this).attr("data-play")).get(0),player.paused?(player.play(),a(".icons.play").hide(),a(".icons.pause").show()):(player.pause(),a(".icons.play").show(),a(".icons.pause").hide()),console.log(player)})});