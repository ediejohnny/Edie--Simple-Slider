# Edie' Simple Slider
A very simple slider made with jQuery with a single effect of fadeIn() and fadeOut().

# How to use
Import the ess.js from the 'javascripts' folder to your HTML file after the jQuery plugin and you're done.

# HTML syntax
```
<div class="edie-slides" data-cooldown="8" data-height="0">
	<div class="edie-slides-container">
		<div class="edie-slide-01 edie-slide" data-src="images/slide/slide-01.jpg"></div>
		<div class="edie-slide-02 edie-slide" data-src="images/slide/slide-02.jpg"></div>
		<div class="edie-slide-03 edie-slide" data-src="images/slide/slide-03.jpg"></di>v
	</div>
</div>
```

# Options
``` data-cooldown ``` means the seconds to load the next images.

``` data-height ``` means the height of the container, if it doesn't exists or if it's ```0```, the code will attemp to use the parent's height.
