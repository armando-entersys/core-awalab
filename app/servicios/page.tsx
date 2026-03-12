import { Metadata } from 'next';
import { Box, Container, Typography, Grid, Button, Stack, CardContent, Chip } from '@mui/material';
import Link from 'next/link';
import Image from 'next/image';
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import SpeedIcon from '@mui/icons-material/Speed';
import BuildIcon from '@mui/icons-material/Build';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import VerifiedIcon from '@mui/icons-material/Verified';
import { generatePageMetadata } from '@/lib/seo';
import { btnPrimaryOnDark, btnSecondaryOnDark } from '@/lib/design-tokens';
import { FadeInOnScroll } from '@/components/ui/FadeInOnScroll';
import { GlowCard } from '@/components/ui/GlowCard';

export const metadata: Metadata = generatePageMetadata({
  title: 'Servicios Especializados',
  description: 'Servicios industriales: PTAR, metrologia con acreditacion EMA, mantenimiento preventivo/correctivo y consultoria Six Sigma y KAIZEN.',
  canonical: '/servicios',
  keywords: ['servicios industriales', 'PTAR', 'metrologia EMA', 'mantenimiento industrial', 'consultoria six sigma'],
});

const services = [
  {
    icon: <WaterDropIcon sx={{ fontSize: 36, color: '#FFFFFF' }} />,
    title: 'Plantas de Tratamiento (PTAR)',
    description: 'Diseno, instalacion y monitoreo de plantas de tratamiento de aguas residuales. Cumplimiento NOM-001, NOM-002 y NOM-003 SEMARNAT.',
    href: '/servicios/ptar',
    highlights: ['Diagnostico gratuito', 'Cumplimiento normativo', 'Monitoreo continuo'],
    gradient: 'linear-gradient(135deg, #0A87C6 0%, #1565C0 100%)',
  },
  {
    icon: <SpeedIcon sx={{ fontSize: 36, color: '#FFFFFF' }} />,
    title: 'Metrologia y Calibracion',
    description: 'Servicios de calibracion acreditados ante la EMA. Certificados con trazabilidad al CENAM para instrumentos de laboratorio e industriales.',
    href: '/servicios/metrologia',
    highlights: ['Acreditacion EMA', 'Trazabilidad CENAM', 'Certificados oficiales'],
    gradient: 'linear-gradient(135deg, #1E4A71 0%, #153554 100%)',
  },
  {
    icon: <BuildIcon sx={{ fontSize: 36, color: '#FFFFFF' }} />,
    title: 'Mantenimiento',
    description: 'Programas de mantenimiento preventivo, correctivo y predictivo para equipos de laboratorio, sistemas de agua y seguridad.',
    href: '/servicios/mantenimiento',
    highlights: ['Preventivo programado', 'Correctivo urgente', 'Predictivo con IoT'],
    gradient: 'linear-gradient(135deg, #FF9800 0%, #E65100 100%)',
  },
  {
    icon: <TrendingUpIcon sx={{ fontSize: 36, color: '#FFFFFF' }} />,
    title: 'Consultoria',
    description: 'Implementacion de metodologias Six Sigma (DMAIC) y KAIZEN para optimizar procesos industriales, reducir costos y mejorar calidad.',
    href: '/servicios/consultoria',
    highlights: ['Six Sigma DMAIC', 'KAIZEN', 'Lean Manufacturing'],
    gradient: 'linear-gradient(135deg, #4CAF50 0%, #2E7D32 100%)',
  },
];

export default function ServiciosPage() {
  return (
    <>
      {/* Hero */}
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          minHeight: { xs: '50vh', md: '60vh' },
          display: 'flex',
          alignItems: 'center',
          overflow: 'hidden',
        }}
      >
        <Image
          src="/img/hero/hero-servicios.png"
          alt="Servicios especializados Awalab"
          fill
          priority
          style={{ objectFit: 'cover' }}
          quality={90}
        />
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(135deg, rgba(13,27,42,0.93) 0%, rgba(30,74,113,0.82) 50%, rgba(10,135,198,0.6) 100%)',
            zIndex: 1,
          }}
        />
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2, py: { xs: 10, md: 0 } }}>
          <FadeInOnScroll>
            <Box
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 1,
                backgroundColor: 'rgba(10,135,198,0.2)',
                backdropFilter: 'blur(8px)',
                border: '1px solid rgba(10,135,198,0.3)',
                borderRadius: '100px',
                px: 2.5,
                py: 0.75,
                mb: 3,
              }}
            >
              <VerifiedIcon sx={{ fontSize: 16, color: '#4FC3F7' }} />
              <Typography
                variant="caption"
                sx={{ color: '#B3E5FC', fontWeight: 600, letterSpacing: '0.05em', fontSize: '0.8rem' }}
              >
                ISO 9001 | EMA | CONAGUA
              </Typography>
            </Box>
            <Typography
              variant="h1"
              sx={{
                color: '#FFFFFF',
                fontSize: { xs: '2.25rem', sm: '3rem', md: '3.75rem' },
                fontWeight: 800,
                lineHeight: 1.1,
                mb: 3,
                letterSpacing: '-0.03em',
                maxWidth: 700,
              }}
            >
              Servicios
              <br />
              Especializados
            </Typography>
            <Typography
              variant="h5"
              sx={{
                color: 'rgba(255,255,255,0.9)',
                fontWeight: 400,
                maxWidth: 600,
                lineHeight: 1.7,
                fontSize: { xs: '1rem', md: '1.2rem' },
              }}
            >
              Soluciones integrales respaldadas por un equipo de ingenieros certificados y
              mas de 25 anos de experiencia en la industria.
            </Typography>
          </FadeInOnScroll>
        </Container>
      </Box>

      {/* Services Grid */}
      <Box sx={{ py: { xs: 10, md: 14 }, background: 'linear-gradient(180deg, #FFFFFF 0%, #F0F7FF 100%)' }}>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            {services.map((svc, index) => (
              <Grid key={svc.title} xs={12} md={6}>
                <FadeInOnScroll delay={index * 0.12} direction="up">
                  <GlowCard
                    sx={{
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      borderRadius: '24px',
                      border: '1px solid rgba(0,0,0,0.06)',
                      boxShadow: '0 4px 24px rgba(0,0,0,0.04)',
                      transition: 'all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1)',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        boxShadow: '0 20px 60px rgba(30,74,113,0.12)',
                        '& .svc-arrow': { transform: 'translateX(4px)' },
                      },
                    }}
                  >
                    <CardContent sx={{ p: { xs: 3, md: 4 }, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                      <Box
                        sx={{
                          width: 64,
                          height: 64,
                          borderRadius: '18px',
                          background: svc.gradient,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          mb: 3,
                          boxShadow: '0 4px 16px rgba(0,0,0,0.15)',
                        }}
                      >
                        {svc.icon}
                      </Box>
                      <Typography variant="h5" sx={{ fontWeight: 700, mb: 1.5, color: '#1A1A2E' }}>
                        {svc.title}
                      </Typography>
                      <Typography variant="body1" color="text.secondary" sx={{ mb: 3, lineHeight: 1.7, flexGrow: 1 }}>
                        {svc.description}
                      </Typography>
                      <Stack direction="row" flexWrap="wrap" gap={1} sx={{ mb: 3 }}>
                        {svc.highlights.map((h) => (
                          <Chip
                            key={h}
                            label={h}
                            size="small"
                            sx={{
                              backgroundColor: 'rgba(10,135,198,0.06)',
                              color: '#0A87C6',
                              fontWeight: 600,
                              fontSize: '0.75rem',
                              borderRadius: '8px',
                            }}
                          />
                        ))}
                      </Stack>
                      <Button
                        component={Link}
                        href={svc.href}
                        endIcon={
                          <ArrowForwardIcon
                            className="svc-arrow"
                            sx={{ transition: 'transform 0.3s ease' }}
                          />
                        }
                        sx={{
                          alignSelf: 'flex-start',
                          color: '#0A87C6',
                          fontWeight: 600,
                          textTransform: 'none',
                          fontSize: '0.95rem',
                          px: 0,
                          '&:hover': { backgroundColor: 'transparent', color: '#1E4A71' },
                        }}
                      >
                        Conocer mas
                      </Button>
                    </CardContent>
                  </GlowCard>
                </FadeInOnScroll>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* CTA */}
      <Box
        sx={{
          background: 'linear-gradient(135deg, #0A87C6 0%, #1E4A71 50%, #0D1B2A 100%)',
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
            background:
              'radial-gradient(ellipse at 30% 50%, rgba(79,195,247,0.1) 0%, transparent 50%)',
          }}
        />
        <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1 }}>
          <FadeInOnScroll>
            <Typography
              variant="h3"
              sx={{
                color: '#FFFFFF',
                fontWeight: 800,
                mb: 2,
                fontSize: { xs: '1.5rem', md: '2.25rem' },
              }}
            >
              ¿Necesitas un servicio especializado?
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: 'rgba(255,255,255,0.8)', mb: 5, fontSize: '1.1rem', lineHeight: 1.7 }}
            >
              Nuestro equipo de ingenieros certificados esta listo para disenar la solucion que tu operacion necesita.
            </Typography>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="center">
              <Button component={Link} href="/cotizacion" variant="contained" size="large" sx={btnPrimaryOnDark}>
                Solicitar Cotizacion
              </Button>
              <Button component={Link} href="/contacto" variant="outlined" size="large" sx={btnSecondaryOnDark}>
                Contactar equipo tecnico
              </Button>
            </Stack>
          </FadeInOnScroll>
        </Container>
      </Box>
    </>
  );
}
