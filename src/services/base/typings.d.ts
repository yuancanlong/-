// @ts-ignore
/* eslint-disable */

declare namespace BASE {
  type AddressItemVO = {
    children?: AddressItemVO[];
    /** 地区编号 */
    code?: string;
    /** 地区名称 */
    name?: string;
  };

  type AljkOfferLogVO = {
    /** 创建时间 */
    createTime?: string;
    /** 操作人 */
    creater?: string;
    /** 操作人编码 */
    createrId?: string;
    /** 主键编码 */
    id?: string;
    /** 1-报价 */
    logType?: number;
    /** 内部商品关系ID */
    offerSheetId?: string;
    /** 操作详情 */
    operateDesc?: string;
    /** 操作类型 */
    operateType?: string;
    /** 供货价格 */
    price?: number;
    /** 可供货数量 */
    qty?: number;
  };

  type AljkOfferLogVOPageQuery = {
    /** 商品关系ID 必填 */
    internalMappingId?: string;
    /** 最大操作时间 */
    maxUpdateTime?: string;
    /** 最小操作时间 */
    minUpdateTime?: string;
    /** 操作人名称 */
    operator?: string;
    pageQuery?: PageQuery;
  };

  type AljkOfferVO = {
    /** 商品关系ID */
    internalMappingId?: string;
    /** 供货价格 */
    price?: number;
    /** 供货数量 */
    qty?: number;
  };

  type AljkOfferWareVO = {
    /** 批准文号 */
    approvalNumber?: string;
    /** 条码 */
    barCode?: string;
    /** 品供关系更新时间 */
    gmtModified?: string;
    /** 外部商品ID(货品id) */
    id?: string;
    /** 内部批准文号 */
    internalApprovalNumber?: string;
    /** 内部条码 */
    internalBarCode?: string;
    /** 内部商品编码 */
    internalId?: string;
    /** 内部商品名称 */
    internalItemName?: string;
    /** 内部生产企业 */
    internalManufacturer?: string;
    /** 商品关系ID */
    internalMappingId?: string;
    /** 内部拼音码 */
    internalSimpleSpelling?: string;
    /** 内部规格 */
    internalSpecification?: string;
    /** 是否已代销 1： 是 0 否 */
    isAgency?: number;
    /** 货品名称 */
    itemName?: string;
    /** 生产企业 */
    manufacturer?: string;
    /** 报价单ID */
    offerSheetId?: string;
    /** 供货价格 */
    price?: number;
    /** 可供货数量 */
    qty?: number;
    /** 规格 */
    specification?: string;
    /** 仓库编码 */
    whId?: string;
    /** 仓库名称 */
    whName?: string;
  };

  type AljkOfferWareVOPageQuery = {
    /** 批准文号 */
    approvalNumber?: string;
    /** 商品条码 */
    barCode?: string;
    /** 外部商品ID(货品ID) */
    id?: string;
    /** 是否已代销 1：已代销 0：未代销 */
    isAgency?: number;
    /** 是否已匹配 1：已匹配 0：未匹配 */
    isMatching?: number;
    /** 是否已报价 1：已报价 0：未报价 */
    isOffer?: number;
    /** 货品名称 */
    itemName?: string;
    /** 内部商品信息 */
    keyword?: string;
    /** 最大品供关系更新时间 */
    maxUpdateTime?: string;
    /** 最小品供关系更新时间 */
    minUpdateTime?: string;
    pageQuery?: PageQuery;
    /** 仓库编码 */
    whId?: string;
  };

  type AreaTownVO = {
    /** 创建时间 */
    createTime?: string;
    /** 创建者 */
    creater?: string;
    /** 创建者编号 */
    createrId?: string;
    /** 编号 */
    id?: string;
    /** 是否启用，是:1 否:0 */
    isEnabled?: number;
    /** 名称 */
    name?: string;
    /** 更新者 */
    operator?: string;
    /** 更新者编号 */
    operatorId?: string;
    /** 父节点编号 */
    parentId?: string;
    /** 父节点名称 */
    parentName?: string;
    /** 排序 */
    sort?: number;
    /** 更新时间 */
    updateTime?: string;
  };

  type AreaTownVOPageQuery = {
    /** 乡镇/街道名称 */
    name?: string;
    pageQuery?: PageQuery;
  };

  type AreaVO = {
    /** 创建时间 */
    createTime?: string;
    /** 创建者 */
    creater?: string;
    /** 创建者编号 */
    createrId?: string;
    /** 编号 */
    id?: string;
    /** 是否启用，是:1 否:0 */
    isEnabled?: number;
    /** 名称 */
    name?: string;
    /** 更新者 */
    operator?: string;
    /** 更新者编号 */
    operatorId?: string;
    /** 父节点编号 */
    parentId?: string;
    /** 排序 */
    sort?: number;
    /** 更新时间 */
    updateTime?: string;
  };

  type AreaVOPageQuery = {
    pageQuery?: PageQuery;
  };

  type BaseAgentOfferLogVO = {
    /** 创建时间 */
    createTime?: string;
    /** 操作人 */
    creater?: string;
    /** 操作人编码 */
    createrId?: string;
    /** 主键编码 */
    id?: string;
    /** 1-报价 */
    logType?: number;
    /** 内部商品关系ID */
    offerSheetId?: string;
    /** 操作详情 */
    operateDesc?: string;
    /** 操作类型 */
    operateType?: string;
    /** 供货价格 */
    price?: number;
  };

  type BaseAgentOfferLogVOPageQuery = {
    /** 商品关系ID 必填 */
    internalMappingId?: string;
    /** 最大操作时间 */
    maxUpdateTime?: string;
    /** 最小操作时间 */
    minUpdateTime?: string;
    /** 操作人名称 */
    operator?: string;
    pageQuery?: PageQuery;
  };

  type BaseAgentOfferVO = {
    /** 商品关系ID */
    internalMappingId?: string;
    /** 供货价格 */
    price?: number;
  };

  type BaseAgentOfferWareVO = {
    /** 批准文号 */
    approvalNumber?: string;
    /** 条码 */
    barCode?: string;
    /** 客户名称 */
    cusName?: string;
    /** 主键id */
    id?: string;
    /** 内部批准文号 */
    internalApprovalNumber?: string;
    /** 内部商品条码 */
    internalBarCode?: string;
    /** 内部商品编码 */
    internalId?: string;
    /** 内部商品名称 */
    internalItemName?: string;
    /** 内部生产企业 */
    internalManufacturer?: string;
    /** 商品关系ID */
    internalMappingId?: string;
    /** 内部拼音码 */
    internalSimpleSpelling?: string;
    /** 内部规格 */
    internalSpecification?: string;
    /** 是否已代销 1： 是 0 否 */
    isAgency?: number;
    /** 外部商品ID */
    itemId?: string;
    /** 商品名称 */
    itemName?: string;
    /** 生产企业 */
    manufacturer?: string;
    /** 报价单ID */
    offerSheetId?: string;
    /** 供货价格 */
    price?: number;
    /** 可供货数量 */
    qty?: number;
    /** 规格 */
    specification?: string;
    /** 纳税人识别号 */
    taxPayerCode?: string;
    /** 更新时间 */
    updateTime?: string;
    /** 仓库编码 */
    whId?: string;
    /** 仓库名称 */
    whName?: string;
  };

  type BaseAgentOfferWareVOPageQuery = {
    /** 内部批准文号 */
    approvalNumber?: string;
    /** 内部商品条码 */
    barCode?: string;
    /** 客户信息 */
    cus?: string;
    /** 是否已匹配 1：已匹配 0：未匹配 */
    isMatching?: number;
    /** 是否已报价 1：已报价 0：未报价 */
    isOffer?: number;
    /** 外部商品ID */
    itemId?: string;
    /** 商品名称 */
    itemName?: string;
    /** 内部商品信息 */
    keyword?: string;
    /** 最大更新时间 */
    maxUpdateTime?: string;
    /** 最小更新时间 */
    minUpdateTime?: string;
    pageQuery?: PageQuery;
  };

  type BaseGspCategoryItemVO = {
    children?: BaseGspCategoryItemVO[];
    /** 分类编号 */
    code?: string;
    /** 分类名称 */
    name?: string;
  };

  type BaseGspCategoryVO = {
    /** GSP分类ID集合 */
    gspCategoryIds?: string[];
  };

  type BaseInfoCommonLogVO = {
    /** 单据类别:1-生产企业资料 */
    billClass?: number;
    /** 单据Id */
    billId?: string;
    /** 操作时间 */
    createTime?: string;
    /** 操作人 */
    creater?: string;
    /** 操作人Id */
    createrId?: string;
    /** 主键 */
    id?: string;
    /** 操作描述 */
    operateDesc?: string;
    /**  操作类型 */
    operateType?: string;
  };

  type BaseInfoCommonLogVOPageQuery = {
    /** 单据类型 :1-生产企业资料 */
    billClass?: number;
    /** 单据编号 */
    billId?: string;
    /** 操作时间-结束 */
    maxOperateTime?: string;
    /** 操作时间-开始 */
    minOperateTime?: string;
    /** 日志类型 */
    operateType?: string;
    /** 操作人 */
    operator?: string;
    pageQuery?: PageQuery;
  };

  type BaseLicenseVO = {
    /** 证照编码 */
    id?: string;
    /** 证照名称 */
    licenseName?: string;
    /** 证照类型:0-供应商证照 1-商品证照 2-销售客户证照 3-公司证照 4-门店证照 */
    licenseType?: number;
  };

  type BaseManufacturer = {
    /** 创建人 */
    creater?: string;
    createrId?: string;
    /** 电子邮箱 */
    email?: string;
    /** 传真 */
    fax?: string;
    /** GMP证书 */
    gmpNo?: string;
    /** 厂家id */
    id?: string;
    /** 是否启用 0-停用 1-启用 */
    isEnabled?: number;
    /** 联系人 */
    linkMan?: string;
    /** 厂家名称 */
    manufacturerName?: string;
    /** 更新人 */
    operator?: string;
    operatorId?: string;
    /** 联系电话 */
    phone?: string;
    /** 邮编 */
    postCode?: string;
    /** 生产地址 */
    productionAddress?: string;
    /** 生产许可证号 */
    productionLicense?: string;
    /** 核定的生产范围 */
    productionScope?: string;
    /** 注册地址 */
    registerAddress?: string;
  };

  type BaseManufacturerVO = {
    /** 创建人 */
    creater?: string;
    createrId?: string;
    /** 电子邮箱 */
    email?: string;
    /** 传真 */
    fax?: string;
    /** GMP证书 */
    gmpNo?: string;
    /** 厂家id 编辑时必传 */
    id?: string;
    /** 是否启用 0-停用 1-启用 */
    isEnabled?: number;
    /** 联系人 */
    linkMan?: string;
    /** 厂家名称 */
    manufacturerName?: string;
    /** 更新人 */
    operator?: string;
    operatorId?: string;
    /** 联系电话 */
    phone?: string;
    /** 邮编 */
    postCode?: string;
    /** 生产地址 */
    productionAddress?: string;
    /** 生产许可证号 */
    productionLicense?: string;
    /** 核定的生产范围 */
    productionScope?: string;
    /** 注册地址 */
    registerAddress?: string;
    /** 更新时间 */
    updateTime?: string;
  };

  type BaseManufacturerVOPageQuery = {
    /** 创建人 */
    creater?: string;
    /** 生产厂家 */
    manufacturerName?: string;
    /** 最大更新日期 */
    maxUpdateTime?: string;
    /** 最小更新日期 */
    minUpdateTime?: string;
    pageQuery?: PageQuery;
  };

  type BaseWareVOPageQuery = {
    /** 商品条码 */
    barCode?: string;
    /** Gsp分类(多个) */
    gspCategoryIds?: string[];
    /** 商品名称/拼音码/商品编码 */
    keyword?: string;
    /** 生产厂家 */
    manufacturer?: string;
    pageQuery?: PageQuery;
    /** 批准文号 */
    regisTrationNumber?: string;
  };

  type BeforeWareVO = {
    /**  变更前税收分类编码  */
    beforeTaxClassificationCode?: string;
    /**  变更前税率  */
    beforeTaxRate?: number;
  };

  type BilSubmitReviewHandleVO = {
    /** 商品单据编号 */
    billId?: string;
    operator?: string;
    operatorId?: string;
    /** 提审备注 */
    remark?: string;
  };

  type BillCheckHandleVO = {
    /** 商品单据编号 */
    billId?: string;
    /** 审核备注 */
    remark?: string;
    /** 审核结果（0：审核不通过；1：审核通过） */
    resultCode?: number;
  };

  type BillRevokeHandleVO = {
    /** 商品单据编号 */
    billId?: string;
    /** 备注 */
    remark?: string;
  };

  type CategoryItemVO = {
    children?: CategoryItemVO[];
    /** 分类编号 */
    code?: string;
    /** icon图标 */
    icon?: string;
    /** 分类名称 */
    name?: string;
  };

  type CategoryVO = {
    /** 名称 */
    categoryName?: string;
    /** 创建时间 */
    createTime?: string;
    /** 创建者 */
    creater?: string;
    /** 创建者编号 */
    createrId?: string;
    /** icon图标(用于移动端,小程序) */
    icon?: string;
    /** 编号 */
    id?: string;
    /** 是否启用，是:1 否:0 */
    isEnabled?: number;
    /** 更新者 */
    operator?: string;
    /** 更新者编号 */
    operatorId?: string;
    /** 父节点编号 */
    parentId?: string;
    /** 父节点名称 */
    parentName?: string;
    /** 排序 */
    sort?: number;
    /** 租客ID */
    tenantId?: string;
    /** 更新时间 */
    updateTime?: string;
  };

  type DictItemVO = {
    /** 下一级数据 */
    children?: DictItemVO[];
    /** 字典id */
    dictId?: string;
    /** 字典子项标题 */
    dictText?: string;
    /** 字典子项值 */
    dictValue?: string;
    /** 字典子项id */
    id?: string;
    /** 父项的值 */
    parentValue?: string;
    /** 拓展属性1 */
    property1?: string;
    /** 拓展属性2 */
    property2?: string;
    /** 拓展属性3 */
    property3?: string;
    /** 拓展属性4 */
    property4?: string;
    /** 拓展属性5 */
    property5?: string;
    /** 排序 */
    sort?: number;
  };

  type DictItemVOPageQuery = {
    /** 字典ID */
    dictId?: string;
    pageQuery?: PageQuery;
    /** 字典项描述 */
    text?: string;
  };

  type DictVO = {
    /** 创建时间 */
    createTime?: string;
    /** 创建者 */
    creater?: string;
    /** 创建者编号 */
    createrId?: string;
    /** 描述 */
    dictDesc?: string;
    /** 编号 */
    id?: string;
    /** 更新者 */
    operator?: string;
    /** 更新者编号 */
    operatorId?: string;
    /** 字典类型，普通字典:0 树形字典:1 */
    type?: number;
    /** 更新时间 */
    updateTime?: string;
  };

  type DictVOPageQuery = {
    /** 字典描述 */
    desc?: string;
    pageQuery?: PageQuery;
    /** 字典类型 */
    type?: number;
  };

  type GspCategoryItemVO = {
    children?: GspCategoryItemVO[];
    /** 分类编号 */
    code?: string;
    /** icon图标 */
    icon?: string;
    /** 分类名称 */
    name?: string;
  };

  type GspCategoryVO = {
    /** 创建时间 */
    createTime?: string;
    /** 创建者 */
    creater?: string;
    /** 创建者编号 */
    createrId?: string;
    /** GSP分类ID集合 */
    gspCategoryIds?: string[];
    /** 名称 */
    gspCategoryName?: string;
    /** icon图标(用于移动端,小程序) */
    icon?: string;
    /** 编号 */
    id?: string;
    /** 是否启用，是:1 否:0 */
    isEnabled?: number;
    /** 更新者 */
    operator?: string;
    /** 更新者编号 */
    operatorId?: string;
    /** 父节点编号 */
    parentCode?: string;
    /** 父节点名称 */
    parentName?: string;
    /** 说明 */
    remark?: string;
    /** 排序 */
    sort?: number;
    /** 租客ID */
    tenantId?: string;
    /** 更新时间 */
    updateTime?: string;
  };

  type OrderItem = {
    asc?: boolean;
    column?: string;
  };

  type OutWareMappingVO = {
    /** 条形码 */
    barId?: string;
    /** 创建人 */
    creater?: string;
    /** 单位名称 */
    cusName?: string;
    /** 主键ID */
    id?: string;
    /** 厂家 */
    manufacturer?: string;
    /** 外部商品编码(必填) */
    outSkuId?: string;
    /** 商品名称简拼(拼音首字母) */
    simpleSpelling?: string;
    /** 内部商品编码(必填) */
    skuId?: string;
    /** 规格 */
    skuModel?: string;
    /** 商品名称 */
    skuName?: string;
    /** 纳税人识别号(必填) */
    taxPayerCode?: string;
    /** 更新时间 */
    updateTime?: string;
  };

  type OutWareMappingVOPageQuery = {
    /** 条形码 */
    barId?: string;
    /** 创建人 */
    creater?: string;
    /** 单位名称 */
    cusName?: string;
    /** 内部商品信息 */
    keyword?: string;
    /** 外部商品编码 */
    outSkuId?: string;
    pageQuery?: PageQuery;
    /** 纳税人识别号 */
    taxPayerCode?: string;
  };

  type OutWareVO = {
    /** 商品主键 */
    id?: string;
    /** 生产厂家 */
    manufacturer?: string;
    /** 商品绑定关系主键 */
    outWareMappingId?: string;
    /** 商品编码 */
    skuId?: string;
    /** 商品规格 */
    skuModel?: string;
    /** 商品名称 */
    skuName?: string;
  };

  type OutWareVOPageQuery = {
    /** 商品名称/拼音码/商品编码 */
    keyword?: string;
    /** 生产厂家 */
    manufacturer?: string;
    pageQuery?: PageQuery;
    /** 纳税人识别号(必填) */
    taxPayerCode?: string;
  };

  type PageQuery = {
    current?: number;
    orders?: OrderItem[];
    size?: number;
  };

  type PlatformVO = {
    /** 渠道商短信推送api地址 */
    apiUrl?: string;
    /** 创建时间 */
    createTime?: string;
    /** 创建者 */
    creater?: string;
    /** 创建者编号 */
    createrId?: string;
    /** 备注说明 */
    desc?: string;
    /** 编号 */
    id?: string;
    /** 是否启用，是:1 否:0 */
    isEnabled?: number;
    /** 更新者 */
    operator?: string;
    /** 更新者编号 */
    operatorId?: string;
    /** 短信渠道商 */
    platformName?: string;
    /** 更新时间 */
    updateTime?: string;
  };

  type PlatformVOPageQuery = {
    pageQuery?: PageQuery;
  };

  type SelectVO = {
    /** 标题 */
    dictText?: string;
    /** 值 */
    dictValue?: string;
  };

  type StaffWareSubscriptionPageQueryVO = {
    /**  商品条码  */
    barCode?: string;
    /**  创建人  */
    creater?: string;
    /**  是否启用 0-停用 1-启用  */
    isEnabled?: number;
    /**  商品名称/拼音码/编码  */
    keyword?: string;
    pageQuery?: PageQuery;
    /**  用户id  */
    userId?: string;
  };

  type StaffWareSubscriptionVO = {
    /**  商品名称  */
    barCode?: string;
    /**  创建时间  */
    createTime?: string;
    /**  创建人  */
    creater?: string;
    /**  创建者ID  */
    createrId?: string;
    /**  主键id  */
    id?: string;
    /**  是否启用 0-停用 1-启用  */
    isEnabled?: number;
    /**  是否启用说明  */
    isEnabledName?: string;
    /**  生产厂家  */
    manufacturer?: string;
    /**  订阅人员  */
    realName?: string;
    /**  商品名称  */
    simpleSpelling?: string;
    /**  商品编码  */
    skuId?: string;
    /**  规格  */
    skuModel?: string;
    /**  商品名称  */
    skuName?: string;
    /**  更新时间  */
    updateTime?: string;
    /**  用户编号  */
    userId?: string;
  };

  type TemplateVO = {
    /** 创建时间 */
    createTime?: string;
    /** 创建者 */
    creater?: string;
    /** 创建者编号 */
    createrId?: string;
    /** 编号 */
    id?: string;
    /** 是否启用，是:1 否:0 */
    isEnabled?: number;
    /** 更新者 */
    operator?: string;
    /** 更新者编号 */
    operatorId?: string;
    /** 内容 */
    templateContent?: string;
    /** 备注说明 */
    templateDesc?: string;
    /** 名称 */
    templateName?: string;
    /** 更新时间 */
    updateTime?: string;
  };

  type TemplateVOPageQuery = {
    pageQuery?: PageQuery;
  };

  type WareBriefDocument = {
    /** 单据状态名称  0:未提审1:已提审 2:审核中3:审核通过4:已取消 */
    billState?: number;
    /** 单据状态名称 */
    billStateName?: string;
    /** 创建时间 */
    createTime?: string;
    /** 剂型 */
    dosageForm?: string;
    dosageFormName?: string;
    /** 商品分类编号 */
    drugCategory?: string;
    /** 商品分类 */
    drugCategoryName?: string;
    /** GSP分类id */
    gspCategory?: string;
    /** GSP分类名称 */
    gspCategoryName?: string;
    /** 单据编号 */
    id?: string;
    /** 是否处方 否:0 是:1 */
    isRx?: number;
    /** 厂家 */
    manufacturer?: string;
    /** 批准文号 */
    regisTrationNumber?: string;
    /** 商品编码 */
    skuId?: string;
    /** 规格 */
    skuModel?: string;
    /** 商品名称 */
    skuName?: string;
    /** 本位码 */
    standardCode?: string;
    /** 药监码 */
    supervisionCode?: string;
    /** 单位编码 */
    unitCode?: string;
    /** 单位名称 */
    unitName?: string;
    /** 通用名 */
    wareGeneralName?: string;
  };

  type WareBriefDocumentVO = {
    /** 可用库存 */
    activeQty?: number;
    /** 商品条码 */
    barCode?: string;
    /** 单据状态  0:未提审1:已提审 2:审核中3:审核通过4:已取消 */
    billState?: number;
    /** 单据状态名称 */
    billStateName?: string;
    /** 单据类型 1:首营审核2:变更审核 */
    billType?: number;
    /** 单据类型名称 */
    billTypeName?: string;
    /** 运营分类 */
    categoryIds?: string[];
    /** 颜色,对应颜色表id */
    colorId?: string;
    /** 颜色名称 */
    colorName?: string;
    /** 成本价 */
    costPrice?: number;
    /** 创建时间 */
    createTime?: string;
    /** 创建人 */
    creater?: string;
    /** 创建者编号 */
    createrId?: string;
    /** 剂型 */
    dosageFormName?: string;
    /** 商品分类编码 */
    drugCategory?: string;
    /** 商品分类 */
    drugCategoryName?: string;
    /** 完结时间 */
    finishTime?: string;
    /** 商品名称全拼 */
    fullSpelling?: string;
    /** GSP分类编码 */
    gspCategory?: string;
    /** GSP分类名称 */
    gspCategoryName?: string;
    /** GSP分类层级名称(1级分类-2级分类-3级分类) */
    gspCategoryTreeName?: string;
    /** 单据编号 */
    id?: string;
    /** 是否新增商品 0：否 1:是 */
    isNewWare?: number;
    /** 是否处方 否:0 是:1 */
    isRx?: number;
    /** 是否虚拟主商品 0：否 1:是 */
    isVirtualMainwaresku?: number;
    /** 商品主图 */
    mainPic?: string;
    /** 主商品编码 */
    mainWareSkuCode?: string;
    /** 生产厂家 */
    manufacturer?: string;
    /** 市场价 */
    marketPrice?: number;
    /** 最低销售限价 */
    minPrice?: number;
    /** 更新者 */
    operator?: string;
    /** 更新者编号 */
    operatorId?: string;
    /** 有效期（单位:月） */
    periodValidity?: number;
    /** 流程时效（天） */
    processDay?: number;
    /** 产地 */
    producingArea?: string;
    /** 批准文号 */
    regisTrationNumber?: string;
    /** 零售价 */
    retailPrice?: number;
    /** 提审人 */
    reviewName?: string;
    /** 提审时间 */
    reviewTime?: string;
    /** 商品名称简拼(拼音首字母) */
    simpleSpelling?: string;
    /** 商品编码 */
    skuId?: string;
    /** 商品规格 */
    skuModel?: string;
    /** 商品名称 */
    skuName?: string;
    /** 尺码id，对应尺码表id */
    specId?: string;
    /** 尺码名称 */
    specName?: string;
    /** 产品id */
    spuId?: string;
    /** 本位码 */
    standardCode?: string;
    /** 商品状态 1:正常 2:停用 3:停购 */
    status?: string;
    /** 药监码 */
    supervisionCode?: string;
    /** 税率 */
    taxRate?: number;
    /** 租户ID */
    tenantId?: string;
    /** 单位编码 */
    unitCode?: string;
    /** 单位名称 */
    unitName?: string;
    /** 更新时间 */
    updateTime?: string;
    /** 已引入的次数 */
    usageCount?: number;
    /** 通用名 */
    wareGeneralName?: string;
    /** 整件 */
    wholeThing?: string;
  };

  type WareBriefVO = {
    /** 可用库存 */
    activeQty?: number;
    /** 商品条码 */
    barCode?: string;
    /** 运营分类 */
    categoryIds?: string[];
    /** 颜色,对应颜色表id */
    colorId?: string;
    /** 颜色名称 */
    colorName?: string;
    /** 成本价 */
    costPrice?: number;
    /** 创建时间 */
    createTime?: string;
    /** 创建者 */
    creater?: string;
    /** 创建者编号 */
    createrId?: string;
    /** 剂型 */
    dosageFormName?: string;
    /** 商品分类编码 */
    drugCategory?: string;
    /** 商品分类 */
    drugCategoryName?: string;
    /** 商品名称全拼 */
    fullSpelling?: string;
    /** GSP分类编码 */
    gspCategory?: string;
    /** GSP分类名称 */
    gspCategoryName?: string;
    /** GSP分类层级名称(1级分类-2级分类-3级分类) */
    gspCategoryTreeName?: string;
    /** 主键 */
    id?: string;
    /** 是否新增商品 0：否 1:是 */
    isNewWare?: number;
    /** 是否处方 否:0 是:1 */
    isRx?: number;
    /** 是否虚拟主商品 0：否 1:是 */
    isVirtualMainwaresku?: number;
    /** 商品主图 */
    mainPic?: string;
    /** 主商品编码 */
    mainWareSkuCode?: string;
    /** 生产厂家 */
    manufacturer?: string;
    /** 市场价 */
    marketPrice?: number;
    /** 最低销售限价 */
    minPrice?: number;
    /** 更新者 */
    operator?: string;
    /** 更新者编号 */
    operatorId?: string;
    /** 有效期（单位:月） */
    periodValidity?: number;
    /** 产地 */
    producingArea?: string;
    /** 批准文号 */
    regisTrationNumber?: string;
    /** 零售价 */
    retailPrice?: number;
    /** 商品名称简拼(拼音首字母) */
    simpleSpelling?: string;
    /** 商品编码 */
    skuId?: string;
    /** 商品规格 */
    skuModel?: string;
    /** 商品名称 */
    skuName?: string;
    /** 尺码id，对应尺码表id */
    specId?: string;
    /** 尺码名称 */
    specName?: string;
    /** 产品id */
    spuId?: string;
    /** 本位码 */
    standardCode?: string;
    /** 商品状态 1:正常 2:停用 3:停购 */
    status?: string;
    /** 药监码 */
    supervisionCode?: string;
    /** 税率 */
    taxRate?: number;
    /** 租户ID */
    tenantId?: string;
    /** 单位编码 */
    unitCode?: string;
    /** 单位名称 */
    unitName?: string;
    /** 更新时间 */
    updateTime?: string;
    /** 已引入的次数 */
    usageCount?: number;
    /** 通用名 */
    wareGeneralName?: string;
    /** 整件 */
    wholeThing?: string;
  };

  type WareDocumentVO = {
    /** 验收属性 */
    acceptanceProperty?: string;
    /** 可用库存 */
    activeQty?: number;
    /** 产品使用范围 */
    applicableScope?: string;
    /** 批件规格 */
    approvalDocSpec?: string;
    /** 批准文号失效期 */
    approvalNoFailureTime?: string;
    /** 条形码 */
    barCode?: string;
    /** 单据状态 */
    billState?: number;
    /** 单据状态名称 */
    billStateName?: string;
    /** 单据类型 */
    billType?: number;
    /** 单据类型名称 */
    billTypeName?: string;
    /** 品牌 */
    brandName?: string;
    /** 运营分类 */
    categoryIds?: string[];
    /** 颜色,对应颜色表id */
    colorId?: string;
    /** 颜色名称 */
    colorName?: string;
    /** 成分 */
    composition?: string;
    /** 成本价 */
    costPrice?: number;
    /** 创建时间 */
    createTime?: string;
    /** 创建者 */
    creater?: string;
    /** 创建者编号 */
    createrId?: string;
    /** 养护周期(天) */
    curingPeriod?: number;
    /** 养护类型：0-不需要养护 1-普通  2-重点 */
    curingType?: string;
    /** 科室 */
    department?: string;
    /** 剂型 */
    dosageForm?: string;
    /** 药品分类 */
    drugCategory?: string;
    /** 单/双轨制处方药 1:单轨制  2:双轨制 */
    drugType?: string;
    /** 英文名 */
    englishName?: string;
    /** 商品建档序号 */
    filingNo?: string;
    /** 商品名称全拼 */
    fullSpelling?: string;
    /** 功能主治 */
    functions?: string;
    /** GMP号 */
    gmpNo?: string;
    /** 毛重 单位：kg */
    grossWeight?: number;
    /** GSP分类 */
    gspCategory?: string;
    /** gsp号 */
    gspNo?: string;
    /** 单据编号 */
    id?: string;
    /** 资料类型 字典： polarbear_base_ware_information_type */
    informationType?: string;
    /** 说明书 */
    instructions?: string;
    /** 失效预警(天) */
    invalidWarnDay?: number;
    /** 是否防疫登记 */
    isAntiepidemicChecked?: number;
    /** 是否生物制品 0：否 1:是 */
    isBiologicalProducts?: number;
    /** 是否血液制品 */
    isBloodproduct?: number;
    /** 是否集采商品 */
    isCentralizedProcurement?: number;
    /** 是否中草药 0：否 1:是 */
    isChineseMedicine?: number;
    /** 是否双人验收 0：否 1:是 */
    isDoubleCheck?: number;
    /** 是否监管码 0：否 1:是 */
    isDrugSuperviseCode?: number;
    /** 是否外用 */
    isExternalsigns?: number;
    /** 是否禁止现金交易 */
    isForbiddenCash?: number;
    /** 是否含麻黄碱复方制剂 */
    isHaveMhj?: number;
    /** 是否进口 */
    isImportdrug?: number;
    /** 是否低温商品 0：否 1:是 */
    isLowTemperature?: number;
    /** 是否医保目录 */
    isMedicalInsurance?: number;
    /**  是否新增商品 0-否 1-是 */
    isNewWare?: number;
    /** 是否禁止航空 */
    isNoair?: number;
    /** 是否处方 否:0 是:1 */
    isRx?: number;
    /** 是否特殊药品 */
    isSpecialDrug?: number;
    /** 是否追溯码 否:0 是:1 */
    isTrace?: number;
    /** 是否贵重 */
    isValuable?: number;
    /** 是否虚拟主商品 0：否 1:是 */
    isVirtualMainwaresku?: number;
    /** 是否终止妊娠药品 否:0 是:1 */
    isZzrs?: number;
    /** 商品主图 */
    mainPic?: string;
    /** 主商品编码 */
    mainWareSkuCode?: string;
    /** 生产厂家 */
    manufacturer?: string;
    /** 市场价 */
    marketPrice?: number;
    /** 中包装 */
    mediumPackaging?: string;
    /** 最低销售限价 */
    minPrice?: number;
    /** 型号 */
    modelNo?: string;
    /** 更新者 */
    operator?: string;
    /** 更新者编号 */
    operatorId?: string;
    /** 云库引入的商品编码 */
    originalSkuId?: string;
    /** OTC类型 1:甲类OTC,2:乙类OTC */
    otcType?: string;
    /** 其他需要说明问题 */
    otherRemark?: string;
    /** 包装规格 */
    packing?: string;
    /** 有效期（单位:月） */
    periodValidity?: number;
    /** 上市许可持有人 */
    permitHolder?: string;
    /** 产地 */
    producingArea?: string;
    /** 生产许可证号/备案证号 */
    productionLicense?: string;
    /** 质量标准 */
    qualityStandard?: string;
    /** 批准文号 */
    regisTrationNumber?: string;
    /** 监管性质 字典：polarbear_base_ware_regulatory_nature */
    regulatoryNature?: string;
    /** 备注 */
    remark?: string;
    /** 重复条码的Sku 不重复时为空 */
    repeatBarCodeWares?: string[];
    /** 零售价 */
    retailPrice?: number;
    /** 提审人 */
    reviewName?: string;
    /** 提审时间 */
    reviewTime?: string;
    /** 单独制单类型  0-否 1-是 */
    selfDocumentType?: number;
    /** 商品名称简拼(拼音首字母) */
    simpleSpelling?: string;
    /** 高 单位：cm */
    sizeHigh?: number;
    /** 长 单位：cm */
    sizeLong?: number;
    /** 宽 单位：cm */
    sizeWide?: number;
    /** 商品编码 */
    skuId?: string;
    /** 商品规格 */
    skuModel?: string;
    /** 商品名称 */
    skuName?: string;
    /** 尺码id，对应尺码表id */
    specId?: string;
    /** 尺码名称 */
    specName?: string;
    /** 产品id */
    spuId?: string;
    /** 本位码 */
    standardCode?: string;
    /** 标准号 */
    standardNumber?: string;
    /** 状态 1：启用 2：停用 */
    status?: string;
    /** 储存条件 */
    storageConditions?: string;
    /** 储存属性 1阴凉,2常温,3冷藏,4冷冻,5密闭、避光 */
    storageProperties?: string;
    /** 产品结构和功能 */
    structureFunction?: string;
    /** 药监编码 */
    supervisionCode?: string;
    /** 税收分类编码 */
    taxClassificationCode?: string;
    /** 税率 */
    taxRate?: number;
    /** 租户ID */
    tenantId?: string;
    /** 运输条件 */
    trafficCondition?: string;
    /** 疗程 */
    treatmentCourse?: string;
    /** 诊疗范围 字典：polarbear_base_wms_api_treatment_scope */
    treatmentScope?: string;
    /** 单位编码 */
    unitCode?: string;
    /** 更新时间 */
    updateTime?: string;
    /** 性状 */
    wareCharacter?: string;
    /** 通用名 */
    wareGeneralName?: string;
    wareLicenseList?: WareLicenseVO[];
    /** 商品来源 字典：polarbear_base_ware_source */
    wareSource?: string;
    wareSubsetVOList?: WareSubsetVO[];
    /** 商品类型:0-正常商品 1-预商品 */
    wareType?: string;
    /** 用法用量 */
    wareUsage?: string;
    /** 整件 */
    wholeThing?: string;
    /** 仓储商品分类，字典polarbear_base_wms_api_ware_category */
    wmsWareCategory?: string;
    /** 仓储商品类型 字典：polarbear_base_wms_api_ware_type */
    wmsWareType?: string;
  };

  type WareDocumentVOPageQuery = {
    /** 商品条码 */
    barCode?: string;
    /** 单据状态  0:未提审1:已提审 2:审核中3:审核通过4:已取消 */
    billState?: number;
    /** 单据类型 1:首营审核2:变更审核 */
    billType?: number;
    /** 商品分类(多个) */
    categoryIds?: string[];
    /** 创建人 */
    creater?: string;
    /** 科室 */
    department?: string;
    /** 药品分类 */
    drugCategoryId?: string;
    /** Gsp分类(多个) */
    gspCategoryIds?: string[];
    /** 单据编号 */
    id?: string;
    /** 是否双人验收 0：否 1:是 */
    isDoubleCheck?: number;
    /** 是否处方 否:0 是:1 */
    isRx?: number;
    /** 商品名称/拼音码/商品编码 */
    keyword?: string;
    /** 主商品编码 */
    mainWareSkuCode?: string;
    /** 生产厂家 */
    manufacturer?: string;
    /** 最大创建日期 */
    maxCreateTime?: string;
    maxFinishTime?: string;
    /** 最大更新日期 */
    maxUpdateTime?: string;
    /** 最小创建日期 */
    minCreateTime?: string;
    minFinishTime?: string;
    /** 最小更新日期 */
    minUpdateTime?: string;
    pageQuery?: PageQuery;
    /** 平台ID */
    platformId?: string;
    /** 生产许可证号/备案证号 */
    productionLicense?: string;
    /** 批准文号/注册证号 */
    regisTrationNumber?: string;
    /** 店铺ID */
    shopId?: string;
    /** 商品名称简拼(拼音首字母) */
    simpleSpelling?: string;
    /** 商品编码 */
    skuId?: string;
    /** 商品编码(多个) */
    skuIds?: string[];
    /** 商品名称 */
    skuName?: string;
    /** 本位码 */
    standardCode?: string;
    /** 商品状态 1:正常 2:停用 3:停购 */
    status?: string;
    /** 多个商品状态 1:正常 2:停用 3:停购 */
    statusList?: string[];
    /** 通用名 */
    wareGeneralName?: string;
  };

  type WareFlowInstanceVO = {
    /** 审核时间 */
    handleTime?: string;
    /** 审批意见 */
    operateReason?: string;
    /** 审核人签名 */
    operator?: string;
    /** 审批结果 */
    result?: string;
    /** 角色名称 */
    roleName?: string;
  };

  type WareImportResult = {
    /** 失败导入数量 */
    fail?: number;
    /** 失败文档下载路径 */
    failExcelPath?: string;
    /** 成功导入数量 */
    success?: number;
  };

  type WareLicenseVO = {
    /** 失效日期 */
    expDate?: string;
    /** 主键 */
    id?: string;
    /** 证照编号 */
    licenseCode?: string;
    /** 证照图片 */
    licenseImg?: string;
    /** 证照名称 */
    licenseName?: string;
    /** 证照类型编码 1 GSP证照  2 客户证照 */
    licenseType?: number;
    originalId?: string;
    /** 商品编码 */
    skuId?: string;
    /** 生效日期 */
    validDate?: string;
  };

  type WareLogVO = {
    /** 操作时间 */
    createTime?: string;
    /** 操作人 */
    creater?: string;
    /** 操作人Id */
    createrId?: string;
    /** 主键 */
    id?: string;
    logType?: number;
    /** 操作描述 */
    operateDesc?: string;
    /**  操作类型 */
    operateType?: string;
    /** 商品编号 */
    skuId?: string;
    /** 商品单据编号 */
    wareBillCode?: string;
  };

  type WareLogVOPageQuery = {
    /** 日志类型 1-基础信息 2-证照信息 */
    logType?: string;
    /** 操作时间-结束 */
    maxOperateTime?: string;
    /** 操作时间-开始 */
    minOperateTime?: string;
    /** 日志类型 1-新增 2-修改  3-删除  */
    operateType?: string;
    /** 操作人 */
    operator?: string;
    pageQuery?: PageQuery;
    /** 商品编号 */
    skuId?: string;
    /** 商品单据编号 */
    wareBillCode?: string;
  };

  type WareMedicalEquipmentDocument = {
    /** 产品适用范围 */
    applicableScope?: string;
    baseManufacturer?: BaseManufacturer;
    /** 首营审批通过日期 */
    createTime?: string;
    gspCategory?: string;
    /** 产品类别（Ⅰ类、Ⅱ类、Ⅲ类） */
    gspCategoryName?: string;
    /** 单据编号 */
    id?: string;
    /** 生产厂家 */
    manufacturer?: string;
    /** 其他需要说明的问题 */
    otherRemark?: string;
    /** 产品分类 */
    productCategory?: string;
    /** 医疗器械注册证号/备案号 */
    regisTrationNumber?: string;
    skuId?: string;
    /** 规格 */
    skuModel?: string;
    /** 商品名称 */
    skuName?: string;
    /** 标准号 */
    standardNumber?: string;
    /** 产品主要结构和性能 */
    structureFunction?: string;
    /** 原试产准产注册证号 */
    trialAndProductionRegisNumber?: string;
    /** 产品名称 */
    wareGeneralName?: string;
    /** 产品主要用途 */
    wareUsage?: string;
  };

  type WareRequiredConfigVO = {
    /** 分类id */
    categoryId?: string;
    /** 字段 */
    filed?: string;
    /** 字段名称 */
    filedName?: string;
    /** 是否必填 */
    isRequired?: number;
    /** web显示名称 */
    webShowText?: string;
  };

  type WareSubsetVO = {
    /** 条形码 */
    barCode?: string;
    /** 颜色,对应颜色表id */
    colorId?: string;
    /** 颜色名称 */
    colorName?: string;
    /** 成本价 */
    costPrice?: number;
    /** 主键 */
    id?: string;
    /** 商品主图 */
    mainPic?: string;
    /** 市场价 */
    marketPrice?: number;
    /** 最低销售限价 */
    minPrice?: number;
    /** 云库引入的商品编码 */
    originalSkuId?: string;
    /** 零售价 */
    retailPrice?: number;
    /** 商品编码 */
    skuId?: string;
    /** 尺码id，对应尺码表id */
    specId?: string;
    /** 尺码名称 */
    specName?: string;
    /**  状态 1：启用 2：停用 */
    status?: string;
    /** 税率 */
    taxRate?: number;
  };

  type WareTaxChangeLogPageQueryVO = {
    /**  变更类型 1-商品税率 2-税收编码 3-税收编码&税率  */
    changeType?: number;
    /**  创建人  */
    creater?: string;
    /**  商品名称/拼音码/商品编码  */
    keyword?: string;
    /**  变更日期 结束  */
    maxCreateTime?: string;
    /**  变更日期 开始  */
    minCreateTime?: string;
    pageQuery?: PageQuery;
  };

  type WareTaxChangeLogVO = {
    /**  变更后税收分类编码  */
    afterTaxClassificationCode?: string;
    /**  	变更后税率  */
    afterTaxRate?: number;
    /**  变更前税收分类编码  */
    beforeTaxClassificationCode?: string;
    /**  变更前税率  */
    beforeTaxRate?: number;
    /**  单据状态  0:未提审1:已提审 2:审核中3:审核通过4:已取消  */
    billState?: number;
    /**  单据状态名称  */
    billStateName?: string;
    /**  变更类型 1-商品税率 2-税收编码 3-税收编码&税率  */
    changeType?: number;
    /**  变更类型名称  */
    changeTypeName?: string;
    /**  审核时间  */
    checkTime?: string;
    /**  创建日期  */
    createTime?: string;
    /**  创建人  */
    creater?: string;
    /**  创建人id  */
    createrId?: string;
    /**  主键  */
    id?: string;
    /**  生产厂家  */
    manufacturer?: string;
    /**  更新人  */
    operator?: string;
    /**  更新人id  */
    operatorId?: string;
    /**  备注  */
    remark?: string;
    /**  	商品名称简拼(拼音首字母)  */
    simpleSpelling?: string;
    /**  商品编码  */
    skuId?: string;
    /**  商品规格  */
    skuModel?: string;
    /**  商品名称  */
    skuName?: string;
    /**  更新日期  */
    updateTime?: string;
  };

  type WareVO = {
    /** 验收属性 */
    acceptanceProperty?: string;
    /** 可用库存 */
    activeQty?: number;
    /** 产品使用范围 */
    applicableScope?: string;
    /** 批件规格 */
    approvalDocSpec?: string;
    /** 批准文号失效期 */
    approvalNoFailureTime?: string;
    /** 条形码 */
    barCode?: string;
    /** 品牌 */
    brandName?: string;
    /** 运营分类 */
    categoryIds?: string[];
    /** 颜色,对应颜色表id */
    colorId?: string;
    /** 颜色名称 */
    colorName?: string;
    /** 成分 */
    composition?: string;
    /** 成本价 */
    costPrice?: number;
    /** 创建时间 */
    createTime?: string;
    /** 创建者 */
    creater?: string;
    /** 创建者编号 */
    createrId?: string;
    /** 养护周期(天) */
    curingPeriod?: number;
    /** 养护类型：0-不需要养护 1-普通  2-重点 */
    curingType?: string;
    /** 科室 */
    department?: string;
    /** 剂型 */
    dosageForm?: string;
    /** 药品分类 */
    drugCategory?: string;
    /** 单/双轨制处方药 1:单轨制  2:双轨制 */
    drugType?: string;
    /** 英文名 */
    englishName?: string;
    /** 商品建档序号 */
    filingNo?: string;
    /** 商品名称全拼 */
    fullSpelling?: string;
    /** 功能主治 */
    functions?: string;
    /** GMP号 */
    gmpNo?: string;
    /** 毛重 单位：kg */
    grossWeight?: number;
    /** GSP分类 */
    gspCategory?: string;
    /** gsp号 */
    gspNo?: string;
    /** 主键 */
    id?: string;
    /** 资料类型 字典： polarbear_base_ware_information_type */
    informationType?: string;
    /** 说明书 */
    instructions?: string;
    /** 失效预警(天) */
    invalidWarnDay?: number;
    /** 是否防疫登记 */
    isAntiepidemicChecked?: number;
    /** 是否生物制品 0：否 1:是 */
    isBiologicalProducts?: number;
    /** 是否血液制品 */
    isBloodproduct?: number;
    /** 是否集采商品 */
    isCentralizedProcurement?: number;
    /** 是否中草药 0：否 1:是 */
    isChineseMedicine?: number;
    /** 是否双人验收 0：否 1:是 */
    isDoubleCheck?: number;
    /** 是否监管码 0：否 1:是 */
    isDrugSuperviseCode?: number;
    /** 是否外用 */
    isExternalsigns?: number;
    /** 是否禁止现金交易 */
    isForbiddenCash?: number;
    /** 是否含麻黄碱复方制剂 */
    isHaveMhj?: number;
    /** 是否进口 */
    isImportdrug?: number;
    /** 是否低温商品 0：否 1:是 */
    isLowTemperature?: number;
    /** 是否医保目录 */
    isMedicalInsurance?: number;
    /**  是否新增商品 0-否 1-是 */
    isNewWare?: number;
    /** 是否禁止航空 */
    isNoair?: number;
    /** 是否处方 否:0 是:1 */
    isRx?: number;
    /** 是否特殊药品 */
    isSpecialDrug?: number;
    /** 是否追溯码 否:0 是:1 */
    isTrace?: number;
    /** 是否贵重 */
    isValuable?: number;
    /** 是否虚拟主商品 0：否 1:是 */
    isVirtualMainwaresku?: number;
    /** 是否终止妊娠药品 否:0 是:1 */
    isZzrs?: number;
    /** 商品主图 */
    mainPic?: string;
    /** 主商品编码 */
    mainWareSkuCode?: string;
    /** 生产厂家 */
    manufacturer?: string;
    /** 市场价 */
    marketPrice?: number;
    /** 中包装 */
    mediumPackaging?: string;
    /** 最低销售限价 */
    minPrice?: number;
    /** 型号 */
    modelNo?: string;
    /** 更新者 */
    operator?: string;
    /** 更新者编号 */
    operatorId?: string;
    /** 云库引入的商品编码 */
    originalSkuId?: string;
    /** OTC类型 1:甲类OTC,2:乙类OTC */
    otcType?: string;
    /** 其他需要说明问题 */
    otherRemark?: string;
    /** 包装规格 */
    packing?: string;
    /** 有效期（单位:月） */
    periodValidity?: number;
    /** 上市许可持有人 */
    permitHolder?: string;
    /** 产地 */
    producingArea?: string;
    /** 生产许可证号/备案证号 */
    productionLicense?: string;
    /** 质量标准 */
    qualityStandard?: string;
    /** 批准文号 */
    regisTrationNumber?: string;
    /** 监管性质 字典：polarbear_base_ware_regulatory_nature */
    regulatoryNature?: string;
    /** 备注 */
    remark?: string;
    /** 零售价 */
    retailPrice?: number;
    /** 单独制单类型  0-否 1-是 */
    selfDocumentType?: number;
    /** 商品名称简拼(拼音首字母) */
    simpleSpelling?: string;
    /** 高 单位：cm */
    sizeHigh?: number;
    /** 长 单位：cm */
    sizeLong?: number;
    /** 宽 单位：cm */
    sizeWide?: number;
    /** 商品编码 */
    skuId?: string;
    /** 商品规格 */
    skuModel?: string;
    /** 商品名称 */
    skuName?: string;
    /** 尺码id，对应尺码表id */
    specId?: string;
    /** 尺码名称 */
    specName?: string;
    /** 产品id */
    spuId?: string;
    /** 本位码 */
    standardCode?: string;
    /** 标准号 */
    standardNumber?: string;
    /** 状态 1：启用 2：停用 */
    status?: string;
    /** 储存条件 */
    storageConditions?: string;
    /** 储存属性 1阴凉,2常温,3冷藏,4冷冻,5密闭、避光 */
    storageProperties?: string;
    /** 产品结构和功能 */
    structureFunction?: string;
    /** 药监编码 */
    supervisionCode?: string;
    /** 税收分类编码 */
    taxClassificationCode?: string;
    /** 税率 */
    taxRate?: number;
    /** 租户ID */
    tenantId?: string;
    /** 运输条件 */
    trafficCondition?: string;
    /** 疗程 */
    treatmentCourse?: string;
    /** 诊疗范围 字典：polarbear_base_wms_api_treatment_scope */
    treatmentScope?: string;
    /** 单位编码 */
    unitCode?: string;
    /** 更新时间 */
    updateTime?: string;
    /** 性状 */
    wareCharacter?: string;
    /** 通用名 */
    wareGeneralName?: string;
    wareLicenseList?: WareLicenseVO[];
    /** 商品来源 字典：polarbear_base_ware_source */
    wareSource?: string;
    wareSubsetVOList?: WareSubsetVO[];
    /** 商品类型:0-正常商品 1-预商品 */
    wareType?: string;
    /** 用法用量 */
    wareUsage?: string;
    /** 整件 */
    wholeThing?: string;
    /** 仓储商品分类，字典polarbear_base_wms_api_ware_category */
    wmsWareCategory?: string;
    /** 仓储商品类型 字典：polarbear_base_wms_api_ware_type */
    wmsWareType?: string;
  };

  type WareVOPageQuery = {
    /** 商品条码 */
    barCode?: string;
    /** 商品分类(多个) */
    categoryIds?: string[];
    /** 创建人 */
    creater?: string;
    /** 科室 */
    department?: string;
    /** 药品分类 */
    drugCategoryId?: string;
    /** Gsp分类(多个) */
    gspCategoryIds?: string[];
    /** 是否双人验收 0：否 1:是 */
    isDoubleCheck?: number;
    /** 是否处方 否:0 是:1 */
    isRx?: number;
    /** 商品名称/拼音码/商品编码 */
    keyword?: string;
    /** 主商品编码 */
    mainWareSkuCode?: string;
    /** 生产厂家 */
    manufacturer?: string;
    /** 最大创建日期 */
    maxCreateTime?: string;
    /** 最大更新日期 */
    maxUpdateTime?: string;
    /** 最小创建日期 */
    minCreateTime?: string;
    /** 最小更新日期 */
    minUpdateTime?: string;
    pageQuery?: PageQuery;
    /** 平台ID */
    platformId?: string;
    /** 生产许可证号/备案证号 */
    productionLicense?: string;
    /** 批准文号/注册证号 */
    regisTrationNumber?: string;
    /** 店铺ID */
    shopId?: string;
    /** 商品名称简拼(拼音首字母) */
    simpleSpelling?: string;
    /** 商品编码 */
    skuId?: string;
    /** 商品编码(多个) */
    skuIds?: string[];
    /** 商品名称 */
    skuName?: string;
    /** 本位码 */
    standardCode?: string;
    /** 商品状态 1:正常 2:停用 3:停购 */
    status?: string;
    /** 多个商品状态 1:正常 2:停用 3:停购 */
    statusList?: string[];
    /** 通用名 */
    wareGeneralName?: string;
  };

  type PaginationAljkOfferLogVO_ = {
    current?: number;
    records?: AljkOfferLogVO[];
    size?: number;
    total?: number;
  };

  type PaginationAljkOfferWareVO_ = {
    current?: number;
    records?: AljkOfferWareVO[];
    size?: number;
    total?: number;
  };

  type PaginationAreaTownVO_ = {
    current?: number;
    records?: AreaTownVO[];
    size?: number;
    total?: number;
  };

  type PaginationAreaVO_ = {
    current?: number;
    records?: AreaVO[];
    size?: number;
    total?: number;
  };

  type PaginationBaseAgentOfferLogVO_ = {
    current?: number;
    records?: BaseAgentOfferLogVO[];
    size?: number;
    total?: number;
  };

  type PaginationBaseAgentOfferWareVO_ = {
    current?: number;
    records?: BaseAgentOfferWareVO[];
    size?: number;
    total?: number;
  };

  type PaginationBaseInfoCommonLogVO_ = {
    current?: number;
    records?: BaseInfoCommonLogVO[];
    size?: number;
    total?: number;
  };

  type PaginationBaseManufacturerVO_ = {
    current?: number;
    records?: BaseManufacturerVO[];
    size?: number;
    total?: number;
  };

  type PaginationDictItemVO_ = {
    current?: number;
    records?: DictItemVO[];
    size?: number;
    total?: number;
  };

  type PaginationDictVO_ = {
    current?: number;
    records?: DictVO[];
    size?: number;
    total?: number;
  };

  type PaginationOutWareMappingVO_ = {
    current?: number;
    records?: OutWareMappingVO[];
    size?: number;
    total?: number;
  };

  type PaginationOutWareVO_ = {
    current?: number;
    records?: OutWareVO[];
    size?: number;
    total?: number;
  };

  type PaginationPlatformVO_ = {
    current?: number;
    records?: PlatformVO[];
    size?: number;
    total?: number;
  };

  type PaginationStaffWareSubscriptionVO_ = {
    current?: number;
    records?: StaffWareSubscriptionVO[];
    size?: number;
    total?: number;
  };

  type PaginationTemplateVO_ = {
    current?: number;
    records?: TemplateVO[];
    size?: number;
    total?: number;
  };

  type PaginationWareBriefDocumentVO_ = {
    current?: number;
    records?: WareBriefDocumentVO[];
    size?: number;
    total?: number;
  };

  type PaginationWareBriefDocument_ = {
    current?: number;
    records?: WareBriefDocument[];
    size?: number;
    total?: number;
  };

  type PaginationWareBriefVO_ = {
    current?: number;
    records?: WareBriefVO[];
    size?: number;
    total?: number;
  };

  type PaginationWareLogVO_ = {
    current?: number;
    records?: WareLogVO[];
    size?: number;
    total?: number;
  };

  type PaginationWareMedicalEquipmentDocument_ = {
    current?: number;
    records?: WareMedicalEquipmentDocument[];
    size?: number;
    total?: number;
  };

  type PaginationWareTaxChangeLogVO_ = {
    current?: number;
    records?: WareTaxChangeLogVO[];
    size?: number;
    total?: number;
  };
}
