//-----------------------------------------------------------------
// Licensed Materials - Property of IBM
//
// WebSphere Commerce
//
// (C) Copyright IBM Corp. 2013, 2014 All Rights Reserved.
//
// US Government Users Restricted Rights - Use, duplication or
// disclosure restricted by GSA ADP Schedule Contract with
// IBM Corp.
//-----------------------------------------------------------------

var toggleCollapsible = function(collapsible) {
	var content = collapsible.querySelector(".content");
	var expanded = collapsible.getAttribute("aria-expanded");
	var mainESpotHome = document.getElementById("mainESpotHome");
	(content.id.match(/homeESpotDetails/)) ? ((mainESpotHome.className == "closed") ? mainESpotHome.className = "expand" : mainESpotHome.className = "closed") : 0;
	if (expanded == "true") {
		content.style.maxHeight = content.scrollHeight + "px";
		window.setTimeout(function() {
			collapsible.setAttribute("aria-expanded", "false");
			content.style.maxHeight = null;
			content.style.transition = "max-height .2s";
		}, 0);
		window.setTimeout(function() {
			content.style.transition = null;
		}, 200);
	}
	else if (expanded == "false") {
		collapsible.setAttribute("aria-expanded", "true");
		content.style.maxHeight = content.scrollHeight + "px";
		content.style.transition = "max-height .2s";
		window.setTimeout(function() {
			content.style.maxHeight = null;
			content.style.transition = null;
		}, 200);
	}
};

var updateGrid = function(grid) {
	var width = grid.clientWidth;
	var minColWidth = grid.getAttribute("data-min-col-width");
	var minColCount = grid.getAttribute("data-min-col-count");
	var colCount = Math.floor(width/minColWidth);
	if (colCount < minColCount) {
		colCount = minColCount;
	}
	var colWidth = Math.floor(100/colCount) + "%";
	var cols = grid.querySelectorAll(".col");
	for (var i = 0; i < cols.length; i++) {
		cols[i].style.width = colWidth;
	}
};

var toggleExpand = function(id) {
	var icon = byId("icon_" + id);
	var section_list = byId("section_list_" + id);
	if(icon.className == "arrow") {
		icon.className = "arrow arrow_collapsed";
		section_list.setAttribute("aria-expanded", "false");
		section_list.style.display = "none";
	}
	else {
		icon.className = "arrow";
		section_list.setAttribute("aria-expanded", "true");
		section_list.style.display = "block";
	}
};

require(["dojo/on", "dojo/query", "dojo/topic", "dojo/dom-attr", "dojo/NodeList-traverse", "dojo/domReady!"], function(on, query, topic) {
	var updateCollapsibles = function(mediaQuery) {
		var expanded = mediaQuery ? !mediaQuery.matches : document.documentElement.clientWidth > 583;
		if (expanded == false){
			query(".collapsible").attr("aria-expanded", expanded.toString());
		}else {
			query(".collapsible:not(.collapsedOnInit)").attr("aria-expanded", expanded.toString());
		}
	};
	if (window.matchMedia) {
		var mediaQuery = window.matchMedia("(max-width: 600px)");
		updateCollapsibles(mediaQuery);
		mediaQuery.addListener(updateCollapsibles);
	}
	else {
		updateCollapsibles();
		on(window, "resize", function(event) {
			updateCollapsibles();
		});
	}

	on(document, ".collapsible .toggle:click", function(event) {
		toggleCollapsible(query(event.target).parents(".collapsible")[0]);
		event.preventDefault();
	});
	on(document, ".collapsible .toggle:keydown", function(event) {
		if (event.keyCode == 13 || event.keyCode == 32) {
			toggleCollapsible(query(event.target).parents(".collapsible")[0]);
			event.preventDefault();
		}
	});

	query(".grid").forEach(updateGrid);
	on(window, "resize", function(event) {
		query(".grid").forEach(updateGrid);
	});
});

