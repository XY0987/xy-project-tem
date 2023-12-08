export const createDemosOptions = [
  {
    type: 'input',
    name: 'projectName',
    message: '请输入要创建的项目名称',
    default: 'demo',
  },
  {
    type: 'list',
    name: 'demoType',
    message: '请选择对应demo类型',
    // '音视频直播会议前台', '音视频直播会议后台'
    choices: [
      {
        name: '音视频直播会议前台',
        value: 'meeting-foreground',
      },
      {
        name: '音视频直播会议后台',
        value: 'meeting-backstage',
      },
    ],
  },
];
