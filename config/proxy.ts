/**
 * 在生产环境 代理是无法生效的，所以这里没有生产环境的配置
 * The agent cannot take effect in the production environment
 * so there is no configuration of the production environment
 * For details, please see
 * https://pro.ant.design/docs/deploy
 */
export default {
  dev: {
    '/admin-api/': {
      target: 'https://devadmin.bullcow.net',
      // target: 'http://192.168.9.142:11007',
      // target: 'http://192.168.8.177:11007',
      // target: '192.168.8.170:11007',
      changeOrigin: true,
      pathRewrite: { '^': '' },
    },
  },
  test: {
    '/admin-api/': {
      target: 'https://devadmin.bullcow.net',
      changeOrigin: true,
      pathRewrite: { '^': '' },
    },
  },
  pre: {
    '/api/': {
      target: 'your pre url',
      changeOrigin: true,
      pathRewrite: { '^': '' },
    },
  },
};
