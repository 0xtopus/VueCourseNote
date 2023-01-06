<script setup>
    import TabItem  from "./TabItem.vue";
    const props = defineProps(["items","maxHot"])
 </script>

<template>
    <div class="tab-list">
        <TabItem v-for="player in props.items" :item="player" :maxHot="props.maxHot">
        </TabItem>
    </div>

</template>

<style scoped>
.tab-list {
  padding: 15px;
}
</style>