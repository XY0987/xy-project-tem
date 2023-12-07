import {
  ELECTRONREACTURL,
  ELECTRONVUEURL,
  NUXTURL,
  REACTURL,
  RNURL,
  VUE2URL,
} from '../config/downloadUrl';
import { projectType } from '../types/createProjectTypes';

// 将项目类型全部变成大写来匹配
export function getTemDownUrl(projectType: projectType) {
  switch (projectType) {
    case 'react':
      return REACTURL;
    case 'vue2':
      return VUE2URL;
    case 'electron-react':
      return ELECTRONREACTURL;
    case 'electron-vue':
      return ELECTRONVUEURL;
    case 'next':
      return;
    case 'nuxt':
      return NUXTURL;
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
