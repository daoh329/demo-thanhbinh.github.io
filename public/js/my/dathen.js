//--Kiểm tra liên hệ
function isEmpty(str,text){
		if(str != "") return false;
		if(typeof(text) != 'undefined')	infoAlert("Thông Báo",text);
		return true;
}
function is_Phone(str,text){

	if( (str.length==10) && ( (str.substr(0,2)==03) || (str.substr(0,2)==09) || (str.substr(0,2)==08) || (str.substr(0,2)==05) ) )
		return false;
	if(typeof(text)!='undefined') jAlert(text, "Thông báo");
	return true;
}

function isEmail(str, text){
	emailRegExp = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.([a-z]){2,4})$/;
	if(emailRegExp.test(str)){
		return false;
	}
	if(typeof(text)!='undefined') infoAlert("Thông Báo",text);
	return true;
}
function isSpace(str,text){
	for(var i=0; i < str.length; i++)
	{
		if((str.charAt(i)) == " ")
		{
			if(typeof(text)!='undefined') infoAlert("Thông Báo",text);
			return true;

		}
	}
	return false;
}
function isCharacters(str,text){
	if(str=='') return false;
	var searchReg = /^[a-zA-Z0-9-]+$/;
	if(searchReg.test(str)) {
		return false;
	}
	if(typeof(text)!='undefined') infoAlert("Thông Báo",text);
	return true;
}
function isRepassword(str,str2,text){
	if(str2=='') return false;
	if(str==str2) return false;
	if(typeof(text)!='undefined') infoAlert("Thông Báo",text);
	return true;
}
function isCharacterlimit(str,text,intmin,intmax){
	if(str=='') return false;
	intmin = parseInt(intmin);
	intmax = parseInt(intmax);

	if(str.length>=intmin && str.length<=intmax)
	{
		return false;
	}
	if(typeof(text)!='undefined') infoAlert("Thông Báo",text);
	return true;
}

jQuery(function($){
	
	/*============================================================*/
	// Đăng kí thông tin hẹn, đầu trang !
	
	$('.dangkihen').click(function(){
    	if(isEmpty($('#contact-order-name').val(), "Bạn vui lòng nhập họ tên trước nhé."))
		{
			$('#contact-order-name').focus();
			return false;
		}
    	var phone = $('#contact-order-phone').val();
    	if(isEmpty(phone, "Bạn chưa nhập số điện thoại ạ."))
		{
			$('#contact-order-phone').focus();
			return false;
		}

    	if(phone != "")
		{
    		var re =/^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g;

    		if(!re.test(phone))
    		{
    			errorAlert("Thông Báo","Bạn vui lòng nhập số điện thoại chính xác nhé.");
    			$('#contact-order-phone').focus();
				return false;
    		}
    		else{
    			if(phone.length < 10 || phone.length > 11){
    				errorAlert("Thông Báo","Bạn vui lòng nhập số điện thoại chính xác nhé.");
    			    $('#contact-order-phone').focus();
    			    return false;
    			}
    	    }
		}

    	if(isEmpty($('#contact-order-message').val(), "Bạn cần tư vấn về dịch vụ nào ạ ?"))
		{
			$('#contact-order-message').focus();
			return false;
		}

    	$.ajax({
			type:'post',
			url:$("#saveForm").attr('action'),
			data:$("#saveForm").serialize(),
			dataType:'json',

			success:function(kq){
				successAlert("Thành công","Đã nhận thông tin của bạn ! Chúng tôi sẽ liên hệ lại :) ");
				document.getElementById("saveForm").reset();
			}
		});

    });
	
	/*============================================================*/
	// Đăng kí Email
	$('.dangkiEmail').click(function(){
		var email = $('#contact-email').val();
    	if(isEmpty(email, "Bạn chưa nhập Email ạ."))
		{
			$('#contact-email').focus();
			return false;
		}

    	if(email != "")
		{
    		if(isEmail(email,"Địa chỉ Email chưa chính xác nhé !"))
    		{
    			$('#contact-email').focus();
    			return false;
    		}
    		else{
				$.ajax({
					type:'post',
					url:$("#subscribe-form").attr('action'),
					data:$("#subscribe-form").serialize(),
					dataType:'json',
					success:function(kq){
						successAlert("Thành công","Đã nhận email ! Chúng tôi sẽ liên hệ lại :) ");
						document.getElementById("subscribe-form").reset();
						
						return false;
					}
				});
    		}
		}
    });
	
	/*============================================================*/
	// Đăng kí SDT
	$('.dangkiPhone').click(function(){
		var phone = $('#subscribe-form-phone #contact-phone').val();
    	if(isEmpty(phone, "Bạn chưa nhập số điện thoại ạ."))
		{
			$('#subscribe-form-phone #contact-phone').focus();
			return false;
		}

    	if(phone != "")
		{
    		if(is_Phone(phone,"Số điện thoại chưa chính xác nhé !"))
    		{
    			$('#subscribe-form-phone #contact-phone').focus();
    			return false;
    		}
    		else{
				$.ajax({
					type:'post',
					url:$("#subscribe-form-phone").attr('action'),
					data:$("#subscribe-form-phone").serialize(),
					dataType:'json',
					success:function(kq){
						console.log(kq);
						successAlert("Thành công","Đã nhận số điện thoại ! Chúng tôi sẽ liên hệ lại :) ");
						document.getElementById("subscribe-form-phone").reset();
						
						return false;
					}
				});
    		}
		}
    });
	
	/*============================================================*/
	// Đăng kí thông tin hẹn, cuối trang !
	
	$('.dangkiContact').click(function(){
		
    	if(isEmpty($('#contact-name').val(), "Bạn vui lòng nhập họ tên trước nhé."))
		{
			$('#contact-name').focus();
			return false;
		}
    	var phone = $('#contact-phone').val();
    	if(isEmpty(phone, "Bạn chưa nhập số điện thoại ạ."))
		{
			$('#contact-phone').focus();
			return false;
		}

    	if(phone != "")
		{
    		var re =/^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g;

    		if(!re.test(phone))
    		{
    			errorAlert("Thông Báo","Bạn vui lòng nhập số điện thoại chính xác nhé.");
    			$('#contact-phone').focus();
				return false;
    		}
    		else{
    			if(phone.length < 10 || phone.length > 11){
    				errorAlert("Thông Báo","Bạn vui lòng nhập số điện thoại chính xác nhé.");
    			    $('#contact-phone').focus();
    			    return false;
    			}
    	    }
		}

    	if(isEmpty($('#contact-message').val(), "Bạn cần tư vấn về dịch vụ nào ạ ?"))
		{
			$('#contact-message').focus();
			return false;
		}

    	$.ajax({
			type:'post',
			url:$("#saveFormContact").attr('action'),
			data:$("#saveFormContact").serialize(),
			dataType:'json',

			success:function(kq){
				successAlert("Thành công","Đã nhận thông tin của bạn ! Chúng tôi sẽ liên hệ lại :) ");
				document.getElementById("saveFormContact").reset();
				
			}
		});

    });
});
function ChangeDatHen(){
	$("button.datHen").click(function() {
		var value = $(this).attr("value");
		var idProduct = $(this).parent().attr("id");
		var realId = idProduct.replace('xuLy_','');
		$.post("/dat-hen/changeDatHen", {
            id: realId,
            content: value
        },
        function(data){
            if(data.response == true){
            	Pace.restart();
            	if(value == 1)
            	{
            		$("#"+idProduct).find('button.datHen').removeClass('btn-info').addClass('btn-danger').html('Chưa').val(0);
            		//$("#"+idProduct).find('button.anHien').val(0);
            	}
            	else{
            		$("#"+idProduct).find('button.datHen').removeClass('btn-danger').addClass('btn-info').html('Rồi').val(1);
            		//$("#"+idProduct).find('button.anHien').val(1);
            	}
            }
            else{
            	alert('Error');
            }
        }, 'json');
	});
}

$(document).ready(function(){
	ChangeDatHen();
});