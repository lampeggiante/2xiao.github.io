---
home: true
icon: home
title: LeetCode-JS
heroImage: assets/image/logo.png
bgImage: https://theme-hope-assets.vuejs.press/bg/6-light.svg
bgImageDark: https://theme-hope-assets.vuejs.press/bg/6-dark.svg
bgImageStyle:
  background-attachment: fixed
heroText: LeetCode-JS
# heroFullScreen: true
tagline: LeetCode 算法 + 框架源码 + 前端八股文 = Offer
actions:
  - text: 🧭 LeetCode 通关指南
    link: https://2xiao.github.io/leetcode-js/
    type: primary

  - text: 🍭 React 源码
    link: ./my-react/

  - text: 🤡 Vue 源码
    link: ./my-vue/

  - text: 🔥 前端面试题
    link: ./interview/

highlights:
  - header: LeetCode 通关指南
    image: assets/image/leetcode-js-logo.png
    bgImage: https://theme-hope-assets.vuejs.press/bg/6-light.svg
    bgImageDark: https://theme-hope-assets.vuejs.press/bg/6-dark.svg
    highlights:
      - title: LeetCode 题解
        icon: code
        details: 手把手带你完成 1000 道算法题，给出详细的解题思路、复杂度分析和代码
        link: https://2xiao.github.io/leetcode-js/problem/

      - title: 剑指 Offer
        icon: hot
        details: 《剑指 Offer（第 2 版）》真题详解
        link: https://2xiao.github.io/leetcode-js/offer/

      - title: 剑指 Offer II
        icon: ability
        details: 《剑指 Offer（专项突破）》真题详解
        link: https://2xiao.github.io/leetcode-js/offer2/

      - title: 程序员面试金典
        icon: keyboard
        details: 《程序员面试金典（第 6 版）》真题详解
        link: https://2xiao.github.io/leetcode-js/interview/

      - title: 算法笔记
        icon: note
        details: 把所有常见算法技巧都总结成框架模板，致力于把算法讲清楚
        link: https://2xiao.github.io/leetcode-js/book/intro

      - title: 专项训练
        icon: strong
        details: 面试前必刷的高频题，迅速练出肌肉记忆，掌握算法
        link: https://2xiao.github.io/leetcode-js/plan/

  - header: 手写 React 源码
    description: 深入理解 React 源码，带你从零实现 React v18 的核心功能，构建自己的 React 库。
    image: assets/image/react-logo.png
    bgImage: https://theme-hope-assets.vuejs.press/bg/7-light.svg
    bgImageDark: https://theme-hope-assets.vuejs.press/bg/7-dark.svg
    bgImageStyle:
      opacity: 0.3
    highlights:
      - title: 基础框架与 JSX
        icon: navbar
        details: 搭建项目框架，手写 JSX 的解析与转换，理解模块化开发
        link: ./my-react/1.md

      - title: Reconciler 与更新机制
        icon: loop
        details: 手写 Reconciler 的实现原理，深入理解 React 的更新机制及单节点更新优化
        link: ./my-react/3.md

      - title: Render 与 Commit 流程
        icon: tree
        details: 理解 Render 和 Commit 阶段的处理，掌握虚拟 DOM 的创建与更新
        link: ./my-react/5.md

      - title: Hook 实现与事件系统
        icon: line
        details: 手写 useState、useEffect 等核心 Hook，深入了解事件处理机制
        link: ./my-react/8.md

      - title: Diff 算法与同步调度流程
        icon: sort
        details: 探索 Diff 算法及 Fragment 的实现，学习同步调度流程和 Noop Renderer
        link: ./my-react/12.md

  - header: 手写 Vue 源码
    description: 深入理解 Vue 源码，带你从零实现 Vue 3.4 的核心功能，构建自己的 Vue 库
    image: assets/image/vue-logo.png
    bgImage: https://theme-hope-assets.vuejs.press/bg/4-light.svg
    bgImageDark: https://theme-hope-assets.vuejs.press/bg/4-dark.svg
    highlights:
      - title: 响应式原理
        icon: sidebar
        details: 手写 Vue3 响应式原理，包括 reactive、effect、watch、computed、ref 等核心 API
        link: ./my-vue/3.md

      - title: 渲染原理
        icon: flow
        details: 深入理解自定义渲染器原理及在 Runtime DOM 中的属性和事件处理方法
        link: ./my-vue/8.md

      - title: Diff 算法原理
        icon: compare
        details: 探索虚拟 DOM 的概念，手写 Vue3 中的 Diff 算法以及最长递增子序列实现原理
        link: ./my-vue/10.md

      - title: 组件渲染原理
        icon: plugin
        details: 手写 Vue3 组件的实现原理，深入理解组件的渲染、挂载流程，以及异步渲染的机制
        link: ./my-vue/11.md

      - title: 模板编译原理
        icon: condition
        details: 学习编译优化技巧，掌握解析器、AST 语法树的优化、代码生成原理
        link: ./my-vue/21.md

  - header: 前端面试题
    description: 常见的前端面试题梳理，提炼分析面试难点，助你系统备战，收割 Offer
    bgImage: https://theme-hope-assets.vuejs.press/bg/2-light.svg
    bgImageDark: https://theme-hope-assets.vuejs.press/bg/2-dark.svg
    features:
      - title: JavaScript 相关
        icon: javascript
        link: ./interview/js/

      - title: HTML 相关
        icon: html
        link: ./interview/html/

      - title: CSS 相关
        icon: css
        link: ./interview/css/

      - title: HTTP 相关
        icon: http
        link: ./interview/http/

      - title: NodeJS 相关
        icon: nodeJS
        link: ./interview/nodejs/

      - title: React 相关
        icon: react
        link: ./interview/react/

      - title: Vue 相关
        icon: vue
        link: ./interview/vue/

      - title: Webpack 相关
        icon: box
        link: ./interview/webpack/

      - title: 版本管理
        icon: git
        link: ./interview/git/

      - title: 前端监控
        icon: router
        link: ./interview/engineering/

      - title: 数据结构与算法
        icon: code
        link: https://2xiao.github.io/leetcode-js/

      - title: 系统设计
        icon: structure
        link: ./interview/system_design/

      - title: 行为面试
        icon: people
        link: ./interview/behavior/

      - title: 最新技术趋势
        icon: rank
        link: ./interview/trend/
---
