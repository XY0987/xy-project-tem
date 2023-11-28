import path = require('path');
import { projectType } from '../types/createProjectTypes';
import { createProjectOptions } from '../options/createProject';
import { prompt } from 'inquirer';
import { getTemDownUrl } from '../utils/downLoadUrl';
import chalk = require('chalk');
import ora = require('ora');
const { promisify } = require('util');
const download = promisify(require('download-git-repo'));

async function downloadProject(projectName: string, frameType: projectType) {
  frameType = frameType.toLocaleLowerCase() as projectType;
  const url = getTemDownUrl(frameType);
  const loading = ora(chalk.yellowBright('下载中'));
  loading.start();
  try {
    await download(url, path.join(process.cwd(), projectName), {
      clone: true,
    });
    loading.succeed('下载成功');
  } catch (error) {
    loading.fail('下载失败');
    console.log(error);
  }
}

export async function create() {
  prompt(createProjectOptions).then(
    async (res: { projectName: string; frameType: projectType }) => {
      await downloadProject(res.projectName, res.frameType);
    },
  );
}

function parseCmdAbb(value: Object) {
  const obj = {};
  for (let key in value) {
    const newKey = key.slice(0, 1).toLocaleLowerCase();
    obj[newKey] = value[key];
  }
  return obj;
}

export async function createCmd(value: any) {
  const obj: any = parseCmdAbb(value);
  console.log(obj);
  const { t, n } = obj;
  downloadProject(n, t);
}
