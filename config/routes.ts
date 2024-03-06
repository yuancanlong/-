export default [
  // {
  //   path: '/',
  //   component: '../layouts/SecurityLayout.tsx',
  //   routes: [
  //   //   {
  //   //     path: '/user/login',
  //   //     // component: '../pages/user/login',
  //   //   },
  //     {
  //       path: '/',
  //       component: '../layouts/LeftSideBasicLayout',
  //       routes: [
  //         // {
  //         //   name: '讲座详情',
  //         //   path: '/product/detail',
  //         //   component: '../layouts/NavLayout',
  //         //   hideInMenu: true,
  //         //   routes: [
  //         //     {
  //         //       breadcrumb: '预约详情',
  //         //       name: '预约详情',
  //         //       path: '/product/detail/book/bookDetail',
  //         //       // component: './product/signupDetail',
  //         //     },
  //         //     {
  //         //       breadcrumb: '预约列表',
  //         //       name: '预约列表',
  //         //       path: '/product/detail/book',
  //         //       // component: './product/book',
  //         //       acceptedQueries: ['uuid', 'id', 'bookUuid', 'productType'],
  //         //     },
  //         //     {
  //         //       breadcrumb: '添加排课',
  //         //       name: '添加排课',
  //         //       path: '/product/detail/addPlan',
  //         //       // component: './product/addPlan',
  //         //       acceptedQueries: ['uuid', 'id', 'productType'],
  //         //     },
  //         //     {
  //         //       breadcrumb: '编辑排课',
  //         //       name: '编辑排课',
  //         //       path: '/product/detail/editPlan',
  //         //       // component: './product/addPlan',
  //         //       acceptedQueries: ['uuid', 'id', 'productType'],
  //         //     },
  //         //     {
  //         //       breadcrumb: '讲座编辑',
  //         //       name: '讲座编辑',
  //         //       path: '/product/detail/edit',
  //         //       // component: './product/addOrEditProduct',
  //         //       acceptedQueries: ['uuid', 'id', 'productType'],
  //         //     },
  //         //     {
  //         //       breadcrumb: '订单详情',
  //         //       name: '订单详情',
  //         //       path: '/product/detail/orderDetail',
  //         //       // component: './product/orderDetail',
  //         //       acceptedQueries: ['uuid', 'id', 'productType'],
  //         //     },
  //         //     {
  //         //       breadcrumb: '详情',
  //         //       name: '详情',
  //         //       path: '/product/detail',
  //         //       // component: './product/productDetail',
  //         //       acceptedQueries: ['uuid', 'id', 'productType'],
  //         //     },
  //         //   ],
  //         // },
  //         // {
  //         //   name: '新增讲座',
  //         //   path: '/product/addProduct',
  //         //   component: '../layouts/NavLayout',
  //         //   isNavLayout: true,
  //         //   routes: [
  //         //     {
  //         //       name: '新增讲座',
  //         //       path: '/product/addProduct',
  //         //       breadcrumb: '新增讲座',
  //         //       hideInMenu:true,
  //         //       // component: './product/addOrEditProduct',
  //         //     }
  //         //   ],
  //         // },
  //         // {
  //         //   name: '产品管理',
  //         //   path: '/product',
  //         //   breadcrumb: '讲座管理',
  //         //   permissions: '11',
  //         //   component: '../layouts/NavLayout',
  //         //   routes: [
  //         //     {
  //         //       path: '/product',
  //         //       name: '讲座管理',
  //         //       // component: './product/productList',
  //         //     },
  //         //   ],
  //         // },

  //         // {
  //         //   name: '用户详情',
  //         //   path: '/client/detail',
  //         //   component: '../layouts/NavLayout',
  //         //   isNavLayout: true,
  //         //   routes: [
  //         //     {
  //         //       breadcrumb: '用户详情',
  //         //       name: '用户详情',
  //         //       path: '/client/detail',
  //         //       // component: './client/clientDetail',
  //         //     },
  //         //   ],
  //         // },
  //         // {
  //         //   name: '用户管理',
  //         //   path: '/client',
  //         //   // component: './client/clientList',
  //         //   permissions: '13',
  //         //   breadcrumb: '用户列表',
  //         // },
  //         // {
  //         //   name: '用户详情',
  //         //   path: '/partner/list/detail',
  //         //   component: '../layouts/NavLayout',
  //         //   isNavLayout: true,
  //         //   routes: [
  //         //     {
  //         //       breadcrumb: '用户详情',
  //         //       name: '用户详情',
  //         //       path: '/partner/list/detail',
  //         //       // component: './client/clientDetail',
  //         //     },
  //         //   ],
  //         // },
  //         // {
  //         //   name: '用户详情',
  //         //   path: '/partner/assistant/list/detail',
  //         //   component: '../layouts/NavLayout',
  //         //   isNavLayout: true,
  //         //   routes: [
  //         //     {
  //         //       breadcrumb: '用户详情',
  //         //       name: '用户详情',
  //         //       path: '/partner/assistant/list/detail',
  //         //       // component: './client/clientDetail',
  //         //     },
  //         //   ],
  //         // },
  //         // {
  //         //   name: '服务商管理',
  //         //   path: '/partner',
  //         //   permissions: '14',
  //         //   routes: [
  //         //     {
  //         //       path: '/partner/list',
  //         //       name: '服务商',
  //         //       breadcrumb: '服务商列表',
  //         //       permissions: '14-01-00',
  //         //       // component: './partner/partnerList',
  //         //     },
  //         //     {
  //         //       path: '/partner/assistant/list',
  //         //       name: '合作伙伴',
  //         //       breadcrumb: '服务商合作伙伴列表',
  //         //       permissions: '14-02-00',
  //         //       // component: './partner/partnerAssistantList',
  //         //     },
  //         //   ],
  //         // },
  //         // {
  //         //   name: '订单详情',
  //         //   path: '/order/detail',
  //         //   component: '../layouts/NavLayout',
  //         //   isNavLayout: true,
  //         //   routes: [
  //         //     {
  //         //       breadcrumb: '订单详情',
  //         //       name: '订单详情',
  //         //       path: '/order/detail',
  //         //       // component: './product/orderDetail',
  //         //     },
  //         //   ],
  //         // },
  //         // {
  //         //   name: '订单历史',
  //         //   path: '/order/history',
  //         //   component: '../layouts/NavLayout',
  //         //   isNavLayout: true,
  //         //   routes: [
  //         //     {
  //         //       breadcrumb: '订单历史',
  //         //       name: '订单历史',
  //         //       path: '/order/history',
  //         //       // component: './order/components/orderHistory',
  //         //     }
  //         //   ],
  //         // },
  //         // {
  //         //   name: '订单管理',
  //         //   path: '/order',
  //         //   breadcrumb: '订单管理',
  //         //   permissions: '12',
  //         //   component: '../layouts/NavLayout',
  //         //   routes: [
  //         //     {
  //         //       path: '/order',
  //         //       name: '订单管理',
  //         //       // component: './order/order',
  //         //       permissions: '12',
  //         //     },
  //         //   ],
  //         // },
  //         // {
  //         //   name: '提现审核',
  //         //   path: '/withdraw',
  //         //   // component: '../layouts/NavLayout',
  //         //   // isNavLayout:false,
  //         //   permissions: '20',
  //         //   routes: [
  //         //     {
  //         //       name: '提现审核',
  //         //       path: '/withdraw/withdrawList',
  //         //       // component: './withdraw/withdrawList',
  //         //       permissions: '20',
  //         //     },
  //         //   ],
  //         // },

  //         // {
  //         //   name:'内容管理',
  //         //   path:'/stream',
  //         //   component:'../layouts/NavLayout',
  //         //   permissions: '18',
  //         //   routes:[
  //         //     {
  //         //       breadcrumb: '回放列表',
  //         //       name: '回放列表',
  //         //       path: '/stream/streamList/recordingList',
  //         //       hideInMenu:true,
  //         //       // component: './stream/component/recordingList',
  //         //     },

  //         //     {
  //         //       breadcrumb: '添加视频',
  //         //       name: '添加视频',
  //         //       path: '/stream/streamList/videoList/addVideo',
  //         //       hideInMenu:true,
  //         //       // component: './stream/component/addOrEditVideo',
  //         //       acceptedQueries: ['id','liveUuid'],
  //         //     },
  //         //     {
  //         //       breadcrumb: '编辑视频',
  //         //       name: '编辑视频',
  //         //       path: '/stream/streamList/videoList/editVideo',
  //         //       hideInMenu:true,
  //         //       // component: './stream/component/addOrEditVideo',
  //         //       acceptedQueries: ['id','liveUuid'],
  //         //     },
  //         //     {
  //         //       breadcrumb: '视频列表',
  //         //       name: '视频列表',
  //         //       path: '/stream/streamList/videoList',
  //         //       hideInMenu:true,
  //         //       // component: './stream/component/videosList',
  //         //       acceptedQueries: ['liveUuid'],
  //         //     },

  //         //     {
  //         //       breadcrumb: '添加直播',
  //         //       name: '添加直播',
  //         //       path: '/stream/streamList/addStream',
  //         //       hideInMenu:true,
  //         //       // component: './stream/component/addOrEditStream',
  //         //       permissions: '18-01-03',
  //         //     },
  //         //     {
  //         //       breadcrumb: '编辑直播',
  //         //       name: '编辑直播',
  //         //       path: '/stream/streamList/editStream',
  //         //       hideInMenu:true,
  //         //       // component: './stream/component/addOrEditStream',
  //         //       permissions: '18-01-04',
  //         //     },
  //         //     {
  //         //       name:'直播列表',
  //         //       breadcrumb:'直播列表',
  //         //       path:'/stream/streamList',
  //         //       // component:'./stream/streamList',
  //         //       permissions: '18-01',
  //         //     },
  //         //     {
  //         //       name:'编辑分类',
  //         //       breadcrumb:'编辑分类',
  //         //       path:'/stream/streamType/streamEdit',
  //         //       // component:'./stream/component/addOrEditStreamType',
  //         //       hideInMenu: true,
  //         //     },
  //         //     {
  //         //       name:'添加分类',
  //         //       breadcrumb:'添加分类',
  //         //       path:'/stream/streamType/streamAdd',
  //         //       // component:'./stream/component/addOrEditStreamType',
  //         //       hideInMenu: true,
  //         //     },
  //         //     {
  //         //       name:'分类设置',
  //         //       breadcrumb: '分类设置',
  //         //       path:'/stream/streamType',
  //         //       // component:'./stream/streamType',
  //         //       permissions: '18-04',
  //         //     },
  //         //     {
  //         //       name:'banner添加',
  //         //       breadcrumb:'banner添加',
  //         //       path:'/stream/banner/add',
  //         //       // component:'./stream/component/addOrEditBanner',
  //         //       hideInMenu: true,
  //         //     },
  //         //     {
  //         //       name:'banner编辑',
  //         //       breadcrumb: 'banner编辑',
  //         //       path:'/stream/banner/edit',
  //         //       // component:'./stream/component/addOrEditBanner',
  //         //       hideInMenu:true,
  //         //     },
  //         //     {
  //         //       name:'banner管理',
  //         //       breadcrumb:'banner管理',
  //         //       path:'/stream/banner',
  //         //       // component:'./stream/bannerList',
  //         //       permissions: '18-03',
  //         //     },

  //         //     {
  //         //       name:'添加视频课程',
  //         //       breadcrumb: '添加视频课程',
  //         //       path:'/stream/courseVideosList/add',
  //         //       // component:'./stream/component/addOrEditCourseVideo',
  //         //       hideInMenu:true,
  //         //       permissions: '18-02-01',
  //         //     },
  //         //     {
  //         //       name:'编辑视频课程',
  //         //       breadcrumb: '编辑视频课程',
  //         //       path:'/stream/courseVideosList/edit',
  //         //       // component:'./stream/component/addOrEditCourseVideo',
  //         //       hideInMenu:true,
  //         //       permissions: '18-02-02',
  //         //     },
  //         //     {
  //         //       name:'视频课程列表',
  //         //       breadcrumb:'视频课程列表',
  //         //       path:'/stream/courseVideosList',
  //         //       // component:'./stream/courseVideosList',
  //         //       permissions: '18-02',
  //         //     },
  //         //   ]
  //         // },

  //         {
  //           name: '设置',
  //           path: '/setting',
  //           permissions: ['15', '16'],
  //           routes: [
  //             {
  //               name: '团队管理',
  //               path: '/setting',
  //               component: '../layouts/TabLayout',
  //               permissions: ['15', '16'],
  //               breadcrumb: '成员管理',
  //               routes: [
  //                 {
  //                   hideInMenu: true,
  //                   showInTab: true,
  //                   activeTab: '/setting/member',
  //                   name: '成员管理',
  //                   path: '/setting/member',
  //                   // component: './setting/member',
  //                   breadcrumb: '成员管理',
  //                   permissions: '15-01',
  //                 },
  //                 {
  //                   activeTab: '/setting/member',
  //                   hideInMenu: true,
  //                   name: '员工信息',
  //                   path: '/setting/member/edit',
  //                   // component: './setting/member/editMember',
  //                   // permissions: '13-01-03',
  //                   breadcrumb: '员工信息',
  //                   permissions: ['15-01-01', '15-01-03'],
  //                 },
  //                 {
  //                   showInTab: true,
  //                   hideInMenu: true,
  //                   activeTab: '/setting/role',
  //                   name: '角色管理',
  //                   path: '/setting/role',
  //                   // component: './setting/role',
  //                   breadcrumb: '角色管理',
  //                   permissions: '15-02',
  //                 },
  //                 {
  //                   activeTab: '/setting/role',
  //                   hideInMenu: true,
  //                   name: '角色详情',
  //                   path: '/setting/role/edit',
  //                   // component: './setting/role/edit',
  //                   breadcrumb: '角色管理',
  //                   permissions: ['15-02-01', '15-02-02'],
  //                 },
  //               ],
  //             },
  //           ],
  //         },
  //         // {
  //         //   name: 'App更新管理',
  //         //   path: '/appSetting',
  //         //   // component: './appSetting/appSetting',
  //         //   permissions: '19',
  //         //   breadcrumb: '添加',
  //         // },

  //         {
  //           path: '/',
  //           // component: '../layouts/components/AutoRedirect',
  //         },
  //       ],
  //     },
  //     {
  //       // component: './404',
  //     },
  //   ],
  // },

  {
    // component: './404',
  },
];
