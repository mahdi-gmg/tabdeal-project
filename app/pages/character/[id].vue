<template>
    <NuxtLayout>
        <template #header>
            <Card v-if="character" is-horizontal :title="character.name" :subtitle="character?.status + '-' + character?.species" :image="character?.image" :is-active="character?.status == 'Alive'" image-hight="240" image-width="240"/>
        </template>
        
        <div class="flex flex-col gap-16">
            <List title="Episodes" :icon="episodIcon">
                <Card v-for="ep in episodes" :key="ep.id" :title="ep.name" />
            </List>
    
            <List title="Locations" :icon="locationIcon">
                <Card v-for="loc in locations" :key="loc" :title="loc" />
            </List>
        </div>
    </NuxtLayout>
</template>

<script setup lang="ts">
import locationIcon from '~/assets/icons/location_on.svg'
import episodIcon from '~/assets/icons/featured_play_list.svg'

import type { IRepository } from '~/repository/BaseRepository';
import type{ ICharacter, IEpisod } from '~/type/Domain';
const route = useRoute()
const characterRepo = useNuxtApp().$characterRepository as IRepository<ICharacter>
const episodeRepo = useNuxtApp().$episodeRepository as IRepository<IEpisod>


const { data: characterData } = await useAsyncData<ICharacter>(
    () => {
        const id = +(route.params.id || 1)
        return characterRepo.single(id)
    }
)

const {data: episodData} = await useAsyncData(
    () => {
        const ids = characterData.value?.episode.map(url => {
            const match = url.match(/\d+/)
            return match ? match[0] : '1'
        })
        return episodeRepo.multiple( ids || [])
    }
)

useHead({
    title: characterData.value?.name || 'character page',
    meta: [
        { name: 'description', content: `${characterData.value?.status}-${characterData.value?.species}` },
    ]
    
})

// computed
const character = computed(() => characterData.value )
const episodes = computed(()=> episodData.value ? episodData.value : [])
const locations = computed(()=> characterData.value?.location ? [characterData.value.location.name] : [])


</script>