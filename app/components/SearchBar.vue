<template>
    <form @submit.prevent="onSubmit" class="search flex flex-row gap-4 rounded-lg p-4 relative">
        <input v-model="text" class="py-3 pr-2 pl-4 rounded-sm flex-1" type="text" placeholder="Search for characters..." />
        <button class="search-button flex flex-row py-3 px-4 rounded-sm gap-2">
            <img src="~/assets/icons//search-normal.svg"  width="14" height="14"/>
            <span class="hidden md:inline-block">Search</span>
        </button>
    </form>
</template>

<script setup lang="ts">
const value = defineModel<string>()
const text = ref(value.value || '')


// methods
function onSubmit() {
    value.value = text.value
}
</script>

<style lang="scss" scoped>
.search {
    background: $gray-color-2;

    & input {
        font-family: 'Rubik';
        background: $gray-color-3;
        color: $white-color;
        &:focus {
            outline: none;
        }
    }
    &-button {
        background-color: $primary-color;
    }
}
</style>
