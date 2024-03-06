import { Settings as ProSettings } from '@ant-design/pro-layout';

type DefaultSettings = Partial<ProSettings> & {
  pwa: boolean;
};

const proSettings: DefaultSettings = {
  navTheme: 'light',
  // 拂晓蓝
  primaryColor: '#0e7bfe',
  layout: 'side',
  contentWidth: 'Fluid',
  fixedHeader: true,
  fixSiderbar: true,
  colorWeak: false,
  menu: {
    locale: false,
  },
  title: '牧牛生态',
  pwa: false,
  iconfontUrl: '',
  siderWidth: 240,
};

export type { DefaultSettings };

export default proSettings;
