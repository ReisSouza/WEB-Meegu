import api from '@/config/api'
import { User } from '@/types/user'

export type RefreshTokenArgs = {
  hash: string
}

export type RefreshTokenResult = {
  access_token: string
}

export const tokenApi = api.injectEndpoints({
  endpoints: (builder) => ({
    refresh: builder.mutation<User, RefreshTokenArgs>({
      query: (hash) => ({
        url: 'token/refresh',
        method: 'PUT',
        body: hash,
      }),
    }),
  }),
  overrideExisting: false,
})

export const { useRefreshMutation } = tokenApi
