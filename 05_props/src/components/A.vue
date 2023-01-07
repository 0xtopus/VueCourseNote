<script setup>
    const props = defineProps(["name","age","gender"])
</script>

<template>
    <h1>A component</h1>
    <h2>{{ props.name }}</h2>
    <h2>{{ props.age }}</h2>
    <h2>{{ props.gender }}</h2>
</template>