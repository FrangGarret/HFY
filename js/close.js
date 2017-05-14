$(function(){
	var closed_btn='<span class="fixed_close" style="width:50px;height:50px;position:fixed;right:20px;top:20px;background:url(img/close.png) no-repeat;background-size:cover;cursor:pointer;"></span>'
	$('html,body').append(closed_btn);
	$('html,body').on('click','.fixed_close',function(){
		history.go(-1)
	})
})
