<script setup>
    import { computed } from "vue";
    
    const props = defineProps(["src", "rate", "alt"])

    //使用计算属性来按名次返回不同的颜色
    //在CSS里用v-bind来动态绑定
    const color = computed(()=>{
        if(props.rate == 1) {
            return  "rgb(254,45,7)"
        } else if(props.rate == 2) {
            return  "rgb(245,102,1)"
        } else {
            return  "rgb(247,169,1)"
        }
    })
</script>

<template>
    <div class="photo">
        <span>{{ props.rate }}</span>
        <!-- !根路径注意! -->
        <img :src=props.src :alt=props.name />
    </div>
</template>

<style scoped>

*{
    cursor: default
}

.photo span{
    height: 50px;
    width: 50px;
    border-top-left-radius: 20px;
    border-bottom-right-radius: 20px;
    position: absolute;
    top: 0;
    left: 0;
    /* 在CSS里用v-bind来动态绑定颜色 */
    background-color: v-bind(color);
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
</style>
