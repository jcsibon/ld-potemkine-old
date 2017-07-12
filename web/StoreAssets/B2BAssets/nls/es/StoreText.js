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
	HISTORY:"Historial",
	//AutoSuggestion Headings
	ARTICLES: "Artículos",
	BRAND: "Marca",
	CATEGORY: "Categoría",
	//Product Description
	ERR_RESOLVING_SKU : "Su selección está incompleta o no está en stock. Asegúrese de especificar un valor para cada atributo o considere una combinación de valores diferente.",
	QUANTITY_INPUT_ERROR : "El valor del campo Cantidad no es válido. Asegúrese de que el valor sea un entero positivo e inténtelo de nuevo.",
	QUANTITY_INPUTS_ERROR : "Los valores de los campos Cantidad no son válidos o están vacíos. Asegúrese de que los valores sean enteros positivos e inténtelo de nuevo.",
	WISHLIST_ADDED : "El artículo se ha añadido satisfactoriamente a la Lista de deseos.",
	ERROR_CONTRACT_EXPIRED_GOTO_ORDER : "Los artículos seleccionados no se pueden añadir al pedido actual porque los contratos para algunos de los artículos del pedido ya no están disponibles. Seleccione los contratos disponibles que desea aplicar a los artículos del pedido.",
	MYACCOUNT_SAVEDORDERLIST_EMPTY_ADD_TO_REQ_FAIL : "Este pedido guardado no se puede copiar a la lista de solicitudes porque está vacío.  Por favor, añada uno o más artículos al pedido guardado.",
	SHOPCART_ADDED : "El artículo se ha añadido satisfactoriamente al pedido actual.",
	PRICE : "Precio:",
	SKU : "Código de artículo:",
	PQ_PURCHASE : "Compra:",
	PQ_PRICE_X : "${0} -",
	PQ_PRICE_X_TO_Y : "${0} a ${1} -",
	PQ_PRICE_X_OR_MORE : "${0} o más -",
	
	COMPARE_ITEM_EXISTS : "El producto que intenta añadir a la zona de comparación ya existe.",
	COMPATE_MAX_ITEMS : "Sólo se pueden comparar 4 productos como máximo.",
	COMPAREZONE_ADDED : "El artículo se ha añadido satisfactoriamente a la zona de comparación.",
	
	GENERICERR_MAINTEXT : "La tienda ha tenido un problema al procesar la última petición. Inténtelo de nuevo. Si el problema persiste, ${0} y solicite ayuda.",
	GENERICERR_CONTACT_US : "contáctenos",
	
	MSC_ITEMS : "${0} artículo(s)",
	
	// Shopping List Messages
	DEFAULT_WISH_LIST_NAME : "Lista de deseos",
	LIST_CREATED : "La lista de deseos se ha creado satisfactoriamente.",
	LIST_EDITED : "El nombre de la lista de deseos se ha cambiado satisfactoriamente.",
	LIST_DELETED : "La lista de deseos se ha suprimido satisfactoriamente.",
	ITEM_ADDED : "El artículo se ha añadido a la lista de deseos.",
	ITEM_REMOVED : "El artículo se ha eliminado de la lista de deseos.",
	ERR_NAME_EMPTY : "Escriba un nombre para su lista de deseos.",
	ERR_NAME_TOOLONG : "El nombre de la lista de deseos es demasiado largo.",
	ERR_NAME_SHOPPING_LIST : "Lista de deseos es un nombre reservado para la lista de deseos predeterminada. Elija un nombre distinto.",
	ERR_NAME_DUPLICATE : "Ya existe una lista de deseos con el nombre que ha elegido. Elija un nombre distinto.",
	INVALID_NAME_SHOPPING_LIST : "El nombre de la lista de deseos contiene caracteres no válidos.  Especifique un nombre alfanumérico.",
	WISHLIST_EMAIL_SENT : "Su correo electrónico se ha enviado.",
	WISHLIST_MISSINGNAME : "El campo Nombre no puede estar en blanco. Escriba su nombre en el campo Nombre e inténtelo de nuevo.",
	WISHLIST_MISSINGEMAIL : "El campo de dirección de correo electrónico no puede estar en blanco. Escriba la dirección de correo electrónico de la persona a la que va a enviar su lista de deseos e inténtelo de nuevo.",
	WISHLIST_INVALIDEMAILFORMAT : "Formato no válido de dirección de correo electrónico.",
	WISHLIST_EMPTY : "Cree una lista de deseos antes de enviar un correo electrónico.",
	WISHLIST_INVALIDSENDERNAME : "El campo Nombre contiene caracteres no válidos. Escriba su nombre en el campo Nombre e inténtelo de nuevo.",
		
	// Inventory Status Messages
	INV_STATUS_RETRIEVAL_ERROR : "Se ha producido un error al recuperar el estado del inventario. Vuelva a intentarlo más adelante. Si el problema persiste, póngase en contacto con el administrador del sitio.",
	INV_ATTR_UNAVAILABLE: "${0} - no disponible",
	
	// Product Tab
	CONFIGURATION: "Configuración",
	
	// My Account Page Messages
	QC_UPDATE_SUCCESS : "El perfil de caja rápida se ha actualizado satisfactoriamente",
	MYACCOUNT_ACTION_PERFORMED : "Acción realizada con éxito.",
	
	// This line defines the Quantity {0} and the component name {1} of a dynamic kit.  If a kit has a component with quantity 3, it will show as: 3 x Harddrive.
	// To show the string "Harddrive : 3", simply change this line to:  {1} : {0}.
	ITEM_COMPONENT_QUANTITY_NAME: "${0} x ${1}",
	
	//Sterling OrderLine Status
	ORDER_LINE_STATUS_S : "Pedido enviado",
	ORDER_LINE_STATUS_G : "Pedido en proceso",
	ORDER_LINE_STATUS_K : "Devolución asociada",
	ORDER_LINE_STATUS_V : "Enviado parcialmente",
	ORDER_LINE_STATUS_X : "Pedido cancelado",
	
	//Facet Error Message
	ERROR_FACET_PRICE_INVALID : "El precio especificado no está en un formato válido.",
	
	//User registration Error messages
	ERROR_RecipientTooLong : "El valor entrado en el campo destinatario es demasiado largo.",
	ERROR_FirstNameTooLong : "El valor entrado en el campo de nombre es demasiado largo.",
	ERROR_LastNameTooLong : "El valor entrado en el campo de apellido es demasiado largo.",
	ERROR_MiddleNameTooLong : "El valor entrado en el campo de inicial o segundo nombre es demasiado largo.",
	ERROR_AddressTooLong : "El valor entrado en el campo de dirección es demasiado largo.",
	ERROR_CityTooLong : "El valor entrado en el campo de ciudad es demasiado largo.",
	ERROR_StateTooLong : "El valor entrado en el campo de estado/provincia es demasiado largo.",
	ERROR_CountryTooLong : "El valor entrado en el campo de país/región es demasiado largo.",
	ERROR_ZipCodeTooLong : "El valor entrado en el campo de código postal es demasiado largo.",
	ERROR_EmailTooLong : "El valor entrado en el campo de correo electrónico es demasiado largo.",
	ERROR_PhoneTooLong : "El valor entrado en el campo de número de teléfono es demasiado largo.",
	ERROR_FaxTooLong : "El valor entrado en el campo de fax es demasiado largo.",
	ERROR_RecipientEmpty : "El campo destinatario no puede estar vacío.",
	ERROR_LastNameEmpty : "El campo de apellido no puede estar vacío.",
	ERROR_MiddleNameEmpty : "El campo de inicial o segundo nombre no puede estar vacío.",
	ERROR_AddressEmpty : "El campo de dirección no puede estar vacío.",
	ERROR_CityEmpty : "El campo de ciudad no puede estar vacío.",
	ERROR_StateEmpty : "El campo de estado/provincia no puede estar vacío.",
	ERROR_CountryEmpty : "El campo de país/región no puede estar vacío.",
	ERROR_ZipCodeEmpty : "El campo de código postal no puede estar vacío.",
	ERROR_EmailEmpty : "El campo de dirección de correo electrónico no puede estar vacío.",
	ERROR_FirstNameEmpty : "El campo de nombre no puede estar vacío.",
	ERROR_PhonenumberEmpty : "El campo de número de teléfono no puede estar vacío.",
	ERROR_PhoneEmpty : "El campo de número de teléfono no puede estar vacío.",
	ERROR_FaxEmpty : "El campo de fax no puede estar vacío.",
	ERROR_INVALIDEMAILFORMAT : "El correo electrónico especificado no está en un formato válido.",
	ERROR_INVALIDPHONE : "El número de teléfono especificado no está en un formato válido.",
	PWDREENTER_DO_NOT_MATCH : "Las contraseñas especificadas no coinciden.",
	ERROR_SpecifyYear : "No se ha especificado un año. No especifique valores de cumpleaños si prefiere mantener confidencial esta información.",
	ERROR_SpecifyMonth : "No se ha especificado un mes. No especifique valores de cumpleaños si prefiere mantener confidencial esta información.",
	ERROR_SpecifyDate : "No se ha especificado una fecha. No especifique valores de cumpleaños si prefiere mantener confidencial esta información.",
	ERROR_InvalidDate1 : "Esta fecha no es válida para el mes seleccionado.",
	ERROR_InvalidDate2 : "El cumpleaños especificado no es válido.",
	ERROR_DEFAULTADDRESS : "La dirección no se puede suprimir. El listín debe contener al menos una dirección.",
	INVALID_EXPIRY_DATE : "Fecha de caducidad no válida.",
	ERROR_LogonIdEmpty : "El campo de Id de conexión no puede estar vacío.",
	ERROR_PasswordEmpty : "El campo de contraseña no puede estar vacío.",
	ERROR_VerifyPasswordEmpty : "El campo de verificación de contraseña no puede estar vacío.",
	AGE_WARNING_ALERT : "Tienes menos de 13 años; lee nuestra política de privacidad infantil antes de continuar.",
	ERROR_DefaultOrgRegistration : "'Organización predeterminada' no es un nombre de organización válido. Elija otro nombre.",
	
	//Org registration error messages
	ERROR_OrgNameEmpty : "El campo de nombre de organización no puede estar vacío.",
	ERROR_OrgNameTooLong : "El valor entrado en el campo de nombre de organización es demasiado largo.",
	Logon_WaitingForApproval : "Su solicitud de registro se ha recibido.  Su cuenta está en espera de aprobación. No se podrá conectar hasta que la cuenta no se haya aprobado.",
	Logon_RegistrationRequired : "A los usuarios invitados sólo se les permite examinar el catálogo. Regístrese o conéctese si desea obtener acceso completo a la tienda.",
	ERROR_OrganizationDescription:"El valor entrado en el campo de descripción de organización es demasiado largo.",
	ERROR_BusinessCategoryTooLong:"El valor entrado en el campo de categoría empresarial es demasiado largo.",
	ERROR_SelectOrganizationTypeEmpty:"Seleccione un tipo de organización.",
	ERROR_ParentOrgNameEmpty:"Busque y seleccione una organización padre válida en la que desee crear una nueva organización.",

	//On-Behalf-Of/Call Center integration
	ERROR_ADD2CART_BROWSE_ONLY : "No se puede añadir un producto al pedido actual en modalidad de sólo navegación.",
	
	// Add To Requisition List Messages	
	ERROR_SL_RESOLVED_SKU : "Su selección es incompleta. Para cada atributo, seleccione un valor.",
	ERROR_SL_EMPTY_SL_NAME : "Especifique un nombre para la nueva lista de solicitudes.",
	ERROR_SL_LIST_NOT_CHOSEN : "Elija una lista de solicitudes.",
	ERROR_GLOBALLOGIN_BUYER_SEARCH : "Se ha producido un error a realizar la búsqueda" ,
	GLOBAL_LOGIN_NO_USERS_FOUND : "No se han encontrado usuarios",
	// Organization create / update
	ORG_ROLES_UPDATED : "Los roles de organización se han actualizado satisfactoriamente.",
	ORG_ROLES_UPDATE_NO_CHNAGE : "No se ha realizado ninguna actualización para los roles de la organización.",
	APPROVAL_MEMBER_GROUP_UPDATED : "Los grupos de miembros de aprobación se han actualizado satisfactoriamente.",
	ORG_ENTITY_CREATED_UPDATING_ROLES : "La organización se ha creado satisfactoriamente. Se están actualizando los roles de la organización.",
	ORG_SUMMARY_UPDATED : "Los detalles de la organización se han actualizado satisfactoriamente."
})

