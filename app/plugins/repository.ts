import { CharacterRepository } from "~/repository/CharacterRepository"
import { EpisodeRepository } from "~/repository/EpisodeRepository"


export default defineNuxtPlugin((nuxtApp) => {
    const characterRepository = new CharacterRepository()
    const episodeRepository = new EpisodeRepository()

    nuxtApp.provide('characterRepository', characterRepository)
    nuxtApp.provide('episodeRepository', episodeRepository)
})