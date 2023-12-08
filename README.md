# xy-project-tem

创建项目以及工具的一个脚手架，目的是为了创建项目的时候更加方便

安装
```bash
yarn add @xy0711/xytem -g
```

```bash
yarn add @xy0711/xytem
```
如果没有采用全局安装的方式运行使用命令需要添加**npx**及使用当前文件夹中的node_modules的xytem脚手架来执行该命令

使用
```bash
# 使用交互的方式创建项目模板(每个项目模板都会配置相对应的prettier和gitLint提高项目规范性和项目常用的配置，具体可以看相对应的项目说明文档)
xytem create
```

```bash
# 创建一个demo项目
xytem demo
```
```bash
# 创建对应工具
xytem utils
```