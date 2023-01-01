<script setup>

  import { ref } from "vue";
  import MyBox from "./components/MyBox.vue"

  /* 
        父组件可以通过props来向子组件传递数据
        注意：父组件传递给子组件的props都是只读的，无法修改
            即使可以修改，我们也尽量不要在子组件中去修改父组件的数据
            如果非得要改，具体方法后边再讲（自定义事件）
        属性名
            - 定义属性名时，属性名要遵循驼峰命名法
  */

  const count = ref(0)
  const obj = {
    count: 0
  }
</script>

<template>
  <h1>props</h1>
  
  <span>{{ count }}</span>
  <hr>
  <!-- <button @click="count++">add</button> -->
  <hr>
  <!-- <MyBox :value="count" isTrue></MyBox> -->
  <MyBox title="haha"  maxLength = 1233></MyBox>
</template>

<style scoped>

</style>
