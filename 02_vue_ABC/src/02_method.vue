<script>
  export default{
    //指定实例对象的属性
    data(){
      return {
        msg: "i love vue!"
      }
    },

    // 指定实例对象的方法
    //  - 它是一个对象，可以在它里边定义多个方法
    //  - 这些方法最终会挂载在组件实例上
    //  - 可以直接用组件实例来调用这些方法
    //  - 所有组件实例都会在模版中直接访问
    //  - methods的方法的this会自动绑定为组件实例（除了箭头函数）
    methods: {
      test() {
        alert("hahah!")
      },

      sum(a, b) {
        return a+b
      },

      changeMsg(){
        this.msg = "new banner!"
      }
    }


  }
</script>

<template>
  <h1>{{ msg }}</h1>
  <h1>{{ sum(2, 5) }}</h1>
  <hr>
  <button @click = "changeMsg()">change banner</button>
</template>
