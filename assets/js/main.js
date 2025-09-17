/*
	Spectral by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var	$window = $(window),
		$body = $('body'),
		$wrapper = $('#page-wrapper'),
		$banner = $('#banner'),
		$header = $('#header');

	// Breakpoints.
		breakpoints({
			xlarge:   [ '1281px',  '1680px' ],
			large:    [ '981px',   '1280px' ],
			medium:   [ '737px',   '980px'  ],
			small:    [ '481px',   '736px'  ],
			xsmall:   [ null,      '480px'  ]
		});

	// CERN Loader functionality - (slow loading)
		var loaderCreated = false;
		var pageLoadStart = Date.now();
		
		function createCERNLoader() {
			// Only create if it doesn't exist and hasn't been created yet
			if (!loaderCreated && $('#cern-loader').length === 0) {
				var loaderHTML = '<div id="cern-loader">' +
					'<div class="cern-loader-content">' +
					'<img src="images/loader.gif" alt="CERN Loader" class="cern-loader-gif">' +
					'</div>' +
					'</div>';
				$body.prepend(loaderHTML);
				loaderCreated = true;
			}
		}
		
		function hideCERNLoader() {
			var $loader = $('#cern-loader');
			if ($loader.length && !$loader.hasClass('loaded')) {
				$loader.addClass('loaded');
				// Remove loader from DOM after transition
				window.setTimeout(function() {
					$loader.remove();
					loaderCreated = false;
				}, 150);
			}
		}
		
		// Only show loader if page takes longer than 800ms to load
		var loaderTimeout = window.setTimeout(function() {
			// Check if page is still loading after 800ms
			if ($body.hasClass('is-preload')) {
				createCERNLoader();
			}
		}, 800);
		
		// Hide loader if it takes too long (fallback - 5 seconds)
		var maxTimeout = window.setTimeout(function() {
			hideCERNLoader();
		}, 5000);

	// Play initial animations on page load.
		$window.on('load', function() {
			var loadTime = Date.now() - pageLoadStart;
			
			window.setTimeout(function() {
				$body.removeClass('is-preload');
				clearTimeout(loaderTimeout);
				clearTimeout(maxTimeout);
				hideCERNLoader();
			}, 50);
		});

	// Mobile?
		if (browser.mobile)
			$body.addClass('is-mobile');
		else {

			breakpoints.on('>medium', function() {
				$body.removeClass('is-mobile');
			});

			breakpoints.on('<=medium', function() {
				$body.addClass('is-mobile');
			});

		}

	// Scrolly.
		$('.scrolly')
			.scrolly({
				speed: 1500,
				offset: $header.outerHeight()
			});

	// Menu.
		$('#menu')
			.append('<a href="#menu" class="close"></a>')
			.appendTo($body)
			.panel({
				delay: 500,
				hideOnClick: true,
				hideOnSwipe: true,
				resetScroll: true,
				resetForms: true,
				side: 'right',
				target: $body,
				visibleClass: 'is-menu-visible'
			});

	// Header.
		if ($banner.length > 0
		&&	$header.hasClass('alt')) {

			$window.on('resize', function() { $window.trigger('scroll'); });

			$banner.scrollex({
				bottom:		$header.outerHeight() + 1,
				terminate:	function() { $header.removeClass('alt'); },
				enter:		function() { $header.addClass('alt'); },
				leave:		function() { $header.removeClass('alt'); }
			});

		}

})(jQuery);