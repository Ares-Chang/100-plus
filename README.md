# 100 Plus [![Netlify Status](https://api.netlify.com/api/v1/badges/3e630197-9fbd-4cb9-bd1a-544dd1584268/deploy-status)](https://app.netlify.com/sites/deluxe-croquembouche-23c0ac/deploys)

100+ 个奇思妙想 Idea 的实现仓库

仓库不定期更新，可点击查看平常奇思妙想的 [Idea 需求](https://boardmix.cn/app/share?token=3U93Lpm9PgVZTZqY75R6qhhnYEZDWLo0cwoOdIixqEP8OFDhd9a2XHrtQGn_ApvZk0zWP1SoKQYKJE_qstME3D8M-mG5PISUyEAqd5L5MFM=&inviteCode=Zv3VVt)

## 技术栈

- ⚡️ [Vue 3](https://github.com/vuejs/core), [Vite 3](https://github.com/vitejs/vite), [pnpm](https://pnpm.io/), [ESBuild](https://github.com/evanw/esbuild) - 快快快快！

- 🗂 [基于文件的路由](https://github.com/antfu/vitesse-lite/blob/main/src/pages)

- 📦 [组件自动化加载](https://github.com/antfu/vitesse-lite/blob/main/src/components)

- 🎨 [UnoCSS](https://github.com/unocss/unocss) - 高性能且极具灵活性的即时原子化 CSS 引擎

- 📦 [unplugin-auto-import](https://github.com/antfu/unplugin-auto-import) - 直接使用 Composition API 等，无需导入

- 😃 [各种图标集为你所用](https://github.com/antfu/unocss/tree/main/packages/preset-icons)

- 🔥 使用 [新的 `<script setup>` 语法](https://github.com/vuejs/rfcs/pull/227)

- ✅ 使用 [Vitest](http://vitest.dev/) 进行单元和组件测试

- 🦾 [TypeScript](https://github.com/microsoft/TypeScript), 超强壮

- ☁️ 零配置部署 [Netlify](https://www.netlify.com/)

## 环境

本项目使用 [vitesse-lite](https://github.com/antfu/vitesse-lite) 为起手模板，其他属性可参阅[官方仓库](https://github.com/antfu/vitesse-lite/blob/main/README.zh-CN.md)

运行需具备：

- **Node 环境 >= 14**
- **pnpm 包管理器**
- VSCode 编辑器
- Chrome 浏览器

## 须知

项目使用 `pnpm` 包管理工具，**现已锁定**，请统一使用，防止包加载混乱。

项目使用 `ESLint` 工具约定开发，需提前安装并配置。

## API

项目部分 API 数据由 [Roll API](https://www.mxnzp.com/doc/list) 开放接口免费提供，详情请参考 [https://www.mxnzp.com/doc/list](https://www.mxnzp.com/doc/list)。

> 感谢以上接口开发者的慷慨大义，祝越办越好。

## 现在开始吧!

克隆到本地

```shell
$ git clone https://github.com/Ares-Chang/100-plus.git
$ cd 100-plus
$ pnpm install
$ pnpm run dev
```

**强推一个小工具 [ni](https://github.com/antfu/ni) ，用上之后爱不释手。**

```shell
$ git clone git@github.com:Ares-Chang/100-plus.git
$ cd 100-plus
$ ni
$ nr dev
```
