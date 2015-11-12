# Edie' Simple Slider
A very simple slider made with jQuery with a single effect of fadeIn() and fadeOut().
*For study purposes.*

# How to use
Import the ess.js from the 'javascripts' folder to your HTML file after the jQuery plugin and you're done.

# HTML syntax
```
<div class="edie-slides" data-cooldown="8" data-height="0">
	<div class="edie-slides-container">
		<div class="edie-slide" data-src="images/slide/slide-01.jpg"></div>
		<div class="edie-slide" data-src="images/slide/slide-02.jpg"></div>
		<div class="edie-slide" data-src="images/slide/slide-03.jpg"></div>
	</div>
</div>
```

# Options
``` data-cooldown ``` means the seconds to load the next image.

``` data-width ``` means the width of the container.

``` data-height ``` means the height of the container, if it doesn't exists or if it's ```0```, the code will attemp to use the parent's height.

``` data-size ``` is the same of the ``` background-size ``` CSS property. It accepts the same values.

``` data-position ``` is the same of the ``` background-position ``` CSS property. It accepts the same values.

``` data-init-auto ``` is a boolean that indicates if the slide will start automatically or not. If set to ```false``` you have to initialize it by yourself calling the ```initEdieSlider()``` function.

You can also set the ``` data-cooldown ``` for each of the slides to customize the cooldown time of each one separately.
