+function($){
	$.fn.getTime = function () {
		
		var date = new Date(),hour = date.getHours(),min = date.getMinutes(),sec = date.getSeconds();	
		return {hour : hour, min : min, sec : sec}
	}
	$.fn.buildClock1 = function (settings) {
		var date = settings.date,$clockBox = $('section.myclock_01'),$clock = $clockBox.find('div.clock_box > div');
		$clock.each(function () {
			var $this = $(this),$leftClock = $this.find('.left_clock_area'),$rightClick = $this.find('.right_clock_area'),$leftBg = $this.find('.left_bg'),$rightBg = $this.find('.right_bg'),
				$timeArea = $this.find('.time_area'),num = date[$this.attr('data-flag')],rotate = num * 6;
				if(num > 30 ) {
					$leftBg.css('width' , '50%').hide();
					$rightClick.show();
				}else if(num < 30 ){
					$leftBg.css('width' , '50%').show();
					$rightClick.hide();
				}
				if(num == 0) {
					$leftBg.css('width' , '100%');
				}
				$leftClock.css({'transform':'rotate(' +rotate+ 'deg)'});
				$timeArea.html(changeNum(num));
		});
	}
	var changeNum = function (num) {
		if(num < 10) return '0' + num;
		return num;
	}
} (jQuery);

$(function () {
	setInterval(function () {
		var $window = $(window);
		var date = $window.getTime();
		$window.buildClock1({date : date});
	} , 1000);

});