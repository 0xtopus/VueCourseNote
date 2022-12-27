<script setup>
import { ref } from "vue";

const imgPath = ref("/img/messi.png")

function changeImg() {
  imgPath.value = "/img/neymar.png" 

}

const attrs = {
  id:"myId",
  name:"myName"
}

const attrName = "title"
const attrValue = "this is a title"
</script>


<template>
  <!-- 
    添加属性：v-bind
      可以简写为一个冒号 :

   -->

   <img :[attrName]="attrValue" :src="imgPath" alt="player">
   <hr>
   <button @click="changeImg">change img!</button>
   <hr>
   <div :="attrs">add attrs</div>
</template>
