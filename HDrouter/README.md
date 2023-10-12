# Vue 3 + Vite

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

##### step 1:
~~~js

 yarn create vite HDrouter --template vue

  cd HDrouter
  yarn
  yarn dev



  yarn add -D sass
  yarn add vue-router@4
~~~


~~~js
// 建立基础路由

//模拟数据  安装2个依赖
yarn add -g json-server
yarn add -D mockjs

// 通过json-server启动db.js文件
json-server --watch --port 3030 --host 127.0.0.1 db.js
~~~