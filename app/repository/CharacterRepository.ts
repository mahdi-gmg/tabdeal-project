import type { ICharacter, IFilterCharacter } from "~/type/Domain";
import { BaseRepository, type IRepository } from "./BaseRepository";
import type { IListResponse } from "~/type/Response";



export class CharacterRepository extends BaseRepository implements IRepository<ICharacter> {
    filter(query: Partial<IFilterCharacter>) {
        return this.fetch<IListResponse<ICharacter>>('/character', { query })
    }

    single(id: number): Promise<ICharacter> {
       return this.fetch<ICharacter>(`/character/${id}`) 
    }

    multiple(ids: string[]): Promise<ICharacter[]> {
        return this.fetch<ICharacter[]>(`/character/${ids.toString()}`) 
    }
}