## webpack antd react react-router recharts 编译打包优化模板

### 优化点

1. 在webpakc 配制中 react, react-dom, recharts 使用 externals导出，编译时不会在加入编译环节， 大量减少编译时间
1. recharts@1.0.0-beta.1 通过script引用在window对象中找不到Recharts， 所以单独配制*dll.config.js*生成window.Recharts对象
3. antd使用*babel-plugin-import*， 只加载引用过的模块，减少打包体积。