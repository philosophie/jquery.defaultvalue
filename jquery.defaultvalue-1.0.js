(function ($) {	
	
	$.fn.defaultValue = function (defaultLabel) {
		
		$input = $(this);
		
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
		
		
		$newInput = $input.clone();
		$newInput.css({
			'position': 'absolute',
			'top': 0,
			'left': 0,
			'z-index': '100',
			'background-color': 'transparent',
			'border-color': 'transparent',
			'box-shadow': 'none'
		});
		$newInput.addClass('labelinput');
		$newInput.removeAttr('name').removeAttr('id');
		$newInput.val(labelText);
		
		
		// When the user focuses on our label input
		$newInput.focus(function() {
			
			$input.focus();
			
		});
		
		// When our real input loses focus
		$input.focus(function() {
			
			interval = setInterval(function() {
				if ($input.val() != '') {
					// Hide label
					$newInput.hide();
				} else {
					// Show label
					$newInput.show();
				}
			}, 20);
			
		}).blur(function() {
			
			clearInterval(interval);
			
		});
		
		// Add new input (label input)
		$input.before($newInput);
		
	}
	
}(jQuery));