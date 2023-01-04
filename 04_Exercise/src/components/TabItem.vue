<script setup>
    import { reactive } from 'vue'; 
    import Photo from "./Photo.vue";
    import HotBar from "./HotBar.vue";

    const props = defineProps(["item","maxHot"])

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
      <hot-bar :hot="item.hot" :maxHot="maxHot"></hot-bar>
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

  .desc .name{
    cursor: default
  }
</style>