import api from '@/config/api'
import { User } from '@/types/user'

export type LoginArgs = {
  username: string
  password: string
}

export const authApi = api.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<User, LoginArgs>({
      query: (credentials) => ({
        url: 'auth/login',
        method: 'POST',
        body: credentials,
      }),
    }),
  }),
  overrideExisting: false,
})

export const { useLoginMutation } = authApi
