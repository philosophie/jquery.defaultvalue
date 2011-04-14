(function ($) {	
	
	$.fn.defaultValue = function (defaultLabel) {
		
		var $input = $(this);
		
		var interval;
		
		// Find the label
		$label = $("[for='" + $input.attr('id') + "']");
		
		// Hide the label
		if ($label.length > 0) $label.hide();
		
		// Determine what to use as the default value for this input
		if (defaultLabel == undefined) {
			// Find the input's label
			labelText = $label.text();
		} else {
			labelText = defaultLabel;
		}
		
		// Wrap the input with a container div
		$wrapper = $('<div></div>');
		$wrapper.css({
			'display': 'inline-block',
			'position': 'relative'
		});
		$input.wrap($wrapper);
		
		
		var $newInput = $input.clone();
		$newInput.css({
			'position': 'absolute',
			'top': 0,
			'left': 0,
			'z-index': '100',
			'background-color': 'transparent',
			'border-color': 'transparent',
			'box-shadow': 'none'
		});
		$newInput.addClass('defaultvalue_label');
		$newInput.removeAttr('name').removeAttr('id');
		$newInput.val(labelText);
		$newInput.attr('tabindex','-1');
		
		
		// Do not show label input if the input already has a value in it
		if ($input.val() != '') $newInput.hide();
		
		
		// When the user focuses on our label input
		$newInput.focus(function() {
			
			$newInput.addClass('defaultvalue_label_focus');
			$input.focus();
			
		});
		
		
		// Listen for keypress and paste events
		$input.bind('keypress paste', function() {
			
			$newInput.hide();
			
		}).bind('keyup', function() {
			
			if ($input.val() == '') $newInput.show();
			
		}).focus(function() {
			
			// When our real input receives focus
			$newInput.addClass('defaultvalue_label_focus');
			
		}).blur(function() {
			
			if ($input.val() == '') $newInput.show();
			$newInput.removeClass('defaultvalue_label_focus');
			
		});		
		
		
		// Add new input (label input)
		$input.before($newInput);
		
	}
	
}(jQuery));