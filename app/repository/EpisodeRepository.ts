import type { IEpisod } from "~/type/Domain";
import { BaseRepository, type IRepository } from "./BaseRepository";
import type { IListResponse } from "~/type/Response";



export class EpisodeRepository extends BaseRepository implements IRepository<IEpisod> {
    
    single(id: number | string): Promise<IEpisod> {
        return this.fetch<IEpisod>(`/location/${id}`) 
    }
       
    multiple(ids: string[]): Promise<IEpisod[]> {
        return this.fetch<IEpisod[]>(`/episode/${ids.toString()}`)
    }

    filter<IFilterEpisode>(query: Partial<IFilterEpisode>): Promise<IListResponse<IEpisod>> {
        return this.fetch<IListResponse<IEpisod>>('/episode', { query })
    }

}