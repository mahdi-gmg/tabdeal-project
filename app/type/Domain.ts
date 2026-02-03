interface IBase {
    name: string,
}
interface IEntity {
    id: number
    url: string
    created: string
}

export interface IFilterCharacter extends IBase {
    status: 'Alive' | 'Dead' | 'unknown'
    species: string
    type: string
    gender: 'Female' | 'Male' | 'Genderless' | 'unknown'
    page: number
}

export interface IFilterEpisode extends IBase {
    type: string
    dimension: string
}

export interface ILocation extends IBase, IEntity {
    type: string
    dimension: string
    residents: string[]

}

export interface ICharacter extends IEntity, Omit<IFilterCharacter, 'page'> {
    origin: IBase & Omit<IEntity, 'id'>
    location: IBase & Omit<IEntity, 'id'>
    image: string
    episode: string[]
}

export interface IEpisod extends IBase, IEntity {
    air_date: string
    episode: string
    characters: string[]
}