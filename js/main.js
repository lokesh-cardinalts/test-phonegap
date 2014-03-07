Zepto(function($){
	$('#test').on('click', function() {
		myApp.setElementHTML($('#myContent'), Date());
	});
});
