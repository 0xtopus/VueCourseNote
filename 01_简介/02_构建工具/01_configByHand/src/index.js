// 引入Vue
//runtime-core.esm-bundler.js:40 [Vue warn]: 
//Component provided template option but runtime compilation is not supported in this build of Vue. 
//Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js". 

//import {createApp} from "vue"

import {createApp} from "vue/dist/vue.esm-bundler.js"

//create a root_module
const App = {
    data() {
        return {
            message: "hahaha"
        }
    },
    template: "<h1>{{message}}</h1>"
}

//mount app to the page
createApp(App).mount("#app")