export interface Response<T = any> {
  message: string
  result: T
}

export interface PaginationMeta {
  current_page: number
  from: number
  last_page: number
  per_page: number
  to: number
  total: number
}

export interface Pagination<T = any> {
  data: T
  meta: PaginationMeta
}

export type PaginationResponse<T = any> = Response<Pagination<T>>
