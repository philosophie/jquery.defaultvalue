(function ($) {	
	
	$.fn.defaultValue = function (options) {

    return $(this).each(function () {

      var $input = $(this);
      var interval;
      
      // Find the label
      $label = $("[for='" + $input.attr('id') + "']");
      
      
      // Default options
      var defaults = {
        'labelText': $label.text(),
        'hideLabel': true,
        'clearOnFocus': false
      };
      
      // Allow user to override default options
      options = $.extend({}, defaults, options);
      
      // Hide the label
      if ($label.length > 0 && options['hideLabel'] == true) $label.hide();
      
      
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
      $newInput.val(options['labelText']);
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
        
        if ($input.val() == '' && options['clearOnFocus'] == false) $newInput.show();
        
      }).focus(function() {
        
        // When our real input receives focus
        $newInput.addClass('defaultvalue_label_focus');
        if (options['clearOnFocus'] == true) $newInput.hide();
        
      }).blur(function() {
        
        if ($input.val() == '') $newInput.show();
        $newInput.removeClass('defaultvalue_label_focus');
        
      });
			
			// Dev can change the value of this input programatically, but must call .change() on it after
			// We pickup that change here and hide the label
      $input.change(function() {
				if ($input.val() != '') $newInput.hide();
			});
      
      // Add new input (label input)
      $input.before($newInput);
      
    });

  };
	
}(jQuery));
