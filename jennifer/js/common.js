$(document).ready(function() {

	// alert('dd');

	// slick-slider
	$('.partners__slider').slick({
		infinite: true,
		speed: 400,
		slidesToShow: 4,
		arrows: true,
		cssEase: 'ease-in-out',
		autoplay: false,
		responsive: [
			{
				breakpoint: 1361,
				settings: {
					arrows: true,
					slidesToShow: 3
				}
			},
			{
				breakpoint: 1081,
				settings: {
					arrows: true,
					centerMode: false,
					slidesToShow: 2
				}
			},
			{
				breakpoint: 769,
				settings: {
					arrows: true,
					slidesToShow: 1
				}
			},
			{
				breakpoint: 461,
				settings: {
					arrows: false,
					dots: true,
					slidesToShow: 1
				}
			}
		]
	});

});