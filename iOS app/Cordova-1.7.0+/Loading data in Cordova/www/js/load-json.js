$(document).ready(function(){
	$(document).bind('deviceready', function(){
		//Phonegap ready
		onDeviceReady();
	});

	var output = $('#output');

	$.ajax({
		url: 'http://samcroft.co.uk/demos/updated-load-data-into-phonegap/landmarks.php',
		dataType: 'jsonp',
		jsonp: 'jsoncallback',
		timeout: 5000,
		success: function(data, status){
			$.each(data, function(i,item){ 
				var landmark = '<h1>'+item.name+'</h1>'
				+ '<p>'+item.latitude+'<br>'
				+ item.longitude+'</p>';
			
				output.append(landmark);
			});
		},
		error: function(){
		   output.text('There was an error loading the data.');
		}
	});
});