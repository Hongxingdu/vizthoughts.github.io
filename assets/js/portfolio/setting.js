
jQuery(document).ready(function($){

if (jQuery().quicksand) {

 	// Clone applications to get a second collection
	var $data = $(".portfolio-area").clone();
	
	//NOTE: Only filter on the main portfolio page, not on the subcategory pages
	$('.filter li').click(function(e) {
		$(".filter li").removeClass("active");	
		// Use the last category class as the category to filter by.
		var filterClass=$(this).attr('class').split(' ').slice(-1)[0];
		
		if (filterClass == 'all') {
			var $filteredData = $data.find('.portfolio-item');
		} else {
			var $filteredData = $data.find('.portfolio-item').filter(function() {
				return $.inArray(filterClass, $(this).attr('data-type').split(/\s+/)) !== -1;
			});
		}
		$(".portfolio-area").quicksand($filteredData, {
			duration: 600,
			adjustHeight: 'auto'
		}, function () {
		

					jQuery('ul.da-thumbs > li').hoverdir();
					$("a[data-pretty^='prettyPhoto']").prettyPhoto();

						});		
		$(this).addClass("active"); 			
		return false;
	});
	
}//if quicksand

});