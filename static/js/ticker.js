const tabChange = function(container, new_tab_name, stop_auto_switch) {
	if (stop_auto_switch===undefined) stop_auto_switch = true;
	if (stop_auto_switch) window.clearTimeout(switcher);

	$(container).find(".tab-menu > .active, .tabs > .active").removeClass("active")
	$(container).find(".tab-menu > [data-tab='"+new_tab_name+"'], .tabs > [data-tab='"+new_tab_name+"']").addClass("active")
}


function doTheSwitch() {
	$(".tab-menu").each(function(i, t) {
		const next_item = ($(t).find(".active").index() + 1) % $(t).children().length
		const next_item_name = $(t).children()[next_item].dataset.tab
		tabChange(t.parentElement, next_item_name, false)
	})
}
const switcher = window.setInterval(doTheSwitch, 3000)
