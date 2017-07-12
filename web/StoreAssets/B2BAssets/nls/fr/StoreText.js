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
	HISTORY:"Historique",
	//AutoSuggestion Headings
	ARTICLES: "Articles",
	BRAND: "Marque",
	CATEGORY: "Catégorie",
	//Product Description
	ERR_RESOLVING_SKU : "Votre sélection est incomplète ou elle n'est pas en stock. Veillez à indiquer une valeur pour chaque attribut ou envisagez une autre combinaison de valeurs.",
	QUANTITY_INPUT_ERROR : "La valeur indiquée dans la zone Quantité est incorrecte. Vérifiez que la valeur est un entier positif et essayez à nouveau.",
	QUANTITY_INPUTS_ERROR : "Les valeurs indiquées dans les zones Quantité sont vides ou ne sont pas valides. Vérifiez que les valeurs correspondent à des entiers positifs et faites une nouvelle tentative.",
	WISHLIST_ADDED : "L'article a été ajouté à votre liste de présélection.",
	ERROR_CONTRACT_EXPIRED_GOTO_ORDER : "Les articles sélectionnés ne peuvent pas être ajoutés à la commande en cours car les contrats de certains articles de commande ne sont plus disponibles. Sélectionnez les contrats disponibles à appliquer à vos articles de commande.",
	MYACCOUNT_SAVEDORDERLIST_EMPTY_ADD_TO_REQ_FAIL : "Cette commande enregistrée ne peut pas être copiée dans la liste préconfigurée car elle est vide.  Ajoutez un ou plusieurs articles à la commande enregistrée.",
	SHOPCART_ADDED : "L'article a été ajouté à la commande en cours.",
	PRICE : "Prix :",
	SKU : "SKU :",
	PQ_PURCHASE : "Achats :",
	PQ_PRICE_X : "${0} -",
	PQ_PRICE_X_TO_Y : "${0} à ${1} -",
	PQ_PRICE_X_OR_MORE : "${0} ou plus -",
	
	COMPARE_ITEM_EXISTS : "Le produit que vous tentez d'ajouter à la zone de comparaison existe déjà.",
	COMPATE_MAX_ITEMS : "Vous pouvez comparer jusqu'à 4 produits.",
	COMPAREZONE_ADDED : "L'article a été ajouté à la zone de comparaison.",
	
	GENERICERR_MAINTEXT : "Un incident s'est produit sur le magasin lors du traitement de la dernière requête. Faites une nouvelle tentative. Si l'incident persiste, ${0} pour une assistance.",
	GENERICERR_CONTACT_US : "nous contacter",
	
	MSC_ITEMS : "${0} article(s)",
	
	// Shopping List Messages
	DEFAULT_WISH_LIST_NAME : "Liste de présélection",
	LIST_CREATED : "La création de la liste de présélection a abouti.",
	LIST_EDITED : "La modification du nom de la liste de présélection a abouti.",
	LIST_DELETED : "La suppression de la liste de présélection a abouti.",
	ITEM_ADDED : "L'article a été ajouté à votre liste de présélection.",
	ITEM_REMOVED : "L'article a été supprimé de votre liste de présélection.",
	ERR_NAME_EMPTY : "Entrez un nom pour votre liste de présélection.",
	ERR_NAME_TOOLONG : "Nom de liste de présélection trop long.",
	ERR_NAME_SHOPPING_LIST : "Le nom Liste de présélection est réservé à la liste de présélection par défaut. Choisissez un autre nom.",
	ERR_NAME_DUPLICATE : "Une liste de présélection avec le nom que vous avez choisi existe déjà. Choisissez un autre nom.",
	INVALID_NAME_SHOPPING_LIST : "Le nom de la liste de présélection contient des caractères non valides.  Entrez un nom alphanumérique.",
	WISHLIST_EMAIL_SENT : "Votre courrier électronique a été envoyé.",
	WISHLIST_MISSINGNAME : "La zone Nom doit être renseignée. Indiquez votre nom dans la zone Nom puis faites une nouvelle tentative.",
	WISHLIST_MISSINGEMAIL : "La zone d'adresse électronique doit être renseignée. Indiquez l'adresse électronique de la personne à laquelle est destinée votre liste de présélection puis faites une nouvelle tentative.",
	WISHLIST_INVALIDEMAILFORMAT : "Format d'adresse électronique incorrect.",
	WISHLIST_EMPTY : "Créez une liste de présélection avant d'envoyer un courrier électronique.",
	WISHLIST_INVALIDSENDERNAME : "La zone Nom contient des caractères non valides. Indiquez votre nom dans la zone Nom puis faites une nouvelle tentative.",
		
	// Inventory Status Messages
	INV_STATUS_RETRIEVAL_ERROR : "Une erreur s'est produite lors de l'extraction du statut du stock. Réessayez ultérieurement. Si l'incident se produit de nouveau, contactez votre administrateur de site.",
	INV_ATTR_UNAVAILABLE: "${0} - indisponible",
	
	// Product Tab
	CONFIGURATION: "Configuration",
	
	// My Account Page Messages
	QC_UPDATE_SUCCESS : "Le profil de paiement rapide a été mis à jour !",
	MYACCOUNT_ACTION_PERFORMED : "L'action a abouti.",
	
	// This line defines the Quantity {0} and the component name {1} of a dynamic kit.  If a kit has a component with quantity 3, it will show as: 3 x Harddrive.
	// To show the string "Harddrive : 3", simply change this line to:  {1} : {0}.
	ITEM_COMPONENT_QUANTITY_NAME: "${0} x ${1}",
	
	//Sterling OrderLine Status
	ORDER_LINE_STATUS_S : "Commande envoyée",
	ORDER_LINE_STATUS_G : "Traitement de la commande",
	ORDER_LINE_STATUS_K : "Retour associé",
	ORDER_LINE_STATUS_V : "Partiellement expédié",
	ORDER_LINE_STATUS_X : "Commande annulée",
	
	//Facet Error Message
	ERROR_FACET_PRICE_INVALID : "Le format du prix entré n'est pas valide.",
	
	//User registration Error messages
	ERROR_RecipientTooLong : "La valeur entrée dans la zone Destinataire est trop longue.",
	ERROR_FirstNameTooLong : "La valeur entrée dans la zone Prénom est trop longue.",
	ERROR_LastNameTooLong : "La valeur entrée dans la zone Nom est trop longue.",
	ERROR_MiddleNameTooLong : "La valeur entrée dans la zone Deuxième prénom est trop longue.",
	ERROR_AddressTooLong : "La valeur entrée dans la zone Rue est trop longue.",
	ERROR_CityTooLong : "La valeur entrée dans la zone Ville est trop longue.",
	ERROR_StateTooLong : "La valeur entrée dans la zone Département/Province est trop longue.",
	ERROR_CountryTooLong : "La valeur entrée dans la zone Pays est trop longue.",
	ERROR_ZipCodeTooLong : "La valeur entrée dans la zone Code postal est trop longue.",
	ERROR_EmailTooLong : "La valeur entrée dans la zone Adresse électronique est trop longue.",
	ERROR_PhoneTooLong : "La valeur entrée dans la zone Numéro de téléphone est trop longue.",
	ERROR_FaxTooLong : "La valeur entrée dans la zone Fax est trop longue.",
	ERROR_RecipientEmpty : "La zone Destinataire ne peut pas être vide.",
	ERROR_LastNameEmpty : "La zone Nom ne peut pas être vide.",
	ERROR_MiddleNameEmpty : "La zone Deuxième prénom ne peut pas être vide.",
	ERROR_AddressEmpty : "La zone Rue ne peut pas être vide.",
	ERROR_CityEmpty : "La zone Ville ne peut pas être vide.",
	ERROR_StateEmpty : "La zone Département/Province ne peut pas être vide.",
	ERROR_CountryEmpty : "La zone Pays ne peut pas être vide.",
	ERROR_ZipCodeEmpty : "La zone Code postal ne peut pas être vide.",
	ERROR_EmailEmpty : "La zone Adresse électronique ne peut pas être vide.",
	ERROR_FirstNameEmpty : "La zone Prénom ne peut pas être vide.",
	ERROR_PhonenumberEmpty : "La zone Numéro de téléphone ne peut pas être vide.",
	ERROR_PhoneEmpty : "La zone Numéro de téléphone ne peut pas être vide.",
	ERROR_FaxEmpty : "La zone Fax ne peut pas être vide.",
	ERROR_INVALIDEMAILFORMAT : "Le format de l'adresse électronique indiquée est incorrect.",
	ERROR_INVALIDPHONE : "Le format du numéro de téléphone indiqué est incorrect.",
	PWDREENTER_DO_NOT_MATCH : "Les mots de passe entrés ne concordent pas.",
	ERROR_SpecifyYear : "Vous n'avez pas indiqué d'année. N'indiquez pas de valeur d'anniversaire si vous préférez ne pas divulguer ces informations.",
	ERROR_SpecifyMonth : "Vous n'avez pas indiqué de mois. N'indiquez pas de valeur d'anniversaire si vous préférez ne pas divulguer ces informations.",
	ERROR_SpecifyDate : "Vous n'avez pas indiqué de date. N'indiquez pas de valeur d'anniversaire si vous préférez ne pas divulguer ces informations.",
	ERROR_InvalidDate1 : "Cette date est incorrecte pour le mois sélectionné.",
	ERROR_InvalidDate2 : "La date d'anniversaire indiquée est incorrecte.",
	ERROR_DEFAULTADDRESS : "Votre adresse ne peut pas être supprimée. Votre carnet d'adresses doit contenir au moins une adresse.",
	INVALID_EXPIRY_DATE : "Date d'expiration incorrecte.",
	ERROR_LogonIdEmpty : "La zone ID de connexion ne peut pas être vide.",
	ERROR_PasswordEmpty : "La zone Mot de passe ne peut pas être vide.",
	ERROR_VerifyPasswordEmpty : "La zone de vérification du mot de passe ne peut pas être vide.",
	AGE_WARNING_ALERT : "Vous avez moins de 13 ans, veuillez lire les règles de confidentialité relatives aux enfants avant de poursuivre.",
	ERROR_DefaultOrgRegistration : "'Organisation par défaut' n'est pas un nom d'organisation valide. Choisissez un autre nom.",
	
	//Org registration error messages
	ERROR_OrgNameEmpty : "La zone du nom de l'organisation ne peut pas être vide.",
	ERROR_OrgNameTooLong : "La valeur entrée dans la zone Nom de l'organisation est trop longue.",
	Logon_WaitingForApproval : "Votre demande d'enregistrement a été reçue.  Votre compte est en attente d'approbation. Tant que votre compte n'est pas approuvé, vous ne pouvez pas vous connecter.",
	Logon_RegistrationRequired : "Les visiteurs peuvent uniquement consulter le catalogue. Veuillez vous enregistrer ou vous connecter pour un accès complet au magasin.",
	ERROR_OrganizationDescription:"La valeur entrée dans la zone Description de l'organisation est trop longue.",
	ERROR_BusinessCategoryTooLong:"La valeur entrée dans la zone Secteur d'activité est trop longue.",
	ERROR_SelectOrganizationTypeEmpty:"Sélectionnez le type d'organisation.",
	ERROR_ParentOrgNameEmpty:"Recherchez et sélectionnez une organisation parent valide sous laquelle créer une nouvelle organisation.",

	//On-Behalf-Of/Call Center integration
	ERROR_ADD2CART_BROWSE_ONLY : "Impossible d'ajouter un produit à la commande en cours en mode de navigation seule.",
	
	// Add To Requisition List Messages	
	ERROR_SL_RESOLVED_SKU : "Votre sélection est incomplète. Sélectionnez une valeur pour chaque attribut.",
	ERROR_SL_EMPTY_SL_NAME : "Indiquez un nom pour votre nouvelle liste préconfigurée.",
	ERROR_SL_LIST_NOT_CHOSEN : "Sélectionnez une liste préconfigurée.",
	ERROR_GLOBALLOGIN_BUYER_SEARCH : "Une erreur s'est produite lors de la réalisation de la recherche" ,
	GLOBAL_LOGIN_NO_USERS_FOUND : "Aucun utilisateur n'a été trouvé",
	// Organization create / update
	ORG_ROLES_UPDATED : "La mise à jour des rôles de l'organisation a abouti.",
	ORG_ROLES_UPDATE_NO_CHNAGE : "Aucune mise à jour n'a été effectuée pour les rôles de l'organisation.",
	APPROVAL_MEMBER_GROUP_UPDATED : "La mise à jour des groupes de membre d'approbation a abouti.",
	ORG_ENTITY_CREATED_UPDATING_ROLES : "La création de l'organisation a abouti. Mise à jour des rôles de l'organisation.",
	ORG_SUMMARY_UPDATED : "La mise à jour des informations sur l'organisation a abouti."
})

