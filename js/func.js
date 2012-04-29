$(document).ready(function () {
	$('.b-about_fotorama').fotorama({
	  width: '100%',
	  height: 350,
	  arrows: false,
	  background: 'transparent',
	  minPadding: 0,
	  margin: 0,
	  cropToFit: true,
	  onShowImg: function(data) {
		  var thumb = $('.b-about_gallery_item').get(data.index);
		  $('.b-about_gallery').find('.b-about_gallery_item_selected').removeClass('b-about_gallery_item_selected');
		  $(thumb).addClass('b-about_gallery_item_selected');
	  }
	});
	$('.b-about_gallery').find('a').click(function () {
		var fotorama = $('.b-about_fotorama').fotorama();
		fotorama.trigger('showimg', [parseInt($(this).attr('rel')), 333]);
		return false;
	});
	
	$('.b-calendar_week:not(.b-calendar_week_header) .b-calendar_week_day:not(.b-calendar_week_day_inactive)').mouseenter(function () {
		var $caption = $('.b-calendar').find('.b-calendar_week_day_caption');
		$(this).addClass('b-calendar_week_day_hover').append($caption);
	}).mouseleave(function () {
		$(this).removeClass('b-calendar_week_day_hover');
	}).click(function () {
		var $caption = $('.b-calendar').find('.b-calendar_week_day_flight');
		$('.b-calendar_week_day_selected').removeClass('b-calendar_week_day_selected');
		$(this).toggleClass('b-calendar_week_day_selected').append($caption);
	});
})