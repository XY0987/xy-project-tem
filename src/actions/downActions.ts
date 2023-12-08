import { prompt } from 'inquirer';
import { projectType } from '../types/createProjectTypes';
import { createProjectOptions } from '../options/createProject';

import { downloadProject, parseCmdAbb } from '../utils/createProjectUtil';
import { getTemDownUrl } from '../utils/downLoadUrl';

export async function create() {
  prompt(createProjectOptions).then(
    async (res: { projectName: string; frameType: projectType }) => {
      const frameType = res.frameType.toLocaleLowerCase() as projectType;
      const url = getTemDownUrl(frameType);
      await downloadProject(res.projectName, url);
    },
  );
}

export async function createCmd(value: any) {
  const obj: any = parseCmdAbb(value);
  const { t, n } = obj;
  downloadProject(n, t);
}
