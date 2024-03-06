import { defineConfig } from 'umi';
import all from './config/routes';
import proxy from './config/proxy';
import path from 'path';
import { resolve, join } from 'path';

import openAPI from './config/openAPI';

const { REACT_APP_ENV } = process.env;
const permission = require('./loader/permission-hoc-loader.js');

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  dynamicImport: {
    loading: '@/components/PageLoading/index',
  },
  // antd: {
  //   disableBabelPluginImport: true,
  // },
  theme: {
    'root-entry-name': 'variable',
  },

  dva: {
    hmr: true,
    skipModelValidate: true,
    // disableModelsReExport: true,
    // lazyLoad: true,
  },
  define: {
    // 'process.env': {
    //   REACT_APP_ENV: REACT_APP_ENV, //1
    // },
    REACT_APP_ENV: REACT_APP_ENV, //2
    // ...process.env, //3
  },
  // proxy: proxy,
  // routes: all,
  routes: [
    {
      path: '/',
      // exact: true,
      component: '@/layouts/LeftSideBasicLayout',
      routes: [
        {
          // name: 'app2', // 独一无二名称
          path: '/app2',
          microApp: 'app2',
          permissions: '11',
          hideInMenu: true,
        },
        {
          path: '/test',
          component: '../layouts/NavLayout',
          name: 'test',
          breadcrumb: 'test',
          // hideInMenu: true,
          access: 'canReadPageA',
          permissions: '11',
          routes: [
            {
              path: '/test',
              component: '@/pages/test',
              name: 'test详情',
            },
          ],
        },
        {
          path: '/list',
          component: '../layouts/NavLayout',
          name: '虚拟列表1',
          breadcrumb: '虚拟列表2',
          access: 'canReadPageA',
          routes: [
            {
              path: '/list',
              component: '@/pages/list',
              name: '虚拟列表3',
            },
          ],
        },
        {
          path: '/form',
          component: '../layouts/NavLayout',
          name: 'form',
          access: 'canReadPageA',
          routes: [
            {
              path: '/form',
              component: '@/pages/form',
              name: 'form',
            },
          ],
        },
        {
          path: '/rotation',
          component: '../layouts/NavLayout',
          breadcrumb: '轮播&手写bind',
          routes: [
            {
              path: '/rotation',
              component: '@/pages/rotation',
              name: '轮播&手写bind',
            },
          ],
        },
        {
          path: '/Carousel',
          component: '../layouts/NavLayout',
          breadcrumb: '旋转木马',
          routes: [
            {
              path: '/Carousel',
              component: '@/pages/Carousel/demo1',
              name: '旋转木马',
            },
          ],
        },
        {
          path: '/canvas',
          component: '../layouts/NavLayout',
          name: 'canvas',
          breadcrumb: 'canvas',
          access: 'canReadPageA',
          routes: [
            {
              path: '/canvas',
              component: '@/pages/canvas',
              name: 'canvas',
            },
          ],
        },
        {
          path: '/cssOmit',
          component: '../layouts/NavLayout',
          name: 'cssOmit',
          breadcrumb: 'cssOmit',
          access: 'canReadPageA',
          permissions: '123',
          routes: [
            {
              path: '/cssOmit',
              component: '@/pages/cssOmit',
              permissions: '123-1',
              name: 'cssOmit',
            },
          ],
        },
        {
          path: '/waterfall',
          component: '../layouts/NavLayout',
          name: 'waterfall',
          breadcrumb: '瀑布流',
          access: 'canReadPageA',
          routes: [
            {
              path: '/waterfall',
              component: '@/pages/waterfall',
              name: '瀑布流',
            },
          ],
        },
        {
          path: '/lowCode',
          component: '../layouts/NavLayout',
          name: 'lowCode',
          breadcrumb: '低代码',
          access: 'canReadPageA',
          routes: [
            {
              path: '/lowCode',
              component: '@/pages/lowCode',
              name: '低代码',
            },
          ],
        },
        // {
        //   path: '/pp/list/detail',
        //   component: '../layouts/NavLayout',
        //   name: '产品详情',
        //   breadcrumb: '产品详情',
        //   hideInMenu: true,
        //   routes: [
        //     {
        //       path: '/pp/list/detail',
        //       component: '@/pages/users',
        //       name: '产品详情1',
        //     },
        //   ],
        // },

        // {
        //   path: '/pp/list/add',
        //   component: '../layouts/NavLayout',
        //   name: '产品添加',
        //   breadcrumb: '产品添加',
        //   hideInMenu: true,
        // },
        // {
        //   name: '产品列表',
        //   path: '/pp',
        //   breadcrumb: '产品列表',
        //   component: '../layouts/NavLayout',
        //   routes: [
        //     {
        //       path: '/pp/list',
        //       name: '产品列表',
        //       microApp: 'app2',
        //     },
        //   ],
        // },

        // -----------------------------------------------------------------------------------------

        // {
        //   name: '产品列表',
        //   path: '/asd',
        //   breadcrumb: '产品列表',
        //   component: '../layouts/NavLayout',
        //   // access: 'canUser', //以此控制视图是否显示
        //   routes: [
        //     {
        //       path: '/asd/list',
        //       name: '产品列表',
        //       microApp: 'app2',
        //     },
        //   ],
        // },

        // {
        //   path: '/pageA',
        //   component: '../layouts/NavLayout',
        //   name: '我没有权限',
        //   access: 'canReadPageA', // 权限定义返回值的某个 key
        //   routes: [
        //     {
        //       path: '/pageA',
        //       name: '我没有权限',
        //       component: '@/pages/pageA',
        //     },
        //   ],
        // },

        // {
        //   path: '/login',
        //   component: '../layouts/NavLayout',
        //   name: '登录',
        //   // access: 'canReadPageA', // 权限定义返回值的某个 key
        //   routes: [
        //     {
        //       path: '/login',
        //       name: '登录',
        //       component: '@/pages/login',
        //     },
        //   ],
        // },

        // {
        //   path: '/users',
        //   component: '../layouts/NavLayout',
        //   name: '产品详情',
        //   isNavLayout: true,
        //   routes: [
        //    {
        //     path: '/users/1',
        //     component: '@/pages/users',
        //     breadcrumb:'产品详情1',
        //     name: '产品详情1'
        //    }
        //   ]
        // },
      ],
    },

    {
      // exact: true,
      // path: '/',
      // component: require('./src/pages/404').default,
      component: '@/pages/404',
    },
  ],
  qiankun: {
    master: {
      // 注册子应用信息
      apps: [
        {
          name: 'app2', // 唯一 id
          entry: '//localhost:2000', // html entry
        },
      ],
    },
  },
  plugins: [join(__dirname, './config/lib.ts')],
  openAPI: openAPI,
  locale: {
    baseNavigator: true,
    baseSeparator: '-',
  },
  //@ts-ignore
  // proxy: proxy[REACT_APP_ENV || 'dev'],
  // devServer: {
  //   proxy: [
  //     {
  //       context: [''],
  //       target: 'https://review-scm.tmt168.top/',
  //       secure: false,
  //       changeOrigin: true,
  //       // pathRewrite: { '/': '' },
  //     },
  //     {
  //       context: [''],
  //       target: 'https://review-scm.tmt168.top/',
  //       changeOrigin: true,
  //     },
  //   ],
  // },
  fastRefresh: {},
  chainWebpack: (memo, { env, webpack, createCSSRule }) => {
    memo.module
      .rule(permission)
      .test(/\.tsx$/)
      .include.add([
        path.resolve('./src/pages'),
        // path.resolve('./src/components'),
        // path.resolve('./src/layouts'),
      ])
      .end()
      .use(permission)
      .loader(path.join(__dirname, './loader/permission-hoc-loader'));
  },
});
