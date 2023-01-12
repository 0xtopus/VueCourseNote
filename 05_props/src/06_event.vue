<script setup>

import { ref } from "vue";
const count = ref(0)

function clickHandler(event) {
  /* 
      使用方法事件处理器，vue会把 <!--!事件对象!-->
    作为参数传递
  */
  console.log(event);
}

function clickHandler2(...args) {
  /* 
      使用内联事件处理器，可用$event传递事件对象
  */
  console.log(args);
}

function boxHandler(text,event) {
  // event.stopPropagation()
  alert(text)
}

</script>


<template>
  <h2>{{ count }}</h2>
  <hr>
  <!-- 
    内联事件处理器
   -->
  <button v-on:click="count++">click me</button>
  <hr>
  <!-- 
    方法事件处理器
  -->
  <button @click="clickHandler">方法事件处理器</button>
  <button @click="clickHandler2(1,'hello',$event)">内联事件处理器</button>

  <!-- 
    事件冒泡的取消：
      法1：
        event.stopPropagation()

      法2：
        @click.stop
  -->
  <div class="box1" @click="boxHandler('box1',$event)">
    box1
    <div class="box2" @click.stop="boxHandler('box2',$event)">
      box2
      <div class="box3" @click.stop="boxHandler('box3',$event)">
        box3
      </div>
    </div>
  </div>

</template>


<style scoped>
.box1{
  height: 200px;
  width: 200px;
  background-color: #bfa;
}
.box2{
  height: 100px;
  width: 100px;
  background-color: #844;
}
.box3{
  height: 50px;
  width: 50px;
  background-color: #37f;
}
</style>
