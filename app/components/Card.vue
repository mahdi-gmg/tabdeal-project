<template>
    <article class="card flex flex-col gap-4 p-4 rounded-lg" :class="{ 'md:flex-row md:items-center': isHorizontal }">
        <NuxtImg :src="image" :width="imageWidth" :height="imageHight" />
        <div class="relative">
            <h2 class="card-title text-xl font-bold pb-4">{{ title }}</h2>
            <h6 v-if="subtitle" class="card-subtitle card-subtitle--status text-base font-normal flex content-center"
                :class="{'card-subtitle--status-active': isActive}">{{ subtitle }}</h6>
        </div>
    </article>
</template>

<script setup lang="ts">
interface Props {
    image: string
    imageWidth?: string | number,
    imageHight?: string | number,
    title: string
    subtitle?: string
    isActive?: boolean
    isHorizontal?: boolean
    
}
withDefaults(defineProps<Props>(), {
    imageWidth: 352,
    imageHight: 252,
    status: 'active'
})
</script>

<style scoped lang="scss">
.card {
    border: 1px solid transparent;
    &:hover {
         border-color: $gray-color-4;
    }

    &-title,
    &-subtitle {
        color: $white-color;
    }

    &-subtitle {
        line-height: 100%;

        &--status {
            &::before {
                width: 20px;
                position: relative;
                transform: translateY(-100%);
                content: ".";
                font-size: 80px;
                line-height: 0;
                color: $error-color;
            }

            &-active::before {
                color: $success-color;
            }
        }
    }
}
</style>