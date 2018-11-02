import sayHello from './lib/sayHello.js';
import slick from 'slick-carousel';

sayHello();

$('.js-slider').slick({
	autoplay: true,
	autoplaySpeed: 4000,
	dots: false,
	fade: true,
	appendArrows: ".js-slider-btns",
	infinite: true
});