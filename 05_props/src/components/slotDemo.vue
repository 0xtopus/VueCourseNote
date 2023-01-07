<script setup>
    const STU = {
        name: "mark",
        age: "18",
        gender: "male"
    }
</script>

<template>
    <div>
        slotDemo
        <h1><slot name="s1"></slot></h1>
        <div><slot name="s2" :stuName="STU.name" :age="STU.age" :gender="STU.gender"></slot></div>
        <div><slot name="s3" :STU="STU"></slot></div>
    </div>
</template>

<style scoped>
    *{
        background-color: #bfa;
    }
</style>