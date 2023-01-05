<script setup>

  import { ref } from "vue";

  const arr = ref(["孙悟空","猪八戒","沙和尚"])
  const arr2 = ref([
    {
      id:1,
      name:"jack",
      age:20
    },
    { 
      id:2,
      name:"mary",
      age:30
    },
    {
      id:3,
      name:"bob",
      age:55
    },
  ])
</script>


<template>
  <button @click="arr.push('唐僧')">push</button>

  <ul>
    <li v-for="name of arr">{{ name }}</li>
  </ul>

  <ul>
    <li v-for="(name,index) in arr">{{ index }} - {{ name }}</li>
  </ul>

  <hr>
  <div class="wrapper">
    <!-- show bug -->
    <div class="left">
      <div class="notification">
      type some words in input, then press the btn
    </div>

    <button @click="arr2.unshift({
      name:'jason',
      age:88
    })">.unshift() bug showcase</button>
    <ul>
      <li v-for="({name,age},index) in arr2">{{ index }} - {{ name }} - {{ age }} -- {{ id }}<input type="text"></li>
    </ul>
  </div>

    <hr>

    <!-- solve the problem -->
    <div class="right">
      <div class="notification">
        use "key" to solve it
      </div>

      <button @click="arr2.unshift({
        id:3,
        name:'jason',
        age:88
      })">.unshift() bug showcase</button>

      <ul>
        <li 
          v-for="({name,age,id},index) in arr2"
          :key="id"
        >{{ index }} - {{ name }} - {{ age }} -- {{ id }} <input type="text">
        </li>
      </ul>
    </div>


    
  </div>
  <hr>
</template>


<style scoped>
  .wrapper{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  .left,
  .right{
    width: 400px;
    background-color: #bfa;
    /* flex:auto; */
    /* align-items:space-around; */
    /* justify-content: space-between; */

    /* flex: auto */
  }

  .notification{
    width: 200px;
    padding: 15px;
    margin-bottom: 20px;
    border: 1px solid black;
  }
</style>
