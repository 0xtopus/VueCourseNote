<script setup>
import { reactive } from 'vue'
let msg = "niubi!"

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