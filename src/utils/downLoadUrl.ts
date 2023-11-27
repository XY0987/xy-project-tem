import { REACTURL, RNURL } from '../config/downloadUrl';
import { projectType } from '../types/createProjectTypes';

export function getTemDownUrl(projectType: projectType) {
  switch (projectType) {
    case 'React':
      return;
    case 'Vue':
      return;
    case 'Electron-react':
      return;
    case 'Electron-vue':
      return;
    case 'Next':
      return;
    case 'Nuxt':
      return;
    case 'ReactNative':
      return RNURL;
    case 'Nestjs':
      return;
    case 'Koa':
      return;
    default:
      return REACTURL;
  }
}
