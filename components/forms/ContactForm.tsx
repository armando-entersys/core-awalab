'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import {
  Box,
  TextField,
  Button,
  MenuItem,
  Alert,
  CircularProgress,
  Typography,
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const contactSchema = z.object({
  name: z.string().min(2, 'Ingresa tu nombre completo'),
  email: z.string().email('Ingresa un email valido'),
  phone: z.string().min(10, 'Ingresa un telefono valido').optional().or(z.literal('')),
  company: z.string().optional(),
  subject: z.string().min(1, 'Selecciona un asunto'),
  message: z.string().min(10, 'El mensaje debe tener al menos 10 caracteres'),
});

type ContactFormData = z.infer<typeof contactSchema>;

const SUBJECTS = [
  'Cotizacion de productos',
  'Informacion de servicios',
  'Soporte tecnico',
  'Facturacion / Pagos',
  'Alianza comercial',
  'Otro',
];

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      company: '',
      subject: '',
      message: '',
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      setError('');
      // For now, simulate sending (API route will be built in Phase 2)
      await new Promise((resolve) => setTimeout(resolve, 1500));
      console.log('Contact form data:', data);
      setSubmitted(true);
    } catch {
      setError('Hubo un error al enviar tu mensaje. Intenta de nuevo o contactanos por WhatsApp.');
    }
  };

  if (submitted) {
    return (
      <Box
        sx={{
          textAlign: 'center',
          py: 6,
          px: 4,
          borderRadius: '20px',
          background: 'linear-gradient(135deg, rgba(76,175,80,0.04) 0%, rgba(76,175,80,0.08) 100%)',
          border: '1px solid rgba(76,175,80,0.2)',
        }}
      >
        <CheckCircleIcon sx={{ fontSize: 64, color: '#4CAF50', mb: 2 }} />
        <Typography variant="h5" sx={{ fontWeight: 700, mb: 1, color: '#1A1A2E' }}>
          Mensaje enviado
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.7 }}>
          Gracias por contactarnos. Nuestro equipo te respondera en menos de 24 horas.
        </Typography>
      </Box>
    );
  }

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      sx={{ display: 'flex', flexDirection: 'column', gap: 2.5 }}
    >
      {error && (
        <Alert severity="error" sx={{ borderRadius: '12px' }}>
          {error}
        </Alert>
      )}

      <Box sx={{ display: 'flex', gap: 2.5, flexDirection: { xs: 'column', sm: 'row' } }}>
        <TextField
          {...register('name')}
          label="Nombre completo"
          error={!!errors.name}
          helperText={errors.name?.message}
          fullWidth
          required
          sx={fieldSx}
        />
        <TextField
          {...register('email')}
          label="Email"
          type="email"
          error={!!errors.email}
          helperText={errors.email?.message}
          fullWidth
          required
          sx={fieldSx}
        />
      </Box>

      <Box sx={{ display: 'flex', gap: 2.5, flexDirection: { xs: 'column', sm: 'row' } }}>
        <TextField
          {...register('phone')}
          label="Telefono"
          error={!!errors.phone}
          helperText={errors.phone?.message}
          fullWidth
          sx={fieldSx}
        />
        <TextField
          {...register('company')}
          label="Empresa"
          fullWidth
          sx={fieldSx}
        />
      </Box>

      <TextField
        {...register('subject')}
        label="Asunto"
        select
        error={!!errors.subject}
        helperText={errors.subject?.message}
        fullWidth
        required
        sx={fieldSx}
      >
        {SUBJECTS.map((s) => (
          <MenuItem key={s} value={s}>
            {s}
          </MenuItem>
        ))}
      </TextField>

      <TextField
        {...register('message')}
        label="Mensaje"
        multiline
        rows={4}
        error={!!errors.message}
        helperText={errors.message?.message}
        fullWidth
        required
        sx={fieldSx}
      />

      <Button
        type="submit"
        variant="contained"
        size="large"
        disabled={isSubmitting}
        endIcon={isSubmitting ? <CircularProgress size={20} color="inherit" /> : <SendIcon />}
        sx={{
          backgroundColor: '#0A87C6',
          fontWeight: 700,
          py: 1.75,
          fontSize: '1rem',
          borderRadius: '12px',
          textTransform: 'none',
          boxShadow: '0 4px 16px rgba(10,135,198,0.3)',
          '&:hover': {
            backgroundColor: '#1E4A71',
            transform: 'translateY(-2px)',
            boxShadow: '0 8px 24px rgba(30,74,113,0.3)',
          },
          transition: 'all 0.3s ease',
        }}
      >
        {isSubmitting ? 'Enviando...' : 'Enviar mensaje'}
      </Button>
    </Box>
  );
}

const fieldSx = {
  '& .MuiOutlinedInput-root': {
    borderRadius: '12px',
    '&:hover .MuiOutlinedInput-notchedOutline': {
      borderColor: '#0A87C6',
    },
    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: '#0A87C6',
      borderWidth: 2,
    },
  },
  '& .MuiInputLabel-root.Mui-focused': {
    color: '#0A87C6',
  },
};
