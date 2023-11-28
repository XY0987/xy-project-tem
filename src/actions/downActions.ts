import { prompt } from 'inquirer';
import { projectType } from '../types/createProjectTypes';
import { createProjectOptions } from '../options/createProject';

import { downloadProject, parseCmdAbb } from '../utils/createProjectUtil';

export async function create() {
  prompt(createProjectOptions).then(
    async (res: { projectName: string; frameType: projectType }) => {
      await downloadProject(res.projectName, res.frameType);
    },
  );
}

export async function createCmd(value: any) {
  console.log(222);
  const obj: any = parseCmdAbb(value);
  const { t, n } = obj;
  downloadProject(n, t);
}
