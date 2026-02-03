import type { IListResponse } from "~/type/Response"

export interface IRepository<T> {
    filter<FT>(query: Partial<FT>): Promise<IListResponse<T>>
    single(id: number | string): Promise<T>
    multiple(ids: string[]): Promise<T[]>
}

export class BaseRepository {
    protected fetch = $fetch.create({
        baseURL: 'https://rickandmortyapi.com/api'
    })

    protected get<T>(url: string, params?: any) {
        return this.fetch<T>(url, {method: 'GET', params})
    }

    protected post<T>(url: string, body?: any) {    
        return this.fetch<T>(url, {method: 'POST', body})
    }
}