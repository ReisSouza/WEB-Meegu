import { configureStore } from '@reduxjs/toolkit'

import { authApi } from '@/services/auth'
import { tokenApi } from '@/services/token'

import { usersApi } from '@/services/users'
import userReducer from '@/slices/userSlice'

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [tokenApi.reducerPath]: tokenApi.reducer,
    [usersApi.reducerPath]: usersApi.reducer,

    user: userReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(usersApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
