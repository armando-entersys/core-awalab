import { Metadata } from 'next';
import { Box, Container, Typography, Grid, CardContent, Stack, Chip } from '@mui/material';
import { generatePageMetadata } from '@/lib/seo';
import { JsonLd } from '@/components/seo/JsonLd';
import { ServiceDetailPage } from '@/components/pages/ServiceDetailPage';
import { FadeInOnScroll } from '@/components/ui/FadeInOnScroll';
import { GlowCard } from '@/components/ui/GlowCard';
import {
  colors,
  card,
  section,
  sectionLabel,
  sectionTitle,
  sectionSubtitle,
} from '@/lib/design-tokens';

export const metadata: Metadata = generatePageMetadata({
  title: 'Plantas de Tratamiento de Agua (PTAR)',
  description: 'Diseno, instalacion y monitoreo de PTAR industriales. Cumplimiento NOM-001, NOM-002, NOM-003 SEMARNAT. Registro CONAGUA.',
  canonical: '/servicios/ptar',
  keywords: ['PTAR', 'planta tratamiento agua residual', 'tratamiento aguas industriales', 'NOM 001 SEMARNAT'],
});

const processSteps = [
  { step: 1, title: 'Diagnostico', description: 'Analisis de aguas, caudales y normatividad aplicable. Visita tecnica sin costo.' },
  { step: 2, title: 'Diseno', description: 'Ingenieria de detalle con seleccion de equipos y dimensionamiento.' },
  { step: 3, title: 'Instalacion', description: 'Montaje de equipos, tuberias, instrumentacion y sistemas de control.' },
  { step: 4, title: 'Puesta en marcha', description: 'Arranque, ajuste de parametros y capacitacion del personal operativo.' },
  { step: 5, title: 'Monitoreo', description: 'Seguimiento continuo de parametros, mantenimiento y reportes de cumplimiento.' },
];

const norms = [
  { norm: 'NOM-001-SEMARNAT-2021', desc: 'Limites maximos permisibles de contaminantes en descargas de aguas residuales.' },
  { norm: 'NOM-002-SEMARNAT-1996', desc: 'Limites para descargas al alcantarillado urbano o municipal.' },
  { norm: 'NOM-003-SEMARNAT-1997', desc: 'Limites para aguas residuales tratadas que se reusen en servicios al publico.' },
];

const brands = ['IWAKI', 'TRUWATER', 'CLACK', 'HYDRANAUTICS', 'HACH', 'XYLEM'] as const;

export default function PTARPage() {
  return (
    <>
      <JsonLd data={{
        '@context': 'https://schema.org', '@type': 'Service',
        name: 'Plantas de Tratamiento de Agua Residual (PTAR)',
        provider: { '@type': 'Organization', name: 'Awalab de Mexico' },
        description: 'Diseno, instalacion y monitoreo de PTAR industriales.',
        areaServed: { '@type': 'Country', name: 'Mexico' },
      }} />

      <ServiceDetailPage
        title="Plantas de Tratamiento de Agua Residual"
        subtitle="Soluciones completas de tratamiento de agua: desde el diagnostico hasta el monitoreo continuo. Registro CONAGUA."
        heroImage="/img/hero/hero-ptar.png"
        heroAlt="Planta de tratamiento de agua residual PTAR"
        badge="CONAGUA | SEMARNAT"
        stats={[
          { value: 50, suffix: '+', label: 'Plantas instaladas' },
          { value: 3, suffix: '', label: 'NOMs cumplidas' },
          { value: 99, suffix: '%', label: 'Cumplimiento normativo' },
          { value: 24, suffix: '/7', label: 'Monitoreo continuo' },
        ]}
        ctaTitle="Solicita un diagnostico gratuito"
        ctaDescription="Nuestro equipo de ingenieros visitara tus instalaciones sin costo ni compromiso para evaluar tu situacion."
        ctaPrimaryHref="/contacto"
        ctaPrimaryLabel="Agendar visita tecnica"
        ctaSecondaryHref="/cotizacion"
        ctaSecondaryLabel="Solicitar cotizacion"
      >
        {/* ── Process ── */}
        <Box sx={{ ...section, background: `linear-gradient(180deg, ${colors.white} 0%, ${colors.gray50} 100%)` }}>
          <Container maxWidth="lg">
            <FadeInOnScroll>
              <Typography variant="overline" sx={sectionLabel}>Metodologia</Typography>
              <Typography variant="h2" sx={sectionTitle}>Nuestro Proceso</Typography>
              <Typography variant="body1" sx={sectionSubtitle}>
                5 etapas para garantizar una planta de tratamiento eficiente y en cumplimiento normativo
              </Typography>
            </FadeInOnScroll>

            <Grid container spacing={3}>
              {processSteps.map((s, i) => (
                <Grid key={s.step} xs={12} sm={6} md={2.4}>
                  <FadeInOnScroll delay={i * 0.1} direction="up">
                    <Box sx={{ textAlign: 'center' }}>
                      <Box
                        sx={{
                          width: 64,
                          height: 64,
                          borderRadius: '16px',
                          background: `linear-gradient(135deg, ${colors.accent} 0%, ${colors.navy} 100%)`,
                          color: colors.white,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          mx: 'auto',
                          mb: 2.5,
                          fontSize: '1.5rem',
                          fontWeight: 800,
                          boxShadow: '0 4px 16px rgba(10,135,198,0.25)',
                        }}
                      >
                        {s.step}
                      </Box>
                      <Typography variant="h6" sx={{ fontWeight: 700, mb: 1, color: colors.text }}>
                        {s.title}
                      </Typography>
                      <Typography variant="body2" sx={{ color: colors.textSecondary, lineHeight: 1.7 }}>
                        {s.description}
                      </Typography>
                    </Box>
                  </FadeInOnScroll>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>

        {/* ── Normatividad ── */}
        <Box sx={{ ...section, backgroundColor: colors.offWhite }}>
          <Container maxWidth="lg">
            <FadeInOnScroll>
              <Typography variant="overline" sx={sectionLabel}>Regulacion</Typography>
              <Typography variant="h2" sx={sectionTitle}>Cumplimiento Normativo</Typography>
              <Typography variant="body1" sx={sectionSubtitle}>
                Todas nuestras instalaciones cumplen con la normatividad vigente de SEMARNAT
              </Typography>
            </FadeInOnScroll>

            <Grid container spacing={3.5}>
              {norms.map((n, i) => (
                <Grid key={n.norm} xs={12} md={4}>
                  <FadeInOnScroll delay={i * 0.1} direction="up">
                    <GlowCard
                      glowColor="rgba(16,185,129,0.08)"
                      sx={{ ...card, height: '100%', p: 0 }}
                    >
                      <CardContent sx={{ p: 3.5 }}>
                        <Chip
                          label="Cumple"
                          size="small"
                          sx={{
                            mb: 2,
                            backgroundColor: 'rgba(16,185,129,0.1)',
                            color: '#059669',
                            fontWeight: 600,
                            fontSize: '0.75rem',
                          }}
                        />
                        <Typography variant="h6" sx={{ fontWeight: 700, mb: 1.5, color: colors.text, fontSize: '1rem' }}>
                          {n.norm}
                        </Typography>
                        <Typography variant="body2" sx={{ color: colors.textSecondary, lineHeight: 1.7 }}>
                          {n.desc}
                        </Typography>
                      </CardContent>
                    </GlowCard>
                  </FadeInOnScroll>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>

        {/* ── Brands ── */}
        <Box sx={{ ...section }}>
          <Container maxWidth="lg">
            <FadeInOnScroll>
              <Typography variant="overline" sx={sectionLabel}>Equipamiento</Typography>
              <Typography variant="h2" sx={sectionTitle}>Equipos y Marcas</Typography>
              <Typography variant="body1" sx={sectionSubtitle}>
                Trabajamos con las mejores marcas para garantizar rendimiento y durabilidad
              </Typography>
            </FadeInOnScroll>
            <FadeInOnScroll delay={0.15}>
              <Stack direction="row" spacing={1.5} flexWrap="wrap" useFlexGap justifyContent="center">
                {brands.map((b) => (
                  <Chip
                    key={b}
                    label={b}
                    sx={{
                      px: 2.5,
                      py: 2.5,
                      fontSize: '0.9rem',
                      fontWeight: 600,
                      color: colors.navy,
                      backgroundColor: colors.white,
                      border: `1.5px solid ${colors.border}`,
                      borderRadius: '10px',
                      boxShadow: '0 1px 4px rgba(0,0,0,0.04)',
                      transition: 'all 0.25s ease',
                      '&:hover': {
                        backgroundColor: colors.navy,
                        color: colors.white,
                        borderColor: colors.navy,
                        transform: 'translateY(-2px)',
                        boxShadow: '0 4px 12px rgba(30,74,113,0.2)',
                      },
                    }}
                  />
                ))}
              </Stack>
            </FadeInOnScroll>
          </Container>
        </Box>
      </ServiceDetailPage>
    </>
  );
}
