<script setup>
import MyBox from "../components/MyBox.vue";
</script>

<template>
  <div class="app">
    <h1>Header</h1>
    <div :class = "$style.box1">this is app div</div>
    <MyBox></MyBox>
  </div>
</template>

<style module>  
/* 
  css模块
    -自动对模块的类进行hash化，确保类名独一无二

  引入：
    :class = "$style.box1"
    
*/
.box1{
  background-color: aqua;
}
</style>
