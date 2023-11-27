#!/usr/bin/env node

import { create } from './actions/downActions';
import { program } from 'commander';

program.option('create', '创建项目').action(create);
program.parse(process.argv);

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
