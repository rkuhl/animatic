(function($) {
	$.fn.animatic = function( options ) {
		// Defaults extended with options
		var settings = $.extend({
			'frames'				: 2 // liczba klatek 
			, 'fps'			 		: 30 // fps frames per secound
			, 'direction'			: 'right' // ustawienie klatek na SPRITE'cie 'right' / 'down'
		}, options);

		return this.each(function() {
			var $self = $(this);
			// sprawdzam czy element DOM zawiera własne ustawienia (data)
			var my_settings = $.extend({}, settings);			
			$.each(my_settings, function( key, value ) {				
				if ($self.data(key)) {
					my_settings[key] = $self.data(key);					
				}
			});

			// wszystkie pozycje tła
			var startBgPos = $(this).css("background-position").split(" ");
			startBgPos[0] = parseInt(startBgPos[0].split("px")[0]);
			startBgPos[1] = parseInt(startBgPos[1].split("px")[0]);
			var bgPositions = [startBgPos];
			for (var i = 1; i < my_settings.frames; i++) {
				var pX = bgPositions[i - 1][0];
				var pY = bgPositions[i - 1][1];
				switch (my_settings.direction) {
					case 'down':
						bgPositions.push([pX, pY - $self.height()]);
						break;
					case 'up':
						bgPositions.push([pX, pY + $self.height()]);
						break;
					case 'left':
						bgPositions.push([pX + $self.width(), pY]);
						break;
					default:
						bgPositions.push([pX - $self.width(), pY]);
						break;
				}
			};


			var frame = 0;
			var delay = 1000 / my_settings.fps;
			var interval = setInterval(function() {
				var x = bgPositions[frame][0]
					, y = bgPositions[frame][1];
				$self.css("background-position", x + "px " + y + "px");
				frame ++;
				if (frame >= my_settings.frames)
					frame = 0;
			}, delay);

			

		});
			
		
	};

})(jQuery);