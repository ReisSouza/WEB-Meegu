import React from 'react'

import * as S from './styles'
import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { UpdateAccountFormType, UpdateAccountSchema } from './validation'
import { Button, Checkbox, DatePicker, TextField } from '@ionext-ui/react'
import dayjs from 'dayjs'
import { User } from '@/types/user'
import { formatString } from '@format-string/core'

export type FormUpdateAccountProps = {
  onSubmit: (data: UpdateAccountFormType) => void
  isLoading: boolean
  user?: User
}

export const FormUpdateAccount: React.FC<FormUpdateAccountProps> = ({
  onSubmit,
  isLoading,
  user,
}: FormUpdateAccountProps) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<UpdateAccountFormType>({
    resolver: zodResolver(UpdateAccountSchema),
  })

  return (
    <S.FormUpdateAccountContainer>
      <S.FormUpdateAccount onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="name"
          control={control}
          defaultValue={user?.name}
          render={({ field }) => <TextField {...field} hint={errors.name?.message} label="Nome completo" />}
        />
        <Controller
          name="email"
          control={control}
          defaultValue={user?.email}
          render={({ field }) => (
            <TextField {...field} type="email" label="Cadastre seu email" hint={errors.email?.message} />
          )}
        />
        <S.Flex>
          <Controller
            name="document"
            control={control}
            defaultValue={formatString({ value: user?.document, type: 'cpfOurCnpj' })}
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
            defaultValue={dayjs(user?.birthdate || new Date()).format('YYYY-MM-DD')}
            render={({ field }) => (
              <DatePicker {...field} type="text" label="Data de nascimento" hint={errors.birthdate?.message} />
            )}
          />
        </S.Flex>
        <S.Flex>
          <Controller
            name="zipcode"
            control={control}
            defaultValue={formatString({ value: user?.zipcode, type: 'postalCode' })}
            render={({ field }) => (
              <TextField {...field} label="CEP" formatStringType="postalCode" hint={errors.zipcode?.message} />
            )}
          />
        </S.Flex>

        <Controller
          name="acceptedTermsAndConditions"
          defaultValue={user?.acceptedTermsAndConditions || false}
          control={control}
          render={({ field }) => (
            <Checkbox
              defaultChecked={field.value}
              hint={errors.acceptedTermsAndConditions?.message}
              label="Aceitar os termos de uso e políticas de privacidade."
              onCheckedChange={() => field.onChange(!field.value)}
            />
          )}
        />

        <Button isLoading={isLoading} css={{ marginTop: '$4' }} fullWidth type="submit">
          Cadastrar
        </Button>
      </S.FormUpdateAccount>
    </S.FormUpdateAccountContainer>
  )
}
