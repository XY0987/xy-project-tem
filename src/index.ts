#!/usr/bin/env node

/* 
初始化项目包括:
    1. react+ts
    2. vue2
    3. vue3+ts
    4. electron+react
    5. RN
    6. nestjs
    7. koa
工具包括：
    1. 封装的工具
    2. 后台页面模板
    3. 无限滚动
    4. 音视频直播
    5. 瀑布流
    6. 动态表单
*/
// import { create } from './actions/downActions';
import { createUtils } from './actions/utilsActions';
import { program } from 'commander';
// 设置版本号
program.version(`${require('../package.json').version}`, '-v,--version');

program.option('-n, --name <name>', 'specify a name').action((options) => {
  console.log(`Hello, ${options.name}!`);
});

program
  .option('--c <type>', '下载指定项目模板默认下载react项目模板')
  .action((d) => {
    console.log('111', d);
  });

program
  .option(
    '--tool <type...>',
    '下载工具,第一个参数是项目类型,第二个参数是工具类型,第三个类型是生成工具的存放路径',
  )
  .action(createUtils);

program.parse(process.argv);
