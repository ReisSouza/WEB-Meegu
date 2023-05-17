import React from 'react'
import { formatRemove } from '@format-string/core'
import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button, Checkbox, DatePicker, Heading, TextField } from '@ionext-ui/react'

import * as S from './styles'

import { CreateAccountSchema, CreateAccountFormType } from './validation'
import { useCreateUserMutation } from '@/services/users'
import { useToastContext } from '@/context/ToastProvider'
import { useRouter } from 'next/router'
import dayjs from 'dayjs'

export const CreateAccount = () => {
  const { push } = useRouter()
  const { getFeedbackRequest } = useToastContext()
  const [createUser, { isLoading }] = useCreateUserMutation()
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateAccountFormType>({
    resolver: zodResolver(CreateAccountSchema),
  })

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
      <S.FormCreateAccount onSubmit={handleSubmit(handleCreateUser)}>
        <Controller
          name="name"
          control={control}
          render={({ field }) => <TextField {...field} hint={errors.name?.message} label="Nome completo" />}
        />
        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <TextField {...field} type="email" label="Cadastre seu email" hint={errors.email?.message} />
          )}
        />
        <S.Flex>
          <Controller
            name="document"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                type="text"
                label="Documento"
                complementLabel="CPF ou CNPJ"
                formatStringType="cpfOurCnpj"
                hint={errors.document?.message}
              />
            )}
          />
          <Controller
            name="birthdate"
            control={control}
            defaultValue={dayjs(new Date()).format('YYYY-MM-DD')}
            render={({ field }) => (
              <DatePicker {...field} type="text" label="Data de nascimento" hint={errors.birthdate?.message} />
            )}
          />
        </S.Flex>
        <S.Flex>
          <Controller
            name="zipcode"
            control={control}
            render={({ field }) => (
              <TextField {...field} label="CEP" formatStringType="postalCode" hint={errors.zipcode?.message} />
            )}
          />
        </S.Flex>

        <Controller
          name="password"
          control={control}
          render={({ field }) => (
            <TextField {...field} label="Crie uma senha" type="password" hint={errors.password?.message} />
          )}
        />
        <Controller
          name="confirmPassword"
          control={control}
          render={({ field }) => (
            <TextField {...field} type="password" label="Confirme uma senha" hint={errors.confirmPassword?.message} />
          )}
        />
        <Controller
          name="acceptedTermsAndConditions"
          defaultValue={false}
          control={control}
          render={({ field }) => (
            <Checkbox
              hint={errors.acceptedTermsAndConditions?.message}
              label="Aceitar os termos de uso e políticas de privacidade."
              onCheckedChange={() => field.onChange(!field.value)}
            />
          )}
        />

        <Button isLoading={isLoading} css={{ marginTop: '$4' }} fullWidth type="submit">
          Cadastrar
        </Button>
      </S.FormCreateAccount>
    </S.ContainerFormCreateAccount>
  )
}
