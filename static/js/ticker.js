const tabChange = function(container, new_tab_name, stop_auto_switch) {
	// if user clicks on a tab
	if (stop_auto_switch===undefined) stop_auto_switch = true;
	// stop automatic switching between tabs forever
	if (stop_auto_switch) window.clearTimeout(switcher);
	// change tab
	$(container).find(".tab-menu > .active, .tabs > .active").removeClass("active")
	$(container).find(".tab-menu > [data-tab='"+new_tab_name+"'], .tabs > [data-tab='"+new_tab_name+"']").addClass("active")
}


function doTheSwitch(force_switch) {
	if (force_switch===undefined) force_switch = false;
	$(".tab-menu").each(function(i, t) {
		t = $(t)
		// if project is on or below the screen
		if (force_switch || t.parent().offset().top - $(window).scrollTop() > 0 ) {
			// if the next tab
			const next_item = (t.find(".active").index() + 1) % t.children().length
			const next_item_name = t.children()[next_item].dataset.tab
			// switch to it
			tabChange(t.parent(), next_item_name, false)
		}
	})
}
const switcher = window.setInterval(doTheSwitch, 5000)
$(document).ready(function() {doTheSwitch(true)})
