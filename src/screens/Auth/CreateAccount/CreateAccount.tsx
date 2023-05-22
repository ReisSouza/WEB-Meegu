import React from 'react'
import { formatRemove } from '@format-string/core'
import { Heading } from '@ionext-ui/react'

import * as S from './styles'

import { useCreateUserMutation } from '@/services/users'
import { useToastContext } from '@/context/ToastProvider'
import { useRouter } from 'next/router'
import { FormCreateAccount } from '@/features/components/FormCreateAccount/FormCreateAccount'
import { CreateAccountFormType } from '@/features/components/FormCreateAccount/validation'

export const CreateAccount = () => {
  const { push } = useRouter()
  const { getFeedbackRequest } = useToastContext()
  const [createUser, { isLoading }] = useCreateUserMutation()

  const handleCreateUser = async (data: CreateAccountFormType) => {
    createUser({
      ...data,
      zipcode: formatRemove(data.zipcode),
    }).then((res) => {
      getFeedbackRequest(res)
      if (res && 'data' in res) {
        push('/auth/login')
      }
    })
  }

  return (
    <S.ContainerFormCreateAccount>
      <Heading align="center" color="secondary">
        Cadastre-se com o seu e-mail
      </Heading>
      <FormCreateAccount onSubmit={handleCreateUser} isLoading={isLoading} />
    </S.ContainerFormCreateAccount>
  )
}
