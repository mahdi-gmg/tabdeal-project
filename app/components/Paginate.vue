<template>
    <div class="pagination inline-flex items-center gap-2 text-base font-medium">

        <button v-text="'<<'" @click="setPage(1)" :disabled="currentPage == 1"></button>
        <button v-text="'<'" @click="setPage(currentPage - 1)" :disabled="currentPage == 1"></button>

        <span v-show="pagePosition >= 0">...</span>
        <button v-for=" i in buttonCount" :key="i" class="rounded-full" :class="{'current-page': currentPage == getPage(i)}" @click="setPage(getPage(i))">
            {{ getPage(i)}}
        </button>
        <span v-show="pagePosition <= 0">...</span>

        <button @click="setPage(currentPage + 1)" :disabled="currentPage == length">></button>
        <button @click="setPage(length)":disabled="currentPage == length">>></button>

    </div>
</template>

<script setup lang="ts">
// props
interface Props {
    length: number 
    maxVisible?: number
}
const props = withDefaults(defineProps<Props>(), {
    length: 0,
    maxVisible: 5
})
const currentPage = defineModel<number>({default: 1})



// computed
const buttonCount = computed(() => Math.min(props.maxVisible, props.length))
const pagePosition = computed(() => {
    const {maxVisible, length} = props
    const [min, max] = [maxVisible, +length - +maxVisible]
    if(currentPage.value <= min) return -1
    if(currentPage.value >= max) return 1
    return 0
})

// methods
function getPage(i: number | string) {
    const {maxVisible} = props
    const offset = Math.floor((currentPage.value - 1) / +maxVisible) * +maxVisible
    return  offset + +i
    
   
}
function setPage(page: number | string) {
    const [min, max] = [1, +props.length]
    const newPage = Math.min(Math.max(+page, min), max)
    currentPage.value = newPage
}

</script>

<style scoped lang="scss">
    .pagination {
        color: $gray-color-5; 
        & button {
            width: 24px;
            height: 24px;
            cursor: pointer;
            &.current-page {
                background-color: $primary-color;
                color: $sky-color;
            }
        &:disabled {
            color: $gray-color-6;
        }
    }
}
</style>