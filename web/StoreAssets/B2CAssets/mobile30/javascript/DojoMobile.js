//-----------------------------------------------------------------
// Licensed Materials - Property of IBM
//
// WebSphere Commerce
//
// (C) Copyright IBM Corp. 2011, 2012 All Rights Reserved.
//
// US Government Users Restricted Rights - Use, duplication or
// disclosure restricted by GSA ADP Schedule Contract with
// IBM Corp.
//-----------------------------------------------------------------

dojo.require("dojo.parser");
dojo.require("dojox.mobile");
dojo.requireIf(!dojo.isWebKit, "dojox.mobile.compat");

dojo.require("dojox.mobile.ScrollableView");
dojo.require("dojox.mobile.SwapView");
dojo.require("dojox.mobile.PageIndicator");


if (document.addEventListener) {
	document.addEventListener("touchmove", function(e) {
		e.preventDefault();
	}, false);
}