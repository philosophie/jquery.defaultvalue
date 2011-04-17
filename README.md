# jQuery defaultValue

A proper implementation of input placeholder text, or as I like to call them: default values.

## Simple Usage

	$('#someTextInput').defaultValue();

## Options

	$('#someTextInput').defaultValue({
		labelText: 'A label', // Set the text for the input's default value. By default it will find the corresponding label and use that value.
		hideLabel: false, // Hide the input's corresponding label. Set to true by default.
		clearOnFocus: true // Immediately remove the default value when user focuses element. Set to false by default.
	});

## CSS

This plugin uses classes that you can implement in your own stylesheet.

	.defaultvalue_label
Will be added to the default value layer

	.defaultvalue_label_focus
Will be added to the default value layer when the user focuses in the input