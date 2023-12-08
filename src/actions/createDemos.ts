import { prompt } from 'inquirer';
import { createDemosOptions } from '../options/createDemos';
import { demoType } from '../types/createDemoTypes';
import { getDemoDownUrl } from '../utils/downLoadUrl';
import { downloadProject } from '../utils/createProjectUtil';

export async function createDemo() {
  prompt(createDemosOptions).then(
    async (res: { projectName: string; demoType: demoType }) => {
      const url = getDemoDownUrl(res.demoType);
      await downloadProject(res.projectName, url);
    },
  );
}
