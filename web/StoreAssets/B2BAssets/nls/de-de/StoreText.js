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
	HISTORY:"Protokoll",
	//AutoSuggestion Headings
	ARTICLES: "Artikel",
	BRAND: "Marke",
	CATEGORY: "Kategorie",
	//Product Description
	ERR_RESOLVING_SKU : "Ihre Auswahl ist entweder unvollständig oder nicht vorrätig. Stellen Sie sicher, dass Sie für jedes Attribut einen Wert angeben, oder geben Sie eine andere Kombination von Werten an.",
	QUANTITY_INPUT_ERROR : "Der Wert im Feld 'Menge' ist nicht gültig. Stellen Sie sicher, dass der Wert eine positive ganze Zahl ist und versuchen Sie es erneut.",
	QUANTITY_INPUTS_ERROR : "Die Werte im Feld 'Menge' sind nicht gültig oder leer. Stellen Sie sicher, dass die Werte positive ganze Zahlen sind, und wiederholen Sie den Vorgang.",
	WISHLIST_ADDED : "Der Artikel wurde der Wunschliste erfolgreich hinzugefügt.",
	ERROR_CONTRACT_EXPIRED_GOTO_ORDER : "Die ausgewählten Artikel können nicht zum Warenkorb hinzugefügt werden, da die Verträge für einige der Bestellartikel nicht mehr zur Verfügung stehen. Wählen Sie die verfügbaren Verträge aus, die auf Ihre Bestellartikel angewendet werden sollen.",
	MYACCOUNT_SAVEDORDERLIST_EMPTY_ADD_TO_REQ_FAIL : "Diese gespeicherte Bestellung kann nicht in die Anforderungsliste kopiert werden, weil sie leer ist.  Fügen Sie mindestens einen Artikel zu der gespeicherten Bestellung hinzu.",
	SHOPCART_ADDED : "Der Artikel wurde Ihrem Einkaufskorb erfolgreich hinzugefügt.",
	PRICE : "Preis:",
	SKU : "Artikelnummer:",
	PQ_PURCHASE : "Einkauf:",
	PQ_PRICE_X : "${0} -",
	PQ_PRICE_X_TO_Y : "${0} bis ${1} -",
	PQ_PRICE_X_OR_MORE : "${0} oder mehr -",
	
	COMPARE_ITEM_EXISTS : "Das Produkt, das Sie der Vergleichszone hinzufügen möchten, ist bereits vorhanden.",
	COMPATE_MAX_ITEMS : "Sie können nur bis zu 4 Produkte vergleichen.",
	COMPAREZONE_ADDED : "Der Artikel wurde der Vergleichszone erfolgreich hinzugefügt.",
	
	GENERICERR_MAINTEXT : "Beim Verarbeiten der letzten Anforderung hat das Geschäft ein Problem festgestellt. Bitte wiederholen Sie den Versuch. Wenn das Problem bestehen bleibt, ${0} für Unterstützung.",
	GENERICERR_CONTACT_US : "Kontaktieren Sie uns!",
	
	MSC_ITEMS : "${0} Artikel",
	
	// Shopping List Messages
	DEFAULT_WISH_LIST_NAME : "Wunschliste",
	LIST_CREATED : "Die Wunschliste wurde erfolgreich erstellt.",
	LIST_EDITED : "Der Name der Wunschliste wurde erfolgreich geändert.",
	LIST_DELETED : "Die Wunschliste wurde erfolgreich gelöscht.",
	ITEM_ADDED : "Der Artikel wurde zu Ihrer Wunschliste hinzugefügt.",
	ITEM_REMOVED : "Der Artikel wurde aus Ihrer Wunschliste entfernt.",
	ERR_NAME_EMPTY : "Geben Sie einen Namen für Ihre Wunschliste ein.",
	ERR_NAME_TOOLONG : "Der Name der Wunschliste ist zu lang.",
	ERR_NAME_SHOPPING_LIST : "Der Name 'Wunschliste' ist für die Standardwunschliste reserviert. Wählen Sie einen anderen Namen aus.",
	ERR_NAME_DUPLICATE : "Es ist bereits eine Wunschliste mit dem von Ihnen gewählten Namen vorhanden. Wählen Sie einen anderen Namen aus.",
	INVALID_NAME_SHOPPING_LIST : "Der Name der Wunschliste enthält ungültige Zeichen.  Geben Sie einen aus alphanumerischen Zeichen bestehenden Namen ein.",
	WISHLIST_EMAIL_SENT : "Ihre E-Mail wurde gesendet.",
	WISHLIST_MISSINGNAME : "Das Feld für den Namen muss ausgefüllt werden. Geben Sie im Feld 'Name' Ihren Namen ein, und wiederholen Sie den Vorgang.",
	WISHLIST_MISSINGEMAIL : "Das Feld für die E-Mail-Adresse muss ausgefüllt werden. Geben Sie die E-Mail-Adresse der Person ein, an die die Wunschliste gesendet werden soll, und wiederholen Sie den Vorgang.",
	WISHLIST_INVALIDEMAILFORMAT : "Ungültiges Format für E-Mail-Adresse.",
	WISHLIST_EMPTY : "Erstellen Sie eine Wunschliste, bevor Sie eine E-Mail senden.",
	WISHLIST_INVALIDSENDERNAME : "Das Feld 'Name' enthält ungültige Zeichen. Geben Sie im Feld 'Name' Ihren Namen ein, und wiederholen Sie den Vorgang.",
		
	// Inventory Status Messages
	INV_STATUS_RETRIEVAL_ERROR : "Beim Abrufen des Lagerbestandsstatus ist ein Fehler aufgetreten. Versuchen Sie es zu einem späteren Zeitpunkt erneut. Wenden Sie sich an den Siteadministrator, wenn das Problem bestehen bleibt.",
	INV_ATTR_UNAVAILABLE: "${0} - nicht verfügbar",
	
	// Product Tab
	CONFIGURATION: "Konfiguration",
	
	// My Account Page Messages
	QC_UPDATE_SUCCESS : "Profil für Schnellkasse erfolgreich aktualisiert!",
	MYACCOUNT_ACTION_PERFORMED : "Die Aktion wurde erfolgreich ausgeführt.",
	
	// This line defines the Quantity {0} and the component name {1} of a dynamic kit.  If a kit has a component with quantity 3, it will show as: 3 x Harddrive.
	// To show the string "Harddrive : 3", simply change this line to:  {1} : {0}.
	ITEM_COMPONENT_QUANTITY_NAME: "${0} x ${1}",
	
	//Sterling Order Line Status
	ORDER_LINE_STATUS_S : "Bestellung ausgeliefert",
	ORDER_LINE_STATUS_G : "Bestellbearbeitung",
	ORDER_LINE_STATUS_K : "Rückgabe zugeordnet",
	ORDER_LINE_STATUS_V : "Teilweise versendet",
	ORDER_LINE_STATUS_X : "Bestellung storniert",
	
	//Facet Error Message
	ERROR_FACET_PRICE_INVALID : "Der angegebene Preis weist ein ungültiges Format auf.",
	
	//User registration Error messages
	ERROR_RecipientTooLong : "Der im Feld 'Empfänger' eingegebene Wert ist zu lang.",
	ERROR_FirstNameTooLong : "Der im Feld 'Vorname' eingegebene Wert ist zu lang.",
	ERROR_LastNameTooLong : "Der im Feld 'Nachname' eingegebene Wert ist zu lang.",
	ERROR_MiddleNameTooLong : "Der im Feld 'Zweiter Vorname' eingegebene Wert ist zu lang.",
	ERROR_AddressTooLong : "Der im Adressfeld 'Straße' eingegebene Wert ist zu lang.",
	ERROR_CityTooLong : "Der im Feld 'Ort' eingegebene Wert ist zu lang.",
	ERROR_StateTooLong : "Der im Feld 'Bundesland/Kanton' eingegebene Wert ist zu lang.",
	ERROR_CountryTooLong : "Der im Feld 'Land' eingegebene Wert ist zu lang.",
	ERROR_ZipCodeTooLong : "Der im Feld 'Postleitzahl' eingegebene Wert ist zu lang.",
	ERROR_EmailTooLong : "Der im Feld 'E-Mail' eingegebene Wert ist zu lang.",
	ERROR_PhoneTooLong : "Der im Feld 'Telefonnummer' eingegebene Wert ist zu lang.",
	ERROR_FaxTooLong : "Der im Feld 'Faxnummer' eingegebene Wert ist zu lang.",
	ERROR_RecipientEmpty : "Das Feld 'Empfänger' darf nicht leer sein.",
	ERROR_LastNameEmpty : "Das Feld 'Nachname' darf nicht leer sein.",
	ERROR_MiddleNameEmpty : "Das Feld 'Zweiter Vorname' darf nicht leer sein.",
	ERROR_AddressEmpty : "Das Adressfeld 'Straße' darf nicht leer sein.",
	ERROR_CityEmpty : "Das Feld 'Ort' darf nicht leer sein.",
	ERROR_StateEmpty : "Das Feld 'Bundesland/Kanton' darf nicht leer sein.",
	ERROR_CountryEmpty : "Das Feld 'Land' darf nicht leer sein.",
	ERROR_ZipCodeEmpty : "Das Feld 'Postleitzahl' darf nicht leer sein.",
	ERROR_EmailEmpty : "Das Adressfeld 'E-Mail' darf nicht leer sein.",
	ERROR_FirstNameEmpty : "Das Feld 'Vorname' darf nicht leer sein.",
	ERROR_PhonenumberEmpty : "Das Feld 'Telefonnummer' darf nicht leer sein.",
	ERROR_PhoneEmpty : "Das Feld 'Telefonnummer' darf nicht leer sein.",
	ERROR_FaxEmpty : "Das Feld 'Faxnummer' darf nicht leer sein.",
	ERROR_INVALIDEMAILFORMAT : "Die eingegebene E-Mail weist ein ungültiges Format auf.",
	ERROR_INVALIDPHONE : "Die eingegebene Telefonnummer weist ein ungültiges Format auf.",
	PWDREENTER_DO_NOT_MATCH : "Die eingegebenen Kennwörter stimmen nicht überein.",
	ERROR_SpecifyYear : "Es wurde kein Jahr angegeben. Geben Sie keine Werte für Geburtstage an, wenn Sie möchten, dass diese Informationen vertraulich bleiben sollen.",
	ERROR_SpecifyMonth : "Es wurde kein Monat angegeben. Geben Sie keine Werte für Geburtstage an, wenn Sie möchten, dass diese Informationen vertraulich bleiben sollen.",
	ERROR_SpecifyDate : "Es wurde kein Datum angegeben. Geben Sie keine Werte für Geburtstage an, wenn Sie möchten, dass diese Informationen vertraulich bleiben sollen.",
	ERROR_InvalidDate1 : "Das Datum ist für den ausgewählten Monat ungültig.",
	ERROR_InvalidDate2 : "Der angegebene Geburtstag ist ungültig.",
	ERROR_DEFAULTADDRESS : "Ihre Adresse kann nicht entfernt werden. Ihr Adressbuch muss mindestens eine Adresse enthalten.",
	INVALID_EXPIRY_DATE : "Ungültiges Ablaufdatum.",
	ERROR_LogonIdEmpty : "Das Feld 'Anmelde-ID' darf nicht leer sein.",
	ERROR_PasswordEmpty : "Das Feld 'Kennwort' darf nicht leer sein.",
	ERROR_VerifyPasswordEmpty : "Das Feld 'Kennwort bestätigen' darf nicht leer sein.",
	AGE_WARNING_ALERT : "Sie sind jünger als 13 Jahre alt. Bitte lesen Sie die Datenschutzrichtlinien für Kinder, bevor Sie fortfahren.",
	ERROR_DefaultOrgRegistration : "'Standardorganisation' ist kein gültiger Name für eine Organisation. Wählen Sie einen anderen Namen aus.",
	
	//Org registration error messages
	ERROR_OrgNameEmpty : "Das Feld 'Organisationsname' darf nicht leer sein.",
	ERROR_OrgNameTooLong : "Der im Feld 'Organisationsname' eingegebene Wert ist zu lang.",
	Logon_WaitingForApproval : "Ihre Registrierungsanforderung wurde empfangen.  Ihr Konto wartet auf Genehmigung. Sie können sich erst dann anmelden, wenn Ihr Konto genehmigt wurde.",
	Logon_RegistrationRequired : "Gastbenutzer sind auf das Blättern im Katalog beschränkt. Für vollen Zugriff auf das Geschäft registrieren Sie sich bitte, oder melden Sie sich an.",
	ERROR_OrganizationDescription:"Der im Feld 'Organisationsbeschreibung' eingegebene Wert ist zu lang.",
	ERROR_BusinessCategoryTooLong:"Der im Feld 'Geschäftskategorie' eingegebene Wert ist zu lang.",
	ERROR_SelectOrganizationTypeEmpty:"Bitte wählen Sie den Organisationstyp aus.",
	ERROR_ParentOrgNameEmpty:"Wählen Sie eine gültige übergeordnete Organisation aus, unter der Sie eine neue Organisation erstellen möchten.",
	
	//On-Behalf-Of/Call Center integration
	ERROR_ADD2CART_BROWSE_ONLY : "Im Anzeigemodus kann kein Produkt zum Einkaufskorb hinzugefügt werden.",
	
	// Add To Requisition List Messages	
	ERROR_SL_RESOLVED_SKU : "Ihre Auswahl ist unvollständig. Wählen Sie für jedes Attribut einen Wert aus.",
	ERROR_SL_EMPTY_SL_NAME : "Geben Sie der neuen Anforderungsliste einen Namen.",
	ERROR_SL_LIST_NOT_CHOSEN : "Wählen Sie eine Anforderungsliste aus.",
	ERROR_GLOBALLOGIN_BUYER_SEARCH : "Beim Ausführen der Suche trat ein Fehler auf." ,
        GLOBAL_LOGIN_NO_USERS_FOUND : "Keine Benutzer gefunden",
	// Organization create / update
	ORG_ROLES_UPDATED : "Die Aufgabenbereiche der Organisation wurden erfolgreich aktualisiert.",
	ORG_ROLES_UPDATE_NO_CHNAGE : "Es wurden keine Aktualisierungen für Aufgabenbereiche der Organisation vorgenommen.",
	APPROVAL_MEMBER_GROUP_UPDATED : "Die Genehmigungsmitgliedsgruppen wurden erfolgreich aktualisiert.",
	ORG_ENTITY_CREATED_UPDATING_ROLES : "Die Organisation wurde erfolgreich erstellt. Die Aufgabenbereiche der Organisation werden aktualisiert.",
	ORG_SUMMARY_UPDATED : "Die Organisationsdetails wurden erfolgreich aktualisiert."
})

