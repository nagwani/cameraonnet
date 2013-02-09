$(document).ready(function() {

	// Using default configuration
	// $("#foo1").carouFredSel();
	
	// Using custom configuration
	$("#foo2").carouFredSel({
	circular: true,
	infinite: true,
	auto 	: true,
	prev	: {	
		button	: "#foo2_prev",
		key		: "left"
	},
	next	: { 
		button	: "#foo2_next",
		key		: "right"
	},
	pagination	: "#foo2_pag"
});
});