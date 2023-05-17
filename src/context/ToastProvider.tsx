import { ToastProvider as ToastProviderPrimitive } from '@ionext-ui/react'
import { SerializedError } from '@reduxjs/toolkit'
import { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query'

import React, { createContext, ReactNode, useContext, useState } from 'react'

type ToastProviderProps = {
  children: ReactNode
}
type ResFetchBaseQueryError =
  | {
      data: any
    }
  | {
      error: FetchBaseQueryError | SerializedError
    }
export type FeedbackToast = {
  title?: string
  description: string
  variant: 'success' | 'warning' | 'danger' | 'default'
  id?: string
}

export type ToastContextType = {
  success: ({ description, id, title }: Omit<FeedbackToast, 'variant'>) => void
  error: ({ description, id, title }: Omit<FeedbackToast, 'status'>) => void
  warning: ({ description, id, title }: Omit<FeedbackToast, 'status'>) => void
  getFeedbackRequest: (res: ResFetchBaseQueryError, title?: string) => void
  listOfToast: FeedbackToast[]
}

export const ToastContext = createContext<ToastContextType | null>(null)

export type ResponseError = {
  error: {
    data: {
      message: string
    }
  }
}

export const ToastProvider = ({ children }: ToastProviderProps) => {
  const [listOfToast, setListOfToast] = useState<FeedbackToast[]>([])

  const getFeedbackRequest = (res: ResFetchBaseQueryError, title?: string) => {
    if (!(res && 'data' in res) && !(res && 'error' in res)) {
      setListOfToast((prevState) => [
        ...prevState,
        {
          description: 'Parece que o servidor esta fora do ar, tente novamente!',
          id: `${prevState.length + 1}`,
          title: 'Falha de conexão',
          variant: 'danger',
        },
      ])
    }
    if (res && 'data' in res && res?.data?.message) {
      setListOfToast((prevState) => [
        ...prevState,
        { description: res?.data?.message, id: res?.data?.message, title, variant: 'success' },
      ])
    } else if (res && 'error' in res) {
      const newError = res as unknown as ResponseError
      if (newError?.error?.data?.message) {
        setListOfToast((prevState) => [
          ...prevState,
          { description: newError?.error?.data?.message, id: newError?.error?.data?.message, title, variant: 'danger' },
        ])
      }
    }
  }

  const success = ({ description, id, title }: Omit<FeedbackToast, 'variant'>) => {
    setListOfToast((prevState) => [...prevState, { description, id, title, variant: 'success' }])
  }

  const error = ({ description, id, title }: Omit<FeedbackToast, 'status'>) => {
    setListOfToast((prevState) => [...prevState, { description, id, title, variant: 'danger' }])
  }

  const warning = ({ description, id, title }: Omit<FeedbackToast, 'status'>) => {
    setListOfToast((prevState) => [...prevState, { description, id, title, variant: 'warning' }])
  }

  return (
    <ToastContext.Provider value={{ error, success, warning, getFeedbackRequest, listOfToast }}>
      <ToastProviderPrimitive>{children}</ToastProviderPrimitive>
    </ToastContext.Provider>
  )
}

export const useToastContext = () => useContext(ToastContext) as ToastContextType
