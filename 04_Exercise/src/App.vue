<script setup>
import { ref, reactive } from "vue"

//import component
import TabItem from "./components/TabItem.vue";
import TabList from "./components/TabList.vue";
import Tab from "./components/Tab.vue"



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
/*   {
    name: "穆勒",
    rate: 3,
    img: "/images/muller.png",
    hot: 233760
  }, */
  {
    name: "内马尔",
    rate: 3,
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
  <Tab>
    <template #0>
      <TabList :items="players" :max-hot="playerMaxHot"></TabList>
    </template>
    <template #1>
      <TabList :items="nations" :max-hot="nationMaxHot"></TabList>
    </template>

  </Tab>

</template>

<style scoped>


</style>
