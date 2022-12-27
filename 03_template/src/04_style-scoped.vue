<script setup>
import MyBox from "../components/MyBox.vue";
</script>

<template>
  <!-- 
      vue的样式:
        scoped : 样式仅仅限于当前组件和引入的其他组件的根元素上（多根元素不会）
                                            ?单根元素: 一个组件里只有一个元素
                                            ?多根元素：一个组件里有多个元素
      原理：
        在元素的style里添加一个属性选择器 .box1[data-v-7a7a37b1]
      
   -->
  <div class="app">
    <h1>Header</h1>
    <div id="box1">this is app div</div>
    <MyBox></MyBox>
  </div>
</template>

<style scoped>  
h1 {
  background-color: #bfa;
}

.app #box1{
  height: 200px;
  width: 200px;
  background-color: orange;
}

/* 
  :deep()
    在引入的组件的根元素的子元素也生效

  原理： 
    .app h2[data-v-..] --> .app[data-v-...]
*/
.app :deep(h2){
  color: blueviolet;
}

/* 
  全局样式
  :global()
*/
:global(div){
  border: 1px royalblue solid;
}
</style>
