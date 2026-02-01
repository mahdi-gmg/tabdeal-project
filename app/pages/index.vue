<template>
    <NuxtLayout>
        <template #header>
            <SearchBar />
        </template>
        <div class="flex flex-col">
            <List>
                <Card v-for="i in 10" :key="i" image="/images/alt-image.svg"  :is-active="i % 2 == 0" title="Mahdi" subtitle="ghanbari" />
            </List>
            <Paginate v-model="currentPage" class="mx-auto mt-10" :length="length" />
        </div>
    </NuxtLayout>
</template>
<script setup lang="ts">
const currentPage = ref(1)
const length = ref(20)


</script>
