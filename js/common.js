$(document).ready(function() {

	$(document).ready(function(){
		$('.btn-up').mPageScroll2id();
	});


	$(".ymovu-povernennya").click(function(){
		$(".fixed-ymovu-modal").css("display","block");
	});

	$(".zakrutu").click(function(){
		$(".fixed-ymovu-modal").css("display","none");
	});


	$(".zakrutu-modal-blakutna").click(function(){
		$(".fixed-blakutna-modal").css("display","none");
	});

	$(".open-modal-blakutnuy").click(function(){
		$(".fixed-blakutna-modal").css("display","block");
	});

	$(".zakrutu-modal-bronzova").click(function(){
		$(".fixed-bronzova-modal").css("display","none");
	});

	$(".open-modal-bronzova").click(function(){
		$(".fixed-bronzova-modal").css("display","block");
	});










	$(".zakrutu-modalku").click(function(){
		$(".modal-window-zam-har").css("display","none");
	});


});
