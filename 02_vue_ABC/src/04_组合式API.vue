<script>
    import { reactive } from 'vue'
    export default {
        //组合式API
        setup(){
            //普通属性，不可修改
            let msg = "this is a msg!"
            
            //响应式属性，可修改
            let stu = reactive({
                name: "tom",
                age: 18,
                gender: "male"
            })

            //使用方法修改响应式属性
            function changeName() {
                stu.name === "tom" 
                ? (stu.name = "jack")
                : (stu.name = "tom")

            }

            //想要在外部访问，return
            return {
                msg,
                stu,
                changeName
            }
        }
    }
</script>

<template>
    <h1>{{ msg }}</h1>
    <hr>
    <h2>{{ stu.name }}</h2>
    <h2>{{ stu.age }}</h2>
    <h2>{{ stu.gender }}</h2>
    <hr>
    <button @click="changeName">change name!</button>
</template>