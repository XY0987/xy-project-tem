import { REACTURL, RNURL } from '../config/downloadUrl';
import { projectType } from '../types/createProjectTypes';

// 将项目类型全部变成大写来匹配
export function getTemDownUrl(projectType: projectType) {
  switch (projectType) {
    case 'react':
      return REACTURL;
    case 'vue':
      return;
    case 'electron-react':
      return;
    case 'electron-vue':
      return;
    case 'next':
      return;
    case 'nuxt':
      return;
    case 'reactnative':
      return RNURL;
    case 'nestjs':
      return;
    case 'koa':
      return;
    default:
      return REACTURL;
  }
}
