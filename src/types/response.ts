export type Response<T> = {
  data: T
  meta: {
    limit: number
    page: number
    total: number
  }
}
