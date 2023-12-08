import path = require('path');
import chalk = require('chalk');
import ora = require('ora');
import { executeShell } from './shellUtil';
// import { removeDir } from './fsUtil';

const { promisify } = require('util');
const download = promisify(require('download-git-repo'));

// 将命令行输入参数全部转换为只包含首字母小写和首字母
export function parseCmdAbb(value: Object) {
  const obj = {};
  for (let key in value) {
    const newKey = key.slice(0, 1).toLocaleLowerCase();
    obj[newKey] = value[key];
  }
  return obj;
}
// clone项目
export async function downloadProject(projectName: string, url: string) {
  const loading = ora(chalk.yellowBright('下载中'));
  loading.start();
  const projectPath = path.join(process.cwd(), projectName);
  try {
    await download(url, projectPath, {
      clone: true,
    });
    loading.succeed(chalk.green('下载成功'));
    // 初始化git仓库
    executeShell([`cd ${projectPath}`, 'git init']);
  } catch (error) {
    loading.fail(chalk.red('操作失败'));
    console.log(error);
  }
}
