//引入子组件
import MyButton from "./components/MyButton";

//创建一个根组件
export default {
    data() {
        return {
            msg: "c1ick party!",
            count: 0
        }
    },

    //注册子组件
    components: {
        MB: MyButton 
        
        // 可以简写为:
        // MyButton

        // 如果模版写在html里，要用小写命名
        // 推荐写法：
        // my-button: MyButton
    },

    // template再用字符串编写模版
    // 这些会在项目运行的时候，会在浏览器里被编译为js的函数，而且体验很差
    // 为了解决这个问题，Vue为我们提供了一种单文件组件(SFC)
    //  - 单文件组件的格式是Vue
    //  - vue文件必须打包后才可以使用
    //  - 同时Vue在打包时，构建工具会直接将template转换为函数
    // 无需在浏览器里
    template: `
    <h1>{{msg}}</h1>
    <MB>click me!</MB>
    <MB>click me!</MB>
    `

}