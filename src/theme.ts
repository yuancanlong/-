// import { getUrlParams } from '@/utils/utils';
import { ConfigProvider } from 'antd';
export let primaryColor = '#ff6a00BF';
export let primaryColor5 = '#ff6a000d';
export let primaryColor15 = '#ff6a0026';
export let primaryColor75 = '#ff6a00BF';

export function setupTheme() {
  //   const params = getUrlParams() as any;
  //   if (params?.primaryColor) {
  //     primaryColor = `#${params?.primaryColor.toLocaleLowerCase()}`;
  //     primaryColor5 = `${primaryColor}0d`;
  //     primaryColor15 = `${primaryColor}25`;
  //     primaryColor75 = `${primaryColor}BF`;
  //   }

  ConfigProvider.config({
    theme: { primaryColor: '#ff6a00BF' },
  });

  document.body.style?.setProperty('--custom', primaryColor);
  document.body.style?.setProperty('--custom-5', primaryColor5);
  document.body.style?.setProperty('--custom-15', primaryColor15);
  document.body.style?.setProperty('--custom-75', primaryColor75);
}
