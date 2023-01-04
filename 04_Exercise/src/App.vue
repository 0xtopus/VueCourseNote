<script setup>
import { ref, reactive } from "vue"

//import component
import TabItem from "./components/TabItem.vue";

//记录选项卡的状态 
const current = ref(0) // 0 表示球员 1表示球队

const players = reactive([
  {
    name: "梅西",
    rate: 1,
    img: "/images/messi.png",
    hot: 433760
  },
  {
    name: "C罗",
    rate: 2,
    img: "/images/ronaldo.png",
    hot: 333760
  },
  {
    name: "穆勒",
    rate: 3,
    img: "/images/muller.png",
    hot: 233760
  },
  {
    name: "内马尔",
    rate: 4,
    img: "/images/neymar.png",
    hot: 133760
  },
])

const nations = reactive([
  {
    name: "法国",
    rate: 1,
    img: "/images/France.jpg",
    hot: 33760
  },
  {
    name: "巴西",
    rate: 2,
    img: "/images/Brazil.jpg",
    hot: 24760
  },
  {
    name: "荷兰",
    rate: 3,
    img: "/images/Netherlands.jpg",
    hot: 13780
  }
  
])

// set maxHot index
const playerMaxHot = players[0].hot
const nationMaxHot = nations[0].hot
</script>

<template>
  <!-- tab wrapper -->
  <div class="tab-wrapper">
    <!-- header -->
    <header>
      <!-- ! 使用: 
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
        <div class="tab-list">
          <!-- single player container -->
          <TabItem 
            v-for="player in players" 
            :item="player" 
            :maxHot="playerMaxHot">
          </TabItem>
        </div>

      </div>

      <div v-show="current === 1">
        <!-- teams' container -->
        <div class="tab-list">
          <!-- single flag's container -->
          <TabItem 
            v-for="nation in nations"
            :item="nation"
            :max-hot="nationMaxHot"
          >
          </TabItem>
        </div>

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

.tab-list {
  padding: 10px;
}

.tab-item {
  display: flex;
  position: relative;
  padding-bottom: 20px;
}

.photo span {

  height: 50px;
  width: 50px;
  border-top-left-radius: 20px;
  border-bottom-right-radius: 20px;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgb(245, 102, 1);
  box-sizing: border-box;
  font-size: 30px;
  text-align: center;
  padding: 5px 0;
  cursor: default;
  font-weight: bold;
}

.photo img {
  width: 180px;
  height: 180px;
  background-color: #fff;
  border-radius: 20px;

}

.desc {
  display: flex;
  flex-direction: column;
  align-items: space-around;
  font-size: 30px;
  justify-content: space-evenly;
  flex: auto;
  padding-left: 40px;

}

.hot-bar {
  overflow: hidden;
  border-radius: 30px;
  background-color: rgb(3, 37, 103);
  /* <!-- !缩进半个字! --> */
  text-indent: .5em;
}

.hot-bar .inner {
  border-radius: 30px;
  width: 30%;
  /* <!-- !渐变! --> */
  background-image: linear-gradient(90deg,
      rgb(187, 3, 52) 50%,
      rgb(63, 4, 18));

  /* <!-- !防止进度条太低时溢出! --> */
  white-space: nowrap;
}
</style>
