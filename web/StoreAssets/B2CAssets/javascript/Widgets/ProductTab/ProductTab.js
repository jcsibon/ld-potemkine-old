//-----------------------------------------------------------------
// Licensed Materials - Property of IBM
//
// WebSphere Commerce
//
// (C) Copyright IBM Corp. 2011, 2015 All Rights Reserved.
//
// US Government Users Restricted Rights - Use, duplication or
// disclosure restricted by GSA ADP Schedule Contract with
// IBM Corp.
//-----------------------------------------------------------------

require(["dojo/_base/event", "dojo/dom", "dojo/dom-class", "dojo/keys", "dojo/query", "dijit/registry", "dojo/topic"], function(event, dom, domClass, keys, query, registry, topic) {

if(typeof(ProductTabJS) == "undefined" || ProductTabJS == null || !ProductTabJS) {

	ProductTabJS = {
		lastTabId: null,
		/**
		 * To make the tab selected and remove all other tabs from the tab order
		 * See http://www.w3.org/TR/wai-aria-practices/#tabpanel for ARIA best practices
		 * 
		 * @param {String} tabId The ID of the tab to be selected
		 */
		selectTab: function(tabId){
			query("div.tab_container").forEach(function(tab){
				tab.setAttribute("aria-selected", "false");
				tab.setAttribute("class", "tab_container inactive_tab");
				tab.setAttribute("tabindex", "-1");
			});
			query("div.tab").forEach(function(tabPanel){
				tabPanel.setAttribute("style", "display:none");
			});
			
			dom.byId(tabId).setAttribute("aria-selected", "true");
			dom.byId(tabId).setAttribute("tabindex", "0");
			dom.byId(tabId).setAttribute("class", "tab_container active_tab");
			dom.byId(tabId + "Widget").setAttribute("style", "display:block");
			registry.findWidgets(dom.byId(tabId + "Widget")).forEach(function(widget) {
				if (widget.resize) {
					widget.resize();
				}
			});
			
			if (this.lastTabId == null || this.lastTabId != tabId) {
				this.lastTabId = tabId;
				topic.publish("CIRefreshProductInventoryOverlay");
				topic.publish("CIRefreshProductOverlay");
			}
		},
		
		/**
		 * To select the previous or next tab with the keyboard arrow keys.  If there are no more tabs to the
		 * left or right, wrap to the other end of the tab list.  
		 * See http://www.w3.org/TR/wai-aria-practices/#tabpanel for ARIA best practices
		 * 
		 * @param {int} tabIndex The index of the tab to be selected
		 * @param {int} tabSetSize The number of total tabs in the tablist
		 * @param {event} event
		 */
		selectTabWithKeyboard: function(tabIndex, tabSetSize, event) {
			if (event.keyCode == keys.DOWN_ARROW || event.keyCode == keys.RIGHT_ARROW) {
				tabIndex++;
				if (dom.byId("tab" + tabIndex)) {
					this.selectTab("tab" + tabIndex);
					this.focusTab("tab" + tabIndex);
				} else {
					this.selectTab("tab1");
					this.focusTab("tab1");
				}
				this.cancelEvent(event);
			}

			if (event.keyCode == keys.UP_ARROW || event.keyCode == keys.LEFT_ARROW) {
				if (dom.byId("tab" + (tabIndex-1))) {
					this.selectTab("tab" + (tabIndex-1));
					this.focusTab("tab" + (tabIndex-1));
				} else {
					this.selectTab("tab" + tabSetSize);
					this.focusTab("tab" + tabSetSize);
				}
				this.cancelEvent(event);
			}
		},

		/**
		 * Stop event propagation
		 * 
		 * @param {event} e
		 */
		cancelEvent: function(e) {
			event.stop(e);
		},
		
		/**
		 * To bring the focus to the tab
		 * 
		 * @param {String} tabId The ID of the tab to be selected
		 */
		focusTab: function(tabId){
			if (domClass.contains(tabId,"focused_tab")){
				query("> div",dom.byId(tabId)).style("border","1px dotted #000000");
				return;
			} else {
				domClass.add(tabId,"focused_tab");
				query("> div",dom.byId(tabId)).style("border","1px dotted #000000");
				dom.byId(tabId).focus();
			}
		},
	
		/**
		 * To take the focus out from the tab
		 * 
		 * @param {String} tabId The ID of the tab to be selected
		 */
		blurTab: function(tabId){
			domClass.remove(tabId,"focused_tab");
			query("> div",dom.byId(tabId)).style("border","1px solid transparent");
		}
	};
}

});
