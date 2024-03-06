// @ts-ignore
/* eslint-disable */

declare namespace POP {
  type AccountVO = {
    /** 开户行 */
    accountBank?: string;
    /** 账户名称 */
    accountName?: string;
    /** 账户号码 */
    accountNo?: string;
    /** 账户id */
    id?: string;
    /** 是否设置默认账户。 0否 1是 */
    isDefault?: number;
    /** 说明 */
    remark?: string;
  };

  type AddAddressVO = {
    /** 详细地址 */
    address?: string;
    /** 地址类型数组，接受多个参数。1：发货地址:，2：退货寄回地址，3：办公地址 */
    addressTypes?: number[];
    /** 所属区id */
    areaId?: string;
    /** 所属区名称 */
    areaName?: string;
    /** 所属城市id */
    cityId?: string;
    /** 所属城市名称 */
    cityName?: string;
    /** 联系人 */
    contactPerson?: string;
    /** 是否设置默认地址数组。true：默认，false：非默认 */
    isDefaults?: boolean[];
    /** 联系方式 */
    mobile?: string;
    /** 所属省份id */
    provinceId?: string;
    /** 所属省份名称 */
    provinceName?: string;
  };

  type BackLogVO = {
    /** 接收时间 */
    createTime?: string;
    /** 实例id */
    id?: string;
    /** 发起时间 */
    initiationTime?: string;
    /** 实例标题 */
    instanceTitle?: string;
  };

  type BindRoleVO = {
    /** 角色编号 */
    roleId?: string;
    /** 用户编号集合 */
    userIds?: string[];
  };

  type CommonResult = {
    data?: Record<string, any>;
    errorCode?: string;
    errorMessage?: string;
    requestId?: string;
    success?: boolean;
  };

  type DictItemVO = {
    text?: string;
    value?: string;
  };

  type FlowInstanceProcessParamVO = {
    /** 单据id */
    billId?: string;
    /** 单据类型 */
    billType?: string;
    /** 流程id */
    flowId?: string;
    /** 流程实例id */
    instanceId?: string;
  };

  type FlowInstanceProcessVO = {
    /** 处理时间 */
    handleTime?: string;
    /** 操作理由 */
    operateReason?: string;
    /** 操作类型:1-提交 2-通过 3-驳回 4-拒绝 */
    operateType?: number;
    /** 操作人 */
    operator?: string;
    /** 操作人id */
    operatorId?: string;
  };

  type FlowPageQueryVO = {
    /** 单据编号 */
    billId?: string;
    /** 单据类型 */
    billType?: string;
    /** 打回人 */
    callBackPerson?: string;
    /** 提交人 */
    creater?: string;
    /** 结束时间 */
    endTime?: string;
    /** 流程编号 */
    flowId?: string;
    /** 摘要 */
    instanceAbstract?: string;
    /** 是否被打回 0:否 1-是 */
    isCallBack?: number;
    operatorId?: string;
    pageQuery?: PageQuery;
    /** 开始时间 */
    startTime?: string;
    /** 上级审核状态: 2-审核通过 3-审核不通过 */
    status?: number;
  };

  type FlowPlanVO = {
    /** 流程名称 */
    flowName?: string;
    /** 流程编号 */
    id?: string;
  };

  type GetSmsCodeParam = {
    /** 图形验证码 */
    imageCode?: string;
    /** 发送手机号码 */
    mobile?: string;
    /** 图形验证码uuid，获取图形验证码接口有返回 */
    uuid?: string;
  };

  type ImageCodeVO = {
    /** 验证码图片Base64格式 */
    imageBase64?: string;
    /** 图形验证码uuid */
    uuid?: string;
  };

  type ImportExportTaskPageQueryVO = {
    /** 创建人名称 */
    creater?: string;
    /** 创建人编码 */
    createrId?: string;
    /** 任务编号 */
    id?: string;
    /** 最大创建时间 */
    maxCreateTime?: string;
    /** 最小创建时间 */
    minCreateTime?: string;
    pageQuery?: PageQuery;
    /** 业务单据编码 */
    sourceBizId?: string;
    /** 任务状态 0-初始化 1-运行中 2-运行完成 3-运行失败 */
    status?: number;
    /** 任务来源类型编码 */
    taskCode?: string;
    /** 任务来源名称 */
    taskName?: string;
  };

  type ImportExportTaskVO = {
    /** 创建时间 */
    createTime?: string;
    /** 创建人 */
    creater?: string;
    /** 创建人Id */
    createrId?: string;
    /** 文件下载路径 */
    downloadUrl?: string;
    /** 完成时间 */
    finishTime?: string;
    /** 任务编号 */
    id?: string;
    /** 查询参数JSON */
    queryParamJson?: string;
    /** 业务来源单据编码 */
    sourceBizId?: string;
    /** 任务状态 0-初始化 1-运行中 2-运行完成 3-运行失败 */
    status?: number;
    /** 任务来源编码 字典：polarbear_pop_import_export_task */
    taskCode?: string;
    /** 任务来源名称 */
    taskName?: string;
    /** 文件上传路径 */
    uploadUrl?: string;
  };

  type LoginParamVO = {
    /** 密码是否加密 */
    hasEncrypt?: boolean;
    /** 登录验证码，可空 */
    loginCode?: string;
    /** 登录名 */
    loginName?: string;
    /** 登录密码 */
    password?: string;
  };

  type ModifyPwdVO = {
    /** 确认新密码 */
    confirmNewPassword?: string;
    /** 新密码 */
    newPassword?: string;
    /** 旧密码 */
    oldPassword?: string;
  };

  type ModulePageQueryVO = {
    /** 是否启用，启用：1  停用：0 */
    isEnabled?: number;
    /** 模块所属组，平台:1 商家:2 开发者: 3 */
    moduleGroup?: number;
    /** 模块名称 */
    moduleName?: string;
    pageQuery?: PageQuery;
  };

  type ModuleUpdateVO = {
    /** 适用业务类型 0-通用 1-商业批发 2-零售连锁 3-零售单体 */
    availableBizType?: string;
    /** 模块图标 */
    icon?: string;
    /** 模块编号, 没值：添加操作，有值：更新操作 */
    id?: string;
    /** 是否启用，启用：1  停用：0 */
    isEnabled?: number;
    /** 前端组件模块标识 */
    moduleFlag?: string;
    /** 模块所属组，平台:1 商家:2 开发者: 3 */
    moduleGroup?: number;
    /** 模块名称 */
    moduleName?: string;
    /** 模块链接 */
    moduleUrl?: string;
    /** 模块父编号 */
    parentId?: string;
    /** 模块排序 */
    sort?: number;
    /** 模块类型，模块:1 页面:2 页面组件:3 */
    type?: number;
    /** 系统版本，标准版：1  企业版:2  旗舰版: 3 */
    version?: number;
  };

  type ModuleVO = {
    /** 创建时间 */
    createTime?: string;
    /** 创建者 */
    creater?: string;
    /** 创建者编号 */
    createrId?: string;
    /** 模块图标 */
    icon?: string;
    /** 模块编号 */
    id?: string;
    /** 是否启用，启用：1  停用：0 */
    isEnabled?: number;
    /** 前端组件模块标识 */
    moduleFlag?: string;
    /** 模块所属组，平台:1 商家:2 开发者: 3 */
    moduleGroup?: number;
    /** 模块名称 */
    moduleName?: string;
    /** 模块链接 */
    moduleUrl?: string;
    /** 操作者 */
    operator?: string;
    /** 操作者编号 */
    operatorId?: string;
    /** 模块父编号 */
    parentId?: string;
    /** 模块排序 */
    sort?: number;
    /** 模块类型，模块:1 页面:2 页面组件:3 */
    type?: number;
    /** 更新时间 */
    updateTime?: string;
    /** 系统版本，标准版：1  企业版:2  旗舰版: 3 */
    version?: number;
  };

  type MsgPlatformPageQueryVO = {
    pageQuery?: PageQuery;
    /** 系统短信平台ID */
    sysPlatformId?: string;
  };

  type MsgPlatformUpdateVO = {
    /** 短信账号 */
    account: string;
    /** 短信配置编号, 没值：添加操作，有值：更新操作 */
    id?: string;
    /** 是否启用 1: 启用，0：未启用 */
    isEnabled: number;
    /** 短信密码 */
    password: string;
    /** 系统平台短信渠道id */
    sysPlatformId: string;
    /** 短信类型，行业通道:0 营销通道:1 */
    type: number;
  };

  type MsgPlatformVO = {
    /** 短信账号 */
    account: string;
    /** 创建时间 */
    createTime?: string;
    /** 创建者 */
    creater?: string;
    /** 创建者编号 */
    createrId?: string;
    /** 短信配置编号 */
    id?: string;
    /** 是否启用 1: 启用，未启用 */
    isEnabled: number;
    /** 操作者 */
    operator?: string;
    /** 操作者编号 */
    operatorId?: string;
    /** 短信密码 */
    password: string;
    /** 系统平台短信渠道id */
    sysPlatformId: string;
    /** 系统平台短信渠道名 */
    sysPlatformName: string;
    /** 系统平台短信渠道id */
    type: number;
    /** 更新时间 */
    updateTime?: string;
  };

  type MsgSendlistPageQueryVO = {
    /** 查询结束发送时间 */
    endDate?: string;
    pageQuery?: PageQuery;
    /** 系统短信渠道id */
    platformId?: string;
    /** 接收电话 */
    receivePhone?: string;
    /** 发送时间类型 立即发送:0 定时发送:1 */
    sendType?: number;
    /** 查询开始发送时间 */
    startDate?: string;
    /** 发送状态，待发送:0 发送成功:1 发送失败:2 */
    status?: number;
    /** 系统平台短信模版id */
    templateId?: string;
    /** 第三方短信编码 */
    thirdTemplateCode?: string;
  };

  type MsgSendlistVO = {
    /** 创建时间 */
    createTime?: string;
    /** 错误信息 */
    errorMsg?: string;
    id?: string;
    /** 发送IP地址 */
    ip?: string;
    /** 短信签名 */
    msgSignature?: string;
    /** 商户短信渠道名 */
    platformName?: string;
    /** 接收电话 */
    receivePhone?: string;
    /** 短信发送内容 */
    sendContent?: string;
    /** 发送结束时间 */
    sendEndTime?: string;
    /** 发送开始时间 */
    sendStartTime?: string;
    /** 发送时间类型 立即发送:0 定时发送:1 */
    sendType?: number;
    /** 发送来源 */
    source?: string;
    /** 发送状态，待发送:0 发送成功:1 发送失败:2 */
    status?: number;
    /** 商户短信模版编号 */
    templateId?: string;
    /** 商户短信模版名称 */
    templateName?: string;
    /** 第三方短信编码 */
    thirdTemplateCode?: string;
  };

  type MsgTemplatePageQueryVO = {
    pageQuery?: PageQuery;
    /** 发送时间类型：立即发送:0 定时发送:1 */
    sendType?: number;
    /** 短信渠道 */
    sysPlatformId?: string;
    /** 模板标题 */
    templateName?: string;
  };

  type MsgTemplateUpdateVO = {
    /** 短信模板编号, 没值：添加操作，有值：更新操作 */
    id?: string;
    /** 是否启用 1:启用，0：停用 */
    isEnabled: number;
    /** 短信签名 */
    msgSignature?: string;
    /** 商户短信渠道编号 */
    platformId: string;
    /** 发送结束时间段，23:59:59 */
    sendEndPeriod?: string;
    /** 发送开始时间段，00:00:00 */
    sendStartPeriod?: string;
    /** 发送时间类型 立即发送:0 定时发送:1 */
    sendType?: number;
    /** 系统短信渠道编号 */
    sysPlatformId: string;
    /** 平台短信模版编号 */
    sysTemplateId: string;
    /** 模版内容 */
    templateContent?: string;
    /** 模板名称 */
    templateName?: string;
    /** 第三方短信编码 */
    thirdTemplateCode?: string;
  };

  type MsgTemplateVO = {
    /** 创建时间 */
    createTime?: string;
    /** 创建者 */
    creater?: string;
    /** 创建者编号 */
    createrId?: string;
    /** 短信模板编号 */
    id?: string;
    /** 是否启用 1:启用，0：停用 */
    isEnabled?: number;
    /** 短信签名 */
    msgSignature?: string;
    /** 操作者 */
    operator?: string;
    /** 操作者编号 */
    operatorId?: string;
    /** 商户短信渠道编号 */
    platformId: string;
    /** 发送结束时间段，23:59:59 */
    sendEndPeriod?: string;
    /** 发送开始时间段，00:00:00 */
    sendStartPeriod?: string;
    /** 发送时间类型 立即发送:0 定时发送:1 */
    sendType?: number;
    /** 系统短信渠道ID */
    sysPlatformId: string;
    /** 系统短信渠道名称 */
    sysPlatformName: string;
    /** 平台短信模版编号 */
    sysTemplateId: string;
    /** 模版内容 */
    templateContent?: string;
    /** 短信模版标题 */
    templateName?: string;
    /** 第三方短信编码 */
    thirdTemplateCode?: string;
    /** 更新时间 */
    updateTime?: string;
  };

  type MyReviewFlowPageQueryVO = {
    /** 审核结果: 0-取消 2-审核通过 3-审核不通过 */
    auditStatus?: number;
    /** 单据编号 */
    billId?: string;
    /** 单据类型 */
    billType?: string;
    /** 提交人 */
    creater?: string;
    /** 本级审核状态: 2-审核通过 3-审核不通过 */
    currentAuditStatus?: number;
    /** 结束时间 */
    endTime?: string;
    /** 流程编号 */
    flowId?: string;
    /** 摘要 */
    instanceAbstract?: string;
    operatorId?: string;
    pageQuery?: PageQuery;
    /** 开始时间 */
    startTime?: string;
    /** 流程状态: 1-未提审 2-运行中 3-已完成 */
    status?: number;
  };

  type MySubmitFlowPageQueryVO = {
    /** 审核结果: 0-取消 2-审核通过 3-审核不通过 */
    auditStatus?: number;
    /** 单据编号 */
    billId?: string;
    /** 单据类型 */
    billType?: string;
    createrId?: string;
    /** 结束时间 */
    endTime?: string;
    /** 流程编号 */
    flowId?: string;
    /** 摘要 */
    instanceAbstract?: string;
    pageQuery?: PageQuery;
    /** 开始时间 */
    startTime?: string;
    /** 流程状态: 1-未提审 2-运行中 3-已完成 */
    status?: number;
  };

  type NoticePageQueryVO = {
    /** 消息ids */
    ids?: string[];
    /** 是否已读 0未读 1已读 */
    isReaded?: number;
    /** 发布结束日期 */
    maxCreateTime?: string;
    /** 发布结束日期 */
    maxReadTime?: string;
    /** 发布开始日期 */
    minCreateTime?: string;
    /** 发布开始日期 */
    minReadTime?: string;
    pageQuery?: PageQuery;
    /** 公告来源 1-客户证照到期提醒 2-供应商证照到期提醒 3-商品注册批件有效期到期提 4-近效期商品提醒 字典:polarbear_pop_notice_source */
    source?: number;
  };

  type NoticeVO = {
    /** 公告内容 */
    content?: string;
    /** 发布开始日期 */
    createTime?: string;
    /** 消息id */
    id?: string;
    /** 是否已读 0未读 1已读 */
    isReaded?: number;
    /** 公告类型 1-系统公告 字典: polarbear_pop_notice_type */
    noticeType?: number;
    /** 发布开始日期 */
    readTime?: string;
    /** 公告范围 1-全局 2-后台角色 3-后台用户 字典:polarbear_pop_notice_scope_type */
    scopeType?: number;
    /** 公告来源 1-客户证照到期提醒 2-供应商证照到期提醒 3-商品注册批件有效期到期提 4-近效期商品提醒 字典:polarbear_pop_notice_source */
    source?: number;
    /** 原始单据id */
    sourceBizId?: string;
    /** 状态 1-生效 99-作废 字典:polarbear_pop_notice_status */
    status?: number;
    /** 公告标题 */
    title?: string;
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

  type ProcessMyReviewVO = {
    /** 审核结果: 0-取消 2-审核通过 3-审核不通过 */
    auditStatus?: number;
    /** 单据编号 */
    billId?: string;
    /** 单据类型 */
    billType?: string;
    /** 单据类型名称 */
    billTypeTxt?: string;
    /** 发起人 */
    creater?: string;
    /** 本级审核备注 */
    currentAuditRemark?: string;
    /** 本级审核状态: 2-审核通过 3-审核不通过 */
    currentAuditStatus?: number;
    /** 本级审核时间 */
    currentAuditTime?: string;
    /** 流程参数 */
    flowArgs?: string;
    /** 流程编号 */
    flowId?: string;
    /** 实例编号 */
    id?: string;
    /** 发起时间 */
    initiationTime?: string;
    /** 摘要 */
    instanceAbstract?: string;
    /** 实例标题 */
    instanceTitle?: string;
    /** 备注 */
    remark?: string;
    /** 流程状态: 1-未提审 2-运行中 3-已完成 */
    status?: number;
  };

  type ProcessMySubmitVO = {
    /** 审核结果: 0-取消 2-审核通过 3-审核不通过 */
    auditStatus?: number;
    /** 单据编号 */
    billId?: string;
    /** 单据类型 */
    billType?: string;
    /** 单据类型名称 */
    billTypeTxt?: string;
    /** 发起人 */
    creater?: string;
    /** 流程参数 */
    flowArgs?: string;
    /** 流程编号 */
    flowId?: string;
    /** 实例编号 */
    id?: string;
    /** 发起时间 */
    initiationTime?: string;
    /** 摘要 */
    instanceAbstract?: string;
    /** 实例标题 */
    instanceTitle?: string;
    /** 备注 */
    remark?: string;
    /** 流程状态: 1-未提审 2-运行中 3-已完成 */
    status?: number;
  };

  type ProcessTDLVO = {
    /** 上级审核备注 */
    auditRemark?: string;
    /** 上级审核结果 */
    auditResult?: string;
    /** 单据编号 */
    billId?: string;
    /** 单据类型 */
    billType?: string;
    /** 单据类型名称 */
    billTypeTxt?: string;
    /** 打回人 */
    callBackPerson?: string;
    /** 收到时间 */
    createTime?: string;
    /** 发起人 */
    creater?: string;
    /** 流程参数 */
    flowArgs?: string;
    /** 流程编号 */
    flowId?: string;
    /** 实例编号 */
    id?: string;
    /** 发起时间 */
    initiationTime?: string;
    /** 摘要 */
    instanceAbstract?: string;
    /** 实例标题 */
    instanceTitle?: string;
    /** 是否被打回 0:否 1-是 */
    isCallBack?: number;
    /** 操作人 */
    operator?: string;
    /** 操作人编号 */
    operatorId?: string;
    /** 备注 */
    remark?: string;
  };

  type ResetPassParam = {
    /** 确认新密码 */
    confirmNewPassWord?: string;
    /** 图形验证码 */
    imageCode?: string;
    /** 发送手机号码 */
    mobile?: string;
    /** 新密码 */
    newPassWord?: string;
    /** 短信请求id */
    requestId?: string;
    /** 短信验证码 */
    smsCode?: string;
    /** 图形验证码uuid，获取图形验证码接口有返回 */
    uuid?: string;
  };

  type ResetPwdVO = {
    /** 新密码 */
    newPassword?: string;
    /** 用户编号 */
    userId?: string;
  };

  type RightModuleVO = {
    /** 子模块集 */
    children?: RightModuleVO[];
    /** 图标 */
    icon?: string;
    /** 编号 */
    id?: string;
    /** 前端标识 */
    moduleFlag?: string;
    /** 模块名称 */
    moduleName?: string;
    /** 模块路由 */
    moduleUrl?: string;
    /** 父编号 */
    parentId?: string;
    /** 排序 */
    sort?: number;
    /** 模块类型，模块:1 页面:2 页面组件:3 */
    type?: number;
  };

  type RolePageQueryVO = {
    /** 是否启用 1: 启用，0：停用 */
    isEnabled?: number;
    pageQuery?: PageQuery;
    /** 角色名称 */
    roleName?: string;
  };

  type RoleUpdateVO = {
    /** 角色编号, 没值：添加操作，有值：更新操作 */
    id?: string;
    /** 授权模块ID集合 */
    moduleIds?: string[];
    /** 角色描述 */
    roleDesc?: string;
    /** 角色名称 */
    roleName: string;
  };

  type RoleVO = {
    /** 创建时间 */
    createTime?: string;
    /** 创建者 */
    creater?: string;
    /** 创建者编号 */
    createrId?: string;
    /** 角色编号 */
    id?: string;
    /** 角色编号 */
    isEnabled?: number;
    /** 操作者 */
    operator?: string;
    /** 操作者编号 */
    operatorId?: string;
    /** 角色描述 */
    roleDesc?: string;
    /** 角色名称 */
    roleName?: string;
    /** 角色类型:1-总部 2-分店 */
    roleType?: number;
    /** 更新时间 */
    updateTime?: string;
  };

  type ShopInfoAllQueryVO = {
    /**  店铺id  */
    shopId?: string;
    /**  店铺名称  */
    shopName?: string;
    /**  用户id  */
    userId?: string;
  };

  type ShopUserPageQueryVO = {
    pageQuery?: PageQuery;
    /**  店铺id  */
    shopId?: string;
    /**  店铺名称  */
    shopName?: string;
  };

  type ShopUserVO = {
    /**  主键id  */
    id?: string;
    /**  店铺id  */
    shopId?: string;
    /**  店铺名称  */
    shopName?: string;
    /**  状态 0-停用 1-启用  */
    status?: number;
    /**  租户id  */
    tenantId?: string;
    /**  用户id  */
    userId?: string;
  };

  type SmsCodeVO = {
    /** 请求标识, 登录时需要传 */
    requestId?: string;
    /** 发送是否成功 */
    success?: boolean;
  };

  type StatusVO = {
    /** 用户编号集合 */
    ids?: string[];
    /** 用户状态 正常:0 锁定:1 停用:2, 解锁:3 */
    status?: number;
  };

  type SysMsgPlatformVO = {
    /** 系统短信渠道编号 */
    id?: string;
    /** 短信渠道商 */
    platformName?: string;
  };

  type SysMsgTemplateContentVO = {
    /** 系统短信模版编号 */
    id?: string;
    /** 系统短信模板内容 */
    templateContent?: string;
    /** 系统短信模版名称 */
    templateName?: string;
  };

  type SysMsgTemplateVO = {
    /** 是否可用 */
    available?: boolean;
    /** 系统短信模版编号 */
    id?: string;
    /** 系统短信模版名称 */
    templateName?: string;
  };

  type TenantAddressVO = {
    /** 详细地址 */
    address?: string;
    /** 所属区id */
    areaId?: string;
    /** 所属区名称 */
    areaName?: string;
    /** 所属城市id */
    cityId?: string;
    /** 所属城市名称 */
    cityName?: string;
    /** 联系人 */
    contactPerson?: string;
    /** 地址id */
    id?: string;
    /** 是否默认, 1: 默认，0：非默认 */
    isDefault?: number;
    /** 联系方式 */
    mobile?: string;
    /** 所属省份id */
    provinceId?: string;
    /** 所属省份名称 */
    provinceName?: string;
    /** 地址类型，1：发货地址，2：退货寄回地址，3：办公地址 */
    type?: number;
    /** 地址类型名称 */
    typeName?: string;
  };

  type TenantBalanceAccountVO = {
    /** 开户行 */
    accountBank?: string;
    /** 账户名称 */
    accountName?: string;
    /** 账户号码 */
    accountNo?: string;
    /** 账户id */
    id?: string;
    /** 是否默认, 1: 默认，0：非默认 */
    isDefault?: number;
    /** 说明 */
    remark?: string;
  };

  type TenantPageQueryVO = {
    /** 公司负责人 */
    chargePerson?: string;
    /** 是否启用 1:启用，0：停用 */
    isEnabled?: number;
    pageQuery?: PageQuery;
    /** 公司电话 */
    phone?: string;
    /** 公司名称 */
    tenantName?: string;
  };

  type TenantUpdateVO = {
    /** 开户银行（发票) */
    accountBank?: string;
    /** 开户账号名称（发票) */
    accountName?: string;
    /** 银行账号（发票) */
    accountNo?: string;
    /** 地址（发票) */
    address?: string;
    /** 公司所属区id */
    areaId?: string;
    /** 公司所属区名称 */
    areaName?: string;
    /** 可用系统版本，标准版:1 企业版:2 旗舰版:3 */
    availableVersion: number;
    /** 公司负责人 */
    chargePerson?: string;
    /** 公司所属城市id */
    cityId?: string;
    /** 公司所属城市名称 */
    cityName?: string;
    /** 公司编号, 没值：添加操作，有值：更新操作 */
    id?: string;
    /** 公司名称(发票) */
    invoiceTitle?: string;
    /** 发票类型：字典 polarbear_wss_invoice_type */
    invoiceType?: number;
    /** 是否启用, 1: 启用，0：停用 */
    isEnabled?: number;
    /** 公司父编号 */
    parentId?: string;
    /** 公司电话 */
    phone?: string;
    /** 公司所属省份id */
    provinceId?: string;
    /** 公司所属省份名称 */
    provinceName?: string;
    /** 纳税人识别号（发票) */
    taxPayerCode?: string;
    /** 电话（发票) */
    telePhone?: string;
    /** 公司名称 */
    tenantName: string;
    /** 公司类型，平台:1 商家:2 第三方软件商:3 */
    type: number;
  };

  type TenantVO = {
    /** 开户行 */
    accountBank?: string;
    /** 开户账号名称 */
    accountName?: string;
    /** 开户账号 */
    accountNo?: string;
    /** 公司详细地址 */
    address?: string;
    /** 公司所属区id */
    areaId?: string;
    /** 公司所属区名称 */
    areaName?: string;
    /** 可用系统版本，标准版:1 企业版:2 旗舰版:3 */
    availableVersion?: number;
    /** 商业公司业务类型编码 0-批零一体 1-商业批发 2-零售连锁 3-零售单体 */
    bizType?: number;
    /** 公司负责人 */
    chargePerson?: string;
    /** 公司所属城市id */
    cityId?: string;
    /** 公司所属城市名称 */
    cityName?: string;
    /** 创建时间 */
    createTime?: string;
    /** 创建者 */
    creater?: string;
    /** 创建者编号 */
    createrId?: string;
    /** 公司编号 */
    id?: string;
    /** 发票抬头 */
    invoiceTitle?: string;
    /** 发票类型：字典 polarbear_wss_invoice_type */
    invoiceType?: number;
    /** 是否启用 */
    isEnabled?: number;
    /** 月结日 */
    monthlySheetDay?: number;
    /** 公司父id */
    parentId?: string;
    /** 公司电话 */
    phone?: string;
    /** 公司所属省份id */
    provinceId?: string;
    /** 公司所属省份名称 */
    provinceName?: string;
    /** 纳税人编号 */
    taxPayerCode?: string;
    /** 电话 */
    telePhone?: string;
    /** 公司名称 */
    tenantName?: string;
    /** 公司父id */
    type?: number;
    /** 更新时间 */
    updateTime?: string;
    /** 租户仓库信息 */
    wareHouseList?: WareHouseVO[];
    /** 年结日 */
    yearSheetDay?: number;
  };

  type ThirdConfigPageQueryVO = {
    pageQuery?: PageQuery;
  };

  type ThirdConfigUpdateVO = {
    appId?: string;
    appSecret?: string;
    id?: string;
    isEnabled?: number;
    platformCode?: string;
    platformName?: string;
  };

  type ThirdConfigVO = {
    appId?: string;
    appSecret?: string;
    createTime?: string;
    creater?: string;
    createrId?: string;
    id?: string;
    isEnabled?: number;
    platformCode?: string;
    platformName?: string;
    updateTime?: string;
  };

  type TreeModuleExtVO = {
    /** 子集 */
    children?: TreeModuleExtVO[];
    /** 创建时间 */
    createTime?: string;
    /** 创建者 */
    creater?: string;
    /** 创建者编号 */
    createrId?: string;
    /** 模块图标 */
    icon?: string;
    /** 模块编号 */
    id?: string;
    /** 是否启用，启用：1  停用：0 */
    isEnabled?: number;
    /** 前端组件模块标识 */
    moduleFlag?: string;
    /** 模块所属组，平台:1 商家:2 开发者: 3 */
    moduleGroup?: number;
    /** 模块名称 */
    moduleName?: string;
    /** 模块链接 */
    moduleUrl?: string;
    /** 操作者 */
    operator?: string;
    /** 操作者编号 */
    operatorId?: string;
    /** 模块父编号 */
    parentId?: string;
    /** 是否选中 */
    selected?: boolean;
    /** 模块排序 */
    sort?: number;
    /** 模块类型，模块:1 页面:2 页面组件:3 */
    type?: number;
    /** 更新时间 */
    updateTime?: string;
    /** 系统版本，标准版：1  企业版:2  旗舰版: 3 */
    version?: number;
  };

  type UpdateAddressVO = {
    /** 详细地址 */
    address?: string;
    /** 地址类型，1：发货地址:，2：退货寄回地址，3：办公地址 */
    addressType?: number;
    /** 所属区id */
    areaId?: string;
    /** 所属区名称 */
    areaName?: string;
    /** 所属城市id */
    cityId?: string;
    /** 所属城市名称 */
    cityName?: string;
    /** 联系人 */
    contactPerson?: string;
    /** 是否默认 true：默认，false：非默认 */
    hasDefault?: boolean;
    /** 地址id */
    id?: string;
    /** 联系方式 */
    mobile?: string;
    /** 所属省份id */
    provinceId?: string;
    /** 所属省份名称 */
    provinceName?: string;
  };

  type UserByRoleVO = {
    /** 所属公司 */
    company?: string;
    /** 创建时间 */
    createTime?: string;
    /** 创建者 */
    creater?: string;
    /** 创建者编号 */
    createrId?: string;
    /** 是否绑定 */
    hasBind?: boolean;
    /** 用户编号, 有值：添加操作，没值：更新操作 */
    id?: string;
    /** 是否超级管理员 0：不是，1：是 */
    isAdmin?: number;
    /** 是否允许多人登录 不允许:0 允许:1 */
    isAllowMulti?: number;
    /** 最后登录时间 */
    lastLoginTime?: string;
    /** 最后登录ip */
    loginIp?: string;
    /** 登录名 */
    loginName?: string;
    /** 手机号码 */
    mobile?: string;
    /** 操作者 */
    operator?: string;
    /** 操作者编号 */
    operatorId?: string;
    /** 加密后的密码明文 */
    password?: string;
    /** 真实姓名 */
    realName?: string;
    /** 角色ID集合 */
    roleIds?: string[];
    /** 角色名称 */
    roleNames?: string;
    /** 性别 男:0 女:1 */
    sex?: number;
    /** 绑定店铺数量 */
    shopUserNumber?: string;
    /** 用户状态 正常:0 锁定:1 停用:2 */
    status?: number;
    /** 更新时间 */
    updateTime?: string;
    /** 微信openid */
    wxOpenid?: string;
    /** 微信unionid */
    wxUnionid?: string;
  };

  type UserInfoVO = {
    /** 所属公司 */
    company?: string;
    /** 租户配置json */
    configJson?: string;
    /** 创建时间 */
    createTime?: string;
    /** 创建者 */
    creater?: string;
    /** 创建者编号 */
    createrId?: string;
    /** 默认首页跳转标识 */
    defaultModuleFlag?: string;
    /** 用户编号, 有值：添加操作，没值：更新操作 */
    id?: string;
    /** 是否超级管理员 0：不是，1：是 */
    isAdmin?: number;
    /** 是否允许多人登录 不允许:0 允许:1 */
    isAllowMulti?: number;
    /** 最后登录时间 */
    lastLoginTime?: string;
    /** 最后登录ip */
    loginIp?: string;
    /** 登录名 */
    loginName?: string;
    /** 手机号码 */
    mobile?: string;
    /** 操作者 */
    operator?: string;
    /** 操作者编号 */
    operatorId?: string;
    password?: string;
    /** 真实姓名 */
    realName?: string;
    /** 角色ID集合 */
    roleIds?: string[];
    /** 角色名称 */
    roleNames?: string;
    /** 性别 男:0 女:1 */
    sex?: number;
    /** 用户状态 正常:0 锁定:1 停用:2 */
    status?: number;
    /** 更新时间 */
    updateTime?: string;
    /** 微信openid */
    wxOpenid?: string;
    /** 微信unionid */
    wxUnionid?: string;
  };

  type UserPageQueryVO = {
    /** id集合，用于勾选 */
    ids?: string[];
    /** 登录用户名 */
    loginName?: string;
    /** 手机号码 */
    mobile?: string;
    pageQuery?: PageQuery;
    /** 真实姓名 */
    realName?: string;
    /** 角色ID */
    roleId?: string;
    /** 性别，男:0 女:1 */
    sex?: number;
    /** 用户状态，正常:0 锁定:1 停用:2 */
    status?: number;
    tenantId?: string;
  };

  type UserUpdateVO = {
    /** 用户编号, 没值：添加操作，有值：更新操作 */
    id?: string;
    /** 是否允许多人登录，不允许:0 允许:1 */
    isAllowMulti?: number;
    /** 登录用户名 */
    loginName: string;
    /** 手机号码 */
    mobile?: string;
    /** 修改密码 */
    password?: string;
    /** 真实姓名 */
    realName?: string;
    /** 用户授权角色编号集合 */
    roleIds?: string[];
    /** 性别，男:0 女:1 */
    sex?: number;
    /** 用户状态，正常:0 锁定:1 停用:2 */
    status?: number;
  };

  type UserVO = {
    /** 所属公司 */
    company?: string;
    /** 创建时间 */
    createTime?: string;
    /** 创建者 */
    creater?: string;
    /** 创建者编号 */
    createrId?: string;
    /** 用户编号, 有值：添加操作，没值：更新操作 */
    id?: string;
    /** 是否超级管理员 0：不是，1：是 */
    isAdmin?: number;
    /** 是否允许多人登录 不允许:0 允许:1 */
    isAllowMulti?: number;
    /** 最后登录时间 */
    lastLoginTime?: string;
    /** 最后登录ip */
    loginIp?: string;
    /** 登录名 */
    loginName?: string;
    /** 手机号码 */
    mobile?: string;
    /** 操作者 */
    operator?: string;
    /** 操作者编号 */
    operatorId?: string;
    /** 加密后的密码明文 */
    password?: string;
    /** 真实姓名 */
    realName?: string;
    /** 角色ID集合 */
    roleIds?: string[];
    /** 角色名称 */
    roleNames?: string;
    /** 性别 男:0 女:1 */
    sex?: number;
    /** 绑定店铺数量 */
    shopUserNumber?: string;
    /** 用户状态 正常:0 锁定:1 停用:2 */
    status?: number;
    /** 更新时间 */
    updateTime?: string;
    /** 微信openid */
    wxOpenid?: string;
    /** 微信unionid */
    wxUnionid?: string;
  };

  type WareHouseVO = {
    /** 地址 */
    address?: string;
    /** 城市id */
    cityId?: string;
    /** 城市名称 */
    cityName?: string;
    /** 联系人 */
    contactPerson?: string;
    /** 区名称 */
    district?: string;
    /** 区编号 */
    districtId?: string;
    /** 仓库id */
    id?: string;
    /** 电话 */
    mobile?: string;
    /** 所属省份id */
    provinceId?: string;
    /** 省份名称 */
    provinceName?: string;
    /** 说明 */
    remark?: string;
    /** 租户id */
    tenantId?: string;
    /** 仓库编码 */
    whId?: string;
    /** 仓库名称 */
    whName?: string;
  };

  type EnableVOString_ = {
    /** 是否启用，1：启用、0：停用 */
    enable?: number;
    /** 修改编号集合 */
    ids?: string[];
  };

  type PaginationImportExportTaskVO_ = {
    current?: number;
    records?: ImportExportTaskVO[];
    size?: number;
    total?: number;
  };

  type PaginationModuleVO_ = {
    current?: number;
    records?: ModuleVO[];
    size?: number;
    total?: number;
  };

  type PaginationMsgPlatformVO_ = {
    current?: number;
    records?: MsgPlatformVO[];
    size?: number;
    total?: number;
  };

  type PaginationMsgSendlistVO_ = {
    current?: number;
    records?: MsgSendlistVO[];
    size?: number;
    total?: number;
  };

  type PaginationMsgTemplateVO_ = {
    current?: number;
    records?: MsgTemplateVO[];
    size?: number;
    total?: number;
  };

  type PaginationNoticeVO_ = {
    current?: number;
    records?: NoticeVO[];
    size?: number;
    total?: number;
  };

  type PaginationProcessMyReviewVO_ = {
    current?: number;
    records?: ProcessMyReviewVO[];
    size?: number;
    total?: number;
  };

  type PaginationProcessMySubmitVO_ = {
    current?: number;
    records?: ProcessMySubmitVO[];
    size?: number;
    total?: number;
  };

  type PaginationProcessTDLVO_ = {
    current?: number;
    records?: ProcessTDLVO[];
    size?: number;
    total?: number;
  };

  type PaginationRoleVO_ = {
    current?: number;
    records?: RoleVO[];
    size?: number;
    total?: number;
  };

  type PaginationShopUserVO_ = {
    current?: number;
    records?: ShopUserVO[];
    size?: number;
    total?: number;
  };

  type PaginationTenantVO_ = {
    current?: number;
    records?: TenantVO[];
    size?: number;
    total?: number;
  };

  type PaginationThirdConfigVO_ = {
    current?: number;
    records?: ThirdConfigVO[];
    size?: number;
    total?: number;
  };

  type PaginationUserByRoleVO_ = {
    current?: number;
    records?: UserByRoleVO[];
    size?: number;
    total?: number;
  };

  type PaginationUserVO_ = {
    current?: number;
    records?: UserVO[];
    size?: number;
    total?: number;
  };
}
