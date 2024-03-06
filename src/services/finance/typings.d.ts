// @ts-ignore
/* eslint-disable */

declare namespace FINANCE {
  type AwaitWriteOffRefundMonthlySettleDetailPageQueryVO = {
    /**  单位编码  */
    businessId?: string;
    /**  单位名称  */
    businessName?: string;
    /**  单位类型  */
    businessType?: number;
    pageQuery?: PageQuery;
    /**  来源单据编号  */
    relatedId?: string;
    /**  月结主表ID  */
    settleId?: string;
    /**  结账月份  */
    settleMonth: string;
    /**  纳税人识别号  */
    taxPayerCode?: string;
  };

  type AwaitWriteOffRefundMonthlySettleDetailVO = {
    /**  期末金额  */
    afterAmt?: number;
    /**  金额  */
    amt?: number;
    /**  期初金额  */
    beforeAmt?: number;
    /**  单位编码  */
    businessId?: string;
    /**  单位名称  */
    businessName?: string;
    /**  单位类型 */
    businessTypeName?: string;
    /**  来源单据日期时间  */
    originalBillTime?: string;
    /**  供应商退款金额  */
    poRecvReceiptAmt?: number;
    /**  退款核销收款  */
    recvWriteOffAmt?: number;
    /**  退款抵扣余额  */
    refundWriteOffAmt?: number;
    /**  来源单据编号  */
    relatedId?: string;
    /**  报表单据类型 0-期初金额 1-收款单（供应商金额）2-退款核销单（退款抵扣余额）3-退款核销单（退款核销应收）4-期末金额  */
    reportBillType?: number;
    /**  月结主表ID  */
    settleId?: string;
    /**  结账月份  */
    settleMonth?: string;
    /**  纳税人识别号  */
    taxPayerCode?: string;
  };

  type BillCheckHandleVO = {
    /** 单据编码 */
    billId: string;
    /** 审核备注 */
    remark?: string;
    /** 审核结果（0：审核不通过；1：审核通过） */
    resultCode: number;
  };

  type CostAppCreateVO = {
    /** 单据类型  1.入库成本调整单、2.出库成本调整单、3.销售成本调整单 */
    billType?: number;
    /** 明细信息 */
    detail?: CostAppDetailCreateVO[];
    /** 原单据类型： 10.-采购发票勾稽 11.采购调价单 20.采购发票勾稽  21.采购调价单 30.采购调价单 */
    docType?: number;
    /** 调整金额 */
    fixAmount?: number;
    /** 调整原因 */
    fixCause?: string;
    /** 原单据号 */
    sourceDocId?: string;
    /** 状态 未提审、已提审、已取消、审核中、审核通过 */
    status?: number;
    /** 供应商 */
    supplier?: string;
    /** 供应商id */
    supplierId?: string;
  };

  type CostAppDetailCreateVO = {
    /** 价税合计金额 */
    amount?: number;
    /** 入库成本调整单id */
    costAppId?: string;
    /** id */
    id?: string;
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
    /** 原单号类型 1.采购入库单 2.采购出库单 */
    orderType?: number;
    /** 原单号 */
    originalOrderId?: string;
    /** 税额 */
    payTaxAmt?: number;
    /** 调整后税额 */
    payTaxAmtFix?: number;
    /** 单价 */
    price?: number;
    /** 批号 */
    produceCode?: string;
    /** 原单据数量 */
    qty?: number;
    /** 商品id */
    skuId?: string;
    /** 规格 */
    skuModel?: string;
    /** 商品名称 */
    skuName?: string;
    /** 单个商品税额 */
    taxPrice?: number;
    /** 调整后含税单价 */
    taxPriceFix?: number;
    /** 税率 */
    taxRate?: number;
    /** 单位 */
    unitCode?: string;
  };

  type CostAppDetailInfoVO = {
    /** 价税合计金额 */
    amount?: number;
    /** 入库成本调整单id */
    costAppId?: string;
    /** 创建时间 */
    createTime?: string;
    /** 原单据类型： 10.-采购发票勾稽 11.采购调价单 20.采购发票勾稽  21.采购调价单 30.采购调价单 */
    docType?: string;
    /** id */
    id?: string;
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
    /** 原单号 */
    originalOrderId?: string;
    /** 税额 */
    payTaxAmt?: number;
    /** 调整后税额 */
    payTaxAmtFix?: number;
    /** 单价 */
    price?: number;
    /** 批号 */
    produceCode?: string;
    /** 原单据数量 */
    qty?: number;
    /** 商品id */
    skuId?: string;
    /** 规格 */
    skuModel?: string;
    /** 商品名称 */
    skuName?: string;
    /** 原单号类型 1.采购入库单 2.采购出库单 */
    source_doc_id?: number;
    /** 单个商品税额 */
    taxPrice?: number;
    /** 调整后含税单价 */
    taxPriceFix?: number;
    /** 税率 */
    taxRate?: number;
    /** 单位 */
    unitCode?: string;
  };

  type CostAppInfoVO = {
    /** 单据类型  1.入库成本调整单、2.出库成本调整单、3.销售成本调整单 */
    billType?: number;
    /** 单据类型  1.入库成本调整单、2.出库成本调整单、3.销售成本调整单名称 */
    billTypeName?: string;
    /** 创建时间 */
    createTime?: string;
    /** 创建人 */
    creater?: string;
    /** 创建人id */
    createrId?: string;
    /** 明细信息 */
    detail?: CostAppDetailInfoVO[];
    /** 原单据类型： 10.-采购发票勾稽 11.采购调价单 20.采购发票勾稽  21.采购调价单 30.采购调价单 */
    docType?: number;
    /** 原单据类型： 10.-采购发票勾稽 11.采购调价单 20.采购发票勾稽  21.采购调价单 30.采购调价单名称 */
    docTypeName?: string;
    /** 调整金额 */
    fixAmount?: number;
    /** 调整原因 */
    fixCause?: string;
    /** id */
    id?: string;
    /** 日志 */
    log?: TraceLogVO[];
    /** 最后操作人 */
    operator?: string;
    /** 最后操作人id */
    operatorId?: string;
    /** 原单据号 */
    sourceDocId?: string;
    /** 状态 未提审、已提审、已取消、审核中、审核通过 */
    status?: number;
    /** 状态 未提审、已提审、已取消、审核中、审核通过名称 */
    statusName?: string;
    /** 供应商 */
    supplier?: string;
    /** 供应商id */
    supplierId?: string;
  };

  type CostAppPageQueryVO = {
    /**  单据类型  1.入库成本调整单、2.出库成本调整单、3.销售成本调整单  */
    billType?: number;
    /** 创建人 */
    creater?: string;
    /** 创建人id */
    createrId?: string;
    /**  原单据类型： 10.采购发票勾稽 11.采购调价单 20.采购发票勾稽  21.采购调价单 30.采购调价单  */
    docType?: number;
    /**  id  */
    id?: string;
    /** 结束时间 */
    maxCreateTime?: string;
    /** 开始时间 */
    minCreateTime?: string;
    pageQuery?: PageQuery;
    /**  原单据号  */
    sourceDocId?: string;
    /**  状态 未提审、已提审、已取消、审核中、审核通过  */
    status?: number;
    /**  供应商  */
    supplier?: string;
    /**  供应商id  */
    supplierId?: string;
  };

  type CostAppUpdateVO = {
    /** 单据类型  1.入库成本调整单、2.出库成本调整单、3.销售成本调整单 */
    billType?: number;
    /** 明细信息 */
    detail?: CostAppDetailCreateVO[];
    /** 原单据类型： 10.-采购发票勾稽 11.采购调价单 20.采购发票勾稽  21.采购调价单 30.采购调价单 */
    docType?: number;
    /** 调整金额 */
    fixAmount?: number;
    /** 调整原因 */
    fixCause?: string;
    /** id */
    id: string;
    /** 原单据号 */
    sourceDocId?: string;
    /** 状态 未提审、已提审、已取消、审核中、审核通过 */
    status?: number;
    /** 供应商 */
    supplier?: string;
    /** 供应商id */
    supplierId?: string;
  };

  type CostAppVO = {
    /**  单据类型  1.入库成本调整单、2.出库成本调整单、3.销售成本调整单  */
    billType?: number;
    /**  创建时间  */
    createTime?: string;
    /**  创建人  */
    creater?: string;
    /**  创建人id  */
    createrId?: string;
    /**  原单据类型： 10.-采购发票勾稽 11.采购调价单 20.采购发票勾稽  21.采购调价单 30.采购调价单  */
    docType?: number;
    /**  调整金额  */
    fixAmount?: number;
    /**  调整原因  */
    fixCause?: string;
    /**  id  */
    id?: string;
    /**  最后操作人  */
    operator?: string;
    /**  最后操作人id  */
    operatorId?: string;
    /**  原单据号  */
    sourceDocId?: string;
    /**  状态 未提审、已提审、已取消、审核中、审核通过  */
    status?: number;
    /**  供应商  */
    supplier?: string;
    /**  供应商id  */
    supplierId?: string;
    /**  租户id  */
    tenantId?: string;
    /**  最后更新时间  */
    updateTime?: string;
  };

  type ImportResultVO = {
    /** 失败导入数量 */
    fail?: number;
    /** 失败文档下载路径 */
    failExcelPath?: string;
    /** 成功导入数量 */
    success?: number;
  };

  type ListRecvReceiptVO = {
    /** 业务类型 1-采购业务 2-批发业务 */
    businessType?: number;
    /** 业务类型名称 */
    businessTypeName?: string;
    /** 创建人 */
    creater?: string;
    /** 创建人编码 */
    createrId?: string;
    /** 截止收款日期 */
    endReceiptTime?: string;
    /**  单据编号  */
    id?: string;
    /** 是否显示取消按钮 true:显示 false:不显示 */
    ifShowCancelButton?: boolean;
    /** 单位名称 */
    payer?: string;
    /** 单位编码  */
    payerId?: string;
    /** 纳税人识别号  */
    payerTaxNo?: string;
    /**  单位类型 1-供应商 2-批发客户  */
    payerType?: number;
    /**  收款金额  */
    receiptAmt?: number;
    /** 收款日期 */
    receiptTime?: string;
    /** 起始收款日期 */
    staReceiptTime?: string;
    /** 单据状态:0-未审核 1-已审核 2-已取消 */
    status?: number;
    /** 核销状态: 0-未核销 1-部分核销 2-全部核销 */
    writeoffStatus?: number;
  };

  type NoWriteOffRecvReceiptVO = {
    /**  冻结金额  */
    frozenAmt?: number;
    /**  收款单编号  */
    id?: string;
    /**  待核销金额/未核销金额  */
    noWriteoffAmt?: number;
    /**  付款人编码  */
    payerId?: string;
    /**  收款金额(大于0)  */
    receiptAmt?: number;
    /**  收款开户行  */
    receiptBank?: string;
    /**  收款开户账号  */
    receiptBankAccountNo?: string;
    /**  收款账户公司名  */
    receiptCompanyName?: string;
    /**  收款账户ID  */
    receiptId?: string;
    /**  收款日期  */
    receiptTime?: string;
    /**   已核销金额/已经抵扣金额  */
    writeoffAmt?: number;
  };

  type OptionalRecvReceiptItemVO = {
    /** 创建时间 */
    createTime?: string;
    /** 冻结金额 */
    frozenAmt?: number;
    /** 收款单号 */
    id?: string;
    /** 是否选中 */
    isSelect?: boolean;
    /** 待核销金额 */
    noWriteoffAmt?: number;
    /** 收款日期 */
    receiptTime?: string;
    /** 总金额 */
    totalAmt?: number;
    /** 本次核销金额 */
    willWriteoffAmt?: number;
    /** 已核销金额 */
    writeoffAmt?: number;
  };

  type OptionalRecvReceiptVO = {
    /**  未核销 收款单  */
    items?: OptionalRecvReceiptItemVO[];
    /** 被占用的收款单ID */
    occupiedIds?: string[];
  };

  type OptionalRecvReceivableOrPayableItemVO = {
    /** 创建时间 */
    createTime?: string;
    /** 冻结金额 */
    frozenAmt?: number;
    /** 单据编号 */
    id?: string;
    /** 是否选中 */
    isSelect?: boolean;
    /** 待核销金额 */
    noWriteoffAmt?: number;
    /** 单据来源字典配置:polarbear_finance_receivable_type */
    source?: string;
    /** 来源单号 */
    sourceBizId?: string;
    /** 单据来源名称 */
    sourceName?: string;
    /** 总金额 */
    totalAmt?: number;
    /** 单据类型：应付单 0 应收单 1 */
    type?: number;
    /** 单据类型名称 */
    typeName?: string;
    /** 本次核销金额 */
    willWriteoffAmt?: number;
    /** 已核销金额 */
    writeoffAmt?: number;
  };

  type OptionalRecvReceivableOrPayableVO = {
    /**  未核销 应收/应付单  */
    items?: OptionalRecvReceivableOrPayableItemVO[];
    /** 被占用的应收/应付单ID */
    occupiedIds?: string[];
  };

  type OrderItem = {
    asc?: boolean;
    column?: string;
  };

  type PageQuery = {
    current?: number;
    orders?: OrderItem[];
    size?: number;
  };

  type PartnerDetailVO = {
    /**  详细地址  */
    address?: string;
    /**  本次结余金额  */
    balanceAmt?: number;
    /**  市  */
    city?: string;
    /**  市编号  */
    cityId?: string;
    /**  创建时间  */
    createTime?: string;
    /**  本次贷方金额  */
    creditAmt?: number;
    /**  原始客户id  */
    cusId?: string;
    /**  本次借方金额  */
    debitAmt?: number;
    /**  区/县  */
    district?: string;
    /**  区编号  */
    districtId?: string;
    /**  单位编码  */
    id?: string;
    /**  单位名称  */
    partnerName?: string;
    /**  单位类型  字典：polarbear_finance_partner_type  */
    partnerType?: number;
    /** 单位类型名称 */
    partnerTypeName?: string;
    /**  省  */
    province?: string;
    /**  省编号  */
    provinceId?: string;
    /**  原始供应商id  */
    supplierId?: string;
    /**  纳税人识别号  */
    taxPayerCode?: string;
  };

  type PartnerPageQueryVO = {
    /**  单位编码  */
    id?: string;
    /**  创建时间-结束 */
    maxCreateTime?: string;
    /**  创建时间-开始  */
    minCreateTime?: string;
    pageQuery?: PageQuery;
    /**  单位名称  */
    partnerName?: string;
    /**  单位类型  字典：polarbear_finance_partner_type  */
    partnerType?: number[];
    /**  纳税人识别号  */
    taxPayerCode?: string;
  };

  type PartnerVO = {
    /**  详细地址  */
    address?: string;
    /**  市  */
    city?: string;
    /**  市编号  */
    cityId?: string;
    /**  创建时间  */
    createTime?: string;
    /**  原始客户id  */
    cusId?: string;
    /**  区/县  */
    district?: string;
    /**  区编号  */
    districtId?: string;
    /**  单位编码  */
    id?: string;
    /**  单位名称  */
    partnerName?: string;
    /**  单位类型  字典：polarbear_finance_partner_type  */
    partnerType?: number;
    /** 单位类型名称 */
    partnerTypeName?: string;
    /**  省  */
    province?: string;
    /**  省编号  */
    provinceId?: string;
    /**  原始供应商id  */
    supplierId?: string;
    /**  纳税人识别号  */
    taxPayerCode?: string;
  };

  type PayablePageQueryVO = {
    /**  结算账户号码  */
    accountCode?: string;
    /**  结算账户名  */
    accountName?: string;
    /**  客户/供应商编码 */
    businessId?: string;
    /**  单位名称  */
    businessName?: string;
    /**  单位类型 字典： polarbear_finance_partner_type */
    businessType?: number;
    /**  创建时间结束  */
    createTimeEnd?: string;
    /**  创建时间开始  */
    createTimeSta?: string;
    /** 创建人 */
    creater?: string;
    /** 单据编号 */
    id?: string;
    /**  联系人名称  */
    linkman?: string;
    /**  联系人id  */
    linkmanId?: string;
    /**  联系人电话  */
    linkmanPhone?: string;
    pageQuery?: PageQuery;
    /**  付款核销提审状态 0-未提审 1-已提审 2-已审核 */
    payStatusList?: number[];
    /**  付款方式：1-电汇 2-现金  */
    payType?: number;
    /**  单位编码/纳税识别号  */
    payeeTaxNo?: string;
    /**  采购单号  */
    poNo?: string;
    /**  来源单据号  */
    sourceId?: string;
    /**  来源类型 1-采购结算 2-采购预付 3-销售返利 4-销售预收退回 5-销退红冲退款  */
    sourceType?: number;
    /**   核销状态 0-未核销 1-全部核销  */
    writeOffStatus?: number;
  };

  type PayableVO = {
    /**  结算开户银行  */
    accountBank?: string;
    /**  结算账户号码  */
    accountCode?: string;
    /**  结算账户名  */
    accountName?: string;
    /**  客户编码或供应商编码  */
    businessId?: string;
    /**  单位名称  */
    businessName?: string;
    /**  单位类型 字典： polarbear_finance_partner_type */
    businessType?: number;
    /**  采购合同编码  */
    contractCode?: string;
    /**  采购合同主键Id  */
    contractId?: string;
    /**  采购合同名称  */
    contractName?: string;
    /**  创建时间  */
    createTime?: string;
    /**  主键id  */
    id?: string;
    /**  联系人名称  */
    linkman?: string;
    /**  联系人id  */
    linkmanId?: string;
    /**  联系人电话  */
    linkmanPhone?: string;
    /** 本次实际结算金额(应付金额) */
    payAmount?: number;
    /**  付款核销提审状态 0-未提审 1-已提审 2-已审核 */
    payStatus?: number;
    /**  付款方式：1-电汇 2-现金  */
    payType?: number;
    /**  纳税识别号  */
    payeeTaxNo?: string;
    /**  预付款抵扣金额  */
    paymentDeductionAmt?: number;
    /**  采购单号  */
    poNo?: string;
    /**  采购订单总金额  */
    poTotalAmt?: number;
    /**  预付金额  */
    prepayAmt?: number;
    /**  预付比列  */
    prepayRatio?: number;
    /**  预付方式 1-比列预付 2-绝对值预付  */
    prepayWay?: number;
    /**  剩余预付金额 */
    remPrepayAmt?: number;
    /**  备注  */
    remark?: string;
    /**  业务员(创建人)id  */
    salesmanId?: string;
    /**  业务员(创建人)名称  */
    salesmanName?: string;
    /**  结算合计金额 */
    settleTotalAmount?: number;
    /**  来源单据号  */
    sourceId?: string;
    /** 来源类型 1-采购结算 2-采购预付 3-销售返利 4-销售预收退回 5-销退红冲退款 6-批发额外退款 */
    sourceType?: number;
    /**  预付款可用金额  */
    surplusAmount?: number;
    /**  租户id  */
    tenantId?: string;
    /**  修改时间  */
    updateTime?: string;
    /**  已经核销金额  */
    writeOffAmt?: number;
    /**  核销状态 /0未核销/1核销中/2部分核销/3已核销 */
    writeOffStatus?: number;
  };

  type PaymentCreateVO = {
    /** 应付单ID列表 */
    payableIds?: string[];
    /** 单位编码 */
    payeeTaxNo?: string;
    /** 应收ID列表 */
    recvIds?: string[];
    /** 备注 */
    remark?: string;
  };

  type PaymentDetailVO = {
    /** 结算开户银行 */
    accountBank?: string;
    /** 结算账户 */
    accountCode?: string;
    /** 结算账户名 */
    accountName?: string;
    /**  应收为负数  */
    amt?: number;
    /**  关联的应付款单ID/应收款单ID,支持应收应付相抵，相抵后应付款>=0  */
    bizId?: string;
    /**  关联的应收应付类型,单据类型： 0应付款单/1应收款单  */
    bizType?: number;
    /** 联系人ID */
    contactId?: string;
    /** 联系人名称 */
    contactName?: string;
    /** 联系人电话 */
    contactPhone?: string;
    /**  创建时间  */
    createTime?: string;
    /**  抵扣金额  */
    discountAmt?: number;
    /**  主键  */
    id?: string;
    /**  0-未提审 1-已提审 2-已审核  */
    payStatus?: number;
    /**  付款单ID  */
    paymentId?: string;
    /**  业务员(创建人)id  */
    salesmanId?: string;
    /**  业务员(创建人)名称  */
    salesmanName?: string;
    /**  来源ID  */
    sourceId?: string;
    /**  来源类型 1-采购结算 2-采购预付 3-销售返利 4-销售预收退回 5-销退红冲退款  */
    sourceType?: number;
    /**  租户ID  */
    tenantId?: string;
    /**  最后更新时间  */
    updateTime?: string;
  };

  type PaymentFlowCreateParamVO = {
    /**  付款金额  */
    amount: number;
    /**  付款凭证  */
    docPath?: string;
    /**  流水号  */
    number?: string;
    /**  付款日期  */
    payDate: string;
    /** 付款方式 1-银行转账 2-银行承兑汇票 */
    payWay: number;
    /** 付款开户银行 */
    paymentAccountBank: string;
    /** 付款账户号码 */
    paymentAccountCode: string;
    /** 付款账户ID */
    paymentAccountId: string;
    /** 付款账户名 */
    paymentAccountName: string;
    /**  备注  */
    remark?: string;
  };

  type PaymentFlowCreateVO = {
    /**  付款记录  */
    docList: PaymentFlowCreateParamVO[];
    /**  付款核销ID  */
    paymentId: string;
  };

  type PaymentFlowInfoVO = {
    /**  结算开户银行  */
    accountBank?: string;
    /**  结算账户  */
    accountCode?: string;
    /**  结算账户名  */
    accountName?: string;
    /**  应付金额  */
    amt?: number;
    /**  付款详情  */
    doc?: PaymentFlowVO[];
    /**  付款核销ID  */
    paymentVerifyId?: string;
  };

  type PaymentFlowVO = {
    /**  付款金额  */
    amount?: number;
    /**  创建时间  */
    createTime?: string;
    /**  发票图片地址  */
    docPath?: string;
    /**  文档格式  */
    docType?: string;
    /**  id  */
    id?: string;
    /**  流水号  */
    number?: string;
    /**  付款日期  */
    payDate?: string;
    /** 付款方式 1-银行转账 2-银行承兑汇票 */
    payWay?: number;
    /**  付款开户银行  */
    paymentAccountBank?: string;
    /**  付款账户号码  */
    paymentAccountCode?: string;
    /**  付款账户ID  */
    paymentAccountId?: string;
    /**  付款账户名  */
    paymentAccountName?: string;
    /**  付款核销ID  */
    paymentId?: string;
    /**  备注  */
    remark?: string;
  };

  type PaymentInfoVO = {
    /** 单位编码 */
    businessId?: string;
    /** 单位名称 */
    businessName?: string;
    /** 单位类型 1-供应商 2-批发客户 3-供应商/批发客户 */
    businessType?: number;
    /** 创建时间 */
    createTime?: string;
    /** 创建人 */
    creater?: string;
    /** 创建人ID */
    createrId?: string;
    /** 单据明细 */
    detail?: PaymentDetailVO[];
    /**  应付抵扣金额  */
    discountAmt?: number;
    /** 付款明细 */
    doc?: PaymentFlowVO[];
    /** 单据编号 */
    id?: string;
    /** 日志 */
    log?: TraceLogVO[];
    /**  单位ID  */
    partnerId?: string;
    /** 付款方式 1-银行转账 2-银行承兑汇票 */
    payWay?: number;
    /** 应付款总金额 */
    payableAmt?: number;
    /**  收款人纳税识别号  */
    payeeTaxNo?: string;
    /**  付款开户银行  */
    paymentAccountBank?: string;
    /**  付款账户号码  */
    paymentAccountCode?: string;
    /**  付款账户ID  */
    paymentAccountId?: string;
    /**  付款账户名  */
    paymentAccountName?: string;
    /** 实付款总金额 */
    paymentAmt?: number;
    /** 应收单明细 */
    paymentRecvUsedDetailList?: PaymentRecvUsedDetailVO[];
    /** 备注 */
    remark?: string;
    /** 单据状态 /0制单/1已审核(待付款)/2已取消/3已付款 */
    status?: number;
    /** 核销状态 0-未核销 1-部分核销 2-已核销 */
    writeOffStatus?: number;
  };

  type PaymentPageQueryVO = {
    /**  创建人  */
    creater?: string;
    /**  创建人ID  */
    createrId?: string;
    /**  单据编号  */
    id?: string;
    /** 结束时间 */
    maxCreateTime?: string;
    /** 开始时间 */
    minCreateTime?: string;
    pageQuery?: PageQuery;
    /** 付款方式 1-银行转账 2-银行承兑汇票 */
    payWay?: number;
    /**  应付单号  */
    payableId?: string;
    /**  单位编码  */
    payeeTaxNo?: string;
    /**  单据状态 ：/0制单/1已审核(待付款)/2已取消/3已付款  */
    status?: number;
    /**  应付款核销状态 /0未核销/1核销中/2部分核销/3已核销  */
    writeOffStatus?: number;
  };

  type PaymentRecvUsedDetailVO = {
    /** 使用金额 */
    amt?: number;
    /** 应收单ID */
    receivableId?: string;
  };

  type PaymentUpdateVO = {
    /** id */
    id: string;
    /** 应付单ID列表 */
    payableIds?: string[];
    /** 单位编码 */
    payeeTaxNo?: string;
    /** 应收ID列表 */
    recvIds?: string[];
    /** 备注 */
    remark?: string;
  };

  type PaymentVO = {
    /**  结算开户银行  */
    accountBank?: string;
    /**  结算账户  */
    accountCode?: string;
    /**  结算账户名  */
    accountName?: string;
    /**  单位编码  */
    businessId?: string;
    /**  单位名称  */
    businessName?: string;
    /**  单位类型 1-供应商 2-批发客户  */
    businessType?: number;
    /**  创建时间  */
    createTime?: string;
    /**  创建人  */
    creater?: string;
    /**  创建人ID  */
    createrId?: string;
    /**  应付抵扣金额  */
    discountAmt?: number;
    /**  单据编号  */
    id?: string;
    /**  付款日期  */
    payDate?: string;
    /** 付款方式 1-银行转账 2-银行承兑汇票 */
    payWay?: number;
    /**  应付款总金额 大于等于0  */
    payableAmt?: number;
    /**  应付单ID  */
    payableId?: string;
    /**  收款人纳税识别号  */
    payeeTaxNo?: string;
    /**  实付款总金额 大于等于0  */
    paymentAmt?: number;
    /**  备注  */
    remark?: string;
    /**  单据状态 ：/0制单/1已审核(待付款)/2已取消/3已付款  */
    status?: number;
    /**  单据类型 1-付款核销  */
    type?: number;
    /**  修改时间  */
    updateTime?: string;
    /**  应付款核销状态 /0未核销/1核销中/2部分核销/3已核销  */
    writeOffStatus?: number;
  };

  type RecvReceiptLogVO = {
    /**  收款单编码  */
    billId?: string;
    /**  创建时间  */
    createTime?: string;
    /**  操作人  */
    creater?: string;
    /**  操作人编码  */
    createrId?: string;
    /**  主键编码  */
    id?: string;
    /**  操作描述  */
    operateDesc?: string;
    /**  操作类型  */
    operateType?: string;
    /**  更新时间  */
    updateTime?: string;
  };

  type RecvReceiptVO = {
    /** 业务类型 1-采购业务 2-批发业务 */
    businessType?: number;
    /** 业务类型名称 */
    businessTypeName?: string;
    /**  单据编号  */
    id?: string;
    /** 是否显示取消按钮 true:显示 false:不显示 */
    ifShowCancelButton?: boolean;
    /** 单位名称 */
    payer?: string;
    /**  单位编码  */
    payerId?: string;
    /**  付款人-纳税人识别号  */
    payerTaxNo?: string;
    /**  单位类型 1-供应商 2-批发客户  */
    payerType?: number;
    /** 收款金额 */
    receiptAmt?: number;
    /**  收款开户行  */
    receiptBank?: string;
    /**  收款开户账号  */
    receiptBankAccountNo?: string;
    /** 收款账户公司名 */
    receiptCompanyName?: string;
    /** 凭证图片 */
    receiptEvidence?: string[];
    /** 收款账户ID */
    receiptId?: string;
    /**  付款凭证号/流水号  */
    receiptNumber?: string;
    /**  收款日期  */
    receiptTime?: string;
    /**  收款方式 字典配置：polarbear_finance_pay_type */
    receiptType?: number;
    /**  备注  */
    remark?: string;
    /**  单据状态:0-未审核 1-已审核 2-已取消  */
    status?: number;
    /** 已核销金额 */
    writeoffAmt?: number;
    /** 核销状态: 0-未核销 1-部分核销 2-全部核销 */
    writeoffStatus?: number;
  };

  type RecvReceiptVOPageQuery = {
    /** 业务类型 1-采购业务 2-批发业务 */
    businessType?: number;
    /** 创建人 */
    creater?: string;
    /** 单据编号 */
    id?: string;
    /** 收款日期-结束 */
    maxReceiptTime?: string;
    /** 收款日期-开始 */
    minReceiptTime?: string;
    pageQuery?: PageQuery;
    /** 单位编码 */
    payerId?: string;
    /** 单位类型 1-供应商 2-批发客户 */
    payerType?: number;
    /** 单据状态:0-未审核 1-已审核 2-已取消 */
    status?: number;
    /** 核销状态: 0-未核销 1-部分核销 2-全部核销 */
    writeoffStatus?: number;
  };

  type RecvReceivablePageQueryVO = {
    /**  联系人姓名  */
    contactPerson?: string;
    /**  联系人电话  */
    contactPhone?: string;
    /** 创建人 */
    creater?: string;
    /**  单据编号  */
    id?: string;
    /** 创建日期-开始 */
    maxCreateTime?: string;
    /**  创建日期-开始 */
    minCreateTime?: string;
    pageQuery?: PageQuery;
    /**  单位编码  */
    payerId?: string;
    /**  单据来源:1-销售结算 2-销售预收 3-采购返利 4-采购预付退款 5-采购红冲退款  */
    source?: string;
    /**  来源单号  */
    sourceBizId?: string;
    /**  核销状态:0-未核销 1-部分核销 2-全部核销 */
    writeoffStatus?: number;
  };

  type RecvReceivableVO = {
    /**  联系人  */
    contactPerson?: string;
    /**  联系人电话  */
    contactPhone?: string;
    /**  制单时间/创建时间  */
    createTime?: string;
    /** 制单人/业务员/创建人 */
    creater?: string;
    /**  单据编号  */
    id?: string;
    /**  是否被收款核销单占用:0:未占用 1-占用  */
    isLocked?: number;
    /**  当前锁定该单的核销单Id(付款单或者收款核销单)  */
    lockedBizId?: string;
    /**  对方付款人名称(单位名称)  */
    payer?: string;
    /**  付款人编码  */
    payerId?: string;
    /**  付款人纳税识别号  */
    payerTaxNo?: string;
    /**  付款人类型:字典polarbear_finance_partner_type  */
    payerType?: number;
    /**  付款人类型名称 */
    payerTypeName?: string;
    /**  应收款总金额  */
    receivableAmt?: number;
    /**  备注  */
    remark?: string;
    /**  应收款类型 字典配置:polarbear_finance_receivable_type  */
    source?: string;
    /**  原始单据id  */
    sourceBizId?: string;
    /**  已核销金额  */
    writeoffAmt?: number;
    /**  收款核销状态:0-未核销 1-部分核销 2-全部核销  */
    writeoffStatus?: number;
  };

  type RecvWriteoffContentVO = {
    /**  收款核销编号  */
    id?: string;
    /**  本次核销已选应收单 */
    leftItems?: OptionalRecvReceivableOrPayableItemVO[];
    /** 左侧本次核销金额 */
    leftWillWriteoffAmt?: number;
    /**  单位名称 */
    payer?: string;
    /** 单位编码 */
    payerId?: string;
    /**  单位纳税识别号  */
    payerTaxNo?: string;
    /**  单位类型:字典polarbear_finance_partner_type  */
    payerType?: number;
    /**  单位类型名称 */
    payerTypeName?: string;
    /** 备注 */
    remark?: string;
    /**  本次核销已选收款单 */
    rightItems?: OptionalRecvReceiptItemVO[];
    /** 右侧本次核销金额 */
    rightWillWriteoffAmt?: number;
    /** 来源 1-批发收款核销 2-采购退款核销 */
    sourceType?: number;
    /**  单据状态:0-未提审 1-已提审 2-审核中 3-审核通过 4-已取消  */
    status?: number;
    /** 核销时间 */
    writeoffTime?: string;
  };

  type RecvWriteoffCreateVO = {
    /** 核销单ID (新增时为空) */
    id?: string;
    leftItems?: OptionalRecvReceivableOrPayableItemVO[];
    /** 单位编码(纳税人识别号) */
    payerId?: string;
    /** 备注 */
    remark?: string;
    rightItems?: OptionalRecvReceiptItemVO[];
    /** 来源 1-批发收款核销 2-采购退款核销 */
    sourceType?: number;
  };

  type RecvWriteoffPageQueryVO = {
    /** 制单人/创建人 */
    creater?: string;
    /** 单据编号 */
    id?: string;
    /** 创建日期-结束 */
    maxCreateTime?: string;
    /** 创建日期-开始 */
    minCreateTime?: string;
    pageQuery?: PageQuery;
    /** 单位类型 字典：polarbear_finance_partner_type */
    partnerType?: number[];
    /**  单位编码  */
    payerId?: string;
    /** 收款单号 */
    recvReceiptId?: string;
    /** 应收单号 */
    recvReceivableId?: string;
    /** 来源 1-批发收款核销 2-采购退款核销 */
    sourceType?: number;
    /**  单据状态:0-未提审 1-已提审 2-审核中 3-审核通过 4-已取消  */
    status?: number;
  };

  type RecvWriteoffVO = {
    /** 创建时间 */
    createTime?: string;
    /** 制单人/创建人 */
    creater?: string;
    /**  收款核销编号  */
    id?: string;
    /**  单位名称 */
    payer?: string;
    /** 单位编码 */
    payerId?: string;
    /**  单位纳税识别号  */
    payerTaxNo?: string;
    /**  单位类型:字典polarbear_finance_partner_type  */
    payerType?: number;
    /**  单位类型名称 */
    payerTypeName?: string;
    /** 收款单号 */
    recvReceiptIds?: string;
    /** 应收单号 */
    recvReceivableIds?: string;
    /** 备注 */
    remark?: string;
    /** 来源 1-批发收款核销 2-采购退款核销 */
    sourceType?: number;
    /**  单据状态:0-未提审 1-已提审 2-审核中 3-审核通过 4-已取消  */
    status?: number;
    /** 总核销金额 */
    writeoffAmt?: number;
    /** 审核通过时间 */
    writeoffTime?: string;
  };

  type RefundWriteOffPageQueryVO = {
    /**  开始创建时间 */
    createTimeEnd?: string;
    /**  截止修改时间 */
    createTimeSta?: string;
    /**  制单人  */
    creater?: string;
    /**  主键id  */
    id?: string;
    pageQuery?: PageQuery;
    /**  纳税人识别码  */
    payeeTaxNo?: string;
    /**  预付单号 */
    paymentId?: string;
    /**  收款单编码  */
    receiptId?: string;
    /**  状态 :0-未提审 1-已提审 2-审核中 3-审核通过 4-已取消  */
    status?: number;
    /**  供应商id  */
    supplierId?: string;
    /**  供应商名  */
    supplierName?: string;
  };

  type RefundWriteOffPayeeItemVO = {
    /**  创建时间  */
    createTime?: string;
    /**  主键id  */
    id?: string;
    /**  未核销金额  */
    noWriteOffAmt: number;
    /**  收款金额  */
    payeeAmt: number;
    /**  收款单编码  */
    payeeId: string;
    /**  收款日期  */
    payeeTime: string;
    /**  退款核销主键id  */
    refundWriteOffId?: string;
    /**  修改时间  */
    updateTime?: string;
    /**  本次核销金额  */
    writeOffAmt: number;
  };

  type RefundWriteOffPaymentVO = {
    /**  单据日期时间(创建时间)  */
    billTime: string;
    /**  创建时间  */
    createTime?: string;
    /**  主键id  */
    id?: string;
    /**  未核销金额/剩余金额  */
    noWriteOffAmt: number;
    /**  预付款金额  */
    paymentAmt: number;
    /**  抵扣预付款单号  */
    paymentId: string;
    /**  预付款已付款ID  */
    prepayPaidId: string;
    /**  合同编号  */
    purContractCode?: string;
    /**  采购单号  */
    purOrderId?: string;
    /**  退款核销主键id  */
    refundWriteOffId?: string;
    /**  修改时间  */
    updateTime?: string;
    /**  本次核销/本次抵扣金额  */
    writeOffAmt: number;
  };

  type RefundWriteOffVO = {
    /**  创建时间  */
    createTime?: string;
    /**  制单人  */
    creater?: string;
    /**  单据编码  */
    id?: string;
    /**  纳税人识别码  */
    payeeTaxNo: string;
    /**  预付单号(多个付款单编码逗号分割)  */
    paymentId?: string;
    /**  收款单编码  */
    receiptId?: string;
    /**  退款核销收款单列表  */
    refundWriteOffPayeeItemVOList: RefundWriteOffPayeeItemVO[];
    /**  退款核销-抵扣预付列表  */
    refundWriteOffPaymentVOList: RefundWriteOffPaymentVO[];
    /**  备注  */
    remark?: string;
    /**  状态 :0-未提审 1-已提审 2-审核中 3-审核通过 4-已取消  */
    status?: number;
    /**  供应商id  */
    supplierId: string;
    /**  供应商名  */
    supplierName: string;
    /**  操作日志  */
    traceLogVOList?: TraceLogVO[];
    /**  修改时间  */
    updateTime?: string;
    /**  核销金额  */
    writeOffAmt: number;
    /**  核销时间  */
    writeOffTime?: string;
  };

  type TraceLogVO = {
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

  type VoucherLogPageQueryVO = {
    /** 创建日期-结束 */
    maxCreateTime?: string;
    /** 创建日期-开始 */
    minCreateTime?: string;
    pageQuery?: PageQuery;
    /**  单位id  */
    partnerId?: string;
  };

  type VoucherLogStatisticsVO = {
    /**  结余金额  */
    balanceAmt?: number;
    /**  贷方金额  */
    creditAmt?: number;
    /**  借方金额  */
    debitAmt?: number;
  };

  type VoucherLogVO = {
    /**  调整单对应的原单号,为调整单类别的才有值  */
    adjustRelateSourceBizId?: string;
    /**  本次结余金额  */
    balanceAmt?: number;
    /**  记账日期 年月日  */
    bookDate?: string;
    /**  时间  */
    createTime?: string;
    /**  经办人  */
    creater?: string;
    /**  经办人编码 */
    createrId?: string;
    /**  本次贷方金额  */
    creditAmt?: number;
    /**  本次借方金额  */
    debitAmt?: number;
    /** 主键  */
    id?: string;
    /**  借贷方向:1-借 2-贷  */
    lendingDirection?: number;
    /**  单位编码  */
    partnerId?: string;
    /**  备注  */
    remark?: string;
    /**  凭证号码  */
    sourceBizId?: string;
    /**  凭证类型:字典配置polarbear_finance_source_type  */
    sourceType?: string;
    /**  凭证类型名称 */
    sourceTypeName?: string;
    /**  凭证摘要  */
    voucherAbstract?: string;
  };

  type PaginationAwaitWriteOffRefundMonthlySettleDetailVO_ = {
    current?: number;
    records?: AwaitWriteOffRefundMonthlySettleDetailVO[];
    size?: number;
    total?: number;
  };

  type PaginationCostAppVO_ = {
    current?: number;
    records?: CostAppVO[];
    size?: number;
    total?: number;
  };

  type PaginationListRecvReceiptVO_ = {
    current?: number;
    records?: ListRecvReceiptVO[];
    size?: number;
    total?: number;
  };

  type PaginationPartnerDetailVO_ = {
    current?: number;
    records?: PartnerDetailVO[];
    size?: number;
    total?: number;
  };

  type PaginationPartnerVO_ = {
    current?: number;
    records?: PartnerVO[];
    size?: number;
    total?: number;
  };

  type PaginationPayableVO_ = {
    current?: number;
    records?: PayableVO[];
    size?: number;
    total?: number;
  };

  type PaginationPaymentVO_ = {
    current?: number;
    records?: PaymentVO[];
    size?: number;
    total?: number;
  };

  type PaginationRecvReceivableVO_ = {
    current?: number;
    records?: RecvReceivableVO[];
    size?: number;
    total?: number;
  };

  type PaginationRecvWriteoffVO_ = {
    current?: number;
    records?: RecvWriteoffVO[];
    size?: number;
    total?: number;
  };

  type PaginationRefundWriteOffVO_ = {
    current?: number;
    records?: RefundWriteOffVO[];
    size?: number;
    total?: number;
  };

  type PaginationVoucherLogVO_ = {
    current?: number;
    records?: VoucherLogVO[];
    size?: number;
    total?: number;
  };
}
