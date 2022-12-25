<script>
  import MyButton from "./components/MyButton.vue";
  import { shallowReactive } from "vue"

  export default{
    data(){
    //如果使用箭头函数，则无法通过this来访问组件实例
      console.log("data",this);
      //可以通过 this.$data.xxx 动态添加响应数据，但是不推荐
      // 建议把暂时不用的属性以 : xxx: null 的形式添加到data里

      //data返回一个对象作为返回值
      // Vue会代理这个对象，转化为响应式数据
      // 响应式数据都可以通过组件实例访问
      // 在data里面返回的属于深层响应式对象，
      // 如果要创建浅层的响应式对象:shallowReactive
      return {
        msg: "i love vue!",
        stu:{
          name:"swk",
          age:18,
          friend:{
            name:"kaka"
          }
        },
        notUseThisNow: null
      }
    },

    components:{
      MyButton
    }
  }
</script>

<template>
  <h1>{{ msg }}</h1>
  <MyButton></MyButton>
</template>
