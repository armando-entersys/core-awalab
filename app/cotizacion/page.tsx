import { Metadata } from 'next';
import { Box, Container, Typography, Grid } from '@mui/material';
import Image from 'next/image';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { generatePageMetadata } from '@/lib/seo';
import { FadeInOnScroll } from '@/components/ui/FadeInOnScroll';
import { colors } from '@/lib/design-tokens';
import CotizacionForm from './CotizacionForm';

export const metadata: Metadata = generatePageMetadata({
  title: 'Solicitar Cotizacion',
  description:
    'Solicita una cotizacion personalizada para equipo de laboratorio, seguridad industrial o tratamiento de agua. Respuesta en menos de 24 horas.',
  canonical: '/cotizacion',
  keywords: ['cotizacion awalab', 'cotizacion equipo laboratorio', 'cotizacion seguridad industrial'],
});

const highlights = [
  'Respuesta en menos de 24 horas',
  'Precios competitivos del mercado',
  'Asesoria tecnica incluida',
  'Sin compromiso',
];

export default function CotizacionPage() {
  return (
    <>
      {/* ── Hero ── */}
      <Box
        sx={{
          position: 'relative',
          minHeight: { xs: 320, md: 400 },
          display: 'flex',
          alignItems: 'center',
          overflow: 'hidden',
        }}
      >
        <Image
          src="/img/hero/hero-servicios.png"
          alt="Solicitar cotizacion Awalab"
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(160deg, rgba(13,27,42,0.93) 0%, rgba(30,74,113,0.82) 50%, rgba(21,53,84,0.9) 100%)',
            zIndex: 1,
          }}
        />
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2, py: { xs: 8, md: 0 } }}>
          <FadeInOnScroll>
            <Grid container spacing={4} alignItems="center">
              <Grid xs={12} md={7}>
                <Typography
                  variant="caption"
                  sx={{
                    display: 'inline-block',
                    color: colors.gray300,
                    fontWeight: 500,
                    letterSpacing: '0.12em',
                    fontSize: '0.78rem',
                    mb: 2.5,
                    textTransform: 'uppercase',
                    borderLeft: `3px solid ${colors.accent}`,
                    pl: 1.5,
                  }}
                >
                  Sin compromiso
                </Typography>
                <Typography
                  variant="h1"
                  sx={{
                    color: colors.white,
                    fontWeight: 800,
                    fontSize: { xs: '2.25rem', sm: '3rem', md: '3.5rem' },
                    mb: 2.5,
                    lineHeight: 1.1,
                    letterSpacing: '-0.03em',
                  }}
                >
                  Solicitar Cotizacion
                </Typography>
                <Typography
                  sx={{
                    color: 'rgba(255,255,255,0.85)',
                    fontWeight: 400,
                    maxWidth: 480,
                    lineHeight: 1.7,
                    fontSize: { xs: '1rem', md: '1.15rem' },
                    mb: 3,
                  }}
                >
                  Completa el formulario y recibe tu cotizacion personalizada en menos de 24 horas.
                </Typography>
                {highlights.map((h) => (
                  <Box key={h} sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                    <CheckCircleOutlineIcon sx={{ fontSize: 18, color: '#4FC3F7' }} />
                    <Typography sx={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.9rem' }}>
                      {h}
                    </Typography>
                  </Box>
                ))}
              </Grid>
            </Grid>
          </FadeInOnScroll>
        </Container>
      </Box>

      <CotizacionForm />
    </>
  );
}
