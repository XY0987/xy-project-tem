export const createProjectOptions = [
  {
    type: 'input',
    name: 'projectName',
    message: '请输入要创建的项目名称(ts项目)',
    default: 'demo',
  },
  {
    type: 'list',
    name: 'frameType',
    message: '请选择项目类型',
    choices: [
      'React',
      'Vue2',
      'Electron-react',
      'Electron-vue',
      'ReactNative',
      'Nuxt',
      'Next',
      'Nestjs',
      'Koa',
    ],
  },
];
