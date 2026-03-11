import { Metadata } from 'next';
import { Box, Container, Typography } from '@mui/material';
import RequestQuoteIcon from '@mui/icons-material/RequestQuote';
import { generatePageMetadata } from '@/lib/seo';
import CotizacionForm from './CotizacionForm';

export const metadata: Metadata = generatePageMetadata({
  title: 'Solicitar Cotizacion',
  description:
    'Solicita una cotizacion personalizada para equipo de laboratorio, seguridad industrial o tratamiento de agua. Respuesta en menos de 24 horas.',
  canonical: '/cotizacion',
  keywords: ['cotizacion awalab', 'cotizacion equipo laboratorio', 'cotizacion seguridad industrial'],
});

export default function CotizacionPage() {
  return (
    <>
      {/* Hero */}
      <Box
        sx={{
          background: 'linear-gradient(135deg, #1E4A71 0%, #153554 100%)',
          color: '#FFFFFF',
          py: { xs: 8, md: 10 },
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
            <RequestQuoteIcon sx={{ fontSize: 40 }} />
            <Typography variant="h1" sx={{ color: '#FFFFFF', fontSize: { xs: '2rem', md: '3rem' } }}>
              Solicitar cotizacion
            </Typography>
          </Box>
          <Typography variant="h5" sx={{ color: 'rgba(255,255,255,0.85)', fontWeight: 400, maxWidth: 700 }}>
            Completa el formulario y recibe tu cotizacion personalizada en menos de 24 horas.
          </Typography>
        </Container>
      </Box>

      <CotizacionForm />
    </>
  );
}
