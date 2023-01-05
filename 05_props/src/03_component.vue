<script setup>

  import { ref } from "vue";

  import A from "./components/A.vue"
  import B from "./components/B.vue"
  const isShow = ref(true)
</script>


<template>
  <!-- 
    使用:
      <component is=""></component>
    指定组件
      可以把is 设置成动态表达式
   -->

   <component is="h1">component ex</component>
   <component is="button" @click="isShow = !isShow">switch</component>
   <!-- <button @click="isShow = !isShow">switch</button> -->
  <component :is="isShow?A:B">is</component>
</template>


<style scoped>

</style>
