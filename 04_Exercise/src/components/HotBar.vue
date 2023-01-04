<script setup>
import { computed } from "vue";

const props = defineProps(["hot","maxHot"])

const width = computed(()=>{
    return props.hot / props.maxHot * 100 + "%"
})

</script>

<template>
    <div class="hot-bar">
        <div class="inner">{{ props.hot }} 热度</div>
    </div>

</template>

<style scoped>
    *{
        cursor: default;
    }

  .hot-bar{
    overflow: hidden;
    border-radius: 30px;
    background-color: rgb(3,37,103);
    /* <!-- !缩进半个字! --> */
    text-indent: .5em;
  }

  .hot-bar .inner{
    /* <!-- ! using v-bind to determined the inner's width ! */
    width: v-bind(width);

    border-radius: 30px;
    /* <!-- !渐变! --> */
    background-image: linear-gradient(
      90deg,
      rgb(187, 3, 52) 50%,
      rgb(63,4,18)
    );
    /* <!-- !防止进度条太低时溢出! --> */
    white-space: nowrap;
  }
</style>