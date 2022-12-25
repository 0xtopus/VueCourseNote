<script>
  export default{
    //指定实例对象的属性
    data(){
      return {
        stu: {
          name: "swk",
          age: 18,
          gender: "male"
        }
      }
    },

    methods:{
      minusAge(){
        this.stu.age--
      },

      addAge(){
        this.stu.age++
      }
    },

    //计算属性
    //可以写逻辑
    //计算属性只在依赖的数据改变时才会调用
    //而methods每次修改都会调用函数（没有缓存）
    computed: {
      //属性名：getter方法
      info() {
        // 在里面尽量只写读取数据的代码
        // 不要写修改数据的代码
        return this.stu.age >= 18 
        ? "you are an adult!" 
        : "you're still underage!" 
        
      }
    }

  }
</script>

<template>
  <h1>{{ stu.name }} -- {{ stu.age }} -- {{ stu.gender }}</h1>
  <h2><span>called by computed</span></h2> 
  <h2>{{ info }}</h2>
  <hr>
  <h2><span>called by btn</span></h2> 
  <h2>{{  stu.age >= 18 ? "you are an adult!" : "you're still underage!"  }}</h2>
  <button @click="minusAge()">be younger!</button>
  <button @click="addAge()">get older!</button>
</template>
