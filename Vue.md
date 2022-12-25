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
   - 

