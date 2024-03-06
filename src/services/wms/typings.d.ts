// @ts-ignore
/* eslint-disable */

declare namespace WMS {
  type BasicCheckVO = {
    /** 单据编号 */
    id?: string;
    /** 是否审核通过 0 不通过 1 通过 */
    pass?: number;
    /** 审核备注 */
    remark?: string;
  };

  type BatchCustomerChangeDetailVO = {
    /** 本次调整数量 */
    adjustQty?: number;
    /** 商品条码 */
    barCode?: string;
    /** 批次变更单id */
    batchCustomerId?: string;
    /** 批次 */
    batchNo?: string;
    /** 创建时间 */
    createTime?: string;
    /** 新客户集id */
    cusSetNewId?: string;
    /** 旧客户集id */
    cusSetOldId?: string;
    /** 客户集明细 */
    customerList?: ChannelCustomerWithTempDTO[];
    /** 失效日期 */
    expirationDate?: string;
    /** 单据id */
    id?: string;
    /** 生产厂家 */
    manufacturer?: string;
    /** 价格 */
    price?: number;
    /** 生产批号 */
    produceCode?: string;
    /** 生产日期 */
    productionDate?: string;
    /** 项目id */
    projectId?: string;
    /** 项目名称 */
    projectName?: string;
    /** 合格可用数量 */
    qualifiedQty?: number;
    /** 批次库存分配 id */
    relatedId?: string;
    /** 商品编码 */
    skuId?: string;
    /** 商品规格 */
    skuModel?: string;
    /** 商品名称 */
    skuName?: string;
    /** 拼音简拼 */
    skuPinyin?: string;
    /** 入库时间 */
    storageTime?: string;
    /** 物理仓编码 */
    storeCode?: string;
    /** 物理仓名称 */
    storeName?: string;
    /** 供应商编码 */
    supplierId?: string;
    /** 供应商简称 */
    supplierShortName?: string;
    /** 租户编码 */
    tenantId?: string;
    /** 修改时间 */
    updateTime?: string;
    /** 通用名 */
    wareGeneralName?: string;
    /** 仓库类型 */
    warehouseType?: number;
  };

  type BatchCustomerChangePageQueryVO = {
    /** 批次 */
    batchNo?: string;
    /** 单据ID */
    id?: string;
    pageQuery?: PageQuery;
    /** 单据状态 */
    status?: number;
  };

  type BatchCustomerChangeVO = {
    /** 变更详情 */
    changeDetails?: BatchCustomerChangeDetailVO[];
    /** 创建时间 */
    createTime?: string;
    /** 创建人 */
    creater?: string;
    /** 创建人id */
    createrId?: string;
    /** 单据ID */
    id?: string;
    /** 最后操作人 */
    operator?: string;
    /** 最后操作人id */
    operatorId?: string;
    /** 申请原因 */
    reason?: string;
    /** 变更条目数 */
    size?: number;
    /** 0-未审核 1-已提审 2-审核中 3-审核通过 4-已取消 */
    status?: number;
    /** 租户id */
    tenantId?: string;
    /** 更新时间 */
    updateTime?: string;
  };

  type BhgOrderCheckVO = {
    /**  审核结果 1-合格,2-不合格 */
    conclusion: number;
    /**  备注  */
    conclusionRemark?: string;
    /**  id  */
    id: string;
  };

  type BhgOrderDetailItemVO = {
    /**  处理日期  */
    auditTime?: string;
    /**  商品条码  */
    barCode?: string;
    /**  销毁单上传ID  */
    bhgOrderId?: string;
    /**  创建时间  */
    createTime?: string;
    /** 处理方式 */
    dealWay?: string;
    /**  报损单号  */
    destoryCode?: string;
    /**  有效期至  */
    expireTime?: string;
    /** 货位 */
    freight?: string;
    /**  主键id  */
    id?: string;
    /**  生产批号  */
    lotNo?: string;
    /**  厂家  */
    manufacturer?: string;
    /**  不合格数量  */
    num?: number;
    /**  产地  */
    producingArea?: string;
    /**  生产日期  */
    productionTime?: string;
    /**  不合格原因  */
    remark?: string;
    /**  商品编码  */
    skuId?: string;
    /**  规格  */
    skuModel?: string;
    /**  商品名称  */
    skuName?: string;
    /** 本位码 */
    standardCode?: string;
    /**  是否处理, 0-否, 1-是  */
    status?: number;
    /**  仓库编码  */
    storeCode?: string;
    /**  仓库  */
    storeName?: string;
    /**  主键id  */
    tenantId?: string;
    /**  修改时间  */
    updateTime?: string;
  };

  type BhgOrderDetailVO = {
    /**  报损单号  */
    destoryCode?: string;
    /**  剂型名称  */
    dosageFormName?: string;
    /**  有效期至  */
    expireTime?: string;
    /**  类别(GSP分类)  */
    gspCategory?: string;
    /**  类别名称(GSP分类)  */
    gspCategoryName?: string;
    /**  id  */
    id?: string;
    /**  批号  */
    lotNo?: string;
    /** 生产厂家 */
    manufacturer?: string;
    /**  数量  */
    num?: number;
    /**  上市许可证持有人  */
    permitHolder?: string;
    /**  产地  */
    producingArea?: string;
    /**  生产日期  */
    productionTime?: string;
    /**  批准文号  */
    regisTrationNumber?: string;
    /** 商品编码 */
    skuId?: string;
    /** 规格 */
    skuModel?: string;
    /** 商品名称 */
    skuName?: string;
    /**  单位  */
    unit?: string;
    /**  通用名  */
    wareGeneralName?: string;
  };

  type BhgOrderInfoVO = {
    /**  销毁单号  */
    bhgOrderCode?: string;
    /**  销毁类型 1-报损销毁  */
    bhgType?: number;
    /**  销毁类型名称  */
    bhgTypeName?: string;
    /**  制单时间  */
    createTime?: string;
    /**  销毁方式  */
    destructionMethod?: string;
    /**  销毁地点  */
    destructionSite?: string;
    /**  销毁时间  */
    destructionTime?: string;
    /**  销毁单位  */
    destructionUnit?: string;
    /**  id  */
    id?: string;
    /**  是否委托，1、是 0、否  */
    isEntrust?: number;
    /**  商品信息  */
    itemList?: BhgOrderDetailVO[];
    /**  销毁原因  */
    remark?: string;
    /**  销毁结果,1:成功、2：失败  */
    result?: number;
    /**  销毁结果名称  */
    resultName?: string;
    /**  单据状态,0-未审核,1-已审核,2-已取消  */
    status?: number;
    /**  单据状态名称  */
    statusName?: string;
    /**  仓库名称  */
    storeName?: string;
    /**  监毁人  */
    supervisor?: string;
    /**  操作日志  */
    traceLogList?: TraceLogVO[];
  };

  type BhgOrderPageQueryVO = {
    /**  销毁单号  */
    bhgOrderCode?: string;
    /**  销毁类型 1-报损销毁  */
    bhgType?: number;
    /**  制单结束时间  */
    createTimeEnd?: string;
    /**  制单开始时间  */
    createTimeStart?: string;
    /**  单据编号  */
    id?: string;
    /**  id列表  */
    ids?: string[];
    pageQuery?: PageQuery;
    /**  商品编码  */
    skuId?: string;
    /**  0-未提审 1-已提审 2-审核中 3-审核通过 4-审核拒绝(驳回)  */
    status?: number;
    /**  仓库编码  */
    storeCode?: string;
  };

  type BhgOrderStockPageQueryVO = {
    /**  销毁单号  */
    bhgOrderCode?: string;
    /**  销毁类型 1-报损销毁  */
    bhgType?: number;
    /**  销毁结束时间  */
    destructionTimeEnd?: string;
    /**  销毁开始时间  */
    destructionTimeStart?: string;
    /**  剂型  */
    dosageForm?: string;
    /**  经营范围  */
    gspCategory?: string;
    /**  id列表  */
    ids?: string[];
    pageQuery?: PageQuery;
    /**  批准文号  */
    regisTrationNumber?: string;
    /**  商品信息  */
    skuInfo?: string;
    /**  仓库编码  */
    storeCode?: string;
    /**  通用名  */
    wareGeneralName?: string;
  };

  type BhgOrderStockVO = {
    /**  销毁单号  */
    bhgOrderCode?: string;
    /**  制单时间  */
    createTime?: string;
    /**  报损单号  */
    destoryCode?: string;
    /**  销毁方式  */
    destructionMethod?: string;
    /**  销毁地点  */
    destructionSite?: string;
    /**  销毁时间  */
    destructionTime?: string;
    /**  销毁单位  */
    destructionUnit?: string;
    /**  剂型  */
    dosageForm?: string;
    /**  剂型名称  */
    dosageFormName?: string;
    /**  有效期至  */
    expireTime?: string;
    /**  经营范围  */
    gspCategory?: string;
    /**  经营范围名称  */
    gspCategoryName?: string;
    /**  id  */
    id?: string;
    /**  批号  */
    lotNo?: string;
    /**  生产厂家  */
    manufacturer?: string;
    /**  数量  */
    num?: number;
    /**  上市许可持有人  */
    permitHolder?: string;
    /**  产地  */
    producingArea?: string;
    /**  生产日期  */
    productionTime?: string;
    /**  批准文号/注册证号  */
    regisTrationNumber?: string;
    /**  销毁原因  */
    remark?: string;
    /**  销毁结果,1:成功、2：失败  */
    result?: number;
    /**  销毁结果名称  */
    resultName?: string;
    /**  商品编码  */
    skuId?: string;
    /**  规格  */
    skuModel?: string;
    /**  商品名称  */
    skuName?: string;
    /**  仓库名称  */
    storeName?: string;
    /**  监毁人  */
    supervisor?: string;
    /**  单位  */
    unitCode?: string;
    /**  通用名  */
    wareGeneralName?: string;
  };

  type BhgOrderVO = {
    /**  销毁单号  */
    bhgOrderCode?: string;
    /**  销毁类型 1-报损销毁  */
    bhgType?: number;
    /**  销毁类型名称  */
    bhgTypeName?: string;
    /**  制单时间  */
    createTime?: string;
    /**  销毁方式  */
    destructionMethod?: string;
    /**  销毁地点  */
    destructionSite?: string;
    /**  销毁时间  */
    destructionTime?: string;
    /**  销毁单位  */
    destructionUnit?: string;
    /**  id  */
    id?: string;
    /**  销毁原因  */
    remark?: string;
    /**  销毁结果,1:成功、2：失败  */
    result?: number;
    /**  销毁结果名称  */
    resultName?: string;
    /**  单据状态,0-未提审 1-已提审 2-审核中 3-审核通过 4-审核拒绝(驳回)  */
    status?: number;
    /**  单据状态名称  */
    statusName?: string;
    /**  仓库名称  */
    storeName?: string;
    /**  监毁人  */
    supervisor?: string;
  };

  type BizReportBreakageCheckVO = {
    /**  id  */
    id: string;
    /**  审核/取消/撤销 备注  */
    remark?: string;
  };

  type BizReportBreakageItemVO = {
    /**  含税金额  */
    amount?: number;
    /**  批次号  */
    batchCode?: string;
    /**  批次  */
    batchNo?: string;
    /**  报损人  */
    breakageBy?: string;
    /**  报损原因  */
    breakageReason?: string;
    /**  报损时间  */
    breakageTime?: string;
    /**  箱号  */
    containerNo?: string;
    /**  含税单价  */
    costPrice?: number;
    /**  创建时间  */
    createTime?: string;
    /**  明细中台业务编码,无差异单业务,不用接入此字段  */
    detailOutBizCode?: string;
    /**  剂型名称  */
    dosageFormName?: string;
    /**  有效期至  */
    dueDate?: string;
    /**  扩展属性  */
    extendFields?: string;
    /**  类别(GSP分类)  */
    gspCategory?: string;
    /**  类别名称(GSP分类)  */
    gspCategoryName?: string;
    /**  id  */
    id?: string;
    /**  库存类型(1：正品 101：残次 201：待处理) 备注（华源专用：瑕疵：401、临期：501）  */
    inventoryType?: number;
    /**  商家对商品的编码  */
    itemCode?: string;
    /**  商品ID  */
    itemId?: string;
    /**  CTN/NMB  */
    lotatt14?: string;
    /**  平台（华源用）  */
    lotatt15?: string;
    /**  厂家  */
    manufacturer?: string;
    /**  上市许可证持有人  */
    permitHolder?: string;
    /**  生产批号  */
    produceCode?: string;
    /**  生产日期  */
    produceDate?: string;
    /**  产地  */
    producingArea?: string;
    /**  PO号  */
    purchaseOrderCode?: string;
    /**  采购价格  */
    purchasePrice?: number;
    /**  商品数量  */
    quantity?: number;
    /**  批准文号  */
    regisTrationNumber?: string;
    /**  备注  */
    remark?: string;
    /**  业务报损id  */
    reportBreakageId?: string;
    /**  商品编码  */
    skuId?: string;
    /**  规格  */
    skuModel?: string;
    /**  商品名称  */
    skuName?: string;
    /**  sn编码  */
    snCode?: string;
    /**  仓库名称  */
    storeName?: string;
    /**  外部供应商编码  */
    supplierCode?: string;
    /**  含税金额  */
    taxAmount?: number;
    /**  税率  */
    taxRate?: number;
    /**  租户id  */
    tenantId?: string;
    /**  单位  */
    unit?: string;
    /**  修改时间  */
    updateTime?: string;
    /**  通用名  */
    wareGeneralName?: string;
  };

  type BizReportBreakagePageQueryVO = {
    /**  单据编码   */
    id?: string;
    /**  单据编码集合   */
    idList?: string[];
    /**  结束盘点时间 YYYY-MM-DD HH:MM:SS  */
    operateTimeEnd?: string;
    /**  开始盘点时间 YYYY-MM-DD HH:MM:SS  */
    operateTimeSta?: string;
    /**  订单类型：701 盘点出库（盘亏）800 不合格报损  */
    orderType?: number;
    /** (外部单号)中台业务编码 */
    outBizCode?: string;
    pageQuery?: PageQuery;
    /** skuId */
    skuId?: string;
    /**  单据状态:0-未提审 1-已提审 2-审核中 3-审核通过 4-审核拒绝 */
    status?: number;
    /**  仓库编码  */
    storeCode?: string;
  };

  type BizReportBreakageVO = {
    /** 来源单号 */
    adjustBizKey?: string;
    /**  差异原因  */
    adjustReasonType?: string;
    /** 业务报损商品明细表 */
    bizReportBreakageItemVOList?: BizReportBreakageItemVO[];
    /**  创建人/报损人  */
    createBy?: string;
    /**  创建时间  */
    createTime?: string;
    /**  扩展字段  */
    extendFields?: string;
    /**  id  */
    id?: string;
    /**  差异单订单编号,无差异单业务,不用接入此字段  */
    imbalanceOrderCode?: string;
    /**  1 普通发货单，2 爆品发货单，3 金牌快消  */
    multiOrderFlag?: string;
    /**  报损日期 YYYY-MM-DD */
    operateTime?: string;
    /**  订单类型：701 盘点出库（盘亏）800 不合格报损  */
    orderType?: number;
    /** 外部单号 */
    outBizCode?: string;
    /**  货主ID  */
    ownerUserid?: string;
    /**  备注  */
    remark?: string;
    /**  盘点责任编码  */
    responsibilityCode?: string;
    /**  单据状态:0-未提审 1-已提审 2-审核中 3-审核通过 4-审核拒绝  */
    status?: number;
    /**  仓库编码  */
    storeCode?: string;
    /**  仓库名称  */
    storeName?: string;
    /**  报损金额  */
    taxAmount?: number;
    /**  租户编码  */
    tenantCode?: string;
    /**  租户id  */
    tenantId?: string;
    /**  时区  */
    timeZone?: string;
    /** 操作跟踪日志明细 */
    traceLogVOList?: TraceLogVO[];
    /**  修改时间  */
    updateTime?: string;
  };

  type BizReportOverflowCheckVO = {
    /**  id  */
    id: string;
    /**  审核/取消 备注  */
    remark?: string;
  };

  type BizReportOverflowItemVO = {
    /**  金额  */
    amount?: number;
    /**  批次号  */
    batchCode?: string;
    /**  箱号  */
    containerNo?: string;
    /**  创建时间  */
    createTime?: string;
    /**  明细中台业务编码,无差异单业务,不用接入此字段  */
    detailOutBizCode?: string;
    /**  有效期至  */
    dueDate?: string;
    /**  扩展属性  */
    extendFields?: string;
    /**  id  */
    id?: string;
    /**  库存类型(1：正品 101：残次 201：待处理) 备注（华源专用：瑕疵：401、临期：501）  */
    inventoryType?: number;
    /**  商家对商品的编码  */
    itemCode?: string;
    /**  商品ID  */
    itemId?: string;
    /**  CTN/NMB  */
    lotatt14?: string;
    /**  平台（华源用）  */
    lotatt15?: string;
    /**  厂家  */
    manufacturer?: string;
    /**  生产批号  */
    produceCode?: string;
    /**  生产日期  */
    produceDate?: string;
    /**  PO号  */
    purchaseOrderCode?: string;
    /**  采购价格  */
    purchasePrice?: number;
    /**  商品数量  */
    quantity?: number;
    /**  备注  */
    remark?: string;
    /**  业务报溢id  */
    reportOverflowId?: string;
    /**  报溢原因  */
    reportReason?: string;
    /**  商品编码  */
    skuId?: string;
    /**  规格  */
    skuModel?: string;
    /**  商品名称  */
    skuName?: string;
    /**  sn编码  */
    snCode?: string;
    /**  外部供应商编码  */
    supplierCode?: string;
    /**  租户编号  */
    tenantId?: string;
    /**  修改时间  */
    updateTime?: string;
  };

  type BizReportOverflowPageQueryVO = {
    /** 单据编码 */
    id?: string;
    /** id列表 */
    ids?: string[];
    /**  (结束)盘点时间/制单时间 YYYY-MM-DD HH:MM:SS */
    operateTimeEnd?: string;
    /**   (开始)盘点时间/制单时间 YYYY-MM-DD HH:MM:SS  */
    operateTimeSta?: string;
    /**  订单类型/报溢类型：702 盘点入库（盘盈） */
    orderType?: number;
    /** (外部单号)中台业务编码 */
    outBizCode?: string;
    pageQuery?: PageQuery;
    /** skuId */
    skuId?: string;
    /**  单据状态:0-未提审 1-已提审 2-审核中 3-审核通过 4-审核拒绝 */
    status?: number;
    /**  仓库编码  */
    storeCode?: string;
  };

  type BizReportOverflowVO = {
    /** 来源单号 */
    adjustBizKey?: string;
    /**  差异原因  */
    adjustReasonType?: string;
    /** 业务报溢商品明细表  */
    bizReportOverflowItemVOList?: BizReportOverflowItemVO[];
    /**  创建人  */
    createBy?: string;
    /**  创建时间  */
    createTime?: string;
    /**  扩展字段  */
    extendFields?: string;
    /**  id  */
    id?: string;
    /**  差异单订单编号,无差异单业务,不用接入此字段  */
    imbalanceOrderCode?: string;
    /**  1 普通发货单，2 爆品发货单，3 金牌快消  */
    multiOrderFlag?: string;
    /**  报溢日期 YYYY-MM-DD */
    operateTime?: string;
    /**  订单类型/报溢类型：702 盘点入库（盘盈）  */
    orderType?: number;
    /** 外部单号 */
    outBizCode?: string;
    /**  货主ID  */
    ownerUserid?: string;
    /**  备注  */
    remark?: string;
    /**  盘点责任编码  */
    responsibilityCode?: string;
    /**  单据状态:0-未提审 1-已提审 2-审核中 3-审核通过 4-审核拒绝 */
    status?: number;
    /**  仓库编码  */
    storeCode?: string;
    /**  仓库名称  */
    storeName?: string;
    /** 报溢金额 */
    taxAmount?: number;
    /**  租户编码  */
    tenantCode?: string;
    tenantId?: string;
    /**  时区  */
    timeZone?: string;
    /** 操作跟踪日志明细 */
    traceLogVOList?: TraceLogVO[];
    /**  修改时间  */
    updateTime?: string;
  };

  type BizStockInResultDetailInfoPageQueryVO = {
    /** 商品条码 */
    barCode?: string;
    /** 客户信息 */
    cusInfo?: string;
    /** 剂型 */
    dosageForm?: string;
    /** 结束入库日期 */
    endOrderConfirmTime?: string;
    /** 客户集 */
    entrustCusCode?: string;
    pageQuery?: PageQuery;
    /** 商品名称/拼音码/编码 */
    skuInfo?: string;
    /** 开始 入库日期 */
    staOrderConfirmTime?: string;
    /** 通知单id/单据编码 */
    stockNoticeId?: string;
    /** 仓库编号 */
    storeCode?: string;
    /** 供应商信息 */
    supplierInfo?: string;
    /** 库房类型 0-合格品仓 1-不合格品仓 2-待处理仓 */
    warehouseType?: number;
  };

  type BizStockInResultDetailInfoVO = {
    /** 总额 */
    amt?: number;
    /** 商品条码 */
    barCode?: string;
    /** 批次 */
    batchNo?: string;
    /** 联系人 */
    contact?: string;
    /** 联系人手机号码 */
    contactPhone?: string;
    /** 入库/到货日期时间 */
    createTime?: string;
    /** (客户id)购货企业编码 */
    cusId?: string;
    /** (客户名称)购货企业 */
    cusName?: string;
    /** 订单/服务单明细id */
    docDetailId?: string;
    /** 单据编码 */
    docId?: string;
    /** 单据类型 1 委托订单 2 自采订单 */
    docType?: number;
    /** 剂型 */
    dosageForm?: string;
    /** 剂型名称 */
    dosageFormName?: string;
    /** 药监报告 */
    drugReport?: string;
    /** 客户集 */
    entrustCusCode?: string;
    /** 客户集名称 */
    entrustCusName?: string;
    /** 有效日期 */
    expiredDate?: string;
    /** 厂家检号 */
    factoryInspection?: string;
    /** 功能主治 */
    functions?: string;
    /** (GSP分类) */
    gspCategory?: string;
    /** 经营范围(GSP分类) */
    gspCategoryName?: string;
    id?: string;
    /** 单据类型 1 采购入库  2 销退入库 */
    inType?: number;
    /** 保管员 */
    keeper?: string;
    /** 厂家 */
    manufacturer?: string;
    /** 中包装 */
    mediumPackaging?: string;
    /** 通知入库数量 */
    noticeQty?: number;
    /** 操作时间 */
    operationTime?: string;
    /** 最后操作人 */
    operator?: string;
    /** 最后操作人id */
    operatorId?: string;
    /** 仓库订单完成时间 */
    orderConfirmTime?: string;
    /** 中台业务编码 */
    outBizCode?: string;
    /** 有效期 */
    periodValidity?: number;
    /** 价格 */
    price?: number;
    /** 生产批号 */
    produceCode?: string;
    /** 产地 */
    producingArea?: string;
    /** 生产日期 */
    productionDate?: string;
    /** 质量标准 */
    qualityStandard?: string;
    /** 实际入货数量 */
    realityQty?: number;
    /** 批准文号 */
    regisTrationNumber?: string;
    /** 退货原因 */
    returnReason?: string;
    /** 业务员 */
    salesman?: string;
    /** 架位号 */
    shelfNumber?: string;
    /** 商品编码 */
    skuId?: string;
    /** 规格 */
    skuModel?: string;
    /** 商品名称 */
    skuName?: string;
    /** 商品名称拼音 */
    skuPinyin?: string;
    /** 本位码 */
    standardCode?: string;
    /** 灭菌批号 */
    sterilizationBatch?: string;
    /** 通知单id */
    stockNoticeId?: string;
    /** 结果单id/批次 */
    stockResultId?: string;
    /** 储存条件 */
    storageConditions?: string;
    /** 物理仓编码 */
    storeCode?: string;
    /** 物理仓名称 */
    storeName?: string;
    /** (供货企业)供应商编码 */
    supplierId?: string;
    /** (供货企业)供应商名称 */
    supplierName?: string;
    /** 单位 */
    unit?: string;
    /** 通用名 */
    wareGeneralName?: string;
    /** 库房 */
    warehouseName?: string;
  };

  type BizStockInResultListVO = {
    /** 采购订单单号 */
    docId?: string;
    /** 客户集编码 */
    entrustCusCode?: string;
    /** 客户集名称 */
    entrustCusName?: string;
    /** 主键 */
    id?: string;
    /** 入库状态 */
    inStoreStatus?: string;
    /** 订单金额 */
    orderAmount?: number;
    /** 仓库订单完成时间 */
    orderConfirmTime?: string;
    /** 可退状态 */
    returnStatus?: string;
    /** 可退状态码 0：可退 1：已全单退货 */
    returnStatusCode?: number;
    /** 物理仓编码 */
    storeCode?: string;
    /** 物理仓名称 */
    storeName?: string;
    /** 供应商编码 */
    supplierId?: string;
    /** 供应商名称 */
    supplierName?: string;
  };

  type BizStockInResultPageQueryVO = {
    /** 采购单号 */
    docId?: string;
    /** 单据类型 1 委托订单 2 自采订单 */
    docType?: number;
    /** 客户集编码 */
    entrustCusCode?: string;
    /** 客户集名称 */
    entrustCusName?: string;
    /** 采购入库结果单号 */
    id?: string;
    pageQuery?: PageQuery;
    /** 仓库编码 */
    storeCode?: string;
    /** 仓库名称 */
    storeName?: string;
    /** 供应商编码 */
    supplierId?: string;
    /** 供应商名称 */
    supplierName?: string;
  };

  type BizStockInResultProduceListVO = {
    /** 商品条码 */
    barCode?: string;
    /** 批次 */
    batchNo?: string;
    /** 入库结果单明细id */
    bizStockInResultProduceId?: string;
    /** 明细类型 */
    detailType?: number;
    /** 有效期至 */
    expiredDate?: string;
    /** 主键/入库结果单明细id */
    id?: string;
    /** 生产厂家 */
    manufacturer?: string;
    /** 采购订单号 */
    originalOrderId?: string;
    /** 成本价 */
    price?: number;
    /** 生产批次 */
    produceCode?: string;
    /** 生产日期 */
    productionDate?: string;
    /** 可退数量 */
    returnQty?: number;
    /** 商品编码 */
    skuId?: string;
    /** 规格 */
    skuModel?: string;
    /** 商品名称 */
    skuName?: string;
    /** 商品名称拼音 */
    skuPinyin?: string;
    /** 入库结果单主表id */
    stockResultId?: string;
    /** 税收分类编码 */
    taxClassificationCode?: string;
    /** 税率 */
    taxRate?: number;
  };

  type BizStockInResultProducePageQueryVO = {
    /** 批次 */
    batchNo?: string;
    /** 客户集编码 */
    entrustCusCode?: string;
    /** 商品搜索关键字（商品名称/商品编码/拼音码） */
    keyword?: string;
    /** 厂家 */
    manufacturer?: string;
    /** 采购单号 */
    orderId?: string;
    pageQuery?: PageQuery;
    /** 批号 */
    produceCode?: string;
    /** 入库单号 */
    stockResultId?: string;
    /** 仓库编码 */
    storeCode?: string;
    /** 供应商编码 */
    supplierId?: string;
  };

  type BizStockInResultProduceTaxChangeVO = {
    /** 商品条码 */
    barCode?: string;
    /** 调整前最新税率 */
    beforeFixTaxRate?: number;
    /** 入库单号 */
    bizStockInResultId?: string;
    /** 采购入库结果单批号id */
    bizStockInResultProduceId?: string;
    /** 入库时间 */
    inboundTime?: string;
    /** 生产厂家 */
    manufacturer?: string;
    /** 采购单号 */
    orderId?: string;
    /** 原单税率 */
    originalTaxRate?: number;
    /** 单价(含税) */
    price?: number;
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
    /** 商品拼音 */
    skuPinyin?: string;
    /** 仓库编码 */
    storeCode?: string;
    /** 仓库名称 */
    storeName?: string;
    /** 供应商编码 */
    supplierId?: string;
    /** 供应商名称 */
    supplierName?: string;
    /** 单位名称 */
    unitName?: string;
  };

  type BizStockInResultProduceVO = {
    /** 商品条码 */
    barCode?: string;
    /** 入库结果单明细id */
    bizStockInResultProduceId?: string;
    /** 采退商品当前退货数量 */
    currentOutQty?: number;
    /** 药物分类 */
    drugCategory?: string;
    /** 主键/入库结果单明细id */
    id?: string;
    /** 生产厂家 */
    manufacturer?: string;
    /** 采购订单号 */
    originalOrderId?: string;
    /** 采购价格 */
    price?: number;
    /** 生产批号 */
    produceCode?: string;
    /** 入库数量（实际入库数量） */
    realityQty?: number;
    /** 商品编码 */
    skuId?: string;
    /** 规格 */
    skuModel?: string;
    /** 商品名称 */
    skuName?: string;
    /** 商品名称拼音 */
    skuPinyin?: string;
    /** 批次(入库结果单主表id) */
    stockResultId?: string;
  };

  type BizStockOutItemResultVO = {
    /** 商品条码 */
    barCode?: string;
    /** 联系人 */
    contact?: string;
    /** 联系人手机号码 */
    contactPhone?: string;
    /** 销售日期时间/出库日期/退货出库日期 */
    createTime?: string;
    /** (客户id)采购企业编码 */
    cusId?: string;
    /** (客户名称)采购企业 */
    cusName?: string;
    /** 主键id */
    docId?: string;
    /** 单据类型  1 委托订单 2 自采订单 */
    docType?: number;
    /** 剂型 */
    dosageForm?: string;
    /** 剂型名称 */
    dosageFormName?: string;
    /** 客户集 */
    entrustCusCode?: string;
    /** 客户集名称 */
    entrustCusName?: string;
    /** 有效日期 */
    expiredDate?: string;
    /** 厂家检号 */
    factoryInspection?: string;
    /**  类别(GSP分类)  */
    gspCategory?: string;
    /**  类别名称(GSP分类)  */
    gspCategoryName?: string;
    /** 主键id */
    id?: string;
    /** 发票类型 1-普通发票(电子) 2-增值税专用发票 */
    invoiceType?: number;
    /** 生产厂家 */
    manufacturer?: string;
    /** 操作处理人/销售员 */
    operator?: string;
    /** 仓库订单完成时间 */
    orderConfirmTime?: string;
    /** 中台业务编码 */
    outBizCode?: string;
    /**  上市许可证持有人  */
    permitHolder?: string;
    /** 价格 */
    price?: number;
    /** 最后更新时间 */
    printCount?: number;
    /** 批号 */
    produceCode?: string;
    /**  产地  */
    producingArea?: string;
    /** 生产日期 */
    productionDate?: string;
    /** 销售数量和退货数量 */
    realityQty?: number;
    /**  批准文号  */
    regisTrationNumber?: string;
    /** 退货原因 */
    returnReason?: string;
    /** 架位号 */
    shelfNumber?: string;
    /** 商品编码 */
    skuId?: string;
    /** 规格 */
    skuModel?: string;
    /** 商品名称 */
    skuName?: string;
    /**  0 全部确认  1 多次确认 */
    status?: number;
    /** 主键id(出库单号) */
    stockNoticeId?: string;
    /** 物理仓编码 */
    storeCode?: string;
    /** 物理仓名称 */
    storeName?: string;
    /** (供货企业)供应商编码 */
    supplierId?: string;
    /** (供货企业)供应商名称 */
    supplierName?: string;
    /** 租户编码 */
    tenantId?: string;
    /** 运输方式 */
    transportType?: string;
    /** 运输员/承运人 */
    transporter?: string;
    /**  单位  */
    unit?: string;
    /**  通用名  */
    wareGeneralName?: string;
    /** 库房 */
    warehouseName?: string;
  };

  type BizStockOutPurResultPageQueryVO = {
    /**  出库日期结束时间  */
    createTimeEnd?: string;
    /**  出库日期开始时间  */
    createTimeStart?: string;
    /**  剂型  */
    dosageForm?: string;
    /**  商品名称/拼音/编码  */
    keyword?: string;
    pageQuery?: PageQuery;
    /**  仓库名称  */
    storeCode?: string;
  };

  type BizStockOutPurResultVO = {
    /** 金额 */
    amt?: number;
    /**  出库日期  */
    createTime?: string;
    /**  剂型名称  */
    dosageFormName?: string;
    /** 有效期至 */
    expiredDate?: string;
    /**  类别(GSP分类)  */
    gspCategory?: string;
    /**  类别名称(GSP分类)  */
    gspCategoryName?: string;
    /** 主键 */
    id?: string;
    /** 生产厂家 */
    manufacturer?: string;
    /**  上市许可证持有人  */
    permitHolder?: string;
    /** 单价 */
    price?: number;
    /**  批号  */
    produceCode?: string;
    /**  产地  */
    producingArea?: string;
    /** 生产日期 */
    productionDate?: string;
    /** 退货数量 */
    realityQty?: number;
    /**  批准文号  */
    regisTrationNumber?: string;
    /** 商品编码 */
    skuId?: string;
    /** 规格 */
    skuModel?: string;
    /** 商品名称 */
    skuName?: string;
    /**  物理仓名称  */
    storeName?: string;
    /**  单位  */
    unit?: string;
    /**  通用名  */
    wareGeneralName?: string;
  };

  type BizStockOutRetailSaleResultPageQueryVO = {
    /** 商品条码 */
    barCode?: string;
    /** 出库结束时间 */
    createTimeSaleOutEnd?: string;
    /** 出库开始时间 */
    createTimeSaleOutStart?: string;
    /** 客户名称 */
    cusName?: string;
    /** 订单号 */
    docId?: string;
    /** 商品名称/拼音/编码 */
    keyword?: string;
    pageQuery?: PageQuery;
    /** 店铺ID */
    shopId?: string;
    /** 出库单号 */
    stockResultId?: string;
    /** 发货仓库 */
    storeCode?: string;
  };

  type BizStockOutRetailSaleResultVO = {
    /** 销售金额 */
    amt?: number;
    /** 不合格品 */
    badQty?: number;
    /** 商品条码 */
    barCode?: string;
    /**  出库时间  */
    createTime?: string;
    /** 客户名称 */
    cusName?: string;
    /**  订单号  */
    docId?: string;
    /**  剂型名称  */
    dosageFormName?: string;
    /** 有效期至 */
    expiredDate?: string;
    /**  类别(GSP分类)  */
    gspCategory?: string;
    /**  类别名称(GSP分类)  */
    gspCategoryName?: string;
    /** 主键 */
    id?: string;
    /** 生产厂家 */
    manufacturer?: string;
    /** 待处理品 */
    pendingQty?: number;
    /**  上市许可证持有人  */
    permitHolder?: string;
    /** 平台名称 */
    platformName?: string;
    /** 销售单价 */
    price?: number;
    /**  批号  */
    produceCode?: string;
    /**  产地  */
    producingArea?: string;
    /** 生产日期 */
    productionDate?: string;
    /** 合格品 */
    realityQty?: number;
    /**  批准文号  */
    regisTrationNumber?: string;
    /** 销售数量 */
    saleQty?: number;
    /** 销售员 */
    salesMan?: string;
    /** 店铺名称 */
    shopName?: string;
    /** 商品编码 */
    skuId?: string;
    /** 规格 */
    skuModel?: string;
    /** 商品名称 */
    skuName?: string;
    /** 出库单号 */
    stockResultId?: string;
    /**  发货仓库  */
    storeName?: string;
    /**  单位  */
    unit?: string;
    /**  通用名  */
    wareGeneralName?: string;
  };

  type BizStockOutSaleResultPageQueryVO = {
    /** 商品条码 */
    barCode?: string;
    /** 销售日期结束时间 */
    createTimeEnd?: string;
    /** 销售日期开始时间 */
    createTimeStart?: string;
    /** 客户信息 */
    cusInfo?: string;
    /** 剂型 */
    dosageForm?: string;
    /** 客户集编码 */
    entrustCusCode?: string;
    /** 客户集名称 */
    entrustCusName?: string;
    /** 商品名称/拼音/编码 */
    keyword?: string;
    pageQuery?: PageQuery;
    /** 出库单号/销售单号 */
    stockNoticeId?: string;
    /** 仓库名称 */
    storeCode?: string;
    /** 供应商信息 */
    supplierInfo?: string;
    /** 库房类型 0-合格品仓 1-不合格品仓 2-待处理仓 */
    warehouseType?: number;
  };

  type BizStockOutSaleResultVO = {
    /** 金额 */
    amt?: number;
    /**  销售日期  */
    createTime?: string;
    /**  剂型名称  */
    dosageFormName?: string;
    /** 有效期至 */
    expiredDate?: string;
    /**  类别(GSP分类)  */
    gspCategory?: string;
    /**  类别名称(GSP分类)  */
    gspCategoryName?: string;
    /** 主键 */
    id?: string;
    /** 生产厂家 */
    manufacturer?: string;
    /**  上市许可证持有人  */
    permitHolder?: string;
    /** 单价 */
    price?: number;
    /**  批号  */
    produceCode?: string;
    /**  产地  */
    producingArea?: string;
    /** 生产日期 */
    productionDate?: string;
    /** 数量 */
    realityQty?: number;
    /**  批准文号  */
    regisTrationNumber?: string;
    /** 商品编码 */
    skuId?: string;
    /** 规格 */
    skuModel?: string;
    /** 商品名称 */
    skuName?: string;
    /**  物理仓名称  */
    storeName?: string;
    /**  单位  */
    unit?: string;
    /**  通用名  */
    wareGeneralName?: string;
  };

  type ChannelConfigCreateVO = {
    /** 配置(客户集)名称 */
    configName?: string;
    /** 描述 */
    description?: string;
    /** 明细信息 */
    detail?: ChannelStoreCreateVO[];
  };

  type ChannelConfigInfoVO = {
    /** 配置(客户集)名称 */
    configName?: string;
    /** 单据日期 */
    createTime?: string;
    /** 客户集数量 */
    customerSetQty?: number;
    /** 描述 */
    description?: string;
    /** 对应stock_sku 的客户集编码 */
    id?: string;
    /** 0：生效 1：失效 */
    status?: number;
    /** 状态 0 失效 1 已生效名称 */
    statusName?: string;
    /** 开放物理仓 */
    storeSetText?: string;
    /** 类型 0 临时客户集 1 固定客户集(BC一体预约渠道) */
    type?: number;
    /** 类型 0 临时客户集 1 固定客户集(BC一体预约渠道)名称 */
    typeName?: string;
  };

  type ChannelConfigPageQueryVO = {
    /** 配置(客户集)名称 */
    configName?: string;
    /** 客户信息 */
    cusInfo?: string;
    /** 描述 */
    description?: string;
    /** 对应stock_sku 的客户集编码 */
    id?: string;
    /** 结束时间 */
    maxCreateTime?: string;
    /** 开始时间 */
    minCreateTime?: string;
    pageQuery?: PageQuery;
    /** 状态 0：生效 1：失效 */
    status?: number;
    /** 仓库编码 */
    storeCode?: string;
  };

  type ChannelConfigStartSwitchVO = {
    /**  单据编号  */
    id?: string;
    /**  0：生效 1：失效  */
    status?: number;
  };

  type ChannelConfigVO = {
    /** 配置(客户集)名称 */
    configName?: string;
    /** 描述 */
    description?: string;
    /** 主键 */
    id?: string;
    /** 状态 0 失效 1 已生效 */
    status?: number;
    /** 仓库信息 */
    storeList?: ChannelStoreCreateVO[];
  };

  type ChannelConfigWithTempSaveVO = {
    /** 客户集明细 */
    customerList?: ChannelCustomerCreateVO[];
  };

  type ChannelCustomerCreateVO = {
    /** 客户编码 */
    cusId?: string;
    /** 客户名称 */
    cusName?: string;
    id?: string;
  };

  type ChannelCustomerInfoVO = {
    /** 市 */
    city?: string;
    /** 客户编码 */
    cusId?: string;
    /** 客户名称 */
    cusName?: string;
    /** 区/县 */
    district?: string;
    /** 主键 */
    id?: string;
    /** 0: 停用 1：启用 */
    isValid?: number;
    /** 省 */
    province?: string;
    /** 纳税人识别号/税号 */
    taxPayerCode?: string;
  };

  type ChannelCustomerQueryVO = {
    /** 配置(客户集)id */
    configId?: string;
    /** 客户信息 */
    cus?: string;
    /** 客户编码 */
    cusId?: string;
    /** 客户名称 */
    cusName?: string;
    pageQuery?: PageQuery;
  };

  type ChannelCustomerSaveVO = {
    /** 客户集明细 */
    customerList?: ChannelCustomerCreateVO[];
    /** 客户集id */
    id?: string;
  };

  type ChannelCustomerWithTempDTO = {
    /** 客户编码 */
    cusId?: string;
    /** 客户名称 */
    cusName?: string;
    /** 纳税人识别号/税号 */
    taxPayerCode?: string;
  };

  type ChannelStoreCreateVO = {
    /** id */
    id?: string;
    /** 仓库编码 */
    storeCode?: string;
    /** 仓库名称 */
    storeName?: string;
  };

  type CityReportFailPageQueryVO = {
    /**  截止处理日期  */
    breakageTimeEnd?: string;
    /**  开始处理日期  */
    breakageTimeSta?: string;
    /**  主键id集合  */
    ids?: string[];
    pageQuery?: PageQuery;
    /**  商品-医疗器械注册证号  */
    regisTrationNumber?: string;
    /**  商品信息  */
    skuKey?: string;
  };

  type CityReportFailVO = {
    /**  处理原因  */
    breakageReason?: string;
    /**  处理日期  */
    breakageTime?: string;
    /**  处理方式  */
    breakageWay?: string;
    /**  有效期  */
    dueDate?: string;
    /**  id  */
    id?: string;
    /**  生产企业名称  */
    manufacturer?: string;
    /**  生产批号  */
    produceCode?: string;
    /**  生产日期  */
    produceDate?: string;
    /**  生产企业许可证号  */
    productionBusinessLicense?: string;
    /**  处理数量  */
    quantity?: number;
    /**  商品-医疗器械注册证号  */
    regisTrationNumber?: string;
    /**  备注  */
    remark?: string;
    /**  序列号（机身号）  */
    serialNumber?: string;
    /**  商品编码  */
    skuId?: string;
    /**  规格型号  */
    skuModel?: string;
    /**  产品名称  */
    skuName?: string;
    /**  拼音  */
    skuPinyin?: string;
    /**  单位  */
    unit?: string;
    /**  单位名称  */
    unitName?: string;
  };

  type CityReportFirstStockPageQueryVO = {
    /**  主键ids集合  */
    ids?: string[];
    pageQuery?: PageQuery;
    /**  商品-医疗器械注册证号  */
    regisTrationNumber?: string;
    /**  商品信息  */
    skuKey?: string;
  };

  type CityReportFirstStockVO = {
    /**  有效期  */
    expiredDate?: string;
    /**  经营分类  */
    gspCategoryName?: string;
    /**  主键id  */
    id?: string;
    /**  生产批号  */
    produceCode?: string;
    /**  生产日期  */
    productionDate?: string;
    /**  库存数量  */
    qty?: number;
    /**  商品-医疗器械注册证号  */
    regisTrationNumber?: string;
    /**  备注  */
    remark?: string;
    /**  序列号（机身号）  */
    serialNumber?: string;
    /**  规格型号  */
    skuModel?: string;
    /**  产品名称  */
    skuName?: string;
    /**  单位  */
    unit?: string;
  };

  type CityReportInstrumentSaleVO = {
    /**  购货单位所属地区  */
    cusAddr?: string;
    /**   客户名称（购货单位名称）  */
    cusName?: string;
    /**  有效日期  */
    expiredDate?: string;
    /**  购货单位许可证号  */
    licenseCode?: string;
    /**  生产厂家（生产企业名称）  */
    manufacturer?: string;
    /**  销售单号  */
    orderId?: string;
    /**  生产批号  */
    produceCode?: string;
    /**  产品说明  */
    productDescription?: string;
    /**  生产日期  */
    productionDate?: string;
    /**  生产企业许可证号  */
    productionLicense?: string;
    /**  是否有合格证明  */
    qualificationCertification?: string;
    /**  销售数量  */
    realityQty?: string;
    /**  批准文号/医疗器械注册证号  */
    regisTrationNumber?: string;
    /**  备注  */
    remark?: string;
    /**  销售日期  */
    saleTime?: string;
    /**  序列号(机身号)  */
    serialNo?: string;
    /**  商品编码  */
    skuId?: string;
    /**  规格  */
    skuModel?: string;
    /**  商品名称  */
    skuName?: string;
    /**  灭菌批号  */
    sterilizationCode?: string;
    /**  灭菌日期  */
    sterilizationDate?: string;
    /**  灭菌有效期至  */
    sterilizationExpiredDate?: string;
    /**  购货单位组织机构代码  */
    taxPayerCode?: string;
    /**  租户id  */
    tenantId?: string;
    /**  包装单位  */
    unitName?: string;
  };

  type CityReportRecheckPageQueryVO = {
    /**  id集合  */
    ids?: string[];
    pageQuery?: PageQuery;
    /**  截止验收日期  */
    recheckDateEnd?: string;
    /**  开始验收日期  */
    recheckDateSta?: string;
    /**  验收单号  */
    recheckNo?: string;
    /**  医疗器械注册证号/批准文号  */
    regisTrationNumber?: string;
    /**  商品信息  */
    skuKey?: string;
    /**  药监码/药品编码  */
    supervisionCode?: string;
    /**  供应商key  */
    supplierKey?: string;
    /** 通用名 */
    wareGeneralName?: string;
  };

  type CityReportRecheckVO = {
    /**  实际数量  */
    checkQty?: number;
    /**  产品有效期  */
    expiredTime?: string;
    /**  说明  */
    explain?: string;
    /**  主键id  */
    id?: string;
    /**  合格证明  */
    isQualified?: string;
    /**  厂家（生产企业名称）  */
    manufacturer?: string;
    /** 医疗器械许可证代码 */
    medicalDevicesLicenseCode?: string;
    /** 组织机构代码 */
    organizationCode?: string;
    /**  生产批号  */
    produceCode?: string;
    /**  生产企业许可证号  */
    productionBusinessLicense?: string;
    /**  生产日期  */
    productionTime?: string;
    /**  验收员  */
    recheckBy?: string;
    /**  验收日期  */
    recheckDate?: string;
    /**  验收单号  */
    recheckNo?: string;
    /**  验收结论 0不合格 1合格 2部分合格  */
    recheckResult?: string;
    /**  医疗器械注册证号  */
    regisTrationNumber?: string;
    /** 注册地区(省市区) */
    registeredArea?: string;
    /**  备注  */
    remark?: string;
    /**  序列号(机身号)  */
    serialNumber?: string;
    /**  商品编码  */
    skuId?: string;
    /**  规格  */
    skuModel?: string;
    /**  商品名称  */
    skuName?: string;
    /**  灭菌日期  */
    sterilizeDate?: string;
    /**  灭菌批号  */
    sterilizeNo?: string;
    /**  灭菌有效期至  */
    sterilizePeriodDate?: string;
    /**  供应商编码  */
    supplierCode?: string;
    /**  供应商  */
    supplierName?: string;
    /**  单位  */
    unit?: string;
  };

  type CityReportSalePageQueryVO = {
    /**  客户信息/购进单位信息  */
    cusKey?: string;
    /**  销售单号  */
    docId?: string;
    /** ids */
    ids?: number[];
    pageQuery?: PageQuery;
    /**  生产批号  */
    produceCode?: string;
    /**  批准文号/注册号  */
    regisTrationNumber?: string;
    /**  截止销售日期  */
    saleTimeEnd?: string;
    /**  开始销售日期  */
    saleTimeSta?: string;
    /** 商品信息 */
    skuKey?: string;
    /** 机构类型 0仓库 1门店 */
    storeType?: number;
    /**  药监码/药品编码  */
    supervisionCode?: string;
    /**  通用名  */
    wareGeneralName?: string;
  };

  type CityReportSaleVO = {
    /**  创建时间  */
    createTime?: string;
    /**  客户id  */
    cusId?: string;
    /**  客户名称  */
    cusName?: string;
    /** 销售单号 */
    docId?: string;
    /**  有效日期  */
    expiredDate?: string;
    /**  id  */
    id?: string;
    /**  生产企业名称  */
    manufacturer?: string;
    /**  生产批号  */
    produceCode?: string;
    /**  生产日期  */
    productionDate?: string;
    /**  销售数量  */
    realityQty?: string;
    /**  批准文号  */
    regisTrationNumber?: string;
    /**  备注  */
    remark?: string;
    /**  销售日期  */
    saleTime?: string;
    /**  商品编码  */
    skuId?: string;
    /**  商品名称  */
    skuName?: string;
    /**  药监码/药品编码  */
    supervisionCode?: string;
    /**  单位  */
    unit?: string;
    /**  通用名  */
    wareGeneralName?: string;
  };

  type CityReportStockPageQueryVO = {
    /**  主键id集合  */
    ids?: string[];
    /**  生产企业名称  */
    manufacturer?: string;
    pageQuery?: PageQuery;
    /**  生产批号  */
    produceCode?: string;
    /**  生产企业许可证号  */
    productionLicense?: string;
    /**  医疗器械注册证号/批准文号  */
    regisTrationNumber?: string;
    /**  医疗器械序列号  */
    serialNumber?: string;
    /**  商品编码/名称/拼音  */
    skuKey?: string;
    /**  截止盘点日期  */
    snapshotDateEnd?: string;
    /**  开始库存盘点日期  */
    snapshotDateSta?: string;
    /**  药品编码 */
    supervisionCode?: string;
    /**  通用名  */
    wareGeneralName?: string;
  };

  type CityReportStockVO = {
    /**  创建时间  */
    createTime?: string;
    /**  数据类型  */
    dataType?: string;
    /**  产品有效期  */
    expirationDate?: string;
    /**  主键id  */
    id?: string;
    /**  生产企业名称  */
    manufacturer?: string;
    /**  不合格数量  */
    noPassQty?: number;
    /**  合格数量  */
    passQty?: number;
    /**  生产批号  */
    produceCode?: string;
    /**  生产企业许可证号  */
    productionBusinessLicense?: string;
    /**  生产日期  */
    productionDate?: string;
    /**  库存数量  */
    qty?: number;
    /**  医疗器械注册证号  */
    regisTrationNumber?: string;
    /**  备注  */
    remark?: string;
    /**  医疗器械序列号  */
    serialNumber?: string;
    /**  商品编码  */
    skuId?: string;
    /**  规格型号  */
    skuModel?: string;
    /**  产品名称  */
    skuName?: string;
    /**  库存盘点日期  */
    snapshotDate?: string;
    /**  最小包装单位  */
    unit?: string;
    /**  修改时间  */
    updateTime?: string;
  };

  type ClientComplainRegisterPageQueryVO = {
    /**  受理人  */
    acceptor?: string;
    /**  受理日期  */
    acceptorTime?: string;
    /**  被投诉单位  */
    complainCompany?: string;
    /**  投诉者姓名  */
    complainantName?: string;
    /** 截止单据日期  */
    createTimeEnd?: string;
    /** 开始单据日期  */
    createTimeSta?: string;
    /**  部门  */
    department?: string;
    /**  部门id  */
    departmentId?: string;
    /**  主键id/单据编号集合  */
    ids?: number[];
    /**  最终日期  */
    lastTime?: string;
    pageQuery?: PageQuery;
    /**  联系电话  */
    phone?: string;
    /**  质监处理日期  */
    qualityMonitoringDisposeTime?: string;
    /**  质监负责人  */
    qualityMonitoringPrincipal?: string;
    /**  性别 0-女 1-男  */
    sex?: number;
    /**  班组负责人  */
    teamPrincipal?: string;
  };

  type ClientComplainRegisterVO = {
    /**  受理人  */
    acceptor: string;
    /**  受理人id  */
    acceptorId: string;
    /**  受理日期  */
    acceptorTime?: string;
    /**  单位地址-详细地址  */
    address: string;
    /**  年龄  */
    age?: number;
    /**  仲裁日期  */
    arbitrationTime?: string;
    /**  单位地址-市  */
    city: string;
    /**  单位地址-市编码  */
    cityCode: string;
    /**  公司最终处理意见  */
    companyLastIdea?: string;
    /**  被投诉单位  */
    complainCompany: string;
    /**  投诉内容  */
    complainContent: string;
    /**  投诉者名称  */
    complainantName: string;
    /**  创建时间/单据日期  */
    createTime?: string;
    /**  部门  */
    department: string;
    /**  部门id  */
    departmentId: string;
    /**  单位地址-区/县  */
    district: string;
    /**  单位地址-区/县编码  */
    districtCode: string;
    /**  分公司处理日期  */
    filialeDisposeTime?: string;
    /**  分公司意见  */
    filialeIdea?: string;
    /**  分公负责人  */
    filialePrincipal?: string;
    /**  分公负责人Id  */
    filialePrincipalId?: string;
    /**  单据编号  */
    id?: string;
    /**  最终日期  */
    lastTime?: string;
    /**  上级部门仲裁意见  */
    parentBusinessIdea?: string;
    /**  联系电话  */
    phone: string;
    /**  单位地址-省  */
    province: string;
    /**  单位地址-省编码  */
    provinceCode: string;
    /**  质监处理日期  */
    qualityMonitoringDisposeTime?: string;
    /**  质监中心意见  */
    qualityMonitoringIdea?: string;
    /**  质监负责人  */
    qualityMonitoringPrincipal?: string;
    /**  质监负责人ID  */
    qualityMonitoringPrincipalId?: string;
    /**  性别 0-女 1-男  */
    sex: number;
    /**  班组处理日期  */
    teamDisposeTime?: string;
    /**  班组意见  */
    teamIdea?: string;
    /**  班组负责人  */
    teamPrincipal?: string;
    /**  班组负责人Id  */
    teamPrincipalId?: string;
  };

  type DeliveryOutDetailVO = {
    /** 审核时间 */
    createTime?: string;
    /** 申请单号 */
    docId?: string;
    /** 出库单号 */
    id?: string;
    /** 审核人 */
    operator?: string;
    /** 配送出库商品 */
    outStockWares?: DeliveryOutWareVO[];
    /** 门店id */
    shopId?: string;
    /** 申请门店 */
    shopName?: string;
    /** 制单确认状态 */
    status?: number;
    /** 单据状态 */
    statusText?: string;
    /** 通知单号 */
    stockNoticeId?: string;
    /** 仓库编号 */
    storeCode?: string;
    /** 仓库名称 */
    storeName?: string;
  };

  type DeliveryOutPageQueryVO = {
    /** 申请单号 */
    docId?: string;
    /** 结束审核时间 */
    endCreateTime?: string;
    /** 出库单号 */
    id?: string;
    pageQuery?: PageQuery;
    /** 申请门店id */
    shopId?: string;
    /** 商品名称/拼音码/编码 */
    skuInfo?: string;
    /** 开始审核时间 */
    startCreateTime?: string;
    /** 通知单号 */
    stockNoticeId?: string;
    /** 仓库编号 */
    storeCode?: string;
  };

  type DeliveryOutVO = {
    /** 审核时间 */
    createTime?: string;
    /** 申请单号 */
    docId?: string;
    /** 出库单号 */
    id?: string;
    /** 审核人 */
    operator?: string;
    /** 门店id */
    shopId?: string;
    /** 申请门店 */
    shopName?: string;
    /** 制单确认状态 */
    status?: number;
    /** 单据状态 */
    statusText?: string;
    /** 通知单号 */
    stockNoticeId?: string;
    /** 仓库编号 */
    storeCode?: string;
    /** 仓库名称 */
    storeName?: string;
  };

  type DeliveryOutWareVO = {
    /** 出库金额 */
    amt?: number;
    /** 批次号 */
    batchNo?: string;
    /** 有效日期 */
    expiredDate?: string;
    /** 生产产家 */
    manufacturer?: string;
    /** 配送单价 */
    price?: number;
    /** 生产批号 */
    produceCode?: string;
    /** 生产日期 */
    productionDate?: string;
    /** 出库数量 */
    realityQty?: number;
    /** 商品编号 */
    skuId?: string;
    /** 商品规格 */
    skuModel?: string;
    /** 商品名称 */
    skuName?: string;
    /** 单位 */
    unit?: string;
  };

  type DeliveryStockInDetailVO = {
    /** 审核时间 */
    createTime?: string;
    /** 申请单号 */
    docId?: string;
    /** 入库单号 */
    id?: string;
    /** 审核人 */
    operator?: string;
    /** 门店id */
    shopId?: string;
    /** 申请门店 */
    shopName?: string;
    /** 制单确认状态 */
    status?: number;
    /** 单据状态 */
    statusText?: string;
    /** 配送入库商品 */
    stockInWares?: DeliveryStockInWareVO[];
    /** 通知单号 */
    stockNoticeId?: string;
    /** 仓库编号 */
    storeCode?: string;
    /** 仓库名称 */
    storeName?: string;
  };

  type DeliveryStockInPageQueryVO = {
    /** 申请单号 */
    docId?: string;
    /** 结束审核时间 */
    endCreateTime?: string;
    /** 入库单号 */
    id?: string;
    pageQuery?: PageQuery;
    /** 申请门店id */
    shopId?: string;
    /** 商品名称/拼音码/编码 */
    skuInfo?: string;
    /** 开始审核时间 */
    startCreateTime?: string;
    /** 通知单号 */
    stockNoticeId?: string;
    /** 仓库编号 */
    storeCode?: string;
  };

  type DeliveryStockInVO = {
    /** 审核时间 */
    createTime?: string;
    /** 申请单号 */
    docId?: string;
    /** 入库单号 */
    id?: string;
    /** 审核人 */
    operator?: string;
    /** 门店id */
    shopId?: string;
    /** 申请门店 */
    shopName?: string;
    /** 制单确认状态 */
    status?: number;
    /** 单据状态 */
    statusText?: string;
    /** 通知单号 */
    stockNoticeId?: string;
    /** 仓库编号 */
    storeCode?: string;
    /** 仓库名称 */
    storeName?: string;
  };

  type DeliveryStockInWareVO = {
    /** 配送金额 */
    amt?: number;
    /** 不合格品数 */
    badQty?: number;
    /** 批次号 */
    batchNo?: string;
    /** 有效日期 */
    expiredDate?: string;
    /** 合格品数 */
    goodQty?: number;
    id?: string;
    /** 入库数量 */
    inQty?: number;
    /** 生产产家 */
    manufacturer?: string;
    /** 待处理数 */
    pendingQty?: number;
    /** 配送单价 */
    price?: number;
    /** 生产批号 */
    produceCode?: string;
    /** 生产日期 */
    productionDate?: string;
    /** 商品编号 */
    skuId?: string;
    /** 商品规格 */
    skuModel?: string;
    /** 商品名称 */
    skuName?: string;
    /** 单位 */
    unit?: string;
  };

  type DocumentFileVO = {
    /** 主键 */
    id?: number;
    /** 名字 */
    name?: string;
    /** 路径 */
    path?: string;
  };

  type DrugCityReportRecheckVO = {
    /**  实际数量(验收数量)  */
    checkQty?: number;
    /**  产品有效期  */
    expiredTime?: string;
    /**  主键id  */
    id?: string;
    /**  厂家（生产企业名称）  */
    manufacturer?: string;
    /**  生产批号  */
    produceCode?: string;
    /**  生产日期  */
    productionTime?: string;
    /**  验收员  */
    recheckBy?: string;
    /**  验收日期  */
    recheckDate?: string;
    /**  验收单号  */
    recheckNo?: string;
    /**  验收结论 不合格,合格,部分合格  */
    recheckResult?: string;
    /**  批准文号  */
    regisTrationNumber?: string;
    /**  备注  */
    remark?: string;
    /**  商品编码  */
    skuId?: string;
    /**  规格  */
    skuModel?: string;
    /**  商品名称  */
    skuName?: string;
    /** 药品编码 */
    supervisionCode?: string;
    /**  供应商编码  */
    supplierCode?: string;
    /**  供应商（供货单位）  */
    supplierName?: string;
    /**  单位（最小包装单位）  */
    unit?: string;
    /** 通用名 */
    wareGeneralName?: string;
  };

  type DrugCityReportStockVO = {
    /**  创建时间  */
    createTime?: string;
    /**  产品有效期  */
    expirationDate?: string;
    /**  主键id  */
    id?: string;
    /**  生产企业名称  */
    manufacturer?: string;
    /**  生产批号  */
    produceCode?: string;
    /**  生产日期  */
    productionDate?: string;
    /**  库存数量  */
    qty?: number;
    /**  批准文号  */
    regisTrationNumber?: string;
    /**  备注  */
    remark?: string;
    /**  商品编码  */
    skuId?: string;
    /**  产品名称  */
    skuName?: string;
    /**  库存盘点日期  */
    snapshotDate?: string;
    /**  药品编码  */
    supervisionCode?: string;
    /**  最小包装单位  */
    unit?: string;
    /**  修改时间  */
    updateTime?: string;
    /**  通用名  */
    wareGeneralName?: string;
  };

  type ErpStockChangeOrderInfoVO = {
    /**  制单时间  */
    createTime?: string;
    /**  单据编号  */
    id?: string;
    /**  商品信息  */
    itemList?: ErpStockChangeOrderItemVO[];
    /**  外部单号  */
    orderCode?: string;
    /**  单据状态,0-未审核,1-已审核,2-已取消  */
    status?: number;
    /**  单据状态名称 */
    statusName?: string;
    /**  仓库名称  */
    storeName?: string;
    /**  操作日志  */
    traceLogList?: TraceLogVO[];
  };

  type ErpStockChangeOrderItemVO = {
    /**  批次  */
    batchCode?: string;
    /** 箱号 */
    containerNo?: string;
    /**  明细id  */
    detailId?: string;
    /**  剂型名称  */
    dosageFormName?: string;
    /**  有效期至  */
    dueDate?: string;
    /**  from库位  */
    from?: string;
    /**  类别(GSP分类)  */
    gspCategory?: string;
    /**  类别名称(GSP分类)  */
    gspCategoryName?: string;
    /** 批次包装 */
    lotatt07?: string;
    /** 生产厂家 */
    manufacturer?: string;
    /** 备注 */
    notes?: string;
    /**  上市许可证持有人  */
    permitHolder?: string;
    /** 平台 */
    platformId?: string;
    /**  生产批号  */
    produceCode?: string;
    /**  生产日期  */
    produceDate?: string;
    /**  产地  */
    producingArea?: string;
    /**  调整数量  */
    quantity?: number;
    /** 移库原因 */
    reasonDescr?: string;
    /**  批准文号  */
    regisTrationNumber?: string;
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
    /**  to库位  */
    to?: string;
    /**  单位  */
    unit?: string;
    /**  通用名  */
    wareGeneralName?: string;
    /** 入库日期 */
    warehouseTime?: string;
  };

  type ErpStockChangeOrderPageQueryVO = {
    /**  制单结束时间  */
    createTimeEnd?: string;
    /**  制单开始时间  */
    createTimeStart?: string;
    /**  单据编号  */
    id?: string;
    /**  id列表  */
    ids?: string[];
    /**  外部单号  */
    orderCode?: string;
    pageQuery?: PageQuery;
    /**  商品编码  */
    skuId?: string;
    /**  单据状态,0-未审核,1-已审核,2-已取消  */
    status?: number;
    /**  仓库名称  */
    storeCode?: string;
  };

  type ErpStockChangeOrderVO = {
    /**  制单时间  */
    createTime?: string;
    /**  单据编号  */
    id?: string;
    /**  外部单号  */
    orderCode?: string;
    /**  单据状态,0-未审核,1-已审核,2-已取消  */
    status?: number;
    /**  单据状态名称 */
    statusName?: string;
    /**  仓库名称  */
    storeName?: string;
  };

  type GatherPassFeedbackPageQueryVO = {
    /**  收集人员  */
    collector?: string;
    /**  收集人员Id  */
    collectorId?: string;
    /**  截止单据日期  */
    createTimeEnd?: string;
    /**  开始单据日期  */
    createTimeSta?: string;
    /**  部门  */
    department?: string;
    /**  部门id  */
    departmentId?: string;
    /**  收集时间  */
    gatherTime?: string;
    /**  信息等级  */
    grade?: string;
    /** 单据编号集合 */
    ids?: number[];
    /**  信息名称  */
    name?: string;
    pageQuery?: PageQuery;
    /**  记录时间  */
    recordTime?: string;
    /**  记录人  */
    recorder?: string;
    /**  记录人Id  */
    recorderId?: string;
    /**  信息来源  */
    source?: string;
  };

  type GatherPassFeedbackVO = {
    /**  接收部门及意见  */
    acceptDepartmentIdea?: string;
    /**  接收部门签字  */
    acceptDepartmentSign?: string;
    /**  接收部门签字人Id  */
    acceptDepartmentSignId?: string;
    /**  接收部门签字日期  */
    acceptDepartmentSignTime?: string;
    /**  收集人员  */
    collector: string;
    /**  收集人员Id  */
    collectorId: string;
    /**  单据日期/创建时间  */
    createTime?: string;
    /**  部门  */
    department: string;
    /**  部门id  */
    departmentId: string;
    /**  信息反馈结果  */
    feedbackResult?: string;
    /**  收集日期 */
    gatherTime: string;
    /**  信息等级  */
    grade?: string;
    /** 单据编码 */
    id?: string;
    /**  信息主体  */
    mainBody?: string;
    /**  信息名称  */
    name: string;
    /**  传递部门及意见  */
    passDepartmentIdea?: string;
    /**  传递部门签字  */
    passDepartmentSign?: string;
    /**  传递部门签字人Id  */
    passDepartmentSignId?: string;
    /**  传递部门签字日期 */
    passDepartmentSignTime?: string;
    /**  记录日期  */
    recordTime?: string;
    /**  记录人  */
    recorder: string;
    /**  记录人Id  */
    recorderId: string;
    /**  信息来源  */
    source?: string;
  };

  type GspBhgOrderDetailItemPageQueryVO = {
    /**  商品条码 */
    barCode?: string;
    /**  结束处理时间  */
    dealTimeEnd?: string;
    /**  开始处理时间  */
    dealTimeStart?: string;
    pageQuery?: PageQuery;
    /**  商品信息 名称/拼音码/编码 */
    skuInfo?: string;
    /**  仓库编码 */
    storeCode?: string;
  };

  type GspBhgOrderPageQueryVO = {
    /**  本位码  */
    baseCode?: string;
    /**  处理结果， 0：文件解析或数字签名验证失，1：处理成功，2：文件解析或数字签名验证失败 */
    dealResult?: string;
    /**  处理状态， 0 表示未处理； 1 表示处理完成  */
    dealStatus?: number;
    /**  处理时间  */
    dealTimeEnd?: string;
    /**  处理时间  */
    dealTimeStart?: string;
    /**  查询结束时间  */
    endTime?: string;
    /**  回传文件ID  */
    fileId?: string;
    /**  查询id集  */
    ids?: number[];
    pageQuery?: PageQuery;
    /**  生产批号  */
    produceCode?: string;
    /**  上报状态 0-未上报 1-已上报  */
    reportStatus?: number;
    /**  上报时间  */
    reportTimeEnd?: string;
    /**  上报时间  */
    reportTimeStart?: string;
    /**  查询开始时间  */
    startTime?: string;
  };

  type GspBhgOrderVO = {
    /**  本位码  */
    baseCode?: string;
    /**  处理结果描述，当 dealResult 不为 1 时返回错误提示  */
    dealDesc?: string;
    /**  处理结果代码 */
    dealResult?: string;
    /**  处理状态， 0 表示未处理； 1 表示处理完成  */
    dealStatus?: number;
    /**  处理完成时间  */
    dealTime?: string;
    /**  不合格原因  */
    destroyReason?: string;
    /**  wms销毁结果,1:成功、2：失败  */
    destroyResult?: number;
    /**  处理时间  */
    destroyTime?: string;
    /**  处理方式  */
    destroyWay?: string;
    /**  失效日期  */
    expirationDate?: string;
    /**  回传文件ID  */
    fileId?: string;
    id?: string;
    /**  其他补充说明  */
    other?: string;
    /**  生产批号  */
    produceCode?: string;
    /**  生产日期  */
    productionDate?: string;
    /**  不合格数量  */
    qty?: number;
    /**  上报状态 0：未上报 1：已上报  */
    reportStatus?: number;
    /**  上报时间  */
    reportTime?: string;
    /**  包装规格  */
    skuModel?: string;
    /**  来源表ID  */
    sourceId?: string;
    /**  租户编码  */
    tenantId?: string;
  };

  type GspBizReportBreakageDetailItemPageQueryVO = {
    /**  外部单号  */
    adjustBizKey?: string;
    /**  商品条码  */
    barCode?: string;
    /**  报损时间  */
    breakageTimeEnd?: string;
    /**  报损时间  */
    breakageTimeStart?: string;
    /**  单据时间  */
    createTimeEnd?: string;
    /**  单据时间  */
    createTimeStart?: string;
    /**  报损类型: 701 盘点出库（盘亏）800 不合格报损  */
    orderType?: number;
    pageQuery?: PageQuery;
    /**  批准文号  */
    regisTrationNumber?: string;
    /**  单据编号  */
    reportBreakageId?: string;
    /**  商品名称/拼音码/编码  */
    skuInfo?: string;
    /**  仓库编码  */
    storeCode?: string;
    /**  通用名称  */
    wareGeneralName?: string;
  };

  type GspBizReportBreakageDetailItemVO = {
    /**  外部单号  */
    adjustBizKey?: string;
    /**  条码  */
    barCode?: string;
    /**  中台批次号 */
    batchCode?: string;
    /**  批次  */
    batchNo?: string;
    /**  申请人 */
    breakageBy?: string;
    /**  报损原因 */
    breakageReason?: string;
    /**  申请时间 */
    breakageTime?: string;
    /**  单价 */
    costPrice?: number;
    /**  单据时间/创建日期  */
    createTime?: string;
    /**  处理意见  */
    dealSuggestion?: string;
    /**  药品分类  */
    drugCategoryName?: string;
    /**  有效期至 */
    dueDate?: string;
    /**  经营范围  */
    gspCategory?: string;
    /**  id  */
    id?: string;
    /**  库存类型 (1：正品 101：残次 201：待处理) 备注（华源专用：瑕疵：401、临期：501） */
    inventoryType?: number;
    inventoryTypeName?: string;
    /**  商品ID  */
    itemId?: string;
    /**  厂家  */
    manufacturer?: string;
    /**  报损类型：701 盘点出库（盘亏）800 不合格报损  */
    orderType?: number;
    orderTypeName?: string;
    /**  来源单号  */
    outBizCode?: string;
    /**  上市许可证持有人  */
    permitHolder?: string;
    /**  生产批号 */
    produceCode?: string;
    /**  生产日期 */
    produceDate?: string;
    /**  产地  */
    producingArea?: string;
    /**  PO号 */
    purchaseOrderCode?: string;
    /**  商品数量 */
    quantity?: number;
    /**  批准文号  */
    regisTrationNumber?: string;
    /**  备注 */
    remark?: string;
    /**  单据编号  */
    reportBreakageId?: string;
    /**  sku规格  */
    skuModel?: string;
    /**  商品名称  */
    skuName?: string;
    /**  商品拼音  */
    skuPinyin?: string;
    /**  仓库编码  */
    storeCode?: string;
    /**  仓库名称  */
    storeName?: string;
    /**  外部供应商编码 */
    supplierCode?: string;
    /**  金额 */
    taxAmount?: number;
    /**  单位  */
    unit?: string;
    /**  更新日期  */
    updateTime?: string;
    /**  通用名称  */
    wareGeneralName?: string;
  };

  type GspBizReportOverflowDetailItemPageQueryVO = {
    /**  外部单号  */
    adjustBizKey?: string;
    /**  报溢时间  */
    operateTimeEnd?: string;
    /**  报溢时间  */
    operateTimeStart?: string;
    /**  报溢类型：702 盘点入库（盘盈）  */
    orderType?: number;
    pageQuery?: PageQuery;
    /**  批准文号  */
    regisTrationNumber?: string;
    /**  单据编号  */
    reportOverflowId?: string;
    /**  商品名称/拼音码/编码  */
    skuInfo?: string;
    /**  仓库编码  */
    storeCode?: string;
    /**  通用名称  */
    wareGeneralName?: string;
  };

  type GspBizReportOverflowDetailItemVO = {
    /**  外部单号  */
    adjustBizKey?: string;
    /**  金额 */
    amt?: number;
    /**  批次号 */
    batchCode?: string;
    /** 申请人 */
    createBy?: string;
    /**  创建时间 */
    createTime?: string;
    /**  有效期至 */
    dueDate?: string;
    /**  经营范围  */
    gspCategory?: string;
    /**  id  */
    id?: string;
    /**  库存类型 (1：正品 101：残次 201：待处理) 备注（华源专用：瑕疵：401、临期：501） */
    inventoryType?: number;
    inventoryTypeName?: string;
    /**  商品ID  */
    itemId?: string;
    /**  厂家  */
    manufacturer?: string;
    /**  报溢时间  */
    operateTime?: string;
    /**  报溢类型：702 盘点入库（盘盈）  */
    orderType?: number;
    orderTypeName?: string;
    /**  来源单号  */
    outBizCode?: string;
    /**  上市许可证持有人  */
    permitHolder?: string;
    /**  生产批号 */
    produceCode?: string;
    /**  生产日期 */
    produceDate?: string;
    /**  产地  */
    producingArea?: string;
    /**  PO号 */
    purchaseOrderCode?: string;
    /**  单价 */
    purchasePrice?: number;
    /**  商品数量 */
    quantity?: number;
    /**  批准文号  */
    regisTrationNumber?: string;
    /**  备注 */
    remark?: string;
    /**  单据编号  */
    reportOverflowId?: string;
    /**  报溢原因 */
    reportReason?: string;
    /**  sku规格  */
    skuModel?: string;
    /**  商品名称  */
    skuName?: string;
    /**  商品拼音  */
    skuPinyin?: string;
    /**  仓库编码  */
    storeCode?: string;
    /**  仓库名称  */
    storeName?: string;
    /**  外部供应商编码 */
    supplierCode?: string;
    /**  更新时间 */
    updateTime?: string;
    /**  通用名称  */
    wareGeneralName?: string;
  };

  type GspCheckResultVO = {
    /** 单据编码 gspType=1-采购入库单号 2-销售单号 3-销退入库单号 4-采退出库单号 5-生产批号 6报损单号 */
    billCode?: string;
    /** 描述 */
    description?: string;
    /** 业务类型 1-采购入库 2-销售出库 3-销退入库 4-采退出库 5-批号库存 6-不合格品销退 7-零售出库 8-零售退货入库 9-损毁出库 */
    gspType?: number;
    /**  生产批号  */
    produceCode?: string;
    /** 商品编码 */
    skuId?: string;
    /** 本位码 */
    standardCode?: string;
  };

  type GspDealResultVO = {
    /**  处理结果描述，当 dealResult 不为 1 时返回错误提示  */
    dealDesc?: string;
    /**  处理结果代码  */
    dealResult?: string;
    /**  处理状态，0 表示未处理；1 表示处理完成  */
    dealStatus?: number;
    /**  处理完成时间  */
    dealTime?: string;
    /**  文件唯一标识  */
    fileId: string;
    /**  主键id集合  */
    ids: number[];
    /**  补充说明  */
    other?: string;
  };

  type GspDeliveryReturnStockInRecordPageQueryVO = {
    /**  经营范围  */
    gspCategory?: string;
    /**  通知单号  */
    orderCode?: string;
    /**  入库时间  */
    orderConfirmTimeEnd?: string;
    /**  入库时间  */
    orderConfirmTimeStart?: string;
    pageQuery?: PageQuery;
    /**  批准文号  */
    regisTrationNumber?: string;
    /**  退货单号  */
    serviceId?: string;
    /**  门店名称  */
    shopName?: string;
    /**  商品名称/拼音码/编码  */
    skuInfo?: string;
    /**  入库单号  */
    stockInId?: string;
    /**  仓库编码  */
    storeCode?: string;
    /**  通用名称  */
    wareGeneralName?: string;
  };

  type GspDeliveryReturnStockInRecordVO = {
    /**  金额  */
    amt?: number;
    /**  创建时间  */
    createTime?: string;
    /**  有效日期至  */
    expiredDate?: string;
    /**  经营范围  */
    gspCategory?: string;
    /**  经营范围名称  */
    gspCategoryName?: string;
    /**  id  */
    id?: string;
    /**  厂家  */
    manufacturer?: string;
    /**  通知单号  */
    orderCode?: string;
    /**  入库时间  */
    orderConfirmTime?: string;
    /**  上市许可证持有人  */
    permitHolder?: string;
    /**  单价  */
    price?: number;
    /**  批号  */
    produceCode?: string;
    /**  产地  */
    producingArea?: string;
    /**  生产日期  */
    productionDate?: string;
    /**  收货人员  */
    receiveBy?: string;
    /**  批准文号  */
    regisTrationNumber?: string;
    /**  门店名称  */
    shopName?: string;
    /**  商品编码  */
    skuId?: string;
    /**  规格  */
    skuModel?: string;
    /**  商品名称  */
    skuName?: string;
    /**  商品名称拼音  */
    skuPinyin?: string;
    /**  入库单号  */
    stockInId?: string;
    /**  仓库编号  */
    storeCode?: string;
    /**  仓库名称  */
    storeName?: string;
    /**  入库数量  */
    totalInQty?: number;
    /**  单位  */
    unit?: string;
    /**  更新时间  */
    updateTime?: string;
    /**  通用名称  */
    wareGeneralName?: string;
  };

  type GspDeliveryStockOutRecordPageQueryVO = {
    /** 剂型 */
    dosageForm?: string;
    /** 经营范围 */
    gspCategory?: string;
    /** 出库日期(结束) */
    orderConfirmTimeEnd?: string;
    /** 出库日期(开始) */
    orderConfirmTimeStart?: string;
    pageQuery?: PageQuery;
    /** 批准文号 */
    regisTrationNumber?: string;
    /** 门店名称 */
    shopName?: string;
    /** sku信息 */
    skuInfo?: string;
    /** 出库单号 */
    stockOutId?: string;
    /** 仓库编码 */
    storeCode?: string;
    /** 通用名称 */
    wareGeneralName?: string;
  };

  type GspDeliveryStockOutRecordVO = {
    /** 总额 */
    amt?: number;
    /** 配送单号 */
    docId?: string;
    /** 剂型 */
    dosageFormName?: string;
    /**  有效日期至  */
    expiredDate?: string;
    /** 经营范围 */
    gspCategoryName?: string;
    /** id */
    id?: string;
    /** 厂家 */
    manufacturer?: string;
    /**  出库日期  */
    orderConfirmTime?: string;
    /** 上市许可证持有人 */
    permitHolder?: string;
    /** 单价 */
    price?: number;
    /** 批号 */
    produceCode?: string;
    /** 产地 */
    producingArea?: string;
    /** 生产企业许可证号 */
    productionBusinessLicense?: string;
    /**  生产日期  */
    productionDate?: string;
    /** 出库数量 */
    realityQty?: number;
    /** 批准文号/注册证号 */
    regisTrationNumber?: string;
    /** 门店名称 */
    shopName?: string;
    /** 商品编码 */
    skuId?: string;
    /** 规格 */
    skuModel?: string;
    /** 商品名称 */
    skuName?: string;
    /** 出库单号 */
    stockOutId?: string;
    /** 仓库名称 */
    storeName?: string;
    /** 单位 */
    unitName?: string;
    /** 通用名称 */
    wareGeneralName?: string;
  };

  type GspDepartmentVO = {
    /** 下级节点 */
    children?: GspDepartmentVO[];
    /**  主键id  */
    id?: string;
    /**  部门名称  */
    name: string;
    /**  父id  */
    parentId?: string;
    /**  状态：0-停用 1启用  */
    status?: number;
  };

  type GspDocumentVO = {
    /** 当前页 */
    current?: number;
    /** document xml String */
    docXmlStr?: string;
    /** id集合 */
    ids?: number[];
    /** 页容量 */
    size?: number;
    /** 总条数 */
    total?: number;
  };

  type GspDrugChecklistDetailVO = {
    /** 商品条码 */
    barCode?: string;
    /** 抽（送）检单主键 */
    checklistId?: string;
    /** 有效日期 */
    expirationDate?: string;
    /**  id  */
    id?: string;
    /** 可用库存 */
    inventoryQty?: number;
    /** 生产厂家 */
    manufacturer?: string;
    /** 生产批号 */
    produceCode?: string;
    /** 生产日期 */
    productionDate?: string;
    /** 数量 */
    qty?: number;
    /** 批准文号 */
    regisTrationNumber?: string;
    /** 商品编码 */
    skuId?: string;
    /** 规格 */
    skuModel?: string;
    /** 商品名称 */
    skuName?: string;
    /** 商品名称拼音 */
    skuPinyin?: string;
    /** 商品通用名 */
    wareGeneralName?: string;
  };

  type GspDrugChecklistPageQueryVO = {
    /** 抽（送）检日期 */
    checkTimeEnd?: string;
    /** 抽（送）检日期 */
    checkTimeStart?: string;
    /** 抽（送）检单主键 */
    checklistId?: string;
    /** 抽（送）检部门 */
    department?: string;
    pageQuery?: PageQuery;
    /** 批准文号 */
    regisTrationNumber?: string;
    /** 商品名称/拼音码/编码 */
    skuInfo?: string;
    /** 仓库代码 */
    storeCode?: string;
    /** 商品通用名 */
    wareGeneralName?: string;
  };

  type GspDrugChecklistVO = {
    /** 抽（送）检盒数 */
    checkQty?: number;
    /** 抽（送）检时间 */
    checkTime?: string;
    /** 创建时间 */
    createTime?: string;
    /** 创建人 */
    creator?: string;
    /** 创建人id */
    creatorId?: string;
    /** 抽（送）检部门 */
    department?: string;
    /** 商品明细 */
    details?: GspDrugChecklistDetailVO[];
    /** 抽（送）检药品数量 */
    drugItemCount?: number;
    /** 单据编号 */
    id?: string;
    /** 最后操作人 */
    operator?: string;
    /** 最后操作人id */
    operatorId?: string;
    /** 备注 */
    remark?: string;
    /** 0-未提审 1-已审核 2-审核中 3-审核通过 4-审核不通过 5-已取消 */
    status?: number;
    /** 仓库编码 */
    storeCode?: string;
    /** 仓库名称 */
    storeName?: string;
    /** 更新时间 */
    updateTime?: string;
  };

  type GspInPurReceiptPageQueryVO = {
    /** 经营范围编码 */
    gspCategory?: string;
    /** 商品明细id数组 */
    ids?: string[];
    /** 采购单号 */
    orderId?: string;
    pageQuery?: PageQuery;
    /** 起始收货时间 */
    receiveTimeBegin?: string;
    /** 结束收货时间 */
    receiveTimeEnd?: string;
    /** 批准文号 */
    regisTrationNumber?: string;
    /** 商品信息(商品名称/拼音码/编码) */
    skuInfo?: string;
    /** 收货通知单号 */
    stockNoticeId?: string;
    /** 仓库编码 */
    storeCode?: string;
    /** 供应商编码/名称 */
    supplier?: string;
    /** 通用名 */
    wareGeneralName?: string;
  };

  type GspInPurReceiptVO = {
    /** 金额 */
    amount?: number;
    /** 发运地点 */
    dispatchAddress?: string;
    /** 有效期至 */
    expiredTime?: string;
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
    /** 批号 */
    produceCode?: string;
    /** 生产日期 */
    productionTime?: string;
    /** 收货人员 */
    receiveBy?: string;
    /** 到货时间/收货时间 */
    receiveDate?: string;
    /** 收货数量 */
    receiveQty?: number;
    /** 批准文号/注册证号 */
    regisTrationNumber?: string;
    /** 商品编码 */
    skuId?: string;
    /** 规格 */
    skuModel?: string;
    /** 商品名称 */
    skuName?: string;
    /** 收货通知单号 */
    stockNoticeId?: string;
    /** 仓库 */
    storeName?: string;
    /** 发货单位 */
    supplierName?: string;
    /** 温控方式 */
    temperatureControlType?: string;
    /** 启运时间 */
    transportTime?: string;
    /** 运输方式 */
    transportType?: string;
    /** 单位 */
    unitName?: string;
    /** 通用名 */
    wareGeneralName?: string;
  };

  type GspInPurStockInPageQueryVO = {
    /** 经营范围编码 */
    gspCategory?: string;
    /** 商品明细id数组 */
    ids?: string[];
    /** 起始入库时间 */
    inboundTimeBegin?: string;
    /** 结束入库时间 */
    inboundTimeEnd?: string;
    /** 采购单号 */
    orderId?: string;
    pageQuery?: PageQuery;
    /** 批准文号 */
    regisTrationNumber?: string;
    /** 商品信息(商品名称/拼音码/编码) */
    skuInfo?: string;
    /** 收货通知单号 */
    stockNoticeId?: string;
    /** 仓库编码 */
    storeCode?: string;
    /** 供货单位编码/名称 */
    supplier?: string;
    /** 通用名 */
    wareGeneralName?: string;
  };

  type GspInPurStockInVO = {
    /** 金额 */
    amount?: number;
    /** 剂型 */
    dosageFormName?: string;
    /** 有效期至 */
    expiredDate?: string;
    /** 经营范围 */
    gspCategoryName?: string;
    /** 商品明细id */
    id?: string;
    /** 入库日期 */
    inboundTime?: string;
    /** 厂家 */
    manufacturer?: string;
    /** 上市许可持有人 */
    permitHolder?: string;
    /** 单价 */
    price?: number;
    /** 批号 */
    produceCode?: string;
    /** 产地 */
    producingArea?: string;
    /** 生产日期 */
    productionDate?: string;
    /** 收货人员 */
    receiveBy?: string;
    /** 收货数量 */
    receiveQty?: number;
    /** 批准文号/注册证号 */
    regisTrationNumber?: string;
    /** 商品编码 */
    skuId?: string;
    /** 规格 */
    skuModel?: string;
    /** 商品名称 */
    skuName?: string;
    /** 入库单号 */
    stockInResult?: string;
    /** 收货通知单号 */
    stockNoticeId?: string;
    /** 仓库 */
    storeName?: string;
    /** 供货单位 */
    supplierName?: string;
    /** 单位 */
    unitName?: string;
    /** 通用名 */
    wareGeneralName?: string;
  };

  type GspOutPurReturnPageQueryVO = {
    /** 剂型编码 */
    dosageForm?: string;
    /** 经营范围编码 */
    gspCategory?: string;
    /** 商品明细id数组 */
    ids?: string[];
    pageQuery?: PageQuery;
    /** 批准文号 */
    regisTrationNumber?: string;
    /** 起始退货时间 */
    returnTimeBegin?: string;
    /** 结束退货时间 */
    returnTimeEnd?: string;
    /** 退货单号 */
    serviceId?: string;
    /** 商品信息(商品名称/拼音码/编码) */
    skuInfo?: string;
    /** 仓库编码 */
    storeCode?: string;
    /** 发货单位编码/名称 */
    supplier?: string;
    /** 通用名 */
    wareGeneralName?: string;
    /** 库房类型 0 合格品仓 1 不合品仓  2 待处理仓 */
    warehouseType?: number;
  };

  type GspOutPurReturnVO = {
    /** 剂型 */
    dosageFormName?: string;
    /** 有效期至 */
    expiredDate?: string;
    /** 经营范围 */
    gspCategoryName?: string;
    /** 商品明细id */
    id?: string;
    /** 厂家 */
    manufacturer?: string;
    /** 金额 */
    outMoney?: number;
    /** 退货数量 */
    outQty?: number;
    /** 上市许可持有人 */
    permitHolder?: string;
    /** 单价 */
    price?: number;
    /** 批号 */
    produceCode?: string;
    /** 产地 */
    producingArea?: string;
    /** 生产日期 */
    productionDate?: string;
    /** 批准文号/注册证号 */
    regisTrationNumber?: string;
    /** 退货原因 */
    returnReason?: string;
    /** 退货时间 */
    returnTime?: string;
    /** 退货单号 */
    serviceId?: string;
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
    /** 库房 */
    warehouseName?: string;
  };

  type GspOutPurStockOutReviewPageQueryVO = {
    /** 剂型编码 */
    dosageForm?: string;
    /** 经营范围编码 */
    gspCategory?: string;
    /** 商品编码id数组 */
    ids?: string[];
    /** 开始出库时间 */
    outboundTimeBegin?: string;
    /** 结束出库时间 */
    outboundTimeEnd?: string;
    pageQuery?: PageQuery;
    /** 批准文号 */
    regisTrationNumber?: string;
    /** 退货单号 */
    serviceId?: string;
    /** 商品信息(商品名称/拼音码/编码) */
    skuInfo?: string;
    /** 出库单号(采退出库单号) */
    stockResultId?: string;
    /** 仓库编码 */
    storeCode?: string;
    /** 发货单位编码/名称 */
    supplier?: string;
    /** 通用名 */
    wareGeneralName?: string;
    /** 库房类型 0 合格品仓 1 不合品仓  2 待处理仓 */
    warehouseType?: number;
  };

  type GspOutPurStockOutReviewVO = {
    /** 金额 */
    amount?: number;
    /** 剂型 */
    dosageFormName?: string;
    /** 有效期至 */
    expiredDate?: string;
    /** 经营范围 */
    gspCategoryName?: string;
    /** 商品明细Id */
    id?: string;
    /** 厂家 */
    manufacturer?: string;
    /** 出库时间 */
    outboundTime?: string;
    /** 许可证持有人 */
    permitHolder?: string;
    /** 单价 */
    price?: number;
    /** 批号 */
    produceCode?: string;
    /** 产地 */
    producingArea?: string;
    /** 生产日期 */
    productionDate?: string;
    /** 质量状况 */
    qualityStatus?: string;
    /** 出库数量 */
    quantity?: number;
    /** 第一复核人 */
    recheckBy?: string;
    /** 第二复核人 */
    recheckBy2?: string;
    /** 批准文号/注册证号 */
    regisTrationNumber?: string;
    /** 退货单号 */
    serviceId?: string;
    /** 商品编码 */
    skuId?: string;
    /** 规格 */
    skuModel?: string;
    /** 商品名称 */
    skuName?: string;
    /** 出库单号 */
    stockResultId?: string;
    /** 仓库 */
    storeName?: string;
    /** 供货单位 */
    supplierName?: string;
    /** 单位 */
    unitName?: string;
    /** 通用名 */
    wareGeneralName?: string;
    /** 库房 */
    warehouseName?: string;
  };

  type GspPurStockOutItemVO = {
    /**  到达温度  */
    arrivalTemperature?: string;
    /**  本位码  */
    baseCode?: string;
    /**  创建时间  */
    createTime?: string;
    /**  处理结果描述，当 dealResult 不为 1 时返回错误提示  */
    dealDesc?: string;
    /**  处理人  */
    dealPeople?: string;
    /** 处理结果代码， 
0 表示文件解析或数字签名验证失败，需解决错误问题后重新上传； 
1 表示文件处理成功，已生成正确业务单据；
2 表示文件中药品或企业校验失败，已生成业务单据，需登录药品流通监管系统修正  */
    dealResult?: string;
    /**  处理状态， 0 表示未处理； 1 表示处理完成  */
    dealStatus?: number;
    /**  处理完成时间  */
    dealTime?: string;
    /**  承运人  */
    driver?: string;
    /**  有效日期  */
    expirationDate?: string;
    /**  回传文件ID  */
    fileId?: string;
    /**  退货出库记录主表ID  */
    gspStockOutId?: string;
    id?: string;
    /**  起运温度  */
    initialTemperature?: string;
    /**  操作人  */
    operator?: string;
    /**  操作人Id  */
    operatorId?: string;
    /**  补充说明  */
    other?: string;
    /**  销售单号（供货企业随货单号）  */
    paperyNo?: string;
    /**  生产批号  */
    produceCode?: string;
    /**  生产日期  */
    productionDate?: string;
    /**  采退出库单号  */
    purStockOutId?: string;
    /**  退货数量  */
    qty?: number;
    /**  上报状态 0：未上报 1：已上报  */
    reportStatus?: number;
    /**  上报时间  */
    reportTime?: string;
    /**  退货日期  */
    returnDate?: string;
    /**  退货原因  */
    returnReason?: string;
    /**  包装规格  */
    skuModel?: string;
    /**  来源表ID  */
    sourceId?: string;
    /**  供应商id  */
    supplierId?: string;
    /**  供应商  */
    supplierName?: string;
    /**  租户编码  */
    tenantId?: string;
    /**  运输结束时间  */
    transportEndTime?: string;
    /**  运输开始时间  */
    transportStartTime?: string;
    /**  运输方式  */
    transportWay?: string;
    /**  修改时间  */
    updateTime?: string;
  };

  type GspPurStockOutPageQueryVO = {
    /**  本位码  */
    baseCode?: string;
    /**  处理结果， 0：文件解析或数字签名验证失，1：处理成功，2：文件解析或数字签名验证失败 */
    dealResult?: string;
    /**  处理状态， 0 表示未处理； 1 表示处理完成  */
    dealStatus?: number;
    /**  查询结束时间  */
    endTime?: string;
    /**  id集，用于勾选所选  */
    ids?: number[];
    pageQuery?: PageQuery;
    /**  生产批号  */
    produceCode?: string;
    /**  采退出库单号  */
    purStockOutId?: string;
    /**  上报状态 0-未上报 1-已上报  */
    reportStatus?: number;
    /**  上报时间  */
    reportTimeEnd?: string;
    /**  上报时间  */
    reportTimeStart?: string;
    /**  退货日期  */
    returnDateEnd?: string;
    /**  退货日期  */
    returnDateStart?: string;
    /**  销售单号  */
    saleOrderId?: string;
    /**  查询开始时间  */
    startTime?: string;
    /**  供货企业(输入企业名称或编码)  */
    supplierInfo?: string;
  };

  type GspPurStockOutRecordVO = {
    /**  总额  */
    amt?: number;
    /**  商品条码  */
    barCode?: string;
    /**  创建时间  */
    createTime?: string;
    /**  退货单号  */
    docId?: string;
    /**  剂型  */
    dosageForm?: string;
    /**  剂型名称  */
    dosageFormName?: string;
    /**  有效日期  */
    expiredDate?: string;
    /**  经营范围  */
    gspCategory?: string;
    /**  经营范围名称  */
    gspCategoryName?: string;
    /**  id  */
    id?: string;
    /**  生产厂家  */
    manufacturer?: string;
    /**  仓库订单完成时间  */
    orderConfirmTime?: string;
    /**  上市许可证持有人  */
    permitHolder?: string;
    /**  单价  */
    price?: number;
    /**  生产批号  */
    produceCode?: string;
    /**  产地  */
    producingArea?: string;
    /**  生产日期  */
    productionDate?: string;
    /**  批准文号  */
    regisTrationNumber?: string;
    /**  商品编码  */
    skuId?: string;
    /**  规格  */
    skuModel?: string;
    /**  商品名称  */
    skuName?: string;
    /**  商品名称拼音  */
    skuPinyin?: string;
    /**  采退出库通知单号  */
    stockNoticeId?: string;
    /**  出库单号  */
    stockOutId?: string;
    /**  仓库编码  */
    storeCode?: string;
    /**  仓库名称  */
    storeName?: string;
    /**  供应商编码  */
    supplierId?: string;
    /**  供货单位  */
    supplierName?: string;
    /**  税收分类编码  */
    taxClassificationCode?: string;
    /**  税率  */
    taxRate?: number;
    /**  总出库数量  */
    totalOutQty?: number;
    /**  单位  */
    unit?: string;
    /**  更新时间  */
    updateTime?: string;
    /**  通用名称  */
    wareGeneralName?: string;
    /**  库房  */
    warehouseName?: string;
  };

  type GspPurStockOutVO = {
    /**  到达温度  */
    arrivalTemperature?: string;
    /**  创建时间  */
    createTime?: string;
    /**  处理结果描述，当 dealResult 不为 1 时返回错误提示  */
    dealDesc?: string;
    /**  处理人  */
    dealPeople?: string;
    /** 处理结果代码， 
0 表示文件解析或数字签名验证失败，需解决错误问题后重新上传； 
1 表示文件处理成功，已生成正确业务单据；
2 表示文件中药品或企业校验失败，已生成业务单据，需登录药品流通监管系统修正  */
    dealResult?: string;
    /**  处理状态， 0 表示未处理； 1 表示处理完成  */
    dealStatus?: number;
    /**  处理完成时间  */
    dealTime?: string;
    /**  承运人  */
    driver?: string;
    /**  回传文件ID  */
    fileId?: string;
    id?: string;
    /**  起运温度  */
    initialTemperature?: string;
    /**  操作人  */
    operator?: string;
    /**  操作人Id  */
    operatorId?: string;
    /**  补充说明  */
    other?: string;
    /**  采退出库单号  */
    purStockOutId?: string;
    /**  上报状态 0：未上报 1：已上报  */
    reportStatus?: number;
    /**  上报时间  */
    reportTime?: string;
    /**  退货日期  */
    returnDate?: string;
    /**  来源表ID  */
    sourceId?: string;
    /**  供应商id  */
    supplierId?: string;
    /**  供应商  */
    supplierName?: string;
    /**  租户编码  */
    tenantId?: string;
    /**  运输结束时间  */
    transportEndTime?: string;
    /**  运输开始时间  */
    transportStartTime?: string;
    /**  运输方式  */
    transportWay?: string;
    /**  修改时间  */
    updateTime?: string;
  };

  type GspQualityControlCheckVO = {
    /**  校验生产厂家  */
    manufacturers?: string[];
    /**  校验批准文号  */
    registerNumbers?: string[];
    /**  校验供应商  */
    supplierIds?: string[];
    /**  校验商品  */
    wares?: GspWareVO[];
  };

  type GspQualityControlManufacturerVO = {
    /**  剂型编码  */
    dosageFormCode?: string;
    /**  剂型名称  */
    dosageFormName?: string;
    /**  生产厂家  */
    manufacturer?: string;
  };

  type GspQualityControlPageQueryVO = {
    /**  管控类型 1：商品 2：供应商 3：生产厂家 4：上市许可持有人 5：批准文号 */
    controlType?: number;
    /**  生产厂家  */
    manufacturer?: string;
    pageQuery?: PageQuery;
    /**  上市许可持有人  */
    permitHolder?: string;
    /**  批准文号  */
    registerNumber?: string;
    /**  商品名称/拼音码/编码  */
    skuInfo?: string;
    /**  0-未审核 1-审核 2-审核不通过 3-已取消 4-已关闭  */
    status?: number;
    /**  供应商名称/编码  */
    supplierInfo?: string;
  };

  type GspQualityControlPermitHolderVO = {
    /**  剂型编码  */
    dosageFormCode?: string;
    /**  剂型名称  */
    dosageFormName?: string;
    /**  上市许可持有人  */
    permitHolder?: string;
  };

  type GspQualityControlRegisterNumberVO = {
    /**  批准文号  */
    regisTrationNumber?: string;
  };

  type GspQualityControlResultVO = {
    /**  管控生产厂家  */
    manufacturers?: string[];
    /**  管控批注文号  */
    registerNumbers?: string[];
    /**  管控供应商  */
    supplierIds?: string[];
    /**  管控商品  */
    wares?: GspWareVO[];
  };

  type GspQualityControlSupplierVO = {
    /**  供应商编号  */
    supplierId?: string;
    /**  供应商名称  */
    supplierName?: string;
    /**  供应商简称  */
    supplierShortName?: string;
    /**  供应商类型 polarbear_po_supplier_type */
    supplierType?: number;
  };

  type GspQualityControlVO = {
    /**  管控类型 1：商品 2：供应商 3：生产厂家 4：上市许可持有人 5：批准文号 */
    controlType?: number;
    /**  创建时间  */
    createTime?: string;
    /**  创建人  */
    creator?: string;
    /**  创建人id  */
    creatorId?: string;
    /**  id  */
    id?: string;
    /**  管控生产厂家  */
    manufacturers?: GspQualityControlManufacturerVO[];
    /**  最后操作人  */
    operator?: string;
    /**  最后操作人id  */
    operatorId?: string;
    /**  管控上市许可证人  */
    permitHolders?: GspQualityControlPermitHolderVO[];
    /**  申请原因  */
    reason?: string;
    /**  管控批准文号  */
    registerNumbers?: GspQualityControlRegisterNumberVO[];
    /**  备注  */
    remark?: string;
    /**  0-未审核 1-已审核 2-审核不通过 3-已取消 4-已关闭  */
    status?: number;
    /**  管控商品供应商  */
    suppliers?: GspQualityControlSupplierVO[];
    /**  更新时间  */
    updateTime?: string;
    /**  管控商品  */
    wares?: GspQualityControlWareVO[];
  };

  type GspQualityControlWareVO = {
    /**  商品条码  */
    barCode?: string;
    /**  有效日期  */
    expirationDate?: string;
    /**  生产厂家  */
    manufacturer?: string;
    /**  生产批号  */
    produceCode?: string;
    /**  生产日期  */
    productionDate?: string;
    /**  批准文号  */
    regisTrationNumber?: string;
    /**  商品编码  */
    skuId?: string;
    /**  规格  */
    skuModel?: string;
    /**  商品名称  */
    skuName?: string;
    /**  商品名称拼音  */
    skuPinyin?: string;
    /**  单位  */
    unit?: string;
    /**  商品通用名  */
    wareGeneralName?: string;
  };

  type GspQueryTimeConfigVO = {
    endTime?: string;
    startTime?: string;
  };

  type GspReportRetailSaleOutPageQueryVO = {
    /** 创建时间 */
    createTimeEnd?: string;
    /** 创建时间 */
    createTimeStart?: string;
    /** 处理结果代码，0 表示文件解析或数字签名验证失败，
     需解决错误问题后重新上传；1 表示文件处理成功，已
     生成正确业务单据；2 表示文件中药品或企业校验失
     败，已生成业务单据，需登录药品流通监管系统修正 */
    dealResult?: string;
    /** 处理状态，0 表示未处理；1 表示处理完成 */
    dealStatus?: number;
    pageQuery?: PageQuery;
    /** 生产批号 */
    produceCode?: string;
    /** 上报状态 0-未上报 1-已上报 */
    reportStatus?: number;
    /** 上报时间 */
    reportTimeEnd?: string;
    /** 上报时间 */
    reportTimeStart?: string;
    /** 销售单号 */
    saleId?: string;
    /** 销售时间 */
    saleTimeEnd?: string;
    /** 销售时间 */
    saleTimeStart?: string;
    /** 本位码 */
    standardCode?: string;
  };

  type GspReportRetailSaleOutRecordVO = {
    /** 处理结果描述，当 dealResult 不为 1 时返回错误提示 */
    dealDesc?: string;
    /** 处理结果代码，0 表示文件解析或数字签名验证失败，
     需解决错误问题后重新上传；1 表示文件处理成功，已
     生成正确业务单据；2 表示文件中药品或企业校验失
     败，已生成业务单据，需登录药品流通监管系统修正 */
    dealResult?: string;
    /** 处理状态，0 表示未处理；1 表示处理完成 */
    dealStatus?: number;
    /** 处理完成时间 */
    dealTime?: string;
    /** 有效期至 */
    dueDate?: string;
    /** 文件唯一标识 */
    fileId?: string;
    /** id */
    id?: string;
    /** 操作人 */
    operator?: string;
    /** 操作人id */
    operatorId?: string;
    /** 补充说明 */
    other?: string;
    /** 生产批号 */
    produceCode?: string;
    /** 生产日期 */
    produceDate?: string;
    /** 销售数量 */
    qty?: number;
    /** 上报状态 0-未上报 1-已上报 */
    reportStatus?: number;
    /** 上报时间 */
    reportTime?: string;
    /** 销售单号 */
    saleId?: string;
    /** 销售时间 */
    saleTime?: string;
    /** 销售员 */
    salesman?: string;
    /** 合同名称 */
    skuId?: string;
    /** 包装规格 */
    skuModel?: string;
    /** 明细来源表id */
    sourceId?: string;
    /** 本位码 */
    standardCode?: string;
  };

  type GspReportRetailSaleOutVO = {
    /** 客户id */
    cusId?: string;
    /** 客户名字 */
    cusName?: string;
    /** 处理结果描述 */
    dealDesc?: string;
    /** 处理结果代码，0 表示文件解析或数字签名验证失败，
     需解决错误问题后重新上传；1 表示文件处理成功，已
     生成正确业务单据；2 表示文件中药品或企业校验失
     败，已生成业务单据，需登录药品流通监管系统修正 */
    dealResult?: string;
    /** 处理状态，0 表示未处理；1 表示处理完成 */
    dealStatus?: number;
    /** 处理完成时间 */
    dealTime?: string;
    /** 文件唯一标识 */
    fileId?: string;
    /** id */
    id?: string;
    /** 操作人 */
    operator?: string;
    /** 操作人id */
    operatorId?: string;
    /** 补充说明 */
    other?: string;
    /** 上报状态 0-未上报 1-已上报 */
    reportStatus?: number;
    /** 上报时间 */
    reportTime?: string;
    /** 销售单号 */
    saleId?: string;
    /** 销售时间 */
    saleTime?: string;
    /** 销售员 */
    salesman?: string;
    /** 来源表id */
    sourceId?: string;
  };

  type GspReportSumVO = {
    /** 上报gsp业务类型 1-采购入库 2-销售出库 3-销退入库 4-采退出库 5-批号库存 6-不合格品销退 7-零售出库 8-零售退货入库 9-损毁出库 */
    gspType?: number;
    /** 最后上报时间 */
    lastTime?: string;
    /** 未上报数量 */
    noReportCount?: string;
    /** 已经上报数量 */
    reportCount?: string;
    /** 等待下载数量 */
    waitDownload?: string;
  };

  type GspSaleOutRecheckRecordPageQueryVO = {
    /**  购货单位 企业名称/编码  */
    cusInfo?: string;
    /**  销售单号  */
    docId?: string;
    /**  剂型  */
    dosageForm?: string;
    /**  经营范围  */
    gspCategory?: string;
    /**  出库通知单号  */
    orderCode?: string;
    /**  订单类型 201：零售 202：批发  */
    orderType?: number;
    /**  出库时间  */
    outboundTimeEnd?: string;
    /**  出库时间  */
    outboundTimeStart?: string;
    pageQuery?: PageQuery;
    /**  批准文号  */
    regisTrationNumber?: string;
    /**  商品名称/拼音/编码  */
    skuInfo?: string;
    /**  出库单号 */
    stockOutId?: string;
    /**  仓库编号  */
    storeCode?: string;
    /**  通用名称  */
    wareGeneralName?: string;
  };

  type GspSaleOutRecheckRecordVO = {
    /** 收货信息 */
    addressInfo?: string;
    /**  商品条码  */
    barCode?: string;
    /**  创建时间  */
    createTime?: string;
    /**  客户id  */
    cusId?: string;
    /**  购货单位  */
    cusName?: string;
    /**  销售单号  */
    docId?: string;
    /**  剂型  */
    dosageForm?: string;
    /**  剂型名称  */
    dosageFormName?: string;
    /**  有效日期  */
    expiredDate?: string;
    /**  外部商品编码  */
    externalSkuId?: string;
    /**  经营范围  */
    gspCategory?: string;
    /**  经营范围名称  */
    gspCategoryName?: string;
    /**  id  */
    id?: string;
    /**  生产厂家  */
    manufacturer?: string;
    /**  出库通知单号  */
    orderCode?: string;
    /**  订单类型 201：零售 202：批发  */
    orderType?: number;
    /**  出库时间  */
    outboundTime?: string;
    /**  上市许可证持有人  */
    permitHolder?: string;
    /**  单价  */
    price?: number;
    /**  生产批号  */
    produceCode?: string;
    /**  产地  */
    producingArea?: string;
    /**  生产日期  */
    productionDate?: string;
    /**  质量状况  */
    quality?: string;
    /**  第一复核员  */
    recheckBy?: string;
    /**  第二复核员  */
    recheckBy2?: string;
    /**  批准文号  */
    regisTrationNumber?: string;
    /**  商品编码  */
    skuId?: string;
    /**  规格  */
    skuModel?: string;
    /**  商品名称  */
    skuName?: string;
    /**  商品名称拼音  */
    skuPinyin?: string;
    /**  出库单号  */
    stockOutId?: string;
    /**  仓库编码  */
    storeCode?: string;
    /**  仓库名称  */
    storeName?: string;
    /**  税收分类编码  */
    taxClassificationCode?: string;
    /**  税率  */
    taxRate?: number;
    /**  总额  */
    totalAmt?: number;
    /**  总出库数量  */
    totalOutQty?: number;
    /**  单位  */
    unit?: string;
    /**  更新时间  */
    updateTime?: string;
    /**  通用名称  */
    wareGeneralName?: string;
  };

  type GspSaleRecheckItemRecordPageQueryVO = {
    /**  发货单位 企业名称/编号  */
    cusInfo?: string;
    /**  经营范围  */
    gspCategory?: string;
    /**  通知单号  */
    orderCode?: string;
    pageQuery?: PageQuery;
    /**  收货日期  */
    receiveDateEnd?: string;
    /**  收货日期  */
    receiveDateStart?: string;
    /**  批准文号  */
    regisTrationNumber?: string;
    /**  退货单号  */
    serviceId?: string;
    /**  商品信息  */
    skuInfo?: string;
    /**  仓库代码  */
    storeCode?: string;
    /**  通用名称  */
    wareGeneralName?: string;
  };

  type GspSaleRecheckItemRecordVO = {
    /**  金额  */
    amt?: number;
    /**  创建时间  */
    createTime?: string;
    /**  客户id  */
    cusId?: string;
    /**  发货单位  */
    cusName?: string;
    /**  发运地点  */
    dispatchAddress?: string;
    /**  有效期至  */
    expiredTime?: string;
    /**  经营范围编号  */
    gspCategory?: string;
    /**  经营范围名称  */
    gspCategoryName?: string;
    /**  id  */
    id?: string;
    /**  批号  */
    lotNo?: string;
    /**  生产厂家  */
    manufacturer?: string;
    /**  通知单号  */
    orderCode?: string;
    /**  上市许可证持有人  */
    permitHolder?: string;
    /**  单价  */
    price?: number;
    /**  产地  */
    producingArea?: string;
    /**  生产日期  */
    productionTime?: string;
    /**  采购价格  */
    purchasePrice?: number;
    /**  收货人员  */
    receiveBy?: string;
    /**  到货日期  */
    receiveDate?: string;
    /**  收货数量  */
    receiveQty?: number;
    /**  批准文号  */
    regisTrationNumber?: string;
    /**  退货单号  */
    serviceId?: string;
    /**  商品编码  */
    skuId?: string;
    /**  商品规格  */
    skuModel?: string;
    /**  商品名称  */
    skuName?: string;
    /**  商品名称简拼  */
    skuPinyin?: string;
    /**  仓库编号  */
    storeCode?: string;
    /**  仓库名称  */
    storeName?: string;
    /**  温控方式  */
    temperatureControlType?: string;
    /**  启运时间  */
    transportTime?: string;
    /**  运输方式  */
    transportType?: string;
    /**  更新时间  */
    updateTime?: string;
    /**  通用名称  */
    wareGeneralName?: string;
  };

  type GspSaleStockInRecordPageQueryVO = {
    /**  发货单位 企业名称/编码  */
    cusInfo?: string;
    /**  经营范围  */
    gspCategory?: string;
    /**  通知单号  */
    orderCode?: string;
    /**  入库时间  */
    orderConfirmTimeEnd?: string;
    /**  入库时间  */
    orderConfirmTimeStart?: string;
    pageQuery?: PageQuery;
    /**  批准文号  */
    regisTrationNumber?: string;
    /**  退货单号  */
    serviceId?: string;
    /**  商品名称/拼音码/编码  */
    skuInfo?: string;
    /**  入库单号  */
    stockInId?: string;
    /**  仓库编码  */
    storeCode?: string;
    /**  通用名称  */
    wareGeneralName?: string;
  };

  type GspSaleStockInRecordVO = {
    /**  总额  */
    amt?: number;
    /**  商品条码  */
    barCode?: string;
    /**  创建时间  */
    createTime?: string;
    /**  客户id  */
    cusId?: string;
    /**  退货单位  */
    cusName?: string;
    /**  剂型  */
    dosageForm?: string;
    /**  剂型名称  */
    dosageFormName?: string;
    /**  有效日期  */
    expiredDate?: string;
    /**  外部商品编码  */
    externalSkuId?: string;
    /**  经营范围  */
    gspCategory?: string;
    /**  经营范围名称  */
    gspCategoryName?: string;
    /**  id  */
    id?: string;
    /**  厂家  */
    manufacturer?: string;
    /**  通知单号  */
    orderCode?: string;
    /**  入库时间  */
    orderConfirmTime?: string;
    /**  销售单号  */
    originalOrderId?: string;
    /**  上市许可证持有人  */
    permitHolder?: string;
    /**  单价  */
    price?: number;
    /**  生产批号  */
    produceCode?: string;
    /**  产地  */
    producingArea?: string;
    /**  生产日期  */
    productionDate?: string;
    /**  收货人员  */
    receiveBy?: string;
    /**  批准文号  */
    regisTrationNumber?: string;
    /**  退货单号  */
    serviceId?: string;
    /**  商品编码  */
    skuId?: string;
    /**  规格  */
    skuModel?: string;
    /**  商品名称  */
    skuName?: string;
    /**  商品名称拼音  */
    skuPinyin?: string;
    /**  入库单号  */
    stockInId?: string;
    /**  仓库编号  */
    storeCode?: string;
    /**  仓库名称  */
    storeName?: string;
    /**  税收分类编码  */
    taxClassificationCode?: string;
    /**  税率  */
    taxRate?: number;
    /**  入库数量  */
    totalInQty?: number;
    /**  单位  */
    unit?: string;
    /**  更新时间  */
    updateTime?: string;
    /**  通用名称  */
    wareGeneralName?: string;
  };

  type GspSaleStockOutRecordVO = {
    /** 收货信息 */
    addressInfo?: string;
    /**  总额  */
    amt?: number;
    /**  商品条码  */
    barCode?: string;
    /**  客户营业执照号码  */
    businessLicenseNumber?: string;
    /**  创建时间  */
    createTime?: string;
    /**  客户地址  */
    cusAddress?: string;
    /**  客户编码  */
    cusId?: string;
    /**  购货单位  */
    cusName?: string;
    /**  客户电话  */
    cusTelephone?: string;
    /**  销售单号  */
    docId?: string;
    /**  剂型  */
    dosageForm?: string;
    /**  剂型名称  */
    dosageFormName?: string;
    /**  有效日期  */
    expiredDate?: string;
    /**  经营范围  */
    gspCategory?: string;
    /**  经营范围名称  */
    gspCategoryName?: string;
    /**  id  */
    id?: string;
    /**  生产厂家  */
    manufacturer?: string;
    /**  仓库订单完成时间  */
    orderConfirmTime?: string;
    /** 订单类型 201：零售 202：批发 */
    orderType?: number;
    /**  上市许可证持有人  */
    permitHolder?: string;
    /**  单价  */
    price?: number;
    /**  生产批号  */
    produceCode?: string;
    /**  产地  */
    producingArea?: string;
    /**  生产企业资料-生产企业许可证号  */
    productionBusinessLicense?: string;
    /**  生产日期  */
    productionDate?: string;
    /**  批准文号  */
    regisTrationNumber?: string;
    /**  销售时间  */
    saleTime?: string;
    /**  商品编码  */
    skuId?: string;
    /**  规格  */
    skuModel?: string;
    /**  商品名称  */
    skuName?: string;
    /**  商品名称拼音  */
    skuPinyin?: string;
    /**  销售出库通知单号  */
    stockNoticeId?: string;
    /**  出库单号  */
    stockOutId?: string;
    /**  仓库编码  */
    storeCode?: string;
    /**  仓库名称  */
    storeName?: string;
    /**  税收分类编码  */
    taxClassificationCode?: string;
    /**  税率  */
    taxRate?: number;
    /**  总出库数量  */
    totalOutQty?: number;
    /**  单位  */
    unit?: string;
    /**  更新时间  */
    updateTime?: string;
    /**  通用名称  */
    wareGeneralName?: string;
  };

  type GspSpecialDrugSaleLimitDetailVO = {
    /**  创建时间  */
    createTime?: string;
    /**  创建人  */
    creator?: string;
    /**  客户编号  */
    cusId?: string;
    /**  客户名称  */
    cusName?: string;
    /**  1：含麻黄碱药品  字典polarbear_wms_special_drug_type  */
    drugType?: number;
    /**  特殊药品类型文本  */
    drugTypeText?: string;
    /**  id  */
    id?: string;
    /**  月销售限制数量  */
    monthLimitQty?: number;
    /**  单个销售单限制数量  */
    onceLimitQty?: number;
    /**  修改人  */
    operator?: string;
    /**  申请原因  */
    reason?: string;
    /**  备注  */
    remark?: string;
    /**  状态 0-未审核 1-审核 3-已取消 4-已关闭  */
    status?: number;
    /**  修改时间  */
    updateTime?: string;
  };

  type GspSpecialDrugSaleLimitPageQueryVO = {
    /**  客户编号  */
    cusId?: string;
    /**  1：含麻黄碱药品  字典polarbear_wms_special_drug_type  */
    drugType?: number;
    pageQuery?: PageQuery;
    /**  状态 0-未审核 1-审核 3-已取消 4-已关闭  */
    status?: number;
  };

  type GspSpecialDrugSaleLimitUpdateVO = {
    /**  客户编号  */
    cusId?: string;
    /**  客户名称  */
    cusName?: string;
    /**  1：含麻黄碱药品  字典polarbear_wms_special_drug_type  */
    drugType?: number;
    /**  id  */
    id?: string;
    /**  月销售限制数量  */
    monthLimitQty?: number;
    /**  单个销售单限制数量  */
    onceLimitQty?: number;
    /**  申请原因  */
    reason?: string;
    /**  备注  */
    remark?: string;
  };

  type GspSpecialDrugSaleLimitVO = {
    /**  创建时间  */
    createTime?: string;
    /**  创建人  */
    creator?: string;
    /**  客户编号  */
    cusId?: string;
    /**  客户名称  */
    cusName?: string;
    /**  1：含麻黄碱药品  字典polarbear_wms_special_drug_type  */
    drugType?: number;
    /**  特殊药品类型文本  */
    drugTypeText?: string;
    /**  id  */
    id?: string;
    /**  修改人  */
    operator?: string;
    /**  申请原因  */
    reason?: string;
    /**  状态 0-未审核 1-审核 3-已取消 4-已关闭  */
    status?: number;
    /**  修改时间  */
    updateTime?: string;
  };

  type GspStaffPageQueryVO = {
    /**  出生年月(生日)  */
    birthday?: string;
    /**  执业药师证件url  */
    certificateUrl?: string;
    /**  创建时间  */
    createTime?: string;
    /**  部门编码  */
    departmentId?: string;
    /**  部门名称  */
    departmentName?: string;
    /**  学历 1-小学 2-初中 3-高中 4-大专 5-本科 6-硕士 7-博士  */
    education?: number;
    /**  紧急联系人姓名  */
    emergencyContactName?: string;
    /**  紧急联系人电话  */
    emergencyContactPhone?: string;
    /**  紧急联系人关系  */
    emergencyContactRelation?: string;
    /**  入职日期  */
    entryDateEnd?: string;
    /**  入职日期  */
    entryDateStart?: string;
    /**  家庭住址  */
    familyAddress?: string;
    /**  档案编号  */
    fileNumber?: string;
    /**  主键id(员工编码)  */
    id?: string;
    /**  身份证号码  */
    idCardNo?: string;
    /**  主键id集合  */
    ids?: string[];
    /**  直系亲属名称  */
    immediateFamilyName?: string;
    /**  直系亲属电话  */
    immediateFamilyPhone?: string;
    /**  直系亲属关系  */
    immediateFamilyRelation?: string;
    /**  是否执业药师  */
    isLicensedPharmacist?: number;
    /**  专业  */
    major?: string;
    /**  婚否 0-未婚 1已婚  */
    maritalStatus?: number;
    /**  手机  */
    mobilePhone?: string;
    /**  员工名称  */
    name?: string;
    /**  民族  */
    nation?: string;
    pageQuery?: PageQuery;
    /**  岗位职务  */
    position?: string;
    /**  职称  */
    professionalTitle?: string;
    /**  毕业院校  */
    schooltag?: string;
    /**  性别 0-女 1-男  */
    sex?: number;
    /**  是否停用  0-(否)启用 1-(是)停用 */
    status?: number;
    /**  租户id  */
    tenantId?: string;
    /**  修改时间  */
    updateTime?: string;
  };

  type GspStaffVO = {
    /**  详细地址-(住址)  */
    address: string;
    /**  出生年月(生日)  */
    birthday: string;
    /**  执业药师证件url  */
    certificateUrl?: string;
    /**  市-(住址)  */
    city: string;
    /**  市编码-(住址)  */
    cityCode: string;
    /**  部门编码  */
    departmentId: string;
    /**  部门名称  */
    departmentName: string;
    /**  区/县-(住址)  */
    district: string;
    /**  区/县编码-(住址)  */
    districtCode: string;
    /**  学历 1-小学 2-初中 3-高中 4-大专 5-本科 6-硕士 7-博士  */
    education?: number;
    /**  紧急联系人姓名  */
    emergencyContactName: string;
    /**  紧急联系人电话  */
    emergencyContactPhone: string;
    /**  紧急联系人关系  */
    emergencyContactRelation: string;
    /**  入职日期  */
    entryDate: string;
    /**  主键id(员工编码)  */
    id?: string;
    /**  身份证号码  */
    idCardNo: string;
    /**  直系亲属名称  */
    immediateFamilyName: string;
    /**  直系亲属电话  */
    immediateFamilyPhone: string;
    /**  直系亲属关系  */
    immediateFamilyRelation: string;
    /**  是否执业药师 0-否 1-是  */
    isLicensedPharmacist: number;
    /**  专业  */
    major: string;
    /**  婚否 0-未婚 1已婚  */
    maritalStatus: number;
    /**  手机  */
    mobilePhone: string;
    /**  员工名称 */
    name: string;
    /**  民族  */
    nation: string;
    /**  岗位职务  */
    position: string;
    /**  职称  */
    professionalTitle?: string;
    /**  省-(住址)  */
    province: string;
    /**  省编码-(住址)  */
    provinceCode: string;
    /**  毕业院校  */
    schooltag: string;
    /**  性别 0-女 1-男  */
    sex: number;
    /**  是否停用  0-(否)启用 1-(是)停用 */
    status: number;
    /**  操作日志  */
    traceLogVOList?: TraceLogVO[];
  };

  type GspStockOutPageQueryVO = {
    /**  商品条码  */
    barCode?: string;
    /**  销售日期结束时间  */
    createTimeEnd?: string;
    /**  销售日期开始时间  */
    createTimeStart?: string;
    /**  购货单位 企业名称/编码  */
    cusInfo?: string;
    /**  退货单号  */
    docId?: string;
    /**  剂型  */
    dosageForm?: string;
    /**  经营范围  */
    gspCategory?: string;
    /**  商品名称/拼音码/编码  */
    keyword?: string;
    /**  出库时间结束  */
    orderConfirmTimeEnd?: string;
    /**  出库时间开始  */
    orderConfirmTimeStart?: string;
    /** 订单类型 201：零售 202：批发 */
    orderType?: number;
    /**  销售单号  */
    originalOrderId?: string;
    pageQuery?: PageQuery;
    /**  批准文号  */
    regisTrationNumber?: string;
    /**  出库单号  */
    stockOutId?: string;
    /**  仓库编码 */
    storeCode?: string;
    /**  供货单位 企业名称/编码  */
    supplierInfo?: string;
    /**  通用名称  */
    wareGeneralName?: string;
    /** 库房类型 0 合格品仓 1 不合品仓  2 待处理仓 */
    warehouseType?: number;
  };

  type GspStockProduceNearlyEffectivePageQueryVO = {
    /**  gsp类别  */
    gspCategory?: string;
    pageQuery?: PageQuery;
    /**  批准文号  */
    regisTrationNumber?: string;
    /**  商品信息  */
    skuInfo?: string;
    /**  仓库编号  */
    storeCode?: string;
    /**  效期剩余天数  */
    validityNumEnd?: number;
    /**  效期剩余天数  */
    validityNumStart?: number;
    /**  通用名称  */
    wareGeneralName?: string;
  };

  type GspStockProduceNearlyEffectiveVO = {
    /**  商品条码  */
    barCode?: string;
    /**  创建时间  */
    createTime?: string;
    /**  剂型  */
    dosageForm?: string;
    /**  客户集  */
    entrustCusCode?: string;
    /**  客户集名称  */
    entrustCusName?: string;
    /**  失效日期  */
    expirationDate?: string;
    /**  gsp类别  */
    gspCategory?: string;
    /**  经营范围  */
    gspCategoryName?: string;
    /**  id  */
    id?: string;
    /**  可用数量  */
    inventoryQty?: number;
    /**  厂家  */
    manufacturer?: string;
    /**  上市许可证持有人  */
    permitHolder?: string;
    /**  生产批号  */
    produceCode?: string;
    /**  产地  */
    producingArea?: string;
    /**  生产日期  */
    productionDate?: string;
    /**  批准文号  */
    regisTrationNumber?: string;
    /**  商品编码  */
    skuId?: string;
    /**  商品规格  */
    skuModel?: string;
    /**  商品名称  */
    skuName?: string;
    /**  拼音简拼  */
    skuPinyin?: string;
    /**  商品接批号编码  */
    skuProduceCode?: string;
    /**  快照日期  */
    snapshotDate?: string;
    /**  本位码  */
    standardCode?: string;
    /**  物理仓编码  */
    storeCode?: string;
    /**  物理仓名称  */
    storeName?: string;
    /**  单位  */
    unit?: string;
    /**  更新时间  */
    updateTime?: string;
    /**  效期剩余天数  */
    validity?: number;
    /**  通用名称  */
    wareGeneralName?: string;
    /**  仓库编码  */
    warehouseId?: string;
    /**  仓库名称  */
    warehouseName?: string;
    /**  仓库类型  */
    warehouseType?: number;
  };

  type GspStockProducePageQueryVO = {
    /**  本位码  */
    baseCode?: string;
    /**  处理结果， 0：文件解析或数字签名验证失，1：处理成功，2：文件解析或数字签名验证失败 */
    dealResult?: string;
    /**  处理状态， 0 表示未处理； 1 表示处理完成  */
    dealStatus?: number;
    /**  查询结束时间  */
    endTime?: string;
    /**  回传文件ID  */
    fileId?: string;
    pageQuery?: PageQuery;
    /**  生产批号  */
    produceCode?: string;
    /**  上报状态 0：未上报 1：已上报  */
    reportStatus?: number;
    /**  上报时间  */
    reportTimeEnd?: string;
    /**  上报时间  */
    reportTimeStart?: string;
    /**  查询开始时间  */
    startTime?: string;
    /**  库存时间  */
    stockDateEnd?: string;
    /**  库存时间  */
    stockDateStart?: string;
  };

  type GspStockProduceVO = {
    /**  本位码  */
    baseCode?: string;
    /**  处理结果描述，当 dealResult 不为 1 时返回错误提示  */
    dealDesc?: string;
    /**  处理结果代码 */
    dealResult?: string;
    /**  处理状态， 0 表示未处理； 1 表示处理完成  */
    dealStatus?: number;
    /**  处理完成时间  */
    dealTime?: string;
    /**  失效日期  */
    expirationDate?: string;
    /**  回传文件ID  */
    fileId?: string;
    id?: string;
    /**  其他补充说明  */
    other?: string;
    /**  生产批号  */
    produceCode?: string;
    /**  生产日期  */
    productionDate?: string;
    /**  库存数量  */
    qty?: number;
    /**  上报状态 0：未上报 1：已上报  */
    reportStatus?: number;
    /**  上报时间  */
    reportTime?: string;
    /**  包装规格  */
    skuModel?: string;
    /**  来源表ID  */
    sourceId?: string;
    /**  库存时间  */
    stockDate?: string;
    /**  租户编码  */
    tenantId?: string;
  };

  type GspUnqualifiedDetailItemVO = {
    /**  条码  */
    barCode?: string;
    /**  报损原因 */
    breakageReason?: string;
    /**  单据时间/创建日期  */
    createTime?: string;
    /**  处理意见  */
    dealSuggestion?: string;
    /**  药品分类  */
    drugCategoryName?: string;
    /**  有效期至 */
    dueDate?: string;
    /**  id  */
    id?: string;
    /**  厂家  */
    manufacturer?: string;
    /**  生产批号 */
    produceCode?: string;
    /**  生产日期 */
    produceDate?: string;
    /**  商品数量 */
    quantity?: number;
    /**  批准文号  */
    regisTrationNumber?: string;
    /**  备注 */
    remark?: string;
    /**  单据编号  */
    reportBreakageId?: string;
    /**  商品ID  */
    skuId?: string;
    /**  sku规格  */
    skuModel?: string;
    /**  商品名称  */
    skuName?: string;
    /**  商品拼音  */
    skuPinyin?: string;
    /**  仓库编码  */
    storeCode?: string;
    /**  仓库名称  */
    storeName?: string;
    /**  单位  */
    unit?: string;
    /**  通用名称  */
    wareGeneralName?: string;
  };

  type GspWareFirstStockOutRecordPageQueryVO = {
    /**  商品条码  */
    barCode?: string;
    /**  客户名称  */
    cusInfo?: string;
    /**  厂家  */
    manufacturer?: string;
    /**  出库时间  */
    orderConfirmTimeEnd?: string;
    /**  出库时间  */
    orderConfirmTimeStart?: string;
    pageQuery?: PageQuery;
    /**  商品编码/拼音码/商品名称  */
    skuInfo?: string;
    /**  仓库编码  */
    storeCode?: string;
  };

  type GspWareFirstStockOutRecordVO = {
    /**  总额  */
    amt?: number;
    /**  商品条码  */
    barCode?: string;
    /**  创建时间  */
    createTime?: string;
    /**  客户编码  */
    cusId?: string;
    /**  客户名称  */
    cusName?: string;
    /**  销售单号  */
    docId?: string;
    /**  剂型  */
    dosageForm?: string;
    /**  剂型名称  */
    dosageFormName?: string;
    /**  有效日期  */
    expiredDate?: string;
    /**  外部商品编码  */
    externalSkuId?: string;
    /**  gsp类别  */
    gspCategory?: string;
    /**  gsp类别名称  */
    gspCategoryName?: string;
    /**  id  */
    id?: string;
    /**  生产厂家  */
    manufacturer?: string;
    /**  出库时间  */
    orderConfirmTime?: string;
    /**  外部单号  */
    originBillId?: string;
    /**  许可证持有人  */
    permitHolder?: string;
    /**  单价  */
    price?: number;
    /**  生产批号  */
    produceCode?: string;
    /**  产地  */
    producingArea?: string;
    /**  生产日期  */
    productionDate?: string;
    /**  批准文号  */
    regisTrationNumber?: string;
    /**  商品编码  */
    skuId?: string;
    /**  规格  */
    skuModel?: string;
    /**  商品名称  */
    skuName?: string;
    /**  商品名称拼音  */
    skuPinyin?: string;
    /**  本位码  */
    standardCode?: string;
    /**  出库通知单号  */
    stockNoticeId?: string;
    /**  出库单编号  */
    stockResultId?: string;
    /**  物理仓编码  */
    storeCode?: string;
    /**  物理仓名称  */
    storeName?: string;
    /**  税收分类编码  */
    taxClassificationCode?: string;
    /**  税率  */
    taxRate?: number;
    /**  出库数量  */
    totalQty?: number;
    /**  单位  */
    unit?: string;
    /**  更新时间  */
    updateTime?: string;
    /**  通用名称  */
    wareGeneralName?: string;
  };

  type GspWareVO = {
    /**  剂型编码  */
    dosageForm?: string;
    /**  生产厂家  */
    manufacturer?: string;
    /**  上市许可证持有人  */
    permitHolder?: string;
    /**  批号  */
    produceCode?: string;
    /**  批准文号  */
    regisTrationNumber?: string;
    /**  商品编号  */
    skuId?: string;
  };

  type InvoiceMonthStatisticsViewPageQueryVO = {
    pageQuery?: PageQuery;
    /** 统计周期 */
    statisticsRange?: string;
    /** 供应商编码 */
    supplierId?: string;
    /**  供应商  */
    supplierName?: string;
  };

  type InvoiceMonthStatisticsViewVO = {
    /** 本期(调整) 调整金额(含税) */
    adjustAmt?: number;
    /** 本期(调整) 调整金额(不含税) */
    adjustNoTaxAmt?: number;
    /** 期末 成本金额(含税) */
    afterAmt?: number;
    /** 期末 期初成本金额(不含税) */
    afterNoTaxAmt?: number;
    /** 期末 数量 */
    afterQty?: number;
    /** 本期(采购收货退货) 金额(含税) */
    amount?: number;
    /** 期末账龄 0-30天 */
    amount30?: number;
    /** 期末账龄 31-45天 */
    amount45?: number;
    /** 期末账龄 46-60天 */
    amount60?: number;
    /** 期末账龄 60-90天 */
    amount90?: number;
    /** 本期(开票) 开票数量 */
    articulationQty?: number;
    /** 期初 成本金额(含税) */
    beforeAmt?: number;
    /** 期初 期初成本金额(不含税) */
    beforeNoTaxAmt?: number;
    /** 期初 数量 */
    beforeQty?: number;
    /** 本期(采购收货退货) 数量 */
    inOutQty?: number;
    /** 本期(开票) 开票金额(含税) */
    invoiceAmt?: number;
    /** 本期(开票) 开票金额(不含税) */
    invoiceNoTaxAmt?: number;
    /** 本期 已开票税额 */
    invoicePayTaxAmt?: number;
    /** 尾差金额(含税) */
    lastDiffAmt?: number;
    /** 尾差金额(不含税) */
    lastDiffNoTaxAmt?: number;
    /** 本期(采购收货退货) 金额(不含税) */
    noTaxAmt?: number;
    /** 本期 通知数量 */
    noticeQty?: number;
    /** 期末账龄 91天以上 */
    otherAmount?: number;
    /** 结账月份 */
    statisticsRange?: string;
    /** 供应商编码 */
    supplierId?: string;
    /** 供应商 */
    supplierName?: string;
    /** 税率变更调整金额(不含税) */
    taxRateAdjustNoTaxAmt?: number;
  };

  type InvoiceStatisticsDetailMonthPageQueryVO = {
    pageQuery?: PageQuery;
    /** 结算月份 */
    statisticsRange?: string;
    /** 供应商编码 */
    supplierId?: string;
  };

  type InvoiceStatisticsDetailViewPageQueryVO = {
    pageQuery?: PageQuery;
    supplierId?: string;
  };

  type InvoiceStatisticsViewPageQueryVO = {
    pageQuery?: PageQuery;
    supplierId?: string;
  };

  type InvoiceStatisticsViewVO = {
    /** 0-30天 */
    amount30?: number;
    /** 31-45天 */
    amount45?: number;
    /** 46-60天 */
    amount60?: number;
    amount90?: number;
    /** 唯一id */
    id?: string;
    /** 90天以上 */
    otherAmount?: number;
    /** 供应商编码 */
    supplierId?: string;
    /** 供应商 */
    supplierName?: string;
    /** 成本金额（含税） */
    waitArticulationAmount?: number;
    /** 成本金额（不含税） */
    waitArticulationNoTaxAmt?: number;
    /** 数量 */
    waitArticulationQty?: number;
  };

  type LogisticsDetailVO = {
    /** 收货地址 */
    collectAddress?: string;
    /** 收货单位 */
    collectCompany?: string;
    /** 发货地址 */
    deliveryAddress?: string;
    /** 装箱箱号 */
    deliveryCode?: string;
    /** 耗时(单位秒) */
    elapsedTimes?: number[];
    /** 外部单号 */
    externalOrderId?: string;
    /** id */
    id?: string;
    /** 通知单号 */
    orderCode?: string;
    /** 出库单号 */
    outResultId?: string;
    /**  出库状态 1-仓库已接单 2-出库指令已生成 3-拣货完成 4-分拣完成 5-装箱完成 6-仓库交接 7-出库 */
    outStatus?: number;
    /**  出库状态  */
    outStatusText?: string;
    /** 出库类型 1-采退出库 2-销售出库 */
    outType?: number;
    /** 采购退货单号 */
    purReturnOrderId?: string;
    /** 批发销售单号 */
    saleOrderId?: string;
    /** 业务员 */
    salesMan?: string;
    /** 业务员id */
    salesManId?: string;
    /** 仓库接单时间 */
    stockNoticeTime?: string;
    /**  仓库编码  */
    storeCode?: string;
    /**  仓库名称  */
    storeName?: string;
    /**  运输状态 */
    tmsOperationType?: number;
    /**  运输状态 1-配送已接单 2-已揽收 3-已分配 4-已入运转中心 5-已出运转中心 6-提货 7-到达目的城市 8-开始配送 9-配送完成 10-电子回单 11-已签收 12-拒收 13-部分拒收 */
    tmsOperationTypeText?: string;
    /** 物流跟踪信息 */
    trackingInfo?: LogisticsTrackingVO[];
  };

  type LogisticsPageQueryVO = {
    /**  收货单位  */
    collectCompany?: string;
    /**  发货单号  */
    deliveryCode?: string;
    /**  外部单号  */
    externalOrderId?: string;
    /**  是否配送完成 0-否 1-是  */
    isDeliveryFinish?: number;
    /**  通知单号  */
    orderCode?: string;
    /**  出库单号  */
    outResultId?: string;
    /**  出库状态 1-仓库已接单 2-出库指令已生成 3-拣货完成 4-分拣完成 5-装箱完成 6-仓库交接 7-出库 8-系统已接单 9-打波次 */
    outStatus?: number;
    /**  出库类型 1-采退出库 2-销售出库  */
    outType?: number;
    pageQuery?: PageQuery;
    /**  采购退货单号  */
    purReturnOrderId?: string;
    /**  批发销售单号  */
    saleOrderId?: string;
    /**  业务员  */
    salesMan?: string;
    /**  快递单号  */
    shipmentNo?: string;
    /**  仓库接单时间  */
    stockNoticeTimeEnd?: string;
    /**  仓库接单时间  */
    stockNoticeTimeStart?: string;
    /**  仓库编码  */
    storeCode?: string;
    /**  运输状态 1-配送已接单 2-已揽收 3-已调度 4-中转入站 5-中转出站 6-提货 7-已到站 8-开始配送 9-完成 10-电子回单 11-已签收 12-拒收 13-部分拒收 */
    tmsOperationType?: number;
  };

  type LogisticsRecordVO = {
    /**  车牌号  */
    carNumber?: string;
    /**  收货地址  */
    collectAddress?: string;
    /**  收货单位  */
    collectCompany?: string;
    /**  发货地址  */
    deliveryAddress?: string;
    /**  发货单号  */
    deliveryCode?: string;
    /**  配送完成时间  */
    deliveryFinishTime?: string;
    /**  发货时间  */
    deliveryTime?: string;
    /**  外部单号  */
    externalOrderId?: string;
    /**  交接人  */
    handover?: string;
    /**  id  */
    id?: string;
    /**  是否配送完成 0-否 1-是  */
    isDeliveryFinish?: number;
    /**  通知单号  */
    orderCode?: string;
    /**  出库时间  */
    orderConfirmTime?: string;
    /**  出库单号  */
    outResultId?: string;
    /**  出库状态 1-出库指令已生成 2-仓库已接单 3-拣货完成 4-分拣完成 5-装箱完成 6-仓库交接 7-出库  */
    outStatus?: number;
    /**  出库状态  */
    outStatusText?: string;
    /**  出库类型 1-采退出库 2-销售出库  */
    outType?: number;
    /**  包裹件数  */
    packageNumber?: number;
    /**  采购退货单号  */
    purReturnOrderId?: string;
    /**  批发销售单号  */
    saleOrderId?: string;
    /**  业务员  */
    salesMan?: string;
    /**  业务员id  */
    salesManId?: string;
    /**  快递单号  */
    shipmentNo?: string;
    /**  仓库接单时间  */
    stockNoticeTime?: string;
    /**  仓库编码  */
    storeCode?: string;
    /**  仓库名称  */
    storeName?: string;
    /**  运输状态，1-配送已接单 2-已揽收 3-已分配 4-已入运转中心 5-已出运转中心 6-提货 7-到达目的城市 8-开始配送 9-配送完成 10-电子回单 11-已签收 12-拒收 13-部分拒收  */
    tmsOperationType?: number;
    /**  运输状态  */
    tmsOperationTypeText?: string;
    /**  仓库与物流交接时间  */
    tmsReceiveTime?: string;
    /**  运输单位  */
    transportCompany?: string;
    /**  运输工具  */
    transportTool?: string;
    /**  运输方式  */
    transportType?: string;
    /**  运输员  */
    transporter?: string;
  };

  type LogisticsTrackingInfoVO = {
    /** 发货单号 */
    deliveryCode?: string;
    /** 订单号/通知单号 */
    orderCode?: string;
    /** 物流跟踪信息 */
    trackingInfo?: LogisticsTrackingVO[];
  };

  type LogisticsTrackingVO = {
    /**  是否超链接  */
    href?: boolean;
    /**  操作说明  */
    operationExplain?: string;
    /**  操作时间  */
    operationTime?: string;
    /**  操作类型  */
    operationType?: string;
  };

  type MonthUnPaySummary = {
    amount?: number;
    month?: string;
  };

  type MonthUnPaySummaryVO = {
    /** 金额(含税) */
    amount?: number;
    /** 月份 */
    month?: string;
  };

  type OmsReportSaleReturnInItemVO = {
    /**  创建时间  */
    createTime?: string;
    /**  处理结果描述，当 dealResult 不为 1 时返回错误提示  */
    dealDesc?: string;
    /** 处理结果代码，
0 表示文件解析或数字签名验证失败，需解决错误问题后重新上传；
1 表示文件处理成功，已生成正确业务单据；
2 表示文件中药品或企业校验失败，已生成业务单据，需登录药品流通监管系统修正  */
    dealResult?: string;
    /**  处理状态，0 表示未处理；1 表示处理完成  */
    dealStatus?: number;
    /**  处理完成时间  */
    dealTime?: string;
    /**  有效期至  */
    dueDate?: string;
    /**  文件唯一标识  */
    fileId?: string;
    /**  id  */
    id?: string;
    /**  操作人  */
    operator?: string;
    /**  操作人id  */
    operatorId?: string;
    /**  补充说明  */
    other?: string;
    /**  生产批号  */
    produceCode?: string;
    /**  生产日期  */
    produceDate?: string;
    /**  退货数量  */
    qty?: number;
    /**  退货原因  */
    reason?: string;
    /**  验收员验收员名称 */
    recheckBy?: string;
    /**  购进/验收结论  */
    recheckResult?: string;
    /**  上报状态 0-未上报 1-已上报  */
    reportStatus?: number;
    /**  上报时间  */
    reportTime?: string;
    /**  退货日期时间  */
    returnTime?: string;
    /**  销售单号  */
    saleId?: string;
    /**  包装规格  */
    skuModel?: string;
    /**  本位码  */
    standardCode?: string;
    /**  入库单号  */
    stockInId?: string;
    /**  修改时间  */
    updateTime?: string;
  };

  type OrderItem = {
    asc?: boolean;
    column?: string;
  };

  type PackageDetailVO = {
    /** 生成时间 */
    createTime?: string;
    /** 包裹号 */
    packageCode?: string;
    /** 包裹商品 */
    packageWares?: PackageWareVO[];
    /** 快递公司服务编码 */
    tmsCode?: string;
    /** 最新物流状态 */
    tmsDesc?: string;
    /** 快递公司 */
    tmsName?: string;
    /** 运单号码 */
    tmsOrderCode?: string;
  };

  type PackageInfoPageQueryVO = {
    /** 包裹号 */
    packageCode?: string;
    pageQuery?: PageQuery;
    /** 通知单ID */
    stockNoticeId?: string;
  };

  type PackageInfoVO = {
    /** 生成时间 */
    createTime?: string;
    /** 包裹号 */
    packageCode?: string;
    /** 签收状态 */
    signedStatus?: string;
    /** 签收时间 */
    signedTime?: string;
    /** 商品种类 */
    skuCount?: number;
    /** 商品数量 */
    skuQty?: number;
    /** 快递公司服务编码 */
    tmsCode?: string;
    /** 快递公司 */
    tmsName?: string;
    /** 运单号码 */
    tmsOrderCode?: string;
  };

  type PackageTrackingExpressVO = {
    /** 信息状态 */
    desc?: string;
    /** 是否是超链接 */
    href?: boolean;
    /** 时间 */
    time?: string;
  };

  type PackageWareVO = {
    /** 批号 */
    batchCode?: string;
    /** 在此包裹里该商品的数量 */
    itemQuantity?: number;
    /** 生产厂家 */
    manufacturer?: string;
    /** 商品ID */
    skuId?: string;
    /** 规格 */
    skuModel?: string;
    /** 商品名称 */
    skuName?: string;
  };

  type PageQuery = {
    current?: number;
    orders?: OrderItem[];
    size?: number;
  };

  type PurStockInDetailVO = {
    /** 合同编码 */
    contractCode?: string;
    /** 采购员 */
    creater?: string;
    /** 采购订单id */
    docId?: string;
    /** 订单类型，1：委托订单:2：自采订单 */
    docType?: number;
    /** 客户集Id */
    entrustCusCode?: string;
    /** 客户集名称 */
    entrustCusName?: string;
    /** 采购入库单编号 */
    id?: string;
    /** 合计入库金额 */
    inStockAmt?: number;
    /** 入库总数量 */
    inStockNum?: number;
    /** 入库类型，1：普通，2：闪电 */
    inStockType?: number;
    /** 入库总条目 */
    itemCount?: number;
    /** 审核人 */
    operator?: string;
    /** 订单备注 */
    remark?: string;
    /** 结算方式 */
    settleWay?: number;
    /** 结算方式文本 */
    settleWayText?: string;
    /** 制单确认状态 */
    status?: number;
    /** 单据状态 */
    statusText?: string;
    /** 入库商品 */
    stockInWares?: PurStockInWareVO[];
    /** 入库通知单编号 */
    stockNoticeId?: string;
    /** 仓库编号 */
    storeCode?: string;
    /** 仓库名称 */
    storeName?: string;
    /** 供应商名称 */
    supplierName?: string;
    /** 审核时间 */
    updateTime?: string;
  };

  type PurStockInNoticeDetailVO = {
    /**  差异说明 */
    description?: string;
    /** 药品分类编码 */
    drugCategory?: string;
    /**  有效日期 */
    expiredDate?: string;
    /**  主键 */
    id?: string;
    /** 本次通知到货数量 */
    inQty?: number;
    /**  生产厂家 */
    manufacturer?: string;
    /** 未通知收货数量 */
    noNoticeQty?: number;
    /** 采购订单明细id */
    orderDetailId?: string;
    /**  单价 */
    price?: number;
    /**  生产批号 */
    produceCode?: string;
    /**  生产日期 */
    productionDate?: string;
    /**  入库单通知单id */
    purStockInId?: string;
    /**  采购数量 */
    qty?: number;
    /**  实际入货数量 */
    realityInQty?: number;
    /**  商品编码 */
    skuId?: string;
    /**  规格 */
    skuModel?: string;
    /**  商品名称 */
    skuName?: string;
  };

  type PurStockInNoticeListVO = {
    /**  审核时间 */
    checkTime?: string;
    /**  审核人 */
    checker?: string;
    /**  客户集 */
    entrustCusCode?: string;
    /**  客户集名称 */
    entrustCusName?: string;
    /**  通知单号  */
    id?: string;
    /**  采购单号 */
    orderId?: string;
    /** 入库类型 1: 普通 2：闪电 */
    orderType?: number;
    /** 状态 0: 未审核 1：审核通过 2：审核不通过 3：已取消 4：已关闭 */
    status?: number;
    /**  仓库编码 */
    storeCode?: string;
    /**  仓库名称 */
    storeName?: string;
    /**  供应商编码 */
    supplierId?: string;
    /**  供应商名称 */
    supplierName?: string;
    /** 是否直调 */
    zdAgreement?: boolean;
    /** 直调协议编号 */
    zdAgreementId?: string;
  };

  type PurStockInNoticePageQueryVO = {
    /** 客户编码 */
    cusId?: string;
    /** 单据类型  1 委托订单 2 自采订单 */
    docType?: number;
    /** 结束到货时间 */
    endArrivalTime?: string;
    /** 客户集编码 */
    entrustedCusCode?: string;
    /** 客户集编码 */
    entrustedCusName?: string;
    /** 通知单号  */
    id?: string;
    /** 通知单号数组 */
    ids?: string[];
    /** 采购单号 */
    orderId?: string;
    /** 入库类型 1: 普通 2：闪电 */
    orderType?: number;
    pageQuery?: PageQuery;
    /** 商品编码 */
    skuId?: string;
    /** 开始到货时间 */
    startArrivalTime?: string;
    /** 状态 0: 未审核 1：审核通过 2：审核不通过 3：已取消 4：已关闭 */
    status?: number;
    /** 仓库编码 */
    storeCode?: string;
    /** 仓库编码 */
    storeName?: string;
    /** 供应商编码 */
    supplierId?: string;
    /** 供应商编码 */
    supplierName?: string;
    /** 是否直调 */
    zdAgreement?: boolean;
    /** 直调协议编号 */
    zdAgreementId?: string;
  };

  type PurStockInNoticeVO = {
    /** 采购员 */
    buyer?: string;
    /** 采购员id */
    buyerId?: string;
    /** 审核时间 */
    checkTime?: string;
    /** 审核人 */
    checker?: string;
    /** 审核人id */
    checkerId?: string;
    /** 联系人 */
    contact?: string;
    /** 联系人手机号码 */
    contactPhone?: string;
    /** 客户集编码 */
    entrustCusCode?: string;
    /** 客户集名称 */
    entrustCusName?: string;
    /** 采购入库单编号 */
    id?: string;
    /** 是否审核 */
    isCheck?: boolean;
    /** 操作日志 */
    logList?: TraceLogVO[];
    /** 采购订单id */
    orderId?: string;
    /** 入库类型 1: 普通 2：闪电 */
    orderType?: number;
    /** 商品明细 */
    purStockInDetailList?: PurStockInNoticeDetailVO[];
    /** 到货时间 */
    receiptDate?: string;
    /** 备注 */
    remark?: string;
    /** 状态 0: 未审核 1：审核通过 2：审核不通过 3：已取消 4：已关闭 */
    status?: number;
    /** 仓库编码 */
    storeCode?: string;
    /** 仓库名称 */
    storeName?: string;
    /** 供应商编码 */
    supplierId?: string;
    /** 供应商名称 */
    supplierName?: string;
    /** 是否直调 */
    zdAgreement?: boolean;
    /** 直调协议编号 */
    zdAgreementId?: string;
  };

  type PurStockInOnWayExportVO = {
    /** 差异金额 */
    amtDiff?: number;
    /** 商品条码 */
    barCode?: string;
    /** 合同编号 */
    contractCode?: string;
    /** 单据时间 */
    createTime?: string;
    /** 采购时效 */
    dateDiff?: number;
    /** 生产厂家 */
    manufacturer?: string;
    /** 采购金额 */
    orderAmt?: number;
    /** 采购订单号 */
    orderId?: string;
    /** 采购数量 */
    orderQty?: number;
    /** 采购单价 */
    price?: number;
    /** 商品批号 */
    produceCode?: string;
    /** 差异数量 */
    qtyDiff?: number;
    /** 入库金额 */
    receiptAmt?: number;
    /** 入库数量 */
    receiptQty?: number;
    /** 收货时间 */
    receiveDate?: string;
    /** 商品编码 */
    skuId?: string;
    /** 商品规格 */
    skuModel?: string;
    /** 商品名称 */
    skuName?: string;
    /** 供应商编码 */
    supplierId?: string;
    /** 供应商名称 */
    supplierName?: string;
    /** 单位 */
    unit?: string;
  };

  type PurStockInOnWayPageQueryVO = {
    /** 合同代码 */
    contractCode?: string;
    /** 最大创建时间 */
    maxCreateTime?: string;
    /** 最小创建时间 */
    minCreateTime?: string;
    /** 订单id */
    orderId?: string;
    pageQuery?: PageQuery;
    /** sku id */
    skuId?: string;
    /** 供应商id */
    supplierId?: string;
    /** 供应商名称 */
    supplierName?: string;
  };

  type PurStockInOnWayStatisticsVO = {
    /** 在途金额 */
    onWayAmt?: number;
    /** 在途数量 */
    onWayQty?: number;
    /** 采购金额 */
    orderAmt?: number;
    /** 采购数量 */
    orderQty?: number;
    /** 入库金额 */
    receiptAmt?: number;
    /** 入库数量 */
    receiptQty?: number;
  };

  type PurStockInOnWayVO = {
    /** 差异金额 */
    amtDiff?: number;
    /** 合同代码 */
    contractCode?: string;
    /** 创建时间 */
    createTime?: string;
    /** 日期差异 */
    dateDiff?: number;
    /** 订单金额 */
    orderAmt?: number;
    /** 订单id */
    orderId?: string;
    /** 订单数量 */
    orderQty?: number;
    /** 差异数量 */
    qtyDiff?: number;
    /** 收货金额 */
    receiptAmt?: number;
    /** 收货数量 */
    receiptQty?: number;
    /** 供应商id */
    supplierId?: string;
    /** 供应商名称 */
    supplierName?: string;
  };

  type PurStockInPageQueryVO = {
    /** 客户编码 */
    cusId?: string;
    /** 采购订单号id */
    docId?: string;
    /** 订单类型 1:委托订单 2:自采订单, 字典编码：polarbear_wms_biz_stock_doc_type */
    docType?: number;
    /** 结束审核时间 */
    endAuditTime?: string;
    /** 客户集Id, 查批发客户表 */
    entrustCusCode?: string;
    /** 入库单号 */
    id?: string;
    /** 入库单号数组（导出商品传） */
    ids?: string[];
    /** 入库类型，1：普通，2：闪电, 字典编码：polarbear_wms_result_stock_type */
    inStockType?: number;
    pageQuery?: PageQuery;
    /** 结算方式 */
    settleWay?: number;
    /** 输入商品名称/拼音码/编码 */
    skuInfo?: string;
    /** 开始审核时间 */
    startAuditTime?: string;
    /** 制单，确认 */
    status?: number;
    /** 收货通知单号 */
    stockNoticeId?: string;
    /** 仓库编号, 字典编码：polarbear_wms_wpf_store_code */
    storeCode?: string;
    /** 供应商名称 */
    supplierName?: string;
  };

  type PurStockInVO = {
    /** 合计金额 */
    amt?: number;
    /** 采购订单id */
    docId?: string;
    /** 单据类型，1：委托订单:2：自采订单 */
    docType?: number;
    /** 客户集Id */
    entrustCusCode?: string;
    /** 客户集名称 */
    entrustCusName?: string;
    /** 采购入库单编号 */
    id?: string;
    /** 入库类型，1：普通，2：闪电 */
    inStockType?: number;
    /** 审核人 */
    operator?: string;
    /** 中台单据编号/包裹单号 */
    outBizCode?: string;
    /** 结算方式文本 */
    settleWayText?: string;
    /** 制单确认状态 */
    status?: number;
    /** 单据状态 */
    statusText?: string;
    /** 入库通知单编号 */
    stockNoticeId?: string;
    /** 仓库编号 */
    storeCode?: string;
    /** 仓库名称 */
    storeName?: string;
    /** 供应商名称 */
    supplierName?: string;
    /** 审核时间 */
    updateTime?: string;
  };

  type PurStockInWareVO = {
    /** 价税合计金额 */
    amount?: number;
    /** 入库总金额 */
    amt?: number;
    /** 不合格品数量 */
    badQty?: number;
    /** 商品分类 */
    categoryText?: string;
    /** 有效日期 */
    expiredDate?: string;
    /** 合格品数量 */
    goodQty?: number;
    /** 经营范围 */
    gspCategory?: string;
    /** 经营范围名称 */
    gspCategoryName?: string;
    /** 入库数量 */
    inQty?: number;
    /** 生产产家 */
    manufacturer?: string;
    /** 不含税金额 */
    noTaxAmt?: number;
    /** 不含税单价 */
    noTaxPrice?: number;
    /** 采购订单明细id */
    orderDetailId?: string;
    /** 采购单号 */
    orderId?: string;
    /** 原ERP单号/采购订单号 */
    originalOrderId?: string;
    /** 税额 */
    payTaxAmt?: number;
    /** 待处理数量 */
    pendingQty?: number;
    /** 单价 */
    price?: number;
    /** 生产批号 */
    produceCode?: string;
    /** 生产日期 */
    productionDate?: string;
    /** 商品编号 */
    skuId?: string;
    /** 商品规格 */
    skuModel?: string;
    /** 商品名称 */
    skuName?: string;
    /** 入库仓库 */
    storeName?: string;
    /** 税收分类编码 */
    taxClassificationCode?: string;
    /** 单个商品税额 */
    taxPrice?: number;
    /** 税率 */
    taxRate?: number;
    /** 单位名称 */
    unit?: string;
  };

  type PurStockOutDetailVO = {
    /** 合同编码 */
    contractCode?: string;
    /** 采购员 */
    creater?: string;
    /** 采退服务单号 */
    docId?: string;
    /** 订单类型，1: 委托订单、2:自采订单 */
    docType?: number;
    /** 客户集Id */
    entrustCusCode?: string;
    /** 客户集名称 */
    entrustCusName?: string;
    /** 采购出库单编号 */
    id?: string;
    /** 退货总条目 */
    itemCount?: number;
    /** 审核人 */
    operator?: string;
    /** 采购订单号 */
    originalOrderId?: string;
    /** 已退总金额 */
    outStockAmt?: number;
    /** 已退总数量 */
    outStockNum?: number;
    /** 出库类型，1：普通，2：闪电, 字典编码：polarbear_wms_result_stock_type */
    outStockType?: number;
    /** 入库商品 */
    outStockWares?: PurStockOutWareVO[];
    /** 退货原因 */
    returnReason?: string;
    /** 单据状态 */
    status?: number;
    /** 单据状态 */
    statusText?: string;
    /** 采购入库单号 */
    stockInResultId?: string;
    /** 出库通知单编号 */
    stockNoticeId?: string;
    /** 仓库编号 */
    storeCode?: string;
    /** 仓库名称 */
    storeName?: string;
    /** 供应商名称 */
    supplierName?: string;
    /** 审核时间 */
    updateTime?: string;
  };

  type PurStockOutPageQueryVO = {
    /** 客户编码 */
    cusId?: string;
    /** 单据类型 1:委托订单 2:自采订单, 字典编码：polarbear_wms_biz_stock_doc_type */
    docType?: number;
    /** 结束审核时间 */
    endAuditTime?: string;
    /** 客户集, 查批发客户表 */
    entrustCusCode?: string;
    /** 单据编码 */
    id?: string;
    /** 单据编码数组 */
    ids?: string[];
    /** 采购订单号 */
    originalOrderId?: string;
    /** 出库类型，1：普通，2：闪电, 字典编码：polarbear_wms_result_stock_type */
    outStockType?: number;
    pageQuery?: PageQuery;
    /** 商品名称/拼音码/编码 */
    skuInfo?: string;
    /** 开始审核时间 */
    startAuditTime?: string;
    /** 单据状态 */
    status?: number;
    /** 采购入库单号 */
    stockInResultId?: string;
    /** 出库通知单号 */
    stockNoticeId?: string;
    /** 仓库编号, 字典编码：polarbear_wms_wpf_store_code */
    storeCode?: string;
    /** 供应商名称 */
    supplierName?: string;
  };

  type PurStockOutVO = {
    /** 合同编码 */
    contractCode?: string;
    /** 采购员 */
    creater?: string;
    /** 退货申请单号 */
    docId?: string;
    /** 订单类型，1：委托订单:2：自采订单 */
    docType?: number;
    /** 客户集Id */
    entrustCusCode?: string;
    /** 客户集名称 */
    entrustCusName?: string;
    /** 采购出库单编号 */
    id?: string;
    /** 审核人 */
    operator?: string;
    /** 采购订单号 */
    originalOrderId?: string;
    /** 中台单据编号/包裹单号 */
    outBizCode?: string;
    /** 出库类型，1：普通，2：闪电, 字典编码：polarbear_wms_result_stock_type */
    outStockType?: number;
    /** 退货原因 */
    returnReason?: string;
    /** 制单确认状态 */
    status?: number;
    /** 单据状态 */
    statusText?: string;
    /** 采购入库单号 */
    stockInResultId?: string;
    /** 退货通知单号 */
    stockNoticeId?: string;
    /** 仓库编号 */
    storeCode?: string;
    /** 仓库名称 */
    storeName?: string;
    /** 供应商名称 */
    supplierName?: string;
    /** 审核时间 */
    updateTime?: string;
  };

  type PurStockOutWareVO = {
    /** 价税合计金额 */
    amount?: number;
    /** 出库总金额 */
    amt?: number;
    /** 批次号 */
    batchNo?: string;
    /** 商品分类 */
    categoryText?: string;
    /** 有效日期 */
    expiredDate?: string;
    /** 经营范围 */
    gspCategory?: string;
    /** 经营范围名称 */
    gspCategoryName?: string;
    /** 生产产家 */
    manufacturer?: string;
    /** 不含税金额 */
    noTaxAmt?: number;
    /** 不含税单价 */
    noTaxPrice?: number;
    /** 原ERP单号 */
    originalOrderId?: string;
    /** 通知单明细id */
    outDetailId?: string;
    /** 申请退库数量 */
    outQty?: number;
    /** 税额 */
    payTaxAmt?: number;
    /** 单价 */
    price?: number;
    /** 生产批号 */
    produceCode?: string;
    /** 生产日期 */
    productionDate?: string;
    /** 实际退货数量 */
    realityOutQty?: number;
    /** 结算方式文本 */
    settleWayText?: string;
    /** 商品编号 */
    skuId?: string;
    /** 商品规格 */
    skuModel?: string;
    /** 商品名称 */
    skuName?: string;
    /** 采购入库单号 */
    stockInResultId?: string;
    /** 税收分类编码 */
    taxClassificationCode?: string;
    /** 单个商品税额 */
    taxPrice?: number;
    /** 税率 */
    taxRate?: number;
    /** 单位 */
    unit?: string;
    /** 库房 */
    warehouseName?: string;
  };

  type ReportDamageOutDetailPageQueryVO = {
    /**  创建时间  */
    createTime?: string;
    /**  处理结果描述，当 dealResult 不为 1 时返回错误提示  */
    dealDesc?: string;
    /**  处理结果代码，0 表示文件解析或数字签名验证失败， 需解决错误问题后重新上传；1 表示文件处理成功，已生成正确业务单据；2 表示文件中药品或企业校验失败，已生成业务单据，需登录药品流通监管系统修正  */
    dealResult?: string;
    /**  处理状态，0 表示未处理；1 表示处理完成  */
    dealStatus?: number;
    /**  处理截止时间  */
    dealTimeEnd?: string;
    /**  处理开始时间  */
    dealTimeSta?: string;
    /**  文件唯一标识  */
    fileId?: string;
    /**  处理人  */
    handler?: string;
    /**  主键id  */
    id?: string;
    /**  操作人  */
    operator?: string;
    /**  操作人id  */
    operatorId?: string;
    /**  补充说明  */
    other?: string;
    pageQuery?: PageQuery;
    /**  生产批号  */
    produceCode?: string;
    /**  上报状态 0-未上报 1-已上报  */
    reportStatus?: number;
    /**  截止上报时间  */
    reportTimeEnd?: string;
    /**  起始上报时间  */
    reportTimeSta?: string;
    /**  商品信息  */
    skuKey?: string;
    /**  来源表id  */
    sourceId?: string;
    /**  本位码  */
    standardCode?: string;
    /**  出库日期(销毁日期)  */
    stockOutDate?: string;
    /**  出库借宿日期  */
    stockOutDateEnd?: string;
    /**  出库开始日期  */
    stockOutDateSta?: string;
    /**  出库单号(销毁单号)  */
    stockOutId?: string;
    /**  租户id  */
    tenantId?: string;
    /**  修改时间  */
    updateTime?: string;
  };

  type ReportDamageOutDetailVO = {
    /**  处理结果描述，当 dealResult 不为 1 时返回错误提示  */
    dealDesc?: string;
    /**  * 处理结果代码，0 表示文件解析或数字签名验证失败，需解决错误问题后重新上传；1 表示文件处理成功，已生成正确业务单据；2 表示文件中药品或企业校验失败，已生成业务单据，需登录药品流通监管系统修正  */
    dealResult?: string;
    /**  处理状态，0 表示未处理；1 表示处理完成  */
    dealStatus?: number;
    /**  处理完成时间  */
    dealTime?: string;
    /**  有效期至  */
    dueDate?: string;
    /**  文件唯一标识  */
    fileId?: string;
    /**  处理人  */
    handler?: string;
    /**  id  */
    id?: string;
    /**  补充说明  */
    other?: string;
    /**  生产批号  */
    produceCode?: string;
    /**  生产日期  */
    produceDate?: string;
    /**  损毁数量  */
    qty?: number;
    /**  损毁原因  */
    reason?: string;
    /**  损毁出库上报主键id  */
    reportDamageOutId?: string;
    /**  上报状态 0-未上报 1-已上报  */
    reportStatus?: number;
    /**  上报时间  */
    reportTime?: string;
    /**  商品编码  */
    skuId?: string;
    /**  包装规格  */
    skuModel?: string;
    /**  商品名称  */
    skuName?: string;
    /**  来源表id  */
    sourceId?: string;
    /**  本位码  */
    standardCode?: string;
    /**  出库日期(销毁日期)  */
    stockOutDate?: string;
    /**  出库单号(销毁单号)  */
    stockOutId?: string;
    /**  供货企业编码  */
    supplierId?: string;
    /**  供货企业名称  */
    supplierName?: string;
    /**  供货企业销售单号  */
    supplierSaleId?: string;
  };

  type ReportDamageOutPageQueryVO = {
    /**  创建时间  */
    createTime?: string;
    /**  处理结果描述，当 dealResult 不为 1 时返回错误提示  */
    dealDesc?: string;
    /**  处理结果代码，0 表示文件解析或数字签名验证失败， 需解决错误问题后重新上传；1 表示文件处理成功，已生成正确业务单据；2 表示文件中药品或企业校验失败，已生成业务单据，需登录药品流通监管系统修正  */
    dealResult?: string;
    /**  处理状态，0 表示未处理；1 表示处理完成  */
    dealStatus?: number;
    /**  处理完成时间  */
    dealTime?: string;
    /**  文件唯一标识  */
    fileId?: string;
    /**  处理人  */
    handler?: string;
    /**  主键id  */
    id?: string;
    /**  操作人  */
    operator?: string;
    /**  操作人id  */
    operatorId?: string;
    /**  补充说明  */
    other?: string;
    pageQuery?: PageQuery;
    /**  上报状态 0-未上报 1-已上报  */
    reportStatus?: number;
    /** 上报时间 */
    reportTime?: string;
    /**  来源表id  */
    sourceId?: string;
    /**  出库日期(销毁日期)  */
    stockOutDate?: string;
    /**  出库结束日期  */
    stockOutDateEnd?: string;
    /**  出库开始日期  */
    stockOutDateSta?: string;
    /**  出库单号(销毁单号)  */
    stockOutId?: string;
    /**  租户id  */
    tenantId?: string;
    /**  修改时间  */
    updateTime?: string;
  };

  type ReportDamageOutVO = {
    /**  创建时间  */
    createTime?: string;
    /**  处理结果描述，当 dealResult 不为 1 时返回错误提示  */
    dealDesc?: string;
    /**  处理结果代码，0 表示文件解析或数字签名验证失败， 需解决错误问题后重新上传；1 表示文件处理成功，已生成正确业务单据；2 表示文件中药品或企业校验失败，已生成业务单据，需登录药品流通监管系统修正  */
    dealResult?: string;
    /**  处理状态，0 表示未处理；1 表示处理完成  */
    dealStatus?: number;
    /**  处理完成时间  */
    dealTime?: string;
    /**  文件唯一标识  */
    fileId?: string;
    /**  处理人  */
    handler?: string;
    /**  主键id  */
    id?: string;
    /**  操作人  */
    operator?: string;
    /**  操作人id  */
    operatorId?: string;
    /**  补充说明  */
    other?: string;
    /**  明細  */
    reportDamageWareOutVOList?: ReportDamageWareOutVO[];
    /**  上报状态 0-未上报 1-已上报  */
    reportStatus?: number;
    reportTime?: string;
    /**  来源表id  */
    sourceId?: string;
    /**  出库日期(销毁日期)  */
    stockOutDate?: string;
    /**  出库单号(销毁单号)  */
    stockOutId?: string;
    /**  租户id  */
    tenantId?: string;
    /**  修改时间  */
    updateTime?: string;
  };

  type ReportDamageWareOutVO = {
    /**  创建时间  */
    createTime?: string;
    /**  有效期至  */
    dueDate?: string;
    /**  主键id  */
    id?: string;
    /**  生产批号  */
    produceCode?: string;
    /**  生产日期  */
    produceDate?: string;
    /**  损毁数量  */
    qty?: number;
    /**  损毁原因  */
    reason?: string;
    /**  损毁出库上报主键id  */
    reportDamageOutId?: string;
    /**  商品编码  */
    skuId?: string;
    /**  包装规格  */
    skuModel?: string;
    /**  商品名称  */
    skuName?: string;
    /**  来源表id  */
    sourceId?: string;
    /**  本位码  */
    standardCode?: string;
    /**  供货企业编码  */
    supplierId?: string;
    /**  供货企业名称  */
    supplierName?: string;
    /**  供货企业销售单号  */
    supplierSaleId?: string;
    /**  租户id  */
    tenantId?: string;
    /**  修改时间  */
    updateTime?: string;
  };

  type ReportPurInItemVO = {
    /**  创建时间  */
    createTime?: string;
    /**  处理结果描述，当 dealResult 不为 1 时返回错误提示  */
    dealDesc?: string;
    /**  处理结果代码，0 表示文件解析或数字签名验证失败，需解决错误问题后重新上传；1 表示文件处理成功，已生成正确业务单据；2 表示文件中药品或企业校验失败，已生成业务单据，需登录药品流通监管系统修正  */
    dealResult?: string;
    /**  处理状态，0 表示未处理；1 表示处理完成  */
    dealStatus?: number;
    /**  处理完成时间  */
    dealTime?: string;
    /**  有效期至  */
    dueDate?: string;
    /**  文件唯一标识  */
    fileId?: string;
    /**  id  */
    id?: string;
    /**  操作人  */
    operator?: string;
    /**  操作人id  */
    operatorId?: string;
    /**  补充说明  */
    other?: string;
    /**  生产批号  */
    produceCode?: string;
    /**  生产日期  */
    produceDate?: string;
    /**  采购日期  */
    purchaseDate?: string;
    /**  采购数量  */
    qty?: number;
    /**  验收员  */
    recheckBy?: string;
    /**  验收员2  */
    recheckBy2?: string;
    /**  购进结论  */
    recheckResult?: string;
    /**  备注  */
    remark?: string;
    /**  采购入库上报主键id  */
    reportPurInId?: string;
    /**  上报状态 0-未上报 1-已上报  */
    reportStatus?: number;
    /**  上报时间  */
    reportTime?: string;
    /**  包装规格  */
    skuModel?: string;
    /**  本位码  */
    standardCode?: string;
    /**  入库单号  */
    stockInId?: string;
    /**  供应商编码  */
    supplierId?: string;
    /**  供应商企业  */
    supplierName?: string;
    /**  供应商销售单号  */
    supplierSaleId?: string;
    /**  温度记录  */
    temp?: number;
    /**  运输结束时间  */
    transportEndTime?: string;
    /**  运输开始时间  */
    transportStartTime?: string;
    /**  运输设备工具  */
    transportTool?: string;
    /**  修改时间  */
    updateTime?: string;
  };

  type ReportPurInPageQueryVO = {
    /**  处理状态，0 表示未处理；1 表示处理完成  */
    dealStatus?: number;
    /**  查询结束时间  */
    endTime?: string;
    pageQuery?: PageQuery;
    /**  上报状态 0-未上报 1-已上报  */
    reportStatus?: number;
    /**  查询开始时间  */
    startTime?: string;
  };

  type ReportPurInVO = {
    /**  创建时间  */
    createTime?: string;
    /**  处理结果描述，当 dealResult 不为 1 时返回错误提示  */
    dealDesc?: string;
    /**  处理结果代码，0 表示文件解析或数字签名验证失败， 需解决错误问题后重新上传；1 表示文件处理成功，已 生成正确业务单据；2 表示文件中药品或企业校验失 败，已生成业务单据，需登录药品流通监管系统修正  */
    dealResult?: string;
    /**  处理状态，0 表示未处理；1 表示处理完成  */
    dealStatus?: number;
    /**  处理完成时间  */
    dealTime?: string;
    /**  文件唯一标识  */
    fileId?: string;
    /**  主键id  */
    id?: string;
    /**  补充说明  */
    other?: string;
    /**  采购日期  */
    purchaseDate?: string;
    /**  验收员  */
    recheckBy?: string;
    /**  验收员2  */
    recheckBy2?: string;
    /**  购进结论  */
    recheckResult?: string;
    /**  明细列表  */
    reportPurWareInVOList?: ReportPurWareInVO[];
    /**  上报状态 0-未上报 1-已上报  */
    reportStatus?: number;
    /**  上报时间  */
    reportTime?: string;
    /**  来源表id  */
    sourceId?: string;
    /**  入库单号  */
    stockInId?: string;
    /**  供应商编码  */
    supplierId?: string;
    /**  供应商企业  */
    supplierName?: string;
    /**  供应商销售单号  */
    supplierSaleId?: string;
    /**  温度记录  */
    temp?: number;
    /**  租户id  */
    tenantId?: string;
    /**  运输结束时间  */
    transportEndTime?: string;
    /**  运输开始时间  */
    transportStartTime?: string;
    /**  运输设备工具  */
    transportTool?: string;
    /**  修改时间  */
    updateTime?: string;
  };

  type ReportPurWareInPageQueryVO = {
    /**  处理结果代码，0 表示文件解析或数字签名验证失败，需解决错误问题后重新上传； 1 表示文件处理成功，已生成正确业务单据；2 表示文件中药品或企业校验失败，已生成业务单据，需登录药品流通监管系统修正  */
    dealResult?: string;
    /**  处理状态，0 表示未处理；1 表示处理完成  */
    dealStatus?: number;
    /**  文件唯一标识  */
    fileId?: string;
    pageQuery?: PageQuery;
    /**  生产批号  */
    produceCode?: string;
    /**  截止采购日期  */
    purchaseDateEnd?: string;
    /**  起始采购日期  */
    purchaseDateSta?: string;
    /**  上报状态 0-未上报 1-已上报  */
    reportStatus?: number;
    /**  截止上报时间  */
    reportTimeEnd?: string;
    /**  起始上报时间  */
    reportTimeSta?: string;
    /**  本位码  */
    standardCode?: string;
    /**  入库单号  */
    stockInId?: string;
    /** 供应商编码  */
    supplierId?: string;
    /**  供货企业  */
    supplierKey?: string;
    /**  供应商编码  */
    supplierName?: string;
    /**  供应商销售单号  */
    supplierSaleId?: string;
  };

  type ReportPurWareInVO = {
    /**  有效期至  */
    dueDate?: string;
    /**  主键  */
    id?: string;
    /**  生产批号  */
    produceCode?: string;
    /**  生产日期  */
    produceDate?: string;
    /**  采购数量  */
    qty?: number;
    /**  备注  */
    remark?: string;
    /**  采购入库上报主键id  */
    reportPurInId?: string;
    /**  包装规格  */
    skuModel?: string;
    /**  来源表id  */
    sourceId?: string;
    /**  本位码  */
    standardCode?: string;
    /**  租户id  */
    tenantId?: string;
  };

  type ReportSaleOutPageQueryVO = {
    /**  处理状态，0 表示未处理；1 表示处理完成  */
    dealStatus?: number;
    /**  查询结束时间  */
    endTime?: string;
    pageQuery?: PageQuery;
    /**  上报状态 0-未上报 1-已上报  */
    reportStatus?: number;
    /**  查询开始时间  */
    startTime?: string;
  };

  type ReportSaleOutVO = {
    /**  到达温度  */
    arrivalTemperature?: number;
    /**  创建时间  */
    createTime?: string;
    /**  采购企业id  */
    cusId?: string;
    /**  采购企业名称  */
    cusName?: string;
    /**  处理结果描述，当 dealResult 不为 1 时返回错误提示  */
    dealDesc?: string;
    /**  处理结果代码  */
    dealResult?: string;
    /**  处理状态，0 表示未处理；1 表示处理完成  */
    dealStatus?: number;
    /**  处理完成时间  */
    dealTime?: string;
    /**  文件唯一标识  */
    fileId?: string;
    /**  主键id  */
    id?: string;
    /**  起运温度  */
    initialTemperature?: number;
    /**  操作人  */
    operator?: string;
    /**  操作人id  */
    operatorId?: string;
    /**  补充说明  */
    other?: string;
    /**  明细列表  */
    reportSaleWareOutVOList?: ReportSaleWareOutVO[];
    /**  上报状态 0-未上报 1-已上报  */
    reportStatus?: number;
    reportTime?: string;
    /**  销售单号  */
    saleId?: string;
    /**  销售时间  */
    saleTime?: string;
    /**  销售员  */
    salesman?: string;
    /**  来源表id  */
    sourceId?: string;
    /**  租户id  */
    tenantId?: string;
    /**  运输结束时间  */
    transportEndTime?: string;
    /**  运输开始时间  */
    transportStartTime?: string;
    /**  运输方式  */
    transportType?: string;
    /**  承运人  */
    transporter?: string;
    /**  修改时间  */
    updateTime?: string;
  };

  type ReportSaleReturnInItemVO = {
    /**  创建时间  */
    createTime?: string;
    /**  批发客户编码  */
    cusId?: string;
    /**  批发客户名称  */
    cusName?: string;
    /**  处理结果描述，当 dealResult 不为 1 时返回错误提示  */
    dealDesc?: string;
    /** 处理结果代码，
0 表示文件解析或数字签名验证失败，需解决错误问题后重新上传；
1 表示文件处理成功，已生成正确业务单据；
2 表示文件中药品或企业校验失败，已生成业务单据，需登录药品流通监管系统修正  */
    dealResult?: string;
    /**  处理状态，0 表示未处理；1 表示处理完成  */
    dealStatus?: number;
    /**  处理完成时间  */
    dealTime?: string;
    /**  有效期至  */
    dueDate?: string;
    /**  文件唯一标识  */
    fileId?: string;
    /**  id  */
    id?: string;
    /**  操作人  */
    operator?: string;
    /**  操作人id  */
    operatorId?: string;
    /**  补充说明  */
    other?: string;
    /**  生产批号  */
    produceCode?: string;
    /**  生产日期  */
    produceDate?: string;
    /**  退货数量  */
    qty?: number;
    /**  退货原因  */
    reason?: string;
    /**  验收员  */
    recheckBy?: string;
    /**  购进/验收结论  */
    recheckResult?: string;
    /**  上报状态 0-未上报 1-已上报  */
    reportStatus?: number;
    /**  上报时间  */
    reportTime?: string;
    /**  退货日期时间  */
    returnTime?: string;
    /**  销售单号  */
    saleId?: string;
    /**  包装规格  */
    skuModel?: string;
    /**  本位码  */
    standardCode?: string;
    /**  入库单号  */
    stockInId?: string;
    /**  温度记录  */
    temp?: number;
    /**  运输结束时间  */
    transportEndTime?: string;
    /**  运输开始时间  */
    transportStartTime?: string;
    /**  运输设备工具  */
    transportTool?: string;
    /**  修改时间  */
    updateTime?: string;
  };

  type ReportSaleReturnInPageQueryVO = {
    /**  处理状态，0 表示未处理；1 表示处理完成  */
    dealStatus?: number;
    /**  查询结束时间  */
    endTime?: string;
    pageQuery?: PageQuery;
    /**  上报状态 0-未上报 1-已上报  */
    reportStatus?: number;
    /**  查询开始时间  */
    startTime?: string;
  };

  type ReportSaleReturnInVO = {
    /**  创建时间  */
    createTime?: string;
    /**  批发客户编码  */
    cusId?: string;
    /**  批发客户名称  */
    cusName?: string;
    /**  处理结果描述，当 dealResult 不为 1 时返回错误提示  */
    dealDesc?: string;
    /**  处理结果代码，  */
    dealResult?: string;
    /**  处理状态，0 表示未处理；1 表示处理完成  */
    dealStatus?: number;
    /**  处理完成时间  */
    dealTime?: string;
    /**  文件唯一标识  */
    fileId?: string;
    /**  主键id  */
    id?: string;
    /**  操作人  */
    operator?: string;
    /**  操作人id  */
    operatorId?: string;
    /**  补充说明  */
    other?: string;
    /**  验收员  */
    recheckBy?: string;
    /**  验收员2  */
    recheckBy2?: string;
    /**  购进结论  */
    recheckResult?: string;
    /**  明细  */
    reportSaleReturnWareInVOList?: ReportSaleReturnWareInVO[];
    /**  上报状态 0-未上报 1-已上报  */
    reportStatus?: number;
    /**  上报时间  */
    reportTime?: string;
    /**  退货时间  */
    returnTime?: string;
    /**  来源表id  */
    sourceId?: string;
    /**  入库单号  */
    stockInId?: string;
    /**  温度记录  */
    temp?: number;
    /**  租户id  */
    tenantId?: string;
    /**  运输结束时间  */
    transportEndTime?: string;
    /**  运输开始时间  */
    transportStartTime?: string;
    /**  运输设备工具  */
    transportTool?: string;
    /**  修改时间  */
    updateTime?: string;
  };

  type ReportSaleReturnWareInPageQueryVO = {
    /**  批发客户编码  */
    cusId?: string;
    /**  退货企业  */
    cusKey?: string;
    /**  批发客户名称  */
    cusName?: string;
    /** 处理结果代码，
0 表示文件解析或数字签名验证失败，需解决错误问题后重新上传；
1 表示文件处理成功，已生成正确业务单据；
2 表示文件中药品或企业校验失败，已生成业务单据，需登录药品流通监管系统修正  */
    dealResult?: string;
    /**  处理状态，0 表示未处理；1 表示处理完成  */
    dealStatus?: number;
    /**  文件唯一标识  */
    fileId?: string;
    pageQuery?: PageQuery;
    /**  生产批号  */
    produceCode?: string;
    /**  验收员  */
    recheckBy?: string;
    /**  上报状态 0-未上报 1-已上报  */
    reportStatus?: number;
    /**  截止上报时间  */
    reportTimeEnd?: string;
    /**  起始上报时间  */
    reportTimeSta?: string;
    /**  截止退货日期时间  */
    returnTimeEnd?: string;
    /**  起始退货日期时间  */
    returnTimeSta?: string;
    /**  销售单号  */
    saleId?: string;
    /**  本位码  */
    standardCode?: string;
    /**  入库单号  */
    stockInId?: string;
  };

  type ReportSaleReturnWareInVO = {
    /**  有效期至  */
    dueDate?: string;
    /**  主键  */
    id?: string;
    /**  生产批号  */
    produceCode?: string;
    /**  生产日期  */
    produceDate?: string;
    /**  退货数量  */
    qty?: number;
    /**  退货原因  */
    reason?: string;
    /**  销售退货入库上报主键id  */
    reportSaleReturnInId?: string;
    /**  销售单号  */
    saleId?: string;
    /**  包装规格  */
    skuModel?: string;
    /**  来源表id  */
    sourceId?: string;
    /**  本位码  */
    standardCode?: string;
    /**  租户id  */
    tenantId?: string;
  };

  type ReportSaleWareOutItemVO = {
    /**  到达温度  */
    arrivalTemperature?: number;
    /**  采购企业id  */
    cusId?: string;
    /**  采购企业名称  */
    cusName?: string;
    /**  处理结果描述，当 dealResult 不为 1 时返回错误提示 */
    dealDesc?: string;
    /** 处理结果代码，
 0 表示文件解析或数字签名验证失败，需解决错误问题后重新上传；
 1 表示文件处理成功，已生成正确业务单据；
 2 表示文件中药品或企业校验失败，已生成业务单据，需登录药品流通监管系统修正  */
    dealResult?: string;
    /**  处理状态，0 表示未处理；1 表示处理完成  */
    dealStatus?: number;
    /**  处理完成时间  */
    dealTime?: string;
    /**  有效期至  */
    dueDate?: string;
    /**  文件唯一标识  */
    fileId?: string;
    /**  id  */
    id?: string;
    /**  起运温度  */
    initialTemperature?: number;
    /**  操作人  */
    operator?: string;
    /**  操作人id  */
    operatorId?: string;
    /**  补充说明  */
    other?: string;
    /**  生产批号  */
    produceCode?: string;
    /**  生产日期  */
    produceDate?: string;
    /**  销售数量  */
    qty?: number;
    /**  上报状态 0-未上报 1-已上报  */
    reportStatus?: number;
    /**  上报时间  */
    reportTime?: string;
    /**  销售单号  */
    saleId?: string;
    /**  销售日期  */
    saleTime?: string;
    /**  销售员  */
    salesman?: string;
    /**  包装规格  */
    skuModel?: string;
    /**  本位码  */
    standardCode?: string;
    /**  运输结束时间  */
    transportEndTime?: string;
    /**  运输开始时间  */
    transportStartTime?: string;
    /**  运输方式  */
    transportType?: string;
    /**  承运人  */
    transporter?: string;
  };

  type ReportSaleWareOutPageQueryVO = {
    /**  采购企业  */
    cusKey?: string;
    /**  处理结果代码，
0 表示文件解析或数字签名验证失败，需解决错误问题后重新上传；
1 表示文件处理成功，已生成正确业务单据；
2 表示文件中药品或企业校验失败，已生成业务单据，需登录药品流通监管系统修正  */
    dealResult?: string;
    /**  处理状态，0 表示未处理；1 表示处理完成  */
    dealStatus?: number;
    /**  处理完成时间  */
    dealTime?: string;
    /**  文件id  */
    fileId?: string;
    pageQuery?: PageQuery;
    /**  生产批号  */
    produceCode?: string;
    /**  生产日期  */
    produceDate?: string;
    /**  上报状态 0-未上报 1-已上报  */
    reportStatus?: number;
    /**  截止上报时间  */
    reportTimeEnd?: string;
    /**  起始上报时间  */
    reportTimeSta?: string;
    /**  销售单号  */
    saleId?: string;
    /**  截止销售日期  */
    saleTimeEnd?: string;
    /**  起始销售日期  */
    saleTimeSta?: string;
    /**  销售员  */
    salesman?: string;
    /**  本位码  */
    standardCode?: string;
  };

  type ReportSaleWareOutVO = {
    /**  有效期至  */
    dueDate?: string;
    /**  主键id  */
    id?: string;
    /**  生产批号  */
    produceCode?: string;
    /**  生产日期  */
    produceDate?: string;
    /**  销售数量  */
    qty?: number;
    /**  GSP销售出库上报主键id  */
    reportSaleOutId?: string;
    /**  包装规格  */
    skuModel?: string;
    /**  来源表id  */
    sourceId?: string;
    /**  本位码  */
    standardCode?: string;
    /**  租户id  */
    tenantId?: string;
  };

  type RestockConfigVO = {
    /**  十五日日均销量占比  */
    fifteenQtyDailyRate?: number;
    /**  七日日均销量占比  */
    sevenQtyDailyRate?: number;
    /**  库存最大天数  */
    stockDayMax?: number;
    /**  库存最小天数  */
    stockDayMin?: number;
    /**  三十日日均销量占比  */
    thirtyQtyDailyRate?: number;
    /**  三日日均销量占比  */
    threeQtyDailyRate?: number;
  };

  type RestockStatisticsPageQueryVO = {
    /** 商品条码 */
    barCode?: string;
    /** Id列表 */
    ids?: string[];
    /**  可用数量(合格品可用)  */
    inventoryQtyMax?: number;
    /**  可用数量(合格品可用)  */
    inventoryQtyMin?: number;
    /**  采购在途数量  */
    onWayQtyMax?: number;
    /**  采购在途数量  */
    onWayQtyMin?: number;
    pageQuery?: PageQuery;
    /**  商品  */
    sku?: string;
    /**  库存最大天数  */
    stockDayMax?: number;
    /**  库存最小天数  */
    stockDayMin?: number;
    /**  库存数量  */
    stockQty?: number;
    /**  安全库存上限  */
    stockSafeMax?: number;
    /**  安全库存下限  */
    stockSafeMin?: number;
    /**  库存周转天数  */
    stockTurnoverDayMax?: number;
    /**  库存周转天数  */
    stockTurnoverDayMin?: number;
    /**  物理仓编码  */
    storeCode?: string;
    /**  最近供应商编码  */
    supplierId?: string;
    /**  最近供应商名称  */
    supplierName?: string;
  };

  type RestockStatisticsVO = {
    /**  日均修正销量  */
    averageQty?: number;
    /**  备货周转天数  */
    backupStockTurnoverDay?: number;
    /**  商品条码  */
    barCode?: string;
    /**  创建时间  */
    createTime?: string;
    /**  十五日销量  */
    fifteenQty?: number;
    /**  十五日日均销量  */
    fifteenQtyDaily?: number;
    /**  冻结库存  */
    frozenQty?: number;
    /**  id  */
    id?: string;
    /**  可用数量(合格品可用)  */
    inventoryQty?: number;
    /**  生产厂家  */
    manufacturer?: string;
    /**  采购在途数量  */
    onWayQty?: number;
    /**  昨日销量  */
    oneQty?: number;
    /**  采购价格  */
    price?: number;
    /**  七日销量  */
    sevenQty?: number;
    /**  七日日均销量  */
    sevenQtyDaily?: number;
    /**  商品编码  */
    skuId?: string;
    /**  规格  */
    skuModel?: string;
    /**  商品名称  */
    skuName?: string;
    /**  商品名称拼音  */
    skuPinyin?: string;
    /**  库存最大天数  */
    stockDayMax?: number;
    /**  库存最小天数  */
    stockDayMin?: number;
    /**  库存数量  */
    stockQty?: number;
    /**  安全库存上限  */
    stockSafeMax?: number;
    /**  安全库存下限  */
    stockSafeMin?: number;
    /**  存货周转天数  */
    stockTurnoverDay?: number;
    /**  物理仓编码  */
    storeCode?: string;
    /**  物理仓名称  */
    storeName?: string;
    /**  建议备货数  */
    suggestPurchaseStockQty?: number;
    /**  最近供应商编码  */
    supplierId?: string;
    /**  最近供应商名称  */
    supplierName?: string;
    /**  三十日销量  */
    thirtyQty?: number;
    /**  三十日日均销量  */
    thirtyQtyDaily?: number;
    /**  三日销量  */
    threeQty?: number;
    /**  三日日均销量  */
    threeQtyDaily?: number;
    /**  不可用库存数量(合格品冻结及不合格待处理所有数量)  */
    unavailableQty?: number;
    /**  最后修改时间  */
    updateTime?: string;
  };

  type RetailSalePageQueryVO = {
    /**  商品条码  */
    barCode?: string;
    /**  客户名称  */
    cusName?: string;
    /**  退货申请单号  */
    docId?: string;
    /**  订单号  */
    originalOrderId?: string;
    pageQuery?: PageQuery;
    /**  平台编码  */
    platformId?: string;
    /**  店铺编码  */
    shopId?: string;
    /**  商品信息  */
    skuInfo?: string;
    /**  入库时间  */
    stockInTimeEnd?: string;
    /**  入库时间  */
    stockInTimeStart?: string;
    /**  入库单号  */
    stockResultId?: string;
    /**  仓库编码  */
    storeCode?: string;
  };

  type RetailSaleStockInDetailVO = {
    /**  不合格品数  */
    badQty?: number;
    /**  商品条码  */
    barCode?: string;
    /**  创建时间  */
    createTime?: string;
    /**  客户编码  */
    cusId?: string;
    /**  客户名称  */
    cusName?: string;
    /**  退货申请单号  */
    docId?: string;
    /**  有效日期  */
    expiredDate?: string;
    /**  id  */
    id?: string;
    /**  退货数量  */
    inQty?: number;
    /**  生产厂家  */
    manufacturer?: string;
    /**  订单号  */
    originalOrderId?: string;
    /**  待处理数  */
    pendingQty?: number;
    /**  平台编码  */
    platformId?: string;
    /**  平台名称  */
    platformName?: string;
    /**  单价  */
    price?: number;
    /**  生产批号  */
    produceCode?: string;
    /**  生产日期  */
    productionDate?: string;
    /**  合格品数  */
    realityQty?: number;
    /**  下单店铺  */
    shopId?: string;
    /**  下单店铺名称  */
    shopName?: string;
    /**  商品编码  */
    skuId?: string;
    /**  商品规格  */
    skuModel?: string;
    /**  商品名称  */
    skuName?: string;
    /**  商品拼音  */
    skuPinyin?: string;
    /**  入库时间  */
    stockInTime?: string;
    /**  入库单号  */
    stockResultId?: string;
    /**  仓库编码  */
    storeCode?: string;
    /**  仓库名称  */
    storeName?: string;
    /**  退货金额  */
    totalAmt?: number;
    /**  单位  */
    unit?: string;
  };

  type ReviewOrderCheckInfoItemUpdateVO = {
    /**  复查意见  */
    checkRemark?: string;
    /**  id  */
    id: string;
    /**  erp审核意见, 0-未审核,1-合格,2-不合格  */
    status: number;
  };

  type ReviewOrderCheckInfoUpdateVO = {
    /**  id  */
    id: string;
    /**  商品信息  */
    itemList: ReviewOrderCheckInfoItemUpdateVO[];
    /**  备注  */
    remark?: string;
    /**  供应商名称/客户名称  */
    supplierName?: string;
  };

  type ReviewOrderDetailVO = {
    /**  复查意见  */
    checkRemark?: string;
    /**  剂型名称  */
    dosageFormName?: string;
    /**  复核数量（到货数量或者养护数量）  */
    expectedNum?: number;
    /**  有效期至  */
    expireTime?: string;
    /**  类别(GSP分类)  */
    gspCategory?: string;
    /**  类别名称(GSP分类)  */
    gspCategoryName?: string;
    /**  id  */
    id?: string;
    /**  库存类型(1：正品 101：残次 201：待处理)  */
    inventoryType?: number;
    /**  库存类型名称  */
    inventoryTypeName?: string;
    /**  批号  */
    lotNo?: string;
    /** 生产厂家 */
    manufacturer?: string;
    /**  上市许可证持有人  */
    permitHolder?: string;
    /**  产地  */
    producingArea?: string;
    /**  商品编码  */
    productCode?: string;
    /**  生产日期  */
    productionTime?: string;
    /**  wms质检结论  */
    qualityResult?: string;
    /**  问题数量  */
    questionNum?: number;
    /**  批准文号  */
    regisTrationNumber?: string;
    /**  情况描述  */
    remark?: string;
    /** 商品编码 */
    skuId?: string;
    /** 规格 */
    skuModel?: string;
    /** 商品名称 */
    skuName?: string;
    /**  erp审核意见, 0-未审核,1-合格,2-不合格  */
    status?: number;
    /**  erp审核意见名称  */
    statusName?: string;
    /**  单位  */
    unit?: string;
    /**  通用名  */
    wareGeneralName?: string;
  };

  type ReviewOrderInfoVO = {
    /**  ERP单号,如：采购单、销退单  */
    erpOrderCode?: string;
    /**  id  */
    id?: string;
    /**  入库类型 601:采购 501:销退  */
    inOrderType?: number;
    /**  入库类型名称  */
    inOrderTypeName?: string;
    /**  商品信息  */
    itemList?: ReviewOrderDetailVO[];
    /**  复查类型,1、入库复查 2、养护复查  */
    orderType?: number;
    /**  复查类型名称  */
    orderTypeName?: string;
    relationCode?: string;
    /**  备注  */
    remark?: string;
    /**  复查单号  */
    reviewOrderCode?: string;
    /**  0-未审核,1-已审核,2-已取消  */
    status?: number;
    /**  单据状态名称  */
    statusName?: string;
    /**  供应商名称/客户名称  */
    supplierName?: string;
    /**  操作日志  */
    traceLogList?: TraceLogVO[];
  };

  type ReviewOrderPageQueryVO = {
    /**  创建结束时间  */
    createTimeEnd?: string;
    /**  创建开始时间  */
    createTimeStart?: string;
    /**  ERP单号,如：采购单、销退单  */
    erpOrderCode?: string;
    /**  单据编号  */
    id?: string;
    /**  入库类型 601:采购 501:销退  */
    inOrderType?: number;
    /**  单据类型,1、入库复查 2、养护复查  */
    orderType?: number;
    pageQuery?: PageQuery;
    /**  损益号, 验收单号或者养护单号  */
    relationCode?: string;
    /**  复查单号  */
    reviewOrderCode?: string;
    /**  商品编码  */
    skuId?: string;
    /**  0-未审核,1-已审核,2-已取消  */
    status?: number;
    /**  供应商/客户名称  */
    supplierName?: string;
  };

  type ReviewOrderVO = {
    /**  创建时间  */
    createTime?: string;
    /**  ERP单号,如：采购单、销退单  */
    erpOrderCode?: string;
    /**  id  */
    id?: string;
    /**  入库类型 601:采购 501:销退  */
    inOrderType?: number;
    /**  入库类型名称  */
    inOrderTypeName?: string;
    /**  复查类型,1、入库复查 2、养护复查  */
    orderType?: number;
    /**  复查类型名称  */
    orderTypeName?: string;
    relationCode?: string;
    /**  备注  */
    remark?: string;
    /**  单据编号  */
    reviewOrderCode?: string;
    /**  单据状态,0-未审核,1-已审核,2-已取消  */
    status?: number;
    /**  单据状态名称  */
    statusName?: string;
    /**  供应商名称/客户名称  */
    supplierName?: string;
  };

  type SaleOutDetailItemPageQueryVO = {
    /**  客户信息  */
    cusInfo?: string;
    /**  剂型  */
    dosageForm?: string;
    /**  经营范围  */
    gspCategory?: string;
    /**  销售单号  */
    orderId?: string;
    pageQuery?: PageQuery;
    /**  批准文号  */
    regisTrationNumber?: string;
    /**  销售日期  */
    saleTimeEnd?: string;
    /**  销售日期  */
    saleTimeStart?: string;
    /**  商品名称/拼音/编码  */
    skuInfo?: string;
    /** gsp特殊药品 1：麻黄碱  字典polarbear_wms_gsp_special_drug  */
    specialDrug?: number;
    /**  仓库编码  */
    storeCode?: string;
    /**  通用名称  */
    wareGeneralName?: string;
  };

  type SaleOutDetailItemVO = {
    /** 收货信息 */
    addressInfo?: string;
    /**  金额  */
    amt?: number;
    /**  商品条码  */
    barCode?: string;
    /**  客户营业执照号码  */
    businessLicenseNumber?: string;
    /**  客户地址  */
    cusAddress?: string;
    /**  客户编码  */
    cusId?: string;
    /** 购货单位 */
    cusName?: string;
    /**  客户电话  */
    cusTelephone?: string;
    /** 剂型 */
    dosageForm?: string;
    /** 剂型名称 */
    dosageFormName?: string;
    /**  失效日期  */
    expiredDate?: string;
    /**  经营范围  */
    gspCategory?: string;
    /**  经营范围名称  */
    gspCategoryName?: string;
    /**  id  */
    id?: string;
    /**  生产厂家  */
    manufacturer?: string;
    /** 销售单号 */
    orderId?: string;
    /**  上市许可证持有人  */
    permitHolder?: string;
    /**  单价  */
    price?: number;
    /**  生产批号  */
    produceCode?: string;
    /**  产地  */
    producingArea?: string;
    /**  生产企业资料-生产企业许可证号  */
    productionBusinessLicense?: string;
    /**  生产日期  */
    productionDate?: string;
    /**  数量  */
    qty?: number;
    /**  批准文号  */
    regisTrationNumber?: string;
    /** 销售时间 */
    saleTime?: string;
    /**  商品编码  */
    skuId?: string;
    /**  规格  */
    skuModel?: string;
    /**  商品名称  */
    skuName?: string;
    /**  商品名称拼音  */
    skuPinyin?: string;
    /** 仓库编号 */
    storeCode?: string;
    /** 仓库编号 */
    storeName?: string;
    /**  税收分类编码  */
    taxClassificationCode?: string;
    /**  税率  */
    taxRate?: number;
    /**  商品单位  */
    unit?: string;
    /**  通用名称  */
    wareGeneralName?: string;
  };

  type SaleOutDetailVO = {
    /** 收货人 */
    accepter?: string;
    /** 收货地址 */
    accepterAddress?: string;
    /** 订单类型 1：零售出库 0：批发出库 */
    bizType?: number;
    /** 订单类型 1：零售出库 0：批发出库 */
    bizTypeText?: string;
    /** 联系人 */
    contact?: string;
    /** 批发单据-业务员 */
    creater?: string;
    /** 客户id */
    cusId?: string;
    /** 客户名称 */
    cusName?: string;
    /** 销售单号 */
    docId?: string;
    /** 单据类型，1：委托订单:2：自采订单 */
    docType?: number;
    /** 客户集id */
    entrustCusCode?: string;
    /** 客户集 */
    entrustCusName?: string;
    /** 出库单号 */
    id?: string;
    /** 发票类型 */
    invoiceType?: number;
    /** 发票类型名称 */
    invoiceTypeName?: string;
    /** 发票类型 */
    invoiceTypeTxt?: string;
    /** 出库总条目 */
    itemCount?: number;
    /** 审核人 */
    operator?: string;
    /** 下单人 */
    orderPreparer?: string;
    /** 外部单号 */
    originBillId?: string;
    /** 出库总金额 */
    outStockAmt?: number;
    /** 出库总数量 */
    outStockNum?: number;
    /** 出库类型，1：普通，2：闪电 */
    outStockType?: number;
    /** 出库商品 */
    outStockWares?: SaleOutWareVO[];
    /** 包裹单号 */
    packageNo?: string;
    /** 打印次数 */
    printTimes?: number;
    /** 结算方式 */
    settleWayText?: string;
    /** 制单确认状态 */
    status?: number;
    /** 单据状态 */
    statusText?: string;
    /** 仓库出库通知单号 */
    stockNoticeId?: string;
    /** 仓库编号 */
    storeCode?: string;
    /** 仓库名称 */
    storeName?: string;
    /** 供应商名称 */
    supplierName?: string;
    /** 收货手机 */
    telephone?: string;
    /** 快递公司 */
    tmsName?: string;
    /** 运单编号 */
    tmsOrderCode?: string;
    /** 审核时间 */
    updateTime?: string;
  };

  type SaleOutPageQueryVO = {
    /** 收货人 */
    accepter?: string;
    /** 订单类型 1：零售出库 0：批发出库 */
    bizType?: number;
    /** 客户名称/编码 */
    cusInfo?: string;
    /** 结束审核时间 */
    endAuditTime?: string;
    /** 客户id，查批发客户表 */
    entrustCusCode?: string;
    /** 出库单号 */
    id?: string;
    /** 出库单号数组 */
    ids?: string[];
    /** 销售单号 */
    orderId?: string;
    /** 出库类型，1：普通，2：闪电, 字典编码：polarbear_wms_result_stock_type */
    outStockType?: number;
    /** 包裹单号 */
    packageNo?: string;
    pageQuery?: PageQuery;
    /** 结算类型 1-账期结算 2-预收，字典：polarbear_wss_order_settlement_type */
    settlementType?: number;
    /** 商品名称/拼音码/编码 */
    skuInfo?: string;
    /** 开始审核时间 */
    startAuditTime?: string;
    /** 单据状态 */
    status?: number;
    /** 仓库出库通知单号 */
    stockNoticeId?: string;
    /** 仓库编码, 字典编码：polarbear_wms_wpf_store_code */
    storeCode?: string;
    /** 收货手机 */
    telephone?: string;
    /** 运单编码 */
    tmsOrderCode?: string;
  };

  type SaleOutVO = {
    /** 收货人 */
    accepter?: string;
    /** 订单类型 1：零售出库 0：批发出库 */
    bizType?: number;
    /** 订单类型 1：零售出库 0：批发出库 */
    bizTypeText?: string;
    /** 客户id */
    cusId?: string;
    /** 客户名称 */
    cusName?: string;
    /** 销售单号 */
    docId?: string;
    /** 出库类型，1：普通，2：闪电, 字典编码：polarbear_wms_result_stock_type */
    docType?: number;
    /** 客户集id */
    entrustCusCode?: string;
    /** 客户集 */
    entrustCusName?: string;
    /** 出库单号 */
    id?: string;
    /** 审核人 */
    operator?: string;
    /** 外部单号 */
    originBillId?: string;
    /** 中台单据编号 */
    outBizCode?: string;
    /** 出库类型，1：普通，2：闪电 */
    outStockType?: number;
    /** 包裹单号 */
    packageNo?: string;
    /** 结算类型文本 */
    settleWayText?: string;
    /** 制单确认状态 */
    status?: number;
    /** 单据状态 */
    statusText?: string;
    /** 仓库出库通知单号 */
    stockNoticeId?: string;
    /** 仓库编号 */
    storeCode?: string;
    /** 仓库名称 */
    storeName?: string;
    /** 供应商名称 */
    supplierName?: string;
    /** 收货手机 */
    telephone?: string;
    /** 运单编码 */
    tmsOrderCode?: string;
    /** 审核时间 */
    updateTime?: string;
  };

  type SaleOutWareVO = {
    /** 出库总金额 */
    amt?: number;
    /** 批次号 */
    batchNo?: string;
    /** 商品分类 */
    categoryText?: string;
    /** 有效日期 */
    expiredDate?: string;
    /** 经营范围 */
    gspCategoryName?: string;
    /** 生产产家 */
    manufacturer?: string;
    /** 原ERP单号 */
    originalOrderId?: string;
    /** 单价 */
    price?: number;
    /** 生产批号 */
    produceCode?: string;
    /** 生产日期 */
    productionDate?: string;
    /** 出库数量 */
    realityQty?: number;
    /** 商品编号 */
    skuId?: string;
    /** 商品规格 */
    skuModel?: string;
    /** 商品名称 */
    skuName?: string;
    /** 税收分类编码 */
    taxClassificationCode?: string;
    /** 税率 */
    taxRate?: number;
    /** 单位 */
    unit?: string;
  };

  type SaleQuickPageQueryVO = {
    /** 客户名称/编码 */
    cusInfo?: string;
    /** 结束审核时间 */
    endAuditTime?: string;
    /** 出库单号 */
    id?: string;
    /** 出库单号数组 */
    ids?: string[];
    /** 销售单号 */
    orderId?: string;
    pageQuery?: PageQuery;
    /** 复核状态，0：未复核，1：已复核 */
    recheck?: number;
    /** 结算类型 1-账期结算 2-预收，字典：polarbear_wss_order_settlement_type */
    settlementType?: number;
    /** 商品名称/拼音码/编码 */
    skuInfo?: string;
    /** 开始审核时间 */
    startAuditTime?: string;
    /** 仓库出库通知单号 */
    stockNoticeId?: string;
    /** 仓库编码, 字典编码：polarbear_wms_wpf_store_code */
    storeCode?: string;
    /** 直调协议编号 */
    zdAgreementId?: string;
  };

  type SaleQuickStockOutDetailVO = {
    /** 联系人 */
    contact?: string;
    /** 审核时间 */
    createTime?: string;
    /** 业务员 */
    creater?: string;
    /** 客户id */
    cusId?: string;
    /** 客户名称 */
    cusName?: string;
    /** 销售单号 */
    docId?: string;
    /** 销售出库单号 */
    id?: string;
    /** 发票类型 */
    invoiceType?: number;
    /** 发票类型名称 */
    invoiceTypeName?: string;
    /** 审核人 */
    operator?: string;
    /** 出库类型，1：普通，2：闪电 3：直调 */
    outStockType?: number;
    /** 出库类型 */
    outStockTypeText?: string;
    /** 商品明细 */
    outStockWares?: SaleQuickStockOutWareVO[];
    /** 复核状态0：未复核，1：已复核 */
    recheck?: number;
    /** 复核状态 */
    recheckText?: string;
    /** 结算类型文本 */
    settleWayText?: string;
    /** 制单确认状态 */
    status?: number;
    /** 单据状态 */
    statusText?: string;
    /** 出库通知单号 */
    stockNoticeId?: string;
    /** 仓库编号 */
    storeCode?: string;
    /** 仓库名称 */
    storeName?: string;
    /** 直调协议编号 */
    zdAgreementId?: string;
  };

  type SaleQuickStockOutVO = {
    /** 审核时间 */
    createTime?: string;
    /** 客户id */
    cusId?: string;
    /** 客户名称 */
    cusName?: string;
    /** 销售单号 */
    docId?: string;
    /** 销售出库单号 */
    id?: string;
    /** 审核人 */
    operator?: string;
    /** 出库类型，1：普通，2：闪电 3：直调 */
    outStockType?: number;
    /** 出库类型 */
    outStockTypeText?: string;
    /** 复核状态0：未复核，1：已复核 */
    recheck?: number;
    /** 复核状态 */
    recheckText?: string;
    /** 结算类型文本 */
    settleWayText?: string;
    /** 制单确认状态 */
    status?: number;
    /** 单据状态 */
    statusText?: string;
    /** 出库通知单号 */
    stockNoticeId?: string;
    /** 仓库编号 */
    storeCode?: string;
    /** 仓库名称 */
    storeName?: string;
    /** 直调协议编号 */
    zdAgreementId?: string;
  };

  type SaleQuickStockOutWareVO = {
    /** 出库总金额 */
    amt?: number;
    /** 商品分类 */
    categoryText?: string;
    /** 有效日期 */
    expiredDate?: string;
    /** 生产产家 */
    manufacturer?: string;
    /** 原ERP单号 */
    originalOrderId?: string;
    /** 单价 */
    price?: number;
    /** 生产批号 */
    produceCode?: string;
    /** 生产日期 */
    productionDate?: string;
    /** 出库数量 */
    realityQty?: number;
    /** 商品编号 */
    skuId?: string;
    /** 商品规格 */
    skuModel?: string;
    /** 商品名称 */
    skuName?: string;
    /** 税收分类编码 */
    taxClassificationCode?: string;
    /** 税率 */
    taxRate?: number;
    /** 单位 */
    unit?: string;
  };

  type SaleRecallRegisterPageQueryVO = {
    /**  截止单据日期 */
    createTimeEnd?: string;
    /**  开始单据日期 */
    createTimeSta?: string;
    /**  部门  */
    department?: string;
    /**  部门id  */
    departmentId?: string;
    /**  处理日期  */
    disposeTime?: string;
    /**  主键/单据编号集合  */
    ids?: number[];
    /**  签字（主管）  */
    managerSign?: string;
    pageQuery?: PageQuery;
    /**  签字(质管部)  */
    qualityControlSign?: string;
    /**  退货单位  */
    returnCompany?: string;
    /**  退货日期  */
    returnTime?: string;
    /**  退货方式 1-退货退款 2-仅退货 3-仅退款  */
    returnType?: number;
    /**  销售意见  */
    saleOpinion?: string;
    /**  签字(销售部)  */
    saleSign?: string;
    /**  销售日期  */
    saleTime?: string;
    /**  商品编码 */
    skuId?: string;
    /**  商品信息  */
    skuKey?: string;
  };

  type SaleRecallRegisterVO = {
    /**  单据日期/创建时间  */
    createTime?: string;
    /**  部门  */
    department: string;
    /**  部门id  */
    departmentId: string;
    /**  处理日期 /签字（主管）日期 */
    disposeTime?: string;
    /**  有效日期  */
    expiredDate: string;
    /**  主键/单据编号  */
    id?: string;
    /**  主管领导意见  */
    leaderOpinion?: string;
    /**  签字（主管）  */
    managerSign?: string;
    /**  签字人Id（主管）  */
    managerSignId?: string;
    /**  生产厂家  */
    manufacturer?: string;
    /**  生产批号  */
    produceCode: string;
    /**  产地  */
    producingArea?: string;
    /**  数量  */
    qty: number;
    /**  质管部意见  */
    qualityControlOpinion?: string;
    /**  签字(质管部)  */
    qualityControlSign?: string;
    /**  签字人id(质管部)  */
    qualityControlSignId?: string;
    /**  签字(质管部)日期  */
    qualityControlSignTime?: string;
    /**  退货单位  */
    returnCompany: string;
    /**  退货人  */
    returnPeople?: string;
    /**  退货原因  */
    returnReason?: string;
    /**  退货日期  */
    returnTime: string;
    /**  退货方式 1-退货退款 2-仅退货 3-仅退款  */
    returnType: number;
    /**  销售意见  */
    saleOpinion?: string;
    /**  签字(销售部)  */
    saleSign?: string;
    /**  签字人id(销售部)  */
    saleSignId?: string;
    /**  签字(销售部)日期  */
    saleSignTime?: string;
    /**  销售日期  */
    saleTime: string;
    /**  商品编码  */
    skuId: string;
    /**  商品规格  */
    skuModel?: string;
    /**  商品名称  */
    skuName: string;
    /**  商品名称拼音  */
    skuPinyin?: string;
    /**  单位  */
    unit?: string;
  };

  type SaleStockInDetailItemPageQueryVO = {
    /**  退货单位： 企业名称/编码  */
    cusInfo?: string;
    /**  经营范围  */
    gspCategory?: string;
    /**  通知单号  */
    noticeId?: string;
    /**  销售单号  */
    originalOrderId?: string;
    pageQuery?: PageQuery;
    /**  退货时间  */
    refundTimeEnd?: string;
    /**  退货时间  */
    refundTimeStart?: string;
    /**  批准文号  */
    regisTrationNumber?: string;
    /**  退货单号  */
    serviceId?: string;
    /**  商品名称/拼音码/编码  */
    skuInfo?: string;
    /**  批准文号  */
    storeCode?: string;
    /**  通用名称  */
    wareGeneralName?: string;
  };

  type SaleStockInDetailItemVO = {
    /**  金额  */
    amt?: number;
    /**  商品条码  */
    barCode?: string;
    /**  批次  */
    batchNo?: string;
    /**  创建时间  */
    createTime?: string;
    /**  客户编号 */
    cusId?: string;
    /**  退货单位  */
    cusName?: string;
    /**  有效日期  */
    expiredDate?: string;
    /**  外部商品编码  */
    externalSkuId?: string;
    /**  经营范围  */
    gspCategory?: string;
    /**  经营范围名称  */
    gspCategoryName?: string;
    /**  id  */
    id?: string;
    /**  申请退货数量  */
    inQty?: number;
    /**  生产厂家  */
    manufacturer?: string;
    /**  通知单号  */
    noticeId?: string;
    /**  销售单号  */
    originalOrderId?: string;
    /**  上市许可证持有人  */
    permitHolder?: string;
    /**  单价  */
    price?: number;
    /**  生产批号  */
    produceCode?: string;
    /**  产地  */
    producingArea?: string;
    /**  生产日期  */
    productionDate?: string;
    /**  退货时间  */
    refundTime?: string;
    /**  批准文号  */
    regisTrationNumber?: string;
    /**  退货原因  */
    returnReason?: string;
    /**  退货单号  */
    serviceId?: string;
    /**  结算类型 1-账期结算 2-预收  */
    settlementType?: number;
    /**  商品编码  */
    skuId?: string;
    /**  规格  */
    skuModel?: string;
    /**  商品名称  */
    skuName?: string;
    /**  商品名称拼音  */
    skuPinyin?: string;
    /**  仓库编号  */
    storeCode?: string;
    /**  仓库名称  */
    storeName?: string;
    /**  税收分类编码  */
    taxClassificationCode?: string;
    /**  税率  */
    taxRate?: number;
    /**  单位  */
    unit?: string;
    /**  更新时间  */
    updateTime?: string;
    /**  通用名称  */
    wareGeneralName?: string;
  };

  type SaleStockInDetailVO = {
    /** 销售出库单号 */
    bizStockOutResultId?: string;
    /** 订单类型 1：零售出库 0：批发出库 */
    bizType?: number;
    /** 订单类型 1：零售出库 0：批发出库 */
    bizTypeText?: string;
    /** 批发订单联系人 */
    contactMan?: string;
    /** 客户id */
    cusId?: string;
    /** 客户名称 */
    cusName?: string;
    /** 退货申请单号 */
    docId?: string;
    docType?: number;
    /** 客户集id */
    entrustCusCode?: string;
    /** 客户集 */
    entrustCusName?: string;
    /** 入库单编号 */
    id?: string;
    /** 合计入库金额 */
    inStockAmt?: number;
    /** 入库总数量 */
    inStockNum?: number;
    /** 入库类型，1：普通，2：闪电 */
    inStockType?: number;
    /** 入库类型，1：普通，2：闪电 */
    inStockTypeText?: string;
    /** 入库总条目 */
    itemCount?: number;
    /** 审核人 */
    operator?: string;
    /** 下单人 */
    orderPreparer?: string;
    /** 外部单号 */
    originBillId?: string;
    /** 原EPR销售单号 */
    originalOrderId?: string;
    /** 包裹单号 */
    packageNo?: string;
    /** 退货原因 */
    returnReason?: string;
    /** 批发订单制单人 */
    salePreparer?: string;
    /** 制单确认状态 */
    status?: number;
    /** 单据状态 */
    statusText?: string;
    /** 入库商品明细 */
    stockInWares?: SaleStockInWareVO[];
    /** 入库通知单编号 */
    stockNoticeId?: string;
    /** 仓库编号 */
    storeCode?: string;
    /** 仓库名称 */
    storeName?: string;
    /** 供应商名称 */
    supplierName?: string;
    /** 审核时间 */
    updateTime?: string;
  };

  type SaleStockInPageQueryVO = {
    /** 销售出库单号 */
    bizStockOutResultId?: string;
    /** 订单类型 1：零售出库 0：批发出库 */
    bizType?: number;
    /** 客户名称 */
    cusName?: string;
    /** 退货申请单号 */
    docId?: string;
    /** 结束审核时间 */
    endAuditTime?: string;
    /** 入库单号 */
    id?: string;
    /** 入库单号list，用于导出所选 */
    ids?: string[];
    /** 入库类型，1：普通，2：闪电 字典编码：polarbear_wms_result_stock_type */
    inStockType?: number;
    /** 订单号 */
    orderId?: string;
    /** 销售单号 */
    originalOrderId?: string;
    pageQuery?: PageQuery;
    /** 结算类型 1-账期结算 2-预收，字典：polarbear_wss_order_settlement_type */
    settlementType?: number;
    /** 商品信息 */
    skuInfo?: string;
    /** 开始审核时间 */
    startAuditTime?: string;
    /** 退货通知单号 */
    stockNoticeId?: string;
    /** 仓库编号, 字典编码：polarbear_wms_wpf_store_code */
    storeCode?: string;
  };

  type SaleStockInVO = {
    /** 销售出库单号 */
    bizStockOutResultId?: string;
    /** 订单类型 1：零售出库 0：批发出库 */
    bizType?: number;
    /** 订单类型 1：零售出库 0：批发出库 */
    bizTypeText?: string;
    /** 客户id */
    cusId?: string;
    /** 客户名称 */
    cusName?: string;
    /** 退货申请单号 */
    docId?: string;
    /** 单据类型，1：委托订单:2：自采订单 */
    docType?: number;
    /** 客户集id */
    entrustCusCode?: string;
    /** 客户集 */
    entrustCusName?: string;
    /** 销退入库单编号 */
    id?: string;
    /** 入库类型，1：普通，2：闪电 字典编码：polarbear_wms_result_stock_type */
    inStockType?: number;
    /** 入库类型，1：普通，2：闪电 */
    inStockTypeText?: string;
    /** 审核人 */
    operator?: string;
    /** 外部单号 */
    originBillId?: string;
    /** 原EPR销售单号 */
    originalOrderId?: string;
    /** 中台单据编号/包裹单号 */
    outBizCode?: string;
    /** 退货原因 */
    returnReason?: string;
    /** 结算类型文本 */
    settleWayText?: string;
    /** 制单确认状态 */
    status?: number;
    /** 单据状态 */
    statusText?: string;
    /** 入库通知单编号 */
    stockNoticeId?: string;
    /** 仓库编号 */
    storeCode?: string;
    /** 仓库名称 */
    storeName?: string;
    /** 供应商名称 */
    supplierName?: string;
    /** 审核时间 */
    updateTime?: string;
  };

  type SaleStockInWareVO = {
    /** 入库总金额 */
    amt?: number;
    /** 不合格品数 */
    badQty?: number;
    /** 批次号 */
    batchNo?: string;
    /** 有效日期 */
    expiredDate?: string;
    /** 合格品数 */
    goodQty?: number;
    /** 经营范围 */
    gspCategoryName?: string;
    /** 入库数量 */
    inQty?: number;
    /** 生产产家 */
    manufacturer?: string;
    /** 原销售订单号 */
    originalOrderId?: string;
    /** 待处理数 */
    pendingQty?: number;
    /** 单价 */
    price?: number;
    /** 生产批号 */
    produceCode?: string;
    /** 生产日期 */
    productionDate?: string;
    /** 商品分类 */
    skuCategory?: string;
    /** 商品编号 */
    skuId?: string;
    /** 商品规格 */
    skuModel?: string;
    /** 商品名称 */
    skuName?: string;
    /** 入库仓库 */
    storeName?: string;
    /** 税收分类代码 */
    taxClassificationCode?: string;
    /** 税率 */
    taxRate?: string;
    /** 单位 */
    unit?: string;
  };

  type SaleStockResultPageQueryVO = {
    /** 出库单号 */
    outId?: string[];
    pageQuery?: PageQuery;
    /** 入库单号 */
    putId?: string[];
  };

  type SaleStockResultVO = {
    /** 单据类型 1: 销退入库，2：销售出库 */
    bizType?: number;
    /** 单据时间 */
    createTime?: string;
    /** 原单号 */
    id?: string;
    /** 销售订单号 */
    orderId?: string;
    /** 结算类型名称 */
    settlementTypeName?: string;
    /** 出入库通知单 */
    stockNoticeId?: string;
  };

  type SaveChannelConfigWithTempResultVO = {
    /** 客户集名称 */
    configName?: string;
    /** 客户集id */
    id?: string;
  };

  type StaffAuditRegisterPageQueryVO = {
    /**  审核日期时间  */
    auditTime?: string;
    /**  营业执照号码  */
    businessLicenseNumber?: string;
    /**  截止单据日期  */
    createTimeEnd?: string;
    /**  开始单据日期  */
    createTimeSta?: string;
    /**  学历 1-小学 2-初中 3-高中 4-大专 5-本科 6-硕士 7-博士  */
    education?: number;
    /**  企业法人  */
    enterpriseCorp?: string;
    /**  企业类别  */
    enterpriseType?: number;
    /**  身份证号  */
    idNumber?: string;
    /**  单据编号集合  */
    ids?: number[];
    /**  许可证号码  */
    licenceCode?: string;
    pageQuery?: PageQuery;
    /**  性别 0-女 1-男  */
    sex?: number;
    /**  人员id  */
    staffId?: string;
    /**  人员(销售员/采购员)名称  */
    staffName?: string;
    /**  人员类别 0-采购员 1-销售员  */
    staffType?: number;
    /**  供货商id  */
    supplierId?: string;
    /**  供货商名称  */
    supplierName?: string;
    /**  税务登记号码  */
    taxRegistrationNumber?: string;
    /**  上岗证key  */
    workLicenseKey?: string;
  };

  type StaffAuditRegisterVO = {
    /**  详细地址-(住址)  */
    address?: string;
    /**  审核结论  */
    auditConclusion?: string;
    /**  审核日期时间  */
    auditTime?: string;
    /**  审核人  */
    auditor?: string;
    /**  营业执照号码  */
    businessLicenseNumber?: string;
    /**  经营范围id  */
    businessScopeId?: string;
    /**  经营范围名称  */
    businessScopeText?: string;
    /**  市-(住址)  */
    city?: string;
    /**  市编码-(住址)  */
    cityCode?: string;
    /**  单据日期/创建时间  */
    createTime?: string;
    /**  区/县-(住址)  */
    district?: string;
    /**  区/县编码-(住址)  */
    districtCode?: string;
    /**  学历 1-小学 2-初中 3-高中 4-大专 5-本科 6-硕士 */
    education?: number;
    /**  单位详细地址  */
    enterpriseAddress?: string;
    /**  市-(单位地址)  */
    enterpriseCity?: string;
    /**  市编码-(单位地址)  */
    enterpriseCityCode?: string;
    /**  企业法人  */
    enterpriseCorp?: string;
    /**  区/县-(单位地址)  */
    enterpriseDistrict?: string;
    /**  区/县编码-(单位地址)  */
    enterpriseDistrictCode?: string;
    /**  省-(单位地址)  */
    enterpriseProvince?: string;
    /**  省编码-(单位地址)  */
    enterpriseProvinceCode?: string;
    /**  企业类别 1-合资 2-私营 3-国有 4-有限责任 5-股份制 */
    enterpriseType?: number;
    /**  主键id/单据编码  */
    id?: string;
    /**  身份证号  */
    idNumber?: string;
    /**  组织机构代码证  */
    institutionCode?: string;
    /**  录入人  */
    keyboarder: string;
    /**  许可证号码  */
    licenceCode?: string;
    /**  委托书  */
    power?: string;
    /**  省-(住址)  */
    province?: string;
    /**  省编码-(住址)  */
    provinceCode?: string;
    /**  备注  */
    remark?: string;
    /**  销售品种  */
    saleVariety?: string;
    /**  性别 0-女 1-男  */
    sex: number;
    /**  认证证号  */
    sgsNumber?: string;
    /**  人员id  */
    staffId?: string;
    /** (销售员/采购员)名称  */
    staffName: string;
    /**  供货商id  */
    supplierId?: string;
    /**  供货商名称  */
    supplierName?: string;
    /**  税务登记号码  */
    taxRegistrationNumber?: string;
    /** 操作日志 */
    traceLogVOList?: TraceLogVO[];
    /**  上岗证号码  */
    workLicenseCode: string;
    /**  上岗证名称  */
    workLicenseName: string;
  };

  type StockBatchAllocationOccupiedPageQueryVO = {
    /** 条形码 */
    barCode?: string;
    /**  批次  */
    batchNo?: string;
    /** 客户编码 */
    cusId?: string;
    /** 预约仓 */
    cusSetName?: string;
    /**  外部商品ID  */
    externalSkuId?: string;
    /**  id列表  */
    ids?: string[];
    /**  生产工厂  */
    manufacturer?: string;
    pageQuery?: PageQuery;
    /**  生产批号  */
    produceCode?: string;
    /** 项目名称 */
    projectName?: string;
    /** 批准文号 */
    registrationNumber?: string;
    /**  来源单据表id  */
    relatedId?: string;
    /** 来源单据类型 */
    relatedTypeList?: number[];
    /** 商品名称/拼音码/编码/条码 */
    skuInfo?: string;
    /**  物理仓编码  */
    storeCode?: string;
    /**  物理仓名称  */
    storeName?: string;
    /**  开始时间  */
    updateTimeBegin?: string;
    /**  结束时间  */
    updateTimeEnd?: string;
    /**  仓库类型  */
    warehouseType?: number;
  };

  type StockBatchAllocationOccupiedVO = {
    /**  变动后冻结数量  */
    afterChangeFrozenQty?: number;
    /**  变动后可用数量  */
    afterChangeInventoryQty?: number;
    /**  变动后数量  */
    afterChangeQty?: number;
    /**  主表id  */
    allocationId?: string;
    /**  商品条码  */
    barCode?: string;
    /**  批次  */
    batchNo?: string;
    /**  变动前冻结数量  */
    beforeChangeFrozenQty?: number;
    /**  变动前可用数量  */
    beforeChangeInventoryQty?: number;
    /**  变动前数量  */
    beforeChangeQty?: number;
    /**  变动冻结数量   */
    changeFrozenQty?: number;
    /**  变动可用数量   */
    changeInventoryQty?: number;
    /**  1 冻结库存  2 解冻库存  3 出库库存   */
    changeQtyType?: number;
    /**  创建时间  */
    createTime?: string;
    /**  客户集id  */
    cusSetId?: string;
    /** 预约仓 */
    cusSetName?: string;
    /**  失效日期  */
    expirationDate?: string;
    /**  外部商品ID  */
    externalSkuId?: string;
    /**  id  */
    id?: string;
    /**  生产厂家  */
    manufacturer?: string;
    /**  占用数量  */
    occupiedQty?: number;
    /**  价格  */
    price?: number;
    /**  生产批号  */
    produceCode?: string;
    /**  生产日期  */
    productionDate?: string;
    /**  项目id  */
    projectId?: string;
    /**  项目名称  */
    projectName?: string;
    /** 批准文号 */
    registrationNumber?: string;
    /**  来源单据id  */
    relatedId?: string;
    /**  来源单据子表id  */
    relatedSubId?: string;
    /**  来源单据类型   采购入库结果单 2 销退入库结果单  */
    relatedType?: number;
    /**  销售价格  */
    salePrice?: number;
    /**  销售类型 0 传统 1 BC模式  */
    saleType?: number;
    /**  商品编码  */
    skuId?: string;
    /**  商品规格  */
    skuModel?: string;
    /**  商品名称  */
    skuName?: string;
    /**  拼音简拼  */
    skuPinyin?: string;
    /**  商品批号批次  */
    skuProduceBatch?: string;
    /**  商品接批号编码  */
    skuProduceCode?: string;
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
    /**  通用名  */
    wareGeneralName?: string;
    /**  仓库类型  */
    warehouseType?: number;
  };

  type StockBatchAllocationPageQueryVO = {
    /**  商品条码  */
    barCode?: string;
    /**  批次  */
    batchNo?: string;
    /** 采购员 */
    buyer?: string;
    /** 客户编码 */
    cusId?: string;
    /**  客户集id  */
    cusSetId?: string;
    /** 预约仓 */
    cusSetName?: string;
    /**  外部商品ID  */
    externalSkuId?: string;
    /**  可用数量  */
    inventoryQty?: number;
    /**  生产厂家  */
    manufacturer?: string;
    /** 结束时间 */
    maxCreateTime?: string;
    /** 开始时间 */
    minCreateTime?: string;
    pageQuery?: PageQuery;
    /**  生产批号  */
    produceCode?: string;
    /**  客户集  */
    projectId?: string;
    /**  项目名称  */
    projectName?: string;
    /** 可用数量大于0 */
    queryType?: boolean;
    /**  来源单据类型   1 采购入库结果单 2 库存分配调整单 3 期货库存调整  */
    relatedType?: number;
    /** 销售类型 0 传统 1 BC模式 */
    saleType?: number;
    /**  商品编码  */
    skuId?: string;
    /**  商品信息  */
    skuInfo?: string;
    /**  商品规格  */
    skuModel?: string;
    /**  商品名称  */
    skuName?: string;
    /**  拼音简拼  */
    skuPinyin?: string;
    /**  商品批号批次  */
    skuProduceBatch?: string;
    /**  商品接批号编码  */
    skuProduceCode?: string;
    /**  库龄结束  */
    storageNumEnd?: number;
    /**  库龄开始  */
    storageNumStart?: number;
    /**  入库时间  */
    storageTime?: string;
    /** 仓库编码 */
    storeCode?: string;
    /** 供应商编码 */
    supplierId?: string;
    /** 供应商简称 */
    supplierShortName?: string;
    /**  修改时间  */
    updateTime?: string;
    /**  通用名  */
    wareGeneralName?: string;
    /**  仓库类型  */
    warehouseType?: number;
  };

  type StockBatchAllocationTotalVo = {
    /**  冻结数量合计  */
    frozenQtyTotal?: number;
    /**  可用数量合计  */
    inventoryQtyTotal?: number;
    /** 总金额合计 */
    priceTotal?: number;
    /**  总库存合计  */
    remainingQtyTotal?: number;
  };

  type StockBatchAllocationVO = {
    /**  入库数量  */
    allocationQty?: number;
    /**  商品条码  */
    barCode?: string;
    /**  批次  */
    batchNo?: string;
    /** 采购员 */
    buyer?: string;
    /** 采购员id */
    buyerId?: string;
    /**  创建时间  */
    createTime?: string;
    /**  客户集id  */
    cusSetId?: string;
    /** 客户集名称 */
    cusSetName?: string;
    /**  失效日期  */
    expirationDate?: string;
    /** 外部商品ID */
    externalSkuId?: string;
    /**  冻结数量  */
    frozenQty?: number;
    /**  id  */
    id?: string;
    /**  可用数量  */
    inventoryQty?: number;
    /**  生产厂家  */
    manufacturer?: string;
    /**  已出库数量  */
    outboundQty?: number;
    /**  价格  */
    price?: number;
    /**  生产批号  */
    produceCode?: string;
    /**  生产日期  */
    productionDate?: string;
    /**  客户集  */
    projectId?: string;
    /**  项目名称  */
    projectName?: string;
    /**  来源单据id  */
    relatedId?: string;
    /**  来源单据子表id  */
    relatedSubId?: string;
    /**  来源单据类型   1 采购入库结果单 2 库存分配调整单 3 期货库存调整  */
    relatedType?: number;
    /**  剩余数量  */
    remainingQty?: number;
    /**  销售类型 0 传统 1 BC模式  */
    saleType?: number;
    /**  商品编码  */
    skuId?: string;
    /**  商品规格  */
    skuModel?: string;
    /**  商品名称  */
    skuName?: string;
    /**  拼音简拼  */
    skuPinyin?: string;
    /**  商品批号批次  */
    skuProduceBatch?: string;
    /**  商品接批号编码  */
    skuProduceCode?: string;
    /**  库龄天数  */
    storageDays?: string;
    /**  入库时间  */
    storageTime?: string;
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
    /**  版本  */
    version?: number;
    /**  通用名  */
    wareGeneralName?: string;
    /**  仓库类型  */
    warehouseType?: number;
  };

  type StockInboundEachSettleLogChangePageQueryVO = {
    /**  商品条码  */
    barCode?: string;
    /**  批次  */
    batchNo?: string;
    /**  id列表  */
    ids?: string[];
    /**  生产厂家  */
    manufacturer?: string;
    /** 结束时间 */
    maxCreateTime?: string;
    /** 开始时间 */
    minCreateTime?: string;
    pageQuery?: PageQuery;
    /**  生产批号  */
    produceCode?: string;
    /**  来源单据表id  */
    relatedId?: string;
    /**  '96-尾差销售成本调整 98-调价发出商品成本调整  99-精度销售成本调整 */
    relatedType?: number;
    /**  商品信息  */
    skuInfo?: string;
  };

  type StockInboundEachSettleLogChangeVO = {
    /**  期末单价  */
    afterCostPrice?: number;
    /**  调整后不含税金额  */
    afterNoTaxAmt?: number;
    /**  期末金额  */
    afterSaleAmt?: number;
    /**  调整后税率  */
    afterTaxRate?: number;
    /**  商品条码  */
    barCode?: string;
    /**  批次  */
    batchNo?: string;
    /**  期初单价  */
    beforeCostPrice?: number;
    /**  调整前不含税金额  */
    beforeNoTaxAmt?: number;
    /**  期初金额  */
    beforeSaleAmt?: number;
    /**  调整前税率  */
    beforeTaxRate?: number;
    /**  调整单价  */
    changeCostPrice?: number;
    /**  调整不含税金额  */
    changeNoTaxAmt?: number;
    /**  数量  */
    changeQty?: number;
    /**  调整金额  */
    changeSaleAmt?: number;
    /**  调整税率  */
    changeTaxRate?: number;
    /**  创建时间  */
    createTime?: string;
    /**  id  */
    id?: string;
    /**  生产厂家  */
    manufacturer?: string;
    /**  原单据ID  */
    originRelatedId?: string;
    /**  原单据类型       * 来源单据类型  1 采购入库结果单 2 销退入库结果单  3 采退出库结果但  4销售出库结果单
     *   5 采退出库通知单 6 销售出库通知单 7 盘赢报溢单 8 盘亏报损单 9 不合格报损单 10 虚拟库存变更 11 批次库存调整单
     * 96-尾差销售成本调整 97-开票尾差成本调整 98-调价销售成本调整  99-精度销售成本调整 100 税率调整 */
    originRelatedType?: string;
    /**  批号  */
    produceCode?: string;
    /**  来源单号  */
    relatedId?: string;
    /**  99 采购发票勾稽 98采购入库成本调整单  */
    relatedType?: number;
    /**  来源单据类型名称  */
    relatedTypeName?: string;
    /**  商品编码  */
    skuId?: string;
    /**  规格  */
    skuModel?: string;
    /**  商品名称  */
    skuName?: string;
    /**  通用名  */
    wareGeneralName?: string;
  };

  type StockInboundEachSettleLogPageQueryVO = {
    /**  商品条码  */
    barCode?: string;
    /**  批次  */
    batchNo?: string;
    /**  id列表  */
    ids?: string[];
    /**  生产厂家  */
    manufacturer?: string;
    /** 结束时间 */
    maxCreateTime?: string;
    /** 开始时间 */
    minCreateTime?: string;
    pageQuery?: PageQuery;
    /**  生产批号  */
    produceCode?: string;
    /**  来源单据表id  */
    relatedId?: string;
    /**  99 精度销售成本调整 98 调价存货成本调整 */
    relatedType?: number;
    /**  商品信息  */
    skuInfo?: string;
  };

  type StockInboundEachSettleLogVO = {
    /**  期末含税金额  */
    afterChangeAmt?: number;
    /**  数量  */
    afterChangeQty?: number;
    /**  期末不含税金额  */
    afterNoTaxAmt?: number;
    /**  商品条码  */
    barCode?: string;
    /**  批次  */
    batchNo?: string;
    /**  期初含税金额  */
    beforeChangeAmt?: number;
    /**  期初不含税金额  */
    beforeNoTaxAmt?: number;
    /**  调整含税金额  */
    changeAmt?: number;
    /**  变动不含税金额  */
    changeNoTaxAmt?: number;
    /**  期末价格  */
    costPrice?: number;
    /**  创建时间  */
    createTime?: string;
    /**  id  */
    id?: string;
    /**  生产厂家  */
    manufacturer?: string;
    /**  批号  */
    produceCode?: string;
    /**  来源单号  */
    relatedId?: string;
    /**  99 采购发票勾稽 98采购入库成本调整单  */
    relatedType?: number;
    /**  来源单据类型名称  */
    relatedTypeName?: string;
    /**  商品编码  */
    skuId?: string;
    /**  规格  */
    skuModel?: string;
    /**  商品名称  */
    skuName?: string;
    /**  税率  */
    taxRate?: number;
    /**  通用名  */
    wareGeneralName?: string;
  };

  type StockInboundEachSettleTaxChangePageQueryVO = {
    /**  商品条码  */
    barCode?: string;
    /**  批次  */
    batchNo?: string;
    /**  id列表  */
    ids?: string[];
    /**  发票类别 1红票 2蓝票  */
    invoiceClass?: number;
    /**  发票号码  */
    invoiceNumber?: string;
    /**  生产厂家  */
    manufacturer?: string;
    /** 结束时间 */
    maxCreateTime?: string;
    /** 开始时间 */
    minCreateTime?: string;
    /**  原单据类型 1.销售出库结果单 2.销退入库结果单  */
    orderType?: number;
    /**  原单号  */
    originalOrderId?: string;
    pageQuery?: PageQuery;
    /**  批号  */
    produceCode?: string;
    /**  来源单号  */
    relatedId?: string;
    /**  96 尾差销售成本调整 97 开票尾差成本调整 98 调价销售成本调整 99 精度销售成本调整 */
    relatedType?: number;
    /** 商品信息 */
    skuInfo?: string;
    /**  0-正常 1-已取消  */
    status?: number;
  };

  type StockInboundEachSettleTaxChangeVO = {
    /**  期末单价  */
    afterCostPrice?: number;
    /**  调整后不含税金额  */
    afterInputNoTaxAmt?: number;
    /**  期末含税金额  */
    afterSaleAmt?: number;
    /**  商品条码  */
    barCode?: string;
    /**  批次  */
    batchNo?: string;
    /**  期初单价  */
    beforeCostPrice?: number;
    /**  调整前不含税金额  */
    beforeInputNoTaxAmt?: number;
    /**  期初含税金额  */
    beforeSaleAmt?: number;
    /**  调整单价  */
    changeCostPrice?: number;
    /**  调整不含税金额  */
    changeInputNoTaxAmt?: number;
    /**  调整含税金额  */
    changeSaleAmt?: number;
    /**  创建时间  */
    createTime?: string;
    /**  id  */
    id?: string;
    /**  税率  */
    inputTaxRate?: number;
    /**  发票类别 1红票 2蓝票  */
    invoiceClass?: number;
    /**  发票类别名称  */
    invoiceClassName?: string;
    /**  发票号码  */
    invoiceNumber?: string;
    /**  生产厂家  */
    manufacturer?: string;
    /**  原单据类型 1.销售出库结果单 2.销退入库结果单  */
    orderType?: number;
    /**  原单据类型名称  */
    orderTypeName?: string;
    /**  原单号  */
    originalOrderId?: string;
    /**  批号  */
    produceCode?: string;
    /**  数量  */
    qty?: number;
    /**  来源单号  */
    relatedId?: string;
    /**  96-尾差销售成本调整 97-开票尾差成本调整 98-调价销售成本调整  99-精度销售成本调整 100 税率调整  */
    relatedType?: number;
    /**  来源单据类型名称  */
    relatedTypeName?: string;
    /**  商品编码  */
    skuId?: string;
    /**  规格  */
    skuModel?: string;
    /**  商品名称  */
    skuName?: string;
    /**  通用名  */
    wareGeneralName?: string;
  };

  type StockInboundLogPageQueryVO = {
    /**  变动后冻结数量  */
    afterChangeFrozenQty?: number;
    /**  变动后可用数量  */
    afterChangeInventoryQty?: number;
    /**  变动后数量  */
    afterChangeQty?: number;
    /**  批次  */
    batchNo?: string;
    /**  变动前冻结数量  */
    beforeChangeFrozenQty?: number;
    /**  变动前可用数量  */
    beforeChangeInventoryQty?: number;
    /**  变动前数量  */
    beforeChangeQty?: number;
    /**  变动冻结数量  */
    changeFrozenQty?: number;
    /**  变动可用数量  */
    changeInventoryQty?: number;
    /**  1-冻结库存 2-解冻库存 3-出库库存  */
    changeQtyType?: number;
    /**  创建时间  */
    createTime?: string;
    /**  客户集  */
    entrustCusCode?: string;
    /**  id  */
    id?: string;
    /**  id列表  */
    ids?: string[];
    /**  主表id,必须赋值  */
    inboundId: string;
    /**  出库数量  */
    outboundQty?: number;
    pageQuery?: PageQuery;
    /**  生产批号  */
    produceCode?: string;
    /**  来源单据  */
    relatedId?: string;
    /**  来源出库单据  */
    relatedOutId?: string;
    /**  来源出库单据子表id  */
    relatedOutSubId?: string;
    /**  来源单据子表id  */
    relatedSubId?: string;
    /**  来源单据类型 1 采购入库结果单 2 销退入库结果单  3 采退出库结果但  4销售出库结果单  5 采退出库通知单 6 销售出库通知单  */
    relatedType?: number;
    /**  剩余数量  */
    remainingQty?: number;
    /**  销售价格  */
    salePrice?: number;
    /**  商品编码  */
    skuId?: string;
    /**  租户编码  */
    tenantId?: string;
    /**  修改时间  */
    updateTime?: string;
    /**  单据时间结束  */
    updateTimeEnd?: string;
    /**  单据时间开始  */
    updateTimeStart?: string;
    /**  仓库类型 0-正品 1-次品 2-待处理  */
    warehouseType?: number;
  };

  type StockInboundLogVO = {
    /**  变动后冻结数量  */
    afterChangeFrozenQty?: number;
    /**  变动后可用数量  */
    afterChangeInventoryQty?: number;
    /**  变动后数量  */
    afterChangeQty?: number;
    /**  批次  */
    batchNo?: string;
    /**  变动前冻结数量  */
    beforeChangeFrozenQty?: number;
    /**  变动前可用数量  */
    beforeChangeInventoryQty?: number;
    /**  变动前数量  */
    beforeChangeQty?: number;
    /**  变动冻结数量  */
    changeFrozenQty?: number;
    /**  变动可用数量  */
    changeInventoryQty?: number;
    /**  1-冻结库存 2-解冻库存 3-出库库存  */
    changeQtyType?: number;
    /**  创建时间  */
    createTime?: string;
    /**  客户集  */
    entrustCusCode?: string;
    /**  id  */
    id?: string;
    /**  主表id  */
    inboundId?: string;
    /**  出库数量  */
    outboundQty?: number;
    /**  生产批号  */
    produceCode?: string;
    /**  来源单据  */
    relatedId?: string;
    /**  来源出库单据  */
    relatedOutId?: string;
    /**  来源出库单据子表id  */
    relatedOutSubId?: string;
    /**  来源单据子表id  */
    relatedSubId?: string;
    /**  来源单据类型 1 采购入库结果单 2 销退入库结果单  3 采退出库结果但  4销售出库结果单  5 采退出库通知单 6 销售出库通知单  */
    relatedType?: number;
    /**  剩余数量  */
    remainingQty?: number;
    /**  销售价格  */
    salePrice?: number;
    /**  商品编码  */
    skuId?: string;
    /**  租户编码  */
    tenantId?: string;
    /**  修改时间  */
    updateTime?: string;
    /**  仓库类型 0-正品 1-次品 2-待处理  */
    warehouseType?: number;
  };

  type StockInboundPageQueryVO = {
    /**  批次  */
    batchNo?: string;
    /**  客户集  */
    entrustCusCode?: string;
    /**  客户集名称  */
    entrustCusName?: string;
    /**  是否有剩余数量  */
    hasRemainingQty?: boolean;
    /**  id  */
    id?: string;
    /**  id列表  */
    ids?: string[];
    /**  主表id  */
    inboundId?: string;
    /** 厂家 */
    manufacturer?: string;
    pageQuery?: PageQuery;
    /**  生产批号  */
    produceCode?: string;
    /** 商品名称/拼音码/编码/条码 */
    skuInfo?: string;
    /**  库龄结束  */
    storageNumEnd?: number;
    /**  库龄开始  */
    storageNumStart?: number;
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
    /**  租户编码  */
    tenantId?: string;
    /**  仓库类型 0-正品 1-次品 2-待处理  */
    warehouseType?: number;
  };

  type StockInboundStorageDayPageQueryVO = {
    pageQuery?: PageQuery;
    /**  供应商编码  */
    supplierId?: string;
  };

  type StockInboundStorageDayTotalVO = {
    /** 0-30天 */
    amt030Total?: number;
    /** 30-60天 */
    amt3060Total?: number;
    /** 60-90天 */
    amt6090Total?: number;
    /** 90天以上 */
    amt90NTotal?: number;
    /**  金额(含税) 合计 */
    amtTotal?: number;
    /** 数量 */
    remainingQtyTotal?: number;
  };

  type StockInboundStorageDayVO = {
    /**  金额(含税)  */
    amt?: number;
    /** 0-30天 */
    amt030?: number;
    /** 30-60天 */
    amt3060?: number;
    /** 60-90天 */
    amt6090?: number;
    /** 90天以上 */
    amt90N?: number;
    /**  id  */
    id?: string;
    /** 数量 */
    remainingQty?: number;
    /**  供应商  */
    supplierShortName?: string;
  };

  type StockInboundVO = {
    /**  商品条码  */
    barCode?: string;
    /**  批次  */
    batchNo?: string;
    /**  创建时间  */
    createTime?: string;
    /**  客户集  */
    entrustCusCode?: string;
    /**  客户集名称  */
    entrustCusName?: string;
    /**  失效日期  */
    expirationDate?: string;
    /**  冻结数量  */
    frozenQty?: number;
    /**  id  */
    id?: string;
    /**  入库数量  */
    inboundQty?: number;
    /**  可用数量  */
    inventoryQty?: number;
    /** 是否质量管控商品 */
    isQualityControl?: boolean;
    /**  生产厂家  */
    manufacturer?: string;
    /**  已用数量  */
    outboundQty?: number;
    /**  价格  */
    price?: number;
    /**  生产批号  */
    produceCode?: string;
    /**  生产日期  */
    productionDate?: string;
    /** 项目id */
    projectId?: string;
    /** 项目名称 */
    projectName?: string;
    /**  相关单据  */
    relatedId?: string;
    /**  来源单据子表id  */
    relatedSubId?: string;
    /**  相关单据类型  */
    relatedType?: number;
    /**  剩余数量  */
    remainingQty?: number;
    /**  商品编码  */
    skuId?: string;
    /**  商品规格  */
    skuModel?: string;
    /**  商品名称  */
    skuName?: string;
    /**  拼音简拼  */
    skuPinyin?: string;
    /**  库龄天数  */
    storageDays?: string;
    /**  入库时间  */
    storageTime?: string;
    /**  物理仓编码  */
    storeCode?: string;
    /**  物理仓名称  */
    storeName?: string;
    /**  供应商编码  */
    supplierId?: string;
    /**  供应商简称  */
    supplierShortName?: string;
    /**  通用名  */
    wareGeneralName?: string;
    /**  仓库类型 0-正品 1-次品 2-待处理  */
    warehouseType?: number;
    /**  仓库类型名称 */
    warehouseTypeName?: string;
  };

  type StockMonthlySettleBatchDetailPageQueryVO = {
    /**  商品条码  */
    barCode?: string;
    /**  批次  */
    batchNo?: string;
    id?: string;
    /**  生产厂家  */
    manufacturer?: string;
    /**  月结id  */
    monthlySettleId?: string;
    pageQuery?: PageQuery;
    /**  生产批号  */
    produceCode?: string;
    /**  商品编码  */
    skuId?: string;
    /**  商品名称/拼音/编码 */
    skuInfo?: string;
    /**  商品名称  */
    skuName?: string;
    /**  商品拼音  */
    skuPinyin?: string;
    /**  商品通用名  */
    wareGeneralName?: string;
  };

  type StockMonthlySettleBatchDetailVO = {
    /** (存货)-期末金额' */
    afterChangeAmt?: number;
    /** 期末(存货)不含税金额 */
    afterChangeNoTaxAmt?: number;
    /** (存货)-期末数量  */
    afterChangeQty?: number;
    /** (存货)-期末成本价 */
    afterCostPrice?: number;
    /** (发出商品)-期末商品发出金额 */
    afterOutWareAmt?: number;
    /** 期末(发出商品)-不含税金额 */
    afterOutWareNoTaxAmt?: number;
    /** 期末(发出商品)-不含税单价 */
    afterOutWareNoTaxPrice?: number;
    /** (发出商品)-期末商品发出单价 */
    afterOutWarePrice?: number;
    /** (发出商品)-期末商品发出数量 */
    afterOutWareQty?: number;
    /** (存货)-本期报损金额 */
    badAmt?: number;
    /** 本期发生(存货)-报损不含税金额 */
    badNoTaxAmt?: number;
    /** (存货)-本期报损数量 */
    badQty?: number;
    /** 商品条码  */
    barCode?: string;
    /** 批次  */
    batchNo?: string;
    /** (存货)-期初金额 */
    beforeChangeAmt?: number;
    /** 期初(存货)不含税金额 */
    beforeChangeNoTaxAmt?: number;
    /** (存货)-期初数量  */
    beforeChangeQty?: number;
    /** (存货)-期初成本价 */
    beforeCostPrice?: number;
    /** (发出商品)-期初商品发出金额 */
    beforeOutWareAmt?: number;
    /** 期初(发出商品)-不含税金额 */
    beforeOutWareNoTaxAmt?: number;
    /** 期初(发出商品)-不含税单价 */
    beforeOutWareNoTaxPrice?: number;
    /** (发出商品)-期初商品发出单价 */
    beforeOutWarePrice?: number;
    /** (发出商品)-期初商品发出数量 */
    beforeOutWareQty?: number;
    /** 创建时间  */
    createTime?: string;
    /** 商品分类id  */
    drugCategory?: string;
    /** 商品分类名称  */
    drugCategoryName?: string;
    id?: string;
    /** (发出商品)-本期商品金额(退回)  */
    inWareChangeAmt?: number;
    /** 本期(发出商品)-商品不含税金额(退回) */
    inWareChangeNoTaxAmt?: number;
    /** (发出商品)-本期商品数量(退回)  */
    inWareChangeQty?: number;
    /** (存货)-本期盘亏金额 */
    lossAmt?: number;
    /** 本期发生(存货)-盘亏不含税金额 */
    lossNoTaxAmt?: number;
    /** (存货)-本期盘亏数量 */
    lossQty?: number;
    /** 生产厂家  */
    manufacturer?: string;
    /** 月结id  */
    monthlySettleId?: string;
    /** (发出商品)-调价发出商品成本调整  */
    outWareAdjustAmt?: number;
    /** 本期(发出商品)-调价发出商品成本调整(不含税) */
    outWareAdjustNoTaxAmt?: number;
    /** (发出商品)-本期商品金额(发货) */
    outWareChangeAmt?: number;
    /** 本期(发出商品)-商品不含税金额(发货) */
    outWareChangeNoTaxAmt?: number;
    /** (发出商品)-本期商品数量(发货)  */
    outWareChangeQty?: number;
    /** 生产批号  */
    produceCode?: string;
    /** (存货)-本期采购入库金额  */
    purInAmt?: number;
    /** 本期发生(存货)-采购入库不含税金额 */
    purInNoTaxAmt?: number;
    /** (存货)-本期采购入库数量  */
    purInQty?: number;
    /** (存货)-本期采退出库金额  */
    purOutAmt?: number;
    /** 本期发生(存货)-采退出库不含税金额 */
    purOutNoTaxAmt?: number;
    /** (存货)-本期采退出库数量  */
    purOutQty?: number;
    /** (存货)-本期采退差异 */
    purReturnDiff?: number;
    /** 采退差异-不含税金额 */
    purReturnDiffNoTax?: number;
    /** (发出商品)-本期销售成本(转出)  */
    saleCostAmt?: number;
    /** 本期(发出商品)-商品不含税成本金额(转出) */
    saleCostNoTaxAmt?: number;
    /** (发出商品)-本期销售收入(转出)  */
    saleEarningAmt?: number;
    /** 本期(发出商品)-商品销售不含税金额(转出) */
    saleEarningNoTaxAmt?: number;
    /** (存货)-本期销售退回金额  */
    saleInAmt?: number;
    /** 本期发生(存货)-销退入库不含税金额 */
    saleInNoTaxAmt?: number;
    /** (存货)-本期销售退回数量  */
    saleInQty?: number;
    /** (存货)-本期销售出库金额  */
    saleOutAmt?: number;
    /** 本期发生(存货)-销售出库不含税金额 */
    saleOutNoTaxAmt?: number;
    /** (存货)-本期销售出库数量  */
    saleOutQty?: number;
    /** (发出商品)-本期销售数量(转出)  */
    saleTaxQty?: number;
    /** (发出商品)-调价销售成本调整金额(已开票)  */
    saleWareAdjustAmt?: number;
    /** 本期(发出商品)-调价销售成本调整金额(不含税) */
    saleWareAdjustNoTaxAmt?: number;
    /** 商品编码  */
    skuId?: string;
    /** 商品规格  */
    skuModel?: string;
    /** 商品名称  */
    skuName?: string;
    /** 商品拼音  */
    skuPinyin?: string;
    /** (存货)-本期存货调整金额 */
    stockAdjustAmt?: number;
    /** 本期发生(存货)-存货调整不含税金额 */
    stockAdjustNoTaxAmt?: number;
    /** (存货)-本期盘盈金额 */
    surplusAmt?: number;
    /** 本期发生(存货)-盘盈不含税金额 */
    surplusNoTaxAmt?: number;
    /** (存货)-本期盘盈数量 */
    surplusQty?: number;
    /** 本期尾差销售成本调整金额(含税) */
    tailDiffSaleCostAdjustAmt?: number;
    /** 本期尾差销售成本调整金额(不含税) */
    tailDiffSaleCostAdjustNoTaxAmt?: number;
    /** 税率  */
    taxRate?: number;
    /** 开票尾差成本调整金额(含税) */
    taxTailDiffCostAdjustAmt?: number;
    /** 开票尾差成本调整金额(不含税) */
    taxTailDiffCostAdjustNoTaxAmt?: number;
    /** 租户id  */
    tenantId?: string;
    /** 修改时间  */
    updateTime?: string;
    /** 商品通用名  */
    wareGeneralName?: string;
  };

  type StockMonthlySettleDetailPageQueryVO = {
    /**  生产厂家  */
    manufacturer?: string;
    /**  月结id  */
    monthlySettleId?: string;
    pageQuery?: PageQuery;
    /**  商品信息：名称/编码/拼音码  */
    skuInfo?: string;
  };

  type StockMonthlySettleDetailVO = {
    /**  期末金额  */
    afterChangeAmt?: number;
    /**  期末数量  */
    afterChangeQty?: number;
    /**  期末成本价  */
    afterCostPrice?: number;
    /**  商品条码  */
    barCode?: string;
    /**  期初金额  */
    beforeChangeAmt?: number;
    /**  期初数量  */
    beforeChangeQty?: number;
    /**  期初成本价  */
    beforeCostPrice?: number;
    /**  id  */
    id?: string;
    /**  生产厂家  */
    manufacturer?: string;
    /**  月结id  */
    monthlySettleId?: string;
    /**  本期销售成本金额  */
    saleCostAmt?: number;
    /**  商品编码  */
    skuId?: string;
    /**  商品规格  */
    skuModel?: string;
    /**  商品名称  */
    skuName?: string;
    /**  拼音简拼  */
    skuPinyin?: string;
    /**  通用名  */
    wareGeneralName?: string;
  };

  type StockMonthlySettleStatsDetailVO = {
    /**  (存货)-期末金额  */
    afterChangeAmt?: number;
    /**  (存货)-期末数量  */
    afterChangeQty?: number;
    /**  (存货)-期末单价  */
    afterCostPrice?: number;
    /**  (发出商品)-期末商品发出金额  */
    afterOutWareAmt?: number;
    /**  (发出商品)-期末商品发出单价  */
    afterOutWarePrice?: number;
    /**  (发出商品)-期末商品发出数量  */
    afterOutWareQty?: number;
    /**  (存货)-本期报损金额  */
    badAmt?: number;
    /**  (存货)-本期报损数量  */
    badQty?: number;
    /**  (存货)-期初金额  */
    beforeChangeAmt?: number;
    /**  (存货)-期初数量  */
    beforeChangeQty?: number;
    /**  (存货)-期初单价  */
    beforeCostPrice?: number;
    /**  (发出商品)-期初商品发出金额  */
    beforeOutWareAmt?: number;
    /**  (发出商品)-期初商品发出单价  */
    beforeOutWarePrice?: number;
    /**  (发出商品)-期初商品发出数量  */
    beforeOutWareQty?: number;
    /**  商品分类  */
    drugCategoryName?: string;
    /**  id  */
    id?: string;
    /**  (发出商品)-本期商品金额(退回)  */
    inWareChangeAmt?: number;
    /**  (发出商品)-本期商品数量(退回)  */
    inWareChangeQty?: number;
    /**  (存货)-本期盘亏金额  */
    lossAmt?: number;
    /**  (存货)-本期盘亏数量  */
    lossQty?: number;
    /**  生产厂家  */
    manufacturer?: string;
    /**  月结id  */
    monthlySettleId?: string;
    /**   (发出商品)-调价发出商品成本调整  */
    outWareAdjustAmt?: number;
    /**  (发出商品)-本期商品金额(发货)  */
    outWareChangeAmt?: number;
    /**  (发出商品)-本期商品数量(发货)  */
    outWareChangeQty?: number;
    /**  (存货)-本期采购入库金额  */
    purInAmt?: number;
    /**  (存货)-本期采购入库数量  */
    purInQty?: number;
    /**  (存货)-本期采退出库金额  */
    purOutAmt?: number;
    /**  (存货)-本期采退出库数量  */
    purOutQty?: number;
    /**  (存货)-本期采退差异  */
    purReturnDiff?: number;
    /**  (发出商品)-本期销售成本(转出)  */
    saleCostAmt?: number;
    /**  (发出商品)-本期销售收入(转出)  */
    saleEarningAmt?: number;
    /**  (存货)-本期销售退回金额  */
    saleInAmt?: number;
    /**  (存货)-本期销售退回数量  */
    saleInQty?: number;
    /**  (存货)-本期销售出库金额  */
    saleOutAmt?: number;
    /**  (存货)-本期销售出库数量  */
    saleOutQty?: number;
    /**  (发出商品)-本期销售数量(转出)  */
    saleTaxQty?: number;
    /**   (发出商品)-调价销售成本调整金额(已开票)  */
    saleWareAdjustAmt?: number;
    /**  商品编码  */
    skuId?: string;
    /**  商品规格  */
    skuModel?: string;
    /**  商品名称  */
    skuName?: string;
    /**  拼音简拼  */
    skuPinyin?: string;
    /**  (存货)-本期存货调整金额  */
    stockAdjustAmt?: number;
    /**  (存货)-本期盘盈金额  */
    surplusAmt?: number;
    /**  (存货)-本期盘盈数量  */
    surplusQty?: number;
    /** 尾差销售成本调整金额(含税) */
    tailDiffSaleCostAdjustAmt?: number;
    /**  税率  */
    taxRate?: number;
    /** 开票尾差成本调整金额(含税) */
    taxTailDiffCostAdjustAmt?: number;
    /**  通用名  */
    wareGeneralName?: string;
  };

  type StockMonthlySettleVO = {
    /**  开始时间  */
    beginTime?: string;
    /**  创建时间  */
    createTime?: string;
    /**  结束时间  */
    endTime?: string;
    /**  生成结束时间  */
    finishTime?: string;
    /**  id  */
    id?: string;
    /**  单据名称  */
    name?: string;
    /**  最后操作人  */
    operator?: string;
    /**  最后操作人id  */
    operatorId?: string;
    /**  月结月份 例如202112  */
    settleMonth?: number;
    /**  单据状态,0-生成中 1-已生成  */
    status?: number;
    /**  租户ID  */
    tenantId?: string;
    /**  修改时间  */
    updateTime?: string;
  };

  type StockOutInboundPageQueryVO = {
    /** 批次 */
    batchNo?: string;
    /** 客户ID */
    cusId?: string;
    /** 客户集编码 */
    entrustCusCode?: string;
    /** 厂家 */
    manufacturer?: string;
    pageQuery?: PageQuery;
    /** 批号 */
    produceCode?: string;
    /** 商品搜索关键字（商品名称/商品编码/拼音码） */
    skuInfo?: string;
    /** 仓库编码 */
    storeCode?: string;
    /** 供应商编码 */
    supplierId?: string;
    /** 指定查询的库房-库房类型 0-正品 1-次品 2-待处理 */
    warehouseTypes?: number[];
  };

  type StockOutInboundVO = {
    /**  商品条码  */
    barCode?: string;
    /**  批次  */
    batchNo?: string;
    /** 入库结果单批号id */
    bizStockInResultProduceId?: string;
    /**  药品分类  */
    drugCategory?: string;
    /** 客户集id */
    entrustCusCode?: string;
    /** 配置(客户集)名称 */
    entrustCusName?: string;
    /** 客户集类型 0 临时 1 BC */
    entrustType?: number;
    /**  失效日期  */
    expiredDate?: string;
    /**  主键  */
    id?: string;
    /**  生产厂家  */
    manufacturer?: string;
    /** 拼接的唯一键值 */
    mergeUniqueKeyValue?: string;
    /**  采购单号  */
    originalOrderId?: string;
    /**  价格  */
    price?: number;
    /**  生产批号  */
    produceCode?: string;
    /**  生产日期  */
    productionDate?: string;
    /**  可退数量  */
    returnQty?: number;
    /**  商品编码  */
    skuId?: string;
    /**  商品规格  */
    skuModel?: string;
    /**  商品名称  */
    skuName?: string;
    /**  商品拼音  */
    skuPinyin?: string;
    /**  商品接批号编码  */
    skuProduceBatch?: string;
    /** 商品接批号编码仓库类型 */
    skuProduceBatchWarehouseType?: string;
    /** 入库结果单主表id */
    stockResultId?: string;
    /**  税率  */
    taxRate?: number;
    /**  仓库类型 0-正品 1-次品 2-待处理  */
    warehouseType?: number;
  };

  type StockProduceLogPageQueryVO = {
    /**  客户集  */
    entrustCusCode?: string;
    /**  客户集名称  */
    entrustCusName?: string;
    /**  id  */
    id?: string;
    /**  id列表  */
    ids?: string[];
    /**  生产工厂  */
    manufacturer?: string;
    pageQuery?: PageQuery;
    /**  生产批号  */
    produceCode?: string;
    /**  来源单据表id  */
    relatedId?: string;
    /**  来源单据类型  1 采购入库结果单 2 销退入库结果单  3 采退出库结果但  4销售出库结果单  5 采退出库通知单 6 销售出库通知单  */
    relatedType?: number;
    /** 商品名称/拼音码/编码/条码 */
    skuInfo?: string;
    /**  物理仓编码  */
    storeCode?: string;
    /**  物理仓名称  */
    storeName?: string;
    /**  机构类型 0仓库 1门店  */
    storeType?: string;
    /**  租户编码  */
    tenantId?: string;
    /**  开始时间  */
    updateTimeBegin?: string;
    /**  结束时间  */
    updateTimeEnd?: string;
    /**  仓库编码  */
    warehouseId?: string;
    /**  仓库名称  */
    warehouseName?: string;
    /**  仓库类型  */
    warehouseType?: number;
  };

  type StockProduceLogVO = {
    /**  变动后冻结数量  */
    afterChangeFrozenQty?: number;
    /**  变动后可用数量  */
    afterChangeInventoryQty?: number;
    /**  变动后数量  */
    afterChangeQty?: number;
    /**  商品条码  */
    barCode?: string;
    /**  变动前冻结数量  */
    beforeChangeFrozenQty?: number;
    /**  变动前可用数量  */
    beforeChangeInventoryQty?: number;
    /**  变动前数量  */
    beforeChangeQty?: number;
    /**  变动冻结数量 可为负号  */
    changeFrozenQty?: number;
    /**  变动可用数量 可为负号  */
    changeInventoryQty?: number;
    /**  变动数量 可为负号  */
    changeQty?: number;
    /**  1 冻结库存  2 解冻库存  3 其他出库解冻库存 减少总库存  4 入库增加可用库存  5 销售出库解冻商品级库存 减少总库存  */
    changeQtyType?: number;
    /**  创建时间  */
    createTime?: string;
    /**  客户集编码  */
    entrustCusCode?: string;
    /**  客户集名称  */
    entrustCusName?: string;
    /**  id  */
    id?: string;
    /**  生产厂家  */
    manufacturer?: string;
    /**  变更前单据子表id  */
    prevSubId?: string;
    /**  变更前单据类型  */
    prevType?: number;
    /**  价格  */
    price?: number;
    /**  生产批号  */
    produceCode?: string;
    /**  来源单据  */
    relatedId?: string;
    /**  来源单据子表id  */
    relatedSubId?: string;
    /**  来源单据类型  1 采购入库结果单 2 销退入库结果单  3 采退出库结果但  4销售出库结果单  5 采退出库通知单 6 销售出库通知单  */
    relatedType?: number;
    /**  来源单据类型名称  */
    relatedTypeName?: string;
    /**  商品编码  */
    skuId?: string;
    /**  商品规格  */
    skuModel?: string;
    /**  商品名称  */
    skuName?: string;
    /**  拼音简拼  */
    skuPinyin?: string;
    /**  主表id  */
    stockProduceId?: string;
    /**  物理仓编码  */
    storeCode?: string;
    /**  物理仓名称  */
    storeName?: string;
    /**  租户编码  */
    tenantId?: string;
    /**  修改时间  */
    updateTime?: string;
    /**  通用名  */
    wareGeneralName?: string;
    /**  仓库编码  */
    warehouseId?: string;
    /**  仓库名称  */
    warehouseName?: string;
    /**  仓库类型  */
    warehouseType?: number;
  };

  type StockProducePageQueryVO = {
    /**  客户集  */
    entrustCusCode?: string;
    /**  客户集名称  */
    entrustCusName?: string;
    /**  判断可用数据是否有库存  */
    hasInventoryQty?: boolean;
    /**  有库存  */
    hasQty?: boolean;
    /**  id  */
    id?: string;
    /**  id列表  */
    ids?: string[];
    /**  厂家  */
    manufacturer?: string;
    pageQuery?: PageQuery;
    /**  生产批号  */
    produceCode?: string;
    /** 商品名称/拼音码/编码/条码 */
    skuInfo?: string;
    /**  物理仓编码  */
    storeCode?: string;
    /**  物理仓名称  */
    storeName?: string;
    /**  机构类型 0仓库 1门店  */
    storeType?: string;
    /**  租户编码  */
    tenantId?: string;
    /**  仓库编码  */
    warehouseId?: string;
    /**  仓库名称  */
    warehouseName?: string;
    /**  仓库类型  */
    warehouseType?: number;
  };

  type StockProduceSnapshotPageQueryVO = {
    /** 商品条码 */
    barCode?: string;
    /** 统计时间 */
    createTimeEnd?: string;
    /** 统计时间 */
    createTimeStart?: string;
    pageQuery?: PageQuery;
    /**  生产批号   */
    produceCode?: string;
    /** 商品名称/拼音码/编码 */
    skuInfo?: string;
    /** 物理仓编码 */
    storeCode?: string;
    /**  仓库类型 0-正品 1-次品 2-待处理  */
    warehouseType?: number;
  };

  type StockProduceSnapshotVO = {
    /** 商品条码 */
    barCode?: string;
    /** 客户集 */
    entrustCusCode?: string;
    /** 客户集名称 */
    entrustCusName?: string;
    /** 失效日期 */
    expirationDate?: string;
    /** 货位 */
    freight?: string;
    /** 冻结数量 */
    frozenQty?: number;
    /** id */
    id?: string;
    /** 可用数量 */
    inventoryQty?: number;
    /** 生产厂家 */
    manufacturer?: string;
    /** 生产批号 */
    produceCode?: string;
    /** 生产日期 */
    productionDate?: string;
    /** 库存数量 */
    qty?: number;
    /**  批准文号  */
    regisTrationNumber?: string;
    /** 商品编码 */
    skuId?: string;
    /** 包装规格 */
    skuModel?: string;
    /** 商品名称 */
    skuName?: string;
    /** 拼音简拼 */
    skuPinyin?: string;
    /** 统计时间 */
    snapshotDate?: string;
    /** 本位码 */
    standardCode?: string;
    /** 物理仓编码 */
    storeCode?: string;
    /** 物理仓名称 */
    storeName?: string;
    /** 通用名 */
    wareGeneralName?: string;
    /**  仓库类型 0-正品 1-次品 2-待处理  */
    warehouseType?: number;
  };

  type StockProduceVO = {
    /**  商品条码  */
    barCode?: string;
    /**  创建时间  */
    createTime?: string;
    /**  药品分类  */
    drugCategory?: string;
    /**  客户集  */
    entrustCusCode?: string;
    /**  客户集名称  */
    entrustCusName?: string;
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
    /**  生产批号  */
    produceCode?: string;
    /**  生产日期  */
    productionDate?: string;
    /**  数量  */
    qty?: number;
    /**  来源单据子表id  */
    relatedSubId?: string;
    /**  来源单据类型  1 采购入库结果单 2 销退入库结果单  3 采退出库结果但  4销售出库结果单  5 采退出库通知单 6 销售出库通知单  */
    relatedType?: number;
    /**  商品编码  */
    skuId?: string;
    /**  商品规格  */
    skuModel?: string;
    /**  商品名称  */
    skuName?: string;
    /**  拼音简拼  */
    skuPinyin?: string;
    /**  商品接批号编码  */
    skuProduceCode?: string;
    /**  物理仓编码  */
    storeCode?: string;
    /**  物理仓名称  */
    storeName?: string;
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
    /**  仓库名称  */
    warehouseName?: string;
    /**  仓库类型  */
    warehouseType?: number;
  };

  type StockSkuLogPageQueryVO = {
    /**  变动后数量  */
    afterChangeQty?: number;
    /**  变动前数量  */
    beforeChangeQty?: number;
    /**  变动数量 可为负号  */
    changeQty?: number;
    /**  客户集  */
    entrustCusCode?: string;
    /**  客户集名称  */
    entrustCusName?: string;
    /**  外部商品编码  */
    externalSkuId?: string;
    /**  id列表  */
    ids?: string[];
    /**  生产厂家  */
    manufacturer?: string;
    pageQuery?: PageQuery;
    /**  来源单据表id  */
    relatedId?: string;
    /**  来源单据类型  */
    relatedType?: number;
    /**  商品 编码/名称/简拼/条码  */
    skuInfo?: string;
    /**  物理仓编码  */
    storeCode?: string;
    /**  物理仓名称  */
    storeName?: string;
    /**  开始时间  */
    updateTimeBegin?: string;
    /**  结束时间  */
    updateTimeEnd?: string;
    /**  仓库编码  */
    warehouseId?: string;
    /**  仓库名称  */
    warehouseName?: string;
    /**  仓库类型  */
    warehouseType?: number;
  };

  type StockSkuLogVO = {
    /**  变动后冻结数量  */
    afterChangeFrozenQty?: number;
    /**  变动后可用数量  */
    afterChangeInventoryQty?: number;
    /**  变动后数量  */
    afterChangeQty?: number;
    /**  商品条码  */
    barCode?: string;
    /**  变动前冻结数量  */
    beforeChangeFrozenQty?: number;
    /**  变动前可用数量  */
    beforeChangeInventoryQty?: number;
    /**  变动前数量  */
    beforeChangeQty?: number;
    /**  变动冻结数量 可为负号  */
    changeFrozenQty?: number;
    /**  变动可用数量 可为负号  */
    changeInventoryQty?: number;
    /**  变动数量 可为负号  */
    changeQty?: number;
    /** 1 冻结商品级虚拟库存  2 解冻商品级虚拟库存  3 出库解冻批号实物库存 4 入库增加库存  5出库解冻商品虚拟库存  6出库不解冻商品库存
7 冻结批号实物库存   8 解冻批号实物库存  9 出库不解冻批号库存 */
    changeQtyType?: number;
    /**  创建时间  */
    createTime?: string;
    /**  客户集  */
    entrustCusCode?: string;
    /**  客户集名称  */
    entrustCusName?: string;
    /**  外部商品编码  */
    externalSkuId?: string;
    /**  id  */
    id?: string;
    /**  生产厂家  */
    manufacturer?: string;
    /**  变更前单据子表id  */
    prevId?: string;
    /**  变更前单据类型  */
    prevType?: number;
    /**  来源单据子表id  */
    relatedId?: string;
    /**  来源单据类型  */
    relatedType?: number;
    /**  来源单据类型名称  */
    relatedTypeName?: string;
    /**  商品编码  */
    skuId?: string;
    /**  商品规格  */
    skuModel?: string;
    /**  商品名称  */
    skuName?: string;
    /**  拼音简拼  */
    skuPinyin?: string;
    /**  主表id  */
    stockSkuId?: string;
    /**  物理仓编码  */
    storeCode?: string;
    /**  物理仓名称  */
    storeName?: string;
    /**  租户编码  */
    tenantId?: string;
    /**  修改时间  */
    updateTime?: string;
    /**  通用名  */
    wareGeneralName?: string;
    /**  仓库编码  */
    warehouseId?: string;
    /**  仓库名称  */
    warehouseName?: string;
    /**  仓库类型  */
    warehouseType?: number;
  };

  type StockSkuPageQueryVO = {
    /**  客户集  */
    entrustCusCode?: string;
    /**  客户集名称  */
    entrustCusName?: string;
    /**  外部商品编码  */
    externalSkuId?: string;
    /**  是否有客户集 0没有 1有  */
    hasEntrustCusCode?: boolean;
    /**  id列表  */
    ids?: string[];
    /**  生产厂家  */
    manufacturer?: string;
    pageQuery?: PageQuery;
    /**  商品 编码/名称/简拼/条码  */
    skuInfo?: string;
    /**  可用库存比较枚举：1：大于0 , 2：小于等于0 */
    stockCompare?: number;
    /**  物理仓编码  */
    storeCode?: string;
    /**  物理仓名称  */
    storeName?: string;
    /**  机构类型 0门店 1仓库  */
    storeType?: string;
    /**  仓库编码  */
    warehouseId?: string;
    /**  仓库名称  */
    warehouseName?: string;
    /**  仓库类型  */
    warehouseType?: number;
  };

  type StockSkuReportDetailPageQueryVO = {
    /**  客户集  */
    entrustCusName?: string;
    /**  外部商品编码  */
    externalSkuId?: string;
    externalSkuIds?: string[];
    pageQuery?: PageQuery;
    /**  仓库编码  */
    storeCode?: string;
  };

  type StockSkuReportPageQueryVO = {
    /**  条形码  */
    barCode?: string;
    /**  外部商品编码  */
    externalSkuId?: string;
    /**  生产厂家  */
    manufacturer?: string;
    pageQuery?: PageQuery;
    /**  商品 编码/名称  */
    skuInfo?: string;
    /**  仓库编码  */
    storeCode?: string;
  };

  type StockSkuReportVO = {
    /**  商品条码  */
    barCode?: string;
    /**  客户集  */
    entrustCusCode?: string;
    /**  客户集名称  */
    entrustCusName?: string;
    /**  外部商品编码  */
    externalSkuId?: string;
    /**  外部商品编码列表  */
    externalSkuIds?: string[];
    /**  id  */
    id?: string;
    /**  生产厂家  */
    manufacturer?: string;
    /**  预约库存数量  */
    qty?: number;
    /**  合格品仓数量  */
    qualityQty?: number;
    /**  商品编码  */
    skuId?: string;
    /**  商品规格  */
    skuModel?: string;
    /**  商品名称  */
    skuName?: string;
    /**  物理仓编码  */
    storeCode?: string;
    /**  物理仓名称  */
    storeName?: string;
    /**  仓库数量  */
    totalQty?: number;
  };

  type StockSkuVO = {
    /**  商品条码  */
    barCode?: string;
    /**  创建时间  */
    createTime?: string;
    /**  客户集  */
    entrustCusCode?: string;
    /**  客户集名称  */
    entrustCusName?: string;
    /**  外部商品编码  */
    externalSkuId?: string;
    /**  冻结数量  */
    frozenQty?: number;
    /**  id  */
    id?: string;
    /**  可用数量  */
    inventoryQty?: number;
    /**  生产厂家  */
    manufacturer?: string;
    /**  批号冻结数量  */
    produceFrozenQty?: number;
    /**  数量  */
    qty?: number;
    /**  来源单据id  */
    relatedId?: string;
    /**  来源单据类型  */
    relatedType?: number;
    /**  零售冻结数量  */
    retailFrozenQty?: number;
    /**  零售可用数量  */
    retailInventoryQty?: number;
    /**  零售单物理仓合格品库房全部商品级冻结数量  */
    retailTotalFrozenQty?: number;
    /**  零售单物理仓合格品库房全部可用数量  */
    retailTotalInventoryQty?: number;
    /**  零售单物理仓合格品库房全部数量  */
    retailTotalQty?: number;
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
    /**  租户编码  */
    tenantId?: string;
    /**  单物理仓合格品库房全部冻结数量  */
    totalFrozenQty?: number;
    /**  单物理仓合格品库房全部可用数量  */
    totalInventoryQty?: number;
    /**  单物理仓合格品库房全部批号冻结数量  */
    totalProduceFrozenQty?: number;
    /**  单物理仓合格品库房全部数量  */
    totalQty?: number;
    /**  修改时间  */
    updateTime?: string;
    /**  版本号  */
    version?: number;
    /**  通用名  */
    wareGeneralName?: string;
    /**  仓库编码  */
    warehouseId?: string;
    /**  仓库名称  */
    warehouseName?: string;
    /**  仓库类型  */
    warehouseType?: number;
  };

  type StockTotalVO = {
    /** 库存冻结数量合计 */
    frozenQtyTotal?: number;
    /** 入库数量合计 */
    inboundQtyTotal?: number;
    /** 库存可用数量合计 */
    inventoryQtyTotal?: number;
    /** 出库数量合计 */
    outboundQtyTotal?: number;
    /** 库存数量合计/虚拟仓库存合计 */
    qtyTotal?: number;
    /** 合格仓数量合计 */
    qualityQtyTotal?: number;
    /** 商品库存数量合计 */
    skuQtyTotal?: number;
  };

  type TraceLogPageQueryVO = {
    /** 操作人 */
    creater?: string;
    /** 结束操作时间 */
    maxCreateTime?: string;
    /** 开始操作时间 */
    minCreateTime?: string;
    /** 模块:1、质量复查单 2、养护记录 3、批次库存调整 4、销毁单 5、报溢单6、报损单 7、验收入库 8、采购入库通知单 9、调拨出库申请单 10、GSP销售员审核登记11、GSP采购员审核登记 12、GSP_GATHER_PASS_FEED_FEEDBACK 13、GSP顾客投诉登记 14、GSP 销后召回登记 15、调拨差异单16、员工资料 17、质量公告 18、直调入库单 19、特殊药品限购管理 20、渠道(预约)业务配置 21、批次库存客户集变更 */
    module?: number;
    pageQuery?: PageQuery;
    /** 单据id */
    sheetId?: string;
  };

  type TraceLogVO = {
    /** 操作时间 */
    createTime?: string;
    /** 操作人 */
    creater?: string;
    /** id */
    id?: string;
    /** 操作详情 */
    logDesc?: string;
    /** 日志类型 1: 申请, 2:修改, 3:审核, 4:创建, 5:取消, 6:提审, 7:审核通过, 8:审核不通过, 9:撤审 */
    logType?: number;
    /** 操作 */
    logTypeName?: string;
    /** 模块名称 */
    module?: number;
    /** 单据id */
    sheetId?: string;
    /** 租户id */
    tenantId?: string;
    /** 修改时间 */
    updateTime?: string;
  };

  type TransferDifferenceDetailVO = {
    /** 次品数量 */
    badQty?: number;
    /** 商品条码 */
    barCode?: string;
    /** 批次号 */
    batchNo?: string;
    /** 客户集 */
    cusSetId?: string;
    /** 客户集名称 */
    cusSetName?: string;
    /** 处理记录 */
    dealRecord?: string;
    /** 出入库差异数量 */
    diffQty?: number;
    /** 有效日期 */
    expiredDate?: string;
    /** id */
    id?: string;
    /** 生产厂家 */
    manufacturer?: string;
    /** 价格 */
    price?: number;
    /** 生产批号 */
    produceCode?: string;
    /** 生产日期 */
    productionDate?: string;
    /** 本次申请数量 */
    qty?: number;
    /** 实际入货数量 */
    realityInQty?: number;
    /** 实际发出数量 */
    realityOutQty?: number;
    /** 商品编码 */
    skuId?: string;
    /** 规格 */
    skuModel?: string;
    /** 商品名称 */
    skuName?: string;
    /** 商品名称拼音 */
    skuPinyin?: string;
    /** 单位 */
    unit?: string;
  };

  type TransferDifferencePageQueryVO = {
    /** 生成时间 */
    createTimeEnd?: string;
    /** 生成时间 */
    createTimeStart?: string;
    /** 调出仓编码 */
    fromStoreCode?: string;
    /** 单据编号 */
    id?: string;
    /** 编号id集合，用于可选 */
    ids?: string[];
    pageQuery?: PageQuery;
    /** 商品信息 */
    skuInfo?: string;
    /** 单据状态 0-未提审 1-已提审 2-审核中 3-审核通过 4-已取消 5-审批不通过 */
    status?: number;
    /** 入库单号 */
    stockInResultId?: string;
    /** 出库单号 */
    stockOutResultId?: string;
    /** 调入仓编号 */
    toStoreCode?: string;
    /** 调拨单号 */
    transferId?: string;
  };

  type TransferDifferenceUpdateDetailVO = {
    /** 处理记录 */
    dealRecord?: string;
    /** 单据编号 */
    id?: string;
  };

  type TransferDifferenceUpdateVO = {
    /** 更新明细 */
    details?: TransferDifferenceUpdateDetailVO[];
    /** 单据编号 */
    id?: string;
    /** 备注 */
    remark?: string;
  };

  type TransferDifferenceVO = {
    /** 生成时间 */
    createTime?: string;
    /** 明细 */
    details?: TransferDifferenceDetailVO[];
    /** 差异条目 */
    diffItemCount?: number;
    /** 差异数量 */
    diffQty?: number;
    /** 调出仓编码 */
    fromStoreCode?: string;
    /** 调出仓名称 */
    fromStoreName?: string;
    /** 单据编号 */
    id?: string;
    /** 操作日志 */
    operateLogs?: TraceLogVO[];
    /** 备注 */
    remark?: string;
    /** 单据状态 0-未提审 1-已提审 2-审核中 3-审核通过 4-已取消 5-审批不通过 */
    status?: number;
    /** 入库单号 */
    stockInResultId?: string;
    /** 出库单号 */
    stockOutResultId?: string;
    /** 调入仓编号 */
    toStoreCode?: string;
    /** 调入仓名称 */
    toStoreName?: string;
    /** 调拨单号 */
    transferId?: string;
  };

  type TransferStockDetailVO = {
    /** 商品条码 */
    barCode?: string;
    /** 批次 */
    batchNo?: string;
    /** 客户集 */
    cusSetId?: string;
    /** 客户集名称 */
    cusSetIdName?: string;
    /** 药品分类 */
    drugCategory?: string;
    /** 有效日期 */
    expiredDate?: string;
    /** 单据编码 */
    id?: string;
    /** 可用库存 */
    inventoryQty?: number;
    /** 生产厂家 */
    manufacturer?: string;
    /** 单价 */
    price?: number;
    /** 生产批号 */
    produceCode?: string;
    /** 生产日期 */
    productionDate?: string;
    /** 本次申请数量 */
    qty?: number;
    /** 实际入库数量 */
    realityInQty?: number;
    /** 实际发出数量 */
    realityOutQty?: number;
    /** 备注 */
    remark?: string;
    /** 商品编号 */
    skuId?: string;
    /** 规格 */
    skuModel?: string;
    /** 商品名称 */
    skuName?: string;
    /** 商品名称拼音 */
    skuPinyin?: string;
    /** 单据编码 */
    transferStockId?: string;
    /** 单位 */
    unit?: string;
  };

  type TransferStockInPageQueryVO = {
    /** 调拨单号 */
    docId?: string;
    /** 结束审核时间 */
    endAuditTime?: string;
    /** 调出仓编码 */
    fromStoreCode?: string;
    /** 入库单号 */
    id?: string;
    /** ids集合，用于导出所选 */
    ids?: string[];
    pageQuery?: PageQuery;
    /** 商品信息 */
    skuInfo?: string;
    /** 开始审核时间 */
    startAuditTime?: string;
    /** 调入仓编码 */
    storeCode?: string;
  };

  type TransferStockInResultDetailVO = {
    /** 不合格品数 */
    badQty?: number;
    /** 批次号 */
    batchNo?: string;
    /** 客户集id */
    cusSetId?: string;
    /** 客户集名称 */
    cusSetName?: string;
    /** 有效日期 */
    expiredDate?: string;
    /** 合格品数 */
    goodQty?: number;
    /** 入库数量 */
    inQty?: number;
    /** 生产产家 */
    manufacturer?: string;
    /** 待处理数 */
    pendingQty?: number;
    /** 生产批号 */
    produceCode?: string;
    /** 生产日期 */
    productionDate?: string;
    /** 商品编号 */
    skuId?: string;
    /** 商品规格 */
    skuModel?: string;
    /** 商品名称 */
    skuName?: string;
  };

  type TransferStockInResultVO = {
    /** 审核时间 */
    createTime?: string;
    /** 明细 */
    details?: TransferStockInResultDetailVO[];
    /** 调拨单号 */
    docId?: string;
    /** 调出仓 */
    fromStoreName?: string;
    /** 入库单号 */
    id?: string;
    /** 审核人 */
    operator?: string;
    /** 单据状态 */
    statusText?: string;
    /** 通知单id */
    stockNoticeId?: string;
    /** 调入仓 */
    storeName?: string;
  };

  type TransferStockOutPageQueryVO = {
    /** 调拨单号 */
    docId?: string;
    /** 结束审核时间 */
    endAuditTime?: string;
    /** 出库单号 */
    id?: string;
    /** ids集合，用于导出所选 */
    ids?: string[];
    pageQuery?: PageQuery;
    /** 商品信息 */
    skuInfo?: string;
    /** 开始审核时间 */
    startAuditTime?: string;
    /** 调出仓编码 */
    storeCode?: string;
    /** 调入仓编码 */
    toStoreCode?: string;
  };

  type TransferStockOutResultDetailVO = {
    /** 批次号 */
    batchNo?: string;
    /** 客户集id */
    cusSetId?: string;
    /** 客户集名称 */
    cusSetName?: string;
    /** 有效日期 */
    expiredDate?: string;
    /** 生产产家 */
    manufacturer?: string;
    /** 生产批号 */
    produceCode?: string;
    /** 生产日期 */
    productionDate?: string;
    /** 出库数量 */
    realityQty?: number;
    /** 商品编号 */
    skuId?: string;
    /** 商品规格 */
    skuModel?: string;
    /** 商品名称 */
    skuName?: string;
  };

  type TransferStockOutResultVO = {
    /** 审核时间 */
    createTime?: string;
    /** 明细 */
    details?: TransferStockOutResultDetailVO[];
    /** 调拨单号 */
    docId?: string;
    /** 出库单号 */
    id?: string;
    /** 审核人 */
    operator?: string;
    /** 单据状态 */
    statusText?: string;
    /** 通知单id */
    stockNoticeId?: string;
    /** 调出仓 */
    storeName?: string;
    /** 调入仓 */
    toStoreName?: string;
  };

  type TransferStockPageQueryVO = {
    /** 申请时间 */
    createTimeEnd?: string;
    /** 申请时间 */
    createTimeStart?: string;
    /** 调出仓编码 */
    fromStoreCode?: string;
    /** 单据编码 */
    id?: string;
    pageQuery?: PageQuery;
    /** 商品名称/编码/拼音码 */
    skuInfo?: string;
    /** 单据状态 0-未审核 1-已审核 3-已取消 4-已出库 5-已关单 6-拒收中 7-已拒收 */
    status?: number;
    /** 调入仓编码 */
    toStoreCode?: string;
  };

  type TransferStockUpdateDetailVO = {
    /** 批次 */
    batchNo?: string;
    /** 客户集 */
    cusSetId?: string;
    /** 客户集名称 */
    cusSetIdName?: string;
    /** 药品分类 */
    drugCategory?: string;
    /** 单据编码，新建操作：没id，不需要传; 更新操作：传对应Id */
    id?: string;
    /** 生产批号 */
    produceCode?: string;
    /** 本次申请数量 */
    qty?: number;
    /** 商品编号 */
    skuId?: string;
  };

  type TransferStockUpdateVO = {
    /** 明细 */
    details?: TransferStockUpdateDetailVO[];
    /** 调出仓编码 */
    fromStoreCode?: string;
    /** 调出仓名称 */
    fromStoreName?: string;
    /** 单据编码，新建操作：没id，不需要传; 更新操作：传对应Id */
    id?: string;
    /** 单据备注 */
    remark?: string;
    /** 调入仓编码 */
    toStoreCode?: string;
    /** 调入仓名称 */
    toStoreName?: string;
  };

  type TransferStockVO = {
    /** 申请时间 */
    createTime?: string;
    /** 明细 */
    details?: TransferStockDetailVO[];
    /** 是否存在实际出入库差异 */
    diffDesc?: string;
    /** 调出仓编码 */
    fromStoreCode?: string;
    /** 调出仓名称 */
    fromStoreName?: string;
    /** 单据编码 */
    id?: string;
    /** 操作日志 */
    operateLogs?: TraceLogVO[];
    /** 单据备注 */
    remark?: string;
    /** 单据状态 0-未审核 1-已审核 3-已取消 4-已出库 5-已关单 6-拒收中 7-已拒收 */
    status?: number;
    /** 调入仓编码 */
    toStoreCode?: string;
    /** 调入仓名称 */
    toStoreName?: string;
  };

  type UnPayDetailMonthPageQueryVO = {
    pageQuery?: PageQuery;
    /** 结算月份 */
    statisticsRange?: string;
    /** 供应商编码 */
    supplierId?: string;
  };

  type UnPayDetailViewPageQueryVO = {
    pageQuery?: PageQuery;
    supplierId?: string;
  };

  type UnPayDetailViewVO = {
    /** 单据金额 */
    amount?: number;
    /** 条码 */
    barCode?: string;
    /** 批次 */
    batchNumber?: string;
    /** 合同编号 */
    contractCode?: string;
    /** 单据编号 */
    docCode?: string;
    /** id */
    id?: string;
    /** 厂家 */
    manufacturer?: string;
    /** 账期起算日 */
    orderSettleTime?: string;
    /** 账龄天数 */
    pastTime?: number;
    /** 账龄 */
    pastTimeRange?: string;
    /** 账期天数 */
    paymentDay?: number;
    /** 结算方式 */
    paymentWay?: number;
    /** 结算方式 */
    paymentWayText?: string;
    /** 单价 */
    price?: number;
    /** 批号 */
    produceCode?: string;
    /** 采购订单号 */
    purOrderId?: string;
    /** 到期月 */
    settleMonth?: string;
    /** 商品编号 */
    skuId?: string;
    /** 规格 */
    skuModel?: string;
    /** 商品名称 */
    skuName?: string;
    /** 账期起算日 */
    statisticDate?: string;
    /** 供应商编号 */
    supplierId?: string;
    /** 供应商名称 */
    supplierName?: string;
    /** 税率 */
    taxRate?: number;
    /** 单据类型 */
    type?: string;
    /** 单位 */
    unit?: string;
    /** 未付金额(含税) */
    unpayAmount?: number;
  };

  type UnPayMonthPageQueryVO = {
    pageQuery?: PageQuery;
    /** 结算月份 */
    statisticsRange?: string;
    /** 供应商编码 */
    supplierId?: string;
  };

  type UnPayMonthSummaryViewVO = {
    /** 本月入库调整金额 */
    adjustAmt?: number;
    /** 期末逾期金额 */
    afterAmt?: number;
    /** 本月入库金额 */
    amount?: number;
    /** 91-180天金额 */
    amount180days?: number;
    /** 0-30天金额 */
    amount30days?: number;
    /** 181-361天金额 */
    amount360days?: number;
    /** 31-60天金额 */
    amount60days?: number;
    /** 61天-90天金额 */
    amount90days?: number;
    /** 361-N天金额 */
    amountOther?: number;
    /** 期初逾期金额 */
    beforeAmt?: number;
    /** 本月付款金额 */
    payAmt?: number;
    /** 到期月含税金额 */
    settleMonthAmount?: MonthUnPaySummary[];
    /** 供应商编码 */
    supplierId?: string;
    /** 供应商名称 */
    supplierName?: string;
    /** 未逾期金额(含税) */
    unpaidAmt?: number;
    /** 逾期金额(含税) */
    waitPayAmt?: number;
  };

  type UnPayMonthViewVO = {
    /** 本月入库调整金额 */
    adjustAmt?: number;
    /** 期末逾期金额 */
    afterAmt?: number;
    /** 本月入库金额 */
    amount?: number;
    /** 91-180天金额 */
    amount180days?: number;
    /** 0-30天金额 */
    amount30days?: number;
    /** 181-361天金额 */
    amount360days?: number;
    /** 31-60天金额 */
    amount60days?: number;
    /** 61天-90天金额 */
    amount90days?: number;
    /** 361-N天金额 */
    amountOther?: number;
    /** 期初逾期金额 */
    beforeAmt?: number;
    /** 本月付款金额 */
    payAmt?: number;
    /** 到期月含税金额 */
    settleMonthAmount?: number[];
    /** 结算月份 */
    settleRange?: string;
    /** 供应商编码 */
    supplierId?: string;
    /** 供应商名称 */
    supplierName?: string;
    /** 未逾期金额(含税) */
    unpaidAmt?: number;
    /** 逾期金额(含税) */
    waitPayAmt?: number;
  };

  type UnPaySummaryVO = {
    /** 应付金额(含税) */
    amount?: number;
    /** 91-180天金额 */
    amount180days?: number;
    /** 0-30天金额 */
    amount30days?: number;
    /** 181-361天金额 */
    amount360days?: number;
    /** 31-60天金额 */
    amount60days?: number;
    /** 61天-90天金额 */
    amount90days?: number;
    /** 361-N天金额 */
    amountOther?: number;
    /** 到期月含税金额 */
    settleMonthAmount?: MonthUnPaySummaryVO[];
    /** 未付应付金额(含税) */
    unpayAmount?: number;
    /** 逾期应付金额(含税) */
    waitPayAmount?: number;
  };

  type UnPayViewPageQueryVO = {
    pageQuery?: PageQuery;
    /** 供应商编码 */
    supplierId?: string;
  };

  type UnPayViewVO = {
    /** 应付金额(含税) */
    amount?: number;
    /** 91-180天金额 */
    amount180days?: number;
    /** 0-30天金额 */
    amount30days?: number;
    /** 181-361天金额 */
    amount360days?: number;
    /** 31-60天金额 */
    amount60days?: number;
    /** 61天-90天金额 */
    amount90days?: number;
    /** 361-N天金额 */
    amountOther?: number;
    /** 到期月含税金额 */
    settleMonthAmount?: number[];
    /** 供应商编码 */
    supplierId?: string;
    /** 供应商名称 */
    supplierName?: string;
    /** 未付金额(含税) */
    unpayAmount?: number;
    /** 逾期应付金额(含税) */
    waitPayAmount?: number;
  };

  type WareFirstInRecordViewPageQueryVO = {
    /** 商品条码 */
    barCode?: string;
    /** 起始入库时间 */
    inboundTimeBegin?: string;
    /** 结束入库时间 */
    inboundTimeEnd?: string;
    /** 厂家 */
    manufacturer?: string;
    pageQuery?: PageQuery;
    /** 商品信息(商品名称/拼音码/编码) */
    skuInfo?: string;
    /** 仓库编码 */
    storeCode?: string;
    /** 供应商编码/名称 */
    supplierName?: string;
  };

  type WareFirstInRecordViewVO = {
    /** 总额 */
    amt?: number;
    /** 商品条码 */
    barCode?: string;
    /** 剂型 */
    dosageFormName?: string;
    /** 有效期至 */
    expiredDate?: string;
    /** id */
    id?: string;
    /** 生产厂家 */
    manufacturer?: string;
    /** 入库时间 */
    orderConfirmTime?: string;
    /** 采购单号 */
    orderId?: string;
    /** 单价 */
    price?: number;
    /** 批号 */
    produceCode?: string;
    /** 生产日期 */
    productionDate?: string;
    /** 入库数量 */
    realityQty?: number;
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
    /** 收货通知单号 */
    stockNoticeId?: string;
    /** 入库单号 */
    stockResultId?: string;
    /** 仓库名称 */
    storeName?: string;
    /** 供应商编码 */
    supplierId?: string;
    /** 供应商名称 */
    supplierName?: string;
    /** 通用名称 */
    wareGeneralName?: string;
    /** 库房 */
    warehouseName?: string;
  };

  type WareSkuProduceVO = {
    /**  商品条码  */
    barCode?: string;
    /**  创建时间  */
    createTime?: string;
    /**  有效日期  */
    expirationDate?: string;
    /**  id  */
    id?: string;
    /**  可用库存  */
    inventoryQty?: number;
    /**  生产厂家  */
    manufacturer?: string;
    /**  生产批号  */
    produceCode?: string;
    /**  生产日期  */
    productionDate?: string;
    /**  批准文号  */
    regisTrationNumber?: string;
    /**  商品编码  */
    skuId?: string;
    /**  规格  */
    skuModel?: string;
    /**  商品名称  */
    skuName?: string;
    /**  商品名称拼音  */
    skuPinyin?: string;
    /**  单位  */
    unit?: string;
    /**  修改时间  */
    updateTime?: string;
    /**  商品通用名  */
    wareGeneralName?: string;
  };

  type WarehouseInfoVO = {
    /**  创建时间  */
    createTime?: string;
    /**  创建人  */
    creater?: string;
    /**  创建人编码  */
    createrId?: string;
    /**  id  */
    id?: string;
    /**  备注  */
    remark?: string;
    /**  状态 有库存不可更改  */
    status?: number;
    /**  物理仓编码  */
    storeCode?: string;
    /**  物理仓名称  */
    storeName?: string;
    /**  租户编码  */
    tenantId?: string;
    /**  修改时间  */
    updateTime?: string;
    /**  修改人  */
    updater?: string;
    /**  修改人编码  */
    updaterId?: string;
    /**  仓库名称  */
    warehouseName?: string;
    /**  仓库类型  新增后不可更改  */
    warehouseType?: number;
  };

  type WpfAsnTransportRecordPageQueryVO = {
    /** id列表 */
    ids?: string[];
    /** 结束时间 */
    maxArrivalTime?: string;
    /** 开始时间 */
    minArrivalTime?: string;
    /**  入库单号  */
    orderCode?: string;
    pageQuery?: PageQuery;
    /**  仓库编码  */
    storeCode?: string;
  };

  type WpfAsnTransportRecordVO = {
    /**  到达温度  */
    arrivalTemperature?: number;
    /**  到货时间  */
    arrivalTime?: string;
    /**  运输单位  */
    carrierName?: string;
    /**  发运地点  */
    dispatchAddress?: string;
    /**  id  */
    id?: string;
    /**  启运温度  */
    initialTemperature?: number;
    /**  入库单号  */
    orderCode?: string;
    /**  到货数量  */
    qty?: number;
    /**  收货人  */
    receiveBy?: string;
    /**  仓库编码  */
    storeCode?: string;
    /**  仓库名称  */
    storeName?: string;
    /**  温控方式 */
    temperatureControlTypeName?: string;
    /**  启运时间  */
    transportTime?: string;
    /**  运输工具  */
    transportToolName?: string;
    /**  运输方式  */
    transportTypeName?: string;
    /**  冷藏车号  */
    truckNo?: string;
  };

  type WpfDoTransportRecordPageQueryVO = {
    /**  外部单号  */
    deliveryCode?: string;
    /** id列表 */
    ids?: string[];
    /** 结束时间 */
    maxShipTime?: string;
    /** 开始时间 */
    minShipTime?: string;
    /**  出库单号  */
    orderCode?: string;
    pageQuery?: PageQuery;
    /**  仓库编码  */
    storeCode?: string;
  };

  type WpfDoTransportRecordVO = {
    /**  环境温度  */
    ambientTemperature?: number;
    /**  运达时间  */
    arrivalTime?: string;
    /**  到达温度  */
    arriveTemperature?: number;
    /**  收货地址  */
    collectAddress?: string;
    /**  收货单位  */
    collectCompany?: string;
    /**  发货人  */
    consignor?: string;
    /**  外部单号  */
    deliveryCode?: string;
    /**  启运温度  */
    departureTemperature?: number;
    /**  发运地点  */
    dispatchAddress?: string;
    /**  中台主键ID  */
    doTransportRequestId?: string;
    /**  交接人  */
    handover?: string;
    /**  id  */
    id?: string;
    /**  药品件数  */
    number?: number;
    /**  出库单号  */
    orderCode?: string;
    /**  发货日期  */
    shipTime?: string;
    /**  快递单号  */
    shipmentNo?: string;
    /**  仓库编码  */
    storeCode?: string;
    /**  仓库名称  */
    storeName?: string;
    /**  运输人员  */
    transportBy?: string;
    /**  运输车辆  */
    transportCar?: string;
    /**  运输单位  */
    transportCompany?: string;
    /**  启运时间  */
    transportStartDate?: string;
    /**  运输工具 */
    transportToolName?: string;
    /**  运输方式  */
    transportTypeName?: string;
  };

  type WpfErpMaintainDetailPageQueryVO = {
    /**  经营范围  */
    gspCategory?: string;
    /**  商品名称/拼音/编码  */
    keyword?: string;
    /**  养护人  */
    maintainBy?: string;
    /**  养护结束日期 */
    maintainDateEnd?: string;
    /**  养护开始日期 */
    maintainDateSta?: string;
    /**  养护单号  */
    maintainNo?: string;
    /**  养护类型 1:一般养护 2:重点养护  */
    maintainType?: number;
    pageQuery?: PageQuery;
    /**  批准文号  */
    regisTrationNumber?: string;
    /**  仓储编码  */
    storeCode?: string;
    /**  通用名称  */
    wareGeneralName?: string;
  };

  type WpfErpMaintainDetailVO = {
    /**  批次  */
    batchNo?: string;
    /**  剂型  */
    dosageForm?: string;
    /**  剂型名称  */
    dosageFormName?: string;
    /**  有效期至  */
    dueDate?: string;
    /**  经营范围  */
    gspCategory?: string;
    /**  经营范围名称  */
    gspCategoryName?: string;
    /**  处理结果  */
    handleResult?: string;
    /**  主键id  */
    id?: string;
    /**  库存类型(1：正品 101：残次 201：待处理)  */
    inventoryType?: number;
    /**  库存类型(1：正品 101：残次 201：待处理)  */
    inventoryTypeName?: string;
    /**  库位编码  */
    locCode?: string;
    /**  CTN/NMB  */
    lotatt14?: string;
    /**  养护人  */
    maintainBy?: string;
    /**  养护日期  */
    maintainDate?: string;
    /**  养护单号  */
    maintainNo?: string;
    /**  养护结果  */
    maintainResult?: string;
    /**  养护措施(1:翻垛),(2:除湿),(3:加湿),(4:升温),(5:降温),(6:通风),(7:除尘),(8:外观);多个以“,”号分隔  */
    maintainStep?: string;
    /**  养护类型 1:一般养护 2:重点养护  */
    maintainType?: number;
    /**  养护类型 1:一般养护 2:重点养护  */
    maintainTypeName?: string;
    /**  厂家  */
    manufacturer?: string;
    /**  制造厂商名称  */
    manufacturerName?: string;
    /**  货主id  */
    ownerUserId?: string;
    /**  包装状况 (1:完整),(2:破损),(3:压损),(4:其他)；多个以“,”号分隔  */
    packageState?: string;
    /**  上市许可证持有人  */
    permitHolder?: string;
    /**  计划生成日期  */
    planCreatedDate?: string;
    /**  采购单号  */
    poCode?: string;
    /**  生产批号  */
    produceCode?: string;
    /**  生产日期  */
    produceDate?: string;
    /**  产地  */
    producingArea?: string;
    /**  进价  */
    purchasePrice?: number;
    /**  库存数量  */
    qty?: number;
    /**  批准文号  */
    regisTrationNumber?: string;
    /**  商品编码  */
    skuId?: string;
    /**  规格  */
    skuModel?: string;
    /**  商品名称  */
    skuName?: string;
    /**  仓储编码  */
    storeCode?: string;
    /**  仓库名称  */
    storeName?: string;
    /**  供应商编码  */
    supplierCode?: string;
    /**  租户编码  */
    tenantCode?: string;
    /**  租户ID  */
    tenantId?: string;
    /**  单位  */
    unit?: string;
    /**  通用名称  */
    wareGeneralName?: string;
  };

  type WpfErpRecheckPageQueryVO = {
    /**  发货单位  */
    cusInfo?: string;
    /** 客户编码 */
    customerCode?: string;
    /** 明细id */
    detailId?: string;
    /** 单据日期结束 */
    docDateEnd?: string;
    /** 单据日期开始 */
    docDateSta?: string;
    /**  剂型  */
    dosageForm?: string;
    /**  经营范围  */
    gspCategory?: string;
    /** 单据编码 */
    id?: string;
    /**  商品名称/拼音/编码  */
    keyword?: string;
    /** 销售单号/erp订单编码/收货通知单号 */
    orderCode?: string;
    /**  采购订单号  */
    orderId?: string;
    /**  单据类型 1:采购; 3:销售退货; 5:调拨入库;  */
    orderType?: string;
    pageQuery?: PageQuery;
    /** 采购单号 */
    poNo?: string;
    /** 结束验收时间 */
    recheckDateEnd?: string;
    /** 开始验收时间 */
    recheckDateSta?: string;
    /** 验收单号(入库-采购验收记录 单据编号) */
    recheckNo?: string;
    /**  批准文号  */
    regisTrationNumber?: string;
    /**  仓库名称  */
    storeCode?: string;
    /** 供应商名称/供货单位 */
    supplierName?: string;
    /**  通用名称  */
    wareGeneralName?: string;
    /**  入库日期结束时间  */
    warehouseTimeEnd?: string;
    /**  入库日期开始时间  */
    warehouseTimeStart?: string;
  };

  type WpfErpRecheckVO = {
    /**  金额  */
    amount?: number;
    /**  不合格事项以及处理措施  */
    bhgDealResult?: string;
    /**  验收合格数量 */
    checkQty?: number;
    /**  创建时间  */
    createTime?: string;
    /**  验收单创建时间  */
    docDate?: string;
    /**  剂型名称  */
    dosageFormName?: string;
    /**  有效期至  */
    expiredTime?: string;
    /**  类别(GSP分类)  */
    gspCategory?: string;
    /**  类别名称(GSP分类)  */
    gspCategoryName?: string;
    /**  主键id */
    id?: string;
    /**  库存类型(1：正品 101：残次 201：待处理)   */
    inventoryType?: number;
    /**  商品编码  */
    itemId?: string;
    /**  生产批号  */
    lotNo?: string;
    /** 生产厂家 */
    manufacturer?: string;
    /**  制造商名称  */
    manufacturerName?: string;
    /**  erp订单号/通知单号  */
    orderCode?: string;
    /**  单据类型 1:采购; 3:销售退货; 5:调拨入库;  */
    orderType?: string;
    /**  货主id  */
    ownerUserId?: string;
    /**  上市许可证持有人  */
    permitHolder?: string;
    /**  采购单号  */
    poNo?: string;
    /**  产地  */
    producingArea?: string;
    /**  生产日期  */
    productionTime?: string;
    /**  采购价格  */
    purchasePrice?: number;
    /**  收货时间  */
    receiveDate?: string;
    /** 收货数量  */
    receiveQty?: number;
    /**  第一验收人  */
    recheckBy?: string;
    /**  第二验收人  */
    recheckBy2?: string;
    /**  验收时间  */
    recheckDate?: string;
    /**  验收单号/单据编号  */
    recheckNo?: string;
    /**  抽验数量  */
    recheckQty?: number;
    /**  入库验收主键id  */
    recheckRequestId?: string;
    /** 验收结论：0不合格 1合格 2部分合格  */
    recheckResult?: number;
    /**  验收结论/验收结果  */
    recheckResultName?: string;
    /**  批准文号  */
    regisTrationNumber?: string;
    /**  挂账单号  */
    reserveOrderCode?: string;
    /** 商品编码 */
    skuId?: string;
    /** 规格 */
    skuModel?: string;
    /** 商品名称 */
    skuName?: string;
    /**  仓库编号  */
    storeCode?: string;
    /**  仓库名称  */
    storeName?: string;
    /**  供应商编码  */
    supplierCode?: string;
    /**  供货单位  */
    supplierName?: string;
    /**  验收不合格数量  */
    tempDmQty?: number;
    /**  租户编码  */
    tenantCode?: string;
    /**  单位  */
    unit?: string;
    /**  修改时间  */
    updateTime?: string;
    /**  通用名  */
    wareGeneralName?: string;
    /**  入库日期  */
    warehouseTime?: string;
  };

  type WpfErpReturnPageQueryVO = {
    /**  发货单位  */
    cusInfo?: string;
    /**  剂型  */
    dosageForm?: string;
    /**  经营范围  */
    gspCategory?: string;
    /**  商品名称/拼音/编码  */
    keyword?: string;
    /**  通知单号  */
    orderCode?: string;
    pageQuery?: PageQuery;
    /**  收货日期  */
    receiveDateEnd?: string;
    /**  收货日期  */
    receiveDateStart?: string;
    /**  验收单号  */
    recheckNo?: string;
    /**  批准文号  */
    regisTrationNumber?: string;
    /**  仓库名称  */
    storeCode?: string;
    /**  通用名称  */
    wareGeneralName?: string;
    /**  入库日期结束时间  */
    warehouseTimeEnd?: string;
    /**  入库日期开始时间  */
    warehouseTimeStart?: string;
  };

  type WpfErpReturnVO = {
    /**  不合格事项以及处理措施  */
    bhgDealResult?: string;
    /** 验收合格数量 */
    checkQty?: number;
    /**  发货单位  */
    cusName?: string;
    /**  剂型名称  */
    dosageFormName?: string;
    /** 有效期至 */
    expiredTime?: string;
    /**  类别(GSP分类)  */
    gspCategory?: string;
    /**  类别名称(GSP分类)  */
    gspCategoryName?: string;
    /** 主键 */
    id?: string;
    /** 批号 */
    lotNo?: string;
    /** 生产厂家 */
    manufacturer?: string;
    /** 通知单号 */
    orderCode?: string;
    /**  上市许可证持有人  */
    permitHolder?: string;
    /**  产地  */
    producingArea?: string;
    /** 生产日期 */
    productionTime?: string;
    /**  收货时间  */
    receiveDate?: string;
    /** 到货数量 */
    receiveQty?: number;
    /**  第一验收人 （验收人员） */
    recheckBy?: string;
    /**  第二验收人  */
    recheckBy2?: string;
    /**  验收时间  */
    recheckDate?: string;
    /** 验收单号 */
    recheckNo?: string;
    /** 验收结果 */
    recheckResultName?: string;
    /**  批准文号  */
    regisTrationNumber?: string;
    /** 商品编码 */
    skuId?: string;
    /** 规格 */
    skuModel?: string;
    /** 商品名称 */
    skuName?: string;
    /** 仓库名称 */
    storeName?: string;
    /**  供货单位  */
    supplierName?: string;
    /** 验收不合格数量 */
    tempDmQty?: number;
    /**  单位  */
    unit?: string;
    /**  通用名  */
    wareGeneralName?: string;
    /** 到货日期 */
    warehouseTime?: string;
  };

  type WpfInventoryOrderDetailVO = {
    /**  账存数量  */
    accountQty?: number;
    /**  剂型名称  */
    dosageFormName?: string;
    /**  有效期至  */
    dueDate?: string;
    /**  类别(GSP分类)  */
    gspCategory?: string;
    /**  类别名称(GSP分类)  */
    gspCategoryName?: string;
    id?: string;
    /**  实盘数  */
    inventoryQty?: number;
    /** 生产厂家 */
    manufacturer?: string;
    /**  上市许可证持有人  */
    permitHolder?: string;
    /**  批号  */
    produceCode?: string;
    /**  生产日期  */
    produceDate?: string;
    /**  产地  */
    producingArea?: string;
    /**  盈亏数量  */
    profitlossQty?: number;
    /**  品质分类  */
    qualityCategoryName?: string;
    /**  批准文号  */
    regisTrationNumber?: string;
    /** 商品编码 */
    skuId?: string;
    /** 规格 */
    skuModel?: string;
    /** 商品名称 */
    skuName?: string;
    /**  单位  */
    unit?: string;
    /**  通用名  */
    wareGeneralName?: string;
  };

  type WpfInventoryOrderInfoVO = {
    /**  盘点人  */
    inventoryStaff?: string;
    /**  盘点类型名称  */
    inventoryTypeName?: string;
    /**  单据编号  */
    orderCode?: string;
    /**  仓库名称  */
    storeName?: string;
    /**  盘点时间  */
    taketimeto?: string;
    /**  商品详情  */
    wmsInventoryOrderDetailList?: WpfInventoryOrderDetailVO[];
  };

  type WpfInventoryOrderPageQueryVO = {
    /**  单据编号  */
    id?: string;
    /**  id列表  */
    ids?: number[];
    /**  盘点类型  */
    inventoryType?: string;
    /**  盘点单号  */
    orderCode?: string;
    pageQuery?: PageQuery;
    /**  商品ID  */
    skuId?: string;
    /**  仓库编码  */
    storeCode?: string;
    /**  盘点结束时间  */
    taketimetoEnd?: string;
    /**  盘点开始时间  */
    taketimetoStart?: string;
  };

  type WpfInventoryOrderVO = {
    /**  是否有差异 true-有差异 */
    difference?: boolean;
    /**  单据编号  */
    id?: string;
    /**  盘点人  */
    inventoryStaff?: string;
    /**  盘点类型名称  */
    inventoryTypeName?: string;
    /**  盘点单号  */
    orderCode?: string;
    /**  仓库名称  */
    storeName?: string;
    /**  盘点时间  */
    taketimeto?: string;
  };

  type WpfPORecheckItemVO = {
    /** 验收数量 */
    checkQty?: number;
    /** 有效期至 */
    expiredTime?: string;
    /** 主键id */
    id?: string;
    /**  库存类型(1：正品 101：残次 201：待处理) */
    inventoryType?: number;
    /** 商品编码 */
    itemId?: string;
    /** 生产批号 */
    lotNo?: string;
    /**  CTN/NMB  */
    lotatt14?: string;
    /**  厂家  */
    manufacturer?: string;
    /** 制造商名称 */
    manufacturerName?: string;
    /** 采购单号 */
    poNo?: string;
    /** 生产日期 */
    productionTime?: string;
    /** 采购价格(单价) */
    purchasePrice?: number;
    /** 收货数量 */
    receiveQty?: number;
    /** 验收单明细id */
    recheckDetailRequestId?: string;
    /** 抽验数量 */
    recheckQty?: number;
    /** 验收记录主表主键id */
    recheckRequestId?: string;
    /** 验收结论： 0不合格 1合格 2部分合格 */
    recheckResult?: number;
    /** 验收结论： 0不合格 1合格 2部分合格 */
    recheckResultName?: string;
    /**  商品编码  */
    skuId?: string;
    /**  规格  */
    skuModel?: string;
    /**  商品名称  */
    skuName?: string;
    /** 供应商编码 */
    supplierCode?: string;
    /** 供应商名称 */
    supplierName?: string;
    /** 验收不合格数量 */
    tempDmQty?: number;
    /** 租户id */
    tenantId?: string;
    /**  入库日期  */
    warehouseTime?: string;
  };

  type WpfPORecheckVO = {
    /**  创建时间  */
    createTime?: string;
    /** 客户Id */
    cusId?: string;
    /** 客户名称 */
    cusName?: string;
    /**  单据日期/验收单创建时间  */
    docDate?: string;
    /** 客户集编码 */
    entrustCusCode?: string;
    /** 客户集名称 */
    entrustCusName?: string;
    /**  主键id(单据编码) */
    id?: string;
    /**  erp订单号/销售单号/收货通知单 */
    orderCode?: string;
    /**  单据类型 1:采购; 3:销售退货; 5:调拨入库;  */
    orderType?: string;
    /**  货主id  */
    ownerUserId?: string;
    /**  收货时间  */
    receiveDate?: string;
    /**  第一验收人  */
    recheckBy?: string;
    /**  第二验收人  */
    recheckBy2?: string;
    /**  验收时间  */
    recheckDate?: string;
    /**  验收单号 */
    recheckNo?: string;
    /**  入库验收主键id  */
    recheckRequestId?: string;
    /**  挂账单号  */
    reserveOrderCode?: string;
    /** 单据状态 0：未审核 1：已审核 2：取消 */
    status?: number;
    /**  仓库编号  */
    storeCode?: string;
    /**  仓库名称  */
    storeName?: string;
    /**  租户编码  */
    tenantCode?: string;
    /** 操作跟踪日志明细 */
    traceLogVOList?: TraceLogVO[];
    /**  修改时间  */
    updateTime?: string;
    /**  采购验收入库明细  */
    wpfPORecheckItemVOList?: WpfPORecheckItemVO[];
  };

  type WpfRecordFileDetailVO = {
    /**  剂型  */
    dosageForm?: string;
    /**  剂型名称 */
    dosageFormName?: string;
    /**  功能主治  */
    functions?: string;
    /**  类别(GSP分类)  */
    gspCategory?: string;
    /**  类别名称(GSP分类)  */
    gspCategoryName?: string;
    /**  商品编码  */
    itemId?: string;
    /**  厂家  */
    manufacturer?: string;
    /**  中包装  */
    mediumPackaging?: string;
    /**  有效期（单位:月）  */
    periodValidity?: number;
    /**  质量标准  */
    qualityStandard?: string;
    /**  批准文号  */
    regisTrationNumber?: string;
    /**  商品编码  */
    skuId?: string;
    /**  规格  */
    skuModel?: string;
    /**  商品名称  */
    skuName?: string;
    /**  储存条件  */
    storageConditions?: string;
    /**  仓储编码  */
    storeCode?: string;
    /**  租户编号  */
    tenantId?: string;
    /**  单位  */
    unit?: string;
  };

  type WpfRejectRecordDetailVO = {
    /**  剂型名称  */
    dosageFormName?: string;
    /**  有效期至  */
    expireTime?: string;
    /**  类别(GSP分类)  */
    gspCategory?: string;
    /**  类别名称(GSP分类)  */
    gspCategoryName?: string;
    /**  id  */
    id?: string;
    /**  商品编码  */
    itemId?: string;
    /** 生产厂家 */
    manufacturer?: string;
    /**  上市许可证持有人  */
    permitHolder?: string;
    /**  生产批号  */
    produceCode?: string;
    /**  产地  */
    producingArea?: string;
    /**  生产日期  */
    productionTime?: string;
    /**  数量  */
    qty?: number;
    /**  原因描述  */
    reasonRemark?: string;
    /**  批准文号  */
    regisTrationNumber?: string;
    /**  拒收人  */
    rejectBy?: string;
    /**  拒收原因  */
    rejectReason?: string;
    /**  拒收时间  */
    rejectTime?: string;
    /**  备注  */
    remark?: string;
    /**  处理结果  */
    result?: string;
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
    /**  单位  */
    unit?: string;
    /**  通用名  */
    wareGeneralName?: string;
  };

  type WpfRejectRecordInfoVO = {
    /**  商品信息列表  */
    dubheRejectRecordDetailList?: WpfRejectRecordDetailVO[];
    /**  id  */
    id?: string;
    /**  通知单号  */
    orderCode?: string;
    /**  单据日期  */
    orderTime?: string;
    /**  单据类型 1:采购; 3:销售退货; 5:调拨入库; */
    orderType?: string;
    /**  单据类型名称  */
    orderTypeName?: string;
    /**  仓库编码  */
    storeCode?: string;
    /**  仓库名称  */
    storeName?: string;
  };

  type WpfRejectRecordPageQueryVO = {
    /**  id列表  */
    ids?: number[];
    /**  通知单号  */
    orderCode?: string;
    /**  单据结束日期  */
    orderTimeEnd?: string;
    /**  单据开始日期  */
    orderTimeStart?: string;
    /**  单据类型  */
    orderType?: string;
    pageQuery?: PageQuery;
    /**  仓库编码  */
    storeCode?: string;
  };

  type WpfRejectRecordStockPageQueryVO = {
    /**  id列表  */
    ids?: string[];
    /**  通知单号  */
    orderCode?: string;
    /**  单据类型  */
    orderType?: string;
    pageQuery?: PageQuery;
    /**  批准文号  */
    regisTrationNumber?: string;
    /**  拒收结束日期  */
    rejectTimeEnd?: string;
    /**  拒收开始日期  */
    rejectTimeStart?: string;
    /**  商品信息  */
    skuInfo?: string;
    /**  仓库编码  */
    storeCode?: string;
    /**  通用名  */
    wareGeneralName?: string;
  };

  type WpfRejectRecordVO = {
    /**  id  */
    id?: string;
    /**  通知单号  */
    orderCode?: string;
    /**  单据日期  */
    orderTime?: string;
    /**  单据类型 1:采购; 3:销售退货; 5:调拨入库; */
    orderType?: string;
    /**  单据类型名称  */
    orderTypeName?: string;
    /**  仓库编码  */
    storeCode?: string;
    /**  仓库名称  */
    storeName?: string;
  };

  type WpfStockRejectRecordVO = {
    /**  有效期至  */
    expireTime?: string;
    /**  单据编码  */
    id?: string;
    /**  生产厂家  */
    manufacturer?: string;
    /**  通知单号  */
    orderCode?: string;
    /**  单据类型 1:采购; 3:销售退货; 5:调拨入库; */
    orderType?: string;
    /**  单据类型名称  */
    orderTypeName?: string;
    /**  批号  */
    produceCode?: string;
    /**  生产日期  */
    productionTime?: string;
    /**  数量  */
    qty?: number;
    /**  原因描述  */
    reasonRemark?: string;
    /**  批准文号  */
    regisTrationNumber?: string;
    /**  拒收人  */
    rejectBy?: string;
    /**  拒收原因  */
    rejectReason?: string;
    /**  拒收时间  */
    rejectTime?: string;
    /**  备注  */
    remark?: string;
    /**  处理结果  */
    result?: string;
    /**  商品编号  */
    skuId?: string;
    /**  规格  */
    skuModel?: string;
    /**  商品名称  */
    skuName?: string;
    /**  仓库编码  */
    storeCode?: string;
    /**  仓库名称  */
    storeName?: string;
    /**  供应商名称  */
    supplierName?: string;
    /**  通用名  */
    wareGeneralName?: string;
  };

  type WpfTraceCodeRewriteDetailVO = {
    /**  创建时间 */
    createTime?: string;
    /**  有效日期 */
    expiredDate?: string;
    /**  主键id  */
    id?: string;
    /**  商品编码 */
    itemId?: string;
    /**  厂家 */
    manufacturer?: string;
    /**  erp订单编码/单据编码  */
    orderCode?: string;
    /**  中台业务编码  */
    outBizCode?: string;
    /**  货主id  */
    ownerUserId?: string;
    /**  生产批号 */
    produceCode?: string;
    /**  生产日期 */
    productionDate?: string;
    /**  skuId */
    skuId?: string;
    /**  规格 */
    skuModel?: string;
    /**  商品名称 */
    skuName?: string;
    /**  名称拼音 */
    skuPinyin?: string;
    /**  仓储编码  */
    storeCode?: string;
    /**  租户编码  */
    tenantCode?: string;
    /**  租户id  */
    tenantId?: string;
    /**  药监码 */
    traceCode?: string;
    /**  类型: 1:入库单 2：出库单  */
    type?: number;
    /**  修改时间 */
    updateTime?: string;
  };

  type WpfTraceCodeRewritePageQueryVO = {
    /**  商品拼音/名称/编码  */
    keyword?: string;
    /**  erp订单编码/单据编号  */
    orderCode?: string;
    /**  中台业务编码  */
    outBizCode?: string;
    pageQuery?: PageQuery;
    /**  仓储编码  */
    storeCode?: string;
    /**  药监码，同一个商品的药监码用英文逗号拼接 */
    traceCode?: string;
    /**  类型: 1:入库单 2：出库单  */
    type?: number;
  };

  type WpfTransportRecordOutPageQueryVO = {
    /**  发货结束时间  */
    deliveryTimeEnd?: string;
    /**  发货开始时间  */
    deliveryTimeStart?: string;
    /**  id列表  */
    ids?: string[];
    /**  订单号  */
    orderCode?: string;
    pageQuery?: PageQuery;
  };

  type WpfTransportRecordOutVO = {
    /** 车牌号 */
    carNumber?: string;
    /** 收货地址 */
    collectAddress?: string;
    /** 收货单位 */
    collectCompany?: string;
    /** 发货地址 */
    deliveryAddress?: string;
    /** 发货单号 */
    deliveryCode?: string;
    /** 发货时间 */
    deliveryTime?: string;
    /** id */
    id?: string;
    /** 药品件数 */
    number?: number;
    /** 订单号 */
    orderCode?: string;
    /** 快递单号 */
    shipmentNo?: string;
    /** 运输单位 */
    transportCompany?: string;
    /** 运输工具 */
    transportTool?: string;
    /** 运输方式 */
    transportType?: string;
    /** 运输员 */
    transporter?: string;
  };

  type WpfTransportRecordPageQueryVO = {
    /**  到货日期结束时间  */
    createTimeEnd?: string;
    /**  到货日期开始时间  */
    createTimeStart?: string;
    /**  剂型  */
    dosageForm?: string;
    /**  商品名称/拼音/编码  */
    keyword?: string;
    pageQuery?: PageQuery;
    /**  仓库名称  */
    storeCode?: string;
  };

  type WpfTransportRecordVO = {
    /**  车牌号  */
    carNumber?: string;
    /**  创建时间  */
    createTime?: string;
    /**  剂型名称  */
    dosageFormName?: string;
    /**  有效日期  */
    expiredDate?: string;
    /**  类别(GSP分类)  */
    gspCategory?: string;
    /**  类别名称(GSP分类)  */
    gspCategoryName?: string;
    /**  交接人  */
    handover?: string;
    /** 主键 */
    id?: string;
    /** 生产厂家 */
    manufacturer?: string;
    /**  上市许可证持有人  */
    permitHolder?: string;
    /**  批号  */
    produceCode?: string;
    /**  产地  */
    producingArea?: string;
    /**  生产日期  */
    productionDate?: string;
    /**  批准文号  */
    regisTrationNumber?: string;
    /**  快递单号  */
    shipmentNo?: string;
    /** 商品编码 */
    skuId?: string;
    /** 规格 */
    skuModel?: string;
    /** 商品名称 */
    skuName?: string;
    /**  入库单号  */
    stockInId?: string;
    /**  仓库名称  */
    storeName?: string;
    /**  运输单位  */
    transportCompany?: string;
    /**  运输工具  */
    transportTool?: string;
    /**  运输方式  */
    transportType?: string;
    /**  运输员  */
    transporter?: string;
    /**  单位  */
    unit?: string;
    /**  通用名  */
    wareGeneralName?: string;
  };

  type ZdPurStockInDetailVO = {
    /** 商品条码 */
    barCode?: string;
    /** 批次 */
    batchNo?: string;
    /** 商品分类 */
    categoryText?: string;
    /** 创建时间 */
    createTime?: string;
    /** 明细类型 */
    detailType?: number;
    /** 有效日期 */
    expiredDate?: string;
    /** 厂家检号 */
    factoryInspection?: string;
    /** 明细表序号 */
    id?: string;
    /** 本次入库数量 */
    inQty?: number;
    /** 生产厂家 */
    manufacturer?: string;
    /** 未通知入库数量 */
    noNoticeQty?: number;
    /** 通知入库数量 */
    noticeQty?: number;
    /** 采购订单明细id */
    orderDetailId?: string;
    /** 单价 */
    price?: number;
    /** 批号 */
    produceCode?: string;
    /** 生产日期 */
    productionDate?: string;
    /** 采购直调入库单号 */
    purZdStockInId?: string;
    /** 订单商品采购数量 */
    purchaseQty?: number;
    /** 订单明细数量 */
    qty?: number;
    /** 实际入库数量 */
    reallyInQty?: number;
    /** 商品编码 */
    skuId?: string;
    /** 规格 */
    skuModel?: string;
    /** 商品名称 */
    skuName?: string;
    /** 商品名称拼音 */
    skuPinyin?: string;
    /** 入库总价 */
    subTotalAmt?: number;
    /** 商品税务类别 */
    taxClassificationCode?: string;
    /** 商品税率 */
    taxRate?: number;
    /** 单位 */
    unit?: string;
    /** 修改时间 */
    updateTime?: string;
  };

  type ZdPurStockInInfoVO = {
    /** 联系人 */
    contact?: string;
    /** 联系人手机号码 */
    contactPhone?: string;
    /** 合同编号 */
    contractCode?: string;
    /** 单据日期 */
    createTime?: string;
    /** 创建人 */
    creater?: string;
    /** 创建人id */
    createrId?: string;
    /** 明细信息 */
    detail?: ZdPurStockInDetailVO[];
    /** 客户集 */
    entrustCusCode?: string;
    /** 客户集名称 */
    entrustCusName?: string;
    /** 客户集类型 0 临时 1BC */
    entrustType?: number;
    /** 客户集类型 0 临时 1BC名称 */
    entrustTypeName?: string;
    /** 客户收货入库附件 */
    files?: string[];
    /** 直调入库单单号 */
    id?: string;
    /** 日志 */
    log?: TraceLogVO[];
    /** 最后操作人 */
    operator?: string;
    /** 采购单号 */
    orderId?: string;
    /** 订单类型 1 普通 2 闪电 */
    orderType?: number;
    /** 订单类型 1 普通 2 闪电名称 */
    orderTypeName?: string;
    /** 预计到货日期 */
    receiveDate?: string;
    /** 备注 */
    remark?: string;
    /** 审核时间 */
    reviewTime?: string;
    /** 结算方式 1--预付 2-账期 3-其他 */
    settleWay?: number;
    /** 结算方式 1--预付 2-账期 3-其他名称 */
    settleWayName?: string;
    /** 包裹单号 */
    shipmentNumber?: string;
    /** 状态 0-创建 1-提审 2-审核中 3-审核通过 4-取消 */
    status?: number;
    /** 状态 0-创建 1-提审 2-审核中 3-审核通过 4-取消名称 */
    statusName?: string;
    /** 收货通知单号 */
    stockNoticeId?: string;
    /** 仓库 */
    storeCode?: string;
    /** 仓库名称 */
    storeName?: string;
    /** 供应商编码 */
    supplierId?: string;
    /** 供应商名称 */
    supplierName?: string;
    /** 合计金额 */
    totalAmt?: number;
    /** 直调协议编号 */
    zdAgreementId?: string;
  };

  type ZdPurStockInPageQueryVO = {
    /** 合同编号 */
    contractCode?: string;
    /** 单据类型 1 委托 2 自采 */
    docType?: number;
    /** 客户集类型 0 临时 1BC */
    entrustType?: number;
    /** 入库单号 */
    id?: string;
    /** 入库单号 */
    ids?: string[];
    /** 创建时间 */
    maxCreateTime?: string;
    /** 审核时间 */
    maxReviewTime?: string;
    /** 创建时间 */
    minCreateTime?: string;
    /** 审核时间 */
    minReviewTime?: string;
    /** 采购单号 */
    orderId?: string;
    pageQuery?: PageQuery;
    /** 结算方式 1--预付 2-账期 3-其他 */
    settleWay?: number;
    /** 包裹单号 */
    shipmentNumber?: string;
    /** 商品id */
    skuId?: string;
    /**  状态 0-创建 1-提审 2-审核中 3-审核通过 4-取消  */
    status?: number;
    /** 收货通知单号 */
    stockNoticeId?: string;
    /** 仓库 */
    storeCode?: string;
    /** 仓库名称 */
    storeName?: string;
    /** 供应商编码 */
    supplierId?: string;
    /** 供应商名称 */
    supplierName?: string;
    /** 直调协议编号 */
    zdAgreementId?: string;
  };

  type ZdPurStockInVO = {
    /** 联系人 */
    contact?: string;
    /** 联系人手机号码 */
    contactPhone?: string;
    /** 合同编号 */
    contractCode?: string;
    /** 单据日期 */
    createTime?: string;
    /** 创建人 */
    creater?: string;
    /** 创建人id */
    createrId?: string;
    /** 单据类型 1-委托 2-自采 */
    docType?: number;
    /** 客户集 */
    entrustCusCode?: string;
    /** 客户集名称 */
    entrustCusName?: string;
    /** 客户集类型 0 临时 1BC */
    entrustType?: number;
    /** 客户收货入库附件 */
    files?: DocumentFileVO[];
    id?: string;
    /** 最后操作人 */
    operator?: string;
    /** 最后操作人id */
    operatorId?: string;
    /** 采购单号 */
    orderId?: string;
    /** 订单类型 1 普通 2 闪电 */
    orderType?: number;
    /** 预计到货日期 */
    receiveDate?: string;
    /** 备注 */
    remark?: string;
    /** 审核时间 */
    reviewTime?: string;
    /** 结算方式 1--预付 2-账期 3-其他 */
    settleWay?: number;
    /** 包裹单号 */
    shipmentNumber?: string;
    /** 状态 0-创建 1-提审 2-审核中 3-审核通过 4-取消 */
    status?: number;
    /** 收货通知单号 */
    stockNoticeId?: string;
    /** 仓库 */
    storeCode?: string;
    /** 仓库名称 */
    storeName?: string;
    /** 供应商编码 */
    supplierId?: string;
    /** 供应商名称 */
    supplierName?: string;
    /** 租户编码 */
    tenantId?: string;
    /** 合计金额 */
    totalAmt?: number;
    /** 最后更新时间 */
    updateTime?: string;
    /** 直调协议编号 */
    zdAgreementId?: string;
  };

  type ImportResultVOGspQualityControlManufacturerVO_ = {
    /**  数据列表  */
    dataList?: GspQualityControlManufacturerVO[];
    /**  失败数据url  */
    downloadUrl?: string;
    /**  导入说明  */
    importInstruction?: string;
    /**  导入数量  */
    importQty?: number;
    /**  是否成功  */
    success?: boolean;
    /**  成功数量  */
    successQty?: number;
  };

  type ImportResultVOGspQualityControlSupplierVO_ = {
    /**  数据列表  */
    dataList?: GspQualityControlSupplierVO[];
    /**  失败数据url  */
    downloadUrl?: string;
    /**  导入说明  */
    importInstruction?: string;
    /**  导入数量  */
    importQty?: number;
    /**  是否成功  */
    success?: boolean;
    /**  成功数量  */
    successQty?: number;
  };

  type ImportResultVOGspQualityControlWareVO_ = {
    /**  数据列表  */
    dataList?: GspQualityControlWareVO[];
    /**  失败数据url  */
    downloadUrl?: string;
    /**  导入说明  */
    importInstruction?: string;
    /**  导入数量  */
    importQty?: number;
    /**  是否成功  */
    success?: boolean;
    /**  成功数量  */
    successQty?: number;
  };

  type PaginationBatchCustomerChangeVO_ = {
    current?: number;
    records?: BatchCustomerChangeVO[];
    size?: number;
    total?: number;
  };

  type PaginationBhgOrderDetailItemVO_ = {
    current?: number;
    records?: BhgOrderDetailItemVO[];
    size?: number;
    total?: number;
  };

  type PaginationBhgOrderStockVO_ = {
    current?: number;
    records?: BhgOrderStockVO[];
    size?: number;
    total?: number;
  };

  type PaginationBhgOrderVO_ = {
    current?: number;
    records?: BhgOrderVO[];
    size?: number;
    total?: number;
  };

  type PaginationBizReportBreakageVO_ = {
    current?: number;
    records?: BizReportBreakageVO[];
    size?: number;
    total?: number;
  };

  type PaginationBizReportOverflowVO_ = {
    current?: number;
    records?: BizReportOverflowVO[];
    size?: number;
    total?: number;
  };

  type PaginationBizStockInResultDetailInfoVO_ = {
    current?: number;
    records?: BizStockInResultDetailInfoVO[];
    size?: number;
    total?: number;
  };

  type PaginationBizStockInResultListVO_ = {
    current?: number;
    records?: BizStockInResultListVO[];
    size?: number;
    total?: number;
  };

  type PaginationBizStockInResultProduceListVO_ = {
    current?: number;
    records?: BizStockInResultProduceListVO[];
    size?: number;
    total?: number;
  };

  type PaginationBizStockInResultProduceTaxChangeVO_ = {
    current?: number;
    records?: BizStockInResultProduceTaxChangeVO[];
    size?: number;
    total?: number;
  };

  type PaginationBizStockInResultProduceVO_ = {
    current?: number;
    records?: BizStockInResultProduceVO[];
    size?: number;
    total?: number;
  };

  type PaginationBizStockOutItemResultVO_ = {
    current?: number;
    records?: BizStockOutItemResultVO[];
    size?: number;
    total?: number;
  };

  type PaginationBizStockOutPurResultVO_ = {
    current?: number;
    records?: BizStockOutPurResultVO[];
    size?: number;
    total?: number;
  };

  type PaginationBizStockOutRetailSaleResultVO_ = {
    current?: number;
    records?: BizStockOutRetailSaleResultVO[];
    size?: number;
    total?: number;
  };

  type PaginationBizStockOutSaleResultVO_ = {
    current?: number;
    records?: BizStockOutSaleResultVO[];
    size?: number;
    total?: number;
  };

  type PaginationChannelConfigInfoVO_ = {
    current?: number;
    records?: ChannelConfigInfoVO[];
    size?: number;
    total?: number;
  };

  type PaginationChannelCustomerInfoVO_ = {
    current?: number;
    records?: ChannelCustomerInfoVO[];
    size?: number;
    total?: number;
  };

  type PaginationCityReportFailVO_ = {
    current?: number;
    records?: CityReportFailVO[];
    size?: number;
    total?: number;
  };

  type PaginationCityReportFirstStockVO_ = {
    current?: number;
    records?: CityReportFirstStockVO[];
    size?: number;
    total?: number;
  };

  type PaginationCityReportInstrumentSaleVO_ = {
    current?: number;
    records?: CityReportInstrumentSaleVO[];
    size?: number;
    total?: number;
  };

  type PaginationCityReportRecheckVO_ = {
    current?: number;
    records?: CityReportRecheckVO[];
    size?: number;
    total?: number;
  };

  type PaginationCityReportSaleVO_ = {
    current?: number;
    records?: CityReportSaleVO[];
    size?: number;
    total?: number;
  };

  type PaginationCityReportStockVO_ = {
    current?: number;
    records?: CityReportStockVO[];
    size?: number;
    total?: number;
  };

  type PaginationClientComplainRegisterVO_ = {
    current?: number;
    records?: ClientComplainRegisterVO[];
    size?: number;
    total?: number;
  };

  type PaginationDeliveryOutVO_ = {
    current?: number;
    records?: DeliveryOutVO[];
    size?: number;
    total?: number;
  };

  type PaginationDeliveryStockInVO_ = {
    current?: number;
    records?: DeliveryStockInVO[];
    size?: number;
    total?: number;
  };

  type PaginationDrugCityReportRecheckVO_ = {
    current?: number;
    records?: DrugCityReportRecheckVO[];
    size?: number;
    total?: number;
  };

  type PaginationDrugCityReportStockVO_ = {
    current?: number;
    records?: DrugCityReportStockVO[];
    size?: number;
    total?: number;
  };

  type PaginationErpStockChangeOrderVO_ = {
    current?: number;
    records?: ErpStockChangeOrderVO[];
    size?: number;
    total?: number;
  };

  type PaginationGatherPassFeedbackVO_ = {
    current?: number;
    records?: GatherPassFeedbackVO[];
    size?: number;
    total?: number;
  };

  type PaginationGspBhgOrderVO_ = {
    current?: number;
    records?: GspBhgOrderVO[];
    size?: number;
    total?: number;
  };

  type PaginationGspBizReportBreakageDetailItemVO_ = {
    current?: number;
    records?: GspBizReportBreakageDetailItemVO[];
    size?: number;
    total?: number;
  };

  type PaginationGspBizReportOverflowDetailItemVO_ = {
    current?: number;
    records?: GspBizReportOverflowDetailItemVO[];
    size?: number;
    total?: number;
  };

  type PaginationGspDeliveryReturnStockInRecordVO_ = {
    current?: number;
    records?: GspDeliveryReturnStockInRecordVO[];
    size?: number;
    total?: number;
  };

  type PaginationGspDeliveryStockOutRecordVO_ = {
    current?: number;
    records?: GspDeliveryStockOutRecordVO[];
    size?: number;
    total?: number;
  };

  type PaginationGspDrugChecklistVO_ = {
    current?: number;
    records?: GspDrugChecklistVO[];
    size?: number;
    total?: number;
  };

  type PaginationGspInPurReceiptVO_ = {
    current?: number;
    records?: GspInPurReceiptVO[];
    size?: number;
    total?: number;
  };

  type PaginationGspInPurStockInVO_ = {
    current?: number;
    records?: GspInPurStockInVO[];
    size?: number;
    total?: number;
  };

  type PaginationGspOutPurReturnVO_ = {
    current?: number;
    records?: GspOutPurReturnVO[];
    size?: number;
    total?: number;
  };

  type PaginationGspOutPurStockOutReviewVO_ = {
    current?: number;
    records?: GspOutPurStockOutReviewVO[];
    size?: number;
    total?: number;
  };

  type PaginationGspPurStockOutItemVO_ = {
    current?: number;
    records?: GspPurStockOutItemVO[];
    size?: number;
    total?: number;
  };

  type PaginationGspPurStockOutRecordVO_ = {
    current?: number;
    records?: GspPurStockOutRecordVO[];
    size?: number;
    total?: number;
  };

  type PaginationGspPurStockOutVO_ = {
    current?: number;
    records?: GspPurStockOutVO[];
    size?: number;
    total?: number;
  };

  type PaginationGspQualityControlVO_ = {
    current?: number;
    records?: GspQualityControlVO[];
    size?: number;
    total?: number;
  };

  type PaginationGspReportRetailSaleOutRecordVO_ = {
    current?: number;
    records?: GspReportRetailSaleOutRecordVO[];
    size?: number;
    total?: number;
  };

  type PaginationGspReportRetailSaleOutVO_ = {
    current?: number;
    records?: GspReportRetailSaleOutVO[];
    size?: number;
    total?: number;
  };

  type PaginationGspSaleOutRecheckRecordVO_ = {
    current?: number;
    records?: GspSaleOutRecheckRecordVO[];
    size?: number;
    total?: number;
  };

  type PaginationGspSaleRecheckItemRecordVO_ = {
    current?: number;
    records?: GspSaleRecheckItemRecordVO[];
    size?: number;
    total?: number;
  };

  type PaginationGspSaleStockInRecordVO_ = {
    current?: number;
    records?: GspSaleStockInRecordVO[];
    size?: number;
    total?: number;
  };

  type PaginationGspSaleStockOutRecordVO_ = {
    current?: number;
    records?: GspSaleStockOutRecordVO[];
    size?: number;
    total?: number;
  };

  type PaginationGspSpecialDrugSaleLimitVO_ = {
    current?: number;
    records?: GspSpecialDrugSaleLimitVO[];
    size?: number;
    total?: number;
  };

  type PaginationGspStaffVO_ = {
    current?: number;
    records?: GspStaffVO[];
    size?: number;
    total?: number;
  };

  type PaginationGspStockProduceNearlyEffectiveVO_ = {
    current?: number;
    records?: GspStockProduceNearlyEffectiveVO[];
    size?: number;
    total?: number;
  };

  type PaginationGspStockProduceVO_ = {
    current?: number;
    records?: GspStockProduceVO[];
    size?: number;
    total?: number;
  };

  type PaginationGspUnqualifiedDetailItemVO_ = {
    current?: number;
    records?: GspUnqualifiedDetailItemVO[];
    size?: number;
    total?: number;
  };

  type PaginationGspWareFirstStockOutRecordVO_ = {
    current?: number;
    records?: GspWareFirstStockOutRecordVO[];
    size?: number;
    total?: number;
  };

  type PaginationInvoiceMonthStatisticsViewVO_ = {
    current?: number;
    records?: InvoiceMonthStatisticsViewVO[];
    size?: number;
    total?: number;
  };

  type PaginationInvoiceStatisticsViewVO_ = {
    current?: number;
    records?: InvoiceStatisticsViewVO[];
    size?: number;
    total?: number;
  };

  type PaginationLogisticsRecordVO_ = {
    current?: number;
    records?: LogisticsRecordVO[];
    size?: number;
    total?: number;
  };

  type PaginationOmsReportSaleReturnInItemVO_ = {
    current?: number;
    records?: OmsReportSaleReturnInItemVO[];
    size?: number;
    total?: number;
  };

  type PaginationPackageInfoVO_ = {
    current?: number;
    records?: PackageInfoVO[];
    size?: number;
    total?: number;
  };

  type PaginationPurStockInNoticeListVO_ = {
    current?: number;
    records?: PurStockInNoticeListVO[];
    size?: number;
    total?: number;
  };

  type PaginationPurStockInOnWayExportVO_ = {
    current?: number;
    records?: PurStockInOnWayExportVO[];
    size?: number;
    total?: number;
  };

  type PaginationPurStockInOnWayVO_ = {
    current?: number;
    records?: PurStockInOnWayVO[];
    size?: number;
    total?: number;
  };

  type PaginationPurStockInVO_ = {
    current?: number;
    records?: PurStockInVO[];
    size?: number;
    total?: number;
  };

  type PaginationPurStockOutVO_ = {
    current?: number;
    records?: PurStockOutVO[];
    size?: number;
    total?: number;
  };

  type PaginationReportDamageOutDetailVO_ = {
    current?: number;
    records?: ReportDamageOutDetailVO[];
    size?: number;
    total?: number;
  };

  type PaginationReportDamageOutVO_ = {
    current?: number;
    records?: ReportDamageOutVO[];
    size?: number;
    total?: number;
  };

  type PaginationReportPurInItemVO_ = {
    current?: number;
    records?: ReportPurInItemVO[];
    size?: number;
    total?: number;
  };

  type PaginationReportPurInVO_ = {
    current?: number;
    records?: ReportPurInVO[];
    size?: number;
    total?: number;
  };

  type PaginationReportSaleOutVO_ = {
    current?: number;
    records?: ReportSaleOutVO[];
    size?: number;
    total?: number;
  };

  type PaginationReportSaleReturnInItemVO_ = {
    current?: number;
    records?: ReportSaleReturnInItemVO[];
    size?: number;
    total?: number;
  };

  type PaginationReportSaleReturnInVO_ = {
    current?: number;
    records?: ReportSaleReturnInVO[];
    size?: number;
    total?: number;
  };

  type PaginationReportSaleWareOutItemVO_ = {
    current?: number;
    records?: ReportSaleWareOutItemVO[];
    size?: number;
    total?: number;
  };

  type PaginationRestockStatisticsVO_ = {
    current?: number;
    records?: RestockStatisticsVO[];
    size?: number;
    total?: number;
  };

  type PaginationRetailSaleStockInDetailVO_ = {
    current?: number;
    records?: RetailSaleStockInDetailVO[];
    size?: number;
    total?: number;
  };

  type PaginationReviewOrderVO_ = {
    current?: number;
    records?: ReviewOrderVO[];
    size?: number;
    total?: number;
  };

  type PaginationSaleOutDetailItemVO_ = {
    current?: number;
    records?: SaleOutDetailItemVO[];
    size?: number;
    total?: number;
  };

  type PaginationSaleOutVO_ = {
    current?: number;
    records?: SaleOutVO[];
    size?: number;
    total?: number;
  };

  type PaginationSaleQuickStockOutVO_ = {
    current?: number;
    records?: SaleQuickStockOutVO[];
    size?: number;
    total?: number;
  };

  type PaginationSaleRecallRegisterVO_ = {
    current?: number;
    records?: SaleRecallRegisterVO[];
    size?: number;
    total?: number;
  };

  type PaginationSaleStockInDetailItemVO_ = {
    current?: number;
    records?: SaleStockInDetailItemVO[];
    size?: number;
    total?: number;
  };

  type PaginationSaleStockInVO_ = {
    current?: number;
    records?: SaleStockInVO[];
    size?: number;
    total?: number;
  };

  type PaginationSaleStockResultVO_ = {
    current?: number;
    records?: SaleStockResultVO[];
    size?: number;
    total?: number;
  };

  type PaginationStaffAuditRegisterVO_ = {
    current?: number;
    records?: StaffAuditRegisterVO[];
    size?: number;
    total?: number;
  };

  type PaginationStockBatchAllocationOccupiedVO_ = {
    current?: number;
    records?: StockBatchAllocationOccupiedVO[];
    size?: number;
    total?: number;
  };

  type PaginationStockBatchAllocationVO_ = {
    current?: number;
    records?: StockBatchAllocationVO[];
    size?: number;
    total?: number;
  };

  type PaginationStockInboundEachSettleLogChangeVO_ = {
    current?: number;
    records?: StockInboundEachSettleLogChangeVO[];
    size?: number;
    total?: number;
  };

  type PaginationStockInboundEachSettleLogVO_ = {
    current?: number;
    records?: StockInboundEachSettleLogVO[];
    size?: number;
    total?: number;
  };

  type PaginationStockInboundEachSettleTaxChangeVO_ = {
    current?: number;
    records?: StockInboundEachSettleTaxChangeVO[];
    size?: number;
    total?: number;
  };

  type PaginationStockInboundLogVO_ = {
    current?: number;
    records?: StockInboundLogVO[];
    size?: number;
    total?: number;
  };

  type PaginationStockInboundStorageDayVO_ = {
    current?: number;
    records?: StockInboundStorageDayVO[];
    size?: number;
    total?: number;
  };

  type PaginationStockInboundVO_ = {
    current?: number;
    records?: StockInboundVO[];
    size?: number;
    total?: number;
  };

  type PaginationStockMonthlySettleBatchDetailVO_ = {
    current?: number;
    records?: StockMonthlySettleBatchDetailVO[];
    size?: number;
    total?: number;
  };

  type PaginationStockMonthlySettleDetailVO_ = {
    current?: number;
    records?: StockMonthlySettleDetailVO[];
    size?: number;
    total?: number;
  };

  type PaginationStockMonthlySettleStatsDetailVO_ = {
    current?: number;
    records?: StockMonthlySettleStatsDetailVO[];
    size?: number;
    total?: number;
  };

  type PaginationStockMonthlySettleVO_ = {
    current?: number;
    records?: StockMonthlySettleVO[];
    size?: number;
    total?: number;
  };

  type PaginationStockOutInboundVO_ = {
    current?: number;
    records?: StockOutInboundVO[];
    size?: number;
    total?: number;
  };

  type PaginationStockProduceLogVO_ = {
    current?: number;
    records?: StockProduceLogVO[];
    size?: number;
    total?: number;
  };

  type PaginationStockProduceSnapshotVO_ = {
    current?: number;
    records?: StockProduceSnapshotVO[];
    size?: number;
    total?: number;
  };

  type PaginationStockProduceVO_ = {
    current?: number;
    records?: StockProduceVO[];
    size?: number;
    total?: number;
  };

  type PaginationStockSkuLogVO_ = {
    current?: number;
    records?: StockSkuLogVO[];
    size?: number;
    total?: number;
  };

  type PaginationStockSkuReportVO_ = {
    current?: number;
    records?: StockSkuReportVO[];
    size?: number;
    total?: number;
  };

  type PaginationStockSkuVO_ = {
    current?: number;
    records?: StockSkuVO[];
    size?: number;
    total?: number;
  };

  type PaginationTraceLogVO_ = {
    current?: number;
    records?: TraceLogVO[];
    size?: number;
    total?: number;
  };

  type PaginationTransferDifferenceVO_ = {
    current?: number;
    records?: TransferDifferenceVO[];
    size?: number;
    total?: number;
  };

  type PaginationTransferStockInResultVO_ = {
    current?: number;
    records?: TransferStockInResultVO[];
    size?: number;
    total?: number;
  };

  type PaginationTransferStockOutResultVO_ = {
    current?: number;
    records?: TransferStockOutResultVO[];
    size?: number;
    total?: number;
  };

  type PaginationTransferStockVO_ = {
    current?: number;
    records?: TransferStockVO[];
    size?: number;
    total?: number;
  };

  type PaginationUnPayDetailViewVO_ = {
    current?: number;
    records?: UnPayDetailViewVO[];
    size?: number;
    total?: number;
  };

  type PaginationUnPayMonthViewVO_ = {
    current?: number;
    records?: UnPayMonthViewVO[];
    size?: number;
    total?: number;
  };

  type PaginationUnPayViewVO_ = {
    current?: number;
    records?: UnPayViewVO[];
    size?: number;
    total?: number;
  };

  type PaginationWareFirstInRecordViewVO_ = {
    current?: number;
    records?: WareFirstInRecordViewVO[];
    size?: number;
    total?: number;
  };

  type PaginationWareSkuProduceVO_ = {
    current?: number;
    records?: WareSkuProduceVO[];
    size?: number;
    total?: number;
  };

  type PaginationWpfAsnTransportRecordVO_ = {
    current?: number;
    records?: WpfAsnTransportRecordVO[];
    size?: number;
    total?: number;
  };

  type PaginationWpfDoTransportRecordVO_ = {
    current?: number;
    records?: WpfDoTransportRecordVO[];
    size?: number;
    total?: number;
  };

  type PaginationWpfErpMaintainDetailVO_ = {
    current?: number;
    records?: WpfErpMaintainDetailVO[];
    size?: number;
    total?: number;
  };

  type PaginationWpfErpRecheckVO_ = {
    current?: number;
    records?: WpfErpRecheckVO[];
    size?: number;
    total?: number;
  };

  type PaginationWpfErpReturnVO_ = {
    current?: number;
    records?: WpfErpReturnVO[];
    size?: number;
    total?: number;
  };

  type PaginationWpfInventoryOrderVO_ = {
    current?: number;
    records?: WpfInventoryOrderVO[];
    size?: number;
    total?: number;
  };

  type PaginationWpfPORecheckVO_ = {
    current?: number;
    records?: WpfPORecheckVO[];
    size?: number;
    total?: number;
  };

  type PaginationWpfRecordFileDetailVO_ = {
    current?: number;
    records?: WpfRecordFileDetailVO[];
    size?: number;
    total?: number;
  };

  type PaginationWpfRejectRecordVO_ = {
    current?: number;
    records?: WpfRejectRecordVO[];
    size?: number;
    total?: number;
  };

  type PaginationWpfStockRejectRecordVO_ = {
    current?: number;
    records?: WpfStockRejectRecordVO[];
    size?: number;
    total?: number;
  };

  type PaginationWpfTraceCodeRewriteDetailVO_ = {
    current?: number;
    records?: WpfTraceCodeRewriteDetailVO[];
    size?: number;
    total?: number;
  };

  type PaginationWpfTransportRecordOutVO_ = {
    current?: number;
    records?: WpfTransportRecordOutVO[];
    size?: number;
    total?: number;
  };

  type PaginationWpfTransportRecordVO_ = {
    current?: number;
    records?: WpfTransportRecordVO[];
    size?: number;
    total?: number;
  };

  type PaginationZdPurStockInVO_ = {
    current?: number;
    records?: ZdPurStockInVO[];
    size?: number;
    total?: number;
  };
}
