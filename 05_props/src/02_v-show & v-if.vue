<script setup>

  import { ref } from "vue";

  const isShow = ref(true)
</script>


<template>
  <!-- 
    v-show: 修改CSS的display ： 
      性能好一点，但需要对所有组件进行初始化
    
    v-if:   删除/添加元素：     
      性能差一点，但对不显示的可以不初始化

      可以结合v-else使用

      可以结合template使用
  -->
  <h1>V-SHOW & V-IF</h1>
  <button @click="isShow = !isShow">show show</button>
  <div v-if="isShow">
  <!-- <div v-show="isShow"> -->
    <h2 >show me</h2>
  </div>
  <div v-else>
    <h2>yet another msg</h2>
  </div>
  <template v-if="isShow">
    <h2>wawaw</h2>
    <h3>kakaka</h3>
  </template>
</template>


<style scoped>

</style>
