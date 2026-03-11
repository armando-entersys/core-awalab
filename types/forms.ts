import { z } from 'zod';

export const contactFormSchema = z.object({
  name: z.string().min(2, 'Nombre requerido').max(100),
  company: z.string().min(2, 'Empresa requerida').max(100),
  email: z.string().email('Email invalido'),
  phone: z.string().regex(
    /^(\+52)?[\s-]?\d{2,3}[\s-]?\d{3,4}[\s-]?\d{4}$/,
    'Telefono invalido (10 digitos)',
  ),
  subject: z.enum([
    'cotizacion',
    'servicio-tecnico',
    'soporte-postventa',
    'informacion-general',
    'alianza-comercial',
    'otro',
  ]),
  message: z.string().min(10, 'Mensaje muy corto').max(2000),
  privacyAccepted: z.literal(true, {
    errorMap: () => ({ message: 'Debes aceptar el aviso de privacidad' }),
  }),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

export const quoteFormSchema = z.object({
  name: z.string().min(2).max(100),
  company: z.string().min(2).max(100),
  email: z.string().email(),
  phone: z.string().regex(/^(\+52)?[\s-]?\d{2,3}[\s-]?\d{3,4}[\s-]?\d{4}$/),
  position: z.string().optional(),
  items: z
    .array(
      z.object({
        productName: z.string().min(1),
        productSku: z.string().optional(),
        quantity: z.number().min(1).max(10000),
        specifications: z.string().optional(),
      }),
    )
    .min(1, 'Agrega al menos un producto')
    .max(20),
  industry: z.string().optional(),
  urgency: z.enum(['normal', 'urgente']),
  comments: z.string().max(2000).optional(),
  privacyAccepted: z.literal(true),
});

export type QuoteFormData = z.infer<typeof quoteFormSchema>;
