import Cookies from 'js-cookie'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { User } from '@/types/user'
import { RootState } from '@/store/store'

export const initialState: User = {} as User

export const userSlice = createSlice({
  initialState,
  name: 'user',
  reducers: {
    setUser: (_, action: PayloadAction<User>) => {
      if (action.payload.access_token) {
        Cookies.set('arq_questões_access_token', action.payload.access_token, { expires: 365 })
        Cookies.set('arq_questões_token_expiration_date', new Date().toISOString(), { expires: 365 })
      }
      Cookies.set('arq_questões_user_id', action.payload.id, { expires: 365 })

      return action.payload
    },
    resetUser: () => {
      return initialState
    },
  },
})

export const selectUser = (state: RootState): User => state.user

export const { setUser, resetUser } = userSlice.actions
export default userSlice.reducer
