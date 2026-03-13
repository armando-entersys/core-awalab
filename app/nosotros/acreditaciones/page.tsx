import { Metadata } from 'next';
import { Box, Container, Typography, Grid, CardContent, Stack, Button } from '@mui/material';
import Link from 'next/link';
import Image from 'next/image';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { generatePageMetadata } from '@/lib/seo';
import { FadeInOnScroll } from '@/components/ui/FadeInOnScroll';
import { GlowCard } from '@/components/ui/GlowCard';
import { CountUp } from '@/components/ui/CountUp';
import {
  colors,
  card,
  section,
  sectionLabel,
  sectionTitle,
  sectionSubtitle,
  btnPrimaryOnDark,
  btnSecondaryOnDark,
} from '@/lib/design-tokens';

export const metadata: Metadata = generatePageMetadata({
  title: 'Acreditaciones y Certificaciones',
  description:
    'Awalab de Mexico cuenta con certificacion ISO 9001:2015, acreditacion EMA y registro CONAGUA. Calidad respaldada por las instituciones mas exigentes.',
  canonical: '/nosotros/acreditaciones',
  keywords: ['certificaciones awalab', 'iso 9001 awalab', 'ema acreditacion', 'conagua registro'],
});

const CERTIFICATIONS_DATA = [
  {
    name: 'ISO 9001:2015',
    subtitle: 'Sistema de Gestion de Calidad',
    color: '#1E4A71',
    gradient: 'linear-gradient(135deg, #1E4A71 0%, #0D1B2A 100%)',
    letter: 'ISO',
    description:
      'La norma ISO 9001:2015 certifica nuestro Sistema de Gestion de Calidad. Garantiza que todos nuestros procesos, desde la recepcion de pedidos hasta la entrega final, cumplen con los mas altos estandares.',
    benefits: [
      'Procesos estandarizados y documentados',
      'Mejora continua en todas las areas',
      'Trazabilidad completa de productos y servicios',
      'Satisfaccion del cliente como prioridad',
      'Auditorias periodicas de cumplimiento',
    ],
  },
  {
    name: 'EMA',
    subtitle: 'Entidad Mexicana de Acreditacion',
    color: '#0A87C6',
    gradient: `linear-gradient(135deg, ${colors.accent} 0%, #1565C0 100%)`,
    letter: 'EMA',
    description:
      'La acreditacion EMA reconoce nuestra competencia tecnica para comercializar y dar soporte a equipo de laboratorio. Otorgada por el organismo de evaluacion de la conformidad mas importante de Mexico.',
    benefits: [
      'Competencia tecnica reconocida oficialmente',
      'Personal capacitado y evaluado periodicamente',
      'Equipos con trazabilidad metrologica',
      'Reconocimiento nacional e internacional',
      'Confianza en la precision de nuestros productos',
    ],
  },
  {
    name: 'CONAGUA',
    subtitle: 'Comision Nacional del Agua',
    color: '#2E7D32',
    gradient: 'linear-gradient(135deg, #2E7D32 0%, #1B5E20 100%)',
    letter: 'CNA',
    description:
      'El registro ante CONAGUA nos habilita para ejecutar proyectos de tratamiento, distribucion y analisis de agua. Incluye diseno e implementacion de plantas PTAR y sistemas de potabilizacion.',
    benefits: [
      'Habilitacion para proyectos de tratamiento de agua',
      'Cumplimiento con normatividad ambiental',
      'Diseno e instalacion de plantas PTAR',
      'Analisis de calidad del agua',
      'Compromiso con el cuidado del recurso hidrico',
    ],
  },
];

export default function AcreditacionesPage() {
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
          src="/img/hero/hero-nosotros.png"
          alt="Acreditaciones y certificaciones Awalab"
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
            <Box
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 1,
                backgroundColor: 'rgba(16,185,129,0.2)',
                backdropFilter: 'blur(8px)',
                border: '1px solid rgba(16,185,129,0.3)',
                borderRadius: '100px',
                px: 2.5,
                py: 0.75,
                mb: 3,
              }}
            >
              <CheckCircleOutlineIcon sx={{ fontSize: 16, color: '#6EE7B7' }} />
              <Typography
                variant="caption"
                sx={{ color: '#A7F3D0', fontWeight: 600, letterSpacing: '0.05em', fontSize: '0.8rem' }}
              >
                ISO 9001 | EMA | CONAGUA
              </Typography>
            </Box>
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
              Acreditaciones y Certificaciones
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
              Nuestra calidad esta respaldada por las instituciones mas exigentes de Mexico.
            </Typography>
          </FadeInOnScroll>
        </Container>
      </Box>

      {/* ── Stats bar ── */}
      <Box sx={{ backgroundColor: colors.navy, py: { xs: 4, md: 5 } }}>
        <Container maxWidth="lg">
          <Grid container spacing={3}>
            {[
              { value: 3, suffix: '', label: 'Acreditaciones vigentes' },
              { value: 20, suffix: '+', label: 'Anos certificados' },
              { value: 100, suffix: '%', label: 'Cumplimiento normativo' },
              { value: 5, suffix: '', label: 'Auditorias anuales' },
            ].map((stat, i) => (
              <Grid key={stat.label} xs={6} md={3}>
                <FadeInOnScroll delay={i * 0.08} direction="up">
                  <Box sx={{ textAlign: 'center' }}>
                    <Typography
                      sx={{
                        fontWeight: 700,
                        fontSize: { xs: '2rem', md: '2.5rem' },
                        lineHeight: 1,
                        mb: 0.5,
                        color: colors.white,
                      }}
                    >
                      <CountUp end={stat.value} suffix={stat.suffix} />
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: 'rgba(255,255,255,0.55)', fontWeight: 500, fontSize: '0.8rem' }}
                    >
                      {stat.label}
                    </Typography>
                  </Box>
                </FadeInOnScroll>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* ── Certifications ── */}
      <Box sx={{ ...section, background: `linear-gradient(180deg, ${colors.white} 0%, ${colors.gray50} 100%)` }}>
        <Container maxWidth="lg">
          <FadeInOnScroll>
            <Typography variant="overline" sx={sectionLabel}>Respaldo</Typography>
            <Typography variant="h2" sx={sectionTitle}>Nuestras Certificaciones</Typography>
            <Typography variant="body1" sx={sectionSubtitle}>
              Cada certificacion implica auditorias periodicas, capacitacion continua y mejores practicas internacionales
            </Typography>
          </FadeInOnScroll>

          <Grid container spacing={3.5}>
            {CERTIFICATIONS_DATA.map((cert, i) => (
              <Grid key={cert.name} xs={12} md={4}>
                <FadeInOnScroll delay={i * 0.12} direction="up">
                  <GlowCard
                    glowColor={`${cert.color}10`}
                    sx={{
                      ...card,
                      height: '100%',
                      p: 0,
                      borderTop: `3px solid ${cert.color}`,
                    }}
                  >
                    <CardContent sx={{ p: 3.5 }}>
                      <Box
                        sx={{
                          width: 56,
                          height: 56,
                          borderRadius: '14px',
                          background: cert.gradient,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          mb: 2.5,
                          boxShadow: `0 4px 12px ${cert.color}33`,
                        }}
                      >
                        <Typography sx={{ color: colors.white, fontWeight: 800, fontSize: '0.75rem', letterSpacing: '0.05em' }}>
                          {cert.letter}
                        </Typography>
                      </Box>
                      <Typography variant="h5" sx={{ fontWeight: 700, mb: 0.5, color: colors.text }}>
                        {cert.name}
                      </Typography>
                      <Typography variant="body2" sx={{ color: cert.color, fontWeight: 600, mb: 2, fontSize: '0.82rem' }}>
                        {cert.subtitle}
                      </Typography>
                      <Typography variant="body2" sx={{ color: colors.textSecondary, mb: 3, lineHeight: 1.7 }}>
                        {cert.description}
                      </Typography>
                      <Stack spacing={1}>
                        {cert.benefits.map((b) => (
                          <Stack key={b} direction="row" spacing={1} alignItems="center">
                            <CheckCircleOutlineIcon sx={{ fontSize: 18, color: cert.color }} />
                            <Typography variant="body2" sx={{ color: colors.textSecondary, fontSize: '0.85rem' }}>
                              {b}
                            </Typography>
                          </Stack>
                        ))}
                      </Stack>
                    </CardContent>
                  </GlowCard>
                </FadeInOnScroll>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* ── Why it matters ── */}
      <Box sx={{ ...section, backgroundColor: colors.offWhite }}>
        <Container maxWidth="md">
          <FadeInOnScroll>
            <Typography variant="overline" sx={sectionLabel}>Compromiso</Typography>
            <Typography variant="h2" sx={sectionTitle}>Por que Importan</Typography>
            <Typography
              sx={{
                textAlign: 'center',
                color: colors.textSecondary,
                lineHeight: 1.8,
                fontSize: '1.05rem',
              }}
            >
              Las acreditaciones y certificaciones no son solo sellos: representan el compromiso
              de Awalab de Mexico con la excelencia. Para nuestros clientes, esto se traduce en
              confianza, precision y respaldo en cada producto y servicio que ofrecemos.
            </Typography>
          </FadeInOnScroll>
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
              Trabaja con respaldo certificado
            </Typography>
            <Typography
              sx={{ color: 'rgba(255,255,255,0.7)', mb: 5, fontSize: '1.05rem', lineHeight: 1.7 }}
            >
              Cada producto y servicio que ofrecemos esta avalado por nuestras certificaciones.
            </Typography>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="center">
              <Button
                component={Link}
                href="/contacto"
                variant="contained"
                size="large"
                endIcon={<ArrowForwardIcon />}
                sx={btnPrimaryOnDark}
              >
                Contactanos
              </Button>
              <Button component={Link} href="/nosotros" variant="outlined" size="large" sx={btnSecondaryOnDark}>
                Volver a Nosotros
              </Button>
            </Stack>
          </FadeInOnScroll>
        </Container>
      </Box>
    </>
  );
}
