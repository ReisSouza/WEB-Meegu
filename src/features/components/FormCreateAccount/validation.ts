import { validationPassword } from '@/utils/validationPassword'
import dayjs from 'dayjs'
import { z } from 'zod'

export const CreateAccountSchema = z
  .object({
    name: z.string({ required_error: 'Nome é obrigatório' }).nonempty({ message: 'Nome é obrigatório' }),
    email: z.string({ required_error: 'Email e obrigatório' }).email({ message: 'Email invalido' }),
    password: z
      .string({ required_error: 'Senha é obrigatório' })
      .min(1, { message: 'Senha é obrigatório' })
      .refine((password) => validationPassword(password), {
        message:
          'Sua senha deve ter pelo menos 8 caracteres, letra maiúscula, letra minúscula, caractere especial e número',
      }),
    confirmPassword: z
      .string({ required_error: 'Confirmação de password e obrigatório' })
      .nonempty({ message: 'Confirmação de password e obrigatório' }),

    acceptedTermsAndConditions: z.boolean({ required_error: 'Aceite os termos de uso da plataforma' }).refine(
      (value) => {
        return value
      },
      { message: 'Aceite os termos de uso da plataforma' },
    ),
    birthdate: z.string({ required_error: 'Data é obrigatório' }).refine(
      (birthdate) => {
        const years = dayjs().diff(birthdate, 'years')

        return years >= 18
      },
      { message: 'Você tem que ser maior que 18 anos, para se cadastrar!' },
    ),
    document: z
      .string({ required_error: 'Documento é obrigatório' })
      .min(14, { message: 'Documento deve conter 14 caracteres incluindo.' }),
    zipcode: z
      .string({ required_error: 'CEP  é obrigatório' })
      .min(9, { message: 'Código deve conter 9 caracteres incluindo.' }),
  })
  .refine(({ password, confirmPassword }) => password === confirmPassword, {
    message: 'Senhas não confere',
    path: ['confirmPassword'],
  })

export type CreateAccountFormType = z.infer<typeof CreateAccountSchema>
