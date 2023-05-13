import { validationPassword } from '@/utils/validationPassword'
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

    useTermsAccepted: z.boolean({ required_error: 'Aceite os termos de uso da plataforma' }).refine(
      (value) => {
        return value
      },
      { message: 'Aceite os termos de uso da plataforma' },
    ),
  })
  .refine(({ password, confirmPassword }) => password === confirmPassword, {
    message: 'Senhas não confere',
    path: ['confirmPassword'],
  })

export type CreateAccountFormType = z.infer<typeof CreateAccountSchema>
