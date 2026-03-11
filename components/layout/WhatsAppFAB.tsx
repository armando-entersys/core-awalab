'use client';

import { Fab, Tooltip } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { WHATSAPP_URL } from '@/lib/constants';

export function WhatsAppFAB() {
  return (
    <Tooltip title="Chatea con nosotros" placement="left">
      <Fab
        component="a"
        href={`${WHATSAPP_URL}?text=${encodeURIComponent('Hola, necesito asesoria')}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar por WhatsApp"
        sx={{
          position: 'fixed',
          bottom: 24,
          right: 24,
          backgroundColor: '#25D366',
          color: '#FFFFFF',
          width: 60,
          height: 60,
          zIndex: 1000,
          animation: 'pulse 2s infinite',
          '&:hover': {
            backgroundColor: '#128C7E',
          },
        }}
      >
        <WhatsAppIcon sx={{ fontSize: 32 }} />
      </Fab>
    </Tooltip>
  );
}
