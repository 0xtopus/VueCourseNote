# Vue

- Vue是一个前端框架
- MVVM：model - view - view model
- Vue负责视图模型（view model）的工作：关联视图模型

## 特点：

- 组件化开发
- 声明式编程

## HelloWorld

1. 直接引入

```javascript
//引入Vue
   <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>

```

2. 使用构建工具vite

   - `yarn add vite -D`

3. 代码：

   ```javascript
   //组件，就是一个普通的js对象
   const app = {
       
   }
   
   //创建应用
   const app = createApp(App)
   
   //挂载
   app.mount("#root")
   
   
   ```

4. 快速创建

   - `npm init vue@latest`
   - `yarn create vue`
   - 之后要记得在创建的项目目录里`yarn`一下安装依赖。



## 模版

````vue
<script setup>

const props = defineProps(["value"])

</script>

<template>
  <h2>MyBox Header</h2>
  <hr>
  <span>{{ props.value }}</span>

</template>

<style scoped>
 *{
    color: #7b3
 }
</style>
````



1. v-bind	 (style绑定动态属性)
2. v-show  （template展示）
2. v-for       （template遍历复制元素）



## props

- 父组件可以通过props来向子组件传递数据

  - 注意：父组件传递给子组件的props都是只读的，无法修改

  - 即使可以修改，我们也尽量不要在子组件中去修改父组件的数据

  - 如果非得要改，具体方法后边再讲（自定义事件）

属性名

- 定义属性名时，属性名要遵循驼峰命名法
- 或者使用：`element-name` 这种形式

 

## 网页的渲染

- 浏览器在渲染网页时：
  1. 加载页面html和css；
  2. html转换为DOM，css转换为CSSOM
  3. 将DOM和CSSOM构建成渲染树（render tree）
  4. 对渲染树进行reflow（重排、回流）（计算元素的位置
  5. 对网页进行repaint(重绘)
- 渲染树 / render tree：
  - 从根元素开始检查哪些元素可见，以及它们的样式
  - 忽略不可见的元素，比如：display：none
  - 但是display：hidden是会进入渲染树的；
- reflow / 重排 / 回流
  - 计算渲染树里元素的大小和位置
- repaint / 重绘
  - 绘制页面
