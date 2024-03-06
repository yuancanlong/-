// @ts-ignore
/* eslint-disable */

declare namespace PO {
  type ApplyCheckVO = {
    /** 主键 */
    id?: string;
    /** 审核结果 */
    pass?: boolean;
    /** 审核备注 */
    remark?: string;
    /** 是否继续提审 */
    rootFlow?: boolean;
  };

  type BasicCheckVO = {
    /** 单据编号 */
    id?: string;
    /** 是否审核通过 0 不通过 1 通过 */
    pass?: number;
    /** 审核备注 */
    remark?: string;
    /** 是否强制审核 */
    rootFlow?: boolean;
  };

  type BizStockInResultInfoVO = {
    /** 不合格品数 */
    badQty?: number;
    /** 审核时间 */
    checkTime?: string;
    /** 审核人 */
    checker?: string;
    /** 审核人 */
    checkerId?: string;
    /** 创建时间 */
    createTime?: string;
    /** 订单/服务单id */
    docId?: string;
    /** 单据类型  1 普通 2 闪电 */
    docType?: number;
    /** 委托客户 */
    entrustCusCode?: string;
    /** 客户集名称 */
    entrustCusName?: string;
    /** 入库结果单id */
    id?: string;
    /** 通知数量 */
    noticeQty?: number;
    /** 仓库订单完成时间 */
    orderConfirmTime?: string;
    /** 待处理数 */
    pendingQty?: number;
    /** 合格品数 */
    realityQty?: number;
    /** 通知单id */
    stockNoticeId?: string;
    /** 供应商编码 */
    supplierId?: string;
    /** 供应商名称 */
    supplierName?: string;
    /** 入库总数 */
    totalQty?: number;
  };

  type BizStockResultPageQueryVO = {
    /** 合同号码 */
    contractCode?: string;
    /** 采购入库单号 */
    docId?: string[];
    /** 单据类型 1 委托订单 2 自采订单 */
    docType?: number;
    /** 仓库订单完成时间 */
    endOrderConfirmTime?: string;
    /** 主键 */
    id?: string;
    pageQuery?: PageQuery;
    /** 采购订单单号 */
    purOrderId?: string;
    /** 服务类型 1 入库单 2 出库单 */
    serviceType?: string;
    /** sku */
    sku?: string;
    /** 仓库订单完成时间 */
    startOrderConfirmTime?: string;
    /** 供应商编码 */
    supplierId?: string;
    /** 供应商名称 */
    supplierName?: string;
  };

  type BizStockResultVO = {
    /** 勾稽状态 1 未勾稽 2 部分勾稽 3 全部勾稽 */
    articulationStatus?: number;
    /** 合同编号 */
    contractCode?: string;
    /** 订单/服务单id */
    docId?: string;
    /** 单据类型 1 委托订单 2 自采订单 */
    docType?: number;
    /** 委托客户 */
    entrustCusCode?: string;
    /** 客户集名称 */
    entrustCusName?: string;
    /** 原单号 */
    id?: string;
    /** 仓库订单完成时间 */
    orderConfirmTime?: string;
    /** 中台业务编码（备注：此编码唯一,用于幂等处理） */
    outBizCode?: string;
    /** 采购订单id */
    purOrderId?: string;
    /** 服务类型 1入库单 2出库单 */
    serviceType?: string;
    /** 制单，确认 */
    status?: number;
    /** 通知单号 */
    stockNoticeId?: string;
    /** 单据类型 1 采购入库/采购退货 2 销售入库/销售出库 */
    stockType?: number;
    /** 物理仓编码 */
    storeCode?: string;
    /** 物理仓名称 */
    storeName?: string;
    /** 供应商编码 */
    supplierId?: string;
    /** 供应商名称 */
    supplierName?: string;
    /** 总金额 */
    totalAmount?: number;
  };

  type BuyerProjectSubscriptionVO = {
    /**  采购员  */
    buyer?: string;
    /**  采购员id  */
    buyerId?: string;
    /**  id  */
    id?: string;
    /**  手机号码  */
    mobilePhone?: string;
    /**  项目id  */
    projectInfoId?: string;
    /**  角色（多个角色`/`分割）  */
    roleNames?: string;
  };

  type ConsignmentCreateVO = {
    /** 条码 */
    barCode?: string;
    /** 外部客户id */
    externalCusId?: string;
    /** 外部商品编码 */
    externalSkuId?: string;
    /** 厂家 */
    manufacturer?: string;
    /** 批准文号 */
    regisTrationNumber?: string;
    /** 商品编号 */
    skuId?: string;
    /** 商品规格 */
    skuModel?: string;
    /** 商品名称 */
    skuName?: string;
    /** 商品名称拼音 */
    skuPinyin?: string;
    /** 仓库 */
    storeCode?: string;
    /** 仓库名称 */
    storeName?: string;
    /** 外部供应商id */
    supplierId?: string;
    /** 外部供应商名称 */
    supplierName?: string;
    /** 供货价格 */
    supplyPrice?: number;
  };

  type ConsignmentImportResultVO = {
    /** 导入成功列表 */
    data?: ConsignmentVO[];
    /** 失败数据url */
    downloadUrl?: string;
    /** 失败数量 */
    failQty?: number;
    /** 导入说明 */
    importInstruction?: string;
    /** 导入数量 */
    importQty?: number;
    /** 是否成功 */
    success?: boolean;
    /** 成功数量 */
    successQty?: number;
  };

  type ConsignmentInfoVO = {
    /** 条码 */
    barCode?: string;
    /** 创建时间 */
    createTime?: string;
    /** 创建人 */
    creater?: string;
    /** 创建人编码 */
    createrId?: string;
    /** 外部客户id */
    externalCusId?: string;
    /** 外部商品编码 */
    externalSkuId?: string;
    /** 编号 */
    id?: string;
    /** 厂家 */
    manufacturer?: string;
    /** 最后操作人 */
    operator?: string;
    /** 更新人编码 */
    operatorId?: string;
    /** 批准文号 */
    regisTrationNumber?: string;
    /** 商品编号 */
    skuId?: string;
    /** 商品规格 */
    skuModel?: string;
    /** 商品名称 */
    skuName?: string;
    /** 商品名称拼音 */
    skuPinyin?: string;
    /** 仓库 */
    storeCode?: string;
    /** 仓库名称 */
    storeName?: string;
    /** 外部供应商id */
    supplierId?: string;
    /** 外部供应商名称 */
    supplierName?: string;
    /** 供货价格 */
    supplyPrice?: number;
    /** 品供状态 0：未确认 1：已确认 2：已取消 */
    supplyStatus?: number;
    /** 品供状态 0：未确认 1：已确认 2：已取消名称 */
    supplyStatusName?: string;
    /** 品供关系更新时间 */
    supplyUpdateTime?: string;
  };

  type ConsignmentLogVo = {
    /** 变更后外部商品ID */
    afterExternalSkuId?: string;
    /** 变更后价格 */
    afterPrice?: number;
    /** 变更前外部商品ID */
    beforeExternalSkuId?: string;
    /** 变更前价格 */
    beforePrice?: number;
    /** 变更类型，1：新增 2：价格变更 3：关系变更 */
    changeType?: number;
    /** 变更类型 */
    changeTypeName?: string;
    /** 代销品目录单据id */
    consignmentId?: string;
    /** 操作时间 */
    createTime?: string;
    /** 备注 */
    remark?: string;
  };

  type ConsignmentPageLogQueryVO = {
    /** 变更后外部商品ID */
    afterExternalSkuId?: string;
    /** 变更后价格 */
    afterPrice?: number;
    /** 变更前外部商品ID */
    beforeExternalSkuId?: string;
    /** 变更前价格 */
    beforePrice?: number;
    /** 变更类型，1：新增 2：价格变更 3：关系变更 */
    changeType?: number;
    /** 创建时间 */
    createTime?: string;
    /** 结束时间 */
    endTime?: string;
    /** 代销品id */
    id?: string;
    pageQuery?: PageQuery;
    /** 备注 */
    remark?: string;
    /** 开始时间 */
    startTime?: string;
    /** 租户ID */
    tenantId?: string;
    /** 更新时间 */
    updateTime?: string;
  };

  type ConsignmentPageQueryVO = {
    /**  条码  */
    barCode?: string;
    /**  外部商品编码  */
    externalSkuId?: string;
    /** 代销品ids */
    ids?: number[];
    /** 是否已报价 1：已报价 0：未报价 */
    isQuotedPrice?: number;
    /** 更新结束时间 */
    maxUpdateTime?: string;
    /** 更新开始时间 */
    minUpdateTime?: string;
    pageQuery?: PageQuery;
    /**  批准文号  */
    regisTrationNumber?: string;
    /**  商品编号  */
    skuId?: string;
    /**  内部商品（名称/厂家/拼音码）  */
    skuKeyword?: string;
    /**  商品名称  */
    skuName?: string;
    /**  商品名称拼音  */
    skuPinyin?: string;
    /**  仓库  */
    storeCode?: string;
    /**  仓库名称  */
    storeName?: string;
    /**  供应商编码  */
    supplierId?: string;
    /**  供应商名称  */
    supplierName?: string;
    /**  品供状态 0：未确认 1：已确认 2：已取消  */
    supplyStatus?: number;
  };

  type ConsignmentVO = {
    /** 条码 */
    barCode?: string;
    /** 创建时间 */
    createTime?: string;
    /** 创建人 */
    creater?: string;
    /** 创建人编码 */
    createrId?: string;
    /** 外部商品条码 */
    externalBarCode?: string;
    /** 外部客户id */
    externalCusId?: string;
    /** 外部生产企业 */
    externalManufacturer?: string;
    /** 外部批准号 */
    externalRegisterNumber?: string;
    /** 外部商品编码 */
    externalSkuId?: string;
    /** 外部商品名称 */
    externalSkuName?: string;
    /** 编号 */
    id?: string;
    /** 是否处方药，1：是 0：不是 */
    isRx?: number;
    /** 厂家 */
    manufacturer?: string;
    /** 最后操作人 */
    operator?: string;
    /** 更新人编码 */
    operatorId?: string;
    /** 报价状态 0：未报价，1：已报价，2：取消报价 */
    quoteStatus?: number;
    /** 报价更新时间 */
    quoteUpdateTime?: string;
    /** 批准文号 */
    regisTrationNumber?: string;
    /** 商品编号 */
    skuId?: string;
    /** 商品规格 */
    skuModel?: string;
    /** 商品名称 */
    skuName?: string;
    /** 商品名称拼音 */
    skuPinyin?: string;
    /** 仓库 */
    storeCode?: string;
    /** 仓库名称 */
    storeName?: string;
    /** 外部供应商id */
    supplierId?: string;
    /** 外部供应商名称 */
    supplierName?: string;
    /** 供应商税号 */
    supplierTaxCode?: string;
    /** 供货价格 */
    supplyPrice?: number;
    /** 品供状态 0：未确认 1：已确认 2：已取消 */
    supplyStatus?: number;
    /** 品供关系更新时间 */
    supplyUpdateTime?: string;
    /** 租户id */
    tenantId?: string;
    /** 更新时间 */
    updateTime?: string;
  };

  type DirectAgreementCreateVO = {
    /** 协议名称 */
    agreementName?: string;
    /** 客户编码 */
    cusId?: string;
    /** 客户名称 */
    cusName?: string;
    /** 明细信息 */
    detail?: DirectAgreementDetailVO[];
    /** 直调协议附件 */
    directAgreementDoc?: string[];
    /** 采购开户银行 */
    purAccountBank?: string;
    /** 采购结算账户 */
    purAccountCode?: string;
    /** 采购账户名称 */
    purAccountName?: string;
    /** 委托人 */
    purContact?: string;
    /** 委托人id */
    purContactId?: string;
    /** 委托人电话 */
    purContactPhone?: string;
    /** 采购合同编号 */
    purContractCode?: string;
    /** 采购合同名称 */
    purContractName?: string;
    /** 采购信息附件 */
    purDoc?: string[];
    /** 采购其它说明 */
    purOther?: string;
    /** 采购付款方式 1-电汇 2-现金 */
    purPayWay?: number;
    /** 采购账期天数 */
    purPaymentDay?: number;
    /** 采购账期起算时间点 1-发货时间 2-收货时间 */
    purPaymentTimeType?: number;
    /** 采购账期结算方式 1-单结 2-月结 */
    purPaymentWay?: number;
    /** 采购预付金额 */
    purPrepayAmount?: number;
    /** 采购预付订单类型:0-普通类型 1-货到付款 */
    purPrepayOrderType?: number;
    /** 采购预付比例 */
    purPrepayRate?: number;
    /** 采购预付方式 1-按比例预付 2-按绝对值预付 */
    purPrepayWay?: number;
    /** 采购信息备注 */
    purRemark?: string;
    /** 采购结算方式 1--预付 2-账期 3-其他 */
    purSettleWay?: number;
    /** 备注 */
    remark?: string;
    /** 收货人 */
    saleAccepter?: string;
    /** 销售开户银行 */
    saleAccountBank?: string;
    /** 销售结算账户 */
    saleAccountCode?: string;
    /** 销售账户名称 */
    saleAccountName?: string;
    /** 详细地址 */
    saleAddress?: string;
    /** 销售收货地址表id */
    saleAddressId?: string;
    /** 区编码 */
    saleAreaId?: string;
    /** 区名称 */
    saleAreaName?: string;
    /** 市编号 */
    saleCityId?: string;
    /** 市名称 */
    saleCityName?: string;
    /** 联系人 */
    saleContactMan?: string;
    /** 销售联系人id */
    saleContactManId?: string;
    /** 销售联系人电话 */
    saleContactPhone?: string;
    /** 销售合同编号 */
    saleContractCode?: string;
    /** 销售合同名称 */
    saleContractName?: string;
    /** 签约主体 */
    saleContractSubject?: string;
    /** 销售信息附件 */
    saleDoc?: string[];
    /** 手机号码 */
    saleMobilePhone?: string;
    /** 销售付款方式 1-银行转账 2-支票 3-银行承兑汇票 4-现金 5-支付宝  */
    salePayWay?: number;
    /** 销售账期天数 */
    salePaymentDay?: number;
    /** 销售账期起算时间点 1-发货时间 2-收货时间 3-自然月 */
    salePaymentTimeType?: number;
    /** 销售账期结算方式 1-月结 2-单结 */
    salePaymentWay?: number;
    /** 销售预收金额 */
    salePrepayAmt?: number;
    /** 省编码 */
    saleProvinceId?: string;
    /** 省名称 */
    saleProvinceName?: string;
    /** 销售信息备注 */
    saleRemark?: string;
    /** 销售结算周期 */
    saleSettlePeriod?: number;
    /** 销售结算方式 1-账期 2-预付 */
    saleSettleWay?: number;
    /** 销售结算账户id */
    saleSettlementAccountId?: string;
    /** 街道/乡镇编号 */
    saleStreetId?: string;
    /** 街道/乡镇名称 */
    saleStreetName?: string;
    /** 联系电话 */
    saleTelephone?: string;
    /** 仓库编码 */
    storeCode?: string;
    /** 仓库名称 */
    storeName?: string;
    /** 供应商编码 */
    supplierId?: string;
    /** 供应商名称 */
    supplierName?: string;
  };

  type DirectAgreementDetailVO = {
    /** 直调协议id */
    directAgreementId?: string;
    /** 药物分类 */
    drugCategory?: string;
    /** id */
    id?: string;
    /** 商品批件过期标识 */
    isTagByExpiry?: boolean;
    /** 超出供应范围标识(GSP范围取消勾选标识) */
    isTagByGsp?: boolean;
    /** 超出供应范围标识（冰冻、冷藏） */
    isTagByOverGsp?: boolean;
    /** 停用标识 */
    isTagByStop?: boolean;
    /** 停购标识 */
    isTagByStopPurchase?: boolean;
    /** 商品解绑标识 */
    isTagByUnbind?: boolean;
    /** 生产厂家 */
    manufacturer?: string;
    /** 生产批号 */
    produceCode?: string;
    /** 金额 */
    purAmount?: number;
    /** 采购价 */
    purPrice?: number;
    /** 数量 */
    purQty?: number;
    /** 销售金额 */
    saleAmount?: number;
    /** 销售价 */
    salePrice?: number;
    /** 销售数量 */
    saleQty?: number;
    /** 商品编码 */
    skuId?: string;
    /** 规格 */
    skuModel?: string;
    /** 商品名称 */
    skuName?: string;
    /** 商品名称拼音 */
    skuPinyin?: string;
    /** 税率 */
    taxRate?: number;
    /** 单位名称 */
    unitName?: string;
  };

  type DirectAgreementInfoVO = {
    /** 协议日期 */
    agreementDate?: string;
    /** 协议名称 */
    agreementName?: string;
    /** 创建时间 */
    createTime?: string;
    /** 创建人 */
    creater?: string;
    /** 创建人id */
    createrId?: string;
    /** 客户编码 */
    cusId?: string;
    /** 客户名称 */
    cusName?: string;
    /** 明细信息 */
    detail?: DirectAgreementDetailVO[];
    /** 直调协议附件 */
    directAgreementDoc?: string[];
    /** 协议编号 */
    id?: string;
    /** 日志 */
    log?: OrderTraceVO[];
    /** 最后操作人 */
    operator?: string;
    /** 最后操作人id */
    operatorId?: string;
    /** 采购开户银行 */
    purAccountBank?: string;
    /** 采购结算账户 */
    purAccountCode?: string;
    /** 采购账户名称 */
    purAccountName?: string;
    /** 委托人 */
    purContact?: string;
    /** 委托人id */
    purContactId?: string;
    /** 委托人电话 */
    purContactPhone?: string;
    /** 采购合同编号 */
    purContractCode?: string;
    /** 采购合同日期 */
    purContractDate?: string;
    /** 采购合同名称 */
    purContractName?: string;
    /** 采购信息附件 */
    purDoc?: string[];
    /** 采购其它说明 */
    purOther?: string;
    /** 采购付款方式 1-电汇 2-现金 */
    purPayWay?: number;
    /** 采购付款方式 1-电汇 2-现金名称 */
    purPayWayName?: string;
    /** 采购账期天数 */
    purPaymentDay?: number;
    /** 采购账期起算时间点 1-发货时间 2-收货时间 */
    purPaymentTimeType?: number;
    /** 采购账期起算时间点 1-发货时间 2-收货时间名称 */
    purPaymentTimeTypeName?: string;
    /** 采购账期结算方式 1-单结 2-月结 */
    purPaymentWay?: number;
    /** 采购账期结算方式 1-单结 2-月结名称 */
    purPaymentWayName?: string;
    /** 采购预付金额 */
    purPrepayAmount?: number;
    /** 采购预付订单类型:0-普通类型 1-货到付款 */
    purPrepayOrderType?: number;
    /** 采购预付订单类型:0-普通类型 1-货到付款名称 */
    purPrepayOrderTypeName?: string;
    /** 采购预付比例 */
    purPrepayRate?: number;
    /** 采购预付方式 1-按比例预付 2-按绝对值预付 */
    purPrepayWay?: number;
    /** 采购预付方式 1-按比例预付 2-按绝对值预付名称 */
    purPrepayWayName?: string;
    /** 采购信息备注 */
    purRemark?: string;
    /** 采购结算方式 1--预付 2-账期 3-其他 */
    purSettleWay?: number;
    /** 采购结算方式 1--预付 2-账期 3-其他名称 */
    purSettleWayName?: string;
    /** 备注 */
    remark?: string;
    /** 审批完成时间 */
    reviewTime?: string;
    /** 销售收货人 */
    saleAccepter?: string;
    /** 销售开户银行 */
    saleAccountBank?: string;
    /** 销售结算账户 */
    saleAccountCode?: string;
    /** 销售账户名称 */
    saleAccountName?: string;
    /** 销售详细地址 */
    saleAddress?: string;
    /** 销售收货地址表id */
    saleAddressId?: string;
    /** 销售区编码 */
    saleAreaId?: string;
    /** 销售区名称 */
    saleAreaName?: string;
    /** 销售市编号 */
    saleCityId?: string;
    /** 销售市名称 */
    saleCityName?: string;
    /** 销售联系人 */
    saleContactMan?: string;
    /** 销售联系人id */
    saleContactManId?: string;
    /** 销售联系人电话 */
    saleContactPhone?: string;
    /** 销售合同编号 */
    saleContractCode?: string;
    /** 销售合同日期 */
    saleContractDate?: string;
    /** 销售合同到期日 */
    saleContractExpirationDate?: string;
    /** 销售合同名称 */
    saleContractName?: string;
    /** 销售签约主体 */
    saleContractSubject?: string;
    /** 销售信息附件 */
    saleDoc?: string[];
    /** 销售手机号码 */
    saleMobilePhone?: string;
    /** 销售付款方式 1-银行转账 2-支票 3-银行承兑汇票 4-现金 5-支付宝  */
    salePayWay?: number;
    /** 销售付款方式 1-银行转账 2-支票 3-银行承兑汇票 4-现金 5-支付宝 名称 */
    salePayWayName?: string;
    /** 销售账期天数 */
    salePaymentDay?: number;
    /** 销售账期起算时间点 1-发货时间 2-收货时间 3-自然月 */
    salePaymentTimeType?: number;
    /** 销售账期起算时间点 1-发货时间 2-收货时间 3-自然月名称 */
    salePaymentTimeTypeName?: string;
    /** 销售账期结算方式 1-月结 2-单结 */
    salePaymentWay?: number;
    /** 销售账期结算方式名称 */
    salePaymentWayName?: string;
    /** 销售预收金额 */
    salePrepayAmt?: number;
    /** 销售省编码 */
    saleProvinceId?: string;
    /** 销售省名称 */
    saleProvinceName?: string;
    /** 销售信息备注 */
    saleRemark?: string;
    /** 销售结算周期 */
    saleSettlePeriod?: number;
    /** 销售结算方式 1-账期 2-预付 */
    saleSettleWay?: number;
    /** 销售结算方式名称 */
    saleSettleWayName?: string;
    /** 销售结算账户id */
    saleSettlementAccountId?: string;
    /** 销售街道/乡镇编号 */
    saleStreetId?: string;
    /** 销售街道/乡镇名称 */
    saleStreetName?: string;
    /** 销售联系电话 */
    saleTelephone?: string;
    /** 状态:0-未提审,1-已提审 2-审核中 3-审核通过 4-已取消 */
    status?: number;
    /** 状态:0-未提审,1-已提审 2-审核中 3-审核通过 4-已取消名称 */
    statusName?: string;
    /** 仓库编码 */
    storeCode?: string;
    /** 仓库名称 */
    storeName?: string;
    /** 供应商编码 */
    supplierId?: string;
    /** 供应商名称 */
    supplierName?: string;
  };

  type DirectAgreementPageQueryVO = {
    /**  协议名称  */
    agreementName?: string;
    /**  制单人  */
    creater?: string;
    /**  客户搜索关键字（名称/编码）  */
    cusKeyword?: string;
    /**  协议编码  */
    id?: string;
    /**  结束协议日期  */
    maxAgreementDate?: string;
    /**  开始协议日期  */
    minAgreementDate?: string;
    pageQuery?: PageQuery;
    /**  采购合同编号  */
    purContractCode?: string;
    /**  销售合同编号  */
    saleContractCode?: string;
    /**  状态:0-未提审,1-已提审 2-审核中 3-审核通过 4-已取消  */
    status?: number;
    /**  仓库编码  */
    storeCode?: string;
    /**  供应商搜索关键字（名称/编码）  */
    supplierKeyword?: string;
  };

  type DirectAgreementUpdateVO = {
    /** 协议名称 */
    agreementName?: string;
    /** 客户编码 */
    cusId?: string;
    /** 客户名称 */
    cusName?: string;
    /** 明细信息 */
    detail?: DirectAgreementDetailVO[];
    /** 直调协议附件 */
    directAgreementDoc?: string[];
    /** 协议编码 */
    id: string;
    /** 采购开户银行 */
    purAccountBank?: string;
    /** 采购结算账户 */
    purAccountCode?: string;
    /** 采购账户名称 */
    purAccountName?: string;
    /** 委托人 */
    purContact?: string;
    /** 委托人id */
    purContactId?: string;
    /** 委托人电话 */
    purContactPhone?: string;
    /** 采购合同编号 */
    purContractCode?: string;
    /** 采购合同名称 */
    purContractName?: string;
    /** 采购信息附件 */
    purDoc?: string[];
    /** 采购其它说明 */
    purOther?: string;
    /** 采购付款方式 1-电汇 2-现金 */
    purPayWay?: number;
    /** 采购账期天数 */
    purPaymentDay?: number;
    /** 采购账期起算时间点 1-发货时间 2-收货时间 */
    purPaymentTimeType?: number;
    /** 采购账期结算方式 1-单结 2-月结 */
    purPaymentWay?: number;
    /** 采购预付金额 */
    purPrepayAmount?: number;
    /** 采购预付订单类型:0-普通类型 1-货到付款 */
    purPrepayOrderType?: number;
    /** 采购预付比例 */
    purPrepayRate?: number;
    /** 采购预付方式 1-按比例预付 2-按绝对值预付 */
    purPrepayWay?: number;
    /** 采购信息备注 */
    purRemark?: string;
    /** 采购结算方式 1--预付 2-账期 3-其他 */
    purSettleWay?: number;
    /** 备注 */
    remark?: string;
    /** 收货人 */
    saleAccepter?: string;
    /** 销售开户银行 */
    saleAccountBank?: string;
    /** 销售结算账户 */
    saleAccountCode?: string;
    /** 销售账户名称 */
    saleAccountName?: string;
    /** 详细地址 */
    saleAddress?: string;
    /** 销售收货地址表id */
    saleAddressId?: string;
    /** 区编码 */
    saleAreaId?: string;
    /** 区名称 */
    saleAreaName?: string;
    /** 市编号 */
    saleCityId?: string;
    /** 市名称 */
    saleCityName?: string;
    /** 联系人 */
    saleContactMan?: string;
    /** 销售联系人id */
    saleContactManId?: string;
    /** 销售联系人电话 */
    saleContactPhone?: string;
    /** 销售合同编号 */
    saleContractCode?: string;
    /** 销售合同名称 */
    saleContractName?: string;
    /** 签约主体 */
    saleContractSubject?: string;
    /** 销售信息附件 */
    saleDoc?: string[];
    /** 手机号码 */
    saleMobilePhone?: string;
    /** 销售付款方式 1-银行转账 2-支票 3-银行承兑汇票 4-现金 5-支付宝  */
    salePayWay?: number;
    /** 销售账期天数 */
    salePaymentDay?: number;
    /** 销售账期起算时间点 1-发货时间 2-收货时间 3-自然月 */
    salePaymentTimeType?: number;
    /** 销售账期结算方式 1-月结 2-单结 */
    salePaymentWay?: number;
    /** 销售预收金额 */
    salePrepayAmt?: number;
    /** 省编码 */
    saleProvinceId?: string;
    /** 省名称 */
    saleProvinceName?: string;
    /** 销售信息备注 */
    saleRemark?: string;
    /** 销售结算周期 */
    saleSettlePeriod?: number;
    /** 销售结算方式 1-账期 2-预付 */
    saleSettleWay?: number;
    /** 销售结算账户id */
    saleSettlementAccountId?: string;
    /** 街道/乡镇编号 */
    saleStreetId?: string;
    /** 街道/乡镇名称 */
    saleStreetName?: string;
    /** 联系电话 */
    saleTelephone?: string;
    /** 仓库编码 */
    storeCode?: string;
    /** 仓库名称 */
    storeName?: string;
    /** 供应商编码 */
    supplierId?: string;
    /** 供应商名称 */
    supplierName?: string;
  };

  type DirectAgreementVO = {
    /**  协议日期  */
    agreementDate?: string;
    /**  协议名称  */
    agreementName?: string;
    /**  创建时间  */
    createTime?: string;
    /**  制单人  */
    creater?: string;
    /**  客户编码  */
    cusId?: string;
    /**  客户名称  */
    cusName?: string;
    /**  协议编号  */
    id?: string;
    /**  采购开户银行  */
    purAccountBank?: string;
    /**  采购结算账户  */
    purAccountCode?: string;
    /**  采购账户名称  */
    purAccountName?: string;
    /**  采购合同编号  */
    purContractCode?: string;
    /**  采购合同日期  */
    purContractDate?: string;
    /**  采购合同名称  */
    purContractName?: string;
    /**  采购其它说明  */
    purOther?: string;
    /**  采购付款方式 1-电汇 2-现金  */
    purPayWay?: number;
    /**  采购账期天数  */
    purPaymentDay?: number;
    /**  采购账期起算时间点 1-发货时间 2-收货时间  */
    purPaymentTimeType?: number;
    /**  采购账期结算方式 1-单结 2-月结  */
    purPaymentWay?: number;
    /**  采购预付订单类型:0-普通类型 1-货到付款  */
    purPrepayOrderType?: number;
    /**  采购预付比例  */
    purPrepayRate?: number;
    /**  采购预付方式 1-按比例预付 2-按绝对值预付  */
    purPrepayWay?: number;
    /**  采购信息备注  */
    purRemark?: string;
    /**  采购结算方式 1--预付 2-账期 3-其他  */
    purSettleWay?: number;
    /**  备注  */
    remark?: string;
    /**  销售收货人  */
    saleAccepter?: string;
    /**  销售开户银行  */
    saleAccountBank?: string;
    /**  销售结算账户  */
    saleAccountCode?: string;
    /**  销售账户名称  */
    saleAccountName?: string;
    /**  销售详细地址  */
    saleAddress?: string;
    /**  销售收货地址表id  */
    saleAddressId?: string;
    /**  销售区编码  */
    saleAreaId?: string;
    /**  销售区名称  */
    saleAreaName?: string;
    /**  销售市编号  */
    saleCityId?: string;
    /**  销售市名称  */
    saleCityName?: string;
    /**  销售联系人  */
    saleContactMan?: string;
    /**  销售联系人电话  */
    saleContactPhone?: string;
    /**  销售合同编号  */
    saleContractCode?: string;
    /**  销售合同日期  */
    saleContractDate?: string;
    /**  销售合同到期日  */
    saleContractExpirationDate?: string;
    /**  销售合同名称  */
    saleContractName?: string;
    /**  销售签约主体  */
    saleContractSubject?: string;
    /**  销售手机号码  */
    saleMobilePhone?: string;
    /**  销售付款方式 1-银行转账 2-支票 3-银行承兑汇票 4-现金 5-支付宝   */
    salePayWay?: number;
    /**  销售账期天数  */
    salePaymentDay?: number;
    /**  销售账期起算时间点 1-发货时间 2-收货时间 3-自然月  */
    salePaymentTimeType?: number;
    /**  销售账期结算方式 1-月结 2-单结  */
    salePaymentWay?: number;
    /**  销售预收金额  */
    salePrepayAmt?: number;
    /**  销售省编码  */
    saleProvinceId?: string;
    /**  销售省名称  */
    saleProvinceName?: string;
    /**  销售信息备注  */
    saleRemark?: string;
    /**  销售结算周期  */
    saleSettlePeriod?: number;
    /**  销售结算方式 1-账期 2-预付  */
    saleSettleWay?: number;
    /**  销售街道/乡镇编号  */
    saleStreetId?: string;
    /**  销售街道/乡镇名称  */
    saleStreetName?: string;
    /**  销售联系电话  */
    saleTelephone?: string;
    /**  状态:0-未提审,1-已提审 2-审核中 3-审核通过 4-已取消  */
    status?: number;
    /**  仓库编码  */
    storeCode?: string;
    /**  仓库名称  */
    storeName?: string;
    /**  供应商编码  */
    supplierId?: string;
    /**  供应商名称  */
    supplierName?: string;
    /**  租户编码  */
    tenantId?: string;
  };

  type GspInPurRecordPageQueryVO = {
    /** 经营范围编码 */
    gspCategory?: string;
    /** 商品明细id */
    ids?: string[];
    /** 采购单号 */
    orderId?: string;
    pageQuery?: PageQuery;
    /** 采购日期起始 */
    purchaseTimeBegin?: string;
    /** 采购日期结束 */
    purchaseTimeEnd?: string;
    /** 批准文号 */
    regisTrationNumber?: string;
    /** 商品信息(商品名称/拼音码/编码) */
    skuInfo?: string;
    /** 仓库编码 */
    storeCode?: string;
    /** 供应商编码/名称 */
    supplier?: string;
    /** 通用名 */
    wareGeneralName?: string;
  };

  type GspInPurRecordVO = {
    /** 金额 */
    amount?: number;
    /** 采购日期 */
    createTime?: string;
    /** 剂型 */
    dosageFormName?: string;
    /** 经营范围 */
    gspCategoryName?: string;
    /** 商品明细id */
    id?: string;
    /** 厂家 */
    manufacturer?: string;
    /** 采购单号 */
    orderId?: string;
    /** 上市许可持有人 */
    permitHolder?: string;
    /** 单价 */
    price?: number;
    /** 指定批号 */
    produceCode?: string;
    /** 产地 */
    producingArea?: string;
    /** 采购数量 */
    qty?: number;
    /** 批准文号/注册证号 */
    regisTrationNumber?: string;
    /** 商品编码 */
    skuId?: string;
    /** 规格 */
    skuModel?: string;
    /** 商品名称 */
    skuName?: string;
    /** 仓库 */
    storeName?: string;
    /** 供货单位 */
    supplierName?: string;
    /** 单位 */
    unitName?: string;
    /** 通用名 */
    wareGeneralName?: string;
  };

  type ImportOperationPlanResultVO = {
    /** 计划明细信息 */
    approvalDetail?: OperationDetailApprovalCreateVO[];
    /** 导入成功列表 */
    data?: OperationPlanDetailVO[];
    /** 失败数据url */
    downloadUrl?: string;
    /** 失败数量 */
    failQty?: number;
    /** 导入说明 */
    importInstruction?: string;
    /** 导入数量 */
    importQty?: number;
    /** 计划月份表头 */
    monthHeaders?: string[];
    /** 是否成功 */
    success?: boolean;
    /** 成功数量 */
    successQty?: number;
  };

  type InventoryAmountChangeResult = {
    amount?: number;
    qty?: number;
    skuId?: string;
    skuName?: string;
  };

  type InvoiceAppCreateVO = {
    /** 账号 */
    account?: string;
    /** 地址 */
    address?: string;
    /** 价税合计 */
    amount: number;
    /** 开户行 */
    bankOfAccount?: string;
    /** 购买方 */
    company: string;
    /** 购买方id */
    companyId: string;
    /** 发票申请单勾稽商品 */
    details: InvoiceAppDetailCreateVO[];
    /** 发票图片 */
    docs?: InvoiceAppDocCreateVO[];
    /** 发票类别 */
    invoiceClass: number;
    /** 发票代码 */
    invoiceCode?: string;
    /** 开票日期 */
    invoiceDate: string;
    /** 发票号码 */
    invoiceNumber: string;
    /** 发票抬头 */
    invoiceTitle: string;
    /** 发票类型 */
    invoiceType: number;
    /** 不含税金额 */
    noTaxAmount: number;
    /** 随货同行单 */
    orderDocs?: InvoiceAppDocCreateVO[];
    /** 其他文档 */
    otherDocs?: InvoiceAppDocCreateVO[];
    /** 电话 */
    phone?: string;
    /** 供应商 */
    supplier: string;
    /** 供应商id */
    supplierId: string;
    /** 发票税额 */
    taxAmount: number;
    /** 纳税人识别号 */
    taxpayerId?: string;
  };

  type InvoiceAppDetailCreateVO = {
    /** 勾稽数量 */
    articulationQty: number;
    /** 出入库结果单批号id */
    bizStockResultProduceId: string;
    /** 是否调整 */
    changed?: boolean;
    /** 药品分类编码 */
    drugCategory?: string;
    /** 调整原因 */
    fixReason?: string;
    /** 调整后不含税金额 */
    noTaxAmtFix?: number;
    /** 原单号类型 1.采购入库单 2.采购出库单 */
    orderType: number;
    /** 原单号 */
    originalOrderId: string;
    /** WMS单据号 */
    outBizCode?: string;
    /** 调整后税额 */
    payTaxAmtFix?: number;
    /** 采购单价 */
    price: number;
    /** 采购订单号 */
    purOrderId: string;
    /** 商品编码 */
    skuId: string;
    /** 通知单号 */
    stockNoticeId?: string;
  };

  type InvoiceAppDetailFixVO = {
    /** 价税合计金额 */
    amount?: number;
    /** 勾稽数量 */
    articulationQty?: number;
    /** 出入库结果单批号id   此表wms_biz_stock_in_result_produce的主键 */
    bizStockResultProduceId?: string;
    /** 创建时间 */
    createTime?: string;
    /** 药品分类编码 */
    drugCategory?: string;
    /** 调整原因 */
    fixReason?: string;
    /** 发票勾稽单明细id */
    invoiceAppDetailId?: string;
    /** 发票勾稽单id */
    invoiceAppId?: string;
    /** 生产厂家 */
    manufacturer?: string;
    /** 不含税金额 */
    noTaxAmt?: number;
    /** 调整后不含税金额 */
    noTaxAmtFix?: number;
    /** 不含税单价 */
    noTaxPrice?: number;
    /** 调整后不含税单价 */
    noTaxPriceFix?: number;
    /** 最后操作人 */
    operator?: string;
    /** 最后操作人id */
    operatorId?: string;
    /** 原单号类型 1.采购入库单 2.采购出库单 */
    orderType?: number;
    /** 原单号 */
    originalOrderId?: string;
    /** WMS单据号 */
    outBizCode?: string;
    /** 税额 */
    payTaxAmt?: number;
    /** 调整后税额 */
    payTaxAmtFix?: number;
    /** 单价 */
    price?: number;
    /** 调整后单价 */
    priceFix?: number;
    /** 批号 */
    produceCode?: string;
    /** 采购单单号 */
    purOrderId?: string;
    /** 原单据数量 */
    qty?: number;
    /** 商品id */
    skuId?: string;
    /** 规格 */
    skuModel?: string;
    /** 商品名称 */
    skuName?: string;
    /** 通知单号 */
    stockNoticeId?: string;
    /** 单个商品税额 */
    taxPrice?: number;
    /** 调整后税额 */
    taxPriceFix?: number;
    /** 税率 */
    taxRate?: number;
    /** 单位 */
    unitCode?: string;
  };

  type InvoiceAppDetailVO = {
    /** 价税合计金额 */
    amount?: number;
    /** 勾稽数量 */
    articulationQty?: number;
    /** 出入库结果单批号id */
    bizStockResultProduceId: string;
    /** 可勾稽数量 */
    canArticulationQty?: number;
    /** 是否已变更 */
    changed?: boolean;
    /** 合同编号 */
    contractCode?: string;
    /** 创建时间 */
    createTime?: string;
    /** 药品分类编码 */
    drugCategory?: string;
    /** gsp类别名称 */
    gspCategoryName?: string;
    /** 发票勾稽单id */
    invoiceAppId?: string;
    /** 生产厂家 */
    manufacturer?: string;
    /** 不含税金额 */
    noTaxAmt?: number;
    /** 调整后不含税金额 */
    noTaxAmtFix?: number;
    /** 不含税单价 */
    noTaxPrice?: number;
    /** 原单号类型 1.采购入库单 2.采购出库单 */
    orderType: number;
    /** 原单号 */
    originalOrderId?: string;
    /** WMS单据号 */
    outBizCode?: string;
    /** 税额 */
    payTaxAmt?: number;
    /** 调整后税额 */
    payTaxAmtFix?: number;
    /** 单价 */
    price?: number;
    /** 价格调整单id */
    priceChangedId?: string[];
    /** 批号 */
    produceCode?: string;
    /** 采购单单号 */
    purOrderId?: string;
    /** 原单据数量 */
    qty?: number;
    /** 商品id */
    skuId?: string;
    /** 规格 */
    skuModel?: string;
    /** 商品名称 */
    skuName?: string;
    /** 通知单号 */
    stockNoticeId?: string;
    /** 单个商品税额 */
    taxPrice?: number;
    /** 税率 */
    taxRate?: number;
    /** 单位 */
    unitCode?: string;
  };

  type InvoiceAppDocCreateVO = {
    /** 发票图片地址 */
    docPath: string;
  };

  type InvoiceAppListVO = {
    /** 发票金额 */
    amount?: number;
    /** 是否勾稽 */
    articulation?: boolean;
    /** 创建时间 */
    createTime?: string;
    /** 创建人 */
    creater?: string;
    /** 创建人id */
    createrId?: string;
    /** 主键/单据编号 */
    id?: string;
    /** 发票类别 */
    invoiceClass?: number;
    /** 发票代码 */
    invoiceCode?: string;
    /** 发票号码 */
    invoiceNumber?: string;
    /** 发票抬头 */
    invoiceTitle?: string;
    /** 发票类型 */
    invoiceType?: number;
    /** 原单号 */
    originalOrderId?: string;
    /** 状态 */
    status?: number;
    /** 供应商 */
    supplier?: string;
    /** 供应商id */
    supplierId?: string;
  };

  type InvoiceAppLogVO = {
    /** 创建时间 */
    createTime?: string;
    /** 创建人 */
    creater?: string;
    /** 创建人id */
    createrId?: string;
    /** 发票勾稽单id */
    invoiceAppId?: string;
    /** 备注 */
    remark?: string;
    /** 状态 */
    status?: number;
  };

  type InvoiceAppOfSettlePageQueryVO = {
    /** 合同编号 */
    contractCode?: string;
    /** 开票日期-结束时间 */
    endCreateTime?: string;
    /** 单据id */
    invoiceAppId?: string;
    /** 发票类别 1蓝票 2红票 */
    invoiceClass?: number;
    /** 发票号码 */
    invoiceNumber?: string;
    /** 发票抬头 */
    invoiceTitle?: string;
    /** 发票类型 */
    invoiceType?: number;
    pageQuery?: PageQuery;
    /** 开票日期-开始时间 */
    startCreateTime?: string;
    /** 供应商 */
    supplier?: string;
    /** 供应商id */
    supplierId?: string;
  };

  type InvoiceAppPageQueryVO = {
    /** 勾稽状态 */
    articulation?: boolean;
    /** 创建人 */
    creater?: string;
    /** 创建人id */
    createrId?: string;
    /** 结束审核时间 */
    endApproveTime?: string;
    /** 生成结束日期 */
    endCreateTime?: string;
    /** 单据id */
    id?: string;
    /** 发票类别（1-蓝字 2-红字） */
    invoiceClass?: number;
    /** 发票代码 */
    invoiceCode?: string;
    /** 发票号码 */
    invoiceNumber?: string;
    /** 发票类型（1-普通发票 2-增值税专用发票） */
    invoiceType?: number;
    /** 原单号 */
    originalOrderId?: string;
    pageQuery?: PageQuery;
    /** 开始审核时间 */
    startApproveTime?: string;
    /** 生成开始日期 */
    startCreateTime?: string;
    /** 审核状态 0-未提审 1-已提审 2-审核通过 3-审核中 9-已取消 */
    status?: number;
    /** 供应商名称 */
    supplier?: string;
  };

  type InvoiceAppUpdateVO = {
    /** 账号 */
    account?: string;
    /** 地址 */
    address?: string;
    /** 价税合计 */
    amount: number;
    /** 开户行 */
    bankOfAccount?: string;
    /** 购买方 */
    company: string;
    /** 购买方id */
    companyId: string;
    /** 发票申请单勾稽商品 */
    details: InvoiceAppDetailCreateVO[];
    /** 发票图片 */
    docs?: InvoiceAppDocCreateVO[];
    /** id */
    id: string;
    /** 发票类别 */
    invoiceClass: number;
    /** 发票代码 */
    invoiceCode?: string;
    /** 开票日期 */
    invoiceDate: string;
    /** 发票号码 */
    invoiceNumber: string;
    /** 发票抬头 */
    invoiceTitle: string;
    /** 发票类型 */
    invoiceType: number;
    /** 不含税金额 */
    noTaxAmount: number;
    /** 随货同行单 */
    orderDocs?: InvoiceAppDocCreateVO[];
    /** 其他文档 */
    otherDocs?: InvoiceAppDocCreateVO[];
    /** 电话 */
    phone?: string;
    /** 是否刷新成本价 */
    refreshCostPrice?: boolean;
    /** 供应商 */
    supplier: string;
    /** 供应商id */
    supplierId: string;
    /** 发票税额 */
    taxAmount: number;
    /** 纳税人识别号 */
    taxpayerId?: string;
  };

  type InvoiceAppVO = {
    /** 账号 */
    account?: string;
    /** 地址 */
    address?: string;
    /** 价税合计 */
    amount?: number;
    /** 审核人编码 */
    approve?: string;
    /** 审核人名称 */
    approveName?: string;
    /** 审核时间 */
    approveTime?: string;
    /** 是否勾稽 */
    articulation?: boolean;
    /** 开户行 */
    bankOfAccount?: string;
    /** 购买方 */
    company?: string;
    /** 购买方id */
    companyId?: string;
    /** 创建时间 */
    createTime?: string;
    /** 创建人 */
    creater?: string;
    /** 创建人id */
    createrId?: string;
    /** 发票商品勾稽明细 */
    detailList?: InvoiceAppDetailVO[];
    /** 明细价税合计 */
    detailTotalAmount?: number;
    /** 明细不含税金额合计 */
    detailTotalNoTaxAmount?: number;
    /** 明细税额合计 */
    detailTotalTaxAmount?: number;
    /** 发票勾稽文档 */
    docList?: string[];
    /** 审核失败原因 */
    failCause?: string;
    /** 发票调整单 */
    fixDetailList?: InvoiceAppDetailFixVO[];
    /** 发票类别 */
    invoiceClass?: number;
    /** 发票代码 */
    invoiceCode?: string;
    /** 开票日期 */
    invoiceDate?: string;
    /** 发票号码 */
    invoiceNumber?: string;
    /** 发票抬头 */
    invoiceTitle?: string;
    /** 发票类型 */
    invoiceType?: number;
    /** 操作日志 */
    logList?: OrderTraceVO[];
    /** 不含税金额 */
    noTaxAmount?: number;
    /** 随货同行单 */
    orderDocs?: string[];
    /** 其他文档 */
    otherDocs?: string[];
    /** 电话 */
    phone?: string;
    /** 发票税率 */
    rate?: number;
    /** 状态 */
    status?: number;
    /** 供应商 */
    supplier?: string;
    /** 供应商id */
    supplierId?: string;
    /** 发票税额 */
    taxAmount?: number;
    /** 纳税人识别号 */
    taxpayerId?: string;
  };

  type InvoiceBizResultSelectVO = {
    /** 出入库结果单据id */
    id: string;
    /** 采购订单id */
    purOrderId: string;
    /** 类型 */
    type: number;
  };

  type OperationDetailApprovalCreateVO = {
    /** 第一个月期末库存金额 */
    firstMonthEndStockAmount?: number;
    /** 第一个月采购金额 */
    firstMonthPurchaseAmount?: number;
    /** 第一个月采购数量 */
    firstMonthPurchaseNum?: number;
    /** 第一个月销售金额 */
    firstMonthSaleAmount?: number;
    /** 第一个月销售数量 */
    firstMonthSaleNum?: number;
    /** 第一个月销售单价 */
    firstMonthSalePrice?: number;
    /** 第一个月库存数量 */
    firstMonthStockNum?: number;
    /** 编号 */
    id?: string;
    /** 厂家 */
    manufacturer?: string;
    /** 计划编号 */
    planId?: string;
    /** 前3个月平均销售数量 */
    prev3MonthAverageSaleNum?: number;
    /** 单价 */
    price?: number;
    /** 项目编号 */
    projectId?: string;
    /** 第二个月期末库存金额 */
    secondMonthEndStockAmount?: number;
    /** 第二个月采购金额 */
    secondMonthPurchaseAmount?: number;
    /** 第二个月采购数量 */
    secondMonthPurchaseNum?: number;
    /** 第二个月销售金额 */
    secondMonthSaleAmount?: number;
    /** 第二个月销售数量 */
    secondMonthSaleNum?: number;
    /** 第二个月销售单价 */
    secondMonthSalePrice?: number;
    /** 第二个月库存数量 */
    secondMonthStockNum?: number;
    /** 商品编号 */
    skuId?: string;
    /** 商品规格 */
    skuModel?: string;
    /** 商品名称 */
    skuName?: string;
    /** 库存金额 */
    stockAmount?: number;
    /** 库存数量 */
    stockNum?: number;
    /** 第三个月期末库存金额 */
    thirdMonthEndStockAmount?: number;
    /** 第三个月采购金额 */
    thirdMonthPurchaseAmount?: number;
    /** 第三个月采购数量 */
    thirdMonthPurchaseNum?: number;
    /** 第三个月销售金额 */
    thirdMonthSaleAmount?: number;
    /** 第三个月销售数量 */
    thirdMonthSaleNum?: number;
    /** 第三个月销售单价 */
    thirdMonthSalePrice?: number;
    /** 第三个月库存数量 */
    thirdMonthStockNum?: number;
    /** 商品通用名 */
    wareGeneralName?: string;
  };

  type OperationPlanCoverTipVO = {
    /** 覆盖计划编号 */
    coverPlanIds?: string[];
    /** 计划月被覆盖提示 */
    coverTip?: string;
  };

  type OperationPlanCreateVO = {
    /** 计划新增临时额度（元） */
    addTempAmount?: number;
    /** 计划明细信息 */
    approvalDetail?: OperationDetailApprovalCreateVO[];
    /** 附件文档 */
    attachmentDocs?: OperationPlanDocCreateVO[];
    /** 运营商名称 */
    carrierOperator?: string;
    /** 计划结束月份2022-11 */
    endMonth?: string;
    /** 计划明细信息 */
    planDetail?: OperationPlanDetailVO[];
    /** 期初敞口额度（元） */
    projectBeginOpenAmount?: number;
    /** 项目编号 */
    projectId?: string;
    /** 项目负责人ID */
    projectLeaderId?: string;
    /** 项目名称 */
    projectName?: string;
    /** 项目申请敞口总额度（元） */
    projectOpenTotalAmount?: number;
    /** 项目所属年度 */
    projectYear?: number;
    /** 计划敞口剩余额度（元） */
    remainOpenAmount?: number;
    /** 备注 */
    remark?: string;
    /** 审核时间 */
    reviewTime?: string;
    /** 计划开始月份2022-09 */
    startMonth?: string;
    /** 计划使用敞口额度（元） */
    useOpenAmount?: number;
  };

  type OperationPlanDetailVO = {
    /** 厂家 */
    manufacturer?: string;
    /** 月份表头 */
    monthHeaders?: string[];
    /** 每个月份的计划值 */
    planValues?: OperationPlanValueVO[];
    /** 前3个月平均销售数量 */
    prev3MonthAverageSaleNum?: number;
    /** 单价 */
    price?: number;
    /** 商品编号 */
    skuId?: string;
    /** 商品规格 */
    skuModel?: string;
    /** 商品名称 */
    skuName?: string;
    /** 库存金额 */
    stockAmount?: number;
    /** 库存数量 */
    stockNum?: number;
    /** 商品通用名 */
    wareGeneralName?: string;
  };

  type OperationPlanDocCreateVO = {
    /** 附件地址 */
    docPath?: string;
  };

  type OperationPlanGetTemplateVO = {
    /** 计划结束月份 */
    planEndMonth: string;
    /** 计划编号 */
    planId?: string;
    /** 计划开始月份 */
    planStartMonth: string;
    /** 项目编号 */
    projectId: string;
  };

  type OperationPlanInfoVO = {
    /** 计划新增临时额度（万元） */
    addTempAmount?: number;
    /** 计划明细信息 */
    approvalDetail?: OperationDetailApprovalCreateVO[];
    /** 附件 */
    attachmentDocs?: OperationPlanDocCreateVO[];
    /** 运营商名称 */
    carrierOperator?: string;
    /** 创建时间 */
    createTime?: string;
    /** 创建人（申请人） */
    creater?: string;
    /** 创建人ID（申请人ID） */
    createrId?: string;
    /** 计划结算月份2022-11 */
    endMonth?: string;
    /** 运营计划编号 */
    id?: string;
    /** 日志 */
    log?: OrderTraceVO[];
    /** 计划月份表头 */
    monthHeaders?: string[];
    /** 最后修改人 */
    operater?: string;
    /** 最后修改人Id */
    operaterId?: string;
    planCoverTip?: OperationPlanCoverTipVO;
    /** 计划明细信息 */
    planDetail?: OperationPlanDetailVO[];
    /** 期初敞口额度（万元） */
    projectBeginOpenAmount?: number;
    /** 项目编号 */
    projectId?: string;
    /** 项目负责人ID */
    projectLeaderId?: string;
    /**  项目负责人  */
    projectLeaderName?: string;
    /** 项目名称 */
    projectName?: string;
    /** 项目申请敞口总额度（万元） */
    projectOpenTotalAmount?: number;
    /** 项目状态(0.未开始 1.进行中 2停止) */
    projectStatus?: number;
    /** 项目所属年度 */
    projectYear?: number;
    /** 计划敞口剩余额度（万元） */
    remainOpenAmount?: number;
    /** 备注 */
    remark?: string;
    /** 审核时间 */
    reviewTime?: string;
    /** 计划开始月份2022-09 */
    startMonth?: string;
    /** 单据状态 0-未提审 1-已提审 2-审核中 3-审核通过 4-已取消 5-审批不通过 */
    status?: number;
    /** 计划使用敞口额度（万元） */
    useOpenAmount?: number;
  };

  type OperationPlanPageQueryVO = {
    /**  计划新增临时额度（万元）  */
    addTempAmount?: number;
    /**  运营商名称  */
    carrierOperator?: string;
    /**  创建人（申请人）  */
    creater?: string;
    /**  创建人ID（申请人ID）  */
    createrId?: string;
    /**  计划结算月份2022-11  */
    endMonth?: string;
    /**  运营计划编号  */
    id?: string;
    /** 结束时间 */
    maxCreateTime?: string;
    /** 开始时间 */
    minCreateTime?: string;
    /** 多选项目状态(0.未开始 1.进行中 2停止) */
    multiProjectStatus?: number[];
    /**  最后修改人  */
    operator?: string;
    /**  最后修改人Id  */
    operatorId?: string;
    pageQuery?: PageQuery;
    /**  期初敞口额度（万元）  */
    projectBeginOpenAmount?: number;
    /**  项目编号  */
    projectId?: string;
    /**  项目负责人ID  */
    projectLeaderId?: string;
    /**  项目名称  */
    projectName?: string;
    /**  项目申请敞口总额度（万元）  */
    projectOpenTotalAmount?: number;
    /** 项目状态(0.未开始 1.进行中 2停止) */
    projectStatus?: number;
    /**  项目所属年度  */
    projectYear?: number;
    /**  计划敞口剩余额度（万元）  */
    remainOpenAmount?: number;
    /**  备注  */
    remark?: string;
    /**  审核时间  */
    reviewTime?: string;
    /**  计划开始月份2022-09  */
    startMonth?: string;
    /**  单据状态 0-未提审 1-已提审 2-审核中 3-审核通过 4-已取消 5-审批不通过  */
    status?: number;
    /**  租户  */
    tenantId?: string;
    /**  修改时间  */
    updateTime?: string;
    /**  计划使用敞口额度（万元）  */
    useOpenAmount?: number;
  };

  type OperationPlanUpdateVO = {
    /** 计划新增临时额度（元） */
    addTempAmount?: number;
    /** 计划明细信息 */
    approvalDetail?: OperationDetailApprovalCreateVO[];
    /** 附件文档 */
    attachmentDocs?: OperationPlanDocCreateVO[];
    /** 运营商名称 */
    carrierOperator?: string;
    /** 计划结束月份2022-11 */
    endMonth?: string;
    /** id */
    id: string;
    /** 计划明细信息 */
    planDetail?: OperationPlanDetailVO[];
    /** 期初敞口额度（元） */
    projectBeginOpenAmount?: number;
    /** 项目编号 */
    projectId?: string;
    /** 项目负责人ID */
    projectLeaderId?: string;
    /** 项目名称 */
    projectName?: string;
    /** 项目申请敞口总额度（元） */
    projectOpenTotalAmount?: number;
    /** 项目所属年度 */
    projectYear?: number;
    /** 计划敞口剩余额度（元） */
    remainOpenAmount?: number;
    /** 备注 */
    remark?: string;
    /** 审核时间 */
    reviewTime?: string;
    /** 计划开始月份2022-09 */
    startMonth?: string;
    /** 计划使用敞口额度（元） */
    useOpenAmount?: number;
  };

  type OperationPlanVO = {
    /**  计划新增临时额度（万元）  */
    addTempAmount?: number;
    /**  运营商名称  */
    carrierOperator?: string;
    /**  创建时间  */
    createTime?: string;
    /**  创建人（申请人）  */
    creater?: string;
    /**  创建人ID（申请人ID）  */
    createrId?: string;
    /**  计划结算月份2022-11  */
    endMonth?: string;
    /**  运营计划编号  */
    id?: string;
    /**  最后修改人  */
    operator?: string;
    /**  最后修改人Id  */
    operatorId?: string;
    planCoverTip?: OperationPlanCoverTipVO;
    /**  期初敞口额度（万元）  */
    projectBeginOpenAmount?: number;
    /**  项目编号  */
    projectId?: string;
    /**  项目负责人ID  */
    projectLeaderId?: string;
    /**  项目负责人  */
    projectLeaderName?: string;
    /**  项目名称  */
    projectName?: string;
    /**  项目申请敞口总额度（万元）  */
    projectOpenTotalAmount?: number;
    /** 项目状态(0.未开始 1.进行中 2停止) */
    projectStatus?: number;
    /**  项目所属年度  */
    projectYear?: number;
    /**  计划敞口剩余额度（万元）  */
    remainOpenAmount?: number;
    /**  备注  */
    remark?: string;
    /**  审核时间  */
    reviewTime?: string;
    /**  计划开始月份2022-09  */
    startMonth?: string;
    /**  单据状态 0-未提审 1-已提审 2-审核中 3-审核通过 4-已取消 5-审批不通过  */
    status?: number;
    /**  租户  */
    tenantId?: string;
    /**  修改时间  */
    updateTime?: string;
    /**  计划使用敞口额度（万元）  */
    useOpenAmount?: number;
  };

  type OperationPlanValueVO = {
    /** M月采购金额 */
    purchaseAmountM?: number;
    /** M月采购数量 */
    purchaseNumM?: number;
    /** M月销售金额 */
    saleAmountM?: number;
    /** M月销售数量 */
    saleNumM?: number;
    /** M月销售单价 */
    salePriceM?: number;
    /** M月期末库存金额 */
    stockAmountM?: number;
    /** M月库存数量 */
    stockNumM?: number;
  };

  type OrderDetailsListVO = {
    /** 药品分类 */
    categoryText?: string;
    /** 药品分类 */
    drugCategory?: string;
    /** 主键 */
    id?: string;
    /** 厂家 */
    manufacturer?: string;
    /** 未通知收货数量 */
    noNoticeQty?: number;
    /** 收货数量 */
    noticeQty?: number;
    /** 采购价 */
    price?: number;
    /** 批号 */
    produceCode?: string;
    /** 采购数量 */
    qty?: number;
    /** 税率 */
    rate?: number;
    /** 实际入库数量 */
    reallyInQty?: number;
    /** 商品编码 */
    skuId?: string;
    /** 商品规格 */
    skuModel?: string;
    /** 商品名称 */
    skuName?: string;
    /** 税收分类编码 */
    taxClassificationCode?: string;
    /** 税率（不同字段覆盖，与rate一致） */
    taxRate?: number;
    /** 单位 */
    unit?: string;
  };

  type OrderDetailsPageQueryVO = {
    /** 商品搜索关键字（商品名称/商品编码） */
    keyword?: string;
    /** 厂家 */
    manufacturer?: string;
    /** 采购单号 */
    orderId?: string;
    pageQuery?: PageQuery;
  };

  type OrderDetailsVO = {
    /** 金额 */
    amount?: number;
    /** 条形码 */
    barCode: string;
    /** 药品分类 */
    drugCategory?: string;
    /** id */
    id?: string;
    /** 商品批件过期标识 */
    isTagByExpiry?: boolean;
    /** 超出供应范围标识(GSP范围取消勾选标识) */
    isTagByGsp?: boolean;
    /** 超出供应范围标识（冰冻、冷藏） */
    isTagByOverGsp?: boolean;
    /** 停用标识 */
    isTagByStop?: boolean;
    /** 停购标识 */
    isTagByStopPurchase?: boolean;
    /** 商品解绑标识 */
    isTagByUnbind?: boolean;
    /** 生产厂家 */
    manufacturer: string;
    /** 预付申请备注 */
    prepayApplyRemark?: string;
    /** 采购价 */
    price: number;
    /** 生产批号 */
    produceCode?: string;
    /** 已采购数量 */
    purchasingQty?: number;
    /** 数量 */
    qty: number;
    /** 税率 */
    rate?: number;
    /** 来源单据子表id */
    relatedSubId?: string;
    /** 可采数量 */
    remainingQty?: number;
    /** 备注 */
    remark?: string;
    /** 商品编码 */
    skuId: string;
    /** 规格 */
    skuModel: string;
    /** 商品名称 */
    skuName: string;
    /** 商品拼音 */
    skuPinyin: string;
    /** 通知单号 */
    stockNoticeId?: string;
    /** 单据编号 */
    stockResultId?: string;
    /** 合同采购数量 */
    totalQty?: number;
    /** 1-采购入库, -1-采退出库 */
    type?: number;
    /** 单位名称 */
    unit?: string;
    /** 有效期 */
    validPeriod?: number;
  };

  type OrderImportVO = {
    /** 条形码 */
    barCode?: string;
    /** 药品分类 */
    drugCategory?: string;
    /** 生产厂家 */
    manufacturer?: string;
    /** 单价 */
    price?: number;
    /** 批号 */
    produceCode?: string;
    /** 合同已采数量 */
    purchasingQty?: number;
    /** 数量 */
    qty?: number;
    /** 合同可采数量 */
    remainingQty?: number;
    /** 商品编码 */
    skuId?: string;
    /** 规格 */
    skuModel?: string;
    /** 商品名称 */
    skuName?: string;
    /** 商品拼音 */
    skuPinyin?: string;
    /** 税率 */
    taxRate?: number;
    /** 合同数量 */
    totalQty?: number;
    /** 单位名称 */
    unitName?: string;
    /** 包装规格 */
    wholeThing?: string;
  };

  type OrderInfoVO = {
    /** 开户银行 */
    accountBank?: string;
    /** 结算账户 */
    accountCode?: string;
    /** 账户名称 */
    accountName?: string;
    /** 入库单号 */
    bizInResultIds?: string;
    /** 入库信息 */
    bizStockInResultInfoList?: BizStockInResultInfoVO[];
    /** 联系人 */
    contact?: string;
    /** 联系人id */
    contactId?: string;
    /** 联系人手机号码 */
    contactPhone?: string;
    /** 合同编号 */
    contractCode?: string;
    /** 合同id */
    contractId?: string;
    /** 合同名称 */
    contractTitle?: string;
    /** 合同类型(0订单合同 1年度合同) */
    contractType?: number;
    /** 创建人 */
    creater?: string;
    /** 创建人id */
    createrId?: string;
    /** 客户集编码 */
    demandOrgCode?: string;
    /** 客户集名称 */
    demandOrgName?: string;
    /** 订单明细 */
    details?: OrderDetailsVO[];
    /** 合同有效期至 */
    expirationDate?: string;
    /** 框架合同-没有商品 */
    frameworkContract?: boolean;
    /** 采购订单id */
    id?: string;
    /** 未申请预付金额 */
    leftPrepayAmt?: number;
    /** 操作日志 */
    logList?: OrderTraceVO[];
    /** 订单类型 */
    orderType: number;
    /** 其他说明 */
    other?: string;
    /** 付款方式 1-电汇 2-现金 */
    payWay?: number;
    /** 付款方式 1-电汇 2-现金名称 */
    payWayName?: string;
    /** 账期天数 */
    paymentDay?: number;
    /** 账期起算时间点 1-发货时间 2-收货时间 */
    paymentTimeType?: number;
    /** 账期起算时间点描述 1-发货时间 2-收货时间 */
    paymentTimeTypeName?: string;
    /** 账期结算方式 1-单结 2-月结 */
    paymentWay?: number;
    /** 账期结算方式描述 1-单结 2-月结 */
    paymentWayName?: string;
    /** 预付金额 */
    prepayAmount?: number;
    /** 预付申请单 */
    prepayApplyList?: PrepayApplyVO[];
    /** 预付订单类型:0-普通类型 1-货到付款 */
    prepayOrderType?: number;
    /** 预付类型名称 */
    prepayOrderTypeName?: string;
    /** 预付比例 */
    prepayRate?: number;
    /** 预付方式类型 1-按比例预付 2-按金额金额预付 */
    prepayWay?: number;
    /** 项目敞口id */
    projectCreditId?: string;
    /** 所属项目id */
    projectInfoId?: string;
    /** 项目名称 */
    projectName?: string;
    /** 预计到货日期 */
    receiveDate?: string;
    /** 备注 */
    remark?: string;
    /** 结算到期日 */
    settleDueDate?: number;
    /** 结算方式 1--预付 2-账期 3-其他 */
    settleWay?: number;
    /** 结算方式描述 1--预付 2-账期 3-其他 */
    settleWayName?: string;
    /** 状态 0: 未审核 1：已审核 2：已取消 */
    status?: number;
    /** 收货通知单号 */
    stockNoticeIds?: string;
    /** 物理仓编码 */
    storeCode?: string;
    /** 物理仓名称 */
    storeName?: string;
    /** 已申请预付金额 */
    submitPrepayAmt?: number;
    /** 供应商编码 */
    supplierId?: string;
    /** 供应商名称 */
    supplierName?: string;
    /** 警告提示 */
    warningTip?: string;
    /** 是否直调 */
    zdAgreement?: boolean;
    /** 直调协议id */
    zdAgreementId?: string;
  };

  type OrderItem = {
    asc?: boolean;
    column?: string;
  };

  type OrderListVO = {
    /** 是否审核 */
    check?: boolean;
    /** 审核时间 */
    checkTime?: string;
    /** 审核人 */
    checker?: string;
    /** 审核人编号 */
    checkerId?: string;
    /** 联系人 */
    contact?: string;
    /** 联系人手机号码 */
    contactPhone?: string;
    /** 发票编号 */
    contractCode?: string;
    /** 创建时间 */
    createTime?: string;
    /** 创建人 */
    creater?: string;
    /** 创建人id */
    createrId?: string;
    /** 客户集编码 */
    demandOrgCode?: string;
    /** 客户集名称 */
    demandOrgName?: string;
    /** 审批流程状态 0：未提审 1：默认审批流程 2：高管审批流程 */
    flowStatus?: number;
    /** 采购单号 */
    id?: string;
    /** 入库状态 0 全部未通知入库  1 部分通知入库 2 全部通知入库 */
    inStatus?: number;
    /** 未申请预付金额 */
    leftPrepayAmt?: number;
    /** 订单类型 */
    orderType?: number;
    /** 付款方式 1-电汇 2-现金 */
    payWay?: number;
    /** 预付款金额 */
    prepayAmount?: number;
    /** 预付订单类型:0-普通类型 1-货到付款 */
    prepayOrderType?: number;
    /** 预付类型名称 */
    prepayOrderTypeName?: string;
    /** 订单进入预付流程 */
    prepayProcess?: boolean;
    /** 项目id */
    projectInfoId?: string;
    /** 项目名称 */
    projectName?: string;
    /** 接收状态 */
    receiveStatus?: number;
    /** 来源单据id */
    relatedId?: string;
    /** 来源单据类型 */
    relatedType?: number;
    /** 备注 */
    remark?: string;
    /** 结算方式 1--预付 2-账期 3-其他 */
    settleWay?: number;
    /** 结算方式描述 1--预付 2-账期 3-其他 */
    settleWayName?: string;
    /** 状态 */
    status?: number;
    /** 物理仓编码 */
    storeCode?: string;
    /** 物理仓名称 */
    storeName?: string;
    /** 已申请预付金额 */
    submitPrepayAmt?: number;
    /** 供应商编码 */
    supplierId?: string;
    /** 供应商名称 */
    supplierName?: string;
    /** 订单总额 */
    totalAmount?: number;
    /** 是否直调 */
    zdAgreement?: boolean;
    /** 直调协议id */
    zdAgreementId?: string;
  };

  type OrderTraceQueryVO = {
    /** 操作人 */
    creater?: string;
    /** 结束操作时间 */
    endCreateTime?: string;
    /** 供应商id/订单编码 */
    idCode?: string;
    /** 操作模块：1 供应商 2 采购订单 3 采退服务单 4 发票勾稽 5 采购计划 6 采购合同 7 采购预付申请单 8 采购结算申请单 9 供应商变更单10 入库调价单 11 项目管理 12 项目业务员 13 采购员项目订阅 14 项目运营计划 15 供应商商品订阅 */
    module?: number;
    /** 开始操作时间 */
    startCreateTime?: string;
  };

  type OrderTraceVO = {
    /** 创建时间 */
    createTime?: string;
    /** 创建人 */
    creater?: string;
    /** 创建人编码 */
    createrId?: string;
    /** 主键 */
    id?: string;
    /** 描述/操作详情 */
    logDesc?: string;
    /** 操作 */
    operateDesc?: string;
  };

  type OrderVO = {
    /** 开户银行 */
    accountBank?: string;
    /** 结算账户 */
    accountCode?: string;
    /** 账户名称 */
    accountName?: string;
    /** 联系人 */
    contact?: string;
    /** 联系人id */
    contactId?: string;
    /** 联系人手机号码 */
    contactPhone?: string;
    /** 合同编号 */
    contractCode?: string;
    /** 采购合同id */
    contractId?: string;
    /** 创建人 */
    creater?: string;
    /** 创建人id */
    createrId?: string;
    /** 客户集编码 */
    demandOrgCode?: string;
    /** 客户集名称 */
    demandOrgName?: string;
    /** 订单明细 */
    details: OrderDetailsVO[];
    /** 采购订单id */
    id?: string;
    /** 其他说明 */
    other?: string;
    /** 付款方式 1-电汇 2-现金,3-银行转账 4-银行承兑汇票 */
    payWay?: number;
    /** 账期天数 */
    paymentDay?: number;
    /** 账期起算时间点 1-发货时间 2-收货时间 */
    paymentTimeType?: number;
    /** 账期结算方式 1-单结 2-月结 */
    paymentWay?: number;
    /** 预付金额 */
    prepayAmount?: number;
    /** 预付订单类型:0-普通类型 1-货到付款 */
    prepayOrderType?: number;
    /** 预付比例 */
    prepayRate?: number;
    /** 预付方式类型 1-按比例预付 2-按金额金额预付 */
    prepayWay?: number;
    /** 所属项目id */
    projectInfoId?: string;
    /** 项目名称 */
    projectName?: string;
    /** 预计到货日期 */
    receiveDate?: string;
    /** 备注 */
    remark?: string;
    /** 结算到期日 */
    settleDueDate?: number;
    /** 结算方式 1--预付 2-账期 3-其他 */
    settleWay?: number;
    /** 物理仓编码 */
    storeCode: string;
    /** 物理仓名称 */
    storeName: string;
    /** 供应商编码 */
    supplierId: string;
    /** 供应商名称 */
    supplierName: string;
  };

  type OrderVOPageQuery = {
    /** 是否审核 */
    check?: boolean;
    /** 审核人 */
    checker?: string;
    /** 审核人编号 */
    checkerId?: string;
    /** 联系人 */
    contact?: string;
    /** 联系人手机号码 */
    contactPhone?: string;
    /** 合同编号 */
    contractCode?: string;
    /** 创建人 */
    creater?: string;
    /** 创建人id */
    createrId?: string;
    /** 用户id */
    cusId?: string;
    /** 客户集编码 */
    demandOrgCode?: string;
    /** 客户集名称 */
    demandOrgName?: string;
    /** 审核时间 */
    endCheckTime?: string;
    /** 创建时间 */
    endCreateTime?: string;
    /** 采购单号 */
    id?: string;
    /** 订单类型 */
    orderType?: number;
    pageQuery?: PageQuery;
    /** 付款状态 */
    paymentStatus?: number;
    /** 预付订单类型:0-普通类型 1-货到付款 */
    prepayOrderType?: number;
    /** 项目id */
    projectInfoId?: string;
    /** 来源单据id */
    relatedId?: string;
    /** 来源单据类型 */
    relatedType?: number;
    /** 结算方式 1--预付 2-账期 3-其他 */
    settleWay?: number;
    /** 商品编码 */
    skuId?: string;
    /** 审核时间 */
    startCheckTime?: string;
    /** 创建时间 */
    startCreateTime?: string;
    /** 状态 0: 未审核 1：已审核 2：已取消 */
    status?: number;
    /** 供应商编码 */
    supplierId?: string;
    /** 供应商名称 */
    supplierName?: string;
    /** 是否直调 */
    zdAgreement?: boolean;
    /** 直调协议id */
    zdAgreementId?: string;
  };

  type PageQuery = {
    current?: number;
    orders?: OrderItem[];
    size?: number;
  };

  type PoFlowInstanceProcessVO = {
    /** 审核结果 */
    checkResult?: string;
    /** 审核时间 */
    handleTime?: string;
    /** 操作理由 */
    operateReason?: string;
    /** 操作人 */
    operator?: string;
    /** 角色名称 */
    roleName?: string;
  };

  type PrepayApplyCreateVO = {
    /**  采购预付款申请占用明细新增对象  */
    applyUsedDetailCreateList?: PrepayApplyUsedDetailCreateVO[];
    /** 商品明细 */
    detailList?: PrepayApplyDetailVO[];
    prepayAmt: number;
    /**  采购订单ID不能  */
    purOrderId: string;
    /**  备注  */
    remark?: string;
    /**  供应商名称  */
    supplier: string;
    /**  供应商编码  */
    supplierId: string;
  };

  type PrepayApplyDetailVO = {
    /**  金额  */
    amount?: number;
    /**  id  */
    id?: string;
    /**  生产厂家  */
    manufacturer?: string;
    /**  通知单号  */
    noticeId?: string;
    /**  采购单号  */
    orderId?: string;
    /**  备注  */
    prepayApplyRemark?: string;
    /**  单价  */
    price?: number;
    /**  指定批号  */
    produceCode?: string;
    /**  数量  */
    qty?: number;
    /**  商品编码  */
    skuId?: string;
    /**  规格  */
    skuModel?: string;
    /**  商品名称  */
    skuName?: string;
    /**  单据编号  */
    sourceId?: string;
    /**  单据类型 1-采购入库 -1-采退出库  */
    sourceType?: number;
    /**  单位  */
    unit?: string;
  };

  type PrepayApplyInfoVO = {
    /**  开户银行  */
    accountBank?: string;
    /**  银行账号  */
    accountCode?: string;
    /**  账户名称  */
    accountName?: string;
    /**  订单总金额  */
    amt?: number;
    /**  入库单号  */
    bizInResultIds?: string;
    /**  联系人  */
    contact?: string;
    /**  采购合同编号  */
    contractCode?: string;
    /** 商品明细 */
    detailList?: PrepayApplyDetailVO[];
    /**  抵扣金额  */
    discountAmt?: number;
    /**  单据编号  */
    id?: string;
    /** 未申请预付金额 */
    leftPrepayAmt?: number;
    /** 订单总金额 */
    orderAmt?: number;
    /** 订单总数量 */
    orderQty?: number;
    /**  付款状态 0-未付款 1-部分付款 2-付款完成  */
    payStatus?: number;
    /**  付款状态名称  */
    payStatusName?: string;
    /**  付款方式 1-电汇 2-现金  */
    payWay?: number;
    /**  付款方式名称  */
    payWayName?: string;
    /**  预付金额  */
    prepayAmt?: number;
    /**  预付订单类型:0-普通类型 1-货到付款  */
    prepayOrderType?: number;
    /**  预付类型名称  */
    prepayOrderTypeName?: string;
    /**  预付比例  */
    prepayRate?: number;
    /**  预付方式 1-按比例预付 2-按绝对值预付  */
    prepayWay?: number;
    /**  合同编号  */
    purContractId?: string;
    /**  采购订单单号  */
    purOrderId?: string;
    /**  备注  */
    remark?: string;
    /**  业务员  */
    salesman?: string;
    /**  状态 0-未提审 1-已提审 2-审核中 3-审核通过 4-已取消  */
    status?: number;
    /**  状态名称  */
    statusName?: string;
    /**  收货通知单号  */
    stockNoticeIds?: string;
    /** 已申请预付金额 */
    submitPrepayAmt?: number;
    /**  供应商名称  */
    supplier?: string;
    /**  供应商编码  */
    supplierId?: string;
    /** 操作日志 */
    traceList?: OrderTraceVO[];
    /** 采购预付款申请占用明细 */
    usedDetailList?: PrepayApplyUsedDetailVO[];
  };

  type PrepayApplyPageQueryVO = {
    /**  合同编号  */
    contractCode?: string;
    /**  创建结束时间  */
    createTimeEnd?: string;
    /**  创建开始时间  */
    createTimeStart?: string;
    /**  制单人  */
    creater?: string;
    /**  单据编号  */
    id?: string;
    pageQuery?: PageQuery;
    /**  付款状态 0-未付款 1-部分付款 2-付款完成  */
    payStatus?: number;
    /**  预付订单类型:0-普通类型 1-货到付款  */
    prepayOrderType?: number;
    /**  采购单号  */
    purOrderId?: string;
    /**  业务员  */
    salesman?: string;
    /**  审核状态 0-未提审 1-已提审 2-审核中 3-审核通过 4-已取消 */
    status?: number;
    /**  供应商编码  */
    supplierId?: string;
  };

  type PrepayApplyUpdateVO = {
    /**  采购预付款申请占用明细新增对象  */
    applyUsedDetailCreateList?: PrepayApplyUsedDetailCreateVO[];
    /** 商品明细 */
    detailList?: PrepayApplyDetailVO[];
    /**  ID  */
    id: string;
    prepayAmt: number;
    /**  采购订单ID不能  */
    purOrderId: string;
    /**  备注  */
    remark?: string;
    /**  供应商名称  */
    supplier: string;
    /**  供应商编码  */
    supplierId: string;
  };

  type PrepayApplyUsedDetailCreateVO = {
    /** 使用金额 */
    amt?: number;
    /** 预付单明细id */
    prepayPaidId?: string;
  };

  type PrepayApplyUsedDetailVO = {
    /**  使用金额  */
    amt?: number;
    /**  创建时间  */
    createTime?: string;
    /**  id  */
    id?: string;
    /**  预付金额  */
    paymentAmt?: number;
    /**  采购预付申请单ID  */
    prepayApplyId?: string;
    /**  预付款已付款ID  */
    prepayPaidId?: string;
    /**  预付比例  */
    prepayRate?: number;
    /**  预付方式 1 按比例预付, 2按绝对值预付  */
    prepayWay?: number;
    /**  合同编码  */
    purContractCode?: string;
    /**  采购合同ID  */
    purContractId?: string;
    /**  合同名称  */
    purContractTitle?: string;
    /**  采购订单ID  */
    purOrderId?: string;
    /**  最后更新时间  */
    updateTime?: string;
  };

  type PrepayApplyVO = {
    /**  开户银行  */
    accountBank?: string;
    /**  银行账号  */
    accountCode?: string;
    /**  账户名称  */
    accountName?: string;
    /**  联系人  */
    contact?: string;
    /**  采购合同编号  */
    contractCode?: string;
    /**  创建时间  */
    createTime?: string;
    /**  制单人  */
    creater?: string;
    /**  抵扣金额  */
    discountAmt?: number;
    /**  单据编号  */
    id?: string;
    /**  付款状态 0-未付款 1-部分付款 2-付款完成  */
    payStatus?: number;
    /**  付款状态名称  */
    payStatusName?: string;
    /**  预付金额  */
    prepayAmt?: number;
    /**  预付订单类型:0-普通类型 1-货到付款  */
    prepayOrderType?: number;
    /**  预付类型名称  */
    prepayOrderTypeName?: string;
    /**  合同编号  */
    purContractId?: string;
    /**  采购订单单号  */
    purOrderId?: string;
    /**  备注  */
    remark?: string;
    /**  业务员  */
    salesman?: string;
    /**  状态 0-未提审 1-已提审 2-审核中 3-审核通过 4-已取消  */
    status?: number;
    /**  状态名称  */
    statusName?: string;
    /**  供应商名称  */
    supplier?: string;
    /**  供应商编码  */
    supplierId?: string;
  };

  type PrepayDiscountMonthlySettleDetailPageQueryVO = {
    pageQuery?: PageQuery;
    /**  月结主表ID  */
    settleId?: string;
    /**  结账月份  */
    settleMonth: string;
    /**  供应商名称  */
    supplier?: string;
    /**  供应商编码  */
    supplierId?: string;
  };

  type PrepayDiscountMonthlySettleDetailVO = {
    /**  期末金额  */
    afterAmt?: number;
    /**  期初金额  */
    beforeAmt?: number;
    /**  采购预付款金额  */
    prepayApplyAmt?: number;
    /**  退款核销抵扣预付金额  */
    refundWriteOffAmt?: number;
    /**  结算预付抵扣金额  */
    settleAccountAmt?: number;
    /**  月结主表ID  */
    settleId?: string;
    /**  结账月份  */
    settleMonth?: string;
    /**  供应商名称  */
    supplier?: string;
    /**  供应商编码  */
    supplierId?: string;
  };

  type PrepayMonthlySettleDetailPageQueryVO = {
    pageQuery?: PageQuery;
    /**  结账月份  */
    settleMonth?: string;
    /**  供应商编码  */
    supplierId?: string;
  };

  type PrepayMonthlySettleTotalVO = {
    /**  期末金额合计  */
    afterAmtTotal?: number;
    /**  期初金额合计  */
    beforeAmtTotal?: number;
    /**  入库调整金额合计  */
    changeAmtTotal?: number;
    /**  转入金额合计  */
    inAmtTotal?: number;
    /** 0-15天金额合计 */
    notInAmt015Total?: number;
    /** 16-30天金额合计 */
    notInAmt1630Total?: number;
    /** 31-60天金额合计 */
    notInAmt3160Total?: number;
    /** 61-90天金额合计 */
    notInAmt6190Total?: number;
    /** 91-N天金额合计 */
    notInAmt91NTotal?: number;
    /**  转出金额合计  */
    outAmtTotal?: number;
    /**  预付金额合计  */
    payableAmtTotal?: number;
    /**  退回金额合计  */
    refundAmtTotal?: number;
    /**  到货入库金额合计  */
    stockInAmtTotal?: number;
    /**  退货出库金额合计  */
    stockOutAmtTotal?: number;
  };

  type PrepayMonthlySettleVO = {
    /**  期末金额  */
    afterAmt?: number;
    /**  期初金额  */
    beforeAmt?: number;
    /**  入库调整金额  */
    changeAmt?: number;
    /**  id  */
    id?: string;
    /**  转入金额  */
    inAmt?: number;
    /** 账龄 0-15天金额 */
    notInAmt015?: number;
    /** 账龄 16-30天金额 */
    notInAmt1630?: number;
    /** 账龄 31-60天金额 */
    notInAmt3160?: number;
    /** 账龄 61-90天金额 */
    notInAmt6190?: number;
    /** 账龄 91-N天金额 */
    notInAmt91N?: number;
    /**  转出金额  */
    outAmt?: number;
    /**  预付金额  */
    payableAmt?: number;
    /**  退回金额  */
    refundAmt?: number;
    /**  结账月份  */
    settleMonth?: string;
    /**  到货入库金额  */
    stockInAmt?: number;
    /**  退货出库金额  */
    stockOutAmt?: number;
    /**  供应商名称  */
    supplier?: string;
    /**  供应商编码  */
    supplierId?: string;
  };

  type PrepayPaidListQueryVO = {
    /**  1-可用余额大于0,不传或其它值查全部  */
    hasAvailableAmt?: number;
    /**  供应商id  */
    supplierId?: string;
  };

  type PrepayPaidPageQueryVO = {
    /**  1-可用余额大于0,不传或其它值查全部  */
    hasAvailableAmt?: number;
    pageQuery?: PageQuery;
    /**  采购合同ID  */
    purContractId?: string;
    /**  供应商id  */
    supplierId?: string;
  };

  type PrepayPaidVO = {
    /**  可用金额  */
    availableAmt?: number;
    /**  剩余金额  */
    balanceAmt?: number;
    /**  是否关单 0-未关单 1-已关单  */
    closed?: boolean;
    /**  创建时间  */
    createTime?: string;
    /**  冻结金额  */
    frozenAmt?: number;
    /**  id  */
    id?: string;
    /**  应付款金额  */
    payableAmt?: number;
    /**  应付款单号  */
    payableId?: string;
    /**  付款单单号  */
    paymentId?: string;
    /**  付款时间  */
    paymentTime?: string;
    /**  预付金额 */
    prepayAmt?: number;
    /**  采购预付申请单ID  */
    prepayApplyId?: string;
    /**  预付订单类型:0-普通类型 1-货到付款  */
    prepayOrderType?: number;
    /**  预付比例  */
    prepayRate?: number;
    /**  预付方式 1 按比例预付, 2按绝对值预付  */
    prepayWay?: number;
    /**  合同编码  */
    purContractCode?: string;
    /**  采购合同ID  */
    purContractId?: string;
    /**  合同名称  */
    purContractTitle?: string;
    /**  采购订单ID  */
    purOrderId?: string;
    /**  1-预付申请单(只能结算使用) 2-关单生成(任何地方都能使用)  */
    relatedType?: number;
    /**  供应商  */
    supplier?: string;
    /**  供应商id  */
    supplierId?: string;
    /**  已使用金额  */
    usedAmt?: number;
  };

  type PrepayViewPageQueryVO = {
    pageQuery?: PageQuery;
    /**  供应商id  */
    supplierId?: string;
  };

  type PrepayViewTotalVO = {
    /** 0-15天金额合计 */
    notInAmt015Total?: number;
    /** 16-30天金额合计 */
    notInAmt1630Total?: number;
    /** 31-60天金额合计 */
    notInAmt3160Total?: number;
    /** 61-90天金额合计 */
    notInAmt6190Total?: number;
    /** 91-N天金额合计 */
    notInAmt91NTotal?: number;
    /** 未到货金额合计 */
    notInAmtTotal?: number;
  };

  type PrepayViewVO = {
    /** 主键 */
    id?: string;
    /** 未到货金额 */
    notInAmt?: number;
    /** 账龄 0-15天金额 */
    notInAmt015?: number;
    /** 账龄 16-30天金额 */
    notInAmt1630?: number;
    /** 账龄 31-60天金额 */
    notInAmt3160?: number;
    /** 账龄 61-90天金额 */
    notInAmt6190?: number;
    /** 账龄 91-N天金额 */
    notInAmt91N?: number;
    /**  供应商名称  */
    supplier?: string;
    /**  供应商编号  */
    supplierId?: string;
  };

  type ProjectCreditAdjustCreateVO = {
    /** 调整敞口额度 */
    adjustAmt?: number;
    /** 调整类型 1：增加敞口 2：减少敞口 */
    billType?: number;
    /** 运营商名称 */
    carrierOperator?: string;
    /** 运营商公司地址 */
    companyAddress?: string;
    /** 附件 */
    docs?: ProjectCreditAdjustDocCreateVO[];
    /** 运营商企业法定代表人 */
    enterpriseOwner?: string;
    /** 项目编号 */
    projectInfoId?: string;
    /** 项目负责人ID */
    projectManagerId?: string;
    /** 项目名称 */
    projectName?: string;
    /** 备注：调整原因 */
    remark?: string;
    /** 社会统一信用代码 */
    socialStatisticsId?: string;
    /** 项目所属年度 */
    year?: number;
  };

  type ProjectCreditAdjustDocCreateVO = {
    /** 附件地址 */
    docPath?: string;
  };

  type ProjectCreditAdjustPageQueryVO = {
    /** 调整类型 1：增加敞口 2：减少敞口 */
    billType?: number;
    /** 运营商名称 */
    carrierOperator?: string;
    /** 创建人 */
    creater?: string;
    /** 创建人ID */
    createrId?: string;
    /** 运营商企业法定代表人 */
    enterpriseOwner?: string;
    /** 编号 */
    id?: string;
    /** 结束创建时间 */
    maxCreateTime?: string;
    /** 开始创建时间 */
    minCreateTime?: string;
    /** 项目状态多选 */
    multiProjectStatus?: number[];
    pageQuery?: PageQuery;
    /** 项目ID */
    projectInfoId?: string;
    /** 项目负责人 */
    projectManager?: string;
    /** 项目负责人ID */
    projectManagerId?: string;
    /** 项目名称 */
    projectName?: string;
    /** 社会统一信用代码 */
    socialStatisticsId?: string;
    /** 单据状态 0-未提审 1-已提审 2-审核中 3-审核通过 4-已取消 5-审批不通过 */
    status?: number;
    /** 结束所属年度 */
    yearEnd?: number;
    /** 开始所属年度 */
    yearStart?: number;
  };

  type ProjectCreditAdjustUpdateVO = {
    /** 调整敞口额度 */
    adjustAmt?: number;
    /** 调整类型 1：增加敞口 2：减少敞口 */
    billType?: number;
    /** 运营商名称 */
    carrierOperator?: string;
    /** 运营商公司地址 */
    companyAddress?: string;
    /** 附件 */
    docs?: ProjectCreditAdjustDocCreateVO[];
    /** 运营商企业法定代表人 */
    enterpriseOwner?: string;
    /** 编号 */
    id?: string;
    /** 项目编号 */
    projectInfoId?: string;
    /** 项目负责人ID */
    projectManagerId?: string;
    /** 项目名称 */
    projectName?: string;
    /** 备注：调整原因 */
    remark?: string;
    /** 社会统一信用代码 */
    socialStatisticsId?: string;
    /** 项目所属年度 */
    year?: number;
  };

  type ProjectCreditAdjustVO = {
    /** 调整敞口额度 */
    adjustAmt?: number;
    /** 项目申请总额度 */
    applyAmt?: number;
    /** 项目剩余额度 */
    balanceAmt?: number;
    /** 调整类型 1：增加敞口 2：减少敞口 */
    billType?: number;
    /** 运营商名称 */
    carrierOperator?: string;
    /** 运营商公司地址 */
    companyAddress?: string;
    /** 创建时间 */
    createTime?: string;
    /** 创建人 */
    creater?: string;
    /** 创建人ID */
    createrId?: string;
    /** 附件 */
    docs?: ProjectCreditAdjustDocCreateVO[];
    /** 运营商企业法定代表人 */
    enterpriseOwner?: string;
    /** 编号 */
    id?: string;
    /** 最后修改人 */
    operator?: string;
    /** 最后修改人Id */
    operatorId?: string;
    /** 项目ID */
    projectInfoId?: string;
    /** 项目负责人ID */
    projectManagerId?: string;
    /** 项目经理名字 */
    projectManagerName?: string;
    /** 项目名称 */
    projectName?: string;
    /** 项目状态(0.未开始 1.进行中 2停止) */
    projectStatus?: number;
    /** 备注：调整原因 */
    remark?: string;
    /** 审核时间 */
    reviewTime?: string;
    /** 社会统一信用代码 */
    socialStatisticsId?: string;
    /** 单据状态 0-未提审 1-已提审 2-审核中 3-审核通过 4-已取消 5-审批不通过 */
    status?: number;
    /** 更新时间 */
    updateTime?: string;
    /** 所属年度 */
    year?: number;
  };

  type ProjectCreditForExcessVO = {
    /** 项目剩余敞口额度 */
    balanceAmt?: number;
    /** 超出金额 */
    excessAmount?: number;
    /** 超出金额占总剩余敞口额度百分比 */
    percentage?: number;
  };

  type ProjectCreditLogPageQueryVO = {
    pageQuery?: PageQuery;
    /**  项目敞口主键  */
    projectCreditId?: string;
  };

  type ProjectCreditLogVO = {
    /**  敞口余额  */
    afterBalanceAmt?: number;
    /**  供应商/客户ID  */
    businessId?: string;
    /**  供应商/客户名称  */
    businessName?: string;
    /**  变动  */
    changeAvailableAmt?: number;
    /**  采购合同编号  */
    contractCode?: string;
    /**  发生时间  */
    createTime?: string;
    /**  id  */
    id?: string;
    /**  月份  */
    month?: string;
    /**  项目敞口主键  */
    projectCreditId?: string;
    /**  项目主键  */
    projectInfoId?: string;
    /**  来源单号  */
    relatedId?: string;
    /**  1-敞口准入 2-采购订单 3-采购退货单 4-销售出库 5-销售退货 6-临时敞口调整  */
    relatedType?: number;
    /**  来源单据  */
    relatedTypeName?: string;
    /**  其他说明  */
    remark?: string;
    /**  结算方式 1--预付 2-账期 3-其他  */
    settleWay?: number;
    /**  结算方式  */
    settleWayName?: string;
  };

  type ProjectCreditPageQueryVO = {
    /**  运营商名称  */
    carrierOperator?: string;
    pageQuery?: PageQuery;
    /**  项目ID  */
    projectInfoId?: string;
    /**  项目负责人ID  */
    projectManagerId?: string;
    /**  项目名称  */
    projectName?: string;
    /**  项目状态( 0.未开始 1.进行中 2.已停止)  */
    projectStatusList?: number[];
  };

  type ProjectCreditVO = {
    /**  项目申请敞口总额度  */
    applyAmt?: number;
    /**  剩余敞口额度  */
    balanceAmt?: number;
    /**  运营商名称  */
    carrierOperator?: string;
    /**  id  */
    id?: string;
    /**  项目编号  */
    projectInfoId?: string;
    /**  项目负责人名称  */
    projectManager?: string;
    /**  项目负责人ID  */
    projectManagerId?: string;
    /**  项目名称  */
    projectName?: string;
    /**  项目状态( 0.未开始 1.进行中 2.已停止)  */
    projectStatus?: number;
    /**  项目状态名称  */
    projectStatusName?: string;
    /**  已使用敞口额度  */
    usedAmt?: number;
    /**  所属年度  */
    year?: string;
  };

  type ProjectCustomerCreateVO = {
    /** 客户编码 */
    cusId?: string;
    /** 客户名称 */
    cusName?: string;
    /** 敞口额度账期天数 */
    settlementTime?: number;
  };

  type ProjectCustomerVO = {
    /** 区名称 */
    area?: string;
    /** 区编码 */
    areaId?: string;
    /** 市名称 */
    city?: string;
    /** 市编码 */
    cityId?: string;
    /** 客户编码 */
    cusId?: string;
    /** 客户名称 */
    cusName?: string;
    /** 客户类型 */
    customerType?: number;
    /** 客户类型 */
    customerTypeName?: string;
    /** 主键 */
    id?: string;
    /** 商业项目主键id */
    projectInfoId?: string;
    /** 省名称 */
    province?: string;
    /** 省编码 */
    provinceId?: string;
    /** 注册地址 */
    registeredAddress?: string;
    /** 敞口额度账期天数 */
    settlementTime?: number;
  };

  type ProjectDocCreateVO = {
    /** 文档地址 */
    docPath?: string;
  };

  type ProjectDocVO = {
    /** 文档地址 */
    docPath?: string;
    /** id */
    id?: string;
    /** 项目id */
    projectInfoId?: string;
  };

  type ProjectImportExcelVO = {
    /** 商品条码 */
    barCode?: string;
    /** 错误提示 */
    failCause?: string;
    /** 生产厂家 */
    manufacturer?: string;
    /** 商品编码 */
    skuId?: string;
    /** 规格 */
    skuModel?: string;
    /** 商品名称 */
    skuName?: string;
    /** 商品拼音 */
    skuPinyin?: string;
    /** 包装规格 */
    wholeThing?: string;
  };

  type ProjectInfoCreateVO = {
    /** 项目敞口准入申请表 */
    applyDocs?: ProjectDocCreateVO[];
    /** 业务联系人 */
    businessContact?: string;
    /** 业务联系人邮箱 */
    businessContactEmail?: string;
    /** 业务联系人电话 */
    businessContactPhone?: string;
    /** 运营商名称 */
    carrierOperator?: string;
    /** 运营商公司地址 */
    companyAddress?: string;
    /** 申请信用敞口期限 */
    creditTimeLimit?: number;
    /** 客户信息 */
    customer?: ProjectCustomerCreateVO[];
    /** 商品信息 */
    detail?: ProjectWareCreateVO[];
    /** 运营商企业法定代表人 */
    enterpriseOwner?: string;
    /** 超出占总敞口百分比 */
    excessiveExposure?: number;
    /** 财务联系人 */
    financialContact?: string;
    /** 财务联系人邮箱 */
    financialContactEmail?: string;
    /** 财务联系人电话 */
    financialContactPhone?: string;
    /** 项目备注 */
    notes?: string;
    /** 其他附件 */
    otherDocs?: ProjectDocCreateVO[];
    /** 超出敞口流程控制 */
    processControl?: boolean;
    /** 项目附件 */
    projectDocs?: ProjectDocCreateVO[];
    /** 项目负责人 */
    projectManager?: string;
    /** 项目负责人id */
    projectManagerId?: string;
    /** 项目名称 */
    projectName?: string;
    /** 社会统一信用代码 */
    socialStatisticsId?: string;
    /** 供应商信息 */
    supplier?: ProjectSupplierCreateVO[];
    /** 项目申请敞口总额度(万元) */
    totalAmount?: number;
    /** 所属年度 */
    year?: string;
  };

  type ProjectInfoInfoVO = {
    /** 项目敞口准入申请表 */
    applyDocs?: ProjectDocVO[];
    /** 申请时间（首次提审时间） */
    applyTime?: string;
    /** 业务联系人 */
    businessContact?: string;
    /** 业务联系人邮箱 */
    businessContactEmail?: string;
    /** 业务联系人电话 */
    businessContactPhone?: string;
    /** 运营商名称 */
    carrierOperator?: string;
    /** 运营商公司地址 */
    companyAddress?: string;
    /** 创建时间 */
    createTime?: string;
    /** 创建人 */
    creater?: string;
    /** 创建人id */
    createrId?: string;
    /** 申请信用敞口期限 */
    creditTimeLimit?: number;
    /** 客户信息 */
    customer?: ProjectCustomerVO[];
    /** 商品信息 */
    detail?: ProjectWareVO[];
    /** 敞口授信生效日期 */
    effectiveDateOfCredit?: string;
    /** 运营商企业法定代表人 */
    enterpriseOwner?: string;
    /** 超出占剩余敞口百分比 */
    excessiveExposure?: number;
    /** 敞口授信失效日期 */
    expirationDateOfCredit?: string;
    /** 财务联系人 */
    financialContact?: string;
    /** 财务联系人邮箱 */
    financialContactEmail?: string;
    /** 财务联系人电话 */
    financialContactPhone?: string;
    /** 主键 */
    id?: string;
    /** 日志 */
    log?: OrderTraceVO[];
    /** 项目备注 */
    notes?: string;
    /** 其他附件 */
    otherDocs?: ProjectDocVO[];
    /** 超出敞口流程控制 */
    processControl?: boolean;
    /** 项目附件 */
    projectDocs?: ProjectDocVO[];
    /** 项目负责人 */
    projectManager?: string;
    /** 项目负责人id */
    projectManagerId?: string;
    /** 项目名称 */
    projectName?: string;
    /** 项目状态(0.未开始 1.进行中 2停止) */
    projectStatus?: number;
    /** 项目状态名称 */
    projectStatusName?: string;
    /** 审核时间 */
    reviewTime?: string;
    /** 社会统一信用代码 */
    socialStatisticsId?: string;
    /** 状态 */
    status?: number;
    /** 状态名称 */
    statusName?: string;
    /** 供应商信息 */
    supplier?: ProjectSupplierVO[];
    /** 项目申请敞口总额度(万元) */
    totalAmount?: number;
    /** 所属年度 */
    year?: string;
  };

  type ProjectInfoPageQueryVO = {
    /** 采购员 */
    buyer?: string;
    /** 采购员id */
    buyerId?: string;
    /** 运营商名称 */
    carrierOperator?: string;
    /** 创建人 */
    creater?: string;
    /** 创建人id */
    createrId?: string;
    /** 客户Id */
    cusIds?: string[];
    /**  主键  */
    id?: string;
    /** 结束时间 */
    maxCreateTime?: string;
    /** 结束采购员项目订阅更新时间 */
    maxSubscribeUpdateTime?: string;
    /** 开始时间 */
    minCreateTime?: string;
    /** 起始采购员项目订阅更新时间 */
    minSubscribeUpdateTime?: string;
    pageQuery?: PageQuery;
    /** 项目负责人 */
    projectManager?: string;
    /** 项目负责人id */
    projectManagerId?: string;
    /** 项目名称 */
    projectName?: string;
    /**  项目状态(0.未开始 1.进行中 2停止)  */
    projectStatus?: number;
    /** 商品Id */
    skuIds?: string[];
    /** 状态 */
    status?: number;
  };

  type ProjectInfoUpdateVO = {
    /** 项目敞口准入申请表 */
    applyDocs?: ProjectDocCreateVO[];
    /** 业务联系人 */
    businessContact?: string;
    /** 业务联系人邮箱 */
    businessContactEmail?: string;
    /** 业务联系人电话 */
    businessContactPhone?: string;
    /** 运营商名称 */
    carrierOperator?: string;
    /** 运营商公司地址 */
    companyAddress?: string;
    /** 申请信用敞口期限 */
    creditTimeLimit?: number;
    /** 客户信息 */
    customer?: ProjectCustomerCreateVO[];
    /** 商品信息 */
    detail?: ProjectWareCreateVO[];
    /** 运营商企业法定代表人 */
    enterpriseOwner?: string;
    /** 超出占总敞口百分比 */
    excessiveExposure?: number;
    /** 财务联系人 */
    financialContact?: string;
    /** 财务联系人邮箱 */
    financialContactEmail?: string;
    /** 财务联系人电话 */
    financialContactPhone?: string;
    /** id */
    id: string;
    /** 项目备注 */
    notes?: string;
    /** 其他附件 */
    otherDocs?: ProjectDocCreateVO[];
    /** 超出敞口流程控制 */
    processControl?: boolean;
    /** 项目附件 */
    projectDocs?: ProjectDocCreateVO[];
    /** 项目负责人 */
    projectManager?: string;
    /** 项目负责人id */
    projectManagerId?: string;
    /** 项目名称 */
    projectName?: string;
    /** 社会统一信用代码 */
    socialStatisticsId?: string;
    /** 供应商信息 */
    supplier?: ProjectSupplierCreateVO[];
    /** 项目申请敞口总额度(万元) */
    totalAmount?: number;
    /** 所属年度 */
    year?: string;
  };

  type ProjectInfoVO = {
    /** 采购员（多个采购员逗号分割） */
    buyers?: string;
    /** 运营商名称 */
    carrierOperator?: string;
    /** 运营商公司地址 */
    companyAddress?: string;
    /** 创建时间 */
    createTime?: string;
    /** 创建人 */
    creater?: string;
    /** 创建人id */
    createrId?: string;
    /** 运营商企业法定代表人 */
    enterpriseOwner?: string;
    /** 主键 */
    id?: string;
    /** 项目备注 */
    notes?: string;
    /** 项目敞口id */
    projectCreditId?: string;
    /** 项目负责人 */
    projectManager?: string;
    /** 项目负责人id */
    projectManagerId?: string;
    /** 项目名称 */
    projectName?: string;
    /** 项目状态(0.未开始 1.进行中 2停止) */
    projectStatus?: number;
    /** 项目状态(0.未开始 1.进行中 2停止)名称 */
    projectStatusName?: string;
    /** 社会统一信用代码 */
    socialStatisticsId?: string;
    /** 状态 */
    status?: number;
    /** 状态名称 */
    statusName?: string;
    /** 采购员项目订阅更新时间 */
    subscribeUpdateTime?: string;
    /** 所属年度 */
    year?: string;
  };

  type ProjectPlanReportDetailVO = {
    afterStockAmt?: number;
    afterStockQty?: number;
    canPurAmt?: number;
    canPurQty?: number;
    /**  实际完成采购金额  */
    fulfillPurAmt?: number;
    /**  实际完成采购单价  */
    fulfillPurPrice?: number;
    /**  实际完成采购数量  */
    fulfillPurQty?: number;
    /**  实际完成销售金额  */
    fulfillSaleAmt?: number;
    /**  实际完成销售单价  */
    fulfillSalePrice?: number;
    /**  实际完成销售数量  */
    fulfillSaleQty?: number;
    /**  id  */
    id?: string;
    /**  厂家  */
    manufacturer?: string;
    /**  计划期末库存金额  */
    planEndStockAmount?: number;
    /**  计划月份  */
    planMonth?: number;
    /**  计划采购金额  */
    planPurchaseAmount?: number;
    /**  计划采购数量  */
    planPurchaseNum?: number;
    /**  计划销售金额  */
    planSaleAmount?: number;
    /**  计划销售数量  */
    planSaleNum?: number;
    /**  计划销售单价  */
    planSalePrice?: number;
    /**  计划库存数量  */
    planStockNum?: number;
    /**  计划年份  */
    planYear?: number;
    /**  前3个月平均销售数量  */
    prev3MonthAverageSaleNum?: number;
    /**  期初-单价  */
    price?: number;
    /**  项目编号  */
    projectId?: string;
    /**  商品编号  */
    skuId?: string;
    /**  商品规格  */
    skuModel?: string;
    /**  商品名称  */
    skuName?: string;
    /**  期初-库存金额  */
    stockAmount?: number;
    /**  期初-库存数量  */
    stockNum?: number;
    /**  商品通用名  */
    wareGeneralName?: string;
  };

  type ProjectSupplierCreateVO = {
    /** 供应商编码 */
    supplierId?: string;
    /** 供应商名称 */
    supplierName?: string;
  };

  type ProjectSupplierQueryVO = {
    /** 项目id */
    projectInfoId?: string;
    /** 供应商编码 */
    supplierId?: string;
    /** 供应商名称 */
    supplierName?: string;
  };

  type ProjectSupplierVO = {
    /** 区编码 */
    areaId?: string;
    /** 区名称 */
    areaName?: string;
    /** 市编码 */
    cityId?: string;
    /** 市名称 */
    cityName?: string;
    /** 主键 */
    id?: string;
    /** 商业项目主键 */
    projectInfoId?: string;
    /** 省编码 */
    provinceId?: string;
    /** 省名称 */
    provinceName?: string;
    /** 注册地址 */
    registeredAddress?: string;
    /** 供应商编码 */
    supplierId?: string;
    /** 供应商名称 */
    supplierName?: string;
    /** 供应商类型 */
    supplierType?: number;
    /** 供应商类型 */
    supplierTypeText?: string;
  };

  type ProjectWareAdjustCreateVO = {
    /** 更新时间 */
    attachmentDocs?: ProjectWareAdjustDocCreateVO[];
    /** 运营商名称 */
    carrierOperator?: string;
    /** 运营商公司地址 */
    companyAddress?: string;
    /** 运营商企业法定代表人 */
    enterpriseOwner?: string;
    /** 调整类型(0.商品准入 1.商品解绑) */
    fixType?: number;
    /** 项目ID */
    projectInfoId?: string;
    /** 项目负责人ID */
    projectManagerId?: string;
    /** 项目负责人 */
    projectManagerName?: string;
    /** 项目名称 */
    projectName?: string;
    /** 备注：调整原因 */
    remark?: string;
    /** 社会统一信用代码 */
    socialStatisticsId?: string;
    /** 更新时间 */
    wareApprovalDetails?: ProjectWareApprovalVO[];
    /** 所属年度 */
    year?: number;
  };

  type ProjectWareAdjustDocCreateVO = {
    /** 附件地址 */
    docPath?: string;
  };

  type ProjectWareAdjustLogPageQueryVO = {
    /** 结束审核时间 */
    maxReviewTime?: string;
    /** 开始审核时间 */
    minReviewTime?: string;
    /** 调整人 */
    operator?: string;
    pageQuery?: PageQuery;
    /** 项目ID */
    projectInfoId?: string;
    /**  商品Ids */
    skuInfo?: string;
  };

  type ProjectWareAdjustPageQueryVO = {
    /** 运营商名称 */
    carrierOperator?: string;
    /** 创建人 */
    creater?: string;
    /** 创建人ID */
    createrId?: string;
    /** 运营商企业法定代表人 */
    enterpriseOwner?: string;
    /** 调整类型(0.商品准入 1.商品解绑) */
    fixType?: number;
    /** 主键 */
    id?: string;
    /** 结束创建时间 */
    maxCreateTime?: string;
    /** 结束审核时间 */
    maxReviewTime?: string;
    /** 开始创建时间 */
    minCreateTime?: string;
    /** 开始审核时间 */
    minReviewTime?: string;
    /** 项目状态（多选） */
    multiProjectStatus?: number[];
    pageQuery?: PageQuery;
    /** 项目ID */
    projectInfoId?: string;
    /** 项目负责人 */
    projectManager?: string;
    /** 项目负责人ID */
    projectManagerId?: string;
    /** 项目名称 */
    projectName?: string;
    /** 商品信息id/商品名称 */
    skuInfo?: string;
    /** 社会统一信用代码 */
    socialStatisticsId?: string;
    /** 单据状态 0-未提审 1-已提审 2-审核中 3-审核通过 4-已取消 5-审批不通过 */
    status?: number;
    /** 结束所属年度 */
    yearEnd?: number;
    /** 开始所属年度 */
    yearStart?: number;
  };

  type ProjectWareAdjustUpdateVO = {
    /** 更新时间 */
    attachmentDocs?: ProjectWareAdjustDocCreateVO[];
    /** 运营商名称 */
    carrierOperator?: string;
    /** 运营商公司地址 */
    companyAddress?: string;
    /** 运营商企业法定代表人 */
    enterpriseOwner?: string;
    /** 调整类型(0.商品准入 1.商品解绑) */
    fixType?: number;
    /** 编号 */
    id?: string;
    /** 项目ID */
    projectInfoId?: string;
    /** 项目负责人ID */
    projectManagerId?: string;
    /** 项目负责人 */
    projectManagerName?: string;
    /** 项目名称 */
    projectName?: string;
    /** 备注：调整原因 */
    remark?: string;
    /** 社会统一信用代码 */
    socialStatisticsId?: string;
    /** 更新时间 */
    wareApprovalDetails?: ProjectWareApprovalVO[];
    /** 所属年度 */
    year?: number;
  };

  type ProjectWareAdjustVO = {
    /** 更新时间 */
    attachmentDocs?: ProjectWareAdjustDocCreateVO[];
    /** 运营商名称 */
    carrierOperator?: string;
    /** 运营商公司地址 */
    companyAddress?: string;
    /** 创建时间 */
    createTime?: string;
    /** 创建人（申请人） */
    creater?: string;
    /** 创建人ID（申请人ID） */
    createrId?: string;
    /** 运营商企业法定代表人 */
    enterpriseOwner?: string;
    /** 调整商品数量 */
    fixCount?: number;
    /** 调整类型(0.商品准入 1.商品解绑) */
    fixType?: number;
    /** 编号 */
    id?: string;
    /** 最后修改人 */
    operator?: string;
    /** 最后修改人Id */
    operatorId?: string;
    /** 项目ID */
    projectInfoId?: string;
    /** 项目负责人ID */
    projectManagerId?: string;
    /** 项目负责人 */
    projectManagerName?: string;
    /** 项目名称 */
    projectName?: string;
    /** 项目状态(0.未开始 1.进行中 2停止) */
    projectStatus?: number;
    /** 备注：调整原因 */
    remark?: string;
    /** 审核时间 */
    reviewTime?: string;
    /** 社会统一信用代码 */
    socialStatisticsId?: string;
    /** 单据状态 0-未提审 1-已提审 2-审核中 3-审核通过 4-已取消 5-审批不通过 */
    status?: number;
    /** 更新时间 */
    updateTime?: string;
    /** 更新时间 */
    wareApprovalDetails?: ProjectWareApprovalVO[];
    /** 所属年度 */
    year?: number;
  };

  type ProjectWareApprovalVO = {
    /** 条码 */
    barCode?: string;
    /** 调整类型(0.商品准入 1.商品解绑) */
    fixType?: number;
    /** id */
    id?: string;
    /** 生产厂家 */
    manufacturer?: string;
    /** 商业项目主键 */
    projectInfoId?: string;
    /** 商品编码 */
    skuId?: string;
    /** 规格 */
    skuModel?: string;
    /** 商品名称 */
    skuName?: string;
    /** 商品名称拼音 */
    skuPinyin?: string;
    /** 单位名称 */
    unitName?: string;
    /** 件装量(整件) */
    wholeThing?: string;
  };

  type ProjectWareCreateVO = {
    /** 商品编码 */
    skuId?: string;
    /** 商品名称 */
    skuName?: string;
  };

  type ProjectWarePageQueryVO = {
    /**  条码  */
    barCode?: string;
    /**  商品信息  */
    keyword?: string;
    /**  厂家  */
    manufacturer?: string;
    pageQuery?: PageQuery;
    /**  项目id  */
    projectInfoId?: string;
  };

  type ProjectWareVO = {
    /**  条码  */
    barCode?: string;
    /**  创建时间  */
    createTime?: string;
    /** 药物类别 */
    drugCategory?: string;
    /**  最后修改时间  */
    fixTime?: string;
    /**  调整类型(0.商品准入 1.商品解绑)  */
    fixType?: number;
    /**  主键  */
    id?: string;
    /**  生产厂家  */
    manufacturer?: string;
    /**  商业项目主键  */
    projectInfoId?: string;
    /**  商品编码  */
    skuId?: string;
    /**  规格  */
    skuModel?: string;
    /**  商品名称  */
    skuName?: string;
    /**  商品名称拼音  */
    skuPinyin?: string;
    /** 商品状态 1:启用 2:停用 */
    status?: string;
    /**  租户id  */
    tenantId?: string;
    /** 税率 */
    txtRate?: number;
    /** 单位名称 */
    unitName?: string;
    /**  最后修改时间  */
    updateTime?: string;
    /**  件装量(整件)  */
    wholeThing?: string;
  };

  type PurContractCreateVO = {
    /** 开户银行 */
    accountBank: string;
    /** 结算账户 */
    accountCode: string;
    /** 账户名称 */
    accountName: string;
    /** 合同编号 */
    code: string;
    /** 合同日期 */
    contractDate: string;
    /** 商品明细 */
    detailList?: PurContractDetailCreateVO[];
    /** 附件URL */
    docList?: PurContractDocCreateVO[];
    /** 合同有效期至 */
    expirationDate?: string;
    /** 其他说明 */
    other?: string;
    /** 付款方式 1-电汇 2-现金 3-银行转账 4-银行承兑汇票 */
    payWay?: number;
    /** 账期天数 */
    paymentDay?: number;
    /** 账期起算时间点 1-发货时间 2-收货时间 */
    paymentTimeType?: number;
    /** 账期结算方式 1-单结 2-月结 */
    paymentWay?: number;
    /** 预付金额 */
    prepayAmt?: number;
    /** 预付订单类型:0-普通类型 1-货到付款 */
    prepayOrderType?: number;
    /** 预付比例 */
    prepayRate?: number;
    /** 预付方式 1 按比例预付, 2按绝对值预付 */
    prepayWay?: number;
    /** 项目ID */
    projectInfoId?: string;
    /** 项目名称 */
    projectName?: string;
    /** 备注 */
    remark?: string;
    /** 结算到期日 0~28 0是最后一天 */
    settleDueDate?: number;
    /** 结算方式 1--预付 2-账期 3-其他 */
    settleWay: number;
    /** 供应商名称 */
    supplier: string;
    /** 供应商编码 */
    supplierId: string;
    /** 合同名称 */
    title?: string;
    /** 合同类型:0-订单合同 1-年度合同 */
    type?: number;
  };

  type PurContractDetailCreateVO = {
    /** 药品分类 */
    drugCategory?: string;
    /** 生产厂家 */
    manufacturer: string;
    /** 单价 */
    price: number;
    /** 数量 */
    qty: number;
    /** 商品编码 */
    skuId: string;
    /** 规格 */
    skuModel: string;
    /** 商品名称 */
    skuName: string;
    /** 商品拼音 */
    skuPinyin: string;
  };

  type PurContractDetailPageQueryVO = {
    /**  合同ID  */
    contractId?: string;
    /**  商品信息  */
    keyword?: string;
    /**  商品工厂信息  */
    manufacturer?: string;
    pageQuery?: PageQuery;
    /**  是否显示标签 true-是  */
    tag?: boolean;
  };

  type PurContractDetailVO = {
    /** 金额 */
    amount?: number;
    /**  商品条码  */
    barCode?: string;
    /**  剂型名称  */
    dosageFormName?: string;
    /** 药品分类 */
    drugCategory?: string;
    /**  类别(GSP分类)  */
    gspCategory?: string;
    /** 主键 */
    id?: string;
    /** 不符合质量要求, true-不符合 */
    inConformityQuality?: boolean;
    /** 可用库存数量 */
    inventoryQty?: number;
    /** 商品批件过期标识 */
    isTagByExpiry?: boolean;
    /** 超出供应范围标识(GSP范围取消勾选标识) */
    isTagByGsp?: boolean;
    /** 超出供应范围标识（冰冻、冷藏） */
    isTagByOverGsp?: boolean;
    /** 停用标识 */
    isTagByStop?: boolean;
    /** 停购标识 */
    isTagByStopPurchase?: boolean;
    /** 商品解绑标识 */
    isTagByUnbind?: boolean;
    /** 上次采购价 */
    lastPrice?: number;
    /** 生产厂家 */
    manufacturer?: string;
    /** 在途数量 */
    onWayQty?: number;
    /** 三个月平均销量 */
    outboundQty?: number;
    /** 采购价 */
    price?: number;
    /** 采购合同ID */
    purContractId?: string;
    /** 已采购数量 */
    purchasingQty?: number;
    /** 合同数量 */
    qty?: number;
    /**  批准文号  */
    regisTrationNumber?: string;
    /** 可采数量 */
    remainingQty?: number;
    /** 商品编码 */
    skuId?: string;
    /** 规格 */
    skuModel?: string;
    /** 商品名称 */
    skuName?: string;
    /** 拼音 */
    skuPinyin?: string;
    /**  商品状态 1:启用 2:停用 3:停购  */
    status?: string;
    /**  税率  */
    taxRate?: number;
    /** 合同数量 */
    totalQty?: number;
    /**  单位  */
    unit?: string;
    /**  通用名  */
    wareGeneralName?: string;
  };

  type PurContractDocCreateVO = {
    /** 图片地址 */
    docPath: string;
  };

  type PurContractDocVO = {
    /** 图片地址 */
    docPath?: string;
    /** 文档格式 */
    docType?: string;
    /** 主键 */
    id?: string;
  };

  type PurContractImportSkuVO = {
    /** 不符合质量要求, true-不符合 */
    inConformityQuality?: boolean;
    /** 当前可用库存 */
    inventoryQty?: number;
    /** 上次采购价 */
    lastPrice?: number;
    /** 生产厂家 */
    manufacturer?: string;
    /** 在途数量 */
    onWayQty?: number;
    /** 三个月平均销量 */
    outboundQty?: number;
    /** 采购价 */
    price?: number;
    /** 计划采购量 */
    qty?: number;
    /** 商品编码 */
    skuId?: string;
    /** 规格 */
    skuModel?: string;
    /** 商品名称 */
    skuName?: string;
    /** 商品拼音 */
    skuPinyin?: string;
  };

  type PurContractImportVO = {
    /** 失败数据url */
    downloadUrl?: string;
    /** 导入说明 */
    importInstruction?: string;
    /** 导入数量 */
    importQty?: number;
    /** 导入成功商品列表 */
    skuList?: PurContractImportSkuVO[];
    /** 是否成功 */
    success?: boolean;
    /** 成功数量 */
    successQty?: number;
  };

  type PurContractInfoVO = {
    /** 开户银行 */
    accountBank?: string;
    /** 结算账户 */
    accountCode?: string;
    /** 账户名称 */
    accountName?: string;
    /** 合同编号 */
    code?: string;
    /** 合同日期 */
    contractDate?: string;
    /** 商品明细 */
    detailList?: PurContractDetailVO[];
    /** 附件 */
    docList?: PurContractDocVO[];
    /** 合同有效期至 */
    expirationDate?: string;
    /** 主键 */
    id?: string;
    /** 其他说明 */
    other?: string;
    /** 付款方式 1-电汇 2-现金 */
    payWay?: number;
    /** 付款方式名称 */
    payWayName?: string;
    /** 账期天数 */
    paymentDay?: number;
    /** 账期起算时间点 1-发货时间 2-收货时间 */
    paymentTimeType?: number;
    /** 账期起算时间点名称 */
    paymentTimeTypeName?: string;
    /** 账期结算方式 1-单结 2-月结 */
    paymentWay?: number;
    /** 账期结算方式名称 */
    paymentWayName?: string;
    /** 预付金额 */
    prepayAmt?: number;
    /** 预付订单类型:0-普通类型 1-货到付款 */
    prepayOrderType?: number;
    /** 预付类型名称 */
    prepayOrderTypeName?: string;
    /** 预付比例 */
    prepayRate?: number;
    /** 预付方式 1 按比例预付, 2按绝对值预付 */
    prepayWay?: number;
    projectCreditForExcess?: ProjectCreditForExcessVO;
    /** 项目敞口id */
    projectCreditId?: string;
    /** 项目ID */
    projectInfoId?: string;
    /** 项目名称 */
    projectName?: string;
    /** 采购状态 0-未采购 1-部分采购 2-全部采购 */
    purStatus?: number;
    /** 采购状态名称 */
    purStatusName?: string;
    /** 备注 */
    remark?: string;
    /** 结算到期日 0~28 0是最后一天 */
    settleDueDate?: number;
    /** 结算方式 1--预付 2-账期 3-其他 */
    settleWay?: number;
    /** 结算方式名称 */
    settleWayName?: string;
    /** 审核状态 0-未提审 1-已提审 2-审核中 3-审核通过 4-已取消 */
    status?: number;
    /** 审核状态名称 */
    statusName?: string;
    /** 供应商名称 */
    supplier?: string;
    /** 供应商编码 */
    supplierId?: string;
    /** 合同名称 */
    title?: string;
    /** 操作日志 */
    traceList?: OrderTraceVO[];
    /** 合同类型:0-订单合同 1-年度合同 */
    type?: number;
    /** 合同类型名称 */
    typeName?: string;
    /** 是否直调 */
    zdAgreement?: number;
    /** 直调ID */
    zdAgreementId?: string;
  };

  type PurContractPageQueryVO = {
    /**  合同编号  */
    code?: string;
    /**  合同结束日期  */
    contractDateEnd?: string;
    /**  合同开始日期  */
    contractDateStart?: string;
    /**  创建人  */
    creater?: string;
    /**  创建人id  */
    createrId?: string;
    /** 合同有效期至 */
    expirationDate?: string;
    /**  订单下拉选项查询 true:不传projectInfoId则显示没项目ID的合同列表  */
    orderSelect?: boolean;
    pageQuery?: PageQuery;
    /**  付款方式 1-电汇 2-现金  */
    payWay?: number;
    /** 预付订单类型:0-普通类型 1-货到付款 */
    prepayOrderType?: number;
    /**  项目id  */
    projectInfoId?: string;
    /**  采购订单源单号  */
    purOrderId?: string;
    /**  采购状态 0-未采购 1-部分采购 2-全部采购  */
    purStatus?: number;
    /**  采购状态列表 0-未采购 1-部分采购 2-全部采购  */
    purStatusList?: number[];
    /**  结算方式 1--预付 2-账期 3-其他  */
    settleWay?: number;
    /**  审核状态 0-未提审 1-已提审 2-审核中 3-审核通过 4-已取消  */
    status?: number;
    /**  供应商编码  */
    supplierId?: string;
    /**  合同名称  */
    title?: string;
    /** 合同类型:0-订单合同 1-年度合同 */
    type?: number;
    /** 是否直调 */
    zdAgreement?: number;
    /** 直调ID */
    zdAgreementId?: string;
  };

  type PurContractUpdateVO = {
    /** 开户银行 */
    accountBank: string;
    /** 结算账户 */
    accountCode: string;
    /** 账户名称 */
    accountName: string;
    /** 合同编号 */
    code: string;
    /** 合同日期 */
    contractDate: string;
    /** 商品明细 */
    detailList?: PurContractDetailCreateVO[];
    /** 附件URL */
    docList?: PurContractDocCreateVO[];
    /** 合同有效期至 */
    expirationDate?: string;
    /** 主键 */
    id: string;
    /** 其他说明 */
    other?: string;
    /** 付款方式 1-电汇 2-现金 3-银行转账 4-银行承兑汇票 */
    payWay?: number;
    /** 账期天数 */
    paymentDay?: number;
    /** 账期起算时间点 1-发货时间 2-收货时间 */
    paymentTimeType?: number;
    /** 账期结算方式 1-单结 2-月结 */
    paymentWay?: number;
    /** 预付金额 */
    prepayAmt?: number;
    /** 预付订单类型:0-普通类型 1-货到付款 */
    prepayOrderType?: number;
    /** 预付比例 */
    prepayRate?: number;
    /** 预付方式 1 按比例预付, 2按绝对值预付 */
    prepayWay?: number;
    /** 项目ID */
    projectInfoId?: string;
    /** 项目名称 */
    projectName?: string;
    /** 备注 */
    remark?: string;
    /** 结算到期日 0~28 0是最后一天 */
    settleDueDate?: number;
    /** 结算方式 1--预付 2-账期 3-其他 */
    settleWay: number;
    /** 供应商名称 */
    supplier: string;
    /** 供应商编码 */
    supplierId: string;
    /** 合同名称 */
    title?: string;
    /** 合同类型:0-订单合同 1-年度合同 */
    type?: number;
  };

  type PurContractVO = {
    /** 开户银行 */
    accountBank?: string;
    /** 结算账户 */
    accountCode?: string;
    /** 账户名称 */
    accountName?: string;
    /** 总金额 */
    amt?: number;
    /** 流程类型 */
    billType?: string;
    /** 合同编号 */
    code?: string;
    /** 合同日期 */
    contractDate?: string;
    /** 创建时间 */
    createTime?: string;
    /** 创建人 */
    creater?: string;
    /** 合同有效期至 */
    expirationDate?: string;
    /** id */
    id?: string;
    /** 其他说明 */
    other?: string;
    /** 付款方式 1-电汇 2-现金 */
    payWay?: number;
    /** 付款方式名称 */
    payWayName?: string;
    /** 账期天数 */
    paymentDay?: number;
    /** 账期起算时间点 1-发货时间 2-收货时间 */
    paymentTimeType?: number;
    /** 账期起算时间点名称 */
    paymentTimeTypeName?: string;
    /** 账期结算方式 1-单结 2-月结 */
    paymentWay?: number;
    /** 账期结算方式名称 */
    paymentWayName?: string;
    /** 预付金额 */
    prepayAmt?: number;
    /** 预付订单类型:0-普通类型 1-货到付款 */
    prepayOrderType?: number;
    /** 预付类型名称 */
    prepayOrderTypeName?: string;
    /** 预付比例 */
    prepayRate?: number;
    /** 预付方式 1-按比例预付 2-按绝对值预付 */
    prepayWay?: number;
    /** 项目名称 */
    projectName?: string;
    /** 采购订单单号 */
    purOrderId?: string;
    /** 采购状态 0-未采购 1-部分采购 2-全部采购 */
    purStatus?: number;
    /** 采购状态名称 */
    purStatusName?: string;
    /** 结算到期日 0~28 0是最后一天 */
    settleDueDate?: number;
    /** 结算方式 1--预付 2-账期 3-其他 */
    settleWay?: number;
    /** 结算方式名称 */
    settleWayName?: string;
    /** 审核状态 0-未提审 1-已提审 2-审核中 3-审核通过 4-已取消 */
    status?: number;
    /** 状态名称 */
    statusName?: string;
    /** 供应商名称 */
    supplier?: string;
    /** 供应商编号 */
    supplierId?: string;
    /** 合同名称 */
    title?: string;
    /** 合同类型:0-订单合同 1-年度合同 */
    type?: number;
    /** 合同类型名称 */
    typeName?: string;
    /** 是否直调 */
    zdAgreement?: number;
    /** 直调ID */
    zdAgreementId?: string;
  };

  type PurPlanChangeOrderCreateVO = {
    /** 采购ID */
    id?: string;
    /** 采购商品明细 */
    planChangeOrderList?: PurPlanChangeOrderVO[];
  };

  type PurPlanChangeOrderVO = {
    /** 采购明细ID */
    id?: string;
    /** 本次采购量 */
    purchasingQty?: number;
  };

  type PurPlanCreateVO = {
    /** 客户集编码 */
    entrustCusCode?: string;
    /** 客户集名称 */
    entrustCusName?: string;
    /** 期望到货日期 */
    expectReceiveDate: string;
    /** 商品明细列表 */
    purPlanDetailList: PurPlanDetailCreateVO[];
    /** 备注 */
    remark?: string;
    /** 物理仓编码 */
    storeCode?: string;
    /** 物理仓名称 */
    storeName?: string;
  };

  type PurPlanDetailCreateVO = {
    /** 期望价 */
    expectPrice: number;
    /** 生产厂家 */
    manufacturer?: string;
    /** 采购价 */
    price: number;
    /** 计划采购量 */
    qty: number;
    /** 商品编码 */
    skuId: string;
    /** 商品规格 */
    skuModel?: string;
    /** 商品名称 */
    skuName?: string;
    /** 商品拼音 */
    skuPinyin?: string;
    /** 供应商编码 */
    supplierId: string;
    /** 供应商名称 */
    supplierName?: string;
  };

  type PurPlanDetailPageQueryVO = {
    pageQuery?: PageQuery;
    /**  采购计划id  */
    purPlanId?: string;
    /**  商品名称  */
    skuName?: string;
    /**  供应商名称  */
    supplierName?: string;
  };

  type PurPlanDetailVO = {
    /** 采购总金额 */
    amt?: number;
    /** 期望价 */
    expectPrice?: number;
    /** 主键 */
    id?: string;
    /** 生产厂家 */
    manufacturer?: string;
    /** 采购价 */
    price?: number;
    /** 已采购数量 */
    purchasingQty?: number;
    /** 计划采购量 */
    qty?: number;
    /** 剩余采购量 */
    remainingQty?: number;
    /** 商品编码 */
    skuId?: string;
    /** 规格 */
    skuModel?: string;
    /** 商品名称 */
    skuName?: string;
    /** 供应商编码 */
    supplierId?: string;
    /** 供应商名称 */
    supplierName?: string;
  };

  type PurPlanImportSkuVO = {
    /** 期望价 */
    expectPrice?: number;
    /** 生产厂家 */
    manufacturer?: string;
    /** 采购价 */
    price?: number;
    /** 计划采购量 */
    qty?: number;
    /** 商品编码 */
    skuId?: string;
    /** 规格 */
    skuModel?: string;
    /** 商品名称 */
    skuName?: string;
    /** 商品拼音 */
    skuPinyin?: string;
    /** 供应商编码 */
    supplierId?: string;
    /** 供应商名称 */
    supplierName?: string;
  };

  type PurPlanImportVO = {
    /** 失败数据url */
    downloadUrl?: string;
    /** 导入说明 */
    importInstruction?: string;
    /** 导入数量 */
    importQty?: number;
    /** 导入成功商品列表 */
    skuList?: PurPlanImportSkuVO[];
    /** 是否成功 */
    success?: boolean;
    /** 成功数量 */
    successQty?: number;
  };

  type PurPlanInfoVO = {
    /** 客户集名称 */
    entrustCusName?: string;
    /** 期望到货日期 */
    expectReceiveDate?: string;
    /** 计划单号 */
    id?: string;
    /** 备注 */
    remark?: string;
    /** 状态 0-未审核 1-审核通过 2-已取消 */
    status?: number;
    /** 状态名称 */
    statusName?: string;
    /** 物理仓编码 */
    storeCode?: string;
    /** 物理仓名称 */
    storeName?: string;
    /** 计划类型 1-委托采购, 2-自采计划 */
    type?: number;
    /** 计划类型名称 */
    typeName?: string;
  };

  type PurPlanLogPageQueryVO = {
    pageQuery?: PageQuery;
    /**  采购单号 */
    purOrderId?: string;
    /**  采购计划id  */
    purPlanId?: string;
    /**  商品名称  */
    skuName?: string;
    /**  供应商名称  */
    supplierName?: string;
  };

  type PurPlanLogVO = {
    /** 采购总金额 */
    amt?: number;
    /** 期望价 */
    expectPrice?: number;
    /** 主键 */
    id?: string;
    /** 生产厂家 */
    manufacturer?: string;
    /** 采购价 */
    price?: number;
    /** 采购单号 */
    purOrderId?: string;
    /** 本次采购量 */
    purchasingQty?: number;
    /** 计划采购量 */
    qty?: number;
    /** 商品编码 */
    skuId?: string;
    /** 规格 */
    skuModel?: string;
    /** 商品名称 */
    skuName?: string;
    /** 供应商编码 */
    supplierId?: string;
    /** 供应商名称 */
    supplierName?: string;
  };

  type PurPlanPageQueryVO = {
    /**  转采购订单状态 0-未转 1-部分已转 2-全部已转  */
    changeStatus?: number;
    /**  申请结束时间  */
    endTime?: string;
    /**  客户集编码  */
    entrustCusCode?: string;
    /**  客户集名称  */
    entrustCusName?: string;
    /**  id  */
    id?: string;
    /**  商品关键词查询,名称/拼音/编码  */
    keyword?: string;
    pageQuery?: PageQuery;
    /**  申请开始时间  */
    startTime?: string;
    /**  状态 0-未审核 1-审核通过 2-已取消  */
    status?: number;
    /**  物理仓编码  */
    storeCode?: string;
  };

  type PurPlanUpdateVO = {
    /** 客户集编码 */
    entrustCusCode?: string;
    /** 客户集名称 */
    entrustCusName?: string;
    /** 期望到货日期 */
    expectReceiveDate: string;
    /** 主键 */
    id: string;
    /** 商品明细列表 */
    purPlanDetailList: PurPlanDetailCreateVO[];
    /** 备注 */
    remark?: string;
    /** 物理仓编码 */
    storeCode?: string;
    /** 物理仓名称 */
    storeName?: string;
  };

  type PurPlanVO = {
    /** 转采购订单状态 0-未转 1-部分已转 2-全部已转 */
    changeStatus?: number;
    /** 转采购订单状态名称 */
    changeStatusName?: string;
    /** 申请时间 */
    createTime?: string;
    /** 客户集名称 */
    entrustCusName?: string;
    /** 计划单号 */
    id?: string;
    /** 计划采购种数 */
    skuCount?: number;
    /** 状态 0-未审核 1-审核通过 2-已取消 */
    status?: number;
    /** 状态名称 */
    statusName?: string;
    /** 物理仓编码 */
    storeCode?: string;
    /** 物理仓名称 */
    storeName?: string;
  };

  type PurReturnDetailVO = {
    /** 条形码 */
    barCode?: string;
    /** 采购入库单号/批次号 wms_biz_stock_out_result的主键 */
    bizStockInResultId: string;
    /** 入库结果单批号id */
    bizStockInResultProduceId?: string;
    /** 药品分类编码 */
    drugCategory?: string;
    /** 客户集id */
    entrustCusCode: string;
    /** 客户集名称 */
    entrustCusName?: string;
    /** 失效日期 */
    expiredDate?: string;
    /** 主键 */
    id?: string;
    /** 采购价已调价是否标记 */
    isTag?: boolean;
    /** 生产厂家 */
    manufacturer: string;
    /** 拼接的唯一键值 */
    mergeUniqueKeyValue?: string;
    /** 采购订单号 */
    originalOrderId?: string;
    /** 退货金额 */
    outMoney: number;
    /** 退货数量 */
    outQty: number;
    /** 采退单价 */
    price: number;
    /** 批号 */
    produceCode: string;
    /** 生产日期 */
    productionDate?: string;
    /** 采购价价格 */
    purPrice: number;
    /** 实际退货金额 */
    realityOutMoney?: number;
    /** 实际退货数量 */
    realityOutQty?: number;
    /** 可退数量 */
    returnQty?: number;
    /** 退货原因 */
    returnReason?: string;
    /** 退货类型 */
    returnReasonType?: string;
    /** 服务单号 */
    serviceId?: string;
    /** 商品编码 */
    skuId: string;
    /** 商品规格 */
    skuModel: string;
    /** 商品名称 */
    skuName: string;
    /** 商品名称拼音 */
    skuPinyin: string;
    /** 商品接批号编码 */
    skuProduceBatch?: string;
    /** 商品接批号编码仓库类型 */
    skuProduceBatchWarehouseType?: string;
    /** 税率 */
    taxRate?: number;
    /** 仓库类型 0-正品 1-次品 2-待处理 */
    warehouseType?: number;
  };

  type PurReturnListVO = {
    /** 审核人 */
    approveName?: string;
    /** 审核时间 */
    approveTime?: string;
    /** 取消订单原因 */
    cancelReason?: string;
    /** 取消订单类型 */
    cancelType?: string;
    /** 联系人 */
    contact?: string;
    /** 联系人手机 */
    contactPhone?: string;
    /** 制单人 */
    creater?: string;
    /** 订单类型 1 普通 2 闪电 */
    docType?: number;
    /** 客户集编码 */
    entrustCusCode?: string;
    /** 客户集名称 */
    entrustCusName?: string;
    /** 审批流程单据类型编码 */
    flowBillType?: string;
    /** 主键/服务单号 */
    id?: string;
    /** 机构编码 */
    orgCode?: string;
    /** 出库状态: 1-仓库已接单 2-出库指令已生成 3-拣货完成 4-分拣完成 5-装箱完成 6-仓库交接 7-出库 */
    outboundStatus?: number;
    /** 采购入库单号 */
    poOrderId?: string;
    /** 备注 */
    remark?: string;
    /** 退货地址 */
    returnAddress?: string;
    /** 退货方式 */
    returnMode?: string;
    /** 通知单号 */
    serviceNoticeId?: string;
    /** 状态:0-未提审,1-已提审 2-审核中 3-审核通过 4-已取消 11-已关闭/已关单 */
    status?: number;
    /** 仓库 */
    storeCode?: string;
    /** 仓库名称 */
    storeName?: string;
    /** 供应商id */
    supplierId?: string;
    /** 供应商名称 */
    supplierName?: string;
  };

  type PurReturnVO = {
    /** 收货人 */
    accepter?: string;
    /** 详细地址 */
    address?: string;
    /** 供应商地址Id */
    addressId?: string;
    /** 审核人编码 */
    approve?: string;
    /** 审核人名称 */
    approveName?: string;
    /** 审核时间 */
    approveTime?: string;
    /** 区名称 */
    areaName?: string;
    /** 入库单数组 */
    bizStockInResultIds?: string[];
    /** 市名称 */
    cityName?: string;
    /** 明细列表 */
    detailList: PurReturnDetailVO[];
    /** 出库类型 1 普通 2 闪电 */
    docType?: number;
    /** 客户集编码 */
    entrustCusCode?: string;
    /** 客户集名称 */
    entrustCusName?: string;
    /** 主键 */
    id?: string;
    /** 操作日志 */
    logList?: OrderTraceVO[];
    /** 手机号码 */
    mobilePhone?: string;
    /** 出库状态: 1-仓库已接单 2-出库指令已生成 3-拣货完成 4-分拣完成 5-装箱完成 6-仓库交接 7-出库 */
    outboundStatus?: number;
    /** 省名称 */
    provinceName?: string;
    /** 备注 */
    remark?: string;
    /** 退货原因 */
    returnReason?: string;
    /** 退货原因编码 */
    returnReasonCode?: string;
    /** 通知单号 */
    serviceNoticeId?: string;
    /** 状态:0-未提审,1-已提审 2-审核中 3-审核通过 4-已取消 11-已关闭/已关单 */
    status?: number;
    /** 仓库编码 */
    storeCode: string;
    /** 仓库名称 */
    storeName: string;
    /** 街道/乡镇名称 */
    streetName?: string;
    /** 供应商id */
    supplierId: string;
    /** 供应商名称 */
    supplierName: string;
  };

  type PurReturnVOPageQuery = {
    /** 制单人 */
    creater?: string;
    /** 客户编码 */
    cusId?: string;
    /** 审核结束时间 */
    endCheckTime?: string;
    /** 申请结束时间 */
    endTime?: string;
    /** 客户集编码 */
    entrustedCusCode?: string;
    /** 客户集名称 */
    entrustedCusName?: string;
    /** 退货单号/服务单号 */
    id?: string;
    /** 出库类型 1 普通 2 闪电 */
    orderType?: number;
    /** 出库状态: 1-仓库已接单 2-出库指令已生成 3-拣货完成 4-分拣完成 5-装箱完成 6-仓库交接 7-出库 */
    outboundStatus?: number;
    pageQuery?: PageQuery;
    /** 采购入库单 */
    poOrderId?: string;
    /** 备注 */
    remark?: string;
    /** 退货类型 0 原单 1 无原单 */
    returnType?: number;
    /** 通知单号 */
    serviceNoticeId?: string;
    /** 商品编码 */
    skuId?: string;
    /** 审核开始时间 */
    startCheckTime?: string;
    /** 申请开始时间 */
    startTime?: string;
    /** 状态:0-未提审,1-已提审 2-审核中 3-审核通过 4-已取消 11-已关闭/已关单 */
    status?: number;
    /** 仓库编码 */
    storeCode?: string;
    /** 仓库名称 */
    storeName?: string;
    /** 供应商编码 */
    supplierId?: string;
    /** 供应商名称 */
    supplierName?: string;
  };

  type PurWareViewPageQueryVO = {
    /**  客户id  */
    cusId?: string;
    /**  是否绑定客户  */
    isBindCus?: boolean;
    /**  商品信息(商品名称/拼音码/编码)  */
    keyword?: string;
    /**  生产厂家  */
    manufacturer?: string;
    pageQuery?: PageQuery;
    /**  项目id  */
    projectInfoId?: string;
    /**  商品id  */
    skuId?: string;
    /**  商品规格  */
    skuModel?: string;
    /**  商品名称  */
    skuName?: string;
    /**  商品名称简拼(拼音首字母)  */
    skuPinyin?: string;
    /**  供应商id  */
    supplierId?: string;
    /**  是否显示标签 true-是  */
    tag?: boolean;
  };

  type PurWareViewVO = {
    /**  条形码  */
    barCode?: string;
    /**  成本价  */
    costPrice?: number;
    createTime?: string;
    /**  创建人  */
    creater?: string;
    /**  创建id  */
    createrId?: string;
    /**  药物分类  */
    drugCategory?: string;
    /**  药物分类名称  */
    drugCategoryName?: string;
    /** 不符合质量要求, true-不符合 */
    inConformityQuality?: boolean;
    /** 当前可用库存 */
    inventoryQty?: number;
    /** 上次采购价 */
    lastPrice?: number;
    /**  生产厂家  */
    manufacturer?: string;
    /**  市场价  */
    marketPrice?: number;
    /**  最低销售价格  */
    minPrice?: number;
    /** 在途数量 */
    onWayQty?: number;
    /**  最后操作人  */
    operator?: string;
    /**  最后操作人id  */
    operatorId?: string;
    /** 三个月平均销量 */
    outboundQty?: number;
    /**  零售价  */
    retailPrice?: number;
    /**  商品id  */
    skuId?: string;
    /**  商品规格  */
    skuModel?: string;
    /**  商品名称  */
    skuName?: string;
    /**  商品名称简拼(拼音首字母)  */
    skuPinyin?: string;
    /**  1：启用 2：停用 3：停购  */
    status?: string;
    /**  税率  */
    taxRate?: number;
    /**  单位  */
    unitCode?: string;
    /**  单位名称  */
    unitName?: string;
    /** 更新时间 */
    updateTime?: string;
  };

  type PurchaseBizStockResultPageQueryVO = {
    /** 商品条码 */
    barCode?: string;
    /** 仓库订单完成时间 */
    endOrderConfirmTime?: string;
    /** 是否查询全部 */
    isQueryAll?: boolean;
    /** 生产厂家 */
    manufacturer?: string;
    pageQuery?: PageQuery;
    /** sku */
    sku?: string;
    /** 仓库订单完成时间 */
    startOrderConfirmTime?: string;
    /** 供应商编码 */
    supplierId?: string;
  };

  type PurchaseBizStockResultVO = {
    /** 商品条码 */
    barCode?: string;
    /** 批次号 */
    batchNumber?: string;
    /** 出入库单号 */
    docCode?: string;
    /** 单据类型 */
    docType?: string;
    /** 有效日期 */
    expiredDate?: string;
    /** 发票号码 */
    invoiceCode?: string;
    /** 上次采购价 */
    lastTimePrice?: number;
    /** 生产厂家 */
    manufacturer?: string;
    /** 单据时间 */
    orderConfirmTime?: string;
    /** 本次采购价 */
    price?: number;
    /** 批号 */
    produceCode?: string;
    /** 生产日期 */
    productionDate?: string;
    /** 采购单号 */
    purOrderId?: string;
    /** 出入库数量 */
    qty?: number;
    /** 商品编码 */
    skuId?: string;
    /** 规格 */
    skuModel?: string;
    /** 商品名称 */
    skuName?: string;
    /** 通知单号 */
    stockNoticeId?: string;
    /** 剩余可用库存 */
    stockQty?: number;
    /** 仓库 */
    storeName?: string;
    /** 供应商 */
    supplierName?: string;
    /** 单位 */
    unit?: string;
  };

  type ReceiptOrderDetailsVO = {
    /** 药品分类编码 */
    drugCategory?: string;
    /** 有效日期 */
    expiredDate: string;
    /** 数量 */
    inQty: number;
    /** 采购订单明细 */
    orderDetailId: string;
    /** 生产批号 */
    produceCode?: string;
    /** 生产日期 */
    productionDate: string;
    /** 商品编码 */
    skuId: string;
    /** 商品名称 */
    skuName: string;
  };

  type ReceiptOrderVO = {
    /** 采购员 */
    buyer: string;
    /** 采购员 */
    buyerId: string;
    /** 收货单明细 */
    details: ReceiptOrderDetailsVO[];
    /** 采购订单号 */
    poOrderId: string;
    /** 到货日期 */
    receiptDate: string;
    /** 备注 */
    remark?: string;
    /** 物理仓编码 */
    storeCode?: string;
    /** 物理仓名称 */
    storeName?: string;
  };

  type SalesmanCreateVO = {
    /**  手机号码  */
    mobilePhone?: string;
    /**  备注  */
    remark?: string;
    /**  业务员姓名  */
    salesman?: string;
    /**  直属上级  */
    superior?: string;
    /**  直属上级id  */
    superiorId?: string;
  };

  type SalesmanListVO = {
    /**  业务员编码  */
    id?: string;
    /**  手机号码  */
    mobilePhone?: string;
    /**  更新人  */
    operator?: string;
    /**  备注  */
    remark?: string;
    /**  业务员姓名  */
    salesman?: string;
    /**  状态 0: 正常 1: 停用  */
    status?: number;
    /**  管理下级(下级总数量)  */
    subordinatesNum?: number;
    /**  直属上级  */
    superior?: string;
    /**  更新时间  */
    updateTime?: string;
  };

  type SalesmanNodeVO = {
    /**  子节点  */
    children?: SalesmanNodeVO[];
    /**  业务员编码  */
    id?: string;
    /**  手机号码  */
    mobilePhone?: string;
    /**  业务员  */
    salesman?: string;
    /**  状态 0: 正常 1: 停用  */
    status?: number;
    /**  直属上级  */
    superior?: string;
    /**  直属上级id  */
    superiorId?: string;
  };

  type SalesmanPageQueryVO = {
    /**  手机号码  */
    mobilePhone?: string;
    /**  更新人  */
    operator?: string;
    /**  更新人ID */
    operatorId?: string;
    pageQuery?: PageQuery;
    /**  业务员姓名  */
    salesman?: string;
    /**  直属上级  */
    superior?: string;
    /**  直属上级id  */
    superiorId?: string;
    /**  更新时间  */
    updateTime?: string;
  };

  type SalesmanStartSwitchVO = {
    /**  业务员编码  */
    id?: string;
    /**  备注  */
    remark?: string;
    /**  0：启用 1：停用  */
    status?: number;
  };

  type SalesmanUpdateVO = {
    /**  业务员编码  */
    id?: string;
    /**  手机号码  */
    mobilePhone?: string;
    /**  备注  */
    remark?: string;
    /**  业务员姓名  */
    salesman?: string;
    /**  直属上级  */
    superior?: string;
    /**  直属上级id  */
    superiorId?: string;
  };

  type SalesmanVO = {
    /**  业务员编码  */
    id?: string;
    /**  手机号码  */
    mobilePhone?: string;
    /**  备注  */
    remark?: string;
    /**  业务员姓名  */
    salesman?: string;
    /**  状态 0: 正常 1: 停用  */
    status?: number;
    /**  管理下级(下级总数量)  */
    subordinatesNum?: number;
    /**  直属上级  */
    superior?: string;
    /**  直属上级id  */
    superiorId?: string;
    /**  团队成员  */
    teamMembers?: SalesmanNodeVO[];
  };

  type SettleAccountCheckVO = {
    /** 账户所属银行 */
    accountBank?: string;
    /** 帐户 */
    accountCode?: string;
    /** 帐户名称 */
    accountName?: string;
    /** 审核状态 */
    pass: boolean;
    /** 备注 */
    remark?: string;
  };

  type SettleAccountCreateVO = {
    /** 联系人Id */
    contactId?: string;
    /** 联系人 */
    contacts?: string;
    /** 联系电话 */
    contactsPhone?: string;
    /** 明细信息 */
    detail?: number[];
    /** 预付明细信息 */
    prepayList?: SettlePrepayDetailCreateVO[];
    /** 备注 */
    remark?: string;
    /** 供应商 */
    supplier: string;
    /** 供应商id */
    supplierId: string;
  };

  type SettleAccountDetailVO = {
    /** 结算账期日期 */
    accountPeriodDate?: string;
    /** 合同编号 */
    contractCode?: string;
    /**  创建时间  */
    createTime?: string;
    /**  单据价税合计  */
    docAmount?: number;
    /**  单据时间  */
    docTime?: string;
    /**  单据类型 1入库单 2出库单  */
    docType?: number;
    /**  id  */
    id?: string;
    /**  发票勾稽单id  */
    invoiceAppId?: string;
    /**  发票类别 1蓝票 2红票 */
    invoiceClass?: number;
    /**  发票代码  */
    invoiceCode?: string;
    /**  开票日期  */
    invoiceDate?: string;
    /**  发票号码  */
    invoiceNumber?: string;
    /**  发票抬头  */
    invoiceTitle?: string;
    /**  发票类型  */
    invoiceType?: number;
    /**  原单号  */
    originalOrderId?: string;
    /** 付款方式 1-电汇 2-现金 3-银行转账 4-银行承兑汇票 */
    payWay?: number;
    /** 付款方式 1-电汇 2-现金 3-银行转账 4-银行承兑汇票 */
    payWayText?: string;
    /** 采购订单号 */
    purOrderId?: string;
    /**  发票税率  */
    rate?: number;
    /**  结算申请单id  */
    settleAccountId?: string;
    /**  结算池ID  */
    settlePoolId?: string;
    /** 结算方式 */
    settleWay?: number;
    /** 结算方式 */
    settleWayText?: string;
    /** 收货通知单号 */
    stockNoticeId?: string;
    /**  供应商  */
    supplier?: string;
    /**  供应商id  */
    supplierId?: string;
    /**  最后更新时间  */
    updateTime?: string;
  };

  type SettleAccountInfoVO = {
    /** 开户银行 */
    accountBank?: string;
    /** 结算账户 */
    accountCode?: string;
    /** 账户名称 */
    accountName?: string;
    /** 自动抵扣金额 */
    autoUsedAmt?: number;
    /** 联系人id */
    contactId?: string;
    /** 联系人 */
    contacts?: string;
    /** 联系电话 */
    contactsPhone?: string;
    /** 创建时间 */
    createTime?: string;
    /** 创建人 */
    creater?: string;
    /** 创建人id */
    createrId?: string;
    /** 明细信息 */
    detail?: SettleAccountDetailVO[];
    /** 申请单id */
    id?: string;
    /** 日志 */
    log?: OrderTraceVO[];
    /** 最后操作人 */
    operator?: string;
    /** 最后操作人id */
    operatorId?: string;
    /** 实际结算金额 */
    payAmount?: number;
    /** 预付结算金额 */
    prepayAmt?: number;
    /** 预付信息 */
    prepayList?: SettlePrepayDetailInfoVO[];
    /** 备注 */
    remark?: string;
    /** 业务员 */
    salesman?: string;
    /** 业务员ID */
    salesmanId?: string;
    /** 结算金额 */
    settleAccountAmount?: number;
    /** 结算状态 0 初始化 1 结算中 2已结算 */
    settleStatus?: number;
    /** 结算状态 0 初始化 1 结算中 2已结算名称 */
    settleStatusName?: string;
    /** 状态 0-创建 1-提审 2-审核中 3-审核通过 4-取消 */
    status?: number;
    /** 状态 0-创建 1-提审 2-审核中 3-审核通过 4-取消名称 */
    statusName?: string;
    /** 供应商 */
    supplier?: string;
    /** 供应商id */
    supplierId?: string;
  };

  type SettleAccountPageQueryVO = {
    /**  联系人  */
    contacts?: string;
    /**  联系电话  */
    contactsPhone?: string;
    /** 创建人 */
    creater?: string;
    /**  申请单id  */
    id?: string;
    /**  发票代码  */
    invoiceCode?: string;
    /**  发票号码  */
    invoiceNumber?: string;
    /**  创建时间  */
    maxCreateTime?: string;
    /** 结束审核通过时间 */
    maxReviewTime?: string;
    /**  创建时间  */
    minCreateTime?: string;
    /** 开始审核通过时间 */
    minReviewTime?: string;
    pageQuery?: PageQuery;
    /**  备注  */
    remark?: string;
    /**  结算状态  */
    settleStatus?: number;
    /**  状态  */
    status?: number;
    /**  供应商  */
    supplier?: string;
    /**  供应商id  */
    supplierId?: string;
  };

  type SettleAccountUpdateVO = {
    /** 联系人Id */
    contactId?: string;
    /** 联系人 */
    contacts?: string;
    /** 联系电话 */
    contactsPhone?: string;
    /** 明细信息 */
    detail?: number[];
    /** id */
    id?: string;
    /** 预付明细信息 */
    prepayList?: SettlePrepayDetailCreateVO[];
    /** 备注 */
    remark?: string;
    /** 供应商 */
    supplier: string;
    /** 供应商id */
    supplierId: string;
  };

  type SettleAccountVO = {
    /** 开户银行 */
    accountBank?: string;
    /** 结算账户 */
    accountCode?: string;
    /** 账户名称 */
    accountName?: string;
    /** 联系人 */
    contacts?: string;
    /** 联系电话 */
    contactsPhone?: string;
    /** 创建时间 */
    createTime?: string;
    /** 创建人 */
    creater?: string;
    /** 创建人id */
    createrId?: string;
    /** id */
    id?: string;
    /** 本次实际结算金额 */
    payAmount?: number;
    /** 预付款抵扣金额 */
    prepayAmt?: number;
    /** 备注 */
    remark?: string;
    /** 审核通过时间 */
    reviewTime?: string;
    /** 结算合计金额 */
    settleAccountAmount?: number;
    /** 结算状态 */
    settleStatus?: number;
    /** 结算状态名称 */
    settleStatusName?: string;
    /** 状态 */
    status?: number;
    /** 状态名称 */
    statusName?: string;
    /** 供应商 */
    supplier?: string;
    /** 供应商id */
    supplierId?: string;
    /** 未结算金额 */
    unpaidAmount?: number;
  };

  type SettlePoolPageVO = {
    /** 已申请结算金额 */
    applySettleAmount?: number;
    /** 可结算金额 */
    canSettledAmount?: number;
    /** 合同编号 */
    contractCode?: string;
    /** 单据时间 */
    docTime?: string;
    /** id */
    id?: string;
    /** 发票金额 */
    invoiceAmount?: number;
    /** 单据id */
    invoiceAppId?: string;
    /** 发票类别 1蓝票 2红票 */
    invoiceClass?: number;
    /** 发票代码 */
    invoiceCode?: string;
    /** 开票日期 */
    invoiceDate?: string;
    /** 发票号码 */
    invoiceNumber?: string;
    /** 发票抬头 */
    invoiceTitle?: string;
    /** 发票类型 */
    invoiceType?: number;
    /** 原始订单id */
    originalOrderId?: string;
    /** 采购订单id */
    purOrderId?: string;
    /** 供应商 */
    supplier?: string;
    /** 供应商id */
    supplierId?: string;
    /** 未到账期金额 */
    waitedSettleAmount?: number;
  };

  type SettlePoolPrepay = {
    docAmount?: number;
    id?: string;
    originalOrderId?: string;
    purOrderId?: string;
  };

  type SettlePoolVO = {
    /** 结算账期日期 */
    accountPeriodDate?: string;
    /** 合同编号 */
    contractCode?: string;
    /** 创建时间 */
    createTime?: string;
    /** 单据价税合计 */
    docAmount?: number;
    /** 单据时间 */
    docTime?: string;
    /** 来源单据类型 */
    docType?: number;
    /** 来源单据类型名称 */
    docTypeName?: string;
    /** id */
    id?: string;
    /** 发票价税合计 */
    invoiceAmount?: number;
    /** 发票勾稽单id */
    invoiceAppId?: string;
    /** 发票类别 1蓝票 2红票 */
    invoiceClass?: number;
    /** 发票代码 */
    invoiceCode?: string;
    /** 开票日期 */
    invoiceDate?: string;
    /** 发票号码 */
    invoiceNumber?: string;
    /** 发票抬头 */
    invoiceTitle?: string;
    /** 发票类型 */
    invoiceType?: number;
    /** 发票类型名称 */
    invoiceTypeName?: string;
    /** 原单号 */
    originalOrderId?: string;
    /** 付款方式 1-电汇 2-现金 */
    payWay?: number;
    /** 采购订单id */
    purOrderId?: string;
    /** 发票税率 */
    rate?: number;
    /** 结算明细id */
    settleDetailId?: string;
    /** 结算状态 0 初始化 1 结算中 2已结算 */
    settleStatus?: number;
    /** 结算时间 */
    settleTime?: string;
    /** 采购订单结算方式 */
    settleWay?: number;
    /** 收货通知单号 */
    stockNoticeId?: string;
    /** 供应商 */
    supplier?: string;
    /** 供应商id */
    supplierId?: string;
  };

  type SettlePrepayDetailCreateVO = {
    /** 是否关闭订单 */
    close?: boolean;
    /** 预付单明细id */
    prepayPaidId?: string;
    /** 采购订单编号 */
    purOrderId?: string;
    /** 使用金额 */
    useAmount?: number;
  };

  type SettlePrepayDetailInfoVO = {
    /** 创建时间 */
    createTime?: string;
    /** id */
    id?: string;
    /** 应付款单号 */
    payableId?: string;
    /** 实付款总金额 (预付单已付金额) */
    paymentAmt?: number;
    /** 采购预付申请单ID */
    prepayApplyId?: string;
    /** 预付款已付款ID */
    prepayPaidId?: string;
    /** 预付比例 */
    prepayRate?: number;
    /** 预付方式 */
    prepayWay?: number;
    /** 合同编号 */
    purContractCode?: string;
    /** 采购合同ID */
    purContractId?: string;
    /** 合同名称 */
    purContractTitle?: string;
    /** 采购订单ID */
    purOrderId?: string;
    /** 结算申请单id */
    settleAccountId?: string;
    /** 已使用金额 */
    usedAmt?: number;
  };

  type StockDTO = {
    /**  商品条码  */
    barCode?: string;
    /**  批次  */
    batchNo?: string;
    /**  成本价  */
    costPrice?: number;
    /**  创建时间  */
    createTime?: string;
    /**  客户集  */
    entrustCusCode?: string;
    /**  客户集名称  */
    entrustCusName?: string;
    /**  0 传统 1 BC模式  */
    entrustType?: number;
    /**  失效日期  */
    expirationDate?: string;
    /**  冻结数量  */
    frozenQty?: number;
    /**  id  */
    id?: string;
    /**  可用数量  */
    inventoryQty?: number;
    /**  生产厂家  */
    manufacturer?: string;
    /**  批次价格  */
    price?: number;
    /**  生产批号  */
    produceCode?: string;
    /**  生产日期  */
    productionDate?: string;
    /**  所属项目ID  */
    projectInfoId?: string;
    /**  所属项目名称  */
    projectName?: string;
    /**  数量  */
    qty?: number;
    /**  商品编码  */
    skuId?: string;
    /**  商品规格  */
    skuModel?: string;
    /**  商品名称  */
    skuName?: string;
    /**  拼音简拼  */
    skuPinyin?: string;
    /**  物理仓编码  */
    storeCode?: string;
    /**  物理仓名称  */
    storeName?: string;
    /**  供应商编码  */
    supplierId?: string;
    /**  供应商简称  */
    supplierShortName?: string;
    /**  租户编码  */
    tenantId?: string;
    /**  修改时间  */
    updateTime?: string;
    /**  版本号  */
    version?: number;
    /**  通用名  */
    wareGeneralName?: string;
    /**  仓库编码  */
    warehouseId?: string;
  };

  type StockInPriceCreateVO = {
    /** 明细信息 */
    detail?: StockInPriceDetailCreateVO[];
    /** 调价类型 0：入库调价 1：返利调价 */
    priceType?: number;
    /** 调整原因 */
    remark?: string;
    /** 状态:0-未提审,1-已提审 2-审核中 3-审核通过 4-已取消 */
    status?: number;
    /** 供应商编码 */
    supplierId?: string;
    /** 供应商名称 */
    supplierName?: string;
  };

  type StockInPriceDetailCreateVO = {
    /** 调整金额 */
    adjustAmount?: number;
    /** 金额 */
    amount?: number;
    /** 调整后金额 */
    amountFix?: number;
    /** 采购入库单号 */
    bizStockInResultId?: string;
    /** 采购入库结果单批号id */
    bizStockInResultProduceId?: string;
    /** 当前退货数量 */
    currentOutQty?: number;
    /** 药品分类 */
    drugCategory?: string;
    /** id */
    id?: string;
    /** 生产厂家 */
    manufacturer?: string;
    /** 采购价 */
    price?: number;
    /** 调整后采购价 */
    priceFix?: number;
    /** 批号 */
    produceCode?: string;
    /** 数量 */
    qty?: number;
    /** 商品编码 */
    skuId?: string;
    /** 商品规格 */
    skuModel?: string;
    /** 商品名称 */
    skuName?: string;
    /** 入库调价单id */
    stockInPriceId?: string;
  };

  type StockInPriceDetailVO = {
    /**  调整金额  */
    adjustAmount?: number;
    /**  金额  */
    amount?: number;
    /**  调整后金额  */
    amountFix?: number;
    /**  采购入库单号  wms_biz_stock_out_result的主键  */
    bizStockInResultId?: string;
    /**  采购入库结果单批号id   此表wms_biz_stock_in_result_produce的主键  */
    bizStockInResultProduceId?: string;
    /** 当前退货数量 */
    currentOutQty?: number;
    /** 药品分类 */
    drugCategory?: string;
    /**  id  */
    id?: string;
    /** 采购价已调价是否标记 */
    isTag?: boolean;
    /**  生产厂家  */
    manufacturer?: string;
    /**  采购价  */
    price?: number;
    /**  调整后采购价  */
    priceFix?: number;
    /**  批号  */
    produceCode?: string;
    /**  数量  */
    qty?: number;
    /** 实际调整差额 */
    realityAdjustAmount?: number;
    /** 实际数量 */
    realityQty?: number;
    /**  商品编码  */
    skuId?: string;
    /**  商品规格  */
    skuModel?: string;
    /**  商品名称  */
    skuName?: string;
    /**  入库调价单id  */
    stockInPriceId?: string;
  };

  type StockInPriceHasChangingVO = {
    /** 提示消息 */
    message?: string;
    /** 原单号 */
    originalBillCode?: string;
  };

  type StockInPriceInfoVO = {
    /** 创建时间 */
    createTime?: string;
    /** 创建人 */
    creater?: string;
    /** 创建人id */
    createrId?: string;
    /** 明细信息 */
    detail?: StockInPriceDetailVO[];
    /** 单据编号 */
    id?: string;
    /** 日志 */
    log?: OrderTraceVO[];
    /** 最后操作人 */
    operator?: string;
    /** 最后操作人id */
    operatorId?: string;
    /**  调价类型 0：入库调价 1：返利调价  */
    priceType?: number;
    /** 调整原因 */
    remark?: string;
    /** 状态:0-未提审,1-已提审 2-审核中 3-审核通过 4-已取消 */
    status?: number;
    /** 状态:0-未提审,1-已提审 2-审核中 3-审核通过 4-已取消名称 */
    statusName?: string;
    /** 供应商编码 */
    supplierId?: string;
    /** 供应商名称 */
    supplierName?: string;
  };

  type StockInPricePageQueryVO = {
    /**  入库单号数组  */
    bizStockInResultIds?: string[];
    /**  制单人  */
    creater?: string;
    /**  制单人id  */
    createrId?: string;
    /**  单据编号  */
    id?: string;
    /**  单据编号数组  */
    ids?: string[];
    /** 结束时间 */
    maxCreateTime?: string;
    /** 开始时间 */
    minCreateTime?: string;
    /**  最后操作人  */
    operator?: string;
    /**  最后操作人id  */
    operatorId?: string;
    pageQuery?: PageQuery;
    /**  调整原因  */
    remark?: string;
    /** 商品编码 */
    skuId?: string;
    /**  状态:0-未提审,1-已提审 2-审核中 3-审核通过 4-已取消  */
    status?: number;
    /**  供应商编码  */
    supplierId?: string;
    /**  供应商名称  */
    supplierName?: string;
    /**  租户编码  */
    tenantId?: string;
    /**  修改时间  */
    updateTime?: string;
  };

  type StockInPriceUpdateVO = {
    /** 明细信息 */
    detail?: StockInPriceDetailCreateVO[];
    /** id */
    id: string;
    /** 调价类型 0：入库调价 1：返利调价 */
    priceType?: number;
    /** 调整原因 */
    remark?: string;
    /** 状态:0-未提审,1-已提审 2-审核中 3-审核通过 4-已取消 */
    status?: number;
    /** 供应商编码 */
    supplierId?: string;
    /** 供应商名称 */
    supplierName?: string;
  };

  type StockInPriceVO = {
    /**  创建时间  */
    createTime?: string;
    /**  制单人  */
    creater?: string;
    /**  制单人id  */
    createrId?: string;
    /**  单据编号  */
    id?: string;
    /**  最后操作人  */
    operator?: string;
    /**  最后操作人id  */
    operatorId?: string;
    /**  调价类型 0：入库调价 1：返利调价  */
    priceType?: number;
    /**  调整原因  */
    remark?: string;
    /**  状态:0-未提审,1-已提审 2-审核中 3-审核通过 4-已取消  */
    status?: number;
    /**  供应商编码  */
    supplierId?: string;
    /**  供应商名称  */
    supplierName?: string;
    /**  修改时间  */
    updateTime?: string;
  };

  type StockInTaxChangeCreateVO = {
    /** 明细信息 */
    detail?: StockInTaxChangeDetailCreateVO[];
    /** 税率变更原因 */
    reason?: string;
    /** 供应商id */
    supplierId?: string;
    /** 供应商名称 */
    supplierName?: string;
  };

  type StockInTaxChangeDetailCreateVO = {
    /** 调整后最新税率 */
    afterFixTaxRate?: number;
    /** 调整后最新税率(百分比) */
    afterFixTaxRatePercent?: number;
    /** 条码 */
    barCode?: string;
    /** 调整前最新税率 */
    beforeFixTaxRate?: number;
    /** 采购入库单号  wms_biz_stock_out_result的主键 */
    bizStockInResultId?: string;
    /** 采购入库结果单批号id   此表wms_biz_stock_in_result_produce的主键 */
    bizStockInResultProduceId?: string;
    /** 主键 */
    id?: string;
    /** 生产厂家 */
    manufacturer?: string;
    /** 采购单号 */
    orderId?: string;
    /** 原单税率 */
    originalTaxRate?: number;
    /** 采购价(含税) */
    price?: number;
    /** 批号 */
    produceCode?: string;
    /** 数量 */
    qty?: number;
    /** 商品编码 */
    skuId?: string;
    /** 规格 */
    skuModel?: string;
    /** 商品名称 */
    skuName?: string;
    /** 商品名称拼音 */
    skuPinyin?: string;
    /** 仓库编码 */
    storeCode?: string;
    /** 仓库名称 */
    storeName?: string;
    /** 单位名称 */
    unitName?: string;
  };

  type StockInTaxChangeDetailFixVO = {
    /**  金额  */
    amount?: number;
    /**  单据调整类型  */
    fixOrderType?: string;
    /**  主键  */
    id?: string;
    /**  不含税金额  */
    noTaxAmount?: number;
    /**  采购单号  */
    orderId?: string;
    /**  单据编码  */
    originalOrderId?: string;
    /**  税额  */
    payTaxAmt?: number;
    /**  采购价(含税)  */
    price?: number;
    /**  批号  */
    produceCode?: string;
    /**  数量  */
    qty?: number;
    /**  商品编码  */
    skuId?: string;
    /**  规格  */
    skuModel?: string;
    /**  商品名称  */
    skuName?: string;
    /**  税率  */
    taxRate?: number;
  };

  type StockInTaxChangeDetailVO = {
    /**  调整后最新税率  */
    afterFixTaxRate?: number;
    /**  调整后最新税率百分比  */
    afterFixTaxRatePercent?: number;
    /**  条码  */
    barCode?: string;
    /**  调整前最新税率  */
    beforeFixTaxRate?: number;
    /**  采购入库单号  wms_biz_stock_out_result的主键  */
    bizStockInResultId?: string;
    /** 采购入库结果单批号明细id */
    bizStockInResultProduceId?: string;
    /**  创建时间  */
    createTime?: string;
    /**  主键  */
    id?: string;
    /**  生产厂家  */
    manufacturer?: string;
    /**  采购单号  */
    orderId?: string;
    /**  原单税率  */
    originalTaxRate?: number;
    /**  采购价(含税)  */
    price?: number;
    /**  批号  */
    produceCode?: string;
    /**  数量  */
    qty?: number;
    /**  商品编码  */
    skuId?: string;
    /**  规格  */
    skuModel?: string;
    /**  商品名称  */
    skuName?: string;
    /**  商品名称拼音  */
    skuPinyin?: string;
    /**  入库税率变更单id  */
    stockInTaxChangeId?: string;
    /** 仓库编码 */
    storeCode?: string;
    /** 仓库名称 */
    storeName?: string;
    /**  租户id  */
    tenantId?: string;
    /**  单位名称  */
    unitName?: string;
    /**  最后修改时间  */
    updateTime?: string;
  };

  type StockInTaxChangeInfoVO = {
    /** 创建时间 */
    createTime?: string;
    /** 创建人 */
    creater?: string;
    /** 创建人编码 */
    createrId?: string;
    /** 明细信息 */
    detail?: StockInTaxChangeDetailVO[];
    /** 明细信息 */
    detailFix?: StockInTaxChangeDetailFixVO[];
    /** 主键 */
    id?: string;
    /** 日志 */
    log?: OrderTraceVO[];
    /** 修改人 */
    operator?: string;
    /** 修改人编码 */
    operatorId?: string;
    /** 税率变更原因 */
    reason?: string;
    /** 状态:0-未提审,1-已提审 2-审核中 3-审核通过 4-已取消 */
    status?: number;
    /** 状态:0-未提审,1-已提审 2-审核中 3-审核通过 4-已取消名称 */
    statusName?: string;
    /** 供应商id */
    supplierId?: string;
    /** 供应商名称 */
    supplierName?: string;
  };

  type StockInTaxChangePageQueryVO = {
    /**  制单人  */
    creater?: string;
    /**  单据编号  */
    id?: string;
    /** 结束生效时间 */
    maxApproveTime?: string;
    /** 结束创建时间 */
    maxCreateTime?: string;
    /** 开始生效时间 */
    minApproveTime?: string;
    /** 开始创建时间 */
    minCreateTime?: string;
    pageQuery?: PageQuery;
    /**  商品关键词查询 名称/编码/拼音  */
    skuInfo?: string;
    /**  状态:0-未提审,1-已提审 2-审核中 3-审核通过 4-已取消  */
    status?: number;
    /**  供应商id  */
    supplierId?: string;
    /**  供应商名称  */
    supplierName?: string;
  };

  type StockInTaxChangeUpdateVO = {
    /** 明细信息 */
    detail?: StockInTaxChangeDetailCreateVO[];
    /** id */
    id: string;
    /** 税率变更原因 */
    reason?: string;
    /** 供应商id */
    supplierId?: string;
    /** 供应商名称 */
    supplierName?: string;
  };

  type StockInTaxChangeVO = {
    /**  生效时间  */
    approveTime?: string;
    /**  创建时间  */
    createTime?: string;
    /**  制单人  */
    creater?: string;
    /**  制单人编码  */
    createrId?: string;
    /**  主键  */
    id?: string;
    /**  修改人  */
    operator?: string;
    /**  修改人编码  */
    operatorId?: string;
    /**  税率变更原因  */
    reason?: string;
    /**  状态:0-未提审,1-已提审 2-审核中 3-审核通过 4-已取消  */
    status?: number;
    /**  供应商id  */
    supplierId?: string;
    /**  供应商名称  */
    supplierName?: string;
    /**  租户编码  */
    tenantId?: string;
    /**  修改时间  */
    updateTime?: string;
  };

  type StockInboundPageQueryDTO = {
    /**  批次  */
    batchNo?: string;
    /** 客户ID */
    cusId?: string;
    /**  客户集  */
    entrustCusCode?: string;
    /**  客户集名称  */
    entrustCusName?: string;
    /**  是否有可用数量  */
    hasInventoryQty?: boolean;
    /**  剩余数量  */
    hasRemainingQty?: boolean;
    pageQuery?: PageQuery;
    /**  生产批号  */
    produceCode?: string;
    /**  项目类型查询 true-查项目商品库存列表, false-普通商品  */
    project?: boolean;
    /** 所属项目名称  */
    projectName?: string;
    /** 销售类型 0 传统 1 BC模式 */
    saleType?: number;
    /** 商品名称/拼音码/编码/条码 */
    skuInfo?: string;
    /**  入库结束时间  */
    storageTimeEnd?: string;
    /**  入库开始时间  */
    storageTimeStart?: string;
    /**  物理仓编码  */
    storeCode?: string;
    /**  物理仓名称  */
    storeName?: string;
    /**  供应商编码  */
    supplierId?: string;
    /**  供应商简称  */
    supplierShortName?: string;
    /**  仓库类型 0-正品 1-次品 2-待处理  */
    warehouseType?: number;
  };

  type SupplierAccountVO = {
    /** 开户银行 */
    accountBank?: string;
    /** 账户号码 */
    accountCode?: string;
    /** 账户名称 */
    accountName?: string;
    /** 账户类型 1 收款账户 2 付款账户 */
    accountType?: number;
    /** 主键 */
    id?: string;
    /** 是否默认 */
    isDefault?: boolean;
    /** 原单id */
    originalId?: string;
    /** 说明 */
    remark?: string;
  };

  type SupplierAddressListVO = {
    /** 收货人 */
    accepter?: string;
    /** 详细地址 */
    address?: string;
    /** 区名称 */
    areaName?: string;
    /** 市名称 */
    cityName?: string;
    /** 主键 */
    id?: string;
    /** 是否默认地址 */
    isDefault?: boolean;
    /** 手机号码 */
    mobilePhone?: string;
    /** 省名称 */
    provinceName?: string;
    /** 街道/乡镇名称 */
    streetName?: string;
    /** 联系电话 */
    telephone?: string;
  };

  type SupplierAddressVO = {
    /** 收货人 */
    accepter?: string;
    /** 详细地址 */
    address: string;
    /** 区编码 */
    areaId: string;
    /** 区名称 */
    areaName: string;
    /** 市编码 */
    cityId: string;
    /** 市名称 */
    cityName: string;
    /** 主键 */
    id?: string;
    /** 身份证号码 */
    idCard?: string;
    /** 是否默认 */
    isDefault?: boolean;
    /** 手机号码 */
    mobilePhone?: string;
    /** 原单id */
    originalId?: string;
    /** 邮编 */
    postCode?: string;
    /** 省编码 */
    provinceId: string;
    /** 省名称 */
    provinceName: string;
    /** 备注 */
    remark?: string;
    /** 性别 */
    sex?: number;
    /** 街道/乡镇编码 */
    streetId: string;
    /** 街道/乡镇名称 */
    streetName: string;
    /** 联系电话 */
    telephone?: string;
  };

  type SupplierChangeExistVO = {
    /** 企业资料已存在的变更单Id */
    existBillCode?: string;
    /** 未完结的原变更单Id */
    notFinishBillCode?: string;
    /** 已注册企业Id */
    regBillCode?: string;
  };

  type SupplierChangeVerifyVO = {
    /** 区/县编号 */
    areaId?: string;
    /** 市编号 */
    cityId?: string;
    /** 单据编号 新增时不用传 */
    id?: string;
    /** 纳税人识别号 */
    nationalTaxNo?: string;
    /** 当前供应商Id（校验当前供应商已存在未完结变更单）传 nowSupplierId 时其它参数不传 */
    nowSupplierId?: string;
    /** 省编号 */
    provinceId?: string;
    /** 供应商编码 新增首营单据时可不传，其他情况必传 */
    supplierId?: string;
    /** 供应商名称 */
    supplierName?: string;
  };

  type SupplierCompanySampleVO = {
    /** 主键 */
    id?: string;
    /** 图片路径 */
    licenseImg?: string;
    /** 名称 */
    licenseName?: string;
    /** 原单id */
    originalId?: string;
  };

  type SupplierContactsVO = {
    /** 受托人 */
    contacts: string;
    /** 联系电话 */
    contactsPhone?: string;
    /** 职务 */
    duties?: string;
    /** 发证日期 */
    effectiveDate?: string;
    /** 失效日期 */
    expirationDate?: string;
    /** 主键 */
    id?: string;
    /** 受托人身份证 */
    idCard: string;
    /** 是否默认 */
    isDefault?: boolean;
    /** 是否长期 */
    isLongTerm?: boolean;
    /** 证照路径 */
    licenseUrlList?: string[];
    /** 原单id */
    originalId?: string;
    /** 性别 1、男 0、女 */
    sex: number;
    /** 类型 */
    type?: string;
  };

  type SupplierInfoChangeListVO = {
    /** 开户账号 */
    account?: string;
    /** 开户行 */
    accountBank?: string;
    /** 区编码 */
    areaId?: string;
    /** 区名称 */
    areaName?: string;
    /** 结算周期 */
    billingCycle?: number;
    /** 审核类型 0 首营审核 1 变更审核 */
    checkType?: number;
    /** 市编码 */
    cityId?: string;
    /** 市名称 */
    cityName?: string;
    /** 创建时间 */
    createTime?: string;
    /** 制单人 */
    creater?: string;
    /** 制单人编码 */
    createrId?: string;
    /** 压损可退 */
    crushedReturnable?: boolean;
    /** 生效日期 */
    effectiveDate?: string;
    /** 成立日期 */
    establishedDate?: string;
    /** 失效日期 */
    expiryDate?: string;
    /** 传真 */
    fax?: string;
    /** 完结时间 */
    finishTime?: string;
    /** 单据编号 */
    id?: string;
    /** 生效状态 */
    isValid?: number;
    /** 法人 */
    legalPerson?: string;
    /** 营业执照 */
    licenseNo?: string;
    /** 国税注册号 */
    nationalTaxNo?: string;
    /** 办公地址 */
    officeAddress?: string;
    /** 修改人 */
    operator?: string;
    /** 修改人编码 */
    operatorId?: string;
    /** 组织机构代码 */
    organizationCode?: string;
    /** 联系电话 */
    phone?: string;
    /** 流程时效(天) */
    processTimes?: number;
    /** 省编码 */
    provinceId?: string;
    /** 省名称 */
    provinceName?: string;
    /** 注册地址 */
    registeredAddress?: string;
    /** 状态:0-未提审,1-已提审 2-审核中 3-审核通过 4-已取消 */
    status?: number;
    /** 供应商编码 */
    supplierId?: string;
    /** 供应商等级 */
    supplierLevel?: number;
    /** 供应商名称 */
    supplierName?: string;
    /** 供应商简称 */
    supplierShortName?: string;
    /** 供应商类型 */
    supplierType?: number;
    /** 供应商类型名称 */
    supplierTypeName?: string;
    /** 税组合 */
    taxRate?: number;
    /** 修改时间 */
    updateTime?: string;
  };

  type SupplierInfoChangePageQueryVO = {
    /** 区编码 */
    areaId?: string;
    /** 区名称 */
    areaName?: string;
    /** 审核类型 0 首营审核 1 变更审核 */
    checkType?: number;
    /** 市编码 */
    cityId?: string;
    /** 市名称 */
    cityName?: string;
    /** 制单人 */
    creater?: string;
    endFinishTime?: string;
    /** 创建结束时间 */
    endTime?: string;
    /** 单据编码 */
    id?: string;
    /** 生效状态: 0 未生效 1 生效 */
    isValid?: number;
    pageQuery?: PageQuery;
    /** 联系电话 */
    phone?: string;
    /** 省编码 */
    provinceId?: string;
    /** 省名称 */
    provinceName?: string;
    /** 开始完结时间 */
    startFinishTime?: string;
    /** 创建开始时间 */
    startTime?: string;
    /** 状态:0-未提审,1-已提审 2-审核中 3-审核通过 4-已取消 */
    status?: number;
    /** 供应商编码 */
    supplierId?: string;
    /** 供应商名称 */
    supplierName?: string;
    /** 供应商类型 */
    supplierType?: number;
  };

  type SupplierInfoChangeVO = {
    /** 开户账号 */
    account?: string;
    /** 开户行 */
    accountBank?: string;
    /** 结算账户列表 */
    accountList?: SupplierAccountVO[];
    /** 收货人信息 */
    addressList?: SupplierAddressVO[];
    /** 区编码 */
    areaId?: string;
    /** 区名称 */
    areaName?: string;
    /** 结算周期 */
    billingCycle?: number;
    /** 业务审核人 */
    business?: string;
    /** 业务部电话 */
    businessPhone?: string;
    /** 经营/生产范围 */
    businessProductionScope?: string;
    /** 业务审核状态 0未审核 1已审核 */
    businessStatus?: number;
    /** 业务审核时间 */
    businessTime?: string;
    /** 经营方式 */
    businessWay?: string;
    /** 审核类型 0 首营审核 1 变更审核 */
    checkType?: number;
    /** 市编码 */
    cityId: string;
    /** 市名称 */
    cityName: string;
    /** 受托人信息 */
    contactsList?: SupplierContactsVO[];
    /** 压损可退 */
    crushedReturnable?: boolean;
    /** 资料属性 */
    dataProperties?: number;
    /** 资料类型 */
    dataType?: number;
    /** 本企业联系人 */
    enterpriseContacts?: string;
    /** 本企业联系人名称 */
    enterpriseContactsName?: string;
    /** 企业负责人 */
    enterprisePerson?: string;
    /** 企业负责人身份证 */
    enterprisePersonIdCard?: string;
    /** 成立日期 */
    establishedDate?: string;
    /** 传真 */
    fax?: string;
    /** 建档号 */
    filingNo?: string;
    /** 单据编码 */
    id?: string;
    /** 生效状态  0未生效 1生效 */
    isValid?: number;
    /** 法人 */
    legalPerson: string;
    /** 证照信息 */
    licenseList?: SupplierLicenseVO[];
    /** 营业执照 */
    licenseNo?: string;
    /** 纳税人识别号 */
    nationalTaxNo: string;
    /** 办公地址 */
    officeAddress?: string;
    /** 联系电话 */
    phone?: string;
    /** 邮政编码 */
    postCode?: string;
    /** 省编码 */
    provinceId: string;
    /** 省名称 */
    provinceName: string;
    /** 质量负责人 */
    qualityPerson?: string;
    /** 质量负责人身份证 */
    qualityPersonIdCard?: string;
    /** 注册地址 */
    registeredAddress?: string;
    /** 备注 */
    remark?: string;
    /** 单位样章 */
    sampleChapterList?: SupplierCompanySampleVO[];
    /** 供应范围编码数组 */
    scopeArray?: string[];
    scopeList?: SupplierScopeVO[];
    /** 经营范围是否不含冰冻药品 */
    scopeNotFrozenMedicines?: boolean;
    /** 经营范围是否不含冷藏药品 */
    scopeNotRefrigeratedMedicines?: boolean;
    /** 状态:0-未提审,1-已提审 2-审核中 3-审核通过 4-已取消 */
    status?: number;
    /** 质量管理审核人 */
    supervise?: string;
    /** 质管部电话 */
    supervisePhone?: string;
    /** 质量管理审核状态  0未审核 1已审核 */
    superviseStatus?: number;
    /** 质量管理审核时间 */
    superviseTime?: string;
    /** 供应商编码 */
    supplierId?: string;
    /** 供应商等级 */
    supplierLevel?: number;
    /** 供应商名称 */
    supplierName: string;
    /** 供应商简称 */
    supplierShortName?: string;
    /** 供应商类型 */
    supplierType: number;
    /** 税组合 */
    taxRate?: number;
    /** 单位票样 */
    ticketChapterList?: SupplierCompanySampleVO[];
    /** 社会统一信用代码 */
    unifiedCreditCode: string;
  };

  type SupplierInfoListVO = {
    /** 开户账号 */
    account?: string;
    /** 开户行 */
    accountBank?: string;
    /** 区编码 */
    areaId?: string;
    /** 区名称 */
    areaName?: string;
    /** 结算周期 */
    billingCycle?: number;
    /** 市编码 */
    cityId?: string;
    /** 市名称 */
    cityName?: string;
    /** 创建时间 */
    createTime?: string;
    /** 创建人 */
    creater?: string;
    /** 创建人编码 */
    createrId?: string;
    /** 压损可退 */
    crushedReturnable?: boolean;
    /** 生效日期 */
    effectiveDate?: string;
    /** 成立日期 */
    establishedDate?: string;
    /** 失效日期 */
    expiryDate?: string;
    /** 传真 */
    fax?: string;
    /** 主键 */
    id?: string;
    /** 不符合质量要求, true-不符合 */
    inConformityQuality?: boolean;
    /** 证照是否过期 */
    isExpiredByLicense?: boolean;
    /** 是否新增供应商 */
    isNewSupplier?: string;
    /** 生效状态 */
    isValid?: number;
    /** 法人 */
    legalPerson?: string;
    /** 营业执照 */
    licenseNo?: string;
    /** 国税注册号 */
    nationalTaxNo?: string;
    /** 办公地址 */
    officeAddress?: string;
    /** 修改人 */
    operator?: string;
    /** 修改人编码 */
    operatorId?: string;
    /** 组织机构代码 */
    organizationCode?: string;
    /** 联系电话 */
    phone?: string;
    /** 省编码 */
    provinceId?: string;
    /** 省名称 */
    provinceName?: string;
    /** 注册地址 */
    registeredAddress?: string;
    /** 状态:0-未提审,1-已提审 2-审核中 3-审核通过 4-已取消 */
    status?: number;
    /** 供应商等级 */
    supplierLevel?: number;
    /** 供应商名称 */
    supplierName?: string;
    /** 供应商简称 */
    supplierShortName?: string;
    /** 供应商类型 */
    supplierType?: number;
    /** 供应商类型名称 */
    supplierTypeName?: string;
    /** 税组合 */
    taxRate?: number;
    /** 修改时间 */
    updateTime?: string;
  };

  type SupplierInfoVO = {
    /** 开户账号 */
    account?: string;
    /** 开户行 */
    accountBank?: string;
    /** 结算账户列表 */
    accountList?: SupplierAccountVO[];
    /** 收货人信息 */
    addressList?: SupplierAddressVO[];
    /** 区编码 */
    areaId?: string;
    /** 区名称 */
    areaName?: string;
    /** 结算周期 */
    billingCycle?: number;
    /** 业务审核人 */
    business?: string;
    /** 业务部电话 */
    businessPhone?: string;
    /** 经营/生产范围 */
    businessProductionScope?: string;
    /** 业务审核状态 0未审核 1已审核 */
    businessStatus?: number;
    /** 业务审核时间 */
    businessTime?: string;
    /** 经营方式 */
    businessWay?: string;
    /** 市编码 */
    cityId: string;
    /** 市名称 */
    cityName: string;
    /** 受托人信息 */
    contactsList?: SupplierContactsVO[];
    /** 压损可退 */
    crushedReturnable?: boolean;
    /** 资料属性 */
    dataProperties?: number;
    /** 资料类型 */
    dataType?: number;
    /** 生效时间 */
    effectiveTime: string;
    /** 本企业联系人 */
    enterpriseContacts?: string;
    /** 本企业联系人名称 */
    enterpriseContactsName?: string;
    /** 企业负责人 */
    enterprisePerson?: string;
    /** 企业负责人身份证 */
    enterprisePersonIdCard?: string;
    /** 成立日期 */
    establishedDate?: string;
    /** 失效时间 */
    expirationTime: string;
    /** 传真 */
    fax?: string;
    /** 建档号 */
    filingNo?: string;
    /** 供应商id */
    id?: string;
    /** 生效状态  0未生效 1生效 */
    isValid?: number;
    /** 法人 */
    legalPerson?: string;
    /** 证照信息 */
    licenseList?: SupplierLicenseVO[];
    /** 营业执照 */
    licenseNo?: string;
    /** 纳税人识别号 */
    nationalTaxNo: string;
    /** 办公地址 */
    officeAddress?: string;
    /** 联系电话 */
    phone?: string;
    /** 邮政编码 */
    postCode?: string;
    /** 省编码 */
    provinceId: string;
    /** 省名称 */
    provinceName: string;
    /** 质量负责人 */
    qualityPerson?: string;
    /** 质量负责人身份证 */
    qualityPersonIdCard?: string;
    /** 注册地址 */
    registeredAddress?: string;
    /** 备注 */
    remark?: string;
    /** 单位样章 */
    sampleChapterList?: SupplierCompanySampleVO[];
    /** 供应范围编码数组 */
    scopeArray?: string[];
    /** 经营范围是否不含冰冻药品 */
    scopeNotFrozenMedicines?: boolean;
    /** 经营范围是否不含冷藏药品 */
    scopeNotRefrigeratedMedicines?: boolean;
    /** 状态:0-未提审,1-已提审 2-审核中 3-审核通过 4-已取消 */
    status?: number;
    /** 质量管理审核人 */
    supervise?: string;
    /** 质管部电话 */
    supervisePhone?: string;
    /** 质量管理审核状态  0未审核 1已审核 */
    superviseStatus?: number;
    /** 质量管理审核时间 */
    superviseTime?: string;
    /** 供应商等级 */
    supplierLevel?: number;
    /** 供应商名称 */
    supplierName: string;
    /** 供应商简称 */
    supplierShortName?: string;
    /** 供应商类型 */
    supplierType: number;
    /** 税组合 */
    taxRate?: number;
    /** 单位票样 */
    ticketChapterList?: SupplierCompanySampleVO[];
    /** 社会统一信用代码 */
    unifiedCreditCode?: string;
  };

  type SupplierInfoVOPageQuery = {
    /** 区编码 */
    areaId?: string;
    /** 区名称 */
    areaName?: string;
    /** 市编码 */
    cityId?: string;
    /** 市名称 */
    cityName?: string;
    /** 生效状态: 0 未生效 1 生效 */
    isValid?: number;
    pageQuery?: PageQuery;
    /** 项目id */
    projectInfoId?: string;
    /** 省编码 */
    provinceId?: string;
    /** 省名称 */
    provinceName?: string;
    /** 供应商编码 */
    supplierId?: string;
    /** 供应商名称 */
    supplierName?: string;
    /** 供应商类型 */
    supplierType?: number;
    /** false: 不显示标签 true: 显示标签 */
    tag?: boolean;
  };

  type SupplierLicenseVO = {
    /** 预警天数 */
    earlyWarningDays?: number;
    /** 生效日期 */
    effectiveDate: string;
    /** 过期可用性 1:可用   0:不可用 */
    expireDusability?: boolean;
    /** 失效日期 */
    expiryDate?: string;
    /** 主键 */
    id?: string;
    /** 是否长期 */
    isLongTerm?: boolean;
    /** 证照编码 */
    licenseCode: string;
    /** 证照名称 */
    licenseName: string;
    /** 证照类型 */
    licenseType: number;
    /** 证照图片路径 */
    licenseUrlList: string[];
    /** 原单id */
    originalId?: string;
  };

  type SupplierScopeVO = {
    /** 经营类别id */
    gspCategoryId: string;
    /** 经营类别名称 */
    gspCategoryName: string;
    /** 主键 */
    id?: string;
  };

  type SupplierValidVO = {
    ids?: string[];
    isValid?: number;
    validReason?: string;
  };

  type SupplierWareSubscriptionCreateVO = {
    /**  备注  */
    remark?: string;
    /** 商品列表 */
    skuList?: SupplierWareSubscriptionDetailVO[];
    /**  供应商编码  */
    supplierId?: string;
  };

  type SupplierWareSubscriptionDetailVO = {
    /**  条码  */
    barCode?: string;
    /**  经营范围编码  */
    gspCategory?: string;
    /**  经营范围名称  */
    gspCategoryName?: string;
    /**  主键  */
    id?: string;
    /**  生产厂家  */
    manufacturer?: string;
    /**  商品编码  */
    skuId?: string;
    /**  规格  */
    skuModel?: string;
    /**  商品名称  */
    skuName?: string;
    /**  商品名称拼音  */
    skuPinyin?: string;
    /**  单位名称  */
    unitName?: string;
  };

  type SupplierWareSubscriptionImportVO = {
    /** 失败数据url */
    downloadUrl?: string;
    /** 导入说明 */
    importInstruction?: string;
    /** 导入数量 */
    importQty?: number;
    /** 导入成功商品列表 */
    skuList?: SupplierWareSubscriptionDetailVO[];
    /** 是否成功 */
    success?: boolean;
    /** 成功数量 */
    successQty?: number;
  };

  type SupplierWareSubscriptionPageQueryVO = {
    /** 制单人 */
    creater?: string;
    pageQuery?: PageQuery;
    /**  状态 0: 正常 1: 停用  */
    status?: number;
    /**  供应商id  */
    supplierId?: string;
    /**  供应商名称  */
    supplierName?: string;
  };

  type SupplierWareSubscriptionStartSwitchVO = {
    /**  单据编码  */
    id?: string;
    /**  备注  */
    remark?: string;
    /**  0：启用 1：停用  */
    status?: number;
  };

  type SupplierWareSubscriptionUpdateVO = {
    /**  主键  */
    id?: string;
    /**  备注  */
    remark?: string;
    /** 商品列表 */
    skuList?: SupplierWareSubscriptionDetailVO[];
    /**  供应商编码  */
    supplierId?: string;
  };

  type SupplierWareSubscriptionVO = {
    /** 区名称 */
    areaName?: string;
    /** 市名称 */
    cityName?: string;
    /** 创建时间 */
    createTime?: string;
    /** 创建人 */
    creater?: string;
    /** 创建人编码 */
    createrId?: string;
    /** 主键 */
    id?: string;
    /** 所在区域 */
    locationRegion?: string;
    /** 日志 */
    log?: OrderTraceVO[];
    /** 纳税人识别号 */
    nationalTaxNo?: string;
    /** 省名称 */
    provinceName?: string;
    /** 备注 */
    remark?: string;
    /** 商品列表 */
    skuList?: SupplierWareSubscriptionDetailVO[];
    /** 状态 0: 正常 1: 停用 */
    status?: number;
    /** 供应商id */
    supplierId?: string;
    /** 供应商名称 */
    supplierName?: string;
    /** 供应商类型 */
    supplierType?: number;
    /** 供应商类型 */
    supplierTypeName?: string;
    /** 商品订阅数 */
    wareSubscriptionCount?: number;
  };

  type UnpaidMonthlySettlePageQueryVO = {
    pageQuery?: PageQuery;
    /**  月结主表ID  */
    settleId?: string;
    /**  结账月份  */
    settleMonth?: string;
    /**  供应商名称  */
    supplier?: string;
    /**  供应商编码  */
    supplierId?: string;
  };

  type UnpaidMonthlySettleVO = {
    /**  期末逾期金额  */
    afterAmt?: number;
    /**  期初金额  */
    beforeAmt?: number;
    /**  创建时间  */
    createTime?: string;
    /**  id  */
    id?: string;
    /**  月结主表ID  */
    settleId?: string;
    /**  结账月份  */
    settleMonth?: string;
    /**  供应商名称  */
    supplier?: string;
    /**  供应商编码  */
    supplierId?: string;
    /**  应付抵扣应收金额  */
    totalDiscountAmt?: number;
    /**  发票勾稽金额  */
    totalInvoiceAmt?: number;
    /**  付款金额  */
    totalPayAmt?: number;
    /**  退款抵扣应收  */
    totalRefundAmt?: number;
    /**  预付款抵扣金额  */
    totalSettlePrepayAmt?: number;
  };

  type ZdStockInCreateVO = {
    /** 收货单明细 */
    detail: ReceiptOrderDetailsVO[];
    /** 附件 */
    files: string[];
    /** 采购订单号 */
    poOrderId: string;
  };

  type ImportExcelResultVOOrderImportVO_ = {
    /** 导入成功列表 */
    data?: OrderImportVO[];
    /** 失败数据url */
    downloadUrl?: string;
    /** 失败数量 */
    failQty?: number;
    /** 导入说明 */
    importInstruction?: string;
    /** 导入数量 */
    importQty?: number;
    /** 是否成功 */
    success?: boolean;
    /** 成功数量 */
    successQty?: number;
  };

  type ImportExcelResultVOProjectImportExcelVO_ = {
    /** 导入成功列表 */
    data?: ProjectImportExcelVO[];
    /** 失败数据url */
    downloadUrl?: string;
    /** 失败数量 */
    failQty?: number;
    /** 导入说明 */
    importInstruction?: string;
    /** 导入数量 */
    importQty?: number;
    /** 是否成功 */
    success?: boolean;
    /** 成功数量 */
    successQty?: number;
  };

  type PaginationBizStockResultVO_ = {
    current?: number;
    records?: BizStockResultVO[];
    size?: number;
    total?: number;
  };

  type PaginationConsignmentLogVo_ = {
    current?: number;
    records?: ConsignmentLogVo[];
    size?: number;
    total?: number;
  };

  type PaginationConsignmentVO_ = {
    current?: number;
    records?: ConsignmentVO[];
    size?: number;
    total?: number;
  };

  type PaginationDirectAgreementVO_ = {
    current?: number;
    records?: DirectAgreementVO[];
    size?: number;
    total?: number;
  };

  type PaginationGspInPurRecordVO_ = {
    current?: number;
    records?: GspInPurRecordVO[];
    size?: number;
    total?: number;
  };

  type PaginationInvoiceAppListVO_ = {
    current?: number;
    records?: InvoiceAppListVO[];
    size?: number;
    total?: number;
  };

  type PaginationOperationPlanVO_ = {
    current?: number;
    records?: OperationPlanVO[];
    size?: number;
    total?: number;
  };

  type PaginationOrderDetailsListVO_ = {
    current?: number;
    records?: OrderDetailsListVO[];
    size?: number;
    total?: number;
  };

  type PaginationOrderListVO_ = {
    current?: number;
    records?: OrderListVO[];
    size?: number;
    total?: number;
  };

  type PaginationPrepayApplyVO_ = {
    current?: number;
    records?: PrepayApplyVO[];
    size?: number;
    total?: number;
  };

  type PaginationPrepayDiscountMonthlySettleDetailVO_ = {
    current?: number;
    records?: PrepayDiscountMonthlySettleDetailVO[];
    size?: number;
    total?: number;
  };

  type PaginationPrepayMonthlySettleVO_ = {
    current?: number;
    records?: PrepayMonthlySettleVO[];
    size?: number;
    total?: number;
  };

  type PaginationPrepayPaidVO_ = {
    current?: number;
    records?: PrepayPaidVO[];
    size?: number;
    total?: number;
  };

  type PaginationPrepayViewVO_ = {
    current?: number;
    records?: PrepayViewVO[];
    size?: number;
    total?: number;
  };

  type PaginationProjectCreditAdjustVO_ = {
    current?: number;
    records?: ProjectCreditAdjustVO[];
    size?: number;
    total?: number;
  };

  type PaginationProjectCreditLogVO_ = {
    current?: number;
    records?: ProjectCreditLogVO[];
    size?: number;
    total?: number;
  };

  type PaginationProjectCreditVO_ = {
    current?: number;
    records?: ProjectCreditVO[];
    size?: number;
    total?: number;
  };

  type PaginationProjectInfoVO_ = {
    current?: number;
    records?: ProjectInfoVO[];
    size?: number;
    total?: number;
  };

  type PaginationProjectWareAdjustVO_ = {
    current?: number;
    records?: ProjectWareAdjustVO[];
    size?: number;
    total?: number;
  };

  type PaginationProjectWareVO_ = {
    current?: number;
    records?: ProjectWareVO[];
    size?: number;
    total?: number;
  };

  type PaginationPurContractDetailVO_ = {
    current?: number;
    records?: PurContractDetailVO[];
    size?: number;
    total?: number;
  };

  type PaginationPurContractVO_ = {
    current?: number;
    records?: PurContractVO[];
    size?: number;
    total?: number;
  };

  type PaginationPurPlanDetailVO_ = {
    current?: number;
    records?: PurPlanDetailVO[];
    size?: number;
    total?: number;
  };

  type PaginationPurPlanLogVO_ = {
    current?: number;
    records?: PurPlanLogVO[];
    size?: number;
    total?: number;
  };

  type PaginationPurPlanVO_ = {
    current?: number;
    records?: PurPlanVO[];
    size?: number;
    total?: number;
  };

  type PaginationPurReturnListVO_ = {
    current?: number;
    records?: PurReturnListVO[];
    size?: number;
    total?: number;
  };

  type PaginationPurWareViewVO_ = {
    current?: number;
    records?: PurWareViewVO[];
    size?: number;
    total?: number;
  };

  type PaginationPurchaseBizStockResultVO_ = {
    current?: number;
    records?: PurchaseBizStockResultVO[];
    size?: number;
    total?: number;
  };

  type PaginationSalesmanListVO_ = {
    current?: number;
    records?: SalesmanListVO[];
    size?: number;
    total?: number;
  };

  type PaginationSettleAccountVO_ = {
    current?: number;
    records?: SettleAccountVO[];
    size?: number;
    total?: number;
  };

  type PaginationSettlePoolPageVO_ = {
    current?: number;
    records?: SettlePoolPageVO[];
    size?: number;
    total?: number;
  };

  type PaginationStockDTO_ = {
    current?: number;
    records?: StockDTO[];
    size?: number;
    total?: number;
  };

  type PaginationStockInPriceVO_ = {
    current?: number;
    records?: StockInPriceVO[];
    size?: number;
    total?: number;
  };

  type PaginationStockInTaxChangeVO_ = {
    current?: number;
    records?: StockInTaxChangeVO[];
    size?: number;
    total?: number;
  };

  type PaginationSupplierInfoChangeListVO_ = {
    current?: number;
    records?: SupplierInfoChangeListVO[];
    size?: number;
    total?: number;
  };

  type PaginationSupplierInfoListVO_ = {
    current?: number;
    records?: SupplierInfoListVO[];
    size?: number;
    total?: number;
  };

  type PaginationSupplierWareSubscriptionVO_ = {
    current?: number;
    records?: SupplierWareSubscriptionVO[];
    size?: number;
    total?: number;
  };

  type PaginationUnpaidMonthlySettleVO_ = {
    current?: number;
    records?: UnpaidMonthlySettleVO[];
    size?: number;
    total?: number;
  };
}
