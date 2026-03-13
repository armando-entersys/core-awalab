import { Metadata } from 'next';
import { Box, Container, Typography, Grid, CardContent, Stack, Chip } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
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
  title: 'Metrologia y Calibracion — Acreditacion EMA',
  description: 'Servicios de calibracion acreditados EMA con trazabilidad CENAM. Instrumentos de laboratorio e industriales. Certificados oficiales.',
  canonical: '/servicios/metrologia',
  keywords: ['calibracion instrumentos', 'metrologia EMA', 'certificacion EMA laboratorio', 'calibracion mexico'],
});

const services = [
  'Calibracion de instrumentos de medicion',
  'Verificacion de equipos de laboratorio',
  'Mantenimiento y ajuste de instrumentos',
  'Emision de certificados con trazabilidad CENAM',
  'Programas de calibracion periodica',
  'Asesoria en seleccion de instrumentos',
];

const processSteps = [
  { step: 1, title: 'Recepcion', description: 'Registro e identificacion del instrumento con condiciones de entrada.' },
  { step: 2, title: 'Inspeccion', description: 'Evaluacion visual y funcional para determinar el estado del equipo.' },
  { step: 3, title: 'Calibracion', description: 'Procedimiento acreditado bajo norma NMX-EC-17025-IMNC.' },
  { step: 4, title: 'Certificado', description: 'Emision de certificado oficial con trazabilidad al CENAM.' },
  { step: 5, title: 'Entrega', description: 'Devolucion del instrumento con recomendaciones de uso y proxima calibracion.' },
];

export default function MetrologiaPage() {
  return (
    <>
      <JsonLd data={{
        '@context': 'https://schema.org', '@type': 'Service',
        name: 'Metrologia y Calibracion — Acreditacion EMA',
        provider: { '@type': 'Organization', name: 'Awalab de Mexico' },
        description: 'Servicios de calibracion acreditados ante la EMA con trazabilidad CENAM.',
        areaServed: { '@type': 'Country', name: 'Mexico' },
      }} />

      <ServiceDetailPage
        title="Metrologia y Calibracion"
        subtitle="Servicios acreditados ante la EMA con trazabilidad al CENAM. Certificados reconocidos oficialmente a nivel nacional e internacional."
        heroImage="/img/hero/hero-metrologia.png"
        heroAlt="Servicios de metrologia y calibracion"
        badge="Acreditacion EMA | NMX-EC-17025"
        stats={[
          { value: 500, suffix: '+', label: 'Instrumentos calibrados/ano' },
          { value: 15, suffix: '+', label: 'Anos de acreditacion' },
          { value: 100, suffix: '%', label: 'Trazabilidad CENAM' },
          { value: 48, suffix: 'hrs', label: 'Tiempo de entrega' },
        ]}
        ctaTitle="Solicita servicio de calibracion"
        ctaDescription="Envía tus instrumentos o agenda una visita tecnica para calibracion en sitio."
        ctaPrimaryHref="/contacto"
        ctaPrimaryLabel="Solicitar calibracion"
        ctaSecondaryHref="/cotizacion"
        ctaSecondaryLabel="Cotizar servicio"
      >
        {/* ── Services + Process ── */}
        <Box sx={{ ...section, background: `linear-gradient(180deg, ${colors.white} 0%, ${colors.gray50} 100%)` }}>
          <Container maxWidth="lg">
            <Grid container spacing={6}>
              <Grid xs={12} md={7}>
                <FadeInOnScroll>
                  <Typography variant="overline" sx={{ ...sectionLabel, textAlign: 'left' }}>
                    Acreditacion
                  </Typography>
                  <Typography variant="h3" sx={{ fontWeight: 700, mb: 2, color: colors.text, letterSpacing: '-0.02em' }}>
                    ¿Que es la acreditacion EMA?
                  </Typography>
                  <Typography sx={{ color: colors.textSecondary, mb: 3, lineHeight: 1.8 }}>
                    La Entidad Mexicana de Acreditacion (EMA) es el organismo nacional que reconoce la competencia tecnica de laboratorios de calibracion. Nuestra acreditacion garantiza que los resultados son confiables, trazables y reconocidos internacionalmente.
                  </Typography>
                  <Typography sx={{ color: colors.textSecondary, mb: 4, lineHeight: 1.8 }}>
                    Cada certificado que emitimos tiene trazabilidad al Centro Nacional de Metrologia (CENAM), cumpliendo con la norma NMX-EC-17025-IMNC.
                  </Typography>
                  <Typography variant="h5" sx={{ fontWeight: 700, mb: 3, color: colors.text }}>
                    Servicios que ofrecemos
                  </Typography>
                  <Stack spacing={1.5}>
                    {services.map((s) => (
                      <Stack key={s} direction="row" spacing={1.5} alignItems="center">
                        <CheckCircleOutlineIcon sx={{ fontSize: 20, color: colors.accent }} />
                        <Typography sx={{ color: colors.textSecondary, fontSize: '0.95rem' }}>{s}</Typography>
                      </Stack>
                    ))}
                  </Stack>
                </FadeInOnScroll>
              </Grid>
              <Grid xs={12} md={5}>
                <FadeInOnScroll delay={0.15} direction="up">
                  <GlowCard
                    glowColor="rgba(10,135,198,0.08)"
                    sx={{
                      ...card,
                      p: 0,
                      background: `linear-gradient(180deg, ${colors.offWhite} 0%, ${colors.white} 100%)`,
                    }}
                  >
                    <CardContent sx={{ p: 4 }}>
                      <Typography variant="h5" sx={{ fontWeight: 700, mb: 3, color: colors.text }}>
                        Proceso de calibracion
                      </Typography>
                      <Stack spacing={2.5}>
                        {processSteps.map((p) => (
                          <Stack key={p.step} direction="row" spacing={2} alignItems="flex-start">
                            <Box
                              sx={{
                                width: 36,
                                height: 36,
                                borderRadius: '10px',
                                background: `linear-gradient(135deg, ${colors.accent} 0%, ${colors.navy} 100%)`,
                                color: colors.white,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: '0.85rem',
                                fontWeight: 700,
                                flexShrink: 0,
                                boxShadow: '0 2px 8px rgba(10,135,198,0.2)',
                              }}
                            >
                              {p.step}
                            </Box>
                            <Box>
                              <Typography sx={{ fontWeight: 600, color: colors.text, fontSize: '0.95rem', mb: 0.25 }}>
                                {p.title}
                              </Typography>
                              <Typography variant="body2" sx={{ color: colors.textSecondary, lineHeight: 1.6 }}>
                                {p.description}
                              </Typography>
                            </Box>
                          </Stack>
                        ))}
                      </Stack>
                    </CardContent>
                  </GlowCard>
                </FadeInOnScroll>
              </Grid>
            </Grid>
          </Container>
        </Box>

        {/* ── Instruments ── */}
        <Box sx={{ ...section, backgroundColor: colors.offWhite }}>
          <Container maxWidth="lg">
            <FadeInOnScroll>
              <Typography variant="overline" sx={sectionLabel}>Alcance</Typography>
              <Typography variant="h2" sx={sectionTitle}>Tipos de Instrumentos</Typography>
              <Typography variant="body1" sx={sectionSubtitle}>
                Calibramos una amplia gama de instrumentos de laboratorio e industriales
              </Typography>
            </FadeInOnScroll>
            <FadeInOnScroll delay={0.15}>
              <Stack direction="row" spacing={1.5} flexWrap="wrap" useFlexGap justifyContent="center">
                {[
                  'Balanzas analiticas', 'Termometros', 'pH-metros', 'Conductimetros',
                  'Espectrofotometros', 'Micropipetas', 'Manometros', 'Cronometros',
                  'Viscosimetros', 'Turbidimetros',
                ].map((inst) => (
                  <Chip
                    key={inst}
                    label={inst}
                    sx={{
                      px: 2,
                      py: 2.5,
                      fontSize: '0.85rem',
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
