$(function(){

	$(document).ready(function() { $("#e1").select2(); });

	$( "#slider-range" ).slider({
		range: true,
		min: 0,
		max: 1000,
		values: [ 75, 300 ],
		slide: function( event, ui ) {
			$( "#price" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
		}
	});
	$( "#price" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
		" - $" + $( "#slider-range" ).slider( "values", 1 ) );

});