<script setup>
import { reactive, ref } from 'vue'

//去警告
import { $ref } from "vue/macros";


/* 
  reactive()
    - 返回一个对象的响应式代理
    - 返回一个深层响应式对象
    - 也可以使用shallowReactive()创建浅层响应对象
    - 缺点：
        - 只能返回对象的响应式代理

  ref()
    - 接收任意值，返回响应式代理
    - 原理：
        - 把值包装为对象 { value:值 }
        访问它： xxx.value

        所以在script里面要写成：xxx.value.count = ...
        但是在template里面可以直接写成：{{count}}

        - 同样的，
          ref({ name:"tom",age:18 })
        实际上是：
            {value:{ name:"tom", age:18}}



*/
//使用语法糖可以使ref在script里自动解包： $ref()
//但是还处于实验阶段，需要在vite里配置一下: reactivityTransform:true
// let count = ref(0)
let count = $ref(0)
console.log(count,"count print test succeeds");
//count = 10   //在js里，改变量只会影响到变量自己，无法对变量进行代理

function add() {
  count.value++
}

</script>

<template>

  <h2>{{ count }}</h2>
  <hr>
  <button @click="add()">add!</button>
</template>