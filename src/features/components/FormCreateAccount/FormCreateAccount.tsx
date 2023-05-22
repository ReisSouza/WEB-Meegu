import React from 'react'

import * as S from './styles'
import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { CreateAccountFormType, CreateAccountSchema } from './validation'
import { Button, Checkbox, DatePicker, TextField } from '@ionext-ui/react'
import dayjs from 'dayjs'

export type FormCreateAccountProps = {
  onSubmit: (data: CreateAccountFormType) => void
  isLoading: boolean
}

export const FormCreateAccount: React.FC<FormCreateAccountProps> = ({
  onSubmit,
  isLoading,
}: FormCreateAccountProps) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateAccountFormType>({
    resolver: zodResolver(CreateAccountSchema),
  })
  return (
    <S.FormCreateAccountContainer>
      <S.FormCreateAccount onSubmit={handleSubmit(onSubmit)}>
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
    </S.FormCreateAccountContainer>
  )
}
