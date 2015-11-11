/* Author: Edie Johnny (edie.eu@gmail.com) */

/* Edie Simple Slider */
var cooldown     = $(".edie-slides").data("cooldown");
var width        = $(".edie-slides").data("width") || 0;
var height       = $(".edie-slides").data("height") || 0;
var position     = $(".edie-slides").data("position") || "100%";
var currentIndex = 0;
var nextIndex    = 0;
var slides       = [];
$(".edie-slides-container .edie-slide").each(function(index){
	$(this).css({
		"background"          : "url('" + $(this).data("src") + "') no-repeat",
		"background-position" : "top center",
		"background-size"     : position,
		"width"               : "100%",
		"padding-top"         : (height > 0 ? height + "px" : $(".edie-slides").parent().innerHeight() + "px"),
		"display"             : "none"
	});
	slides[index] = $(this);
});

var initEdieSlider = function(nextIndex) {
	if(typeof nextIndex === "undefined") {
		var nextIndex = 0;
	}
	if(nextIndex >= slides.length) {
		nextIndex = 0;
	}
	if(slides.length > 0) {
		var current = setTimeout(function(){
			$(".edie-slides-container .edie-slide").each(function(index){
				if($(this).css("display") != "none") {
					currentIndex = index;
				}
			});
			slides[currentIndex].fadeOut(500, "swing", function(){
				slides[currentIndex].css("display", "none");
				slides[nextIndex].hide().fadeIn();
			});
			initEdieSlider(nextIndex + 1);
		}, cooldown * 1000);
	}
}

slides[0].fadeIn();
var current = initEdieSlider(1);