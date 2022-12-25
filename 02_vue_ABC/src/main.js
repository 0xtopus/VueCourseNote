import { createApp } from 'vue'
import App from './App.vue'

/* 
    App.vue是根组件
        - createApp(App) 将根组件关联到应用
            - 会返回一个应用实例

        - app.amount("#app") 
            将应用挂载到页面里
                - 会返回一个根组件实例，可以命名为vm
                - 组件实例是一个proxy对象
                - 在App.vue里，data方法的this就是这个proxy对象
*/
const vm = createApp(App).mount('#app')
