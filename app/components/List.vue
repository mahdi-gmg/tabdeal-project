<template>
  <div class="list">
    <div v-if="$slots.title || title"  class="flex gap-3 mb-6">
        <slot name="title">
            <slot v-if="$slots.icon || icon" name="icon">
                <img class="list-icon" :src="icon" width="24" height="24"/>
            </slot>
            <h3 class="list-title font-medium  text-2xl">{{ title }}</h3>
        </slot>
    </div>
    <div class="flex flex-wrap justify-around">
        <slot/>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
    title?: string
    icon?: string 
}
defineProps<Props>()

</script>

<style scoped lang="scss">
.list {
    &-title {
        color: $white-color;
    }
}
</style>