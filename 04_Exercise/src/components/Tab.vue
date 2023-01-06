<script setup>

import { ref } from "vue";

//记录选项卡的状态 
const current = ref(0) // 0 表示球员 1表示球队

</script>

<template>
    <!-- tab wrapper -->
    <div class="tab-wrapper">
        <!-- header -->
        <header>
            <!--
             ! 动态class： 
             ! 使用: 
             !   :class="{ className: judgement sentence }"
            -->
            <div @click="current = 0" class="tab-button" :class="{ active: current===0 }">
                热门球员
            </div>

            <div @click="current = 1" class="tab-button" :class="{ active: current === 1 }">
                热门球队
            </div>
        </header>

        <!-- main -->
        <main style="color:#fff; font-size:20px">
            <!-- 
                ! v-show:
                !   显示属性，
                !   当不满足条件的时候相关模块变成 display: none
            -->
            <div v-show="current === 0">
                <!-- players container -->
                <slot name="0"></slot>      <!-- !使用插槽 -->
            </div>

            <div v-show="current === 1">
                <!-- teams' container -->
                <slot name="1"></slot>      <!-- !使用插槽 -->
            </div>
        </main>
    </div>
</template>

<style scoped>
.tab-wrapper {
  /* 总宽度不变 */
  box-sizing: border-box;
  width: 800px;
  padding: 20px;
  background-color: rgb(45, 83, 211);

}

header {
  display: flex;
  justify-content: center;
  border-radius: 10px;
  overflow: hidden;
}

.tab-button {
  width: 380px;
  height: 60px;
  background-color: #fff;

  /* 
        flex : 设置弹性元素的三个伸缩量
        grow，shrink和basis
      */
  flex: auto;

  /* 文字居中设置 */
  font-size: 30px;
  text-align: center;
  line-height: 60px;

  /* 鼠标悬停时为指针 */
  cursor: pointer;
}

.tab-button:not(.active):hover {
  color: rgb(187, 3, 52);
  transition: 0.4s;
}

.active {
  color: #fff;
  background-color: rgb(187, 3, 52);
  transition: 0.4s;
}
</style>