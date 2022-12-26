<script setup>
import { computed,ref,reactive } from "vue";

const msg = ref("hahah")

//对象,如果全部属性都是响应式，那么推荐用 reactive
const obj = ref({
  name:"tommyboy",
  age:20
})

//对象，如果不是全部属性都要响应式，则
const obj2 = {
  name: "tom",
  age: ref(19)  //只暴露需要响应式的属性
}

// 这个时候在template里不能直接访问，需要 obj2.age.value 才能访问
// 或者使用这种方法：
const { age } = obj2


function changeMsg() {
  // ref要写.value!
  msg.value = "hihihi!"
}

//computed计算属性
const appendMsg = computed(() => {
  //不需要使用this，可以使用箭头函数了
  return msg.value+"== news arrived"
})

</script>



<template>
  <!-- ref在模版里会自动解包 -->
  <h1>{{ msg }}</h1>
  <button @click="changeMsg">click me!</button>
  <hr>
  <h2>{{ obj.name }}</h2>
  <h2>{{ obj.age }}</h2>
  <hr>
  <h2>{{ age }}</h2>
  <hr>
  <h2>{{ appendMsg }}</h2>  
</template>
