import type { Reducer } from 'umi';
import { AnyAction } from 'redux';

export type PermissionNode = {
  key: string;
  title: string;
  children: PermissionNode[];
  hasGrandChildren?: boolean;
};

export type PermissionModelState = {
  currentPermissions: [];
  allPermissions: PermissionNode[];
};

export type PermissionModelType = {
  namespace: string;
  state: PermissionModelState;
  effects: {};
  reducers: {
    fetchCurrentPermissionsSuccess: Reducer<PermissionModelState>;
  }[];
};

function enhancer(reducer: Reducer) {
  return (state: PermissionModelState, action: AnyAction) => {
    if (['user/userInfoFetched', 'user/loginSuccess'].includes(action.type)) {
      console.log(action, 'action', state);
      return reducer(state, {
        type: 'permission/fetchCurrentPermissionsSuccess',
        payload: action.payload.pmCodeList || [],
      });
    }
    return reducer(state, action);
  };
}

export default {
  namespace: 'permission',
  state: {
    currentPermissions: [],
    allPermissions: getAllPermissions(),
  },
  effects: {},
  reducers: [
    {
      fetchCurrentPermissionsSuccess(
        state: PermissionModelState,
        { payload }: { payload: string[] },
      ) {
        type NodeType = { key: string; children: any[] };
        const plainSearchNode = (
          key: string,
          tree: NodeType[] = [],
        ): NodeType | null => {
          const result = tree.filter((item: any) => item.key === key);
          if (result.length > 0) {
            return result[0];
          }
          return null;
        };

        const getOrCreateNode = (
          fatherKey: string | null,
          levels: string[],
          tree: NodeType[] = [],
        ): NodeType | null => {
          if (levels.length === 0) {
            return null;
          }
          const currentKey = fatherKey
            ? `${fatherKey}-${levels[0]}`
            : levels[0];
          let node = plainSearchNode(currentKey, tree);
          if (!node) {
            node = {
              key: currentKey,
              children: [],
            };
            tree.push(node);
          }
          getOrCreateNode(currentKey, levels.slice(1), node.children);
          return node;
        };
        const tree: NodeType[] = [];
        payload.forEach((value) => {
          getOrCreateNode(null, value.split('-'), tree);
        });
        return {
          ...state,
          currentPermissions: tree,
        };
      },
    },
    enhancer,
  ],
};

function getAllPermissions() {
  return [
    {
      title: 'cssOmit',
      key: '321',
    },
    {
      title: '讲座管理',
      key: '11-00-00',
      children: [
        {
          title: '编辑宣发页',
          key: '11-01-00',
        },
        {
          title: '排课管理',
          key: '11-02',
          children: [
            { title: '查看排课数据', key: '11-02-01' },
            { title: '添加排课', key: '11-02-02' },
            { title: '编辑排课', key: '11-02-03' },
            { title: '验票', key: '11-02-04' },
            { title: '删除', key: '11-02-05' },
            { title: '查看预约数据', key: '11-02-06' },
            { title: '导出预约数据', key: '11-02-07' },
          ],
        },
      ],
    },
    {
      title: '订单管理',
      key: '12',
      children: [
        { title: '查看详情', key: '12-01-00' },
        { title: '审核订单', key: '12-02-00' },
        { title: '导出订单', key: '12-03-00' },
        {
          title: '导入订单',
          key: '12-04',
          children: [
            { title: '导入免费订单', key: '12-04-01' },
            { title: '导入付费订单', key: '12-04-02' },
          ],
        },
      ],
    },
    {
      title: '用户管理',
      key: '13-00-00',
      children: [
        { title: '查看详情', key: '13-01-00' },
        { title: '导出数据', key: '13-02-00' },
        { title: '下载合同', key: '13-03-00' },
        { title: '导入外部渠道用户', key: '13-04-00' },
        { title: '批量赠送课程名额', key: '13-05-00' },
        { title: '身份升降级', key: '13-06-00' },
        { title: '重置密码', key: '13-07-00' },
      ],
    },
    {
      title: '服务商管理',
      key: '14-00-00',
      children: [
        { title: '查看服务商数据', key: '14-01-00' },
        { title: '查看服务合作伙伴数据', key: '14-02-00' },
        { title: '下载合同', key: '14-03-00' },
      ],
    },
    {
      title: '团队管理',
      key: '15-00-00',
      children: [
        {
          title: '成员管理',
          key: '15-01-00',
          children: [
            { title: '添加成员', key: '15-01-01' },
            { title: '停用', key: '15-01-02' },
            { title: '编辑', key: '15-01-03' },
            { title: '删除', key: '15-01-04' },
          ],
        },
        {
          title: '角色管理',
          key: '15-02-00',
          children: [
            { title: '添加角色', key: '15-02-01' },
            { title: '编辑', key: '15-02-02' },
            { title: '删除', key: '15-02-03' },
          ],
        },
      ],
    },
    {
      title: '其他',
      key: '17-00-00',
      children: [
        { title: '查看手机号', key: '17-01-00' },
        { title: '查看身份证', key: '17-02-00' },
        { title: '添加赠送名额', key: '17-03-00' },
        { title: '合同控制', key: '17-04-00' },
        { title: '查看账号', key: '17-05-00' },
        { title: '解除绑定', key: '17-06-00' },
        { title: '修改推荐关系', key: '17-07-00' },
      ],
    },
    {
      title: '内容管理',
      key: '18-00-00',
      children: [
        {
          title: '直播列表',
          key: '18-01-00',
          children: [
            { title: '回放列表', key: '18-01-01' },
            { title: '视频列表', key: '18-01-02' },
            { title: '新增直播', key: '18-01-03' },
            { title: '编辑直播', key: '18-01-04' },
            { title: '删除直播', key: '18-01-05' },
          ],
        },
        {
          title: '视频课程列表',
          key: '18-02-00',
          children: [
            { title: '新增课程视频', key: '18-02-01' },
            { title: '编辑课程视频', key: '18-02-02' },
            { title: '删除课程视频', key: '18-02-03' },
            { title: '上下架视频课程', key: '18-02-04' },
          ],
        },
        { title: 'banner管理', key: '18-03-00' },
        { title: '分类设置', key: '18-04-00' },
      ],
    },
    {
      title: 'app更新管理',
      key: '19-01-00',
      children: [{ title: '编辑', key: '19-01-01' }],
    },
    {
      title: '提现审核管理',
      key: '20-00-00',
      children: [
        { title: '审核', key: '20-01-00' },
        { title: '导出提现记录', key: '20-02-00' },
      ],
    },
  ];
  // return [{
  //     title: '主页管理',
  //     key: '16-00',
  //     children: [{
  //         title: '主页查看',
  //         key: '16-00-00'
  //       }, {
  //         title: '主页编辑',
  //         key: '16-00-01'
  //       },
  //       {
  //         title: '绑定服务号',
  //         key: '12-04-00',
  //       },
  //     ]
  //   },
  //   {
  //     title: '活动管理',
  //     key: '10',
  //     children: [{
  //         title: '新建',
  //         key: '10-00-00',
  //       },
  //       {
  //         title: '编辑',
  //         key: '10-00-01',
  //       },
  //       {
  //         title: '导出数据',
  //         key: '10-02-00',
  //       },
  //       {
  //         title: '删除活动',
  //         key: '10-00-04'
  //       }
  //     ],
  //   }, {
  //     title: '产品管理',
  //     key: '16',
  //     children: [{
  //         title: '商品管理',
  //         key: '16-06',
  //         children: [{
  //             title: '商品创建',
  //             key: '16-06-00',
  //           },
  //           {
  //             title: '商品编辑',
  //             key: '16-06-01',
  //           },
  //           {
  //             title: '商品删除',
  //             key: '16-06-02',
  //           },
  //           {
  //             title: '导出数据',
  //             key: '16-06-03',
  //           },
  //         ]
  //       },
  //       {
  //         title: '讲座管理',
  //         key: '16-02',
  //         children: [{
  //             title: '讲座创建',
  //             key: '16-02-00',
  //           },
  //           {
  //             title: '讲座编辑',
  //             key: '16-02-01',
  //           },
  //           {
  //             title: '讲座删除',
  //             key: '16-02-02',
  //           },
  //           {
  //             title: '导出数据',
  //             key: '16-02-03',
  //           },
  //         ]
  //       },
  //     ]
  //   },
  //    {
  //     title: '代言管理',
  //     key: '17',
  //     children: [
  //       {
  //         title: '代言人管理',
  //         key: '16-01-00'
  //       },
  //       {
  //         title: '笔记管理',
  //         key: '16-03-00'
  //       },
  //       {
  //         title:'代言人模板设置',
  //         key:'16-07-00'
  //       }
  //     ]
  //   },
  //   {
  //     title: '工具',
  //     key: '12',
  //     children: [{
  //         title: '短链',
  //         key: '12-00',
  //         children: [{
  //             title: '新建',
  //             key: '12-00-00',
  //           },
  //           {
  //             title: '分享短链',
  //             key: '12-00-01',
  //           },
  //           {
  //             title: '数据分析',
  //             key: '12-00-02',
  //           },
  //           {
  //             title: '编辑',
  //             key: '12-00-03',
  //           },
  //           {
  //             title: '删除',
  //             key: '12-00-04',
  //           },
  //         ]
  //       },
  //       {
  //         title: '活码',
  //         key: '12-01',
  //         children: [{
  //             title: '新建',
  //             key: '12-01-00',
  //           },
  //           {
  //             title: '分享活码',
  //             key: '12-01-01',
  //           },
  //           {
  //             title: '数据分析',
  //             key: '12-01-02',
  //           },
  //           {
  //             title: '编辑',
  //             key: '12-01-03',
  //           },
  //           {
  //             title: '删除',
  //             key: '12-01-04',
  //           },
  //         ]
  //       },
  //       {
  //         title: '表单',
  //         key: '12-02',
  //         children: [{
  //             title: '新建',
  //             key: '12-02-00',
  //           },
  //           {
  //             title: '分享表单',
  //             key: '12-02-01',
  //           },
  //           {
  //             title: '数据分析',
  //             key: '12-02-02',
  //           },
  //           {
  //             title: '编辑',
  //             key: '12-02-03',
  //           },
  //           {
  //             title: '删除',
  //             key: '12-02-04',
  //           },
  //         ]
  //       },
  //       {
  //         title: '问答',
  //         key: '12-03',
  //         children: [{
  //             title: '新建',
  //             key: '12-03-00',
  //           },
  //           {
  //             title: '分享问答',
  //             key: '12-03-01',
  //           },
  //           {
  //             title: '数据分析',
  //             key: '12-03-02',
  //           },
  //           {
  //             title: '编辑',
  //             key: '12-03-03',
  //           },
  //           {
  //             title: '删除',
  //             key: '12-03-04',
  //           },
  //         ]
  //       },
  //     ]
  //   },
  //   {
  //     title: '订单管理',
  //     key: '16-04-00'
  //   },
  //   {
  //     title: '数据分析',
  //     key: '16-05-00'
  //   },
  //   {
  //     title: '财务管理',
  //     key: '14-00-00',
  //   },
  //   {
  //     title: '团队管理',
  //     key: '13',
  //     children: [{
  //         title: '组织架构',
  //         key: '13-01',
  //         children: [
  //           //   {
  //           //   title: '添加成员',
  //           //   key: '13-01-00',
  //           // },
  //           {
  //             title: '邀请成员加入',
  //             key: '13-01-01',
  //           },
  //           {
  //             title: '停用',
  //             key: '13-01-02',
  //           },
  //           {
  //             title: '编辑',
  //             key: '13-01-03',
  //           },
  //           {
  //             title: '删除',
  //             key: '13-01-04',
  //           },
  //         ]
  //       },
  //       {
  //         title: '角色管理',
  //         key: '13-02',
  //         children: [{
  //             title: '添加角色',
  //             key: '13-02-00',
  //           },
  //           {
  //             title: '编辑',
  //             key: '13-02-01',
  //           },
  //           {
  //             title: '删除',
  //             key: '13-02-02',
  //           },
  //         ]
  //       },
  //     ]
  //   },

  // ];
}
