// @ts-ignore
/* eslint-disable */

declare namespace WSS {
  type AdvanceReceiptParameterVO = {
    /** 申请单编号 */
    billId?: string;
    /**  客户编码 与单位ID之间至少填写一个 */
    cusId?: string;
    /** 最大收款时间 */
    maxReceiptTime?: string;
    /** 最小收款时间 */
    minReceiptTime?: string;
    /**  单位ID(纳税人识别号) 与客户编码之间至少填写一个 */
    payerId?: string;
    /** 收款金额 */
    receiptAmt?: number;
  };

  type AdvanceReceiptVO = {
    /** 本次抵扣金额 */
    deductionAmt?: number;
    /** 冻结金额 */
    frozenAmt?: number;
    /** 收款单编码 */
    id?: string;
    /** 是否选中 */
    isSelect?: boolean;
    /** 待核销金额 */
    noWriteoffAmt?: number;
    /** 订单号，多个用英文 , 隔开 */
    orderIds?: string;
    /** 单位ID(纳税人识别号) */
    payerId?: string;
    /** 收款金额 */
    receiptAmt?: number;
    /** 收款日期 */
    receiptTime?: string;
    /** 已核销金额 */
    writeoffAmt?: number;
    /** 核销状态: 0-未核销 1-部分核销 2-全部核销 */
    writeoffStatus?: number;
  };

  type ArticulationInvoiceVO = {
    id?: string;
    /** 发票代码 */
    invoiceCode?: string;
    /** 开票日期 */
    invoiceDate?: string;
    /** 发票号码 */
    invoiceNumber?: string;
    /** 发票地址（多张逗号隔开）（红字发票用到） */
    invoiceUrl?: string;
    /** 不含税金额 */
    noTaxAmt?: number;
    /** 价税合计 */
    priceTaxTotal?: number;
    /** 发票税额 */
    taxAmount?: number;
  };

  type ArticulationResultVO = {
    /** 异常商品详情 */
    detailList?: RedInvoiceDetailErrVO[];
    /** 错误信息 */
    errorMessage?: string;
    success?: boolean;
  };

  type AttachmentVO = {
    /** 附件名称 */
    attachmentName?: string;
    /** 附件url */
    attachmentUrl?: string;
    /** 创建时间 */
    createTime?: string;
  };

  type BalanceLogMSVO = {
    /** 期末金额 */
    balance?: number;
    /** 期初金额 */
    beforeAmt?: number;
    /** 结算抵扣预收金额 */
    deductAmt?: number;
    /** 单位名称 */
    partnerName?: string;
    /** 单位类型 */
    partnerType?: string;
    /** 收款金额 */
    receiptAmt?: number;
    /** 销退红冲退款 */
    redOffReturnAmt?: number;
    /** 批发额外退款 */
    saleReturnAmt?: number;
    /** 结账月份 */
    settlementMonth?: string;
    /** 纳税人识别号 */
    taxPayerCode?: string;
    /** 收款核销金额 */
    writeOffAmt?: number;
  };

  type BalanceLogVO = {
    /** 余额（期末金额） */
    balance?: number;
    /** 开票金额 */
    invoiceAmt?: number;
    /** 单位名称 */
    partnerName?: string;
    /** 单位类型 */
    partnerType?: string;
    /** 收款金额 */
    receiptAmt?: number;
    /** 退款金额 */
    refundAmt?: number;
    /** 纳税人识别号 */
    taxPayerCode?: string;
    /** 核销金额 */
    writeOffAmt?: number;
  };

  type BalanceLogVOPageQuery = {
    pageQuery?: PageQuery;
    /** 月份（格式yyyy-MM），月结报表的时候用到 */
    settlementMonth?: string;
    /** 纳税人识别号 */
    taxPayerCode?: string;
  };

  type BatchNoQueryVO = {
    /** 批次 */
    batchNo?: string;
    /** 客户编码 */
    cusId?: string;
    pageQuery?: PageQuery;
    /** 项目名称 */
    projectName?: string;
    /** 商品编码 */
    skuId?: string;
    /** 仓库编码 */
    whId?: string;
  };

  type BillCheckHandleVO = {
    /** id */
    billId?: string;
    /** 审核备注 */
    remark?: string;
    /** 审核结果（0：审核不通过；1：审核通过；2：撤销审核） */
    resultCode?: number;
  };

  type BillDetailParamVO = {
    /** 销售对账单编号 */
    billIds?: string[];
    /** 发票申请单ID,有则传没有则不传 */
    invoiceAppId?: string;
    /** 查询来源 1-销售发票申请 2-销售发票登记 */
    source?: number;
  };

  type BillDetailWareVO = {
    /** 调整原因 */
    adjReason?: string;
    /** 外部单号 */
    externalOrderId?: string;
    /** 对账单明细id */
    id?: string;
    /** 不含税金额 */
    noTaxAmt?: number;
    /** 销售单号 */
    orderId?: string;
    /** 原单号明细Id */
    originBillDetailId?: string;
    /** 原单号 */
    originBillId?: string;
    /** 源单类型:1-销售出库 2-销退入库 */
    originBillType?: number;
    /** 包裹单号 */
    packageNo?: string;
    /** 数量 */
    qty?: number;
    /** 商品编码 */
    skuId?: string;
    /** 通知单号 */
    stockNoticeId?: string;
    /** 含税金额(价税合计) */
    taxAmt?: number;
    /** 仓库编码 */
    whId?: string;
    /** 仓库名称 */
    whName?: string;
  };

  type BillVO = {
    /** 对账月份 */
    checkingMonth?: string;
    /** 创建时间 */
    createTime?: string;
    /** 制单人（创建人） */
    creater?: string;
    /** 创建人编码 */
    createrId?: string;
    /** 客户编号 */
    cusId?: string;
    /** 客户名称 */
    cusName?: string;
    /** 详情：是否有导入任务处理中（0：否；1：是）；列表：是否有导入任务 */
    hasImportTask?: number;
    /** 主键 */
    id?: string;
    /** 发票申请/登记单号 */
    invoiceId?: string;
    /** 更新人 */
    operator?: string;
    /** 更新人编码 */
    operatorId?: string;
    /** 销退入库单原单号,多个用逗号隔开（列表的原单号=出库单原单号+入库单原单号） */
    originInBillId?: string;
    /** 销售出库单原单号,多个用逗号隔开（列表的原单号=出库单原单号+入库单原单号） */
    originOutBillId?: string;
    /** 价税合计（账单金额） */
    priceTaxTotal?: number;
    /** 结算状态（0：未提交结算、1：部分已提交结算、2：全部已提交结算） */
    settlementStatus?: number;
    /** 状态:0-未提审,1-已提审 2-审核中 3-审核通过 4-已取消 */
    status?: number;
    /** 状态 */
    statusTxt?: string;
    /** 更新时间 */
    updateTime?: string;
  };

  type CheckingBillDetailVO = {
    /** 调整原因 */
    adjReason?: string;
    adjustment?: SaleAdjustmentVO;
    /** 已核单数量 */
    checkQty?: number;
    /** 对账单号 */
    checkingBillId?: string;
    /** 对账月份 */
    checkingMonth?: string;
    /** 合同编号 */
    contractCode?: string;
    /** 药品分类 */
    drugCategory?: string;
    /** 外部单号 */
    externalOrderId?: string;
    /** 主键 */
    id?: string;
    /** 入库数量 */
    inQty?: number;
    /** 生产厂家 */
    manufacturer?: string;
    /** 不含税金额 */
    noTaxAmt?: number;
    /** 不含税单价 */
    noTaxPrice?: number;
    /** 销售单号 */
    orderId?: string;
    /** 原单号明细Id */
    originBillDetailId?: string;
    /** 原单号 */
    originBillId?: string;
    /** 源单类型:1-销售出库 2-销退入库 */
    originBillType?: number;
    /** 出库数量 */
    outQty?: number;
    /** 包裹单号 */
    packageNo?: string;
    /** 含税单价 */
    price?: number;
    /** 批号 */
    produceCode?: string;
    /** 可申请数量（页面上显示的数量 即出入库数量-已核单数量） */
    qty?: number;
    /** 剩余核单数量 */
    remainCheckQty?: number;
    /** 商品编码 */
    skuId?: string;
    /** 规格 */
    skuModel?: string;
    /** 商品名称 */
    skuName?: string;
    /** 通知单号 */
    stockNoticeId?: string;
    /** 税额 */
    taxAmount?: number;
    /** 含税金额 */
    taxAmt?: number;
    /** 税率 */
    taxRate?: number;
    /** 单位 */
    unit?: string;
    /** 仓库编码 */
    whId?: string;
    /** 仓库名称 */
    whName?: string;
  };

  type ContractWareImportResultVO = {
    /** 失败导入数量 */
    fail?: number;
    /** 失败文档下载路径 */
    failExcelPath?: string;
    /** 成功导入数量 */
    success?: number;
    /** 成功的商品列表 */
    successList?: SalesContractDetailVO[];
  };

  type CusAccountReceivableBalanceViewMonthSummaryVO = {
    /** 金额 */
    amount?: number;
    /** 月 */
    month?: string;
  };

  type CusAccountReceivableBalanceViewPageQueryVO = {
    /** 客户编码 */
    cusId?: string;
    pageQuery?: PageQuery;
  };

  type CusAccountReceivableBalanceViewSummaryVO = {
    /** 0-30天金额 */
    aging0To30?: number;
    /** 181-360天金额 */
    aging181To360?: number;
    /** 31-60天金额 */
    aging31To60?: number;
    /** 361-N天金额 */
    aging361ToN?: number;
    /** 61-90天金额 */
    aging61To90?: number;
    /** 91-180天金额 */
    aging91To180?: number;
    /** 逾期应收总额 */
    overdueAmt?: number;
    /** 到期月金额 */
    settleMonthAmount?: CusAccountReceivableBalanceViewMonthSummaryVO[];
    /** 应收总额 */
    taxAmt?: number;
  };

  type CusAccountReceivableBalanceViewVO = {
    /** 0-30天金额 */
    aging0To30?: number;
    /** 181-360天金额 */
    aging181To360?: number;
    /** 31-60天金额 */
    aging31To60?: number;
    /** 361-N天金额 */
    aging361ToN?: number;
    /** 61-90天金额 */
    aging61To90?: number;
    /** 91-180天金额 */
    aging91To180?: number;
    /** 客户编号 */
    cusId?: string;
    /** 客户名称 */
    cusName?: string;
    /** 逾期应收总额 */
    overdueAmt?: number;
    /** 到期月金额 */
    settleMonthAmount?: number[];
    /** 应收总额 */
    taxAmt?: number;
  };

  type CusAddressVO = {
    /** 收货人 */
    accepter?: string;
    /** 详细地址 */
    address?: string;
    /** 市 */
    city?: string;
    /** 市编号 */
    cityId?: string;
    /** 客户编码 */
    cusId?: string;
    /** 区/县 */
    district?: string;
    /** 区/县编号 */
    districtId?: string;
    /** 主键 */
    id?: string;
    /** 身份证号 */
    idNumber?: string;
    /** 是否默认(1-是 0-否) */
    isDefault?: number;
    /** 原单据id */
    originalId?: string;
    /** 邮编 */
    postCode?: string;
    /** 省 */
    province?: string;
    /** 省编号 */
    provinceId?: string;
    /** 备注 */
    remark?: string;
    /** 街道/乡镇编号 */
    streetId?: string;
    /** 街道/乡镇 */
    streetName?: string;
    /** 联系电话 */
    telephone?: string;
  };

  type CusContactVO = {
    /** 授权结束时间 */
    authorizationEndTime?: string;
    /** 授权书附件 */
    authorizationFile?: string;
    /** 授权开始时间 */
    authorizationStartTime?: string;
    /** 证件附件 */
    certificateFileList?: string[];
    /** 联系电话 */
    contactPhone?: string;
    /** 客户编码 */
    cusId?: string;
    /** 主键 */
    id?: string;
    /** 身份证号 */
    idNumber?: string;
    /** 是否默认(1-是 0-否) */
    isDefault?: number;
    /** 是否长期 (1-是 0-否) */
    isLongTerm?: number;
    /** 联系人名称 */
    linkMan?: string;
    /** 原单据id */
    originalId?: string;
  };

  type CusLicenseVO = {
    /** 客户编号 */
    cusId?: string;
    /** 失效日期 */
    expDate?: string;
    /** 主键 */
    id?: string;
    /** 是否长期 */
    isLongTerm?: boolean;
    /** 证照编码 */
    licenseCode?: string;
    /** 证照图片 */
    licenseImg?: string[];
    /** 证照名称 */
    licenseName?: string;
    /** 类型编码 */
    licenseType?: number;
    /** 原单据id */
    originalId?: string;
    /** 生效日期 */
    validDate?: string;
    /** 预警天数 */
    warningDay?: number;
  };

  type CusOrderReceiptVO = {
    /** 已确认金额 */
    confirmedAmt?: number;
    /** 单位名称 */
    cusName?: string;
    /** 收款单id */
    id?: string;
    /** 未确认金额 */
    noConfirmAmt?: number;
    /** 收款金额 */
    receiptAmt?: number;
    /** 收款日期 */
    receiptDate?: string;
  };

  type CusSettleAccountVO = {
    /** 开户行 */
    accountBank?: string;
    /** 开户账户名称 */
    accountName?: string;
    /** 开户账号 */
    accountNo?: string;
    /** 客户编码 */
    cusId?: string;
    /** 主键 */
    id?: string;
    /** 是否默认(1-是 0-否) */
    isDefault?: number;
    /** 原单据id */
    originalId?: string;
    remark?: string;
  };

  type CusWhaddressVO = {
    /** 详细地址 */
    address?: string;
    /** 市 */
    city?: string;
    /** 市编号 */
    cityId?: string;
    /** 客户编码 */
    cusId?: string;
    /** 区/县 */
    district?: string;
    /** 区/县编号 */
    districtId?: string;
    /** 主键 */
    id?: string;
    /** 是否默认(1-是 0-否) */
    isDefault?: number;
    /** 原单据id */
    originalId?: string;
    /** 省 */
    province?: string;
    /** 省编号 */
    provinceId?: string;
    /** 街道/乡镇编号 */
    streetId?: string;
    /** 街道/乡镇 */
    streetName?: string;
  };

  type CustomerDocumentTipsVO = {
    /** 市编号 */
    cityId?: string;
    /** 客户编码 新增首营单据时可不传，其他情况必传 */
    cusCode?: string;
    /** 客户名称 */
    cusName?: string;
    /** 区/县编号 */
    districtId?: string;
    /** 单据编号 新增时不用传 */
    id?: string;
    /** 省编号 */
    provinceId?: string;
    /** 纳税人编号 */
    taxPayerCode?: string;
  };

  type CustomerDocumentVO = {
    /** 开户银行 */
    accountBank?: string;
    /** 开户账户名称 */
    accountName?: string;
    /** 银行账号 */
    accountNo?: string;
    address?: string;
    /** 单据状态 */
    billState?: number;
    /** 单据状态名称 */
    billStateName?: string;
    /** 单据类型 */
    billType?: number;
    /** 单据类型名称 */
    billTypeName?: string;
    /** 业务审核时间 */
    businessCheckTime?: string;
    /** 业务审核人 */
    businessChecker?: string;
    /** 业务审核人编码 */
    businessCheckerCode?: string;
    /** 业务部电话 */
    businessPhone?: string;
    /** 经营范围 */
    businessScope?: string;
    /** 经营方式 */
    businessWay?: string;
    /** 审核状态 0 待业务审核 1待质量管理员审核 2 审核已完结 */
    checkStatus?: string;
    /** 市 */
    city?: string;
    /** 市编号 */
    cityId?: string;
    /** 本企业联系人ID */
    contactId?: string;
    /** 本企业联系人名称(如有contactId则此字段也需要赋值) */
    contactName?: string;
    /** 收货人信息 */
    cusAddressList?: CusAddressVO[];
    /** 客户编码 */
    cusCode?: string;
    /** 联系人信息 */
    cusContactList?: CusContactVO[];
    /** 经营范围 */
    cusGspRelation?: string[];
    /** 客户证照信息 */
    cusLicenseList?: CusLicenseVO[];
    /** 客户名称 */
    cusName?: string;
    /** 结算账户信息 */
    cusSettleAccountList?: CusSettleAccountVO[];
    /** 仓库地址 */
    cusWhaddressList?: CusWhaddressVO[];
    /** 客户类型编码 字典key:polarbear_wss_customer_type */
    customerType?: number;
    /** 客户类型名称 */
    customerTypeName?: string;
    /** 资料属性 */
    dataAttribute?: string;
    /** 资料类型 */
    dataType?: string;
    /** 区/县 */
    district?: string;
    /** 区/县编号 */
    districtId?: string;
    /** 建档号 */
    documentNo?: string;
    /** 传真 */
    fax?: string;
    /** 单据编号 */
    id?: string;
    /** 开票税率类型 字典 polarbear_wss_invocing_tax_rate_type */
    invocingTaxRateType?: number;
    /** 发票税率类型名称 */
    invoiceTaxRateTypeName?: string;
    /** 公司名称(发票抬头) */
    invoiceTitle?: string;
    /**  发票类型：字典 polarbear_wss_invoice_type */
    invoiceType?: number;
    /**  发票类型名称 */
    invoiceTypeName?: string;
    /** 是否业务已审 (1-是 0-否) */
    isBusinessCheck?: number;
    /** 是否经营冷藏药品 0-否 1-是 */
    isCanManageColdStorage?: number;
    /** 是否经营冷冻药品 0-否 1-是 */
    isCanManageFrozen?: number;
    /** 是否质管已审 (1-是 0-否) */
    isQualityCheck?: number;
    /** 生效状态  0 未生效  1已生效 */
    isValid?: number;
    /** 法定代表人 */
    lawPerson?: string;
    /** 电话(发票) */
    officePhone?: string;
    /** 票样列表 */
    officialSampleList?: string[];
    /** 样章列表 */
    officialSealList?: string[];
    /** 社会统一信用代码 */
    organizationId?: string;
    /** 原单据编号 */
    originalId?: string;
    /** 电话 */
    phone?: string;
    /** 邮政编码 */
    postCode?: string;
    /** 企业负责人 */
    principal?: string;
    /** 企业负责人身份证号 */
    principalIdentityCard?: string;
    /** 省 */
    province?: string;
    /** 省编号 */
    provinceId?: string;
    /** 质管审核时间 */
    qualityCheckTime?: string;
    /** 质管审核人 */
    qualityChecker?: string;
    /** 质管审核人编码 */
    qualityCheckerCode?: string;
    /** 质量负责人 */
    qualityManager?: string;
    /** 质量负责人身份证号 */
    qualityManagerIdentityCard?: string;
    /** 质管部电话 */
    qualityPhone?: string;
    /** 电子发票接收邮箱 */
    receivingEmail?: string;
    /** 地址(发票) */
    registerAddress?: string;
    /** 备注 */
    remark?: string;
    /** 纳税人识别号 */
    taxPayerCode?: string;
    /** 企业纳税性质 1一般纳税人 2小规模纳税人 */
    taxPayerType?: number;
    /** 企业纳税性质名称 */
    taxPayerTypeName?: string;
  };

  type CustomerDocumentVOPageQuery = {
    /** 单据状态  字典key: polarbear_wss_bill_status   */
    billState?: number;
    /** 单据类型 1:首营审核2:变更审核 */
    billType?: number;
    /** 审核状态 0 待业务审核 1待质量管理员审核 2 审核已完结 */
    checkStatus?: string;
    /** 创建人 */
    creater?: string;
    /** 客户名称/编码查询 */
    cus?: string;
    /** 客户编码 */
    cusCode?: string;
    /** 客户名称 */
    cusName?: string;
    /** 客户类型编码 */
    customerType?: string;
    /** 单据编号 */
    id?: string;
    /** 生效状态 0 未生效  1已生效 2初始化 */
    isValid?: string;
    /** 创建结束时间 */
    maxCreateTime?: string;
    /** 完结日期结束 */
    maxFinishTime?: string;
    /** 创建开始时间 */
    minCreateTime?: string;
    /** 完结日期开始 */
    minFinishTime?: string;
    pageQuery?: PageQuery;
  };

  type CustomerExistVO = {
    /** 已存在的单据编号 */
    billCode?: string;
    /** 已存在的客户编号 */
    cueCode?: string;
  };

  type CustomerFlowInstanceVO = {
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

  type CustomerLogVO = {
    /** 单据编号 */
    billCode?: string;
    /** 操作时间 */
    createTime?: string;
    /** 操作人 */
    creater?: string;
    /** 操作人Id */
    createrId?: string;
    /** 批发客户编码 */
    cusCode?: string;
    /** 主键 */
    id?: string;
    logType?: number;
    /** 操作描述 */
    operateDesc?: string;
    /**  操作类型 */
    operateType?: string;
  };

  type CustomerLogVOPageQuery = {
    /** 单据编号 */
    billCode?: string;
    /** 客户编码 */
    cusCode?: string;
    /** 日志类型 1-基础信息 2-收货人信息 3-联系人信息 4-证照信息 5-仓库地址 */
    logType?: string;
    /** 操作时间-结束 */
    maxOperateTime?: string;
    /** 操作时间-开始 */
    minOperateTime?: string;
    /** 操作类型 */
    operateType?: string;
    /** 操作人 */
    operator?: string;
    pageQuery?: PageQuery;
  };

  type CustomerSalesDetailVO = {
    /** 条形码 */
    barcode?: string;
    /** 生产厂家 */
    manufacturer?: string;
    /** 单价 */
    price?: number;
    /** 退货金额 */
    returnAmt?: number;
    /** 退货数量 */
    returnNum?: number;
    /** 销售金额（净销售金额=销售金额-退货金额） */
    salesAmt?: number;
    /** 销售数量（净销售数量=销售数量-退货数量） */
    salesNum?: number;
    /** 商品编码 */
    skuId?: string;
    /** 商品规格 */
    skuModel?: string;
    /** 商品名称 */
    skuName?: string;
  };

  type CustomerSalesReportVO = {
    /** 客户编号 */
    cusId?: string;
    /** 客户名称 */
    cusName?: string;
    /** 客户类型 */
    cusType?: string;
    /** 批发单数 */
    orderNum?: number;
    /** 退货金额 */
    returnAmt?: number;
    /** 销售金额（净批发金额=销售金额-退货金额） */
    salesAmt?: number;
    /** sku数 */
    skuNum?: number;
  };

  type CustomerSalesReportVOPageQuery = {
    /** 客户信息 */
    cus?: string;
    /** 客户编码 */
    cusId?: string;
    /** 客户名称 */
    cusName?: string;
    /** 统计时间-结束 */
    maxDate?: string;
    /** 统计时间-开始 */
    minDate?: string;
    pageQuery?: PageQuery;
    /** 商品编码 */
    skuId?: string;
  };

  type CustomerVO = {
    /** 开户银行 */
    accountBank?: string;
    /** 开户账户名称 */
    accountName?: string;
    /** 银行账号 */
    accountNo?: string;
    address?: string;
    /** 业务审核时间 */
    businessCheckTime?: string;
    /** 业务审核人 */
    businessChecker?: string;
    /** 业务审核人编码 */
    businessCheckerCode?: string;
    /** 业务部电话 */
    businessPhone?: string;
    /** 经营范围 */
    businessScope?: string;
    /** 经营方式 */
    businessWay?: string;
    /** 审核状态 0 待业务审核 1待质量管理员审核 2 审核已完结 */
    checkStatus?: string;
    /** 市 */
    city?: string;
    /** 市编号 */
    cityId?: string;
    /** 本企业联系人ID */
    contactId?: string;
    /** 本企业联系人名称(如有contactId则此字段也需要赋值) */
    contactName?: string;
    /** 收货人信息 */
    cusAddressList?: CusAddressVO[];
    /** 联系人信息 */
    cusContactList?: CusContactVO[];
    /** 经营范围 */
    cusGspRelation?: string[];
    /** 客户证照信息 */
    cusLicenseList?: CusLicenseVO[];
    /** 客户名称 */
    cusName?: string;
    /** 结算账户信息 */
    cusSettleAccountList?: CusSettleAccountVO[];
    /** 仓库地址 */
    cusWhaddressList?: CusWhaddressVO[];
    /** 客户类型编码 字典key:polarbear_wss_customer_type */
    customerType?: number;
    /** 客户类型名称 */
    customerTypeName?: string;
    /** 资料属性 */
    dataAttribute?: string;
    /** 资料类型 */
    dataType?: string;
    /** 区/县 */
    district?: string;
    /** 区/县编号 */
    districtId?: string;
    /** 建档号 */
    documentNo?: string;
    /** 传真 */
    fax?: string;
    /** 客户编码/主键ID */
    id?: string;
    /** 开票税率类型 字典 polarbear_wss_invocing_tax_rate_type */
    invocingTaxRateType?: number;
    /** 发票税率类型名称 */
    invoiceTaxRateTypeName?: string;
    /** 公司名称(发票抬头) */
    invoiceTitle?: string;
    /**  发票类型：字典 polarbear_wss_invoice_type */
    invoiceType?: number;
    /**  发票类型名称 */
    invoiceTypeName?: string;
    /** 是否业务已审 (1-是 0-否) */
    isBusinessCheck?: number;
    /** 是否经营冷藏药品 0-否 1-是 */
    isCanManageColdStorage?: number;
    /** 是否经营冷冻药品 0-否 1-是 */
    isCanManageFrozen?: number;
    /** 是否质管已审 (1-是 0-否) */
    isQualityCheck?: number;
    /** 生效状态  0 未生效  1已生效 */
    isValid?: number;
    /** 法定代表人 */
    lawPerson?: string;
    /** 电话(发票) */
    officePhone?: string;
    /** 票样列表 */
    officialSampleList?: string[];
    /** 样章列表 */
    officialSealList?: string[];
    /** 社会统一信用代码 */
    organizationId?: string;
    /** 电话 */
    phone?: string;
    /** 邮政编码 */
    postCode?: string;
    /** 企业负责人 */
    principal?: string;
    /** 企业负责人身份证号 */
    principalIdentityCard?: string;
    /** 省 */
    province?: string;
    /** 省编号 */
    provinceId?: string;
    /** 质管审核时间 */
    qualityCheckTime?: string;
    /** 质管审核人 */
    qualityChecker?: string;
    /** 质管审核人编码 */
    qualityCheckerCode?: string;
    /** 质量负责人 */
    qualityManager?: string;
    /** 质量负责人身份证号 */
    qualityManagerIdentityCard?: string;
    /** 质管部电话 */
    qualityPhone?: string;
    /** 电子发票接收邮箱 */
    receivingEmail?: string;
    /** 地址(发票) */
    registerAddress?: string;
    /** 备注 */
    remark?: string;
    /** 纳税人识别号 */
    taxPayerCode?: string;
    /** 企业纳税性质 1一般纳税人 2小规模纳税人 */
    taxPayerType?: number;
    /** 企业纳税性质名称 */
    taxPayerTypeName?: string;
  };

  type CustomerVOPageQuery = {
    /** 审核状态 0 待业务审核 1待质量管理员审核 2 审核已完结 */
    checkStatus?: string;
    /** 创建人 */
    creater?: string;
    /** 客户名称/编码查询 */
    cus?: string;
    /** 客户编码 */
    cusCode?: string;
    /** 客户名称 */
    cusName?: string;
    /** 客户类型编码 */
    customerType?: string;
    /** 生效状态 0 未生效  1已生效 2初始化 */
    isValid?: string;
    /** 创建结束时间 */
    maxCreateTime?: string;
    /** 创建开始时间 */
    minCreateTime?: string;
    pageQuery?: PageQuery;
  };

  type CustomerValidVO = {
    /** 客户编码 */
    cusCodes?: string[];
    /** 失效原因 */
    reason?: string;
    /** 状态编码 0 失效 1 生效 */
    validCode?: number;
  };

  type EntrustStoreVO = {
    /** 预约仓编码 */
    entrustCusCode?: string;
    /** 预约仓名称 */
    entrustCusName?: string;
    /** 物理仓 */
    whList?: WareHouseVO[];
  };

  type FPStockChangBillVO = {
    /** 单据编码 */
    id?: string;
    /** 备注 */
    remark?: string;
    /** 上报时间 */
    reportTime?: string;
  };

  type FuturePurchaseDetailUpdateVO = {
    /** 主键id */
    id?: string;
    /**  确认数量  */
    realQty?: number;
  };

  type FuturePurchaseDetailVO = {
    /**  批准⽂号  */
    approvalNumber?: string;
    /**  可用数量  */
    availableQty?: number;
    /**  商品条码  */
    barCode?: string;
    /**  冻结数量  */
    frozenQty?: number;
    /** 主键id */
    id?: string;
    /**  货品编码  */
    itemId?: string;
    /**  货品名称  */
    itemName?: string;
    /**  生产厂家  */
    manufacturer?: string;
    /**  采购价  */
    price?: number;
    /**  采购数量  */
    qty?: number;
    /**  本次确认数量  */
    realQty?: number;
    /**  已上报数量  */
    reportedQty?: number;
    /**  内部商品编码  */
    skuId?: string;
    /**  规格  */
    specification?: string;
  };

  type FuturePurchaseExpandVO = {
    /** 是否可以确认计划（0：否；1：是） */
    canComfirm?: number;
    /** 最新确认时间 */
    confirmTime?: string;
    /** 创建时间 */
    createTime?: string;
    /** 创建人 */
    creater?: string;
    /** 创建人编码 */
    createrId?: string;
    /** 明细列表 */
    detailList?: FuturePurchaseDetailVO[];
    /** 虚拟仓编码 */
    entrustCusCode?: string;
    /** 虚拟仓名称 */
    entrustCusName?: string;
    /** 首次上报时间 */
    firstReportTime?: string;
    /** 单据编号 */
    id?: string;
    /** 是否失效（0：否；1：是） */
    isExpired?: number;
    /** 是否关单（0：否；1：是），已关单的时候，不可关闭计划 */
    isFinished?: number;
    /** 是否人工下单（0：否；1：是） */
    isManual?: number;
    /** 是否销退（0：否；1：是） */
    isSaleReturn?: number;
    /** 操作人 */
    operator?: string;
    /** 操作人id */
    operatorId?: string;
    /** 外部单号 */
    originBillId?: string;
    /** 采购失效⽇期,格式:yyyy-MM-dd */
    purchaseExpiredTime?: string;
    /** 采购盒数 */
    purchaseNum?: number;
    /** 采购⽇期,格式:yyyy-MM-dd */
    purchaseTime?: string;
    /** 实际失效时间 */
    realPurchaseExpiredTime?: string;
    /** 最后一次上报时间 */
    reportFinishTime?: string;
    /** 上报结果:0-未上报 1-部分上报 2-全部上报 */
    reportResult?: number;
    /** 采购sku数 */
    skuNum?: number;
    /** 来源:1-阿里期货采购 */
    source?: number;
    /** 确认状态:0-未确认 1-部分确认 2-全部确认 */
    status?: number;
    /** 库存变更单号（逗号隔开） */
    stockChangBillId?: string;
    /** 库存调整单列表 */
    stockChangBillIds?: FPStockChangBillVO[];
    /** 更新时间 */
    updateTime?: string;
    /** 仓库编码 */
    whId?: string;
    /** 仓库名称 */
    whName?: string;
  };

  type FuturePurchaseUpdateVO = {
    /** 明细列表 */
    detailList?: FuturePurchaseDetailUpdateVO[];
    /** 单据编号 */
    id?: string;
  };

  type FuturePurchaseVO = {
    /** 最新确认时间 */
    confirmTime?: string;
    /** 创建时间 */
    createTime?: string;
    /** 创建人 */
    creater?: string;
    /** 创建人编码 */
    createrId?: string;
    /** 虚拟仓编码 */
    entrustCusCode?: string;
    /** 虚拟仓名称 */
    entrustCusName?: string;
    /** 首次上报时间 */
    firstReportTime?: string;
    /** 单据编号 */
    id?: string;
    /** 是否失效（0：否；1：是） */
    isExpired?: number;
    /** 是否关单（0：否；1：是），已关单的时候，不可关闭计划 */
    isFinished?: number;
    /** 是否人工下单（0：否；1：是） */
    isManual?: number;
    /** 是否销退（0：否；1：是） */
    isSaleReturn?: number;
    /** 操作人 */
    operator?: string;
    /** 操作人id */
    operatorId?: string;
    /** 外部单号 */
    originBillId?: string;
    /** 采购失效⽇期,格式:yyyy-MM-dd */
    purchaseExpiredTime?: string;
    /** 采购盒数 */
    purchaseNum?: number;
    /** 采购⽇期,格式:yyyy-MM-dd */
    purchaseTime?: string;
    /** 实际失效时间 */
    realPurchaseExpiredTime?: string;
    /** 最后一次上报时间 */
    reportFinishTime?: string;
    /** 上报结果:0-未上报 1-部分上报 2-全部上报 */
    reportResult?: number;
    /** 采购sku数 */
    skuNum?: number;
    /** 来源:1-阿里期货采购 */
    source?: number;
    /** 确认状态:0-未确认 1-部分确认 2-全部确认 */
    status?: number;
    /** 库存变更单号（逗号隔开） */
    stockChangBillId?: string;
    /** 更新时间 */
    updateTime?: string;
    /** 仓库编码 */
    whId?: string;
    /** 仓库名称 */
    whName?: string;
  };

  type FuturePurchaseVOPageQuery = {
    /** 创建人 */
    creater?: string;
    /** 单据编号 */
    id?: string;
    ids?: string[];
    /** 是否失效（0：否；1：是） */
    isExpired?: number;
    /** 是否关单（0：否；1：是） */
    isFinished?: number;
    /** 是否人工下单（0：否；1：是） */
    isManual?: number;
    /** 是否销退（0：否；1：是） */
    isSaleReturn?: number;
    /** 最新确认时间-结束（格式yyyy-MM-dd HH:mm:ss） */
    maxComfirmTime?: string;
    /** 采购失效日期-结束（格式yyyy-MM-dd） */
    maxPurchaseExpiredTime?: string;
    /** 采购日期-结束（格式yyyy-MM-dd） */
    maxPurchaseTime?: string;
    /** 实际失效时间-结束（格式yyyy-MM-dd HH:mm:ss） */
    maxRealPurchaseExpiredTime?: string;
    /** 最新确认时间-开始（格式yyyy-MM-dd HH:mm:ss） */
    minComfirmTime?: string;
    /** 采购失效日期-开始（格式yyyy-MM-dd） */
    minPurchaseExpiredTime?: string;
    /** 采购日期-开始（格式yyyy-MM-dd） */
    minPurchaseTime?: string;
    /** 实际失效时间-开始（格式yyyy-MM-dd HH:mm:ss） */
    minRealPurchaseExpiredTime?: string;
    /** 操作人 */
    operator?: string;
    /** 外部单号 */
    originBillId?: string;
    pageQuery?: PageQuery;
    /** 上报结果:0-未上报 1-部分上报 2-全部上报 */
    reportResult?: number;
    /** 商品信息 */
    sku?: string;
    /** 确认状态:0-未确认 1-部分确认 2-全部确认 */
    status?: number;
    /** 预约库存变更单 */
    stockChangBillId?: string;
    /** 仓库编码 */
    whId?: string;
  };

  type FutureReturnDetailVO = {
    /**  批准⽂号  */
    approvalNumber?: string;
    /**  可用数量  */
    availableQty?: number;
    /**  商品条码  */
    barCode?: string;
    /**  冻结数量  */
    frozenQty?: number;
    /** 主键id */
    id?: string;
    /**  货品编码  */
    itemId?: string;
    /**  货品名称  */
    itemName?: string;
    /**  生产厂家  */
    manufacturer?: string;
    /**  退货价  */
    price?: number;
    /**  退货数量  */
    qty?: number;
    /**  本次确认数量  */
    realQty?: number;
    /**  已上报数量  */
    reportedQty?: number;
    /**  内部商品编码  */
    skuId?: string;
    /**  规格  */
    specification?: string;
  };

  type FutureReturnExpandVO = {
    /** 是否可以确认退货单（0：否；1：是） */
    canComfirm?: number;
    /** 最新确认时间 */
    confirmTime?: string;
    /** 创建时间 */
    createTime?: string;
    /** 创建人 */
    creater?: string;
    /** 创建人编码 */
    createrId?: string;
    /** 明细列表 */
    detailList?: FutureReturnDetailVO[];
    /** 虚拟仓编码 */
    entrustCusCode?: string;
    /** 虚拟仓名称 */
    entrustCusName?: string;
    /** 首次上报时间 */
    firstReportTime?: string;
    /** 单据编号 */
    id?: string;
    /** 是否失效（0：否；1：是） */
    isExpired?: number;
    /** 是否关单（0：否；1：是），已关单的时候，不可关闭退货单 */
    isFinished?: number;
    /** 操作人 */
    operator?: string;
    /** 操作人id */
    operatorId?: string;
    /** 外部单号 */
    originBillId?: string;
    /** 实际失效时间 */
    realReturnExpiredTime?: string;
    /** 最后一次上报时间 */
    reportFinishTime?: string;
    /** 上报结果:0-未上报 1-部分上报 2-全部上报 */
    reportResult?: number;
    /** 退货失效⽇期,格式:yyyy-MM-dd */
    returnExpiredTime?: string;
    /** 退货盒数 */
    returnNum?: number;
    /** 退货⽇期,格式:yyyy-MM-dd */
    returnTime?: string;
    /** 退货sku数 */
    skuNum?: number;
    /** 来源:1-阿里期货退货 */
    source?: number;
    /** 确认状态:0-未确认 1-部分确认 2-全部确认 */
    status?: number;
    /** 库存变更单号（逗号隔开） */
    stockChangBillId?: string;
    /** 库存调整单列表 */
    stockChangBillIds?: FPStockChangBillVO[];
    /** 更新时间 */
    updateTime?: string;
    /** 仓库编码 */
    whId?: string;
    /** 仓库名称 */
    whName?: string;
  };

  type FutureReturnUpdateVO = {
    /** 明细列表 */
    detailList?: FuturePurchaseDetailUpdateVO[];
    /** 单据编号 */
    id?: string;
  };

  type FutureReturnVO = {
    /** 最新确认时间 */
    confirmTime?: string;
    /** 创建时间 */
    createTime?: string;
    /** 创建人 */
    creater?: string;
    /** 创建人编码 */
    createrId?: string;
    /** 虚拟仓编码 */
    entrustCusCode?: string;
    /** 虚拟仓名称 */
    entrustCusName?: string;
    /** 首次上报时间 */
    firstReportTime?: string;
    /** 单据编号 */
    id?: string;
    /** 是否失效（0：否；1：是） */
    isExpired?: number;
    /** 是否关单（0：否；1：是），已关单的时候，不可关闭退货单 */
    isFinished?: number;
    /** 操作人 */
    operator?: string;
    /** 操作人id */
    operatorId?: string;
    /** 外部单号 */
    originBillId?: string;
    /** 实际失效时间 */
    realReturnExpiredTime?: string;
    /** 最后一次上报时间 */
    reportFinishTime?: string;
    /** 上报结果:0-未上报 1-部分上报 2-全部上报 */
    reportResult?: number;
    /** 退货失效⽇期,格式:yyyy-MM-dd */
    returnExpiredTime?: string;
    /** 退货盒数 */
    returnNum?: number;
    /** 退货⽇期,格式:yyyy-MM-dd */
    returnTime?: string;
    /** 退货sku数 */
    skuNum?: number;
    /** 来源:1-阿里期货退货 */
    source?: number;
    /** 确认状态:0-未确认 1-部分确认 2-全部确认 */
    status?: number;
    /** 库存变更单号（逗号隔开） */
    stockChangBillId?: string;
    /** 更新时间 */
    updateTime?: string;
    /** 仓库编码 */
    whId?: string;
    /** 仓库名称 */
    whName?: string;
  };

  type FutureReturnVOPageQuery = {
    /** 创建人 */
    creater?: string;
    /** 单据编号 */
    id?: string;
    /** 是否失效（0：否；1：是） */
    isExpired?: number;
    /** 是否关单（0：否；1：是） */
    isFinished?: number;
    /** 最新确认时间-结束（格式yyyy-MM-dd HH:mm:ss） */
    maxComfirmTime?: string;
    /** 实际失效时间-结束（格式yyyy-MM-dd HH:mm:ss） */
    maxRealReturnExpiredTime?: string;
    /** 退货失效日期-结束（格式yyyy-MM-dd） */
    maxReturnExpiredTime?: string;
    /** 退货日期-结束（格式yyyy-MM-dd） */
    maxReturnTime?: string;
    /** 最新确认时间-开始（格式yyyy-MM-dd HH:mm:ss） */
    minComfirmTime?: string;
    /** 实际失效时间-开始（格式yyyy-MM-dd HH:mm:ss） */
    minRealReturnExpiredTime?: string;
    /** 退货失效日期-开始（格式yyyy-MM-dd） */
    minReturnExpiredTime?: string;
    /** 退货日期-开始（格式yyyy-MM-dd） */
    minReturnTime?: string;
    /** 外部单号 */
    originBillId?: string;
    pageQuery?: PageQuery;
    /** 上报结果:0-未上报 1-部分上报 2-全部上报 */
    reportResult?: number;
    /** 确认状态:0-未确认 1-部分确认 2-全部确认 */
    status?: number;
    /** 预约库存变更单 */
    stockChangBillId?: string;
    /** 仓库编码 */
    whId?: string;
  };

  type FutureStockWarning = {
    detailList?: FutureStockWarningDetail[];
    outSkuId?: string;
    skuId?: string;
    stock?: number;
    warningQty?: number;
  };

  type FutureStockWarningDetail = {
    expDate?: string;
    proDate?: string;
    produceCode?: string;
    stock?: number;
  };

  type IncomeCostDetailVO = {
    /** 销售成本金额（含税） */
    costAmt?: number;
    /** 销售成本单价（含税） */
    costPrice?: number;
    /** 客户编码 */
    cusId?: string;
    /** 客户名称 */
    cusName?: string;
    /** 商品分类 */
    drugCategory?: string;
    /** 主键id */
    id?: string;
    /** 发票类别:1-红字 2-蓝字 3-蓝字（作废重开） 4-蓝字（红冲重开） 5-红字冲回 6-作废冲回 7-税率变更调整 8-调价销售成本调整 9-尾差销售成本调整 10-精度销售成本调整 11-开票尾差成本调整 */
    invoiceClass?: number;
    /** 开票日期 */
    invoiceDate?: string;
    /** 发票号码 */
    invoiceNumber?: string;
    /** 生产厂家 */
    manufacturer?: string;
    /** 销售成本金额（不含税） */
    noCostAmt?: number;
    /** 销售成本单价（不含税） */
    noCostPrice?: number;
    /** 销售收入（不含税） */
    noTaxAmt?: number;
    /** 销售单价（不含税） */
    noTaxPrice?: number;
    /** 原发票号 */
    originInvoiceNumber?: string;
    /** 销售单价（含税） */
    price?: number;
    /** 毛利金额（不含税） */
    profitAmt?: number;
    /** 毛利率 */
    profitRate?: number;
    /** 数量 */
    qty?: number;
    /** 结账月份 */
    settlementMonth?: string;
    /** 商品编码 */
    skuId?: string;
    /** 商品规格 */
    skuModel?: string;
    /** 商品名称 */
    skuName?: string;
    /** 税额 */
    taxAmount?: number;
    /** 销售收入（含税） */
    taxAmt?: number;
    /** 税率 */
    taxRate?: number;
    /** 单位 */
    unitName?: string;
    /** 通用名 */
    wareGeneralName?: string;
  };

  type IncomeCostExportVO = {
    /** 客户编码，可为空 */
    cusId?: string;
    /** 开票日期-结束（格式yyyy-MM-dd），必填 */
    maxDate?: string;
    /** 开票日期-开始（格式yyyy-MM-dd），必填 */
    minDate?: string;
    /** 导出类型（1：导出汇总；2：导出明细），必填 */
    type?: number;
  };

  type IncomeCostMSExportVO = {
    /** 客户编码，非必填 */
    cusId?: string;
    /** 发票号码（商品用到），非必填 */
    invoiceNumber?: string;
    /** 月份（格式yyyy-MM），必填 */
    settlementMonth?: string;
    /** 导出类型（1：导出客商；2：导出商品），必填 */
    type?: number;
  };

  type IncomeCostMSVO = {
    /** 销售成本（含税） */
    costAmt?: number;
    /** 客户编码 */
    cusId?: string;
    /** 客户名称 */
    cusName?: string;
    /** 销售成本（不含税） */
    noCostAmt?: number;
    /** 销售收入（不含税） */
    noTaxAmt?: number;
    /** 毛利金额 */
    profitAmt?: number;
    /** 毛利率 */
    profitRate?: number;
    /** 销售数量 */
    qty?: number;
    /** 结账月份 */
    settlementMonth?: string;
    /** 税额 */
    taxAmount?: number;
    /** 销售收入（含税） */
    taxAmt?: number;
  };

  type IncomeCostMSVOPageQuery = {
    /** 客户编码，非必填 */
    cusId?: string;
    /** 发票号码（商品用到），非必填 */
    invoiceNumber?: string;
    pageQuery?: PageQuery;
    /** 月份（格式yyyy-MM），必填 */
    settlementMonth?: string;
  };

  type IncomeCostSumMSVO = {
    /** 客户编码，非必填 */
    cusId?: string;
    /** 发票号码（商品用到），非必填 */
    invoiceNumber?: string;
    /** 月份（格式yyyy-MM），必填 */
    settlementMonth?: string;
    /** 类型（1：客商；2：商品），必填 */
    type?: number;
  };

  type IncomeCostSumVO = {
    /** 客户编码，可为空 */
    cusId?: string;
    /** 开票日期-结束（格式yyyy-MM-dd），必填 */
    maxDate?: string;
    /** 开票日期-开始（格式yyyy-MM-dd），必填 */
    minDate?: string;
  };

  type IncomeCostVO = {
    /** 销售成本（含税） */
    costAmt?: number;
    /** 客户编码 */
    cusId?: string;
    /** 客户名称 */
    cusName?: string;
    /** 销售成本（不含税） */
    noCostAmt?: number;
    /** 销售收入（不含税） */
    noTaxAmt?: number;
    /** 毛利金额 */
    profitAmt?: number;
    /** 毛利率 */
    profitRate?: number;
    /** 销售数量 */
    qty?: number;
    /** 税额 */
    taxAmount?: number;
    /** 销售收入（含税） */
    taxAmt?: number;
  };

  type IncomeCostVOPageQuery = {
    /** 客户编码 */
    cusId?: string;
    /** 开票日期-结束（格式yyyy-MM-dd），必填 */
    maxDate?: string;
    /** 开票日期-开始（格式yyyy-MM-dd），必填 */
    minDate?: string;
    pageQuery?: PageQuery;
  };

  type InvoiceAppVOPageQuery = {
    /** 客户编码 */
    cusId?: string;
    /** 单据编号 */
    id?: string;
    /** 发票类别:1-红字 2-蓝字 */
    invoiceClass?: number;
    /** 生成时间-结束 */
    maxCreateTime?: string;
    /** 生成时间-开始 */
    minCreateTime?: string;
    pageQuery?: PageQuery;
  };

  type ListCustomerDocumentVO = {
    address?: string;
    /** 流程时效（天） */
    aging?: number;
    /** 单据状态  0:未提审1:已提审 2:审核中3:审核通过4:已取消 */
    billState?: number;
    /** 单据状态名称 */
    billStateName?: string;
    /** 单据类型 1:首营审核2:变更审核 */
    billType?: number;
    /** 单据类型名称 */
    billTypeName?: string;
    /** 业务审核人 */
    businessChecker?: string;
    /** 审核状态 0 待业务审核 1待质量管理员审核 2 审核已完结 */
    checkStatus?: string;
    /** 市 */
    city?: string;
    /** 市编号 */
    cityId?: string;
    /** 创建时间 */
    createTime?: string;
    /** 创建人 */
    creater?: string;
    /** 创建人id */
    createrId?: string;
    /** 客户编码 */
    cusCode?: string;
    /** 客户名称 */
    cusName?: string;
    /** 客户类型编码 */
    customerType?: string;
    /** 客户类型名称 */
    customerTypeName?: string;
    /** 区/县 */
    district?: string;
    /** 区/县编号 */
    districtId?: string;
    /** 完成时间 */
    finishTime?: string;
    /** 单据编号 */
    id?: string;
    /** 是否业务已审 */
    isBusinessCheck?: string;
    /** 证照是否过期  0-否 1-是 */
    isExpiredLicence?: number;
    /** 是否新增客户  0-否 1-是 */
    isNewCus?: number;
    /** 是否质管已审 */
    isQualityCheck?: string;
    /** 生效状态 0 未生效  1已生效 2初始化 */
    isValid?: string;
    /** 省 */
    province?: string;
    /** 省编号 */
    provinceId?: string;
    /** 质管审核人 */
    qualityChecker?: string;
    /** 提审人 */
    reviewName?: string;
    /** 提审时间 */
    reviewTime?: string;
  };

  type ListCustomerVO = {
    address?: string;
    /** 业务审核人 */
    businessChecker?: string;
    /** 审核状态 0 待业务审核 1待质量管理员审核 2 审核已完结 */
    checkStatus?: string;
    /** 市 */
    city?: string;
    /** 市编号 */
    cityId?: string;
    /** 创建时间 */
    createTime?: string;
    /** 创建人 */
    creater?: string;
    /** 创建人id */
    createrId?: string;
    /** 客户编码 */
    cusCode?: string;
    /** 客户名称 */
    cusName?: string;
    /** 客户类型编码 */
    customerType?: string;
    /** 客户类型名称 */
    customerTypeName?: string;
    /** 区/县 */
    district?: string;
    /** 区/县编号 */
    districtId?: string;
    /** 主键 */
    id?: string;
    /** 是否业务已审 */
    isBusinessCheck?: string;
    /** 证照是否过期  0-否 1-是 */
    isExpiredLicence?: number;
    /** 是否新增客户  0-否 1-是 */
    isNewCus?: number;
    /** 是否质管已审 */
    isQualityCheck?: string;
    /** 生效状态 0 未生效  1已生效 2初始化 */
    isValid?: string;
    /** 省 */
    province?: string;
    /** 省编号 */
    provinceId?: string;
    /** 质管审核人 */
    qualityChecker?: string;
  };

  type ListSaleReturnServiceVO = {
    /** 申请退款金额 */
    appReturnAmt?: number;
    /** 申请退货数量 */
    appReturnQty?: number;
    /** 单据审批流billType */
    billType?: string;
    /** 申请时间 */
    createTime?: string;
    /** 申请人 */
    creater?: string;
    /** 申请人编码 */
    createrId?: string;
    /** 客户编号 */
    cusId?: string;
    /** 客户名称 */
    cusName?: string;
    /** 单据审批流flowId */
    flowId?: string;
    /** 退货单号 */
    id?: string;
    /** 销售单号 */
    orderId?: string;
    /** 通知单号 */
    originBillId?: string;
    /** 实际退款金额 */
    realReturnAmt?: number;
    /** 实际退货数量 */
    realReturnQty?: number;
    /** 退货类型:1-普通 2-闪电 */
    refundType?: number;
    /** 退货申请类型（1-整单退货 2-部分退货） */
    returnType?: number;
    /** 退货申请类型名称 */
    returnTypeName?: string;
    /** 外部单号-原始采退单号 */
    sourceBizId?: string;
    /** 处理状态 0-未提审 1-已提审 2-审核中 3-审核通过 4-已取消 -1 已关单 */
    status?: number;
    /** 处理状态名称 */
    statusName?: string;
    /** 仓库编码 */
    whId?: string;
    /** 仓库名称 */
    whName?: string;
  };

  type NoInvoiceMSVO = {
    /** 本期发出商品调整-不含税金额 */
    adjustNoTaxAmt?: number;
    /** 本期发出商品调整-含税金额 */
    adjustTaxAmt?: number;
    /** 期末-含税成本金额 */
    afterCostAmt?: number;
    /** 期末-不含税成本金额 */
    afterNoCostAmt?: number;
    /** 期末-不含税收入金额 */
    afterNoTaxAmt?: number;
    /** 期末-数量 */
    afterQty?: number;
    /** 期末-含税收入金额 */
    afterTaxAmt?: number;
    /** 批次 */
    batchNo?: string;
    /** 期初-含税成本金额 */
    beforeCostAmt?: number;
    /** 期初-不含税成本金额 */
    beforeNoCostAmt?: number;
    /** 期初-不含税收入金额 */
    beforeNoTaxAmt?: number;
    /** 期初-数量 */
    beforeQty?: number;
    /** 期初-含税收入金额 */
    beforeTaxAmt?: number;
    /** 客户编码 */
    cusId?: string;
    /** 客户名称 */
    cusName?: string;
    /** 商品分类 */
    drugCategory?: string;
    /** 主键id */
    id?: string;
    /** 本期销售开票-含税成本金额 */
    invoiceCostAmt?: number;
    /** 本期销售开票-不含税成本金额 */
    invoiceNoCostAmt?: number;
    /** 本期销售开票-不含税收入金额 */
    invoiceNoTaxAmt?: number;
    /** 本期销售开票-发票号码 */
    invoiceNumber?: string;
    /** 本期销售开票-开票数量 */
    invoiceQty?: number;
    /** 本期销售开票-含税收入金额 */
    invoiceTaxAmt?: number;
    /** 开票尾差成本调整不含税金额 */
    kpAdjustNoTaxAmt?: number;
    /** 开票尾差成本调整含税金额 */
    kpAdjustTaxAmt?: number;
    /** 生产厂家 */
    manufacturer?: string;
    /** 本期发票红冲-含税成本金额 */
    offCostAmt?: number;
    /** 本期发票红冲-不含税成本金额 */
    offNoCostAmt?: number;
    /** 本期发票红冲-不含税收入金额 */
    offNoTaxAmt?: number;
    /** 本期发票红冲-数量 */
    offQty?: number;
    /** 本期发票红冲-含税收入金额 */
    offTaxAmt?: number;
    /** 批号 */
    produceCode?: string;
    /** 本期销售退回-含税成本金额 */
    returnCostAmt?: number;
    /** 本期销售退回-不含税成本金额 */
    returnNoCostAmt?: number;
    /** 本期销售退回-不含税收入金额 */
    returnNoTaxAmt?: number;
    /** 本期销售退回-数量 */
    returnQty?: number;
    /** 本期销售退回-含税收入金额 */
    returnTaxAmt?: number;
    /** 本期销售发货-含税成本金额 */
    sendCostAmt?: number;
    /** 本期销售发货-不含税成本金额 */
    sendNoCostAmt?: number;
    /** 本期销售发货-不含税收入金额 */
    sendNoTaxAmt?: number;
    /** 本期销售发货-数量 */
    sendQty?: number;
    /** 本期销售发货-含税收入金额 */
    sendTaxAmt?: number;
    /** 结账月份 */
    settlementMonth?: string;
    /** 商品编码 */
    skuId?: string;
    /** 商品规格 */
    skuModel?: string;
    /** 商品名称 */
    skuName?: string;
    /** 税率 */
    taxRate?: number;
    /** 调价销售成本调整不含税金额 */
    tjAdjustNoTaxAmt?: number;
    /** 调价销售成本调整含税金额 */
    tjAdjustTaxAmt?: number;
    /** 单位 */
    unitName?: string;
    /** 本期发票作废-含税成本金额 */
    voidCostAmt?: number;
    /** 本期发票作废-不含税成本金额 */
    voidNoCostAmt?: number;
    /** 本期发票作废-不含税收入金额 */
    voidNoTaxAmt?: number;
    /** 本期发票作废-数量 */
    voidQty?: number;
    /** 本期发票作废-含税收入金额 */
    voidTaxAmt?: number;
    /** 仓库名称 */
    whName?: string;
  };

  type NoInvoiceMSVOPageQuery = {
    /** 客户编码 */
    cusId?: string;
    pageQuery?: PageQuery;
    /** 月份（格式yyyy-MM），必填 */
    settlementMonth?: string;
  };

  type NoInvoiceVO = {
    /** 含税成本金额 */
    costAmt?: number;
    /** 客户编码 */
    cusId?: string;
    /** 客户名称 */
    cusName?: string;
    /** 不含税成本金额 */
    noCostAmt?: number;
    /** 不含税收入金额 */
    noTaxAmt?: number;
    /** 数量 */
    qty?: number;
    /** 含税收入金额 */
    taxAmt?: number;
  };

  type NoInvoiceVOPageQuery = {
    /** 客户编码 */
    cusId?: string;
    pageQuery?: PageQuery;
  };

  type OrderBatchCheckVO = {
    /** 审核异常的ids */
    failIds?: string[];
    /** 审核成功的ids */
    successIds?: string[];
  };

  type OrderDetailVO = {
    /** 折后总额（页面显示的金额） */
    amt?: number;
    /** 批次成本价 */
    batchCostPrice?: number;
    /** 批次 */
    batchNo?: string;
    /** 折扣金额 */
    disAmt?: number;
    /** 单品优惠 */
    disPrice?: number;
    /** 商品分类 字典 polarbear_base_drug_category */
    drugCategory?: string;
    /** 有效期 */
    expDate?: string;
    /** 库存-失效日期 */
    expirationDate?: string;
    /** 订单明细Id（编辑时传入） */
    id?: string;
    /** 是否商品注册批件到期（0：否；1：是） */
    isExpire?: number;
    /** 是否有GSP经营范围（0：否；1：是） */
    isGSP?: number;
    /** 是否低于批次成本价 （0：否；1：是）  */
    isLowerCostPrice?: number;
    /** 生产厂家 */
    manufacturer?: string;
    /** 订单id */
    orderId?: string;
    /** 商品未折扣原价（页面显示的单价） */
    price?: number;
    /** 活动价 */
    prmPrice?: number;
    /** 批号 */
    produceCode?: string;
    /** 库存-生产日期 */
    productionDate?: string;
    /** 项目编码 */
    projectId?: string;
    /** 项目名称 */
    projectName?: string;
    /** 数量 */
    qty?: number;
    /** 剩余效期天数 */
    remainExpDay?: string;
    /** 商品编码 */
    skuId?: string;
    /** 规格 */
    skuModel?: string;
    /** 商品名称 */
    skuName?: string;
    /** 商品可用库存 */
    stock?: number;
  };

  type OrderExpandVO = {
    /** 收货人 */
    accepter?: string;
    /** 详细地址 */
    address?: string;
    /** 关联客户收货地址表id */
    addressId?: string;
    /** 审核状态  0:未提审1:已提审 2:审核中3:审核通过4:已取消  */
    checkState?: number;
    /** 市 */
    city?: string;
    /** 市编号 */
    cityId?: string;
    /** 联系人Id */
    contactId?: string;
    /** 联系人 */
    contactMan?: string;
    /** 业务联系人电话 */
    contactPhone?: string;
    /** 合同编码 */
    contractId?: string;
    /** 创建时间 */
    createTime?: string;
    /** 创建人 */
    creater?: string;
    /** 创建人编码 */
    createrId?: string;
    /** 客户编码 */
    cusId?: string;
    /** 客户名称 */
    cusName?: string;
    /** 订单明细列表 */
    detailList?: OrderDetailVO[];
    /** 区 */
    district?: string;
    /** 区编号 */
    districtId?: string;
    /** 运费 */
    freightCost?: number;
    /** 订单id */
    id?: string;
    /** 发票抬头 */
    invoiceTitle?: string;
    /** 发票类型 */
    invoiceType?: number;
    /** 发票类型 */
    invoiceTypeTxt?: string;
    /** 是否直调 0否 1是 */
    isDirect?: number;
    /** 手机号码 */
    mobilePhone?: string;
    /** 净金额 */
    netAmt?: number;
    /** 更新人 */
    operator?: string;
    /** 更新人编码 */
    operatorId?: string;
    /** 订单备注 */
    orderDesc?: string;
    /** 订单来源（1-自营渠道；2-阿里健康） */
    orderSource?: number;
    /** 订单来源 */
    orderSourceTxt?: string;
    /** 订单状态 */
    orderStatus?: number;
    /** 订单状态 */
    orderStatusTxt?: string;
    /** 订单类型（0-委托订单 1-自采订单） */
    orderType?: number;
    /** 外部单号-来源单据编号 */
    originBillId?: string;
    /** 出库类型:1-普通 2-闪电 */
    outType?: number;
    /** 付款状态（0-未付款 1-已付款） */
    payStatus?: number;
    /** 收款完成时间 */
    paymentDate?: string;
    /** 预收金额 */
    prepayAmt?: number;
    /** 预收比例 */
    prepayRate?: number;
    /** 省 */
    province?: string;
    /** 省编号 */
    provinceId?: string;
    /** 预收款确认明细列表 */
    receiptDetailList?: OrderReceiptDetailVO[];
    /** 退货申请单明细列表 */
    saleReturnServiceList?: ListSaleReturnServiceVO[];
    salesContractVO?: SalesContractVO;
    /** 销售员 */
    salesMan?: string;
    /** 销售员编码 */
    salesManId?: string;
    /** 结算类型  */
    settlementType?: number;
    /** 结算类型 */
    settlementTypeTxt?: string;
    statusVO?: OrderStatusVO;
    /** 街道/乡镇编号 */
    streetId?: string;
    /** 街道/乡镇名称 */
    streetName?: string;
    /** 订单总金额（商品金额+运费） */
    sumAmt?: number;
    /** 联系电话 */
    telephone?: string;
    /** 未收款金额 */
    unpaidAmt?: number;
    /** 更新时间 */
    updateTime?: string;
    /** 仓库编码 */
    whId?: string;
    /** 仓库名称 */
    whName?: string;
  };

  type OrderFreightVO = {
    /** 邮费 */
    freightAmount?: number;
    /** 满多少包邮 */
    freightLine?: number;
  };

  type OrderHandleVO = {
    /** 订单Id */
    id?: string;
    /** 订单Id集合 批量审批用到 */
    ids?: string[];
    /** 操作类型，用于挂起、取消订单时候的类型，其他操作不用传；挂起类型（字典polarbear_wss_order_suspend_type）；取消类型（字典polarbear_wss_order_cancel_type）；） */
    operateType?: number;
    /** 备注说明 */
    remark?: string;
    /** 审核结果（0：审核不通过；1：审核通过） */
    resultCode?: number;
  };

  type OrderItem = {
    asc?: boolean;
    column?: string;
  };

  type OrderOutApplyVO = {
    /** 商品信息 */
    detailList?: OrderWareVO[];
    /** 订单id */
    orderId?: string;
  };

  type OrderOutDetailVO = {
    /** 折后总额（页面显示的金额） */
    amt?: number;
    /** 批次成本价 */
    batchCostPrice?: number;
    /** 批次 */
    batchNo?: string;
    /** 折扣金额 */
    disAmt?: number;
    /** 单品优惠 */
    disPrice?: number;
    /** 商品分类 字典 polarbear_base_drug_category */
    drugCategory?: string;
    /** 有效期 */
    expDate?: string;
    /** 库存-失效日期 */
    expirationDate?: string;
    /** 订单明细Id（编辑时传入） */
    id?: string;
    /** 是否商品注册批件到期（0：否；1：是） */
    isExpire?: number;
    /** 是否有GSP经营范围（0：否；1：是） */
    isGSP?: number;
    /** 是否低于批次成本价 （0：否；1：是）  */
    isLowerCostPrice?: number;
    /** 生产厂家 */
    manufacturer?: string;
    /** 订单id */
    orderId?: string;
    /** 已通知数量 */
    packQty?: number;
    /** 商品未折扣原价（页面显示的单价） */
    price?: number;
    /** 活动价 */
    prmPrice?: number;
    /** 批号 */
    produceCode?: string;
    /** 库存-生产日期 */
    productionDate?: string;
    /** 项目编码 */
    projectId?: string;
    /** 项目名称 */
    projectName?: string;
    /** 数量 */
    qty?: number;
    /** 剩余效期天数 */
    remainExpDay?: string;
    /** 商品编码 */
    skuId?: string;
    /** 规格 */
    skuModel?: string;
    /** 商品名称 */
    skuName?: string;
    /** 状态 0-未审核 1-已审核 2-审核不通过 3:已取消 */
    status?: number;
    /** 库存 */
    stock?: number;
    /** 待通知数量 */
    unPackQty?: number;
  };

  type OrderPackageDetailVO = {
    /** 生成时间 */
    createTime?: string;
    /** 包裹号 */
    packageCode?: string;
    /** 包裹商品 */
    packageWares?: OrderPackageWareVO[];
    /** 快递公司服务编码 */
    tmsCode?: string;
    /** 发货状态 */
    tmsDesc?: string;
    /** 快递公司 */
    tmsName?: string;
    /** 运单号码 */
    tmsOrderCode?: string;
    /** 快递物流信息 */
    trackingExpress?: PackageTrackingExpressVO[];
  };

  type OrderPackageWareVO = {
    /** 批号 */
    batchCode?: string;
    /** 在此包裹里该商品的数量 */
    itemQuantity?: number;
    /** 生产厂家 */
    manufacturer?: string;
    /** 订单号 */
    skuId?: string;
    /** 规格 */
    skuModel?: string;
    /** 商品名称 */
    skuName?: string;
  };

  type OrderReceiptDetailUpdateVO = {
    /** 订单Id */
    orderId?: string;
    /** 收款单Ids */
    receiptIds?: string[];
  };

  type OrderReceiptDetailVO = {
    /** 订单预收确认金额 */
    confirmedAmt?: number;
    /** 订单预收确认时间 */
    confirmedTime?: string;
    id?: string;
    /** 收款金额 */
    receiptAmt?: number;
    /** 收款银行 */
    receiptBank?: string;
    /** 收款账号 */
    receiptBankAccountNo?: string;
    /** 收款日期 */
    receiptDate?: string;
    /** 收款单号 */
    receiptId?: string;
  };

  type OrderRevokeHandleVO = {
    /** 商品单据编号 */
    billId?: string;
    /** 备注 */
    remark?: string;
  };

  type OrderStatusVO = {
    /** 取消订单原因 */
    cancelReason?: string;
    /** 取消时间 */
    cancelTime?: string;
    /** 取消类型 */
    cancelType?: number;
    /** 取消类型 */
    cancelTypeTxt?: string;
    /** 取消人 */
    canceler?: string;
    /** 取消人编号 */
    cancelerId?: string;
    /** 审核时间 */
    checkTime?: string;
    /** 审核人 */
    checker?: string;
    /** 审核人编号 */
    checkerId?: string;
    /** 完成时间 */
    finishTime?: string;
    /** 完成操作人 */
    finisher?: string;
    /** 完成操作人编号 */
    finisherId?: string;
    /** 是否取消订单（0：否；1：是） */
    isCancel?: number;
    /** 是否审核（0：否；1：是） */
    isCheck?: number;
    /** 订单是否完成（0：否；1：是） */
    isFinish?: number;
    /** 是否锁定库存 0否 1是 */
    isStockLocked?: number;
    /** 是否挂起订单（0：否；1：是） */
    isSuspend?: number;
    /** 订单id */
    orderId?: string;
    /** 出库状态（ 0-未出库 1-部分出库 2-完全出库） */
    outStatus?: number;
    /** 出库时间 */
    outTime?: string;
    /** 库存锁定时间 */
    stockLockTime?: string;
    /** 库存锁定人 */
    stockLocker?: string;
    /** 库存锁定人编码 */
    stockLockerId?: string;
    /** 挂起原因描述 */
    suspendDesc?: string;
    /** 挂起释放时间 */
    suspendReleaseTime?: string;
    /** 挂起时间 */
    suspendTime?: string;
    /** 挂起类型 */
    suspendType?: number;
    /** 挂起类型 */
    suspendTypeTxt?: string;
    /** 挂起人 */
    suspender?: string;
    /** 挂起人编码 */
    suspenderId?: string;
  };

  type OrderSubmitReviewHandleVO = {
    /** 商品单据编号 */
    billId?: string;
    operator?: string;
    operatorId?: string;
    /** 提审备注 */
    remark?: string;
  };

  type OrderTraceVO = {
    /** 操作时间 */
    createTime?: string;
    /** 操作人 */
    creater?: string;
    /** 操作人Id */
    createrId?: string;
    /** 客户编号 */
    cusId?: string;
    /** 主键Id */
    id?: string;
    /** 操作描述 */
    logDesc?: string;
    /** 操作类型 */
    logType?: number;
    /** 操作类型 */
    logTypeTxt?: string;
    /** 订单id */
    orderId?: string;
  };

  type OrderTraceVOPageQuery = {
    /** 操作时间-开始 */
    maxOperateTime?: string;
    /** 操作时间-开始 */
    minOperateTime?: string;
    /** 操作人 */
    operator?: string;
    /** 订单编码 */
    orderId?: string;
    pageQuery?: PageQuery;
  };

  type OrderUpdateVO = {
    /** 收货人信息Id */
    addressId?: string;
    /** 联系人Id */
    contactId?: string;
    /** 客户编码 */
    cusId?: string;
    /** 订单备注 */
    orderDesc?: string;
    /** 订单Id（编辑时传入） */
    orderId?: string;
    salesContract?: SalesContractVO;
    /** 销售员 */
    salesMan?: string;
    /** 销售员编码 */
    salesManId?: string;
    /** 订单商品列表 */
    wareList?: OrderWareVO[];
    /** 仓库编码 */
    whId?: string;
    /** 仓库名称 */
    whName?: string;
  };

  type OrderVO = {
    /** 收货人 */
    accepter?: string;
    /** 详细地址 */
    address?: string;
    /** 关联客户收货地址表id */
    addressId?: string;
    /** 审核状态  0:未提审1:已提审 2:审核中3:审核通过4:已取消  */
    checkState?: number;
    /** 市 */
    city?: string;
    /** 市编号 */
    cityId?: string;
    /** 合同编码 */
    contractId?: string;
    /** 创建时间 */
    createTime?: string;
    /** 创建人 */
    creater?: string;
    /** 创建人编码 */
    createrId?: string;
    /** 客户编码 */
    cusId?: string;
    /** 客户名称 */
    cusName?: string;
    /** 区 */
    district?: string;
    /** 区编号 */
    districtId?: string;
    /** 运费 */
    freightCost?: number;
    /** 订单id */
    id?: string;
    /** 是否直调 0否 1是 */
    isDirect?: number;
    /** 手机号码 */
    mobilePhone?: string;
    /** 净金额 */
    netAmt?: number;
    /** 更新人 */
    operator?: string;
    /** 更新人编码 */
    operatorId?: string;
    /** 订单备注 */
    orderDesc?: string;
    /** 订单来源 */
    orderSource?: number;
    /** 订单来源 */
    orderSourceTxt?: string;
    /** 订单状态 */
    orderStatus?: number;
    /** 订单状态 */
    orderStatusTxt?: string;
    /** 订单类型（0-委托订单 1-自采订单） */
    orderType?: number;
    /** 外部单号-来源单据编号 */
    originBillId?: string;
    /** 出库类型:1-普通 2-闪电 */
    outType?: number;
    /** 收款状态（0-未收款 1-已收款） */
    payStatus?: number;
    /** 预收金额 */
    prepayAmt?: number;
    /** 预收比例 */
    prepayRate?: number;
    /** 省 */
    province?: string;
    /** 省编号 */
    provinceId?: string;
    /** 销售员 */
    salesMan?: string;
    /** 销售员编码 */
    salesManId?: string;
    /** 结算类型  */
    settlementType?: number;
    /** 结算类型 */
    settlementTypeTxt?: string;
    /** 街道/乡镇编号 */
    streetId?: string;
    /** 街道/乡镇名称 */
    streetName?: string;
    /** 订单总金额（商品金额+运费） */
    sumAmt?: number;
    /** 联系电话 */
    telephone?: string;
    /** 未收款金额 */
    unpaidAmt?: number;
    /** 更新时间 */
    updateTime?: string;
    /** 仓库编码 */
    whId?: string;
    /** 仓库名称 */
    whName?: string;
  };

  type OrderVOPageQuery = {
    /** 审核状态  0:未提审1:已提审 2:审核中3:审核通过4:已取消 */
    checkState?: number;
    /** 合同编码 */
    contractId?: string;
    /** 制单人 */
    creater?: string;
    /** 客户编码或名称 */
    cus?: string;
    /** 客户编码 */
    cusId?: string;
    /** 是否直调 0否 1是 */
    isDirect?: number;
    /** 商品关键字 */
    keyword?: string;
    /** 下单时间-结束 */
    maxCreateTime?: string;
    /** 下单时间-开始 */
    minCreateTime?: string;
    /** 备注 */
    orderDesc?: string;
    /** 订单编码 */
    orderId?: string;
    /** 订单编码集合（导出时勾选多个订单使用） */
    orderIds?: string[];
    /** 订单来源（字典polarbear_wss_order_source） */
    orderSource?: number;
    /** 订单状态（字典polarbear_wss_order_status） */
    orderStatus?: number;
    /** 外部单号-来源单据编号 */
    originBillId?: string;
    /** 出库通知单号 */
    outNoticeId?: string;
    /** 出库类型:1-普通 2-闪电 */
    outType?: number;
    pageQuery?: PageQuery;
    /** 付款状态（0-未付款 1-已付款） */
    payStatus?: number;
    /** 支付方式（字典polarbear_wss_order_pay_way） */
    payWay?: number;
    /** 结算类型（字典polarbear_wss_settle_way） */
    settlementType?: number;
    /** 商品编码 */
    skuId?: string;
    /** 仓库编码 */
    warehouseId?: string;
    /** 仓库编码 */
    warehouseName?: string;
  };

  type OrderWareImportResultVO = {
    /** 失败导入数量 */
    fail?: number;
    /** 失败文档下载路径 */
    failExcelPath?: string;
    /** 成功导入数量 */
    success?: number;
    /** 成功的商品列表 */
    successList?: OrderDetailVO[];
  };

  type OrderWareVO = {
    /** 批次 */
    batchNo?: string;
    /** 商品分类 字典 polarbear_base_drug_category */
    drugCategory?: string;
    /** 订单明细Id（编辑时传入） */
    id?: string;
    /** 生产厂家 */
    manufacturer?: string;
    /** 批号 */
    produceCode?: string;
    /** 项目编码 */
    projectId?: string;
    /** 项目名称 */
    projectName?: string;
    /** 数量 */
    qty?: number;
    /** 商品编码 */
    skuId?: string;
    /** 规格 */
    skuModel?: string;
    /** 商品名称 */
    skuName?: string;
  };

  type OriginBillDetailVO = {
    /**  调整前单价（含税）  */
    beforeAdjPrice?: number;
    /**  对账状态（0：未提交对账；1：已提交对账）已提交对账不可选  */
    checkingStatus?: number;
    /**  单据时间  */
    createTime?: string;
    /**  客户编码  */
    cusId?: string;
    /**  客户名称  */
    cusName?: string;
    /**  生产厂家  */
    manufacturer?: string;
    /**  销售单号  */
    orderId?: string;
    /**  源单明细Id（唯一）  */
    originBillDetailId?: string;
    /**  出/入库原单号  */
    originBillId?: string;
    /**  单据类型:1-销售出库 2-销退入库  */
    originBillType?: number;
    /**  原单价（含税）  */
    price?: number;
    /**  批号  */
    produceCode?: string;
    /**  数量  */
    qty?: number;
    /**  商品编号  */
    skuId?: string;
    /**  规格  */
    skuModel?: string;
    /**  商品名称  */
    skuName?: string;
    /**  状态（0：未提交调价审核；1：调价审核中）调价审核中不可选  */
    status?: number;
    /**  税率  */
    taxRate?: number;
    /**  单位  */
    unit?: string;
  };

  type OriginBillDetailVOPageQuery = {
    /** 客户编码 */
    cusId?: string;
    /** 销售单号 */
    orderId?: string;
    /** 原单号 */
    originBillId?: string;
    /** 单据类型（1-销售出库 2-销退入库） */
    originBillType?: number;
    pageQuery?: PageQuery;
    /** 商品信息 */
    skuInfo?: string;
  };

  type OriginBillSelectVO = {
    /** 原单号 */
    id?: string;
    /** 类型 1，销售出库 2，销退入库 */
    originBillType?: number;
  };

  type OriginBillVO = {
    /** 合同编号 */
    contractCode?: string;
    /** 原单据时间 */
    createTime?: string;
    /** 客户编号 */
    cusId?: string;
    /** 客户名称 */
    cusName?: string;
    /** 出入库类型:1-普通 2-闪电 */
    docType?: number;
    /** 外部单号 */
    externalOrderId?: string;
    /** 主键 */
    id?: string;
    /** 销售单号 */
    orderId?: string;
    /** 原单号 */
    originBillId?: string;
    /** 单据类型（1-销售出库 2-销退入库） */
    originBillType?: number;
    /** 包裹单号 */
    packageNo?: string;
    /** 价税合计（账单金额） */
    priceTaxTotal?: number;
    /** 提交核单状态（0：未提交核单；1：部分已提交核单；2：全部已提交核单）；勾稽状态（0：未勾稽；1：部分勾稽；2：全部勾稽） */
    status?: number;
    /** 通知单号 */
    stockNoticeId?: string;
    /** 当前单据所有商品汇总的实收数量 */
    totalRealityQty?: number;
    /** 仓库编码 */
    whId?: string;
    /** 仓库名称 */
    whName?: string;
  };

  type OriginBillVOPageQuery = {
    /** 客户编号 */
    cusId?: string;
    /** 出入库类型:1-普通 2-闪电 */
    docType?: number;
    /** 原单据时间-结束 */
    maxCreateTime?: string;
    /** 原单据时间-开始 */
    minCreateTime?: string;
    /** 销售单号 */
    orderId?: string;
    /** 原单号 */
    originBillId?: string;
    /** 单据类型（1-销售出库 2-销退入库） */
    originBillType?: number;
    pageQuery?: PageQuery;
    /** 通知单号 */
    stockNoticeId?: string;
  };

  type PackageTrackingExpressVO = {
    /** 信息状态 */
    desc?: string;
    /** 时间 */
    time?: string;
  };

  type PageQuery = {
    current?: number;
    orders?: OrderItem[];
    size?: number;
  };

  type ReceivableBalanceMonthPageQueryVO = {
    /**  客户编号  */
    cusId?: string;
    pageQuery?: PageQuery;
    /**  结账月份  */
    statisticsMonth?: string;
  };

  type ReceivableBalanceMonthSummaryVO = {
    /** 期初 */
    beginningAmt?: number;
    /**  应收抵扣应付金额  */
    creditReceivableAgainstPayableAmt?: number;
    /** 期末 */
    finalAmt?: number;
    /**  销退红冲退款  */
    refundOfSalesRefundAndRedOffsetAmt?: number;
    /**  结算预收抵扣  */
    settlementPrepaymentDeductionAmt?: number;
    /** 开票金额 */
    taxAmt?: number;
    /** 收款核销金额 */
    writeoffAmt?: number;
  };

  type ReceivableBalanceMonthVO = {
    /**  期初金额  */
    beginningAmt?: number;
    /**  应收抵扣应付金额  */
    creditReceivableAgainstPayableAmt?: number;
    /**  客户编号  */
    cusId?: string;
    /**  客户名称  */
    cusName?: string;
    /**  期末金额  */
    finalAmt?: number;
    /**  主键  */
    id?: string;
    /**  销退红冲退款  */
    refundOfSalesRefundAndRedOffsetAmt?: number;
    /**  结算预收抵扣  */
    settlementPrepaymentDeductionAmt?: number;
    /**  结账月份  */
    statisticsMonth?: string;
    /**  开票金额  */
    taxAmt?: number;
    /**  收款核销金额  */
    writeoffAmt?: number;
  };

  type RedInvoiceDetailErrVO = {
    /** 本次申请数量 */
    applyQty?: number;
    /** 可申请数量 */
    canApplyQty?: number;
    /** 生产厂家 */
    manufacturer?: string;
    /** 原单号明细Id */
    originBillDetailId?: string;
    /** 原单号 */
    originBillId?: string;
    /** 批号 */
    produceCode?: string;
    /** 商品编号 */
    skuId?: string;
    /** 规格 */
    skuModel?: string;
    /** 商品名称 */
    skuName?: string;
    /** 单位 */
    unit?: string;
  };

  type RefundAppAdvancesReceivedDetailVO = {
    /** 本次退款金额 */
    deductionAmt?: number;
    /** 待核销金额 */
    noWriteoffAmt?: number;
    /** 预收款金额 */
    receiptAmt?: number;
    /** 预收款单号 */
    receiptId?: string;
    /** 退款申请单id */
    refundAppId?: string;
  };

  type RefundAppExpandVO = {
    /** 开户银行 */
    accountBank?: string;
    /** 开户账号 */
    accountCode?: string;
    /** 账户名称 */
    accountName?: string;
    /** 附件列表 */
    attachmentList?: AttachmentVO[];
    /** 创建时间 */
    createTime?: string;
    /** 创建人 */
    creater?: string;
    /** 创建人编码 */
    createrId?: string;
    /** 客户编号 */
    cusId?: string;
    /** 客户名称 */
    cusName?: string;
    /** 主键id（申请单号） */
    id?: string;
    /** 更新人 */
    operator?: string;
    /** 更新人编码 */
    operatorId?: string;
    /** 预收款抵扣选择收款单 */
    receivedDetailVOList?: RefundAppAdvancesReceivedDetailVO[];
    /** 申请退款金额 */
    refundAmt?: number;
    /** 退款状态（0：未退款；1：已退款） */
    refundStatus?: number;
    /** 退款类型 */
    refundType?: number;
    /** 退款类型 */
    refundTypeTxt?: string;
    /** 备注 */
    remark?: string;
    /** 结算账户id */
    settlementAccountId?: string;
    /** 审核状态 */
    status?: number;
    /** 审核状态 */
    statusTxt?: string;
    /** 更新时间 */
    updateTime?: string;
  };

  type RefundAppUpdateVO = {
    /** 附件列表 */
    attachmentList?: AttachmentVO[];
    /** 客户编号 */
    cusId?: string;
    /** 主键id（申请单号） */
    id?: string;
    /** 预收款抵扣选择收款单 */
    receivedDetailList?: RefundAppAdvancesReceivedDetailVO[];
    /** 申请退款金额 */
    refundAmt?: number;
    /** 退款类型 */
    refundType?: number;
    /** 备注 */
    remark?: string;
    /** 结算账户id */
    settlementAccountId?: string;
  };

  type RefundAppVO = {
    /** 开户银行 */
    accountBank?: string;
    /** 开户账号 */
    accountCode?: string;
    /** 账户名称 */
    accountName?: string;
    /** 创建时间 */
    createTime?: string;
    /** 创建人 */
    creater?: string;
    /** 创建人编码 */
    createrId?: string;
    /** 客户编号 */
    cusId?: string;
    /** 客户名称 */
    cusName?: string;
    /** 主键id（申请单号） */
    id?: string;
    /** 更新人 */
    operator?: string;
    /** 更新人编码 */
    operatorId?: string;
    /** 申请退款金额 */
    refundAmt?: number;
    /** 退款状态（0：未退款；1：已退款） */
    refundStatus?: number;
    /** 退款类型 */
    refundType?: number;
    /** 退款类型 */
    refundTypeTxt?: string;
    /** 备注 */
    remark?: string;
    /** 结算账户id */
    settlementAccountId?: string;
    /** 审核状态 */
    status?: number;
    /** 审核状态 */
    statusTxt?: string;
    /** 更新时间 */
    updateTime?: string;
  };

  type RefundAppVOPageQuery = {
    /** 创建人 */
    creater?: string;
    /** 客户信息 */
    cus?: string;
    /** 客户编号 */
    cusId?: string;
    /** 主键id（申请单号） */
    id?: string;
    /** 创建时间-结束 */
    maxCreateTime?: string;
    /** 创建时间-开始 */
    minCreateTime?: string;
    pageQuery?: PageQuery;
    /** 退款状态（0：未退款；1：已退款） */
    refundStatus?: number;
    /** 退款类型（字典 polarbear_wss_refund_type） */
    refundType?: number;
    /** 状态（字典 polarbear_wss_bill_status） */
    status?: number;
  };

  type SaleAdjustmentVO = {
    /** 调整原因 */
    adjReason?: string;
    /** 调整后不含税金额 */
    afterNoTaxAmt?: number;
    /** 调整后不含税单价 */
    afterNoTaxPrice?: number;
    /** 调整后税额 */
    afterTaxAmount?: number;
    /** 调整后的含税金额(价税合计) */
    afterTaxAmt?: number;
    /** 调整后含税单价 */
    afterTaxPrice?: number;
    /** 明细Id */
    billDetailId?: string;
    /** 对账单号 */
    billId?: string;
    /** 调整时间 */
    createTime?: string;
    /** 调整人 */
    creater?: string;
    /** 药品分类 */
    drugCategory?: string;
    /** 外部单号 */
    externalOrderId?: string;
    /** 主键 */
    id?: string;
    /** 入库数量 */
    inQty?: number;
    /** 生产厂家 */
    manufacturer?: string;
    /** 不含税金额 */
    noTaxAmt?: number;
    /** 不含税单价 */
    noTaxPrice?: number;
    /** 销售单号 */
    orderId?: string;
    /** 原单号明细Id */
    originBillDetailId?: string;
    /** 原单号 */
    originBillId?: string;
    /** 源单类型:1-销售出库 2-销退入库 */
    originBillType?: number;
    /** 出库数量 */
    outQty?: number;
    /** 包裹单号 */
    packageNo?: string;
    /** 含税单价 */
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
    /** 通知单号 */
    stockNoticeId?: string;
    /** 税额 */
    taxAmount?: number;
    /** 含税金额 */
    taxAmt?: number;
    /** 税率 */
    taxRate?: number;
    /** 单位 */
    unit?: string;
    /** 仓库编码 */
    whId?: string;
    /** 仓库名称 */
    whName?: string;
  };

  type SaleBillLogVO = {
    /** 发票单据id */
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
    /** 操作类型 */
    operateType?: string;
  };

  type SaleCheckingBillExpandVO = {
    /** 对账月份 */
    checkingMonth?: string;
    /** 创建时间 */
    createTime?: string;
    /** 制单人（创建人） */
    creater?: string;
    /** 创建人编码 */
    createrId?: string;
    /** 客户编号 */
    cusId?: string;
    /** 客户名称 */
    cusName?: string;
    /** 详情：是否有导入任务处理中（0：否；1：是）；列表：是否有导入任务 */
    hasImportTask?: number;
    /** 主键 */
    id?: string;
    /** 发票申请/登记单号 */
    invoiceId?: string;
    /** 不含税金额 */
    noTaxAmt?: number;
    /** 更新人 */
    operator?: string;
    /** 更新人编码 */
    operatorId?: string;
    /** 原单据详情 */
    originBillList?: SaleCheckingOriginBillVO[];
    /** 销退入库单原单号,多个用逗号隔开（列表的原单号=出库单原单号+入库单原单号） */
    originInBillId?: string;
    /** 销售出库单原单号,多个用逗号隔开（列表的原单号=出库单原单号+入库单原单号） */
    originOutBillId?: string;
    /** 价税合计 */
    priceTaxTotal?: number;
    /** 结算状态（0：未提交结算、1：部分已提交结算、2：全部已提交结算） */
    settlementStatus?: number;
    /** 状态:0-未提审,1-已提审 2-审核中 3-审核通过 4-已取消 */
    status?: number;
    /** 状态 */
    statusTxt?: string;
    /** 税额 */
    taxAmount?: number;
    /** 更新时间 */
    updateTime?: string;
  };

  type SaleCheckingBillUpdateVO = {
    /** 对账月份 */
    checkingMonth?: string;
    /** 客户编码 */
    cusId?: string;
    /** 商品明细 */
    detailList?: BillDetailWareVO[];
    /** 主键（新增时不用传入） */
    id?: string;
  };

  type SaleCheckingBillVOPageQuery = {
    /** 对账月份 */
    checkingMonth?: string;
    /** 制单人（创建人） */
    creater?: string;
    /** 客户编码或名称 */
    cus?: string;
    /** 客户编码 */
    cusId?: string;
    /** 单据编码 */
    id?: string;
    /** 单据编码集合(导出时勾选多个使用) */
    ids?: string[];
    /** 发票申请/登记单号 */
    invoiceId?: string;
    /** 生成时间-结束 */
    maxCreateTime?: string;
    /** 生成时间-开始 */
    minCreateTime?: string;
    /** 原单号 */
    originBillId?: string;
    pageQuery?: PageQuery;
    /** 是否筛选负数价税合计 */
    selectNegativeAmount?: boolean;
    /** 单据状态（字典polarbear_wss_bill_status） */
    status?: number;
  };

  type SaleCheckingOriginBillVO = {
    /** 对账单号 */
    billId?: string;
    /** 商品详情 */
    detailList?: CheckingBillDetailVO[];
    /** 外部单号 */
    externalOrderId?: string;
    /** 是否存在差异（0：否；1：是） */
    isDifference?: number;
    /** 不含税金额 */
    noTaxAmt?: number;
    /** 销售单号 */
    orderId?: string;
    /** 原单号 */
    originBillId?: string;
    /** 单据类型（1-销售出库 2-销退入库） */
    originBillType?: number;
    /** 包裹单号 */
    packageNo?: string;
    /** 价税合计 */
    priceTaxTotal?: number;
    /** 通知单号 */
    stockNoticeId?: string;
    /** 税额 */
    taxAmount?: number;
  };

  type SaleInvoiceAppBlueUpdateVO = {
    /** 单据明细Id */
    checkingDetailList?: string[];
    /** 客户编码 */
    cusId?: string;
    /** 主键（新增时不用传入） */
    id?: string;
    /** 发票类别（1-红字 2-蓝字） */
    invoiceClass?: number;
  };

  type SaleInvoiceAppDetailVO = {
    /** 调整原因 */
    adjReason?: string;
    adjustment?: SaleAdjustmentVO;
    /** 已勾稽数量 */
    articulationQty?: number;
    /** 对账单明细Id */
    checkingBillDetailId?: string;
    /** 对账单号 */
    checkingBillId?: string;
    /** 对账月份 */
    checkingMonth?: string;
    /** 合同编号 */
    contractCode?: string;
    /** 药品分类 */
    drugCategory?: string;
    /** 外部单号 */
    externalOrderId?: string;
    /** 主键 */
    id?: string;
    /** 入库数量 */
    inQty?: number;
    /** 生产厂家 */
    manufacturer?: string;
    /** 不含税金额 */
    noTaxAmt?: number;
    /** 不含税单价 */
    noTaxPrice?: number;
    /** 订单编号 */
    orderId?: string;
    /** 原单号明细Id */
    originBillDetailId?: string;
    /** 原单号 */
    originBillId?: string;
    /** 源单类型:1-销售出库 2-销退入库 */
    originBillType?: number;
    /** 出库数量 */
    outQty?: number;
    /** 包裹单号 */
    packageNo?: string;
    /** 含税单价 */
    price?: number;
    /** 批号 */
    produceCode?: string;
    /** 可申请数量（页面上显示的数量 即出入库数量-已核单数量） */
    qty?: number;
    /** 剩余勾稽数量 */
    remainArticulationQty?: number;
    /** 商品编码 */
    skuId?: string;
    /** 规格 */
    skuModel?: string;
    /** 商品名称 */
    skuName?: string;
    /** 通知单号 */
    stockNoticeId?: string;
    /** 税额 */
    taxAmount?: number;
    /** 含税金额 */
    taxAmt?: number;
    /** 税率 */
    taxRate?: number;
    /** 单位 */
    unit?: string;
    /** 仓库编码 */
    whId?: string;
    /** 仓库名称 */
    whName?: string;
  };

  type SaleInvoiceAppExpandVO = {
    /** 开户行 */
    accountBank?: string;
    /** 开户账户名称 */
    accountName?: string;
    /** 开户账号 */
    accountNo?: string;
    /** 公司地址 */
    address?: string;
    /** 勾稽状态（蓝字发票用到）:0-未勾稽 1-部分勾稽 2-全部勾稽 */
    articulationStatus?: number;
    /** 创建时间 */
    createTime?: string;
    /** 创建人 */
    creater?: string;
    /** 创建人编码 */
    createrId?: string;
    /** 客户编号 */
    cusId?: string;
    /** 客户名称 */
    cusName?: string;
    /** 商品明细列表 */
    detailList?: SaleInvoiceAppDetailVO[];
    /** 登记类型：0:发票申请 1：发票登记红票 2：发票登记蓝票 3：发票登记红冲 */
    enterType?: number;
    /** 主键 */
    id?: string;
    /** 发票类别（1-红字 2-蓝字） */
    invoiceClass?: number;
    /** 发票代码 */
    invoiceCode?: string;
    /** 开票日期 */
    invoiceDate?: string;
    /** 勾稽发票列表（蓝字发票用到） */
    invoiceList?: ArticulationInvoiceVO[];
    /** 发票号码 */
    invoiceNumber?: string;
    /** 发票抬头 */
    invoiceTitle?: string;
    /** 发票类型 */
    invoiceType?: number;
    /** 发票类型 */
    invoiceTypeTxt?: string;
    /** 发票地址（多张逗号隔开）（红字发票用到） */
    invoiceUrl?: string;
    /** 是否已勾稽（0：否；1：是；） */
    isArticulation?: number;
    /** 是否作废 */
    isCancel?: number;
    /** 不含税金额 */
    noTaxAmt?: number;
    /** 更新人 */
    operator?: string;
    /** 更新人编码 */
    operatorId?: string;
    /** 销退入库单原单号,多个用逗号隔开（列表的原单号=出库单原单号+入库单原单号） */
    originInBillId?: string;
    /** 销售出库单原单号,多个用逗号隔开（列表的原单号=出库单原单号+入库单原单号） */
    originOutBillId?: string;
    /** 价税合计 */
    priceTaxTotal?: number;
    /** 备注 */
    remark?: string;
    /** 结算状态:0-未结算 1-部分结算 2-全部结算 */
    settlementStatus?: number;
    /** 状态:0-未提审,1-已提审 2-审核中 3-审核通过 4-已取消 */
    status?: number;
    /** 状态 */
    statusTxt?: string;
    /** 发票税额 */
    taxAmount?: number;
    /** 纳税人识别号 */
    taxPayerCode?: string;
    /** 电话 */
    telePhone?: string;
    /** 更新时间 */
    updateTime?: string;
  };

  type SaleInvoiceAppRedOffUpdateVO = {
    /** 红冲原因（1：税率错误；2：发票抬头错误；3：税收编码错误；4:发票类型错误；5：发票作废（不需重开）） */
    cancelReason?: number;
    /** 客户编码 */
    cusId?: string;
    /** 主键（新增时不用传入） */
    id?: string;
    /** 开票日期 */
    invoiceDate?: string;
    /** 原发票列表，可空 */
    invoiceList?: string[];
    /** 发票号码 */
    invoiceNumber?: string;
    /** 发票类型 */
    invoiceType?: number;
    /** 发票图片url */
    invoiceUrlList?: string[];
    /** 红冲发票抬头 */
    newInvoiceTitle?: string;
    /** 红冲发票类型 */
    newInvoiceType?: number;
    /** 不含税金额 */
    noTaxAmt?: number;
    /** 价税合计 */
    priceTaxTotal?: number;
    /** 发票税额 */
    taxAmount?: number;
  };

  type SaleInvoiceAppRedUpdateVO = {
    /** 对账单明细Id（蓝票的时候传入） */
    checkingDetailList?: string[];
    /** 客户编码 */
    cusId?: string;
    /** 商品明细（红票的时候传入） */
    detailList?: BillDetailWareVO[];
    /** 主键（新增时不用传入） */
    id?: string;
    /** 发票类别:1-红字 2-蓝字（蓝红票通过这个字段来区分） */
    invoiceClass?: number;
    /** 发票代码（去掉该字段） */
    invoiceCode?: string;
    /** 开票日期 */
    invoiceDate?: string;
    /** 发票号码 */
    invoiceNumber?: string;
    /** 发票类型 */
    invoiceType?: number;
    /** 发票图片url */
    invoiceUrlList?: string[];
    /** 不含税金额 */
    noTaxAmt?: number;
    /** 价税合计 */
    priceTaxTotal?: number;
    /** 发票税额 */
    taxAmount?: number;
  };

  type SaleInvoiceAppVO = {
    /** 勾稽状态（蓝字发票用到）:0-未勾稽 1-部分勾稽 2-全部勾稽 */
    articulationStatus?: number;
    /** 创建时间 */
    createTime?: string;
    /** 创建人 */
    creater?: string;
    /** 创建人编码 */
    createrId?: string;
    /** 客户编号 */
    cusId?: string;
    /** 客户名称 */
    cusName?: string;
    /** 登记类型：0:发票申请 1：发票登记红票 2：发票登记蓝票 3：发票登记红冲 */
    enterType?: number;
    /** 主键 */
    id?: string;
    /** 发票类别（1-红字 2-蓝字） */
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
    /** 发票类型 */
    invoiceTypeTxt?: string;
    /** 是否已勾稽（0：否；1：是；） */
    isArticulation?: number;
    /** 是否作废 */
    isCancel?: number;
    /** 更新人 */
    operator?: string;
    /** 更新人编码 */
    operatorId?: string;
    /** 销退入库单原单号,多个用逗号隔开（列表的原单号=出库单原单号+入库单原单号） */
    originInBillId?: string;
    /** 销售出库单原单号,多个用逗号隔开（列表的原单号=出库单原单号+入库单原单号） */
    originOutBillId?: string;
    /** 价税合计（账单金额） */
    priceTaxTotal?: number;
    /** 备注 */
    remark?: string;
    /** 结算状态:0-未结算 1-部分结算 2-全部结算 */
    settlementStatus?: number;
    /** 状态:0-未提审,1-已提审 2-审核中 3-审核通过 4-已取消 */
    status?: number;
    /** 状态 */
    statusTxt?: string;
    /** 更新时间 */
    updateTime?: string;
  };

  type SaleInvoiceAppVOPageQuery = {
    /** 勾稽状态（蓝字发票用到）:0-未勾稽 1-部分勾稽 2-全部勾稽 */
    articulationStatus?: number;
    /** 创建人 */
    creater?: string;
    /** 客户信息 */
    cus?: string;
    /** 客户编码 */
    cusId?: string;
    /** 登记类型：1：红票 2：蓝票 3：红冲 */
    enterType?: number;
    /** 单据编码 */
    id?: string;
    /** 2-蓝、1-红 */
    invoiceClass?: number;
    /** 发票代码 */
    invoiceCode?: string;
    /** 发票号码 */
    invoiceNumber?: string;
    /** 发票类型（字典 polarbear_wss_invoice_type） */
    invoiceType?: number;
    /** 是否已勾稽（红字发票用到）（0：否；1：是） */
    isArticulation?: number;
    /** 是否手工录入（0：销售发票（蓝字） 1：销售发票登记） */
    isManual?: number;
    /** 生成时间-结束 */
    maxCreateTime?: string;
    /** 生成时间-开始 */
    minCreateTime?: string;
    /** 原单号 */
    originBillId?: string;
    pageQuery?: PageQuery;
    /** 结算状态:0-未结算 1-部分结算 2-结算完成 */
    settlementStatus?: number;
    /** 单据状态（字典polarbear_wss_bill_status） */
    status?: number;
  };

  type SaleInvoiceCancelVO = {
    /** 作废原因（1：税率错误；2：发票抬头错误；3：税收编码错误；4:发票类型错误；5：发票作废（不需重开）） */
    cancelReason?: number;
    /** 单据编码 */
    id?: string;
    /** 发票抬头 */
    invoiceTitle?: string;
    /** 发票类型 */
    invoiceType?: number;
    /** 备注 */
    remark?: string;
  };

  type SaleInvoiceDetailVO = {
    /** 主键 */
    id?: string;
    /** 生产厂家 */
    manufacturer?: string;
    /** 不含税金额 */
    noTaxAmt?: number;
    /** 不含税单价 */
    noTaxPrice?: number;
    /** 含税单价 */
    price?: number;
    /** 数量 */
    qty?: number;
    /** 商品编码 */
    skuId?: string;
    /** 规格 */
    skuModel?: string;
    /** 商品名称 */
    skuName?: string;
    /** 税额 */
    taxAmount?: number;
    /** 含税金额 */
    taxAmt?: number;
    /** 税率 */
    taxRate?: number;
  };

  type SaleInvoiceEditVO = {
    /** 商品明细列表 */
    detailList?: SaleInvoiceEditWareVO[];
    /** 单据编码 */
    id?: string;
    /** 发票抬头 */
    invoiceTitle?: string;
    /** 发票类型 */
    invoiceType?: string;
  };

  type SaleInvoiceEditWareVO = {
    /** 商品编码 */
    skuId?: string;
    /** 税率 */
    taxRate?: number;
  };

  type SaleInvoiceEnterVO = {
    /** 单据编码 */
    id?: string;
    /** 开票日期 */
    invoiceDate?: string;
    /** 发票号码 */
    invoiceNumber?: string;
  };

  type SaleInvoiceExpandVO = {
    /** 开户行 */
    accountBank?: string;
    /** 开户账户名称 */
    accountName?: string;
    /** 开户账号 */
    accountNo?: string;
    /** 公司地址 */
    address?: string;
    /** 作废原因（1：税率错误；2：发票抬头错误；3：税收编码错误；4:发票类型错误；5：发票作废（不需重开）） */
    cancelReason?: number;
    /** 创建时间 */
    createTime?: string;
    /** 创建人 */
    creater?: string;
    /** 创建人编码 */
    createrId?: string;
    /** 客户编号 */
    cusId?: string;
    /** 购买方（客户名称） */
    cusName?: string;
    /** 商品明细列表 */
    detailList?: SaleInvoiceDetailVO[];
    einvoiceUrl?: string;
    /** 主键 */
    id?: string;
    /** 发票类别:1-红字 2-蓝字 3-蓝字（作废重开） 4-蓝字（红冲重开） */
    invoiceClass?: number;
    /** 发票代码 */
    invoiceCode?: string;
    /** 发票申请单下的开票单数量 */
    invoiceCount?: number;
    /** 开票日期 */
    invoiceDate?: string;
    /** 发票号码 */
    invoiceNumber?: string;
    /** 发票抬头 */
    invoiceTitle?: string;
    /** 发票类型 */
    invoiceType?: number;
    /** 发票类型 */
    invoiceTypeTxt?: string;
    /** 发票地址（多张逗号隔开） */
    invoiceUrl?: string;
    /** 是否开票（0：否；1：是） */
    isHandle?: number;
    /** 是否线下（0：否；1：是） */
    isManual?: number;
    /** 不含税金额 */
    noTaxAmt?: number;
    /** 更新人 */
    operator?: string;
    /** 更新人编码 */
    operatorId?: string;
    /** 发票申请单号 */
    originBillId?: string;
    /** 价税合计 */
    priceTaxTotal?: number;
    /** 备注 */
    remark?: string;
    /** 发票状态（0-正常 1-红冲 2-作废） */
    status?: number;
    /** 发票税额 */
    taxAmount?: number;
    /** 纳税人识别号 */
    taxPayerCode?: string;
    /** 电话 */
    telePhone?: string;
    /** 更新时间 */
    updateTime?: string;
  };

  type SaleInvoiceRedOffVO = {
    /** 开户行 */
    accountBank?: string;
    /** 开户账户名称 */
    accountName?: string;
    /** 开户账号 */
    accountNo?: string;
    /** 公司地址 */
    address?: string;
    /** 勾稽状态（蓝字发票用到）:0-未勾稽 1-部分勾稽 2-全部勾稽 */
    articulationStatus?: number;
    /** 红冲原因（1：税率错误；2：发票抬头错误；3：税收编码错误；4:发票类型错误；5：发票作废（不需重开）） */
    cancelReason?: number;
    /** 创建时间 */
    createTime?: string;
    /** 创建人 */
    creater?: string;
    /** 创建人编码 */
    createrId?: string;
    /** 客户编号 */
    cusId?: string;
    /** 客户名称 */
    cusName?: string;
    /** 登记类型：0:发票申请 1：发票登记红票 2：发票登记蓝票 3：发票登记红冲 */
    enterType?: number;
    /** 主键 */
    id?: string;
    /** 发票类别（1-红字 2-蓝字） */
    invoiceClass?: number;
    /** 发票代码 */
    invoiceCode?: string;
    /** 开票日期 */
    invoiceDate?: string;
    /** 纳税人识别号 */
    invoiceList?: SaleInvoiceVO[];
    /** 发票号码 */
    invoiceNumber?: string;
    /** 发票抬头 */
    invoiceTitle?: string;
    /** 发票类型 */
    invoiceType?: number;
    /** 发票类型 */
    invoiceTypeTxt?: string;
    /** 发票地址（多张逗号隔开）（红字发票用到） */
    invoiceUrl?: string;
    /** 是否已勾稽（0：否；1：是；） */
    isArticulation?: number;
    /** 是否作废 */
    isCancel?: number;
    /** 红冲发票抬头 */
    newInvoiceTitle?: string;
    /** 红冲发票类型 */
    newInvoiceType?: number;
    /** 不含税金额 */
    noTaxAmt?: number;
    /** 更新人 */
    operator?: string;
    /** 更新人编码 */
    operatorId?: string;
    /** 销退入库单原单号,多个用逗号隔开（列表的原单号=出库单原单号+入库单原单号） */
    originInBillId?: string;
    /** 销售出库单原单号,多个用逗号隔开（列表的原单号=出库单原单号+入库单原单号） */
    originOutBillId?: string;
    /** 价税合计 */
    priceTaxTotal?: number;
    /** 备注 */
    remark?: string;
    /** 结算状态:0-未结算 1-部分结算 2-全部结算 */
    settlementStatus?: number;
    /** 状态:0-未提审,1-已提审 2-审核中 3-审核通过 4-已取消 */
    status?: number;
    /** 状态 */
    statusTxt?: string;
    /** 发票税额 */
    taxAmount?: number;
    /** 纳税人识别号 */
    taxPayerCode?: string;
    /** 电话 */
    telePhone?: string;
    /** 更新时间 */
    updateTime?: string;
  };

  type SaleInvoiceVO = {
    /** 创建时间 */
    createTime?: string;
    /** 创建人 */
    creater?: string;
    /** 创建人编码 */
    createrId?: string;
    /** 客户编号 */
    cusId?: string;
    /** 购买方（客户名称） */
    cusName?: string;
    /** 主键 */
    id?: string;
    /** 发票类别:1-红字 2-蓝字 3-蓝字（作废重开） 4-蓝字（红冲重开） */
    invoiceClass?: number;
    /** 发票代码 */
    invoiceCode?: string;
    /** 发票申请单下的开票单数量 */
    invoiceCount?: number;
    /** 开票日期 */
    invoiceDate?: string;
    /** 发票号码 */
    invoiceNumber?: string;
    /** 发票抬头 */
    invoiceTitle?: string;
    /** 发票类型 */
    invoiceType?: number;
    /** 发票类型 */
    invoiceTypeTxt?: string;
    /** 是否线下（0：否；1：是） */
    isManual?: number;
    /** 不含税金额 */
    noTaxAmt?: number;
    /** 更新人 */
    operator?: string;
    /** 更新人编码 */
    operatorId?: string;
    /** 发票申请单号 */
    originBillId?: string;
    /** 价税合计 */
    priceTaxTotal?: number;
    /** 备注 */
    remark?: string;
    /** 发票状态（0-正常 1-红冲 2-作废） */
    status?: number;
    /** 发票税额 */
    taxAmount?: number;
    /** 更新时间 */
    updateTime?: string;
  };

  type SaleInvoiceVOPageQuery = {
    /** 创建人 */
    creater?: string;
    /** 客户信息 */
    cus?: string;
    /** 客户编码 */
    cusId?: string;
    /** 发票类别:1-红字 2-蓝字 3-蓝字（作废重开） 4-蓝字（红冲重开） */
    invoiceClass?: number;
    /** 发票代码 */
    invoiceCode?: string;
    /** 发票号码 */
    invoiceNumber?: string;
    /** 发票类型（字典 polarbear_wss_invoice_type） */
    invoiceType?: number;
    /** 是否开票（0：否；1：是） */
    isHandle?: number;
    /** 生成时间-结束 */
    maxCreateTime?: string;
    /** 生成时间-开始 */
    minCreateTime?: string;
    /** 发票申请单号 */
    originBillId?: string;
    pageQuery?: PageQuery;
    /** 发票状态（0-正常 1-红冲 2-作废） */
    status?: number;
  };

  type SaleInvoiceWareBillVO = {
    /** 主键id */
    id?: string;
    /** 批发销售单号 */
    orderId?: string;
    /** 出入库原单号 */
    originBillId?: string;
    /** 单据类型（1-销售出库 2-销退入库） */
    originBillType?: number;
  };

  type SaleInvoiceWareExportVO = {
    /** 发票类别:2-蓝字 3-蓝字（作废重开） 4-蓝字（红冲重开） */
    invoiceClass?: number;
    /** 发票号码 */
    invoiceNumber?: string;
    /** 发票抬头 */
    invoiceTitle?: string;
    /** 商品关键字 */
    keyword?: string;
    /** 生产厂家 */
    manufacturer?: string;
    /** 开票日期-结束 */
    maxInvoiceDate?: string;
    /** 开票日期-开始 */
    minInvoiceDate?: string;
    /** 发票状态（0-正常 1-红冲 2-作废） */
    status?: number;
  };

  type SaleInvoiceWareVO = {
    /** 主键 */
    id?: string;
    /** 发票类别:1-红字 2-蓝字 3-蓝字（作废重开）4-蓝字（红冲重开）5-红冲 */
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
    /** 发票类型 */
    invoiceTypeTxt?: string;
    /** 生产厂家 */
    manufacturer?: string;
    /** 不含税金额 */
    noTaxAmt?: number;
    /** 不含税单价 */
    noTaxPrice?: number;
    /** 含税单价 */
    price?: number;
    /** 数量 */
    qty?: number;
    /** 商品编码 */
    skuId?: string;
    /** 规格 */
    skuModel?: string;
    /** 商品名称 */
    skuName?: string;
    /** 发票状态（0-正常 1-红冲 2-作废） */
    status?: number;
    /** 税额 */
    taxAmount?: number;
    /** 含税金额 */
    taxAmt?: number;
    /** 税收分类编码 */
    taxClassificationCode?: string;
    /** 税率 */
    taxRate?: number;
  };

  type SaleInvoiceWareVOPageQuery = {
    /** 发票类别:1-红字 2-蓝字 3-蓝字（作废重开）4-蓝字（红冲重开）5-红冲 */
    invoiceClass?: number;
    /** 发票号码 */
    invoiceNumber?: string;
    /** 发票抬头 */
    invoiceTitle?: string;
    /** 商品关键字 */
    keyword?: string;
    /** 生产厂家 */
    manufacturer?: string;
    /** 开票日期-结束 */
    maxInvoiceDate?: string;
    /** 开票日期-开始 */
    minInvoiceDate?: string;
    pageQuery?: PageQuery;
    /** 发票状态（0-正常 1-红冲 2-作废） */
    status?: number;
  };

  type SaleOrderOutDetailVO = {
    /** 批次 */
    batchNo?: string;
    id?: string;
    /** 生产厂家 */
    manufacturer?: string;
    /** 通知单明细Id */
    orderDetailId?: string;
    /** 通知出库数量 */
    outQty?: number;
    /** 商品未折扣原价 */
    price?: number;
    /** 生产批号 */
    produceCode?: string;
    /** 订单明细数量 */
    qty?: number;
    /** 实际出库数量 */
    realityOutQty?: number;
    /** 商品ID */
    skuId?: string;
    /** 规格 */
    skuModel?: string;
    /** 商品名称 */
    skuName?: string;
  };

  type SaleOutNoticeVO = {
    /** 是否可取消（0：否；1：是） */
    canCancel?: number;
    /** 通知单明细 */
    details?: SaleOrderOutDetailVO[];
    outType?: number;
    /** 包裹单号集合 */
    packageCodes?: string[];
    /** 状态 0-未审核 1-已审核 2-审核不通过 3-已取消 4:已关闭 5：仓库已接单 6：出库指令已生成 7：拣货完成 8：分拣完成 9：装箱完成 10：仓库交接 11：出库 12：系统已接单 13：打波次 */
    status?: number;
    /** 出库通知单ID */
    stockOutNoticeId?: string;
  };

  type SalePriceAdjAppDetailVO = {
    /**  实际调整差额 */
    adjTotalAmt?: number;
    /**  本次调整单价（含税）  */
    afterAdjPrice?: number;
    /**  调整前单价（含税）  */
    beforeAdjPrice?: number;
    /**  主键  */
    id?: string;
    /**  生产厂家  */
    manufacturer?: string;
    /**  销售单号  */
    orderId?: string;
    /**  源单明细Id（唯一）  */
    originBillDetailId?: string;
    /**  出/入库原单号  */
    originBillId?: string;
    /**  单据类型:1-销售出库 2-销退入库  */
    originBillType?: number;
    /**  原单价（含税）  */
    price?: number;
    /**  批号  */
    produceCode?: string;
    /**  数量  */
    qty?: number;
    /**  商品编号  */
    skuId?: string;
    /**  规格  */
    skuModel?: string;
    /**  商品名称  */
    skuName?: string;
    /**  税率  */
    taxRate?: number;
    /**  单位  */
    unit?: string;
  };

  type SalePriceAdjAppExpandVO = {
    /**  实际调整差额 */
    adjTotalAmt?: number;
    /**  附件地址  */
    attachmentUrls?: string[];
    /**  创建时间  */
    createTime?: string;
    /**  创建人  */
    creater?: string;
    /**  创建人编码  */
    createrId?: string;
    /**  客户编码  */
    cusId?: string;
    /**  客户名称  */
    cusName?: string;
    /**  商品列表  */
    detailList?: SalePriceAdjAppDetailVO[];
    /**  生效时间  */
    effectTime?: string;
    /**  单据编号  */
    id?: string;
    /**  调整单列表  */
    logList?: SalePriceAdjLogVO[];
    /**  更新人  */
    operator?: string;
    /**  更新人编码  */
    operatorId?: string;
    /**  调价原因  */
    remark?: string;
    /**  单据状态  */
    status?: number;
    /** 单据状态 */
    statusTxt?: string;
    /**  更新时间  */
    updateTime?: string;
  };

  type SalePriceAdjAppItemVO = {
    /**  本次调整单价（含税）  */
    afterAdjPrice?: number;
    /**  源单明细Id（唯一）  */
    originBillDetailId?: string;
  };

  type SalePriceAdjAppUpdateVO = {
    /**  附件地址  */
    attachmentUrls?: string[];
    /**  客户编码  */
    cusId?: string;
    /**  商品列表  */
    detailList?: SalePriceAdjAppItemVO[];
    /**  主键  */
    id?: string;
    /**  调价原因  */
    remark?: string;
  };

  type SalePriceAdjAppVO = {
    /**  实际调整差额 */
    adjTotalAmt?: number;
    /**  创建时间  */
    createTime?: string;
    /**  创建人  */
    creater?: string;
    /**  创建人编码  */
    createrId?: string;
    /**  客户编码  */
    cusId?: string;
    /**  客户名称  */
    cusName?: string;
    /**  生效时间  */
    effectTime?: string;
    /**  单据编号  */
    id?: string;
    /**  更新人  */
    operator?: string;
    /**  更新人编码  */
    operatorId?: string;
    /**  调价原因  */
    remark?: string;
    /**  单据状态  */
    status?: number;
    /** 单据状态 */
    statusTxt?: string;
    /**  更新时间  */
    updateTime?: string;
  };

  type SalePriceAdjAppVOPageQuery = {
    /** 创建人 */
    creater?: string;
    /** 客户信息 */
    cus?: string;
    /** 客户编码 */
    cusId?: string;
    /** 单据编号 */
    id?: string;
    /** 创建时间-结束 */
    maxCreateTime?: string;
    /** 生效时间-结束 */
    maxEffectTime?: string;
    /** 创建时间-开始 */
    minCreateTime?: string;
    /** 生效时间-开始 */
    minEffectTime?: string;
    pageQuery?: PageQuery;
    /** 商品信息 */
    skuInfo?: string;
    /** 单据状态（字典polarbear_wss_bill_status） */
    status?: number;
  };

  type SalePriceAdjExportVO = {
    /** 客户信息 */
    cus?: string;
    /** 客户编码 */
    cusId?: string;
    /** 单据编号 */
    id?: string;
    /** 创建时间-结束 */
    maxCreateTime?: string;
    /** 生效时间-结束 */
    maxEffectTime?: string;
    /** 创建时间-开始 */
    minCreateTime?: string;
    /** 生效时间-开始 */
    minEffectTime?: string;
    /** 商品信息 */
    skuInfo?: string;
    /** 单据状态（字典polarbear_wss_bill_status） */
    status?: number;
  };

  type SalePriceAdjLogVO = {
    /**  实际调整差额 */
    adjTotalAmt?: number;
    /**  调整类型：1-调价原单冲回 2-调价修正金额 3-调价修正冲回  */
    adjType?: number;
    /**  调整类型  */
    adjTypeTxt?: string;
    /**  本次调整单价（含税）  */
    afterAdjPrice?: number;
    /**  调整前单价（含税）  */
    beforeAdjPrice?: number;
    /**  主键  */
    id?: string;
    /**  生产厂家  */
    manufacturer?: string;
    /**  销售单号  */
    orderId?: string;
    /**  源单明细Id（唯一）  */
    originBillDetailId?: string;
    /**  出/入库原单号  */
    originBillId?: string;
    /**  单据类型:1-销售出库 2-销退入库  */
    originBillType?: number;
    /**  原单价（含税）  */
    price?: number;
    /**  批号  */
    produceCode?: string;
    /**  数量  */
    qty?: number;
    /**  商品编号  */
    skuId?: string;
    /**  规格  */
    skuModel?: string;
    /**  商品名称  */
    skuName?: string;
    /**  销售金额（含税） */
    taxAmt?: number;
    /**  税率  */
    taxRate?: number;
    /**  单位  */
    unit?: string;
  };

  type SaleReturnExportVO = {
    /** 申请人 */
    creater?: string;
    /** 客户名称 */
    cusName?: string;
    /** 退货单号 */
    id?: string;
    ids?: string[];
    /** 商品名称/商品编码/拼音码 */
    keyword?: string;
    /** 申请时间-结束 */
    maxOperateTime?: string;
    /** 申请时间-开始 */
    minOperateTime?: string;
    /** 订单编号 */
    orderId?: string;
    /** 通知单号 */
    originBillId?: string;
    pageQuery?: PageQuery;
    /** 退货类型:1-普通 2-闪电 */
    refundType?: number;
    /** 退货类型2（1-整单退货 2-部分退货） */
    returnType?: number;
    /** 外部单号-原始采退单号 */
    sourceBizId?: string;
    /** 单据状态 0-未提审 1-已提审 2-审核中 3-审核通过 4-已取消 -1 已关单 */
    status?: number;
    /** 仓库编码 */
    whId?: string;
  };

  type SaleReturnIsResultVO = {
    /** 是否能发起退货申请（0：否；1：是） */
    canApply?: number;
    /** 错误提示 */
    errorMsg?: string;
    /** 原退单号 */
    saleReturnId?: string;
  };

  type SaleReturnServiceApplyVO = {
    /** 退货商品列表 */
    detailList?: SaleReturnServiceWareVO[];
    /** 订单编号 */
    orderId?: string;
    /** 备注 */
    remark?: string;
    /** 退货原因（字典polarbear_wss_order_return_reason） */
    returnReason?: string;
    /** 退货原因编码 */
    returnReasonId?: string;
    /** 退货类型（1-整单退货 2-部分退货） */
    returnType?: number;
    /** 仓库编码 */
    whId?: string;
    /** 仓库名称 */
    whName?: string;
  };

  type SaleReturnServiceDetailVO = {
    /** 申请退货金额 */
    appReturnAmt?: number;
    /** 申请退货数量 */
    appReturnQty?: number;
    /** 单据编号 */
    billId?: string;
    /** 成本单价 */
    costPrice?: number;
    /** 药品分类 */
    drugCategory?: string;
    /** 明细id */
    id?: string;
    /** 生产厂家 */
    manufacturer?: string;
    /** 出库单号 */
    outBillId?: string;
    /** 退货单价 */
    price?: number;
    /** 批号 */
    produceCode?: string;
    /** 数量 */
    qty?: number;
    /** 实际退货数量 */
    realReturnQty?: number;
    /** 实际退货金额 */
    returnAmt?: number;
    /** 商品编码 */
    skuId?: string;
    /** 规格 */
    skuModel?: string;
    /** 商品名称 */
    skuName?: string;
    /** 税率 */
    taxRate?: number;
  };

  type SaleReturnServiceLogVO = {
    /** 退货申请单ID */
    billId?: string;
    /** 操作时间 */
    createTime?: string;
    /** 操作人 */
    creater?: string;
    /** 操作人Id */
    createrId?: string;
    /** 主键编码 */
    id?: string;
    /** 操作描述 */
    operateDesc?: string;
    /**  操作类型 */
    operateType?: string;
  };

  type SaleReturnServiceVO = {
    /** 申请退货金额 */
    appReturnAmt?: number;
    /** 申请退货数量 */
    appReturnQty?: number;
    /** 是否可以取消（0：否；1：是） */
    canCancel?: number;
    /** 申请时间 */
    createTime?: string;
    /** 申请人 */
    creater?: string;
    /** 申请人编码 */
    createrId?: string;
    /** 客户编号 */
    cusId?: string;
    /** 客户名称 */
    cusName?: string;
    /** 单据类型 1-普通 2-非原仓 */
    documentType?: string;
    /** 退货单号 */
    id?: string;
    /** 退货服务单日志 */
    logVOList?: SaleReturnServiceLogVO[];
    /** 销售单号 */
    orderId?: string;
    /** 通知单号 */
    originBillId?: string;
    /** 实际退货金额 */
    realReturnAmt?: number;
    /** 实际退货数量 */
    realReturnQty?: number;
    /** 退货类型:1-普通 2-闪电 */
    refundType?: number;
    /** 备注 */
    remark?: string;
    /** 申请原因 */
    returnReason?: string;
    /** 退货原因编码 */
    returnReasonId?: string;
    /** 退货类型2（1-整单退货 2-部分退货） */
    returnType?: number;
    /** 退货类型2名称 */
    returnTypeName?: string;
    /** 外部单号-原始采退单号 */
    sourceBizId?: string;
    /** 处理状态 0-未提审 1-已提审 2-审核中 3-审核通过 4-已取消 -1 已关单 */
    status?: number;
    /** 处理状态名称 */
    statusName?: string;
    /** 退货服务单明细 */
    wareVOList?: SaleReturnServiceDetailVO[];
    /** 仓库编码 */
    whId?: string;
    /** 仓库名称 */
    whName?: string;
  };

  type SaleReturnServiceVOPageQuery = {
    /** 申请人 */
    creater?: string;
    /** 客户名称 */
    cusName?: string;
    /** 退货单号 */
    id?: string;
    /** 商品名称/商品编码/拼音码 */
    keyword?: string;
    /** 申请时间-结束 */
    maxOperateTime?: string;
    /** 申请时间-开始 */
    minOperateTime?: string;
    /** 订单编号 */
    orderId?: string;
    /** 通知单号 */
    originBillId?: string;
    pageQuery?: PageQuery;
    /** 退货类型:1-普通 2-闪电 */
    refundType?: number;
    /** 退货类型2（1-整单退货 2-部分退货） */
    returnType?: number;
    /** 外部单号-原始采退单号 */
    sourceBizId?: string;
    /** 单据状态 0-未提审 1-已提审 2-审核中 3-审核通过 4-已取消 -1 已关单 */
    status?: number;
    /** 仓库编码 */
    whId?: string;
  };

  type SaleReturnServiceWareVO = {
    /** 申请退货数量 */
    appReturnQty?: number;
    /** 出库单明细编号 */
    outBillDetailId?: string;
    /** 出库单号 */
    outBillId?: string;
    /** 商品编码 */
    skuId?: string;
  };

  type SaleReturnWareVO = {
    /** 折后总额（页面显示的金额） */
    amt?: number;
    /** 批次成本价 */
    batchCostPrice?: number;
    /** 批次 */
    batchNo?: string;
    /** 可退数量 */
    canReturnQty?: number;
    /** 折扣金额 */
    disAmt?: number;
    /** 单品优惠 */
    disPrice?: number;
    /** 药品分类 */
    drugCategory?: string;
    /** 有效期 */
    expDate?: string;
    /** 库存-失效日期 */
    expirationDate?: string;
    /** 订单明细Id（编辑时传入） */
    id?: string;
    /** 是否商品注册批件到期（0：否；1：是） */
    isExpire?: number;
    /** 是否有GSP经营范围（0：否；1：是） */
    isGSP?: number;
    /** 是否低于批次成本价 （0：否；1：是）  */
    isLowerCostPrice?: number;
    /** 生产厂家 */
    manufacturer?: string;
    /** 订单id */
    orderId?: string;
    /** 出库单明细编号 */
    outBillDetailId?: string;
    /** 出库单号 */
    outBillId?: string;
    /** 出库数量 */
    outQty?: number;
    /** 商品未折扣原价（页面显示的单价） */
    price?: number;
    /** 活动价 */
    prmPrice?: number;
    /** 批号 */
    produceCode?: string;
    /** 库存-生产日期 */
    productionDate?: string;
    /** 项目编码 */
    projectId?: string;
    /** 项目名称 */
    projectName?: string;
    /** 数量 */
    qty?: number;
    /** 剩余效期天数 */
    remainExpDay?: string;
    /** 商品编码 */
    skuId?: string;
    /** 规格 */
    skuModel?: string;
    /** 商品名称 */
    skuName?: string;
    /** 商品可用库存 */
    stock?: number;
    /** 税率 */
    taxRate?: number;
  };

  type SaleReturnWareVOPageQuery = {
    /** 商品名称/拼音码/商品编码 */
    keyword?: string;
    pageQuery?: PageQuery;
  };

  type SaleReturnWithoutOriginalDetailVO = {
    /** 申请退货金额 */
    appReturnAmt?: number;
    /** 申请退货数量 */
    appReturnQty?: number;
    /** 成本单价 */
    costPrice?: number;
    /** 主键 */
    id?: string;
    /** 生产厂家 */
    manufacturer?: string;
    /** 退货单价 */
    price?: number;
    /** 批号 */
    produceCode?: string;
    /** 商品编码 */
    skuId?: string;
    /** 规格 */
    skuModel?: string;
    /** 商品名称 */
    skuName?: string;
    /** 税率 */
    taxRate?: number;
  };

  type SaleReturnWithoutOriginalVO = {
    /** 申请退货金额 */
    appReturnAmt?: number;
    /** 客户编号 */
    cusId?: string;
    /** 客户名称 */
    cusName?: string;
    /** 商品明细 */
    detailList?: SaleReturnWithoutOriginalDetailVO[];
    /** 主键 */
    id?: string;
    /** 订单编号(销售单号) */
    orderId?: string;
    /** 备注 */
    remark?: string;
    /** 退货原因 */
    returnReason?: string;
    /** 退货原因编码 */
    returnReasonId?: string;
    /** 退货类型2（1-整单退货 2-部分退货） */
    returnType?: number;
    /** 仓库编码 */
    whId?: string;
    /** 仓库名称 */
    whName?: string;
  };

  type SaleSettlementAppDetailVO = {
    /** 主键id 唯一 */
    id?: string;
    /** 发票类别:1-红字 2-蓝字 */
    invoiceClass?: number;
    /** 发票抬头 */
    invoiceTitle?: string;
    /** 发票类型 */
    invoiceType?: number;
    /** 发票类型 */
    invoiceTypeTxt?: string;
    /** 出库单号 */
    outId?: string[];
    /** 价税合计 */
    priceTaxTotal?: number;
    /** 入库单号 */
    putId?: string[];
    /** 申请单号（销售发票申请单id）唯一 */
    saleInvoiceAppId?: string;
    /** 状态:0-未申请结算 1-已申请结算 */
    status?: number;
  };

  type SaleSettlementAppExpandVO = {
    /** 开户行 */
    accountBank?: string;
    /** 开户账户名称 */
    accountName?: string;
    /** 开户账号 */
    accountNo?: string;
    /** 本次预收款抵扣金额 */
    advanceReceiptDeductionAmt?: number;
    /** 申请结算金额 */
    applySettlementAmount?: number;
    /** 联系人id */
    contactId?: string;
    /** 联系人 */
    contactPerson?: string;
    /** 联系人电话 */
    contactPhone?: string;
    /** 创建时间 */
    createTime?: string;
    /** 创建人（也就是业务员） */
    creater?: string;
    /** 创建人编码 */
    createrId?: string;
    /** 客户编号 */
    cusId?: string;
    /** 客户名称 */
    cusName?: string;
    /** 发票申请单明细列表 */
    detailList?: SaleSettlementAppDetailVO[];
    /** 单据编号 */
    id?: string;
    /** 备注 */
    remark?: string;
    /** 结算账户id */
    settlementAccountId?: string;
    /** 预收款抵扣选择收款单 */
    settlementAdvanceReceiptDetailList?: SettlementAdvanceReceiptDetailVO[];
    /** 实际结算金额 */
    settlementAmount?: number;
    /** 结算状态:0-未结算 1-部分结算 2-全部结算 */
    settlementStatus?: number;
    /** 状态 */
    status?: number;
    /** 状态 */
    statusTxt?: string;
  };

  type SaleSettlementAppUpdateVO = {
    /** 联系人id */
    contactId?: string;
    /** 客户编码 */
    cusId?: string;
    /** 单据编号 */
    id?: string;
    /** 申请单号列表 */
    originBillIds?: string[];
    /** 备注 */
    remark?: string;
    /** 预收款抵扣选择收款单 */
    settlementAdvanceReceiptDetailList?: SettlementAdvanceReceiptDetailVO[];
  };

  type SaleSettlementAppVO = {
    /** 开户行 */
    accountBank?: string;
    /** 开户账户名称 */
    accountName?: string;
    /** 开户账号 */
    accountNo?: string;
    /** 本次预收款抵扣金额 */
    advanceReceiptDeductionAmt?: number;
    /** 申请结算金额 */
    applySettlementAmount?: number;
    /** 联系人id */
    contactId?: string;
    /** 联系人 */
    contactPerson?: string;
    /** 联系人电话 */
    contactPhone?: string;
    /** 创建时间 */
    createTime?: string;
    /** 创建人（也就是业务员） */
    creater?: string;
    /** 创建人编码 */
    createrId?: string;
    /** 客户编号 */
    cusId?: string;
    /** 客户名称 */
    cusName?: string;
    /** 单据编号 */
    id?: string;
    /** 备注 */
    remark?: string;
    /** 结算账户id */
    settlementAccountId?: string;
    /** 实际结算金额 */
    settlementAmount?: number;
    /** 结算状态:0-未结算 1-部分结算 2-全部结算 */
    settlementStatus?: number;
    /** 状态 */
    status?: number;
    /** 状态 */
    statusTxt?: string;
  };

  type SaleSettlementAppVOPageQuery = {
    /** 联系人 */
    contactPerson?: string;
    /** 联系人电话 */
    contactPhone?: string;
    /** 创建人 */
    creater?: string;
    /** 客户信息 */
    cus?: string;
    /** 客户编号 */
    cusId?: string;
    /** 单据编号 */
    id?: string;
    /** 创建时间-结束 */
    maxCreateTime?: string;
    /** 创建时间-开始 */
    minCreateTime?: string;
    pageQuery?: PageQuery;
    /** 结算状态:0-未结算 1-部分结算 2-全部结算 */
    settlementStatus?: number;
    /** 状态（字典 polarbear_wss_bill_status） */
    status?: number;
  };

  type SalesContractDetailVO = {
    /** 金额 */
    amt?: number;
    /** 商品分类 字典 polarbear_base_drug_category */
    drugCategory?: string;
    /** 是否有GSP经营范围（0：否；1：是） */
    isGSP?: number;
    /** 是否符合质量要求（0：否；1：是） */
    isGSPQuality?: number;
    /** 生产厂家 */
    manufacturer?: string;
    /** 销售价 */
    price?: number;
    /** 数量 */
    qty?: number;
    /** 商品编码 */
    skuId?: string;
    /** 规格 */
    skuModel?: string;
    /** 商品名称 */
    skuName?: string;
    /** 单位 */
    unit?: string;
  };

  type SalesContractDetailVOPageQuery = {
    /** 合同Id（不是编码） */
    contractId?: string;
    /** 订单id */
    orderId?: string;
    pageQuery?: PageQuery;
    /** 仓库编码 */
    whId?: string;
  };

  type SalesContractExpandVO = {
    /** 开户银行 */
    accountBank?: string;
    /** 开户账号 */
    accountCode?: string;
    /** 账户名称 */
    accountName?: string;
    /** 附件列表 */
    attachmentList?: AttachmentVO[];
    /** 合同编号 */
    contractCode?: string;
    /** 合同日期 */
    contractDate?: string;
    /** 合同有效期 */
    contractExpirationDate?: string;
    /** 合同名称 */
    contractName?: string;
    /** 签约主体 */
    contractSubject?: string;
    /**  合同类型（1：框架合同；2：商品合同） */
    contractType?: number;
    /** 创建时间 */
    createTime?: string;
    /** 创建人 */
    creater?: string;
    /** 创建人编码 */
    createrId?: string;
    /** 客户编号 */
    cusId?: string;
    /** 客户名称 */
    cusName?: string;
    /** 商品列表 */
    detailList?: SalesContractDetailVO[];
    /** 合同id */
    id?: string;
    /** 是否直调 0否 1是 */
    isDirect?: number;
    /** 更新人 */
    operator?: string;
    /** 更新人编码 */
    operatorId?: string;
    /** 收款方式 */
    payWay?: number;
    /** 收款方式 */
    payWayTxt?: string;
    /** 账期天数 */
    paymentDay?: number;
    /**  账期起算时间点 1-发货时间 2-收货时间 3-自然月 */
    paymentTimeType?: number;
    /**  账期结算方式:1-月结 2-单结 */
    paymentWay?: number;
    /** 预收金额 */
    prepayAmt?: number;
    /** 可用金额 */
    remainingAmt?: number;
    /** 备注 */
    remark?: string;
    /** 结算周期 */
    settlePeriod?: number;
    /** 结算方式 */
    settleWay?: number;
    /** 结算方式 */
    settleWayTxt?: string;
    /** 结算账户id */
    settlementAccountId?: string;
    /** 审核状态 */
    status?: number;
    /** 审核状态 */
    statusTxt?: string;
    /** 总金额 */
    sumAmt?: number;
    /** 更新时间 */
    updateTime?: string;
    /** 生效状态（0：未生效；1：生效中；2：已失效） */
    validStatus?: number;
  };

  type SalesContractOrderWareVO = {
    /** 条形码 */
    barCode?: string;
    /** 批次 */
    batchNo?: string;
    /** 合同编号 */
    contractCode?: string;
    /** 合同名称 */
    contractName?: string;
    /** 创建时间 */
    createTime?: string;
    /** 创建人 */
    creater?: string;
    /** 创建人编码 */
    createrId?: string;
    /** 客户编码 */
    cusId?: string;
    /** 客户名称 */
    cusName?: string;
    /** 商品分类 字典 polarbear_base_drug_category */
    drugCategory?: string;
    /** 库存-失效日期 */
    expirationDate?: string;
    /** 主键 */
    id?: string;
    /** 是否符合质量要求（0：否；1：是） */
    isGSPQuality?: number;
    /** 生产厂家 */
    manufacturer?: string;
    /** 合同报价 */
    price?: number;
    /** 价格类型 */
    priceType?: string;
    /** 价格类型名称 */
    priceTypeName?: string;
    /** 活动价 */
    prmPrice?: number;
    /** 批号 */
    produceCode?: string;
    /** 库存-生产日期 */
    productionDate?: string;
    /** 项目Id */
    projectId?: string;
    /** 项目名称 */
    projectName?: string;
    /** 合同数量 */
    qty?: number;
    /** 合同已下单数量 */
    realQty?: number;
    /** 剩余效期天数 */
    remainExpDay?: string;
    /** 本次可用下单数量 */
    remainingOrderQty?: number;
    /** 合同可用数量 */
    remainingQty?: number;
    /** 商品编码 */
    skuId?: string;
    /** 商品规格 */
    skuModel?: string;
    /** 商品名称 */
    skuName?: string;
    /** 状态 0-停用 1-启用 */
    status?: number;
    /** 商品可用库存 */
    stock?: number;
    /** 更新时间 */
    updateTime?: string;
  };

  type SalesContractUpdateVO = {
    /** 附件列表 */
    attachmentList?: AttachmentVO[];
    /** 合同编号（必填） */
    contractCode?: string;
    /** 合同日期（必填） */
    contractDate?: string;
    /** 合同有效期 */
    contractExpirationDate?: string;
    /** 合同名称（必填） */
    contractName?: string;
    /** 签约主体 */
    contractSubject?: string;
    /** 客户编号（必填） */
    cusId?: string;
    /** 合同id（编辑时传入必填，新增不需要） */
    id?: string;
    /** 收款方式（字典 polarbear_finance_pay_type）（必填） */
    payWay?: number;
    /** 账期天数 */
    paymentDay?: number;
    /**  账期起算时间点 1-发货时间 2-收货时间 3-自然月 */
    paymentTimeType?: number;
    /**  账期结算方式:1-月结 2-单结 */
    paymentWay?: number;
    /** 预付金额 */
    prepayAmt?: number;
    /** 备注 */
    remark?: string;
    /** 结算周期 */
    settlePeriod?: number;
    /** 结算方式:1-账期 2-预收 3-现款（必填） */
    settleWay?: number;
    /** 结算账户id */
    settlementAccountId?: string;
    /** 商品列表 */
    wareList?: SalesContractWareVO[];
  };

  type SalesContractVO = {
    /** 开户银行 */
    accountBank?: string;
    /** 开户账号 */
    accountCode?: string;
    /** 账户名称 */
    accountName?: string;
    /** 合同编号 */
    contractCode?: string;
    /** 合同日期 */
    contractDate?: string;
    /** 合同有效期 */
    contractExpirationDate?: string;
    /** 合同名称 */
    contractName?: string;
    /** 签约主体 */
    contractSubject?: string;
    /**  合同类型（1：框架合同；2：商品合同） */
    contractType?: number;
    /** 创建时间 */
    createTime?: string;
    /** 创建人 */
    creater?: string;
    /** 创建人编码 */
    createrId?: string;
    /** 客户编号 */
    cusId?: string;
    /** 客户名称 */
    cusName?: string;
    /** 合同id */
    id?: string;
    /** 是否直调 0否 1是 */
    isDirect?: number;
    /** 更新人 */
    operator?: string;
    /** 更新人编码 */
    operatorId?: string;
    /** 收款方式 */
    payWay?: number;
    /** 收款方式 */
    payWayTxt?: string;
    /** 账期天数 */
    paymentDay?: number;
    /**  账期起算时间点 1-发货时间 2-收货时间 3-自然月 */
    paymentTimeType?: number;
    /**  账期结算方式:1-月结 2-单结 */
    paymentWay?: number;
    /** 预收金额 */
    prepayAmt?: number;
    /** 可用金额 */
    remainingAmt?: number;
    /** 备注 */
    remark?: string;
    /** 结算周期 */
    settlePeriod?: number;
    /** 结算方式 */
    settleWay?: number;
    /** 结算方式 */
    settleWayTxt?: string;
    /** 结算账户id */
    settlementAccountId?: string;
    /** 审核状态 */
    status?: number;
    /** 审核状态 */
    statusTxt?: string;
    /** 总金额 */
    sumAmt?: number;
    /** 更新时间 */
    updateTime?: string;
    /** 生效状态（0：未生效；1：生效中；2：已失效） */
    validStatus?: number;
  };

  type SalesContractVOPageQuery = {
    /** 合同编号 */
    contractCode?: string;
    /** 合同名称 */
    contractName?: string;
    /** 创建人 */
    creater?: string;
    /** 客户信息 */
    cus?: string;
    /** 客户编号 */
    cusId?: string;
    /** 是否直调 0否 1是 */
    isDirect?: number;
    /** 合同日期-结束 */
    maxContractDate?: string;
    /** 合同有效期-结束 */
    maxContractExpirationDate?: string;
    /** 合同日期-开始 */
    minContractDate?: string;
    /** 合同有效期-开始 */
    minContractExpirationDate?: string;
    /** 订单id */
    orderId?: string;
    pageQuery?: PageQuery;
    /** 结算方式（字典 polarbear_wss_settle_way） */
    settleWay?: number;
    /** 状态（字典 polarbear_wss_bill_status） */
    status?: number;
    /** 生效状态（0：未生效；1：生效中；2：已失效） */
    validStatus?: number;
  };

  type SalesContractWareVO = {
    /** 销售价 */
    price?: number;
    /** 数量 */
    qty?: number;
    /** 商品编码 */
    skuId?: string;
  };

  type SalesReportExportVO = {
    /** 条形码 */
    barcode?: string;
    /** 客户编码 */
    cusId?: string;
    /** 客户编码 */
    cusName?: string;
    /** 商品关键字 */
    keyword?: string;
    /** 统计时间-结束 */
    maxDate?: string;
    /** 统计时间-开始 */
    minDate?: string;
    /** 商品编码 */
    skuId?: string;
    /** 商品名称 */
    skuName?: string;
    /** 类型（1：商品；2：客户 */
    type?: number;
  };

  type SettlementAdvanceReceiptDetailVO = {
    /** 本次抵扣金额 */
    deductionAmt?: number;
    /** 收款金额 */
    receiptAmt?: number;
    /** 收款单编码 */
    receiptId?: string;
    /** 销售结算申请单id */
    saleSettlementAppId?: string;
  };

  type StockBatchNoVO = {
    /** 批次 */
    batchNo?: string;
    /** 批次可用库存  */
    batchStock?: number;
    /** 成本单价 */
    costPrice?: number;
    /** 有效期 */
    expirationDate?: string;
    /** 是否商品注册批件到期（0：否；1：是）->到期不可选 */
    isExpire?: number;
    /** 生产厂家 */
    manufacturer?: string;
    /** 价格 */
    price?: number;
    /** 活动价 */
    prmPrice?: number;
    /** 批号 */
    produceCode?: string;
    /** 生产日期 */
    productionDate?: string;
    /** 所属项目编码 */
    projectId?: string;
    /** 所属项目名称 */
    projectName?: string;
    /** 剩余效期天数 */
    remainExpDay?: string;
    /** 商品编码 */
    skuId?: string;
    /** 商品规格 */
    skuModel?: string;
    /** 商品名称 */
    skuName?: string;
    /** 商品可用库存  */
    stock?: number;
    /** 供应商编码 */
    supplierId?: string;
    /** 供应商简称 */
    supplierShortName?: string;
  };

  type StockChangeBillDetailVO = {
    /** 申请变动数量 */
    appChangeQty?: number;
    /** 可退货数量 */
    canChangeQuantity?: number;
    /** 药品分类 */
    drugCategory?: string;
    /** 错误描述 */
    errorMsg?: string;
    /** 执行失败数量 */
    failQty?: number;
    /** 明细id */
    id?: string;
    /** 是否重复上报（0：否；1：是） */
    isRepeat?: number;
    /** 生产厂家 */
    manufacturer?: string;
    /** 外部商品编码 */
    outSkuId?: string;
    /** 商品名称简拼 */
    simpleSpelling?: string;
    /** 商品编号 */
    skuId?: string;
    /** 规格 */
    skuModel?: string;
    /** 商品名称 */
    skuName?: string;
    /** 执行成功数量 */
    successQty?: number;
    /** 公共仓可用库存 */
    whPublicAvailableStock?: number;
    /** 虚拟仓可用库存 */
    whVirtualAvailableStock?: number;
  };

  type StockChangeBillExpandVO = {
    /** 单据类型 */
    billType?: number;
    /** 单据类型 */
    billTypeTxt?: string;
    /** 变更类型（1：虚拟仓库存增加、2：虚拟仓库存释放） */
    changeType?: number;
    /** 单据时间 */
    createTime?: string;
    /** 创建人 */
    creater?: string;
    /** 创建人编码 */
    createrId?: string;
    /** 预约仓编码 */
    cusId?: string;
    /** 预约仓名称 */
    cusName?: string;
    /** 商品明细 */
    detailList?: StockChangeBillDetailVO[];
    /** 错误描述 */
    errorMsg?: string;
    /** 执行状态（0：执行失败、1：部分执行失败、2：执行成功） */
    executeStatus?: number;
    /** 单据编码 */
    id?: string;
    /** 更新人 */
    operator?: string;
    /** 更新人编码 */
    operatorId?: string;
    /** 原单号 */
    originBillId?: string;
    /** 备注 */
    remark?: string;
    /** 状态:1-未审核 2-已审核 3-已取消 */
    status?: number;
    /** 更新时间 */
    updateTime?: string;
    /** 仓库编码 */
    whId?: string;
    /** 仓库名称 */
    whName?: string;
  };

  type StockChangeBillUpdateVO = {
    /** 变更类型（1：虚拟仓库存增加、2：虚拟仓库存释放） */
    changeType?: number;
    /** 预约仓编码 */
    cusId?: string;
    /** 商品明细 */
    detailList?: StockChangeBillWareVO[];
    /** 单据编码（编辑的时候传入） */
    id?: string;
    /** 备注 */
    remark?: string;
    /** 仓库编码 */
    whId?: string;
    /** 仓库名称 */
    whName?: string;
  };

  type StockChangeBillVO = {
    /** 单据类型 */
    billType?: number;
    /** 单据类型 */
    billTypeTxt?: string;
    /** 变更类型（1：虚拟仓库存增加、2：虚拟仓库存释放） */
    changeType?: number;
    /** 单据时间 */
    createTime?: string;
    /** 创建人 */
    creater?: string;
    /** 创建人编码 */
    createrId?: string;
    /** 预约仓编码 */
    cusId?: string;
    /** 预约仓名称 */
    cusName?: string;
    /** 执行状态（0：执行失败、1：部分执行失败、2：执行成功） */
    executeStatus?: number;
    /** 单据编码 */
    id?: string;
    /** 更新人 */
    operator?: string;
    /** 更新人编码 */
    operatorId?: string;
    /** 原单号 */
    originBillId?: string;
    /** 备注 */
    remark?: string;
    /** 状态:1-未审核 2-已审核 3-已取消 */
    status?: number;
    /** 更新时间 */
    updateTime?: string;
    /** 仓库编码 */
    whId?: string;
    /** 仓库名称 */
    whName?: string;
  };

  type StockChangeBillVOPageQuery = {
    /** 单据类型（字典polarbear_wss_stock_change_type） */
    billType?: number;
    /** 变更类型（1：虚拟仓库存增加、2：虚拟仓库存释放） */
    changeType?: number;
    /** 创建人 */
    creater?: string;
    /** 预约仓编码（通过/listEntrustStore获取预约仓数据） */
    cusId?: string;
    /** 执行状态（0：执行失败、1：部分执行失败、2：执行成功） */
    executeStatus?: number;
    /** 单据编码 */
    id?: string;
    /** 商品关键字 */
    keyword?: string;
    /** 单据时间-结束 */
    maxCreateTime?: string;
    /** 单据时间-开始 */
    minCreateTime?: string;
    /** 原单号 */
    originBillId?: string;
    pageQuery?: PageQuery;
    /** 状态:1-未审核 2-已审核 3-已取消 */
    status?: number;
    /** 仓库编码 */
    whId?: string;
  };

  type StockChangeBillWareVO = {
    /** 申请变动数量 */
    appChangeQty?: number;
    /** 外部商品编码 */
    outSkuId?: string;
    /** 商品编号 */
    skuId?: string;
  };

  type StockWareVO = {
    /** 药品分类 */
    drugCategory?: string;
    /** 是否报价（0：否；1：是） */
    isOfferSheet?: number;
    /** 是否重复上报（0：否；1：是） */
    isRepeat?: number;
    /** 生产厂家 */
    manufacturer?: string;
    /** 外部商品编码 */
    outSkuId?: string;
    /** 商品名称简拼 */
    simpleSpelling?: string;
    /** 商品编号 */
    skuId?: string;
    /** 规格 */
    skuModel?: string;
    /** 商品名称 */
    skuName?: string;
    /** 公共仓可用库存 */
    whPublicAvailableStock?: number;
    /** 虚拟仓可用库存 */
    whVirtualAvailableStock?: number;
  };

  type StockWareVOPageQuery = {
    /** 预约仓编码 */
    cusId?: string;
    /** 商品关键字 */
    keyword?: string;
    /** 生产厂家 */
    manufacturer?: string;
    /** 外部商品编码 */
    outSkuId?: string;
    pageQuery?: PageQuery;
    /** 仓库编码 */
    whId?: string;
  };

  type UploadInvoiceVO = {
    /** 发票单据编号 */
    billId?: string;
    /** 发票图片url */
    invoiceUrlList?: string[];
  };

  type WareHouseVO = {
    /** 仓库编码 */
    whId?: string;
    /** 仓库名称 */
    whName?: string;
  };

  type WareMedicalEquipmentSalesExportVO = {
    /** 购进单位（客户名称/编码） */
    cus?: string;
    /** 商品关键字 */
    keyword?: string;
    /** 销售日期-结束 */
    maxOrderConfirmTime?: string;
    /** 销售日期-开始 */
    minOrderConfirmTime?: string;
    /** 销售单号 */
    orderId?: string;
    /** 注册证号 */
    regisTrationNumber?: string;
  };

  type WareMedicalEquipmentSalesReportVO = {
    /** 购货单位所属地区 */
    cusAddr?: string;
    /** 购货单位名称 */
    cusName?: string;
    /** 有效期至 */
    expiredDate?: string;
    /** 购货单位许可证号 */
    licenseCode?: string;
    /** 生产厂家 */
    manufacturer?: string;
    /** 销售日期 */
    orderConfirmTime?: string;
    /** 销售单号 */
    orderId?: string;
    /** 生产批号 */
    produceCode?: string;
    /** 产品说明 */
    productDescription?: string;
    /** 生产日期 */
    productionDate?: string;
    /** 生产企业许可证号 */
    productionLicense?: string;
    /** 是否有合格证明 */
    qualificationCertification?: string;
    /** 销售数量 */
    realityQty?: number;
    /** 医疗器械注册证号 */
    regisTrationNumber?: string;
    /** 备注 */
    remark?: string;
    /** 序列号(机身号) */
    serialNo?: string;
    /** 商品规格 */
    skuModel?: string;
    /** 商品名称 */
    skuName?: string;
    /** 灭菌批号 */
    sterilizationCode?: string;
    /** 灭菌日期 */
    sterilizationDate?: string;
    /** 灭菌有效期至 */
    sterilizationExpiredDate?: string;
    /** 购货单位组织机构代码 */
    taxPayerCode?: string;
    /** 最小包装单位 */
    unitName?: string;
    /** 通用名 */
    wareGeneralName?: string;
  };

  type WareMedicalEquipmentSalesReportVOPageQuery = {
    /** 购进单位（客户名称/编码） */
    cus?: string;
    /** 商品关键字 */
    keyword?: string;
    /** 销售日期-结束 */
    maxOrderConfirmTime?: string;
    /** 销售日期-开始 */
    minOrderConfirmTime?: string;
    /** 销售单号 */
    orderId?: string;
    pageQuery?: PageQuery;
    /** 注册证号 */
    regisTrationNumber?: string;
  };

  type WarePriceDetailVO = {
    /** 条形码 */
    barCode?: string;
    /**  批次  */
    batchNo?: string;
    /** 创建时间 */
    createTime?: string;
    /** 创建人 */
    creater?: string;
    /** 创建人编码 */
    createrId?: string;
    /** 客户编码 */
    cusId?: string;
    /** 客户名称 */
    cusName?: string;
    /** 商品分类 字典 polarbear_base_drug_category */
    drugCategory?: string;
    /** 库存-失效日期 */
    expirationDate?: string;
    /** 主键 */
    id?: string;
    /** 是否有GSP经营范围（0：否；1：是） */
    isGSP?: number;
    /** 是否符合质量要求（0：否；1：是） */
    isGSPQuality?: number;
    /** 生产厂家 */
    manufacturer?: string;
    /** 价格 */
    price?: number;
    /** 价格类型 */
    priceType?: string;
    /** 价格类型名称 */
    priceTypeName?: string;
    /** 活动价 */
    prmPrice?: number;
    /**  生产批号  */
    produceCode?: string;
    /** 库存-生产日期 */
    productionDate?: string;
    /** 项目Id */
    projectId?: string;
    /** 项目名称 */
    projectName?: string;
    /** 剩余效期天数 */
    remainExpDay?: string;
    /** 商品编码 */
    skuId?: string;
    /** 商品规格 */
    skuModel?: string;
    /** 商品名称 */
    skuName?: string;
    /** 状态 0-停用 1-启用 */
    status?: number;
    /** 库存 */
    stock?: number;
    /** 单位 */
    unit?: string;
    /** 更新时间 */
    updateTime?: string;
    /** 仓库编码 */
    whId?: string;
  };

  type WarePriceImportResultVO = {
    /** 失败导入数量 */
    fail?: number;
    /** 失败文档下载路径 */
    failExcelPath?: string;
    /** 成功导入数量 */
    success?: number;
  };

  type WarePriceLogVO = {
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
    /** 操作类型 */
    operateType?: string;
    /** 批发价格Id */
    priceId?: string;
  };

  type WarePriceLogVOPageQuery = {
    /** 操作时间-开始 */
    maxOperateTime?: string;
    /** 操作时间-开始 */
    minOperateTime?: string;
    /** 操作人 */
    operator?: string;
    pageQuery?: PageQuery;
    /** 批发价格Id */
    priceId?: string;
  };

  type WarePriceStatusVO = {
    /** Id列表 */
    ids?: string[];
    /** 备注 */
    remark?: string;
    /** 状态 0-停用 1-启用 */
    status?: number;
  };

  type WarePriceUpdateDO = {
    /** 客户编码 */
    cusId?: string;
    /** 主键（新增时不用传入） */
    id?: string;
    /** 订单来源 1-自营 2-药师帮 */
    orderSource?: number;
    /** 价格 */
    price?: number;
    /** 价格类型 字典：polarbear_wss_ware_price_type */
    priceType?: string;
    /** 商品编码 */
    skuId?: string;
    /** 仓库编码 */
    whId?: string;
    /** 仓库名称 */
    whName?: string;
  };

  type WarePriceVO = {
    /** 条形码 */
    barCode?: string;
    /** 创建时间 */
    createTime?: string;
    /** 创建人 */
    creater?: string;
    /** 创建人编码 */
    createrId?: string;
    /** 客户编码 */
    cusId?: string;
    /** 客户名称 */
    cusName?: string;
    /** 商品分类 字典 polarbear_base_drug_category */
    drugCategory?: string;
    /** 主键 */
    id?: string;
    /** 生产厂家 */
    manufacturer?: string;
    /** 价格 */
    price?: number;
    /** 价格类型 */
    priceType?: string;
    /** 价格类型名称 */
    priceTypeName?: string;
    /** 项目Id */
    projectId?: string;
    /** 项目名称 */
    projectName?: string;
    /** 商品编码 */
    skuId?: string;
    /** 商品规格 */
    skuModel?: string;
    /** 商品名称 */
    skuName?: string;
    /** 状态 0-停用 1-启用 */
    status?: number;
    /** 更新时间 */
    updateTime?: string;
  };

  type WarePriceVOPageQuery = {
    /** 条形码 */
    barCode?: string;
    /** 创建人 */
    creater?: string;
    /** 客户信息 */
    cus?: string;
    /** 客户编码 */
    cusId?: string;
    /** 是否绑定客户（0：否；1：是） */
    isBind?: number;
    /** 商品关键字 */
    keyword?: string;
    /** 生产厂家 */
    manufacturer?: string;
    /** 最大价格 */
    maxPrice?: number;
    /** 更新时间-结束 */
    maxUpdateTime?: string;
    /** 最小价格 */
    minPrice?: number;
    /** 更新时间-开始 */
    minUpdateTime?: string;
    /** 订单来源 1-自营 2-药师帮 */
    orderSource?: number;
    pageQuery?: PageQuery;
    /** 价格类型 字典：polarbear_wss_ware_price_type */
    priceType?: string;
    /** 商品编码 */
    skuId?: string;
    /** 商品编码(多选) */
    skuIds?: string[];
    /** 价格状态 0-停用 1-启用 */
    status?: number;
    /** 商品状态 1-启用 2-停用 3-停购 */
    wareStatus?: string[];
    /** 仓库编码 */
    whId?: string;
  };

  type WareSalesDetailVO = {
    /** 平均售价 */
    avgPrice?: number;
    /** 客户编号 */
    cusId?: string;
    /** 客户名称 */
    cusName?: string;
    /** 客户类型 */
    cusType?: string;
    /** 最高售价 */
    maxPrice?: number;
    /** 最低售价 */
    minPrice?: number;
    /** 退货金额 */
    returnAmt?: number;
    /** 退货数量 */
    returnNum?: number;
    /** 销售金额（净销售金额=销售金额-退货金额） */
    salesAmt?: number;
    /** 销售数量（净销售数量=销售数量-退货数量） */
    salesNum?: number;
  };

  type WareSalesReportVO = {
    /** 平均成本单价 */
    avgCostPrice?: number;
    /** 平均不含税单价 */
    avgNoTaxPrice?: number;
    /** 平均售价 */
    avgPrice?: number;
    /** 条形码 */
    barcode?: string;
    /** 净税额（净含税金额-净不含税金额） */
    clearTaxAmount?: number;
    /** 累计成本金额 */
    costAmt?: number;
    /** 生产厂家 */
    manufacturer?: string;
    /** 最高售价 */
    maxPrice?: number;
    /** 最低售价 */
    minPrice?: number;
    /** 不含税金额（销售不含税 - 销退不含税） */
    noTaxAmt?: number;
    /** 毛利 */
    profitAmt?: number;
    /** 毛利率 */
    profitRate?: number;
    /** 退货金额 */
    returnAmt?: number;
    /** 销退不含税金额 */
    returnNoTaxAmt?: number;
    /** 退货数量 */
    returnNum?: number;
    /** 销售金额（净销售金额=销售金额-退货金额） */
    salesAmt?: number;
    /** 销售不含税金额 */
    salesNoTaxAmt?: number;
    /** 销售数量（净销售数量=销售数量-退货数量） */
    salesNum?: number;
    /** 商品编码（唯一） */
    skuId?: string;
    /** 商品规格 */
    skuModel?: string;
    /** 商品名称 */
    skuName?: string;
    /** 可用库存 */
    stock?: number;
    /** 净含税金额 */
    taxAmt?: number;
    /** 税率 */
    taxRate?: number;
  };

  type WareSalesReportVOPageQuery = {
    /** 商品条码 */
    barcode?: string;
    /** 单据编号 */
    billId?: string;
    /** 单据类型（1 销售出库 2销退入库） */
    billType?: number;
    /** 客户编码 */
    cusId?: string;
    /** 客户名称 */
    cusName?: string;
    /** 商品关键字 */
    keyword?: string;
    /** 生产厂家 */
    manufacturer?: string;
    /** 统计时间-结束 */
    maxDate?: string;
    /** 统计时间-开始 */
    minDate?: string;
    pageQuery?: PageQuery;
    /** 商品编码 */
    skuId?: string;
    /** 商品名称 */
    skuName?: string;
  };

  type WareStockSalesReportVO = {
    /** 含税金额 */
    amt?: number;
    /** 单据编号 */
    billId?: string;
    /** 单据类型 */
    billType?: string;
    /** 成本金额 */
    costAmt?: number;
    /** 成本单价 */
    costPrice?: number;
    /** 不含税金额 */
    noTaxAmt?: number;
    /** 不含税单价 */
    noTaxPrice?: number;
    /** 售价 */
    price?: number;
    /** 销售数量 */
    realityQty?: number;
    /** 商品编码 */
    skuId?: string;
    /** 单据时间 */
    statisticTime?: string;
    /** 税额 */
    taxAmount?: number;
  };

  type PaginationBalanceLogMSVO_ = {
    current?: number;
    records?: BalanceLogMSVO[];
    size?: number;
    total?: number;
  };

  type PaginationBalanceLogVO_ = {
    current?: number;
    records?: BalanceLogVO[];
    size?: number;
    total?: number;
  };

  type PaginationBillVO_ = {
    current?: number;
    records?: BillVO[];
    size?: number;
    total?: number;
  };

  type PaginationCusAccountReceivableBalanceViewVO_ = {
    current?: number;
    records?: CusAccountReceivableBalanceViewVO[];
    size?: number;
    total?: number;
  };

  type PaginationCustomerLogVO_ = {
    current?: number;
    records?: CustomerLogVO[];
    size?: number;
    total?: number;
  };

  type PaginationCustomerSalesDetailVO_ = {
    current?: number;
    records?: CustomerSalesDetailVO[];
    size?: number;
    total?: number;
  };

  type PaginationCustomerSalesReportVO_ = {
    current?: number;
    records?: CustomerSalesReportVO[];
    size?: number;
    total?: number;
  };

  type PaginationFuturePurchaseVO_ = {
    current?: number;
    records?: FuturePurchaseVO[];
    size?: number;
    total?: number;
  };

  type PaginationFutureReturnVO_ = {
    current?: number;
    records?: FutureReturnVO[];
    size?: number;
    total?: number;
  };

  type PaginationIncomeCostDetailVO_ = {
    current?: number;
    records?: IncomeCostDetailVO[];
    size?: number;
    total?: number;
  };

  type PaginationIncomeCostMSVO_ = {
    current?: number;
    records?: IncomeCostMSVO[];
    size?: number;
    total?: number;
  };

  type PaginationIncomeCostVO_ = {
    current?: number;
    records?: IncomeCostVO[];
    size?: number;
    total?: number;
  };

  type PaginationListCustomerDocumentVO_ = {
    current?: number;
    records?: ListCustomerDocumentVO[];
    size?: number;
    total?: number;
  };

  type PaginationListCustomerVO_ = {
    current?: number;
    records?: ListCustomerVO[];
    size?: number;
    total?: number;
  };

  type PaginationListSaleReturnServiceVO_ = {
    current?: number;
    records?: ListSaleReturnServiceVO[];
    size?: number;
    total?: number;
  };

  type PaginationNoInvoiceMSVO_ = {
    current?: number;
    records?: NoInvoiceMSVO[];
    size?: number;
    total?: number;
  };

  type PaginationNoInvoiceVO_ = {
    current?: number;
    records?: NoInvoiceVO[];
    size?: number;
    total?: number;
  };

  type PaginationOrderTraceVO_ = {
    current?: number;
    records?: OrderTraceVO[];
    size?: number;
    total?: number;
  };

  type PaginationOrderVO_ = {
    current?: number;
    records?: OrderVO[];
    size?: number;
    total?: number;
  };

  type PaginationOriginBillDetailVO_ = {
    current?: number;
    records?: OriginBillDetailVO[];
    size?: number;
    total?: number;
  };

  type PaginationOriginBillVO_ = {
    current?: number;
    records?: OriginBillVO[];
    size?: number;
    total?: number;
  };

  type PaginationReceivableBalanceMonthVO_ = {
    current?: number;
    records?: ReceivableBalanceMonthVO[];
    size?: number;
    total?: number;
  };

  type PaginationRefundAppVO_ = {
    current?: number;
    records?: RefundAppVO[];
    size?: number;
    total?: number;
  };

  type PaginationSaleInvoiceAppVO_ = {
    current?: number;
    records?: SaleInvoiceAppVO[];
    size?: number;
    total?: number;
  };

  type PaginationSaleInvoiceVO_ = {
    current?: number;
    records?: SaleInvoiceVO[];
    size?: number;
    total?: number;
  };

  type PaginationSaleInvoiceWareVO_ = {
    current?: number;
    records?: SaleInvoiceWareVO[];
    size?: number;
    total?: number;
  };

  type PaginationSalePriceAdjAppVO_ = {
    current?: number;
    records?: SalePriceAdjAppVO[];
    size?: number;
    total?: number;
  };

  type PaginationSaleReturnWareVO_ = {
    current?: number;
    records?: SaleReturnWareVO[];
    size?: number;
    total?: number;
  };

  type PaginationSaleSettlementAppDetailVO_ = {
    current?: number;
    records?: SaleSettlementAppDetailVO[];
    size?: number;
    total?: number;
  };

  type PaginationSaleSettlementAppVO_ = {
    current?: number;
    records?: SaleSettlementAppVO[];
    size?: number;
    total?: number;
  };

  type PaginationSalesContractOrderWareVO_ = {
    current?: number;
    records?: SalesContractOrderWareVO[];
    size?: number;
    total?: number;
  };

  type PaginationSalesContractVO_ = {
    current?: number;
    records?: SalesContractVO[];
    size?: number;
    total?: number;
  };

  type PaginationStockBatchNoVO_ = {
    current?: number;
    records?: StockBatchNoVO[];
    size?: number;
    total?: number;
  };

  type PaginationStockChangeBillVO_ = {
    current?: number;
    records?: StockChangeBillVO[];
    size?: number;
    total?: number;
  };

  type PaginationStockWareVO_ = {
    current?: number;
    records?: StockWareVO[];
    size?: number;
    total?: number;
  };

  type PaginationWareMedicalEquipmentSalesReportVO_ = {
    current?: number;
    records?: WareMedicalEquipmentSalesReportVO[];
    size?: number;
    total?: number;
  };

  type PaginationWarePriceDetailVO_ = {
    current?: number;
    records?: WarePriceDetailVO[];
    size?: number;
    total?: number;
  };

  type PaginationWarePriceLogVO_ = {
    current?: number;
    records?: WarePriceLogVO[];
    size?: number;
    total?: number;
  };

  type PaginationWarePriceVO_ = {
    current?: number;
    records?: WarePriceVO[];
    size?: number;
    total?: number;
  };

  type PaginationWareSalesDetailVO_ = {
    current?: number;
    records?: WareSalesDetailVO[];
    size?: number;
    total?: number;
  };

  type PaginationWareSalesReportVO_ = {
    current?: number;
    records?: WareSalesReportVO[];
    size?: number;
    total?: number;
  };

  type PaginationWareStockSalesReportVO_ = {
    current?: number;
    records?: WareStockSalesReportVO[];
    size?: number;
    total?: number;
  };
}
