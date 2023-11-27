import path = require('path');
import { projectType } from '../types/createProjectTypes';
import { createProjectOptions } from '../options/createProject';
import { prompt } from 'inquirer';
import { getTemDownUrl } from 'utils/downLoadUrl';
const { promisify } = require('util');
const download = promisify(require('download-git-repo'));

export async function create() {
  prompt(createProjectOptions).then(
    async (res: { projectName: string; frameType: projectType }) => {
      const url = getTemDownUrl(res.frameType);
      try {
        await download(url, path.join(process.cwd(), res.projectName), {
          clone: true,
        });
      } catch (error) {
        console.log(error);
      }
    },
  );
}
