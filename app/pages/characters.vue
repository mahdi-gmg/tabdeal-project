<template>
  <NuxtLayout>
    <template #header>
      <SearchBar v-model="name" />
    </template>
    <div v-if="items.length" class="flex flex-col">
      <List>
        <Card v-for="item in items" :key="item.id" :image="item.image" :is-active="item.status == 'Alive'"
          :title="item.name" :subtitle="`${item.status}-${item.species}`" :to="`/character/${item.id}`" />
      </List>
      <Pagination v-model="page" class="mx-auto mt-10" :pages="pages" :per-page="20" />
    </div>
    <div v-else class="inline-block relative top-1/2 left-1/2 transform -translate-x-1/2 text-white text-xl">
      No Result
    </div>
  </NuxtLayout>
</template>
<script setup lang="ts">
import type { IRepository } from '~/repository/BaseRepository';
import type { ICharacter, IFilterCharacter } from '~/type/Domain';


// data
const characterRepo = useNuxtApp().$characterRepository as IRepository<ICharacter>
const route = useRoute()
const router = useRouter()


// fetch data
const { data } = await useAsyncData(
  '/characters',
  () =>  characterRepo.filter(route.query),
  {
    watch: [() => route.query],
    immediate: true
  }
)

// computed
const items = computed(() => data.value?.results || [])
const pages = computed(() => data.value?.info?.pages || 0)
const name = computed({
  set(name: string) {
    router.push({ query: { name } })
  },
  get() {
    return route.query ? route.query.name : ''
  }
})
const page = computed({
  set(page: number) {
    router.push({ query: { ...route.query, page } })
  },
  get() {
    return +(route.query.page || 1)
  }
})
</script>
