<template>
    <article class="card  rounded-lg" >
        <NuxtLink :to="to" class="gap-4 p-4 flex flex-col" :class="{ 'md:flex-row md:items-center': isHorizontal }">
            <NuxtImg :src="image || altImage" :width="imageWidth" :height="imageHight" class="rounded"/>
            <div class="relative">
                <h2 class="card-title text-xl font-bold pb-4">{{ title }}</h2>
                <h6 v-if="subtitle" class="card-subtitle card-subtitle--status text-base font-normal flex content-center"
                    :class="{'card-subtitle--status-active': isActive}">{{ subtitle }}</h6>
            </div>
        </NuxtLink>
    </article>
</template>

<script setup lang="ts">
import altImage from '~/assets/icons/alt-image.svg';

interface Props {
    to?: string
    image?: string
    imageWidth?: string
    imageHight?: string
    title: string
    subtitle?: string
    isActive?: boolean
    isHorizontal?: boolean
    
}
withDefaults(defineProps<Props>(), {
    imageWidth: '352',
    imageHight: '252',
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