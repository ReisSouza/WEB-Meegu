import dayjs from 'dayjs'
import { z } from 'zod'

export const UpdateAccountSchema = z.object({
  name: z.string({ required_error: 'Nome é obrigatório' }).nonempty({ message: 'Nome é obrigatório' }),
  email: z.string({ required_error: 'Email e obrigatório' }).email({ message: 'Email invalido' }),

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

export type UpdateAccountFormType = z.infer<typeof UpdateAccountSchema>
