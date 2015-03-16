jquery-animatic.js
========

jQuery CSS sprite animation plugin, by [Roman Kühl](http://www.kuhl.pl).  

  
Example
---
Check out the [example](http://kuhl.pl/github/animatic/).  
CSS:  
```css
.animatic {
	width: 50px;
	height: 50px;
	background: transparent url("sprite.jpg") no-repeat;
}
```  
HTML:    
```html
<script src="jquery.js" type="text/javascript"></script>  
<script src="jquery-animatic.js" type="text/javascript"></script>
<div class="animatic"></div>
```  
JS:  
```javascript
$(document).ready(function() {
	$(".animatic").animatic();
});
```
Options
---
```frames``` number of animation frames  
```fps``` frames per secound  
```direction``` direction (frames on sprite)
JS:  
```javascript
// global settings
$(document).ready(function() {
	$(".animatic").animatic({
		frames : 4
		, fps : 15
		, direction : 'right'
	});
});
```  
HTML:  
```html
<div class="animatic" data-frames="24" data-fps="10" data-direction="down"></div>
```



