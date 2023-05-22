import dayjs from 'dayjs'
import Cookies from 'js-cookie'
import { useRouter } from 'next/router'
import { useDispatch } from 'react-redux'
import React, { createContext, ReactNode, useContext, useEffect, useState } from 'react'

import { ALLOWED_ROUTES } from '@/config/env'
import { useLoginMutation } from '@/services/auth'
import { useRefreshMutation } from '@/services/token'
import { setUser, resetUser } from '@/slices/userSlice'
import { useGetUserByIdMutation } from '@/services/users'

type AuthProviderProps = {
  children: ReactNode
}

export type AuthContextType = {
  isAuth: boolean
  signOut: () => void
  signIn: ({ email, password }: SignInArgs) => void
  isErrorSign: boolean
}

export type SignInArgs = {
  email: string
  password: string
}

export const AuthContext = createContext<AuthContextType | null>(null)

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const router = useRouter()
  const dispatch = useDispatch()

  const [signInMutation, { isError: isErrorSign }] = useLoginMutation()
  const [getUserByID] = useGetUserByIdMutation()

  const [refresh, { isError: isErrorRefresh }] = useRefreshMutation()

  const [isAuth, setIsAuth] = useState(false)

  const signOut = () => {
    router.push('/auth')

    dispatch(resetUser())
    Cookies.remove('meegu_user_id')

    Cookies.remove('meegu_access_token')

    Cookies.remove('meegu_token_expiration_date')
  }

  const signIn = ({ email, password }: SignInArgs) => {
    signInMutation({ email, password }).then((res) => {
      if (!!res && 'data' in res) {
        setIsAuth(true)
        router.push('/')
        dispatch(setUser(res.data))
      }
    })
  }

  useEffect(() => {
    const userID = Cookies.get('meegu_user_id')

    const token = Cookies.get('meegu_access_token')

    const tokenExpirationDate = Cookies.get('meegu_token_expiration_date')

    const canRefreshToken = dayjs(new Date()).diff(dayjs(tokenExpirationDate), 'hour', true) > 23

    if (token && canRefreshToken) {
      refresh({ hash: token }).then((resRefreshToken) => {
        if (resRefreshToken && 'data' in resRefreshToken) {
          setIsAuth(true)
          dispatch(setUser(resRefreshToken.data))
        }
      })
    }
    if (userID) {
      getUserByID(userID).then((resUserGetByID) => {
        if (resUserGetByID && 'data' in resUserGetByID) {
          setIsAuth(true)
          dispatch(setUser(resUserGetByID.data))
        }
      })
    }

    if ((!token || token === '') && !ALLOWED_ROUTES.find((route) => router.pathname.includes(route))) {
      // router.push('/auth/login')
    }
  }, [router, getUserByID])

  useEffect(() => {
    if (isErrorSign && !ALLOWED_ROUTES.find((route) => router.pathname.includes(route))) {
      // router.push('/auth/login')
    }
    if (isErrorSign && !ALLOWED_ROUTES.find((route) => router.pathname.includes(route))) {
      // router.push('/auth/login')
    }
  }, [isErrorSign, router, isErrorRefresh])

  return <AuthContext.Provider value={{ isAuth, signOut, signIn, isErrorSign }}>{children}</AuthContext.Provider>
}

export const useAuthContext = () => useContext(AuthContext) as AuthContextType
