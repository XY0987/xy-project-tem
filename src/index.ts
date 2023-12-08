#!/usr/bin/env node

import { createUtils } from './actions/utilsActions';
import { createDemo } from './actions/createDemos';
import { create, createCmd } from './actions/downActions';
const program = require('commander');

program.command('create').description('创建项目交互方式').action(create);
program
  .command('c')
  .description('命令行方式创建项目,-t 项目类型 -n 项目名称')
  .option('-type , -t <type>', '项目类型', 'react')
  .option('-name , -n <name>', '项目名称', 'react_test')
  .action(createCmd);

program.command('demo').description('创建对应的demo').action(createDemo);

program.command('utils').description('创建对应的工具').action(createUtils);

program.parse(process.argv);

/* 
初始化项目包括:
    1. react+ts
    2. vue2
    3. vue3+ts
    4. electron+react
    5. electron+vue
    6. RN
    7. nestjs
工具包括：
    1. 封装的工具
    2. 后台页面模板
    3. 无限滚动
    4. 音视频直播
    5. 瀑布流
    6. 动态表单
demo项目查看
    1. 音视频直播会议前台
    2. 音视频支部会议后台
*/
