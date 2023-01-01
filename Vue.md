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



1. v-bind
2. v-show



## props

- 父组件可以通过props来向子组件传递数据

  - 注意：父组件传递给子组件的props都是只读的，无法修改

  - 即使可以修改，我们也尽量不要在子组件中去修改父组件的数据

  - 如果非得要改，具体方法后边再讲（自定义事件）

属性名

- 定义属性名时，属性名要遵循驼峰命名法
- 或者使用：`element-name` 这种形式

 

