(function($) {
	"use strict";

	var Parallax, parallax;

	$.fn.parallax = function(speed, type) {
		if (!this.length) {
			return this;
		}

		Parallax = function() {
			var windowHeight, $window;
			$window = $(window);
			windowHeight = $window.height();
			$window.on("resize", function () {
				windowHeight = $window.height();
			});
		};

		Parallax.prototype.init = function(speed, type, element) {
			var $this;
			$this = this;

			$this.pos(speed, type, element);
			$(window).on('scroll resize', function() {
				$this.pos(speed, type, element);
			});
		};

		Parallax.prototype.pos = function(speed, type, element) {
			var $this, pos, velocity, translate;
			$this   = this;
			var pos = $(window).scrollTop();
			velocity = (pos * speed).toFixed();
			if(type == 'block'){
				translate = "translateY(" + velocity + "px)";
				element.css({
					'-webkit-transform': translate,
					'-moz-transform'   : translate,
					'-o-transform'     : translate,
					'-ms-transform'    : translate,
					'transform'        : translate
				});
			}
			if(type == 'background'){
				element.css('background-position', 'center ' + velocity + "px");
			}
		};

		parallax = new Parallax();

		this.each(function() {
			parallax.init(speed, type, $(this));
		});
	};

})(jQuery);