//-----------------------------------------------------------------
// Licensed Materials - Property of IBM
//
// WebSphere Commerce
//
// (C) Copyright IBM Corp. 2011, 2014 All Rights Reserved.
//
// US Government Users Restricted Rights - Use, duplication or
// disclosure restricted by GSA ADP Schedule Contract with
// IBM Corp.
//-----------------------------------------------------------------

/**
* Function to create javascript object InventoryStatusJS
*
* @param {Object} storeParams params specific to a store
* @param {Object} catEntryParams params specific to base Item
* @param {Array} physicalStores inventory details specific to physical store
* 
**/
function InventoryStatusJS(storeParams, catEntryParams, physicalStores, productId) {
	this.storeParams = storeParams;
	this.catEntryParams = catEntryParams;
	this.physicalStores = physicalStores;
	this.productId = productId;
	this.isFetchInventoryStatus = false;
	this.itemId = -1;
	
	/**
	 * Setter for itemId
	 * 
	 * @param Integer catEntryId
	 * @param Integer productId
	 */
	this.setCatEntry = function(catEntryId, productId){
		// if it is ItemBean, no need to set the attributes, since it is not required to resolve SKU
		if(this.catEntryParams.type != "ItemBean"){
			
			// hiding the availability section
			dojo.style("InventoryStatus_Availability_Section_"+this.productId,"display","none");

			// showing the show availability link
			dojo.style("InventoryStatus_ShowLink_Section_"+this.productId,"display","block");
			
			// If we are able to resolve the sku, then show the inventory status 
			if(catEntryId != -1){
				this.itemId = catEntryId;
				this.checkAvailability(this.isFetchInventoryStatus);
				this.isFetchInventoryStatus = false;
			}
		}
	};
	
	/**
	 * Restores the Inventory Availability section to the initial state if no SKU is resolved
	 * 
	 * @param Integer catEntryId
	 * @param Integer productId
	 */
	this.restoreDefaultState = function(catEntryId, productId){
		if(catEntryId == null){
			// hiding the availability section
			dojo.style("InventoryStatus_Availability_Section_"+this.productId,"display","none");

			// showing the show availability link
			dojo.style("InventoryStatus_ShowLink_Section_"+this.productId,"display","block");
		}
	};
	
	/**
	 * After resolving the SKU for a product, checks the inventory status online 
	 * and in the stores selected by the user 
	 */
	this.checkAvailability = function(allowParallelCall){
		MessageHelper.hideAndClearMessage();
		
		var params = this.setCommonParams();
		if(-1 == this.itemId){
			MessageHelper.displayErrorMessage(storeNLS['ERR_RESOLVING_SKU']);
			return;
		}
		params.itemId = this.itemId;

		// hiding the show availability link
		dojo.style("InventoryStatus_ShowLink_Section_"+this.productId,"display","none");
		
		setCurrentId('progressbar_'+this.productId);
		// if the call is during the page load, allow parallel calls, since there may be other ajax calls in progress
		if(!allowParallelCall){
			// For Handling multiple clicks.
			if(!submitRequest()){
				return;
			}
		}
		
		cursor_wait();
		wc.service.invoke("getInventoryStatus_"+this.productId, params);
	};
	
	/**
	* Populate the contents of the inventory details section in the product display page with the JSON returned 
	* from the server. This is the callback function that is called after the AJAX call to get the inventory 
	* details successfully returns to the client.
	* 
	* @param {Object} serviceResponse response object from dojo.xhrPost
	* @param {dojo.__IoCallbackArgs} ioArgs Argument to the IO call from dojo.xhrPost
	*/
	this.populateInvDetails = function(serviceResponse, ioArgs) {
		if(serviceResponse.onlineInventory){
			// setting the online inventory status
			dojo.place("<img id='InventoryStatus_OnlineStatus_Img_"+this.productId+"' src='"
					+ imageDirectoryPath + styleDirectoryPath + serviceResponse.onlineInventory.image 
					+ "' alt='' border='0' />", 
					"InventoryStatus_OnlineStatus_Img_"+this.productId, "replace");
			dojo.html.set(dojo.byId("InventoryStatus_OnlineStatus_"+this.productId),serviceResponse.onlineInventory.status);
			
			// removing the in store section if present
			dojo.query("#InventoryStatus_InStore_Section_"+this.productId).orphan();
			
			// check if the physical store section is present
			if(null != dojo.byId("InventoryStatus_InStore_Heading_"+this.productId)) {
				// adding the empty store section
				dojo.place("<div id='InventoryStatus_InStore_Section_"+this.productId+"' class='sublist'>",
						"InventoryStatus_InStore_Heading_"+this.productId,"after");
			
				this.physicalStores = serviceResponse.inStoreInventory.stores;
				// adding the store inventory details as child elements in the store section
				for(idx=0;idx<serviceResponse.inStoreInventory.stores.length;idx++){
					var store = serviceResponse.inStoreInventory.stores[idx];
					
					// adding the store name
					dojo.place("<a id='WC_InventoryStatus_Link_"+this.productId+"_store_"+(idx+1)+"' href='javascript:InventoryStatusJS_"+this.productId+".fetchStoreDetails("+store.id+");' class='store_name'>" + store.name 
							+ "</a>","InventoryStatus_InStore_Section_"+this.productId);
					// adding clear div
					dojo.place("<div class='clear_float'></div>","InventoryStatus_InStore_Section_"+this.productId);
					// adding the image status of store name
					dojo.place("<span> <img src='" + imageDirectoryPath + styleDirectoryPath + store.image 
							+ "' alt='" + store.altText + "' /> </span>","InventoryStatus_InStore_Section_"+this.productId);
					// adding the text status of store name
					dojo.place("<span class='text'>" + store.statusText + "</span>","InventoryStatus_InStore_Section_"+this.productId);
					// adding clear div
					dojo.place("<div class='clear_float'></div>","InventoryStatus_InStore_Section_"+this.productId);
					// adding spacer
					dojo.place("<div class='item_spacer_10px'></div>","InventoryStatus_InStore_Section_"+this.productId);
				}
				// add select store link
				dojo.html.set(dojo.byId("InventoryStatus_SelectStoreLink_"+this.productId),serviceResponse.inStoreInventory.checkStoreText);
			}
			
			// showing the availability section
			dojo.style("InventoryStatus_Availability_Section_"+this.productId,"display","block");
		} else {
			MessageHelper.displayErrorMessage(storeNLS["INV_STATUS_RETRIEVAL_ERROR"]);
		}
		cursor_clear();
	};
	
	/**
	 * This resolves the product SKUs to a single item by comparing the attributes selected by the user
	 * 
	 * @return {Integer} uniqueId, of the selected SKU.
	 * 					 -1, if no match found
	 */
	this.resolveSKU = function() {
		for(idx=0;idx<this.catEntryParams.skus.length;idx++){
			var matches = 0;
			var attributeCount = 0;
			for(attribute in this.catEntryParams.skus[idx].attributes){
				attributeCount++;
				if(this.catEntryParams.attributes && this.catEntryParams.skus[idx].attributes[attribute] == this.catEntryParams.attributes[attribute]){
					matches++;
				} else {
					break;
				}
			}
			if(matches == attributeCount){
				return this.catEntryParams.skus[idx].id;
			}
		}
		return -1;
	};
	
	/**
	 * Sets the store specific values such as storeId, catalogId and langId
	 * to the params object and returns it
	 * 
	 * @return {Object} params with store specific values
	 */
	this.setCommonParams = function(){
		var params = new Object();
		params.storeId		= this.storeParams.storeId;
		params.catalogId	= this.storeParams.catalogId;
		params.langId		= this.storeParams.langId;
		return params;
	};
	
	/**
	 * Show Store details popup after fetching the required details
	 */
	this.fetchStoreDetails = function(storeId){
		MessageHelper.hideAndClearMessage();
		
		var params = new Object();
		params.physicalStoreId = storeId;
		
		// For Handling multiple clicks.
		if(!submitRequest()){
			return;
		}
		cursor_wait();
		wc.service.invoke("getPhysicalStoreDetails_"+this.productId, params);
	};
	
	/**
	* Populate the contents of the store details section in the product display page with the JSON returned 
	* from the server. This is the callback function that is called after the AJAX call to get the inventory 
	* details successfully returns to the client.
	* 
	* @param {Object} serviceResponse response object from dojo.xhrPost
	* @param {dojo.__IoCallbackArgs} ioArgs Argument to the IO call from dojo.xhrPost
	*/
	this.populateStoreDetails = function(serviceResponse, ioArgs){
		var store = serviceResponse;
		
		// set unescaped working hours
		store.hours = this.unEscapeXml(serviceResponse.hours);
		
		// set inventory status
		var storeInventory = this.fetchInventoryStatus(ioArgs.args.content.physicalStoreId);

		// set store availability details
		store.imageTag = "<img src='"+imageDirectoryPath + styleDirectoryPath +storeInventory.image+"' alt='"+storeInventory.altText+"'/>";
		store.statusText = storeInventory.statusText;
		
		if(storeInventory.status == 'Available'){
			store.availabilityDetails = "(" + storeInventory.availableQuantity + ")"; // adding the available quantity
		} else if(storeInventory.status == 'Backorderable'){
			store.availabilityDetails = "(" + storeInventory.availableDate + ")"; // adding the available date
		} else {
			store.availabilityDetails = "";
		}
		var storeDetails = dojo.byId("Store_Details_Template_"+this.productId).innerHTML;
		dojo.byId("Store_Details_"+this.productId).innerHTML = dojo.replace(storeDetails, store);
		
		// Display store details
		var popup = dijit.byId("InventoryStatus_Store_Details_"+this.productId);
		if (popup !=null) {			
			popup.closeButtonNode.style.display='none';//hide the close button inherited from dijit.dialog		
			closeAllDialogs(); //close other dialogs(quickinfo dialog, etc) before opening this. 				
			popup.show();
		}else {
			console.debug("InventoryStatus_Store_Details_"+this.productId+" does not exist");
		}
		cursor_clear();
	};
	
	/**
	 * 
	 */
	this.fetchInventoryStatus = function(storeId) {
		for(idx=0;idx <this.physicalStores.length; idx++){
			if(this.physicalStores[idx].id == storeId){
				return this.physicalStores[idx];
			}
		}
		return {};
	};
	
	/**
	 * Converts xml accepted form to < >
	 * 
	 * @param {String} str, String to be converted
	 * 
	 * @return {String} converted string
	 */
	this.unEscapeXml = function(str){
		var str = str.replace(/&lt;/gm, "<").replace(/&gt;/gm, ">");
		return str;
	};
	
	this.loadStoreLocator = function(storeLocatorUrl, bundleId){
		var catalogEntryId = bundleId;
		if(null == catalogEntryId || '' == catalogEntryId){
			catalogEntryId = this.itemId;
			if(-1 == catalogEntryId){
				catalogEntryId = productId;
			}
		}
		loadLink(storeLocatorUrl + "&productId="+catalogEntryId);
	}
}
