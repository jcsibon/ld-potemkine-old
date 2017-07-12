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

// NLS_CHARSET=UTF-8
({
	HISTORY:"History",
	//AutoSuggestion Headings
	ARTICLES: "Articles",
	BRAND: "Brand",
	CATEGORY: "Category",
	//Product Description
	ERR_RESOLVING_SKU : "Your selection is either incomplete or not in stock. Please be sure to supply a value for each attribute or consider a different combination of values.",
	QUANTITY_INPUT_ERROR : "The value in the Quantity field is invalid. Ensure the value is a positive integer and try again.",
	QUANTITY_INPUTS_ERROR : "The values in the Quantity fields are invalid or empty. Ensure the values are positive integers and try again.",
	WISHLIST_ADDED : "The item has been successfully added to your Wish List",
	ERROR_CONTRACT_EXPIRED_GOTO_ORDER : "The selected items cannot be added to the current order because the contracts for some of the order items are no longer available. Please select the available contracts that you want to apply to your order items.",
	MYACCOUNT_SAVEDORDERLIST_EMPTY_ADD_TO_REQ_FAIL : "This saved order cannot be copied to the requisition list, as it is empty.  Please add one or more items to the saved order.",
	SHOPCART_ADDED : "The item has been successfully added to your current order.",
	PRICE : "Price:",
	SKU : "SKU:",
	PQ_PURCHASE : "Purchase:",
	PQ_PRICE_X : "${0} -",
	PQ_PRICE_X_TO_Y : "${0} to ${1} -",
	PQ_PRICE_X_OR_MORE : "${0} or more -",
	
	COMPARE_ITEM_EXISTS : "The product you are trying to add to the compare zone already exists.",
	COMPATE_MAX_ITEMS : "You can only compare up to 4 products.",
	COMPAREZONE_ADDED : "The Item has been successfully added to the compare zone.",
	
	GENERICERR_MAINTEXT : "The store has encountered a problem processing the last request. Please try again. If the problem persists, ${0} for assistance.",
	GENERICERR_CONTACT_US : "contact us",
	
	MSC_ITEMS : "${0} item(s)",
	
	// Shopping List Messages
	DEFAULT_WISH_LIST_NAME : "Wish List",
	LIST_CREATED : "Wish list successfully created.",
	LIST_EDITED : "Wish list name successfully changed.",
	LIST_DELETED : "Wish list successfully deleted.",
	ITEM_ADDED : "The item has been added to your wish list.",
	ITEM_REMOVED : "The item has been removed from your wish list.",
	ERR_NAME_EMPTY : "Type a name for your wish list.",
	ERR_NAME_TOOLONG : "Wish list name is too long.",
	ERR_NAME_SHOPPING_LIST : "Wish List is a reserved name for the default wish list. Choose a different name.",
	ERR_NAME_DUPLICATE : "A wish list already exists with the name you have chosen. Choose a different name.",
	INVALID_NAME_SHOPPING_LIST : "The wish list name contains invalid characters.  Provide an alphanumeric name.",
	WISHLIST_EMAIL_SENT : "Your e-mail has been sent.",
	WISHLIST_MISSINGNAME : "The Name field cannot be blank. Type your name in the Name field and try again.",
	WISHLIST_MISSINGEMAIL : "The E-mail address field cannot be blank. Type the e-mail address of the person to whom you are sending your wish list and try again.",
	WISHLIST_INVALIDEMAILFORMAT : "Invalid E-mail address format.",
	WISHLIST_EMPTY : "Please create a wish list before sending an email.",
	WISHLIST_INVALIDSENDERNAME : "The Name field contains invalid characters. Type your name in the Name field and try again.",
		
	// Inventory Status Messages
	INV_STATUS_RETRIEVAL_ERROR : "An error occurred while retrieving inventory status. Try again later. If the problem persists, contact your site administrator.",
	INV_ATTR_UNAVAILABLE: "${0} - unavailable",
	
	// Product Tab
	CONFIGURATION: "Configuration",
	
	// My Account Page Messages
	QC_UPDATE_SUCCESS : "Quick checkout profile updated successfully!",
	MYACCOUNT_ACTION_PERFORMED : "Action performed successfully.",
	
	// This line defines the Quantity {0} and the component name {1} of a dynamic kit.  If a kit has a component with quantity 3, it will show as: 3 x Harddrive.
	// To show the string "Harddrive : 3", simply change this line to:  {1} : {0}.
	ITEM_COMPONENT_QUANTITY_NAME: "${0} x ${1}",
	
	//Sterling OrderLine Status
	ORDER_LINE_STATUS_S : "Order Shipped",
	ORDER_LINE_STATUS_G : "Order Processing",
	ORDER_LINE_STATUS_K : "Return Associated",
	ORDER_LINE_STATUS_V : "Partially Shipped",
	ORDER_LINE_STATUS_X : "Order Cancelled",
	
	//Facet Error Message
	ERROR_FACET_PRICE_INVALID : "The price entered is not in a valid format.",
	
	//User registration Error messages
	ERROR_RecipientTooLong : "The value entered in the recipient field is too long.",
	ERROR_FirstNameTooLong : "The value entered in the first name field is too long.",
	ERROR_LastNameTooLong : "The value entered in the last name field is too long.",
	ERROR_MiddleNameTooLong : "The value entered in the middle name field is too long.",
	ERROR_AddressTooLong : "The value entered in the street address field is too long.",
	ERROR_CityTooLong : "The value entered in the city field is too long.",
	ERROR_StateTooLong : "The value entered in the state/province field is too long.",
	ERROR_CountryTooLong : "The value entered in the country/region field is too long.",
	ERROR_ZipCodeTooLong : "The value entered in the ZIP code/postal code field is too long.",
	ERROR_EmailTooLong : "The value entered in the email field is too long.",
	ERROR_PhoneTooLong : "The value entered in the phone number field is too long.",
	ERROR_FaxTooLong : "The value entered in the fax field is too long.",
	ERROR_RecipientEmpty : "The recipient field cannot be empty.",
	ERROR_LastNameEmpty : "The last name field cannot be empty.",
	ERROR_MiddleNameEmpty : "The middle name field cannot be empty.",
	ERROR_AddressEmpty : "The street address field cannot be empty.",
	ERROR_CityEmpty : "The city field cannot be empty.",
	ERROR_StateEmpty : "The state/province field cannot be empty.",
	ERROR_CountryEmpty : "The country/region field cannot be empty.",
	ERROR_ZipCodeEmpty : "The ZIP code/postal code field cannot be empty.",
	ERROR_EmailEmpty : "The Email address field cannot be empty.",
	ERROR_FirstNameEmpty : "The first name field cannot be empty.",
	ERROR_PhonenumberEmpty : "The phone number field cannot be empty.",
	ERROR_PhoneEmpty : "The phone number field cannot be empty.",
	ERROR_FaxEmpty : "The fax field cannot be empty.",
	ERROR_INVALIDEMAILFORMAT : "The email entered is not in a valid format.",
	ERROR_INVALIDPHONE : "The phone number entered is not in a valid format.",
	PWDREENTER_DO_NOT_MATCH : "The passwords entered do not match.",
	ERROR_SpecifyYear : "A year has not been specified. Do not specify any birthday values if you prefer to keep this information confidential.",
	ERROR_SpecifyMonth : "A month has not been specified. Do not specify any birthday values if you prefer to keep this information confidential.",
	ERROR_SpecifyDate : "A date has not been specified. Do not specify any birthday values if you prefer to keep this information confidential.",
	ERROR_InvalidDate1 : "This date is invalid for the selected month.",
	ERROR_InvalidDate2 : "The provided birthday is invalid.",
	ERROR_DEFAULTADDRESS : "Your address cannot be removed. Your address book must contain at least one address.",
	INVALID_EXPIRY_DATE : "Invalid expiry date.",
	ERROR_LogonIdEmpty : "The Logon Id field cannot be empty.",
	ERROR_PasswordEmpty : "The password field cannot be empty.",
	ERROR_VerifyPasswordEmpty : "The password verify field cannot be empty.",
	AGE_WARNING_ALERT : "You are under the age of 13, please read our children's privacy policy before you proceed further.",
	ERROR_DefaultOrgRegistration : "'Default Organization' is not a valid organization name. Please choose another name.",
	
	//Org registration error messages
	ERROR_OrgNameEmpty : "The organization name field cannot be empty.",
	ERROR_OrgNameTooLong : "The value entered in the organization name field is too long.",
	Logon_WaitingForApproval : "Your registration request has been received.  Your account is waiting for approval. Until your account has been approved, you cannot log on.",
	Logon_RegistrationRequired : "Guest users are limited to browse the catalog. Please register or log in for full access to the store.",
	ERROR_OrganizationDescription:"The value entered in the organization description field is too long.",
	ERROR_BusinessCategoryTooLong:"The value entered in the business category field is too long.",
	ERROR_SelectOrganizationTypeEmpty:"Please select organization type.",
	ERROR_ParentOrgNameEmpty:"Please search and select a valid parent organization under which you want to create new organzation.",

	//On-Behalf-Of/Call Center integration
	ERROR_ADD2CART_BROWSE_ONLY : "Cannot add product to current order in browse only mode.",
	
	// Add To Requisition List Messages	
	ERROR_SL_RESOLVED_SKU : "Your selection is incomplete. For each attribute, select a value.",
	ERROR_SL_EMPTY_SL_NAME : "Provide a name for your new requisition list.",
	ERROR_SL_LIST_NOT_CHOSEN : "Choose a requisition list.",
	ERROR_GLOBALLOGIN_BUYER_SEARCH : "An error occured while performing the search" ,
	GLOBAL_LOGIN_NO_USERS_FOUND : "No users found",
	// Organization create / update
	ORG_ROLES_UPDATED : "Organization roles updated successfully.",
	ORG_ROLES_UPDATE_NO_CHNAGE : "No updates are made for organization roles.",
	APPROVAL_MEMBER_GROUP_UPDATED : "Approval Member Groups updated successfully.",
	ORG_ENTITY_CREATED_UPDATING_ROLES : "Organization created successfully. Updating organization roles.",
	ORG_SUMMARY_UPDATED : "Organization details updated successfully."
})
