/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Uses the built in easing capabilities added In jQuery 1.1
 * to offer multiple easing options
 *
 * TERMS OF USE - jQuery Easing
 * 
 * Open source under the BSD License. 
 * 
 * Copyright Â© 2008 George McGinley Smith
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
*/

// t: current time, b: begInnIng value, c: change In value, d: duration
jQuery.easing['jswing'] = jQuery.easing['swing'];

jQuery.extend( jQuery.easing,
{
	def: 'easeOutQuad',
	swing: function (x, t, b, c, d) {
		//alert(jQuery.easing.default);
		return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
	},
	easeInQuad: function (x, t, b, c, d) {
		return c*(t/=d)*t + b;
	},
	easeOutQuad: function (x, t, b, c, d) {
		return -c *(t/=d)*(t-2) + b;
	},
	easeInOutQuad: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t + b;
		return -c/2 * ((--t)*(t-2) - 1) + b;
	},
	easeInCubic: function (x, t, b, c, d) {
		return c*(t/=d)*t*t + b;
	},
	easeOutCubic: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t + 1) + b;
	},
	easeInOutCubic: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t + b;
		return c/2*((t-=2)*t*t + 2) + b;
	},
	easeInQuart: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t + b;
	},
	easeOutQuart: function (x, t, b, c, d) {
		return -c * ((t=t/d-1)*t*t*t - 1) + b;
	},
	easeInOutQuart: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
		return -c/2 * ((t-=2)*t*t*t - 2) + b;
	},
	easeInQuint: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t*t + b;
	},
	easeOutQuint: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t*t*t + 1) + b;
	},
	easeInOutQuint: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;
		return c/2*((t-=2)*t*t*t*t + 2) + b;
	},
	easeInSine: function (x, t, b, c, d) {
		return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
	},
	easeOutSine: function (x, t, b, c, d) {
		return c * Math.sin(t/d * (Math.PI/2)) + b;
	},
	easeInOutSine: function (x, t, b, c, d) {
		return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
	},
	easeInExpo: function (x, t, b, c, d) {
		return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;
	},
	easeOutExpo: function (x, t, b, c, d) {
		return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
	},
	easeInOutExpo: function (x, t, b, c, d) {
		if (t==0) return b;
		if (t==d) return b+c;
		if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
		return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
	},
	easeInCirc: function (x, t, b, c, d) {
		return -c * (Math.sqrt(1 - (t/=d)*t) - 1) + b;
	},
	easeOutCirc: function (x, t, b, c, d) {
		return c * Math.sqrt(1 - (t=t/d-1)*t) + b;
	},
	easeInOutCirc: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
		return c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b;
	},
	easeInElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
	},
	easeOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
	},
	easeInOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d/2)==2) return b+c;  if (!p) p=d*(.3*1.5);
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
		return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*.5 + c + b;
	},
	easeInBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*(t/=d)*t*((s+1)*t - s) + b;
	},
	easeOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
	},
	easeInOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158; 
		if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
		return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
	},
	easeInBounce: function (x, t, b, c, d) {
		return c - jQuery.easing.easeOutBounce (x, d-t, 0, c, d) + b;
	},
	easeOutBounce: function (x, t, b, c, d) {
		if ((t/=d) < (1/2.75)) {
			return c*(7.5625*t*t) + b;
		} else if (t < (2/2.75)) {
			return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
		} else if (t < (2.5/2.75)) {
			return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
		} else {
			return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
		}
	},
	easeInOutBounce: function (x, t, b, c, d) {
		if (t < d/2) return jQuery.easing.easeInBounce (x, t*2, 0, c, d) * .5 + b;
		return jQuery.easing.easeOutBounce (x, t*2-d, 0, c, d) * .5 + c*.5 + b;
	}
});

var dateFormat = function () {
	var	token = /d{1,5}|m{1,5}|yy(?:yy)?|([HhMsTt])\1?|[LloSZ]|"[^"]*"|'[^']*'/g,
		timezone = /\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g,
		timezoneClip = /[^-+\dA-Z]/g,
		pad = function (val, len) {
			val = String(val);
			len = len || 2;
			while (val.length < len) val = "0" + val;
			return val;
		};

	// Regexes and supporting functions are cached through closure
	return function (date, mask, utc) {
		var dF = dateFormat;

		// You can't provide utc if you skip other args (use the "UTC:" mask prefix)
		if (arguments.length == 1 && Object.prototype.toString.call(date) == "[object String]" && !/\d/.test(date)) {
			mask = date;
			date = undefined;
		}

		// Passing date through Date applies Date.parse, if necessary
		date = date ? new Date(date) : new Date;
		if (isNaN(date)) throw SyntaxError("invalid date");

		mask = String(dF.masks[mask] || mask || dF.masks["default"]);

		// Allow setting the utc argument via the mask
		if (mask.slice(0, 4) == "UTC:") {
			mask = mask.slice(4);
			utc = true;
		}

		var	_ = utc ? "getUTC" : "get",
			d = date[_ + "Date"](),
			D = date[_ + "Day"](),
			m = date[_ + "Month"](),
			y = date[_ + "FullYear"](),
			H = date[_ + "Hours"](),
			M = date[_ + "Minutes"](),
			s = date[_ + "Seconds"](),
			L = date[_ + "Milliseconds"](),
			o = utc ? 0 : date.getTimezoneOffset(),
			flags = {
				d:    d,
				dd:   pad(d),
				ddd:  dF.i18n.dayNames[D],
				dddd: dF.i18n.dayNames[D + 7],
				ddddd: D > 0 ? D - 1 : 6,
				m:    m + 1,
				mm:   pad(m + 1),
				mmm:  dF.i18n.monthNames[m],
				mmmm: dF.i18n.monthNames[m + 12],
				mmmmm: dF.i18n.monthNamesAlt[m + 12],
				yy:   String(y).slice(2),
				yyyy: y,
				h:    H % 12 || 12,
				hh:   pad(H % 12 || 12),
				H:    H,
				HH:   pad(H),
				M:    M,
				MM:   pad(M),
				s:    s,
				ss:   pad(s),
				l:    pad(L, 3),
				L:    pad(L > 99 ? Math.round(L / 10) : L),
				t:    H < 12 ? "a"  : "p",
				tt:   H < 12 ? "am" : "pm",
				T:    H < 12 ? "A"  : "P",
				TT:   H < 12 ? "AM" : "PM",
				Z:    utc ? "UTC" : (String(date).match(timezone) || [""]).pop().replace(timezoneClip, ""),
				o:    (o > 0 ? "-" : "+") + pad(Math.floor(Math.abs(o) / 60) * 100 + Math.abs(o) % 60, 4),
				S:    ["th", "st", "nd", "rd"][d % 10 > 3 ? 0 : (d % 100 - d % 10 != 10) * d % 10]
			};

		return mask.replace(token, function ($0) {
			return $0 in flags ? flags[$0] : $0.slice(1, $0.length - 1);
		});
	};
}();

// Some common format strings
dateFormat.masks = {
	"default":      "ddd mmm dd yyyy HH:MM:ss",
	shortDate:      "m/d/yy",
	mediumDate:     "mmm d, yyyy",
	longDate:       "mmmm d, yyyy",
	fullDate:       "dddd, mmmm d, yyyy",
	shortTime:      "h:MM TT",
	mediumTime:     "h:MM:ss TT",
	longTime:       "h:MM:ss TT Z",
	isoDate:        "yyyy-mm-dd",
	isoTime:        "HH:MM:ss",
	isoDateTime:    "yyyy-mm-dd'T'HH:MM:ss",
	isoUtcDateTime: "UTC:yyyy-mm-dd'T'HH:MM:ss'Z'"
};

// Internationalization strings
dateFormat.i18n = {
	dayNames: [
		"Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб",
		"Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"
	],
	monthNames: [
		"Янв", "Фев", "Мар", "Апр", "Май", "Июн", "Июл", "Авг", "Сен", "Окт", "Ноя", "Дек",
		"Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"
	],
	monthNamesAlt: [
		"Янв", "Фев", "Мар", "Апр", "Май", "Июн", "Июл", "Авг", "Сен", "Окт", "Ноя", "Дек",
		"Января", "Февраля", "Марта", "Апреля", "Мая", "Июня", "Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря"
	]
};

// For convenience...
Date.prototype.format = function (mask, utc) {
	return dateFormat(this, mask, utc);
};

function setMonthActiveDays(month) {
	$('.b-calendar_week_day').removeClass('b-calendar_week_day_other');
	$('.b-i-calendar').find('.b-calendar_week_day:not(.js-month_' + month + ', .b-calendar_week_day_inactive)').addClass('b-calendar_week_day_other');
	
	$('.b-calendar_week_day').unbind();
	
	$('.b-calendar_week:not(.b-calendar_week_header) .b-calendar_week_day:not(.b-calendar_week_day_inactive)').mouseenter(function () {
		var $caption = $('.b-calendar').find('.b-calendar_week_day_caption');
		$(this).addClass('b-calendar_week_day_hover').append($caption);
	}).mouseleave(function () {
		$(this).removeClass('b-calendar_week_day_hover');
	}).click(function () {
		var $caption = $('.b-calendar').find('.b-calendar_week_day_flight');
		$('.b-calendar_week_day_selected').removeClass('b-calendar_week_day_selected');
		$(this).addClass('b-calendar_week_day_selected').append($caption);
		
		$('.b-popup').fadeIn(333);
		$('.b-popup_content_date').text(new Date(parseInt($(this).attr('timestamp'))).format('d mmmmm yyyy'));
	});
}

function prepareCalendar() {
	var date = new Date();
	date.setDate(1);
	for (var i = 0; i < 12; i++) {
		var month = document.createElement('LI');
		$(month).addClass('b-calendar_months_item');
		$(month).addClass('b-calendar_months_item_' + date.format('mm'));
		if (i == 11) {
			$(month).addClass('b-calendar_months_item_last');
		}
		$(month).attr('month', date.format('mm'));
		if (!i) {
			$(month).addClass('b-calendar_months_item_selected');
		}
		$(month).html('<a href="#">' + date.format('mmmm') + '</a>');
		$('.b-calendar_months').append(month);
		date.setMonth(date.getMonth() + 1);
	}
	
	var date = new Date();
	date.setHours(0);
	date.setMinutes(0);
	date.setSeconds(0);
	var yesterday = new Date(date.getTime() - 1000 * 3600 * 24);
	
	date.setDate(1);
	var before = new Date(date.getTime());
	before.setFullYear(before.getFullYear() + 1);
	
	if (parseInt(date.format('ddddd'))) {
		date.setDate(1 - parseInt(date.format('ddddd')));
	}
	
	var i = 0;
	while (date.getTime() < before.getTime()) {
		var week = document.createElement('UL');
		$(week).addClass('b-calendar_week');
		$(week).attr('week', i++);
		for (var j = 0; j < 7; j++) {
			var day = document.createElement('LI');
			$(day).addClass('b-calendar_week_day');
			if (j == 0) {
				$(day).addClass('b-calendar_week_day_first');
			}
			else if (j > 4) {
				$(day).addClass('b-calendar_week_day_holyday');
				if (j == 6) {
					$(day).addClass('b-calendar_week_day_last');
				}
			}
			$(day).addClass('js-month_' + date.format('mm'));
			$(day).addClass('js-day_' + date.format('dd'));
			$(day).text(date.format('d'));
			$(day).attr('timestamp', date.getTime());
			
			if (parseInt(date.format('d')) == 1) {
				$(week).addClass('js-week_' + date.format('mm'));
			}
			
			if (date.getTime() <= yesterday.getTime()) {
				$(day).addClass('b-calendar_week_day_inactive');
			}
			
			$(week).append(day);
			date.setDate(date.getDate() + 1);
		}
		$('.b-i-i-calendar').append(week);
	}
	
	setMonthActiveDays(new Date().format('mm'));
	
	$('.b-calendar_months_item').click(function () {
		var month = $(this).attr('month');
		var $week = $('.js-week_' + month);
		var offset = parseInt($week.height()) * parseInt($week.attr('week'));
		
		$('.b-i-i-calendar').animate({'top': '-' + offset + 'px'}, 500, 'easeInOutExpo', function () {
			setMonthActiveDays(month);
		});
		
		$('.b-calendar_months_item_selected').removeClass('b-calendar_months_item_selected');
		$(this).addClass('b-calendar_months_item_selected');
		return false;
	});
}

function dropHide(){
	$(".b-formfield_select_list").fadeOut(200);
	$(".b-formfield").removeClass("b-formfield_active");
}


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
	$('.b-popup_close').click(function () {
		dropHide();
		$('.b-popup').fadeOut(333);
		$('.b-calendar_week_day_selected').removeClass('b-calendar_week_day_selected');
		return false;
	});
	prepareCalendar();
	
	$('.b-popup_content_form_from select').change(function () {
		$('.b-calendar_week_day_flight_from').text($(this).val());
	});
	$('.b-popup_content_form_to select').change(function () {
		$('.b-calendar_week_day_flight_to').text($(this).val());
	});
	
	$('.b-formfield input').focus(function () {
		$(this).parent().addClass('b-formfield_focus');
	}).blur(function () {
		$(this).parent().removeClass('b-formfield_focus');
	});
	
	if ($(".b-formfield_select").length) {
		var fdrop = $('<div class="b-formfield_select_list"><ul></ul></div>').appendTo("body"),
			fdrop_back = fdrop,
			fdrop_i = $("UL", fdrop);

		$(".b-formfield_select").each(function(){
			var o = $(this),
				head = $(".b-formfield_select_content", this),
				items = $("OPTION", this);

			head.text(items.filter(":selected").text());
		
			o.click(function(){
				if (o.parent().hasClass("b-formfield_active")) {
					dropHide();
				}
				else {
					o.parent().addClass("b-formfield_active")
					fdrop_i.html("");
					items.each(function(){
						if (this.selected) {
							$('<li class="b-formfield_select_list_selected">'+$(this).text()+'</li>').appendTo(fdrop_i);
						}
						else {
							$('<li>'+$(this).text()+'</li>').appendTo(fdrop_i);
						}					
					});
					
					$("LI", fdrop_i).click(function(){
						var li = $(this);
						if (!li.hasClass("b-formfield_select_list_selected")) {
							li.addClass("b-formfield_select_list_selected").siblings(".b-formfield_select_list_selected").removeClass("b-formfield_select_list_selected");
							items.removeAttr('selected');
							items.eq(li.prevAll().length).attr("selected", "selected");
							items.parent().change();
							head.text($(this).text());
						}
						dropHide();
						return false;
					});
   
					fdrop.css({left:0,top:0}).show().css({
						left: o.parent().offset().left,
						top: o.offset().top + o.outerHeight() - fdrop.offset().top
					});

				}
				
				return false;
			});
		});
		$(document).click(dropHide);
	}
})