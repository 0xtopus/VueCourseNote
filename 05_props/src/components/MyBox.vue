<script setup>

// const props = defineProps(["value"])

/* 
  还可以用对象的方式声明prop
  规定数据的类型
*/
const props2 = defineProps({
  title: String,
  likes: Number,
  isTrue: Boolean,
  maxLength:{
    type: String,
    required: true, //必须要有这个属性
    default: "设置默认值",
    validator(value){
      return ['success', "fail", "1233"].includes(value)
    }
  }
})

console.log(props2.isTrue, props2.title);
</script>

<template>
  <h2>MyBox Header</h2>
  <hr>
  <span>{{ props2.title }}</span>
  
</template>

<style scoped>
 *{
    color: #7b3
 }
</style>
