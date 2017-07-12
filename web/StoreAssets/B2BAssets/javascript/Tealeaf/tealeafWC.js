//-----------------------------------------------------------------
// Licensed Materials - Property of IBM
//
// WebSphere Commerce
//
// (C) Copyright IBM Corp. 2012 All Rights Reserved.
//
// US Government Users Restricted Rights - Use, duplication or
// disclosure restricted by GSA ADP Schedule Contract with
// IBM Corp.
//-----------------------------------------------------------------

 
TealeafWCJS ={
	
	processDOMEvent:function(event){
		if (typeof TLT != 'undefined') {
			TLT.processDOMEvent(event);
		}
	},

	rebind:function(id){
		if (typeof TLT != 'undefined' && TLT.rebind) {
		   var scope = dojo.byId(id);
		   if (scope) {
			   TLT.rebind(scope);
		   }
		}
	},
	
	logClientValidationCustomEvent:function( customMsgObj){
		if (typeof TLT != 'undefined') {
			if(TLT.isInitialized()){
				TLT.logCustomEvent("WCClientValidation", customMsgObj);
			}
			else{
				
				setTimeout(function () { logClientValidationCustomEvent( customMsgObj)}, 100);
			}
				
		}
	},
	
	createExplicitChangeEvent:function(id){
	   if (typeof TLT != 'undefined') {
			if (document.createEventObject && dojo.isIE < 9) { 				   // for IE 
				var evt=document.createEventObject();
				dojo.byId(id).fireEvent("onchange",evt);
			} else {
				var evt=document.createEvent("HTMLEvents");
				evt.initEvent("change", true, false);
				dojo.byId(id).dispatchEvent(evt);	
			} 
		}		
	}
}