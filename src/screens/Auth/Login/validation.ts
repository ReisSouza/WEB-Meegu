import { z } from 'zod'

export const CredentialsSchema = z.object({
  email: z.string({ required_error: 'E-mail é obrigatório' }).email({ message: 'E-mail é obrigatório' }),
  password: z.string({ required_error: 'Senha é obrigatória' }).nonempty({ message: 'Senha é obrigatória' }),
})

export type CredentialsFormData = z.infer<typeof CredentialsSchema>
