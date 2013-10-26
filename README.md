jquery-animatic.js
========

jQuery CSS sprite animation plugin, by [Roman Kühl](http://www.kuhl.pl).  

  
Example
---
CSS:  

```css
.animatic {
	width: 50px;
	height: 50px;
	background: transparent url("sprite.jpg") no-repeat;
}
```
HTML:    
<pre><code>
&lt;script src="jquery.js" type="text/javascript"&gt;&lt;/script&gt;  
&lt;script src="jquery-animatic.js" type="text/javascript"&gt;&lt;/script&gt;
&lt;div class="animatic"&gt;&lt;/div&gt;
</code></pre>
JS:  
<pre><code>
$(document).ready(function() {
	$(".animatic").animatic();
});
</code></pre>


