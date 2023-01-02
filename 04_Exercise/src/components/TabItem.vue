<script setup>
    import { reactive } from 'vue'; 
    import Photo from "./Photo.vue";
    const props = defineProps(["item"])

    const item = props.item

</script>

<template>
  <!-- single item container -->
  <div class="tab-item">
    <!--  portrait -->
    <photo :src="item.img" :rate="item.rate" :alt="item.name"></photo>

    <!-- description -->
    <div class="desc">
      <span class="name">{{ item.name }}</span>
      <div class="hot-bar">
        <div class="inner">{{ item.hot }}</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .tab-item{
    display:flex;
    position: relative;
    padding-bottom: 20px;
  }

  .desc{
    display: flex;
    flex-direction: column;
    align-items:space-around;
    font-size:30px;
    justify-content: space-evenly;
    flex: auto;
    padding-left: 40px;
    
  }

  .hot-bar{
    overflow: hidden;
    border-radius: 30px;
    background-color: rgb(3,37,103);
    /* <!-- !缩进半个字! --> */
    text-indent: .5em;
  }

  .hot-bar .inner{
    border-radius: 30px;
    width: 30%;
    /* <!-- !渐变! --> */
    background-image: linear-gradient(
      90deg,
      rgb(187, 3, 52) 50%,
      rgb(63,4,18)
    );
    /* <!-- !防止进度条太低时溢出! --> */
    white-space: nowrap;
  }

  .desc .name,
  .hot-bar .inner,
  .photo span{
    cursor: default
  }
</style>