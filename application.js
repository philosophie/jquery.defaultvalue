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
	
});