export type Args<T> = {
  page?: number
  limit?: number
  order?: 'DESC' | 'ASC'
  orderColumn?: T
  filterColumn?: T
  filter?: string
  date?: string
}
