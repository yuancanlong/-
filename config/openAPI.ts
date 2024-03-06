// import { serverURI } from './serverURI';

function createOpenAPI(apiNames: string[]) {
  const configs = apiNames.map((name) => {
    return {
      requestLibPath: "import { request } from 'umi'",
      schemaPath: `https://uat-scm.tmt168.top/web/${name}/v2/api-docs`,
      projectName: name,
      hook: {
        /** 自定义函数名称 */
        customFunctionName: (data: any) => {
          return data.operationId.split('_')[0];
        },
      },
      mock: false,
    };
  });

  return configs;
}

// 只需要在这里增加应用key即可自动扒下对应的swagger文档
const openAPI = createOpenAPI(['base', 'po', 'wms', 'wss', 'pop', 'finance']);

export default openAPI;
