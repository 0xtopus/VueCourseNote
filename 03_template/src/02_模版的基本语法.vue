<script setup>
  const msg = "i love vue!"
  const html = "<h2>insert snippets</h2>"
</script>


<template>
  <!-- 
    - 在模版中可以直接访问组件声明的变量
    - 一些全局对象也可以访问
    - 可以通过app对象向Vue添加一些全局变量
        app.config.globalProperties.alert = alert.bind(this)
    - 使用插值（{{  }}）时，只能使用表达式（有返回值的语句）
        比如if语句就写不了
        
    - 插值实际上就是在修改元素的textContent
    
    指令：
      - 指令模版中为标签设置的一些特殊属性，它可以用来设置标签如何显示内容
      - v-text 将表达式作为textContent插入，作用同{{  }}
      - v-html 将表达式作为元素的innerHTML插入，有XSS注入的风险
    -->
  <h1>{{ msg }}</h1>
  <h1>{{ Math.random() }}</h1>
  <!-- <h2>{{ alert(123) }}</h2> -->
  <hr>
  <div v-text = "html"></div>
  <div v-html = "html"></div>
</template>
