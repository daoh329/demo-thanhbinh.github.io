var config={UrlDomain:"/"};

$.fn.enterKey = function (fnc) {
    return this.each(function () {
        $(this).keypress(function (ev) {
            var keycode = (ev.keyCode ? ev.keyCode : ev.which);
            if (keycode == '13') {
                fnc.call(this, ev);
            }
        });
    });
};

function SearchEnter(x) {
	var txtText = $(x).val();
	if (txtText.length == 0) {
		$.jAlert({
	        'title': 'Thông báo',
	        'content': 'Bạn cần nhập nội dung để tìm kiếm!',
	        'theme': 'dark_red',
	        //'btns': { 'text': 'close' }
	      });
	} else {
		var outString = txtText.replace(/[`~!#$%^&*()|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '');
		//location.href = config.UrlDomain + 'san-pham/timsanpham?q=' + encodeURIComponent(outString.replace(/&amp;/g, "&")); /* + ".html"*/
		location.href = config.UrlDomain + 'tim-kiem/sanpham?key=' + encodeURIComponent(outString.replace(/&amp;/g, "&")) /*+ ".html"*/ ;
	}
}
$(function() {
	$("#search").enterKey(function () {
		//alert($(this).val());
		SearchEnter(this);
	});
	
	$("#srch-term").enterKey(function () {
		//alert($(this).val());
		SearchEnter(this);
	});
});