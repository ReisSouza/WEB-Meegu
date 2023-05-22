type GetUrlProps = {
  filterOptions: {
    limit?: number
    page?: number
    name?: string
  }
  baseUrl: string
}

const getUrlFilterOptions = ({ baseUrl, filterOptions }: GetUrlProps) => {
  const { limit = 8, page = 1, name } = filterOptions

  const isFilter = name ? `&name=${name}` : ''

  const queryString = `${baseUrl}?page=${page}&pageSize=${limit}${isFilter}`

  return queryString
}

export default getUrlFilterOptions
