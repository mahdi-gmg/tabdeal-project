<script setup lang="ts">
import Header from './components/Header.vue';

</script>

<template>
    <Header class="md:px-30  px-4 pb-6 pt-3">
        <slot name="header"/>
    </Header>
    <main class="main md:px-30 md:py-16   py-4 px-6"><slot/> </main>
</template>

<style scoped lang="scss">
.main {
    background: $gray-color-2;
    flex: 1;
    overflow: auto;
}
</style>