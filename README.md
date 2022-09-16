## 使用说明
## 框架说明
### 功能处理

- 基本布局 ✅
- 动态导航侧边栏 ✅
- 动态导航面包屑 ✅
- 路由和菜单 ✅
- 权限管理 ✅
  - 菜单权限
    - 在 router.beforeEach
    - 循环菜单时验证
  - 按钮权限
    - 命令式
  - 数据权限（后台）无需处理
- 打包构建 ✅
- 换肤 ✅
### 插件

- @vitejs/plugin-vue-jsx 解析 jsx(只适用于单文件中使用 jsx)
- "@vue/babel-plugin-jsx": "^1.1.1",
- mock 数据
- cross-env 设置环境变量
- vue-router
- pinia
- sass
- ElementPlus
- @element-plus/icons-vue element 的 icon 格外引入
- vite-svg-loader svg 文件
- nprogress Ajax 应用程序的小进度条
- lodash
- dayjs 是一个轻量的处理时间和日期的 JavaScript 库，和 Moment.js 的 API 设计保持完全一样. 如果您曾经用过 Moment.js, 那么您已经知道如何使用 Day.js
- normalize.css 初始化样式

#### 代码规范

- eslint 检查代码质量与风格的工具

  - eslint-config-airbnb-base
  - eslint-config-prettier
  - eslint-plugin-import
  - eslint-plugin-vue

- stylelint 自动书写 css 顺序（目的：减少浏览器的回流。提升浏览器渲染性能）
  - stylelint-config-rational-order
  - stylelint-config-standard
  - stylelint-order
- prettier

  - stylelint-config-prettier
  - eslint-plugin-prettier

- lint-staged 提交代码时，只会对修改的文件进行检查、修复处理，以保证提交的代码没有语法错误，不会影响其他人在更新代码无法运行的问题。（提交时对 eslint、.stylelintrc【暂时损坏，待修复】 做自动修复）
- husky 本地 Git 钩子
- commitlint 规范 commit 信息

#### 打包后的处理

- vite-plugin-compression 支持 gzip 压缩
- rollup-plugin-visualizer 生成打包分析
- vite-plugin-imagemin 图片压缩


