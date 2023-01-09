<script setup>

import A from "./components/A.vue"
import slotDemo from "./components/slotDemo.vue"
import { ref } from "vue";

/* const name = "lars" */
</script>


<template>
    原组件
  <!-- 
    可以用 name 属性来设置具名插槽
    此时，在入口需要用<template :v-slot:插槽名></template> 来指定
    简写：#
    不写name属性，默认为 name="default"
   -->
  <slotDemo>
    <template v-slot:s1>
      meow~meow~
    <hr>
    </template>
    
    
    <!-- 
      把slotDemo里的数据传递给App里定义的另一个组件A： 
         <template #s2="变量名"> 
     -->
    <template #s2="{stuName, age, gender}">
      <!-- woof~woof~ -->
      <!-- {{ stu }} -->
      <!-- {{ age }} -->
      
      <A :name="stuName" :age="age" :gender="gender"></A>

      <hr>
    </template>
    
    <template #s3="STU">
      {{ STU }}
    </template>

  </slotDemo>
</template>


<style scoped>

</style>
