import { IApi } from 'umi';
import { join } from 'path';
// import rimraf from 'rimraf';
// import serveStatic from 'serve-static';
import { generateService, getSchema } from '@umijs/openapi';

import { existsSync, mkdirSync, writeFileSync } from 'fs';

export default function (api: IApi) {
  // 修改html
  //   api.modifyHTML(($) => {
  //     $('body').prepend(`<h1>hello umi plugin</h1>`);
  //     return $;
  //   });

  // 描述插件的 id、key、配置信息、启用方式等
  api.describe({
    key: 'openAPI',
    config: {
      schema(joi) {
        return joi.alternatives(
          joi.array().items(
            joi.object({
              requestLibPath: joi.string(),
              schemaPath: joi.string(),
              mock: joi.boolean(),
              hook: joi.object(),
              projectName: joi.string(),
            }),
          ),
          joi.object({
            requestLibPath: joi.string(),
            schemaPath: joi.string(),
            mock: joi.boolean(),
            projectName: joi.string(),
          }),
        );
      },
    },
    enableBy: api.EnableBy.config,
  });

  const genAllFiles = async (openAPIConfig: any) => {
    const pageConfig = require(join(api.cwd, 'package.json'));
    const mockFolder = openAPIConfig.mock ? join(api.cwd, 'mock') : undefined;
    const serversFolder = join(api.cwd, 'src', 'services');
    // 如果mock 文件不存在，创建一下
    if (mockFolder && !existsSync(mockFolder)) {
      mkdirSync(mockFolder);
    }
    // 如果mock 文件不存在，创建一下
    if (serversFolder && !existsSync(serversFolder)) {
      mkdirSync(serversFolder);
    }
    await generateService({
      projectName: pageConfig.name,
      ...openAPIConfig,
      serversPath: serversFolder,
      namespace: openAPIConfig.projectName.toUpperCase(),
      mockFolder,
    });
  };
  api.registerCommand({
    name: 'openapi',
    fn: async () => {
      const openAPIConfig = api.config.openAPI;
      if (Array.isArray(openAPIConfig)) {
        openAPIConfig.map((item) => genAllFiles(item));
        return;
      }
      genAllFiles(openAPIConfig);
    },
  });
}
