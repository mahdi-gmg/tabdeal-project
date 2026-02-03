<template>
    <div class="pagination inline-flex items-center gap-2 text-base font-medium">

        <button v-text="'<<'" @click="setPage(1)" :disabled="currentPage == 1"></button>
        <button v-text="'<'" @click="setPage(+currentPage - 1)" :disabled="currentPage == 1"></button>

        <span v-show="['Left', 'Both'].includes(pagePosition)">...</span>
        <button v-for=" i in buttonCount" :key="i" class="rounded-full" :class="{'current-page': currentPage == getPage(i)}" @click="setPage(getPage(i))">
            {{ getPage(i)}}
        </button>
        <span v-show="['Right', 'Both'].includes(pagePosition)">...</span>

        <button @click="setPage(+currentPage + 1)" :disabled="currentPage == pages">></button>
        <button @click="setPage(pages)":disabled="currentPage == pages">>></button>

    </div>
</template>

<script setup lang="ts">
// props
interface Props {
    maxVisible?: number
    pages: number
}
const props = withDefaults(defineProps<Props>(), {
    pages: 0,
    maxVisible: 5,
})
const currentPage = defineModel<number | string>({default: 1})


type TPagePosition = 'None' | 'Right' | 'Both' | 'Left'
// computed
const buttonCount = computed(() => Math.min(props.maxVisible, props.pages))
const pagePosition = computed<TPagePosition>(() => {
    const {maxVisible, pages} = props
    if(pages < maxVisible) return 'None'
    const [min, max] = [maxVisible, Math.floor(props.pages / maxVisible) * maxVisible ]
    if(+currentPage.value <= min) return 'Right'
    if(+currentPage.value > max) return 'Left'
    return 'Both'
})

// methods
function getPage(i: number | string) {
    const {maxVisible, pages} = props
    const [min, max] = [0, Math.floor(props.pages / maxVisible)]
    let alpha = Math.floor((+currentPage.value - 1) / maxVisible)
    alpha = Math.min(Math.max(alpha, min), max) // min <= alpha <= max

    let offset = alpha * maxVisible
    if(alpha == max && pages > maxVisible) {
        offset -= maxVisible - props.pages % maxVisible
    }
    
    return  offset + +i
   
}
function setPage(page: number | string) {
    page ||= 1
    const [min, max] = [1, props.pages]
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