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
	HISTORY:"Cronologia",
	//AutoSuggestion Headings
	ARTICLES: "Articoli",
	BRAND: "Marca",
	CATEGORY: "Categoria",
	//Product Description
	ERR_RESOLVING_SKU : "La selezione è incompleta oppure non disponibile nel magazzino. Accertarsi di fornire un valore per ciascun attributo e considerare una differente combinazione di valori.",
	QUANTITY_INPUT_ERROR : "Il valore nel campo Quantità non è valido. Accertarsi che il valore sia un numero intero positivo e ritentare.",
	QUANTITY_INPUTS_ERROR : "I valori nei campi Quantità non sono validi o sono vuoti. Accertarsi che i valori siano interi positivi e ritentare.",
	WISHLIST_ADDED : "L'articolo è stato aggiunto correttamente all'elenco interessi",
	ERROR_CONTRACT_EXPIRED_GOTO_ORDER : "Impossibile aggiungere gli articoli selezionati al carrello degli acquisti poiché i contratti di alcuni articoli dell'ordine non sono più disponibili. Selezionare i contratti disponibili che si desidera applicare agli articoli dell'ordine.",
	MYACCOUNT_SAVEDORDERLIST_EMPTY_ADD_TO_REQ_FAIL : "Questo ordine salvato non può essere copiato nell'elenco richieste perché è vuoto.  Aggiungere uno o più articoli all'ordine salvato.",
	SHOPCART_ADDED : "L'articolo è stato correttamente aggiunto al carrello degli acquisti.",
	PRICE : "Prezzo:",
	SKU : "SKU:",
	PQ_PURCHASE : "Acquisto:",
	PQ_PRICE_X : "${0} -",
	PQ_PRICE_X_TO_Y : "da ${0} a ${1} -",
	PQ_PRICE_X_OR_MORE : "${0} o più -",
	
	COMPARE_ITEM_EXISTS : "Il prodotto che si sta provando ad aggiungere alla zona di confronto già esiste.",
	COMPATE_MAX_ITEMS : "È possibile confrontare solo fino a 4 prodotti.",
	COMPAREZONE_ADDED : "L'articolo è stato aggiunto correttamente alla zona di confronto.",
	
	GENERICERR_MAINTEXT : "Il negozio ha rilevato un problema in fase di elaborazione dell'ultima richiesta. Tentare nuovamente. Se il problema persiste, ${0} per un aiuto.",
	GENERICERR_CONTACT_US : "come contattarci",
	
	MSC_ITEMS : "${0} articolo(i)",
	
	// Shopping List Messages
	DEFAULT_WISH_LIST_NAME : "Elenco interessi",
	LIST_CREATED : "Elenco interessi creato correttamente.",
	LIST_EDITED : "Nome dell'elenco interessi modificato correttamente.",
	LIST_DELETED : "Elenco interessi eliminato correttamente.",
	ITEM_ADDED : "L'articolo è stato aggiunto all'elenco interessi.",
	ITEM_REMOVED : "L'articolo è stato rimosso dall'elenco interessi.",
	ERR_NAME_EMPTY : "Immettere un nome per l'elenco interessi.",
	ERR_NAME_TOOLONG : "Il nome dell'elenco interessi è troppo lungo.",
	ERR_NAME_SHOPPING_LIST : "Elenco interessi è un nome riservato per l'elenco interessi predefinito. Specificare un nome differente.",
	ERR_NAME_DUPLICATE : "Un elenco acquisti con il nome scelto esiste già. Specificare un nome differente.",
	INVALID_NAME_SHOPPING_LIST : "Il nome dell'elenco interessi contiene caratteri non validi.  Fornire un nome alfanumerico.",
	WISHLIST_EMAIL_SENT : "L'e-mail è stata inviata.",
	WISHLIST_MISSINGNAME : "Il campo Nome è obbligatorio. Immettere il proprio nome nel campo Nome e riprovare.",
	WISHLIST_MISSINGEMAIL : "Il campo E-mail è obbligatorio. Immettere l'indirizzo e-mail della persona a cui si desidera inviare l'elenco interessi e riprovare.",
	WISHLIST_INVALIDEMAILFORMAT : "Formato indirizzo e-mail non valido.",
	WISHLIST_EMPTY : "Creare un elenco interessi prima di inviare un'e-mail.",
	WISHLIST_INVALIDSENDERNAME : "Il campo Nome contiene caratteri non validi. Immettere il proprio nome nel campo Nome e riprovare.",
		
	// Inventory Status Messages
	INV_STATUS_RETRIEVAL_ERROR : "Si è verificato un errore durante il richiamo dello stato dell'inventario. Riprovare successivamente. Se il problema persiste, contattare il responsabile del sito.",
	INV_ATTR_UNAVAILABLE: "${0} - non disponibile",
	
	// Product Tab
	CONFIGURATION: "Configurazione",
	
	// My Account Page Messages
	QC_UPDATE_SUCCESS : "Profilo verifica rapida aggiornato correttamente.",
	MYACCOUNT_ACTION_PERFORMED : "Azione eseguita correttamente.",
	
	// This line defines the Quantity {0} and the component name {1} of a dynamic kit.  If a kit has a component with quantity 3, it will show as: 3 x Harddrive.
	// To show the string "Harddrive : 3", simply change this line to:  {1} : {0}.
	ITEM_COMPONENT_QUANTITY_NAME: "${0} x ${1}",
	
	//Sterling Order Line Status
	ORDER_LINE_STATUS_S : "Ordine spedito",
	ORDER_LINE_STATUS_G : "Elaborazione ordine",
	ORDER_LINE_STATUS_K : "Restituzione associata",
	ORDER_LINE_STATUS_V : "Parzialmente spedito",
	ORDER_LINE_STATUS_X : "Ordine annullato",
	
	//Facet Error Message
	ERROR_FACET_PRICE_INVALID : "Il prezzo immesso non è in formato valido.",
	
	//User registration Error messages
	ERROR_RecipientTooLong : "Il valore immesso nel campo Destinatario è troppo lungo.",
	ERROR_FirstNameTooLong : "Il valore immesso nel campo Nome è troppo lungo.",
	ERROR_LastNameTooLong : "Il valore immesso nel campo Cognome è troppo lungo.",
	ERROR_MiddleNameTooLong : "Il valore immesso nel campo Secondo nome è troppo lungo.",
	ERROR_AddressTooLong : "Il valore immesso nel campo Indirizzo è troppo lungo.",
	ERROR_CityTooLong : "Il valore immesso nel campo Città è troppo lungo.",
	ERROR_StateTooLong : "Il valore immesso nel campo Stato/Provincia è troppo lungo.",
	ERROR_CountryTooLong : "Il valore immesso nel campo Paese/Regione è troppo lungo.",
	ERROR_ZipCodeTooLong : "Il valore immesso nel campo CAP/Codice postale è troppo lungo.",
	ERROR_EmailTooLong : "Il valore immesso nel campo E-mail è troppo lungo.",
	ERROR_PhoneTooLong : "Il valore immesso nel campo Numero di telefono è troppo lungo.",
	ERROR_FaxTooLong : "Il valore immesso nel campo Fax è troppo lungo.",
	ERROR_RecipientEmpty : "Il campo Destinatario non può essere vuoto.",
	ERROR_LastNameEmpty : "Il campo Cognome non può essere vuoto.",
	ERROR_MiddleNameEmpty : "Il campo Secondo nome non può essere vuoto.",
	ERROR_AddressEmpty : "Il campo Indirizzo non può essere vuoto.",
	ERROR_CityEmpty : "Il campo Città non può essere vuoto.",
	ERROR_StateEmpty : "Il campo Stato/Provincia non può essere vuoto.",
	ERROR_CountryEmpty : "Il campo Paese/Regione non può essere vuoto.",
	ERROR_ZipCodeEmpty : "Il campo CAP/Codice postale non può essere vuoto.",
	ERROR_EmailEmpty : "Il campo Indirizzo e-mail non può essere vuoto.",
	ERROR_FirstNameEmpty : "Il campo Nome non può essere vuoto.",
	ERROR_PhonenumberEmpty : "Il campo Numero di telefono non può essere vuoto.",
	ERROR_PhoneEmpty : "Il campo Numero di telefono non può essere vuoto.",
	ERROR_FaxEmpty : "Il campo Fax non può essere vuoto.",
	ERROR_INVALIDEMAILFORMAT : "L'e-mail immesso non è in formato valido.",
	ERROR_INVALIDPHONE : "Il numero di telefono immesso non è in formato valido.",
	PWDREENTER_DO_NOT_MATCH : "Le password immesse non corrispondono.",
	ERROR_SpecifyYear : "Non è stato specificato un anno. Non specificare nessun valore di compleanno se si preferisce mantenere queste informazioni come riservate.",
	ERROR_SpecifyMonth : "Non è stato specificato un mese. Non specificare nessun valore di compleanno se si preferisce mantenere queste informazioni come riservate.",
	ERROR_SpecifyDate : "Non è stata specificata una data. Non specificare nessun valore di compleanno se si preferisce mantenere queste informazioni come riservate.",
	ERROR_InvalidDate1 : "Questa data non è valida per il mese selezionato.",
	ERROR_InvalidDate2 : "Il compleanno fornito non è valido.",
	ERROR_DEFAULTADDRESS : "Impossibile rimuovere l'indirizzo. La rubrica deve contenere almeno un indirizzo.",
	INVALID_EXPIRY_DATE : "Data di scadenza non valida.",
	ERROR_LogonIdEmpty : "Il campo ID di collegamento non può essere vuoto.",
	ERROR_PasswordEmpty : "Il campo password non può essere vuoto.",
	ERROR_VerifyPasswordEmpty : "Il campo di verifica della password non può essere vuoto.",
	AGE_WARNING_ALERT : "Se hai meno di 13 anni leggi le notizie sulla riservatezza prima di procedere oltre.",
	ERROR_DefaultOrgRegistration : "'Organizzazione predefinita' non è un nome di organizzazione valido. Scegliere un altro nome.",
	
	//Org registration error messages
	ERROR_OrgNameEmpty : "Il campo Nome organizzazione non può essere vuoto.",
	ERROR_OrgNameTooLong : "Il valore immesso nel campo Nome organizzazione è troppo lungo.",
	Logon_WaitingForApproval : "La richiesta di registrazione è stata ricevuta.  L'account è in attesa di approvazione. Fino a che l'account non è stato approvato, non è possibile collegarsi.",
	Logon_RegistrationRequired : "Gli utenti non registrati possono solo sfogliare il catalogo. Eseguire la registrazione oppure l'accesso per un accesso completo al negozio.",
	ERROR_OrganizationDescription:"Il valore immesso nel campo Descrizione organizzazione è troppo lungo.",
	ERROR_BusinessCategoryTooLong:"Il valore immesso nel campo Categoria business è troppo lungo.",
	ERROR_SelectOrganizationTypeEmpty:"Selezionare un tipo di organizzazione.",
	ERROR_ParentOrgNameEmpty:"Cercare e selezionare un'organizzazione principale valida sotto la quale si desidera creare la nuova organizzazione.",
	
	//On-Behalf-Of/Call Center integration
	ERROR_ADD2CART_BROWSE_ONLY : "Impossibile aggiungere il prodotto al carrello degli acquisti in modalità di sola visualizzazione.",
	
	// Add To Requisition List Messages	
	ERROR_SL_RESOLVED_SKU : "La selezione è incompleta. Selezionare un valore per ciascun attributo.",
	ERROR_SL_EMPTY_SL_NAME : "Fornire un nome per il nuovo elenco richieste.",
	ERROR_SL_LIST_NOT_CHOSEN : "Selezionare un elenco richieste.",
	ERROR_GLOBALLOGIN_BUYER_SEARCH : "Si è verificato un errore durante l'esecuzione della ricerca" ,
        GLOBAL_LOGIN_NO_USERS_FOUND : "Nessun utente trovato",
	// Organization create / update
	ORG_ROLES_UPDATED : "Ruoli organizzazione aggiornati correttamente.",
	ORG_ROLES_UPDATE_NO_CHNAGE : "Nessun aggiornamento per i ruoli dell'organizzazione.",
	APPROVAL_MEMBER_GROUP_UPDATED : "Gruppi membri di approvazione aggiornati correttamente.",
	ORG_ENTITY_CREATED_UPDATING_ROLES : "Organizzazione creata correttamente. Aggiornamento dei ruoli dell'organizzazione.",
	ORG_SUMMARY_UPDATED : "Dettagli dell'organizzazione aggiornati correttamente."
})

