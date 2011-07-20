$(function() {
	
	$('#myinput').defaultValue({
		labelText: 'A label from options'
	});
	$('#myinput2').defaultValue({
		labelText: 'Phone number',
		hideLabel: false,
		clearOnFocus: true
	});
	
	$('#myinput2').val('changed with js!').change();
	
	
	// TODO: This should probably go in the plugin itself
	setTimeout(function() {
		// Chrome does not fire a change event when autofilling forms
		// To prevent weird overlap with defaultValue and Chrome autofill,
		// fire your own change event after 100 or so milliseconds
		$('#myinput').change();
	}, 100);
	
	
});