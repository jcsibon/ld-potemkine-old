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
	HISTORY:"히스토리",
	//AutoSuggestion Headings
	ARTICLES: "기사",
	BRAND: "브랜드",
	CATEGORY: "카테고리",
	//Product Description
	ERR_RESOLVING_SKU : "선택을 완료하지 않았거나 재고가 없습니다. 각 속성의 값을 제공하거나 값을 다르게 조합해 보십시오.",
	QUANTITY_INPUT_ERROR : "수량 필드의 값이 올바르지 않습니다. 값이 양의 정수인지 확인한 후 다시 시도하십시오.",
	QUANTITY_INPUTS_ERROR : "수량 필드의 값이 올바르지 않거나 비어 있습니다. 값이 양의 정수인지 확인한 후 다시 시도하십시오.",
	WISHLIST_ADDED : "찜 목록에 항목이 추가되었습니다.",
	ERROR_CONTRACT_EXPIRED_GOTO_ORDER : "일부 주문 항목에 대한 장기 구매 계약을 더 이상 사용할 수 없으므로 선택된 항목을 현재 주문에 추가할 수 없습니다. 이 주문 항목에 적용할 사용 가능한 장기 구매 계약을 선택하십시오.",
	MYACCOUNT_SAVEDORDERLIST_EMPTY_ADD_TO_REQ_FAIL : "이 저장된 주문은 비어 있어 요청 목록으로 복사할 수 없습니다. 저장된 주문에 하나 이상의 항목을 추가하십시오.",
	SHOPCART_ADDED : "항목이 현재 주문에 추가되었습니다.",
	PRICE : "가격:",
	SKU : "SKU:",
	PQ_PURCHASE : "구매:",
	PQ_PRICE_X : "${0} -",
	PQ_PRICE_X_TO_Y : "${0}에서 ${1}까지 -",
	PQ_PRICE_X_OR_MORE : "${0} 이상 -",
	
	COMPARE_ITEM_EXISTS : "비교 영역에 추가하려는 상품이 이미 있습니다.",
	COMPATE_MAX_ITEMS : "최대 4개의 상품만 비교할 수 있습니다.",
	COMPAREZONE_ADDED : "항목이 비교 영역으로 추가되었습니다.",
	
	GENERICERR_MAINTEXT : "마지막 요청을 처리하는 중 상점에 문제점이 발생했습니다. 다시 시도하십시오. 문제가 지속되면 ${0}에게 문의하십시오.",
	GENERICERR_CONTACT_US : "문의",
	
	MSC_ITEMS : "${0}개 항목",
	
	// Shopping List Messages
	DEFAULT_WISH_LIST_NAME : "찜 목록",
	LIST_CREATED : "찜 목록이 작성되었습니다.",
	LIST_EDITED : "찜 목록 이름이 변경되었습니다.",
	LIST_DELETED : "찜 목록이 삭제되었습니다.",
	ITEM_ADDED : "찜 목록에 항목이 추가되었습니다.",
	ITEM_REMOVED : "찜 목록에서 항목이 제거되었습니다.",
	ERR_NAME_EMPTY : "찜 목록의 이름을 입력하십시오.",
	ERR_NAME_TOOLONG : "찜 목록 이름이 너무 깁니다.",
	ERR_NAME_SHOPPING_LIST : "Wish List는 기본 찜 목록의 이름으로 예약되어 있습니다. 다른 이름을 선택하십시오. ",
	ERR_NAME_DUPLICATE : "선택한 이름의 찜 목록이 이미 있습니다. 다른 이름을 선택하십시오. ",
	INVALID_NAME_SHOPPING_LIST : "찜 목록 이름에 올바르지 않은 문자가 있습니다. 영숫자 이름을 입력하십시오.",
	WISHLIST_EMAIL_SENT : "이메일을 보냈습니다.",
	WISHLIST_MISSINGNAME : "이름은 필수 필드입니다. 이름 필드에 이름을 입력하고 다시 시도하십시오.",
	WISHLIST_MISSINGEMAIL : "이메일 주소는 필수 필드입니다. 찜 목록을 받을 사람의 이메일 주소를 입력하고 다시 시도하십시오.",
	WISHLIST_INVALIDEMAILFORMAT : "이메일 주소 형식이 올바르지 않습니다.",
	WISHLIST_EMPTY : "이메일을 보내기 전에 찜 목록을 작성하십시오.",
	WISHLIST_INVALIDSENDERNAME : "이름 필드에 올바르지 않은 문자가 있습니다. 이름 필드에 이름을 입력하고 다시 시도하십시오.",
		
	// Inventory Status Messages
	INV_STATUS_RETRIEVAL_ERROR : "재고 상태 검색 중에 오류가 발생했습니다. 나중에 다시 시도하십시오. 문제가 지속되면 사이트 운영자에게 문의하십시오.",
	INV_ATTR_UNAVAILABLE: "${0} - 사용 불가능",
	
	// Product Tab
	CONFIGURATION: "구성",
	
	// My Account Page Messages
	QC_UPDATE_SUCCESS : "바로 주문하기 프로파일이 업데이트되었습니다.",
	MYACCOUNT_ACTION_PERFORMED : "조치 수행이 완료되었습니다.",
	
	// This line defines the Quantity {0} and the component name {1} of a dynamic kit.  If a kit has a component with quantity 3, it will show as: 3 x Harddrive.
	// To show the string "Harddrive : 3", simply change this line to:  {1} : {0}.
	ITEM_COMPONENT_QUANTITY_NAME: "${0} x ${1}",
	
	//Sterling OrderLine Status
	ORDER_LINE_STATUS_S : "주문 운송됨",
	ORDER_LINE_STATUS_G : "주문 처리",
	ORDER_LINE_STATUS_K : "반품 연관됨",
	ORDER_LINE_STATUS_V : "부분적으로 운송됨",
	ORDER_LINE_STATUS_X : "주문 취소됨",
	
	//Facet Error Message
	ERROR_FACET_PRICE_INVALID : "입력된 가격의 형식이 올바르지 않습니다.",
	
	//User registration Error messages
	ERROR_RecipientTooLong : "받는 사람 필드에 입력한 값이 너무 깁니다.",
	ERROR_FirstNameTooLong : "이름 필드에 입력한 값이 너무 깁니다.",
	ERROR_LastNameTooLong : "성 필드에 입력한 값이 너무 깁니다.",
	ERROR_MiddleNameTooLong : "중간 이름 필드에 입력한 값이 너무 깁니다.",
	ERROR_AddressTooLong : "주소 필드에 입력한 값이 너무 깁니다.",
	ERROR_CityTooLong : "구/군/시 필드에 입력한 값이 너무 깁니다.",
	ERROR_StateTooLong : "시/도 필드에 입력한 값이 너무 깁니다.",
	ERROR_CountryTooLong : "국가/지역 필드에 입력한 값이 너무 깁니다.",
	ERROR_ZipCodeTooLong : "우편번호 코드 필드에 입력한 값이 너무 깁니다.",
	ERROR_EmailTooLong : "이메일 필드에 입력한 값이 너무 깁니다.",
	ERROR_PhoneTooLong : "전화번호 필드에 입력한 값이 너무 깁니다.",
	ERROR_FaxTooLong : "팩스 필드에 입력한 값이 너무 깁니다.",
	ERROR_RecipientEmpty : "받는 사람 필드를 입력해야 합니다.",
	ERROR_LastNameEmpty : "성 필드를 입력해야 합니다.",
	ERROR_MiddleNameEmpty : "중간 이름 필드를 입력해야 합니다.",
	ERROR_AddressEmpty : "주소 필드를 입력해야 합니다.",
	ERROR_CityEmpty : "구/군/시 필드를 입력해야 합니다.",
	ERROR_StateEmpty : "시/도 필드를 입력해야 합니다.",
	ERROR_CountryEmpty : "국가/지역 필드를 입력해야 합니다.",
	ERROR_ZipCodeEmpty : "우편번호 코드 필드를 입력해야 합니다.",
	ERROR_EmailEmpty : "이메일 주소 필드를 입력해야 합니다.",
	ERROR_FirstNameEmpty : "이름 필드를 입력해야 합니다.",
	ERROR_PhonenumberEmpty : "전화번호 필드를 입력해야 합니다.",
	ERROR_PhoneEmpty : "전화번호 필드를 입력해야 합니다.",
	ERROR_FaxEmpty : "팩스 필드를 입력해야 합니다.",
	ERROR_INVALIDEMAILFORMAT : "입력한 이메일의 형식이 올바르지 않습니다.",
	ERROR_INVALIDPHONE : "입력한 전화번호의 형식이 올바르지 않습니다.",
	PWDREENTER_DO_NOT_MATCH : "입력한 비밀번호가 일치하지 않습니다.",
	ERROR_SpecifyYear : "연도가 지정되지 않았습니다. 이 정보를 기밀로 유지하려면 생년월일 값을 지정하지 마십시오.",
	ERROR_SpecifyMonth : "월이 지정되지 않았습니다. 이 정보를 기밀로 유지하려면 생년월일 값을 지정하지 마십시오.",
	ERROR_SpecifyDate : "일이 지정되지 않았습니다. 이 정보를 기밀로 유지하려면 생년월일 값을 지정하지 마십시오.",
	ERROR_InvalidDate1 : "이 날짜는 선택한 월에 올바르지 않습니다.",
	ERROR_InvalidDate2 : "입력한 생년월일이 올바르지 않습니다.",
	ERROR_DEFAULTADDRESS : "주소를 제거할 수 없습니다. 주소록에는 적어도 하나의 주소가 있어야 합니다.",
	INVALID_EXPIRY_DATE : "만기일이 올바르지 않습니다.",
	ERROR_LogonIdEmpty : "로그인 ID 필드를 입력해야 합니다.",
	ERROR_PasswordEmpty : "비밀번호 필드를 입력해야 합니다.",
	ERROR_VerifyPasswordEmpty : "비밀번호 확인 필드를 입력해야 합니다.",
	AGE_WARNING_ALERT : "13세 미만의 경우, 다음 작업을 진행하기 전에 어린이 개인정보 보호정책을 읽으십시오.",
	ERROR_DefaultOrgRegistration : "'기본 조직'은 올바른 조직 이름이 아닙니다. 다른 이름을 선택하십시오.",
	
	//Org registration error messages
	ERROR_OrgNameEmpty : "조직 이름 필드를 입력해야 합니다.",
	ERROR_OrgNameTooLong : "조직 이름 필드에 입력한 값이 너무 깁니다.",
	Logon_WaitingForApproval : "등록 요청이 제출되었습니다. 계정이 승인 대기 중입니다. 계정이 승인되기 전에는 로그인할 수 없습니다.",
	Logon_RegistrationRequired : "게스트 사용자는 카탈로그만 검색할 수 있습니다. 상점의 전체 기능을 사용하려면 등록 또는 로그인하십시오.",
	ERROR_OrganizationDescription:"조직 설명 필드에 입력한 값이 너무 깁니다.",
	ERROR_BusinessCategoryTooLong:"비즈니스 카테고리 필드에 입력한 값이 너무 깁니다.",
	ERROR_SelectOrganizationTypeEmpty:"조직 유형을 선택하십시오.",
	ERROR_ParentOrgNameEmpty:"새 조직을 작성하고자 하는 올바른 상위 조직을 검색해서 선택하십시오.",

	//On-Behalf-Of/Call Center integration
	ERROR_ADD2CART_BROWSE_ONLY : "찾아보기 전용 모드에서는 제품을 현재 주문에 추가할 수 없습니다.",
	
	// Add To Requisition List Messages	
	ERROR_SL_RESOLVED_SKU : "선택이 완료되지 않았습니다. 각 속성에 대한 값을 선택하십시오.",
	ERROR_SL_EMPTY_SL_NAME : "새 요청 목록의 이름을 제공하십시오.",
	ERROR_SL_LIST_NOT_CHOSEN : "요청 목록을 선택하십시오.",
	ERROR_GLOBALLOGIN_BUYER_SEARCH : "검색을 수행하는 중에 오류가 발생했습니다. " ,
	GLOBAL_LOGIN_NO_USERS_FOUND : "사용자를 찾을 수 없음",
	// Organization create / update
	ORG_ROLES_UPDATED : "조직 역할 업데이트가 완료되었습니다.",
	ORG_ROLES_UPDATE_NO_CHNAGE : "조직 역할에 대해 작성된 업데이트가 없습니다.",
	APPROVAL_MEMBER_GROUP_UPDATED : "승인 구성원 그룹 업데이트가 완료되었습니다.",
	ORG_ENTITY_CREATED_UPDATING_ROLES : "조직 작성이 완료되었습니다. 조직 역할을 업데이트합니다.",
	ORG_SUMMARY_UPDATED : "조직 정보 업데이트가 완료되었습니다."
})

