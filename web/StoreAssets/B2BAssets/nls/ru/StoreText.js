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
	HISTORY:"Хронология",
	//AutoSuggestion Headings
	ARTICLES: "Товары",
	BRAND: "Торговая марка",
	CATEGORY: "Категория",
	//Product Description
	ERR_RESOLVING_SKU : "Выбранный товар определен неполностью или отсутствует на складе. Укажите значение для каждого атрибута или другое сочетание значений.",
	QUANTITY_INPUT_ERROR : "Недопустимое значение в поле Количество. Укажите положительное целое число и повторите попытку.",
	QUANTITY_INPUTS_ERROR : "Поля Количество содержат недопустимые значения или пусты. Введите положительные целые числа и повторите операцию.",
	WISHLIST_ADDED : "Товар успешно добавлен в список предпочтений",
	ERROR_CONTRACT_EXPIRED_GOTO_ORDER : "Выбранные элементы невозможно добавить в заказ, так как для некоторых элементов заказа контракты более недоступны. Выберите доступные контракты для элементов заказа.",
	MYACCOUNT_SAVEDORDERLIST_EMPTY_ADD_TO_REQ_FAIL : "Невозможно скопировать этот сохраненный заказ в список покупок, так как он пуст.  Добавьте один или несколько элементов в сохраненный заказ.",
	SHOPCART_ADDED : "Позиция успешно добавлена в текущий заказ.",
	PRICE : "Цена:",
	SKU : "Артикул:",
	PQ_PURCHASE : "Заказ:",
	PQ_PRICE_X : "${0} -",
	PQ_PRICE_X_TO_Y : "от ${0} до ${1} -",
	PQ_PRICE_X_OR_MORE : "от ${0} -",
	
	COMPARE_ITEM_EXISTS : "Товар, выбранный для добавления в область сравнения, уже добавлен.",
	COMPATE_MAX_ITEMS : "Одновременно можно сравнивать не более четырех товаров.",
	COMPAREZONE_ADDED : "Товар успешно добавлено в область сравнения.",
	
	GENERICERR_MAINTEXT : "При обработке последнего запроса в магазине возникла неполадка. Повторите попытку. Если неполадка возникнет снова, ${0} для получения помощи.",
	GENERICERR_CONTACT_US : "связаться с нами",
	
	MSC_ITEMS : "${0} товаров",
	
	// Shopping List Messages
	DEFAULT_WISH_LIST_NAME : "Список предпочтений",
	LIST_CREATED : "Список предпочтений успешно создан.",
	LIST_EDITED : "Имя списка предпочтений успешно изменено.",
	LIST_DELETED : "Список предпочтений успешно удален.",
	ITEM_ADDED : "Товар добавлен в список предпочтений.",
	ITEM_REMOVED : "Товар удален из списка предпочтений.",
	ERR_NAME_EMPTY : "Введите имя списка предпочтений.",
	ERR_NAME_TOOLONG : "Слишком длинное имя списка предпочтений.",
	ERR_NAME_SHOPPING_LIST : "Список предпочтений - это зарезервированное имя для списка предпочтений по умолчанию. Укажите другое имя.",
	ERR_NAME_DUPLICATE : "Список предпочтений с выбранным вами именем уже существует. Укажите другое имя.",
	INVALID_NAME_SHOPPING_LIST : "Имя списка предпочтений содержит недопустимые символы.  Укажите алфавитно-цифровое имя.",
	WISHLIST_EMAIL_SENT : "Электронное сообщение отправлено.",
	WISHLIST_MISSINGNAME : "Не заполнено поле Имя. Введите свое имя и повторите попытку.",
	WISHLIST_MISSINGEMAIL : "Не заполнено поле Адрес электронной почты. Введите адрес электронной почты получателя списка предпочтений и повторите попытку.",
	WISHLIST_INVALIDEMAILFORMAT : "Недопустимый формат адреса электронной почты.",
	WISHLIST_EMPTY : "Создайте список предпочтений перед отправкой электронного сообщения.",
	WISHLIST_INVALIDSENDERNAME : "Поле Имя содержит недопустимые символы. Введите свое имя и повторите попытку.",
		
	// Inventory Status Messages
	INV_STATUS_RETRIEVAL_ERROR : "Ошибка при получении состояния запасов. Повторите попытку позже. Если ошибка возникнет снова, обратитесь к администратору сайта.",
	INV_ATTR_UNAVAILABLE: "${0} - нет доступа",
	
	// Product Tab
	CONFIGURATION: "Конфигурация",
	
	// My Account Page Messages
	QC_UPDATE_SUCCESS : "Профайл быстрого оформления заказа успешно обновлен.",
	MYACCOUNT_ACTION_PERFORMED : "Действие успешно выполнено.",
	
	// This line defines the Quantity {0} and the component name {1} of a dynamic kit.  If a kit has a component with quantity 3, it will show as: 3 x Harddrive.
	// To show the string "Harddrive : 3", simply change this line to:  {1} : {0}.
	ITEM_COMPONENT_QUANTITY_NAME: "${0} x ${1}",
	
	//Sterling OrderLine Status
	ORDER_LINE_STATUS_S : "Заказ отправлен",
	ORDER_LINE_STATUS_G : "Обработка заказа",
	ORDER_LINE_STATUS_K : "Возвращен связанным",
	ORDER_LINE_STATUS_V : "Частично отправлен",
	ORDER_LINE_STATUS_X : "Заказ отменен",
	
	//Facet Error Message
	ERROR_FACET_PRICE_INVALID : "Недопустимый формат введенной цены.",
	
	//User registration Error messages
	ERROR_RecipientTooLong : "В поле Получатель указано слишком длинное значение.",
	ERROR_FirstNameTooLong : "Указано слишком длинное имя.",
	ERROR_LastNameTooLong : "В поле Фамилия указано слишком длинное значение.",
	ERROR_MiddleNameTooLong : "В поле Отчество указано слишком длинное значение.",
	ERROR_AddressTooLong : "Указан слишком длинный адрес.",
	ERROR_CityTooLong : "В поле Город указано слишком длинное значение.",
	ERROR_StateTooLong : "В поле Область/район указано слишком длинное значение.",
	ERROR_CountryTooLong : "Указано слишком длинное название страны или региона.",
	ERROR_ZipCodeTooLong : "Указан слишком длинный почтовый индекс.",
	ERROR_EmailTooLong : "В поле Адрес электронной почты указано слишком длинное значение.",
	ERROR_PhoneTooLong : "В поле Номер телефона указано слишком длинное значение.",
	ERROR_FaxTooLong : "В поле Факс указано слишком длинное значение.",
	ERROR_RecipientEmpty : "Не заполнено поле Получатель.",
	ERROR_LastNameEmpty : "Не заполнено поле Фамилия.",
	ERROR_MiddleNameEmpty : "Поле Отчество не может быть пустым.",
	ERROR_AddressEmpty : "Не заполнено поле Улица.",
	ERROR_CityEmpty : "Не заполнено поле Город.",
	ERROR_StateEmpty : "Необходимо указать область.",
	ERROR_CountryEmpty : "Не заполнено поле Страна/регион.",
	ERROR_ZipCodeEmpty : "Не заполнено поле Почтовый индекс.",
	ERROR_EmailEmpty : "Не заполнено поле Адрес электронной почты.",
	ERROR_FirstNameEmpty : "Не заполнено поле Имя.",
	ERROR_PhonenumberEmpty : "Не заполнено поле Номер телефона.",
	ERROR_PhoneEmpty : "Не заполнено поле Номер телефона.",
	ERROR_FaxEmpty : "Необходимо указать номер факса.",
	ERROR_INVALIDEMAILFORMAT : "Неправильный формат адреса электронной почты.",
	ERROR_INVALIDPHONE : "Неправильный формат номера телефона.",
	PWDREENTER_DO_NOT_MATCH : "Введенные пароли не совпадают.",
	ERROR_SpecifyYear : "Не указан год. Не заполняйте никакие поля дня рождения, если вы не хотите сообщать эту информацию.",
	ERROR_SpecifyMonth : "Не указан месяц. Не заполняйте никакие поля дня рождения, если вы не хотите сообщать эту информацию.",
	ERROR_SpecifyDate : "Не указан день. Не заполняйте никакие поля дня рождения, если вы не хотите сообщать эту информацию.",
	ERROR_InvalidDate1 : "Эта дата отсутствует в выбранном месяце.",
	ERROR_InvalidDate2 : "Указан недопустимый день рождения.",
	ERROR_DEFAULTADDRESS : "Невозможно удалить адрес. Адресная книга должна содержать хотя бы один адрес.",
	INVALID_EXPIRY_DATE : "Недопустимая дата истечения срока действия.",
	ERROR_LogonIdEmpty : "Необходимо указать ИД пользователя.",
	ERROR_PasswordEmpty : "Необходимо указать пароль.",
	ERROR_VerifyPasswordEmpty : "Необходимо указать подтверждение пароля.",
	AGE_WARNING_ALERT : "Ваш возраст младше 13 лет. Перед продолжением ознакомьтесь с нашей стратегией конфиденциальности для детей.",
	ERROR_DefaultOrgRegistration : "'Организация по умолчанию' не является допустимым именем организации. Укажите другое имя.",
	
	//Org registration error messages
	ERROR_OrgNameEmpty : "Необходимо указать имя организации.",
	ERROR_OrgNameTooLong : "В поле названия организации указано слишком длинное значение.",
	Logon_WaitingForApproval : "Ваш запрос на регистрацию принят. Ваша учетная запись еще не утверждена. Пока учетная запись не утверждена, вход в систему невозможен.",
	Logon_RegistrationRequired : "Гостевым пользователям предоставляются ограниченные возможности просмотра каталога. Для получения доступа ко всему магазину зарегистрируйтесь или войдите в систему.",
	ERROR_OrganizationDescription:"В поле описания организации указано слишком длинное значение.",
	ERROR_BusinessCategoryTooLong:"В поле бизнес-категории указано слишком длинное значение.",
	ERROR_SelectOrganizationTypeEmpty:"Выберите тип организации.",
	ERROR_ParentOrgNameEmpty:"Найдите и выберите допустимую родительскую организацию, на основе которой требуется создать новую организацию.",

	//On-Behalf-Of/Call Center integration
	ERROR_ADD2CART_BROWSE_ONLY : "Невозможно добавить товар в текущий заказ в режиме только для просмотра.",
	
	// Add To Requisition List Messages	
	ERROR_SL_RESOLVED_SKU : "Информация указана не полностью. Выберите значение для каждого атрибута.",
	ERROR_SL_EMPTY_SL_NAME : "Введите имя нового списка покупок.",
	ERROR_SL_LIST_NOT_CHOSEN : "Выберите список покупок.",
	ERROR_GLOBALLOGIN_BUYER_SEARCH : "Ошибка при выполнении поиска" ,
	GLOBAL_LOGIN_NO_USERS_FOUND : "Пользователи не найдены",
	// Organization create / update
	ORG_ROLES_UPDATED : "Роли организации успешно изменены.",
	ORG_ROLES_UPDATE_NO_CHNAGE : "Роли организации не были изменены.",
	APPROVAL_MEMBER_GROUP_UPDATED : "Группы участников утверждения успешно изменены.",
	ORG_ENTITY_CREATED_UPDATING_ROLES : "Организация успешно создана. Выполняется обновление ролей организации.",
	ORG_SUMMARY_UPDATED : "Сведения об организации успешно изменены."
})

