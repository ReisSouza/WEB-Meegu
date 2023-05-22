import Cookies from 'js-cookie'

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { API_URL } from './env'

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
    prepareHeaders: (headers) => {
      const token = Cookies.get('arq_questões_access_token')

      if (token) {
        headers.set('authorization', `Bearer meegu`)
      }

      return headers
    },
  }),
  endpoints: () => ({}),
})

export default api
