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

require([
		"dojo/topic",
		"dojo/_base/event",
		"dojo/_base/lang",
		"dojo/dom-class",
		"dojo/dom-geometry",
		"dojo/dom-style",
		"dojo/has",
		"dojo/on",
		"dojo/query",
		"dojo/_base/sniff",
		"dojo/domReady!",
		"dojo/NodeList-dom",
		"dojo/NodeList-traverse"
	], function(topic,event, lang, domClass, domGeometry, domStyle, has, on, query) {
	var mouseDownConnectHandle = null;
	var activeMenuNode = null;
	var toggleControlNode = null;
	var active = {};
	var ajaxRefresh = "";
	var departmentMenuId = "departmentMenu_";
	
	var registerMouseDown = function() {
		if (mouseDownConnectHandle == null) {
			mouseDownConnectHandle = on(document.documentElement, "mousedown", handleMouseDown);
		}
	};
	
	var unregisterMouseDown = function() {
		if (mouseDownConnectHandle != null) {
			mouseDownConnectHandle.remove();
			mouseDownConnectHandle = null;
		}
	};
	
	var handleMouseDown = function(evt) {
		var node = evt.target;
		if (activeMenuNode != null && node != document.documentElement) {
			var close = true;
			var parent = activeMenuNode.getAttribute("data-parent");
			while (node && node != document.documentElement) {
				if (node == activeMenuNode || node == toggleControlNode || domClass.contains(node, "dijitPopup") || parent == node.getAttribute("data-parent")) {
					close = false;
					break;
				}
				node = node.parentNode;
			}
			if (node == null) {
				var children = query("div", activeMenuNode);
				for (var i = 0; i < children.length; i++) {
					var position = domGeometry.position(children[i]);
					if (evt.clientX >= position.x && evt.clientX < position.x + position.w &&
						evt.clientY >= position.y && evt.clientY < position.y + position.h) {
						close = false;
						break;
					}
				}
			}
			if (close) {
				deactivate(activeMenuNode);
			}
		}
	};
	
	activate = function(target) {
		var startsWith = (target.id.slice(0,departmentMenuId.length) == departmentMenuId);
		if(this.ajaxRefresh == "true" && startsWith){
			setAjaxRefresh(""); // No more refresh till shopper leaves this page
			// Update the Context, so that widget gets refreshed..
			wc.render.updateContext("departmentSubMenuContext", {"targetId":target.id});
			if (typeof cX === 'function') {
				// For Coremetrics tagging to generate linkclick tags when clicking on navigation buttons
				setTimeout(function(){cX("");}, 1000);
			}
			return;
		}

		var parent = target.getAttribute("data-parent");
		if (parent && active[parent]) {
			deactivate(active[parent]);
		}
		if (parent) {
			activate(document.getElementById(parent));
		}
		domClass.add(target, "active");
		query("a[data-activate='" + target.id + "']").addClass("selected");
		var toggleControl = query("a[data-toggle='" + target.id + "']");
		toggleControl.addClass("selected");
		if (parent) {
			active[parent] = target;
			if (activeMenuNode == null) {
				activeMenuNode = target;
				toggleControlNode = toggleControl.length > 0 ? toggleControl[0] : null;
				registerMouseDown();
			}
		}
	};

	deactivate = function(target) {
		if (active[target.id]) {
			deactivate(active[target.id]);
		}
		domClass.remove(target, "active");
		query("a[data-activate='" + target.id + "']").removeClass("selected");
		query("a[data-toggle='" + target.id + "']").removeClass("selected");
		var parent = target.getAttribute("data-parent");
		delete active[parent];
		if (target == activeMenuNode) {
			activeMenuNode = null;
			toggleControlNode = null;
			unregisterMouseDown();
		}
	};
	toggle = function(target) {
		if (domClass.contains(target, "active")) {
			deactivate(target);
		}
		else {
			activate(target);
		}
	};
	setUpEventActions = function(){
		on(document, "a[data-activate]:click", function(e) {
			var target = this.getAttribute("data-activate");
			activate(document.getElementById(target));
			event.stop(e);
		});
		on(document, "a[data-deactivate]:click", function(e) {
			var target = this.getAttribute("data-deactivate");
			deactivate(document.getElementById(target));
			event.stop(e);
		});
		on(document, "a[data-toggle]:click", function(e) {
			var target = this.getAttribute("data-toggle");
			toggle(document.getElementById(target));
			event.stop(e);
		});
		on(document, "a[data-toggle]:keydown", function(e) {
			if (e.keyCode == 27) {
				var target = this.getAttribute("data-toggle");
				deactivate(document.getElementById(target));
				event.stop(e);
			} else if (e.keyCode == 40) {
				var target = this.getAttribute("data-toggle");
				var targetElem = document.getElementById(target);
				activate(targetElem);
				query('[class*="menuLink"]', targetElem)[0].focus();
				event.stop(e);
			}
		});

		if (has("ie") < 10) {
			query("input[placeholder]").forEach(function(input) {
				var placeholder = input.getAttribute("placeholder");
				if (placeholder) {
					var label = document.createElement("label");
					label.className = "placeholder";
					label.innerHTML = placeholder;
					input.parentNode.insertBefore(label, input);
					var updatePlaceholder = function() {
						label.style.display = (input.value ? "none" : "block");
					};
					window.setTimeout(updatePlaceholder, 200);
					on(input, "blur, focus, keyup", updatePlaceholder);
					on(label, "click", function(e) {
						input.focus();
					});
				}
			});
		}
	};
	setUpEventActions();

	window.setTimeout(function() {
			var quickLinksBar = document.getElementById("quickLinksBar");
			var quickLinksButton = document.getElementById("quickLinksButton");
			var quickLinksMenu = document.getElementById("quickLinksMenu");
			var quickLinksMenuItems = query("> ul > li > a", quickLinksMenu);
			var signInOutQuickLink = document.getElementById("signInOutQuickLink");
			query("#quickLinksMenu > ul > li").forEach(function(li) {
				if (li.id != "facebookQuickLinkItem" && li.id != "globalLoginWidget") {
					li = li.cloneNode(true);
					query("[id]", li).forEach(function(node) {
						node.id += "_alt";
					});
					quickLinksBar.insertBefore(li, quickLinksBar.firstChild);
				} 					
			});
			query("#quickLinksBar > li > a, #quickLinksBar > li > span").forEach(function(node) {
				if (node.id != "miniCartButton" && node.id != "barcodeScanButton" && node.id.indexOf("signOutQuickLink") == -1 && node.id != "contactQuickLink_alt") {
					var s = lang.trim(node.innerHTML);
					var it = node.childNodes;
					//find the first non-blank text node (type=3)
					for(i=0; i<it.length; i++){
						if(it[i].nodeType == 3 && lang.trim(it[i].nodeValue) != ""){
							s = lang.trim(it[i].nodeValue);
							break;
						}
					}										
					var n = s.lastIndexOf(",");
					if (n == -1){
						n = s.lastIndexOf(" ");
					}
					if (n != -1) {
						var sBr = s.substring(0, n + 1) + "<br/>" + s.substring(n + 1, s.length);
						node.innerHTML = node.innerHTML.replace(s, sBr);
					}
				}
			});
			on(quickLinksButton, "click", function(e) {
				var target = this.getAttribute("data-toggle");
				toggle(document.getElementById(target));
				event.stop(e);
			});
			on(quickLinksButton, "keydown", function(e) {
				if (e.keyCode == 40) {
					var target = this.getAttribute("data-toggle");
					activate(document.getElementById(target));
					quickLinksMenuItems[0].focus();
					event.stop(e);
				} else if (e.keyCode == 9 || (e.keyCode ==9 && e.shiftKey)) {
					deactivate(quickLinksMenu);
				} else if (e.keyCode == 27) {
					var target = this.getAttribute("data-toggle");
					deactivate(document.getElementById(target));
					event.stop(e);
				}
			});
			on(quickLinksMenu, "keydown", function(e) {
				if (e.keyCode == 27 || e.keyCode == 9 || (e.keyCode ==9 && e.shiftKey)) {
					deactivate(quickLinksMenu);
				} else if (e.keyCode == 27) {
					var target = this.getAttribute("data-toggle");
					deactivate(document.getElementById(target));
					event.stop(e);
				}
			});
			quickLinksMenuItems.forEach(function(quickLinksMenuItem, i) {
				quickLinksMenuItem.setAttribute("role", "menuitem");
				quickLinksMenuItem.setAttribute("tabindex", "-1");
				on(quickLinksMenuItem, "keydown", function(e) {
					switch (e.keyCode) {
					case 38:
						quickLinksMenuItems[i == 0 ? quickLinksMenuItems.length - 1 : i - 1].focus();
						event.stop(e);
						break;
					case 40:
						quickLinksMenuItems[(i + 1) % quickLinksMenuItems.length].focus();
						event.stop(e);
						break;
					}
				});
			});
			var searchFilterButton = document.getElementById("searchFilterButton");
			if (searchFilterButton) {
				on(searchFilterButton, "keydown", function(e) {
					if (e.keyCode == 9 || (e.keyCode ==9 && e.shiftKey)) {
						deactivate(document.getElementById(searchFilterButton.getAttribute("data-toggle")));
					}
				});
			}
			var searchForm = document.getElementById("SimpleSearchForm_SearchTerm");
			if (searchForm) {
				on(searchForm, "click", function(e) {
					var allSelectedDataToggles = query('.selected:not(a[data-toggle="searchBar"])', document.getElementById("header"));
					allSelectedDataToggles.forEach(function(selectedDataToggle, i) {
						deactivate(document.getElementById(selectedDataToggle.getAttribute("data-toggle")));
					});
				});
			}
			var searchFilterMenu = document.getElementById("searchFilterMenu");
			if (searchFilterMenu) {
				var searchFilterMenuItems = query('[class*="menuLink"]', searchFilterMenu);
				searchFilterMenuItems.forEach(function(searchFilterMenuItem, i) {
					on(searchFilterMenuItem, "keydown", function(e) {
						if (e.keyCode == 27) {
							deactivate(searchFilterMenu);
							event.stop(e);
						} else if (e.keyCode == 9 || (e.keyCode == 9 && e.shiftKey)) {
							deactivate(searchFilterMenu);
						} else if (e.keyCode == 38) {
							searchFilterMenuItems[i == 0 ? searchFilterMenuItems.length - 1 : i - 1].focus();
							event.stop(e);
						} else if (e.keyCode == 40) {
							searchFilterMenuItems[(i + 1) % searchFilterMenuItems.length].focus();
							event.stop(e);
						}
					});
				});
			}
		}, 100);

	var header = document.getElementById("header");
	var direction = domStyle.getComputedStyle(header).direction;

	updateQuickLinksBar = function() {
		var logo = document.getElementById("logo");
		var quickLinksBar = document.getElementById("quickLinksBar");
		var availableWidth = (direction == "rtl" ? logo.offsetLeft - quickLinksBar.offsetLeft : (quickLinksBar.offsetLeft + quickLinksBar.offsetWidth) - (logo.offsetLeft + logo.offsetWidth));
		// BEGIN Facebook quick link workaround
		var facebookQuickLinkItem = document.getElementById("facebookQuickLinkItem");
		if (facebookQuickLinkItem && facebookQuickLinkItem.parentNode != quickLinksBar && availableWidth > 1024) {
			quickLinksBar.insertBefore(facebookQuickLinkItem, quickLinksBar.firstChild);
		}
		else if (facebookQuickLinkItem && facebookQuickLinkItem.parentNode == quickLinksBar && availableWidth <= 1024) {
			var quickLinksMenuList = query("#quickLinksMenu > ul")[0];
			quickLinksMenuList.appendChild(facebookQuickLinkItem);
		}
		// END Facebook quick link workaround
		var quickLinksBarItems = query("#quickLinksBar > li");
		var quickLinksItem = quickLinksBarItems[quickLinksBarItems.length - 2];
		var miniCartItem = quickLinksBarItems[quickLinksBarItems.length - 1];
		availableWidth -= quickLinksItem.offsetWidth + miniCartItem.offsetWidth;
		for (var i = quickLinksBarItems.length - 3; i >= 0; i--) {
			availableWidth -= quickLinksBarItems[i].offsetWidth;
			domClass.toggle(quickLinksBarItems[i], "border-right", (availableWidth >= 0));
			domClass.toggle(quickLinksBarItems[i], "hidden", (availableWidth < 0));
		}
		
	};
	window.setTimeout(updateQuickLinksBar, 200);
	on(window, "resize", updateQuickLinksBar);

	updateDepartmentsMenu = function() {
		var departmentsMenu = document.getElementById("departmentsMenu");
		var searchBar = document.getElementById("searchBar");
		var departmentButtons = query(".departmentButton");
		var departmentMenus = query(".departmentMenu");
		var departmentsMenuItems = query("#departmentsMenu > li");
		var allDepartmentsItem = departmentsMenuItems[departmentsMenuItems.length - 1];
		var availableWidth = null;
		if (searchBar) {
			availableWidth = (direction == "rtl" ? (departmentsMenu.offsetLeft + departmentsMenu.offsetWidth) - (searchBar.offsetLeft + searchBar.offsetWidth) : searchBar.offsetLeft - departmentsMenu.offsetLeft) - allDepartmentsItem.offsetWidth;
		}
		else {
			availableWidth = departmentsMenu.offsetWidth - allDepartmentsItem.offsetWidth;
		}
		for (var i = 0; i < departmentsMenuItems.length - 1; i++) {
			availableWidth -= departmentsMenuItems[i].offsetWidth;
			domClass.toggle(departmentsMenuItems[i], "hidden", (availableWidth < 0));
		}
		departmentButtons.forEach(function(departmentButton, i) {
			on(departmentButton, "keydown", function(e) {
				if (e.keyCode == 9 || (e.keyCode ==9 && e.shiftKey)) {
					deactivate(document.getElementById(departmentButton.getAttribute("data-toggle")));
				}
			});
		});
		departmentMenus.forEach(function(departmentMenu, i) {
			on(departmentMenu, "click", function(e) {
				var target = this.getAttribute("data-toggle");
				if (target != null){
					toggle(document.getElementById(target));
					event.stop(e);
				}
			});
			var departmentMenuItems = query('[class*="menuLink"]', departmentMenu);
			departmentMenuItems.forEach(function(departmentMenuItem, j) {
				on(departmentMenuItem, "keydown", function(e) {
					if (e.keyCode == 27) {
						deactivate(document.getElementById(departmentMenu.getAttribute("id")));
						event.stop(e);
					} else if (e.keyCode == 9 || (e.keyCode ==9 && e.shiftKey)) {
						deactivate(document.getElementById(departmentMenu.getAttribute("id")));
					} else if (e.keyCode == 38) {
						departmentMenuItems[j == 0 ? departmentMenuItems.length - 1 : j - 1].focus();
						event.stop(e);
					} else if (e.keyCode == 40) {
						departmentMenuItems[(j + 1) % departmentMenuItems.length].focus();
						event.stop(e);
					}
				});
			});
		});
	};
	window.setTimeout(updateDepartmentsMenu, 200);
	if (!(has("ie") < 9)) { // Disabled due to an IE8 bug causing the page to go partially black
		on(window, "resize", updateDepartmentsMenu);
	}

	query("#searchFilterMenu > ul > li > a").on("click", function(e) {
		document.getElementById("searchFilterButton").innerHTML = this.innerHTML;
		document.getElementById("categoryId").value = this.getAttribute("data-value");
		deactivate(document.getElementById("searchFilterMenu"));
	});
	query("#searchBox > .submitButton").on("click", function(e) {
		var searchTerm = document.getElementById("SimpleSearchForm_SearchTerm");
		searchTerm.value = lang.trim(searchTerm.value);
		var unquote = lang.trim(searchTerm.value.replace(/'|"/g, ""));
		if (searchTerm.value && unquote != "") {
			processAndSubmitForm(document.getElementById("searchBox"));
		}
	});
	var searchBox = document.getElementById("searchBox");
	if (searchBox) {
		on(searchBox, "submit", function(e) {
			updateFormWithWcCommonRequestParameters(e.target);
			var searchTerm = document.getElementById("SimpleSearchForm_SearchTerm");
			var origTerm = searchTerm.value;
			var unquote = lang.trim(searchTerm.value.replace(/'|"/g, ""));
			searchTerm.value = unquote;
		
			if (!searchTerm.value) {
				event.stop(e);
				return false;
			}
			searchTerm.value= lang.trim(origTerm);
		});
	}

	// Context and Controller to refresh department drop-down
	wc.render.declareContext("departmentSubMenuContext",{targetId: ""},"");
	wc.render.declareRefreshController({
		id: "departmentSubMenu_Controller",
		renderContext: wc.render.getContextById("departmentSubMenuContext"),
		url: "",
		formId: "",
		renderContextChangedHandler: function(message, widget) {
			cursor_wait();
			widget.refresh(this.renderContext.properties);
		},
		postRefreshHandler: function(widget) {
			updateDepartmentsMenu(); // Browser may be re-sized. From server we return entire department list.. updateHeader to fit to the list within available size
			activate(document.getElementById(this.renderContext.properties.targetId)); // We have all the data.. Activate the menu...
			cursor_clear();
		}
	});

	setAjaxRefresh = function(refresh){
		this.ajaxRefresh = refresh;
	}

});
