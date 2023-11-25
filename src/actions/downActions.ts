// import { RNURL } from '../config/downloadUrl';
// import { promisify } from 'util';

// function getUrl(projectType) {
//   return RNURL;
// }

// const download = promisify(require('download-git-repo'));
export function create(project) {
  console.log(project);
  //   //默认下载react模板
  //   const url = getUrl(project);
  //   try {
  //     await download(url, project, { clone: true });
  //     // 判断是否执行下载命令
  //   } catch (error) {
  //     console.log(error);
  //     console.log('github 连接失败,请稍后重试');
  //   }
}
