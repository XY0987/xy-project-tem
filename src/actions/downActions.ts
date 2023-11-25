import path = require('path');
import { REACTURL, RNURL } from '../config/downloadUrl';
import { download } from 'download-git-repo';
const { promisify } = require('util');
const download = promisify(require('download-git-repo'));
function getUrl(projectType) {
  switch (projectType) {
    case 'RN':
      return RNURL;
    default:
      return REACTURL;
  }
}

export async function create(project) {
  const { create } = project;
  //默认下载react模板
  const url = getUrl(create[0]);
  try {
    await download(url, path.join(process.cwd(), create[1]), {
      clone: true,
    });
  } catch (error) {
    console.log(error);
  }
}
