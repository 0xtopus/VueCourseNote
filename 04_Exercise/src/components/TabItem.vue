<script setup>
    import { reactive } from 'vue';

    const props = defineProps(["item"])

    const item = props.item

</script>

<template>
  <!-- single item container -->
  <div class="tab-item">
    <!--  portrait -->
    <div class="photo">
      <span>{{ item.rate }}</span>
      <!-- !根路径注意! -->
      <img :src = item.img :alt = item.name />
    </div>

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

  .photo span{
    height: 50px;
    width: 50px;
    border-top-left-radius: 20px;
    border-bottom-right-radius: 20px;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgb(245,102,1);
    box-sizing: border-box;
    font-size: 30px;
    text-align: center;
    padding: 5px 0;
    font-weight: bold;
  }

  .photo img{
    width: 180px;
    height: 180px;
    background-color: #fff;
    border-radius: 20px;
    
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