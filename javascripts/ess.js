/* Author: Edie Johnny (edie.eu@gmail.com) */

/* Edie Simple Slider */

// Set jQuery container
var edieSlides   = $(".edie-slides");

// Options and their default values
var cooldown     = edieSlides.data("cooldown")  || 5000;
var width        = edieSlides.data("width")     || "100%";
var height       = edieSlides.data("height")    || "200px";
var position     = edieSlides.data("position")  || "top";
var size         = edieSlides.data("size")      || "cover";
var initAuto     = edieSlides.data("init-auto") || true;

// Necessary variables
var parentHeight       = edieSlides.parent().height();
var viewPortHeight     = $(window).height();
var currentIndex       = 0;
var nextIndex          = 0;
var individualCooldown = 0;
var disable            = 0;
var slides             = [];

// Make sure the slide will appear if parent container haven't a height setted
// even if we have to force the height according to the option 'height'

// If the user setted a height in percentage and the parent container
// doesn't have a height setted, we have to set it according to the size
// of the viewport

// But if the parent container has a height setted and the user choose the
// height in percentage, we apply our height based on that percentage
// according to the parent height; for example, if the parent container
// have a height of 600px and the user setted 50% on the height, the slide
// will have 300px of height
if(typeof height == "string") {
	if(parentHeight == 0) {
		$(".edie-slides").parent().height((parseInt(height) / 100) * viewPortHeight);
		parentHeight = $(".edie-slides").parent().height();
		height = parentHeight + "px";
	} else {
		height = (parseInt(height) / 100) * parentHeight + "px";
	}
}

// Set the options for each 'edie-slide' inside the container
$(".edie-slides-container .edie-slide").each(function(index){
	$(this).css({
		"background"              : "url('" + $(this).data("src") + "') no-repeat fixed",
		"background-position"     : position,
		"-webkit-background-size" : position,
		"-moz-background-size"    : position,
		"-o-background-size"      : position,
		"background-size"         : size,
		"width"                   : width,
		"height"                  : $(this).width() / 2 + "px",
		"display"                 : "none"
	});
	slides[index] = $(this);
});

// Disable plugin if inside the container has only one 'edie-slide'
// because there's no purpose on keeping fadein and fadeout the same image
var countSlides = slides.length;
if(countSlides == 1) {
	disable = 1;
}

var initEdieSlider = function(slide) {
	var i = (slide >= countSlides ? 0 : slide) || 0;
	var s = slides[i] || slides[0];
	s.fadeIn();
	var c = slides[i].data("cooldown") || cooldown;
	var init = disable || setTimeout(function(){
		slides[i].fadeOut(500, "swing", function(){
			initEdieSlider(i + 1);
		});
	}, c);
}

if(initAuto) {
	initEdieSlider();
}
