/* Author: Edie Johnny (edie.eu@gmail.com) */

/* Edie Simple Slider */
var cooldown     = $(".edie-slides").data("cooldown");
var width        = $(".edie-slides").data("width") || 0;
var height       = $(".edie-slides").data("height") || 0;
var currentIndex = 0;
var nextIndex    = 0;
var slides       = [];
$(".edie-slides-container .edie-slide").each(function(index){
	$(this).css({
		"background"          : "url('" + $(this).data("src") + "') no-repeat",
		"background-position" : "top center",
		"background-size"     : "cover",
		"width"               : "100%",
		"height"              : (height > 0 ? height + "px" : $(".edie-slides").parent().innerHeight() + "px"),
		"visibility"          : "hidden",
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
				if($(this).css("visibility") == "visible") {
					currentIndex = index;
				}
			});
			slides[currentIndex].fadeOut(500, "swing", function(){
				slides[currentIndex].css("visibility", "hidden");
				slides[nextIndex].hide().css("visibility", "visible").fadeIn();
			});
			initEdieSlider(nextIndex + 1);
		}, cooldown * 1000);
	}
}

slides[0].hide().css("visibility", "visible").fadeIn();
var current = initEdieSlider(1);