interface IInfo {
    count: number
    pages: number
    next: string | null
    prev: string | null
}


export interface IListResponse<T> {
    info: IInfo
    results: T[]
}