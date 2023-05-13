import React from 'react'
import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button, Checkbox, DatePicker, Heading, Select, TextField } from '@ionext-ui/react'

import * as S from './styles'

import { CreateAccountSchema, CreateAccountFormType } from './validation'

export const CreateAccount = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateAccountFormType>({
    resolver: zodResolver(CreateAccountSchema),
  })

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
              <TextField
                css={{ maxWidth: 200 }}
                {...field}
                label="CEP"
                formatStringType="postalCode"
                hint={errors.zipcode?.message}
              />
            )}
          />
          <Controller
            name="street"
            control={control}
            render={({ field }) => (
              <TextField css={{ width: '100%' }} {...field} label="Rua" hint={errors.street?.message} />
            )}
          />
        </S.Flex>
        <S.Flex>
          <Controller
            name="number"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                type="number"
                label="Numero"
                formatStringType="number"
                hint={errors.number?.message}
                css={{ width: 200, minWidth: 200, maxWidth: 200 }}
              />
            )}
          />
          <Controller
            name="complement"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                label="complemento"
                css={{ width: '100%' }}
                hint={errors.complement?.message}
                status={errors.complement?.message ? 'error' : 'default'}
              />
            )}
          />
        </S.Flex>
        <S.Flex>
          <Controller
            name="city"
            control={control}
            render={({ field }) => (
              <Select
                {...field}
                label="Cidade"
                onValueChange={field.onChange}
                hint={errors.city?.message}
                options={[
                  { label: 'Serra', value: 'SE' },
                  { label: 'Vitoria', value: 'Vix' },
                ]}
              />
            )}
          />
          <Controller
            name="district"
            control={control}
            render={({ field }) => (
              <Select
                {...field}
                label="Estado"
                onValueChange={field.onChange}
                options={[{ label: 'Espirito Santo', value: 'ES' }]}
                hint={errors.district?.message}
              />
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

        <Button css={{ marginTop: '$4' }} fullWidth type="submit">
          Cadastrar
        </Button>
      </S.FormCreateAccount>
    </S.ContainerFormCreateAccount>
  )
}
