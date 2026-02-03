<template>
    <NuxtLayout>
        <template #header>
            <Card is-horizontal image="/images/alt-image.svg" title="Character Name" subtitle="Alive-Alien" satus="active" image-hight="240" image-width="240"/>
        </template>
        
        <div class="flex flex-col gap-16">
            <List title="Episodes" icon="featured_play_list.svg">
                <Card v-for="i in 4" :key="i" image="/images/alt-image.svg" title="Hello" subtitle="Mahdi" />
            </List>
    
            <List title="Locations" icon="location_on.svg">
                <Card v-for="i in 3" :key="i" image="/images/alt-image.svg" title="Hello" subtitle="Mahdi" />
            </List>
        </div>
    </NuxtLayout>
</template>