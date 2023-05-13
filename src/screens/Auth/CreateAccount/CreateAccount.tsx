import React from 'react'
import { useRouter } from 'next/router'
import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button, Checkbox, Heading, TextField } from '@ionext-ui/react'

import * as S from './styles'

import { CreateAccountSchema, CreateAccountFormType } from './validation'

export const CreateAccount = () => {
  const { push } = useRouter()

  const {
    control,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<CreateAccountFormType>({
    resolver: zodResolver(CreateAccountSchema),
  })

  const canSubmit =
    watch('email') !== undefined &&
    watch('name') !== undefined &&
    watch('password') !== undefined &&
    watch('confirmPassword') !== undefined

  const handleCreateUser = async (data: CreateAccountFormType) => {
    try {
      console.log(data)
    } catch (error) {}
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
          render={({ field }) => (
            <TextField
              {...field}
              label="Nome completo"
              hint={errors.name?.message}
              status={errors.name?.message ? 'error' : 'default'}
            />
          )}
        />
        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              label="Cadastre seu email"
              type="email"
              hint={errors.email?.message}
              status={errors.email?.message ? 'error' : 'default'}
            />
          )}
        />

        <Controller
          name="password"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              label="Crie uma senha"
              type="password"
              hint={errors.password?.message}
              status={errors.password?.message ? 'error' : 'default'}
            />
          )}
        />

        <Controller
          name="confirmPassword"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              label="Confirme uma senha"
              type="password"
              hint={errors.confirmPassword?.message}
              status={errors.confirmPassword?.message ? 'error' : 'default'}
            />
          )}
        />
        <Controller
          name="useTermsAccepted"
          defaultValue={false}
          control={control}
          render={({ field }) => (
            <Checkbox
              hint={errors.useTermsAccepted?.message}
              label="Aceitar os termos de uso e políticas de privacidade."
              onCheckedChange={() => field.onChange(!field.value)}
            />
          )}
        />

        <Button css={{ marginTop: '$4' }} disabled={!canSubmit} fullWidth type="submit">
          Continuar
        </Button>
        <Button type="button" onClick={() => push('/auth/login')} fullWidth variant="outlined">
          Voltar
        </Button>
      </S.FormCreateAccount>
    </S.ContainerFormCreateAccount>
  )
}
