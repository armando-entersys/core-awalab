import { Metadata } from 'next';
import { Box, Container, Typography, Grid, CardContent, TextField, Button, Stack } from '@mui/material';
import Link from 'next/link';
import Image from 'next/image';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { generatePageMetadata } from '@/lib/seo';
import { FadeInOnScroll } from '@/components/ui/FadeInOnScroll';
import { GlowCard } from '@/components/ui/GlowCard';
import {
  colors,
  card,
  section,
  sectionLabel,
  sectionTitle,
  sectionSubtitle,
  btnPrimary,
  btnPrimaryOnDark,
  btnSecondaryOnDark,
} from '@/lib/design-tokens';

export const metadata: Metadata = generatePageMetadata({
  title: 'Ofertas y Promociones',
  description:
    'Descubre las mejores ofertas y promociones en equipo de laboratorio, seguridad industrial y tratamiento de agua. Suscribete para recibir ofertas exclusivas.',
  canonical: '/ofertas',
  keywords: [
    'ofertas equipo laboratorio',
    'promociones seguridad industrial',
    'descuentos equipo industrial',
    'ofertas awalab',
  ],
});

export default function OfertasPage() {
  return (
    <>
      {/* ── Hero ── */}
      <Box
        sx={{
          position: 'relative',
          minHeight: { xs: 380, md: 480 },
          display: 'flex',
          alignItems: 'center',
          overflow: 'hidden',
        }}
      >
        <Image
          src="/img/hero/hero-home.png"
          alt="Ofertas y promociones Awalab"
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
              Precios especiales
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
              Ofertas y Promociones
            </Typography>
            <Typography
              sx={{
                color: 'rgba(255,255,255,0.85)',
                fontWeight: 400,
                maxWidth: 560,
                lineHeight: 1.7,
                fontSize: { xs: '1rem', md: '1.15rem' },
              }}
            >
              Aprovecha nuestras promociones especiales en equipo de laboratorio, seguridad industrial
              y tratamiento de agua.
            </Typography>
          </FadeInOnScroll>
        </Container>
      </Box>

      {/* ── Coming Soon ── */}
      <Box sx={{ ...section, background: `linear-gradient(180deg, ${colors.white} 0%, ${colors.gray50} 100%)` }}>
        <Container maxWidth="md">
          <FadeInOnScroll>
            <Box sx={{ textAlign: 'center' }}>
              <Box
                sx={{
                  width: 80,
                  height: 80,
                  borderRadius: '20px',
                  background: `linear-gradient(135deg, ${colors.accent} 0%, ${colors.navy} 100%)`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  mx: 'auto',
                  mb: 4,
                  boxShadow: '0 8px 32px rgba(10,135,198,0.25)',
                }}
              >
                <Typography sx={{ color: colors.white, fontSize: '2rem' }}>%</Typography>
              </Box>
              <Typography variant="h2" sx={{ ...sectionTitle, mb: 2 }}>Proximamente</Typography>
              <Typography
                sx={{
                  color: colors.textSecondary,
                  lineHeight: 1.8,
                  fontSize: '1.05rem',
                  maxWidth: 520,
                  mx: 'auto',
                  mb: 2,
                }}
              >
                Estamos preparando ofertas exclusivas para ti. Muy pronto podras encontrar aqui
                promociones especiales, descuentos por volumen y ofertas de temporada en todas
                nuestras lineas de negocio.
              </Typography>
              <Typography
                sx={{
                  color: colors.textSecondary,
                  lineHeight: 1.8,
                  fontSize: '1.05rem',
                  maxWidth: 520,
                  mx: 'auto',
                }}
              >
                Mientras tanto, contactanos directamente para solicitar una cotizacion personalizada
                con los mejores precios del mercado.
              </Typography>
            </Box>
          </FadeInOnScroll>
        </Container>
      </Box>

      {/* ── Newsletter Signup ── */}
      <Box sx={{ ...section, backgroundColor: colors.offWhite }}>
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid xs={12} md={6}>
              <FadeInOnScroll direction="left">
                <Typography variant="overline" sx={{ ...sectionLabel, textAlign: 'left' }}>
                  Notificaciones
                </Typography>
                <Typography variant="h3" sx={{ fontWeight: 700, mb: 2, color: colors.text, letterSpacing: '-0.02em' }}>
                  Se el primero en enterarte
                </Typography>
                <Typography sx={{ color: colors.textSecondary, lineHeight: 1.8, fontSize: '1.05rem' }}>
                  Suscribete a nuestro boletin y recibe las ofertas y promociones directamente
                  en tu correo electronico. Sin spam, solo las mejores oportunidades.
                </Typography>
              </FadeInOnScroll>
            </Grid>
            <Grid xs={12} md={6}>
              <FadeInOnScroll delay={0.15} direction="right">
                <GlowCard
                  glowColor="rgba(10,135,198,0.06)"
                  sx={{ ...card, p: 0 }}
                >
                  <CardContent sx={{ p: 4 }}>
                    <Typography variant="h5" sx={{ fontWeight: 700, mb: 3, color: colors.text }}>
                      Suscribete al boletin
                    </Typography>
                    <TextField
                      fullWidth
                      label="Nombre completo"
                      variant="outlined"
                      sx={{ mb: 2 }}
                      disabled
                    />
                    <TextField
                      fullWidth
                      label="Correo electronico"
                      variant="outlined"
                      type="email"
                      sx={{ mb: 2 }}
                      disabled
                    />
                    <TextField
                      fullWidth
                      label="Empresa"
                      variant="outlined"
                      sx={{ mb: 3 }}
                      disabled
                    />
                    <Button
                      variant="contained"
                      fullWidth
                      size="large"
                      disabled
                      sx={{ ...btnPrimary, opacity: 0.5 }}
                    >
                      Suscribirme (proximamente)
                    </Button>
                  </CardContent>
                </GlowCard>
              </FadeInOnScroll>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* ── CTA ── */}
      <Box
        sx={{
          background: `linear-gradient(160deg, ${colors.accent} 0%, ${colors.navy} 50%, ${colors.navyDark} 100%)`,
          py: { xs: 10, md: 14 },
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            background: 'radial-gradient(ellipse at 30% 50%, rgba(79,195,247,0.1) 0%, transparent 50%)',
          }}
        />
        <Container maxWidth="sm" sx={{ position: 'relative', zIndex: 1 }}>
          <FadeInOnScroll>
            <Typography
              variant="h3"
              sx={{
                color: colors.white,
                fontWeight: 700,
                mb: 2,
                fontSize: { xs: '1.5rem', md: '2.25rem' },
                lineHeight: 1.2,
              }}
            >
              ¿Necesitas una cotizacion ahora?
            </Typography>
            <Typography
              sx={{ color: 'rgba(255,255,255,0.7)', mb: 5, fontSize: '1.05rem', lineHeight: 1.7 }}
            >
              No esperes a las ofertas. Solicita una cotizacion personalizada con precios competitivos.
            </Typography>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="center">
              <Button
                component={Link}
                href="/cotizacion"
                variant="contained"
                size="large"
                endIcon={<ArrowForwardIcon />}
                sx={btnPrimaryOnDark}
              >
                Solicitar cotizacion
              </Button>
              <Button component={Link} href="/contacto" variant="outlined" size="large" sx={btnSecondaryOnDark}>
                Contactar asesor
              </Button>
            </Stack>
          </FadeInOnScroll>
        </Container>
      </Box>
    </>
  );
}
