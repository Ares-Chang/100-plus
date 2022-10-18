# calendar-clock

一个集日历，时钟，待办功能于一体的 Demo(暂时)

## 环境

项目使用 Vue 3 setup 语法糖及 Typescript、UnoCSS 等。

本项目使用 vitesse-lite 为起手模板，其他属性可参阅[官方仓库](https://github.com/antfu/vitesse-lite/blob/main/README.zh-CN.md)

运行需具备：

- **Node 环境 >= 14**
- **pnpm 包管理器**
- VSCode 编辑器
- Chrome 浏览器

## 须知

项目使用 `pnpm` 包管理工具，**现已锁定**，请统一使用，防止包加载混乱。

项目使用 `ESLint` 工具约定开发，请提前安装并配置。

## API

项目部分 API 数据由 [Roll API](https://www.mxnzp.com/doc/list) 开放接口免费提供，详情请参考 [https://www.mxnzp.com/doc/list](https://www.mxnzp.com/doc/list)。

> 感谢以上接口开发者的慷慨大义，祝越办越好。

## 使用

### 开发

```
pnpm dev
```

### 构建

```
pnpm build
```

### 预览

```
pnpm preview
```