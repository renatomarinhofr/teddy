import { z } from 'zod';

export const loginSchema = z.object({
  email: z.string().email('Endereço de email inválido'),
  password: z
    .string()
    .min(6, 'A senha deve ter no mínimo 6 caracteres')
    .max(100, 'A senha deve ter no máximo 100 caracteres'),
  rememberMe: z.boolean().optional(),
});

export type LoginFormInputs = z.infer<typeof loginSchema>;
