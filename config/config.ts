// https://umijs.org/config/
import { defineConfig } from 'umi';
import defaultSettings from './defaultSettings';
import proxy from './proxy';
import routes from './routes';
import path from 'path';

const { REACT_APP_ENV } = process.env;

export default {
  base: '/',
  publicPath: '/',
  hash: true,
  antd: {},
  dva: {
    hmr: true,
    skipModelValidate: true,
  },
  history: {
    type: 'browser',
  },
  locale: {
    // default zh-CN
    default: 'zh-CN',
    antd: true,
    // default true, when it is true, will use `navigator.language` overwrite default
    baseNavigator: true,
  },
  // dynamicImport: {
  //   loading: '../src/components/PageLoading/index',
  // },
  targets: {
    ie: 11,
  },
  // umi routes: https://umijs.org/docs/routing
  routes,
  // Theme for antd: https://ant.design/docs/react/customize-theme-cn
  theme: {
    'primary-color': defaultSettings.primaryColor,
  },
  title: false,
  ignoreMomentLocale: true,
  // proxy: proxy[REACT_APP_ENV || 'dev'],
  // proxy: 'dev',
  // manifest: {
  //   basePath: '/manage',
  // },

  qiankun: {
    master: {
      app: [
        {
          name: 'app2', // 唯一 id
          entry: '//localhost:2000', // html entry
        },
      ],
      // sandbox: { experimentalStyleIsolation: true },
    },
  },
  // esbuild: {},
  // chainWebpack: (memo, {
  //   env,
  //   webpack,
  //   createCSSRule
  // }) => {
  //   memo.module.rule('permission-hoc-loader')
  //     .test(/\.tsx$/)
  //     .include
  //     .add([path.resolve('./src/pages'), path.resolve('./src/components'), path.resolve('./src/layouts')])
  //     .end()
  //     .use('../loader/permission-hoc-loader')
  //     .loader(path.join(__dirname, '../loader/permission-hoc-loader'))
  // }
};
