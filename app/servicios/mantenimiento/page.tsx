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
  title: 'Mantenimiento Preventivo y Correctivo',
  description: 'Mantenimiento preventivo, correctivo y predictivo para equipos de laboratorio, sistemas de agua y seguridad industrial.',
  canonical: '/servicios/mantenimiento',
  keywords: ['mantenimiento equipo laboratorio', 'mantenimiento preventivo industrial', 'mantenimiento correctivo'],
});

const plans = [
  {
    title: 'Preventivo',
    description: 'Programas periodicos para evitar fallas. Incluye inspeccion, limpieza, ajuste y reemplazo de partes de desgaste.',
    color: '#10B981',
    gradient: 'linear-gradient(135deg, #10B981 0%, #059669 100%)',
    features: ['Programas a medida', 'Inspeccion periodica', 'Reemplazo preventivo', 'Reportes detallados'],
  },
  {
    title: 'Correctivo',
    description: 'Atencion de emergencia para equipos con fallas. Respuesta rapida con refacciones originales disponibles en stock.',
    color: '#F59E0B',
    gradient: 'linear-gradient(135deg, #F59E0B 0%, #D97706 100%)',
    features: ['Respuesta < 24 hrs', 'Refacciones en stock', 'Diagnostico en sitio', 'Garantia de servicio'],
  },
  {
    title: 'Predictivo',
    description: 'Monitoreo de condiciones para anticipar fallas antes de que ocurran. Sensores IoT y analisis de datos avanzado.',
    color: '#0A87C6',
    gradient: `linear-gradient(135deg, ${colors.accent} 0%, ${colors.navy} 100%)`,
    features: ['Sensores IoT', 'Analisis de datos', 'Alertas tempranas', 'Dashboard en tiempo real'],
  },
];

const equipment = [
  'Equipos de laboratorio', 'Sistemas PTAR', 'Bombas y dosificadores',
  'Instrumentos de medicion', 'Equipos de seguridad', 'Sistemas de filtracion',
  'Autoclaves', 'Campanas de extraccion',
];

export default function MantenimientoPage() {
  return (
    <>
      <JsonLd data={{
        '@context': 'https://schema.org', '@type': 'Service',
        name: 'Mantenimiento Industrial Preventivo y Correctivo',
        provider: { '@type': 'Organization', name: 'Awalab de Mexico' },
        description: 'Programas de mantenimiento para equipos de laboratorio, sistemas de agua y seguridad industrial.',
        areaServed: { '@type': 'Country', name: 'Mexico' },
      }} />

      <ServiceDetailPage
        title="Mantenimiento Industrial"
        subtitle="Programas de mantenimiento para maximizar la vida util de tus equipos y minimizar tiempos muertos en tu operacion."
        heroImage="/img/hero/hero-servicios.png"
        heroAlt="Mantenimiento industrial preventivo y correctivo"
        badge="ISO 9001:2015"
        stats={[
          { value: 200, suffix: '+', label: 'Equipos en programa' },
          { value: 98, suffix: '%', label: 'Disponibilidad' },
          { value: 24, suffix: 'hrs', label: 'Tiempo de respuesta' },
          { value: 25, suffix: '+', label: 'Anos de experiencia' },
        ]}
        ctaTitle="Cotiza tu plan de mantenimiento"
        ctaDescription="Diseñamos un programa a la medida de tus equipos y presupuesto. Consulta sin compromiso."
        ctaPrimaryHref="/cotizacion"
        ctaPrimaryLabel="Solicitar cotizacion"
        ctaSecondaryHref="/contacto"
        ctaSecondaryLabel="Hablar con un tecnico"
      >
        {/* ── Plans ── */}
        <Box sx={{ ...section, background: `linear-gradient(180deg, ${colors.white} 0%, ${colors.gray50} 100%)` }}>
          <Container maxWidth="lg">
            <FadeInOnScroll>
              <Typography variant="overline" sx={sectionLabel}>Planes</Typography>
              <Typography variant="h2" sx={sectionTitle}>Tipos de Mantenimiento</Typography>
              <Typography variant="body1" sx={sectionSubtitle}>
                Tres enfoques complementarios para mantener tu operacion funcionando sin interrupciones
              </Typography>
            </FadeInOnScroll>

            <Grid container spacing={3.5}>
              {plans.map((p, i) => (
                <Grid key={p.title} xs={12} md={4}>
                  <FadeInOnScroll delay={i * 0.12} direction="up">
                    <GlowCard
                      glowColor={`${p.color}15`}
                      sx={{
                        ...card,
                        height: '100%',
                        p: 0,
                        borderTop: `3px solid ${p.color}`,
                      }}
                    >
                      <CardContent sx={{ p: 3.5 }}>
                        <Box
                          sx={{
                            width: 48,
                            height: 48,
                            borderRadius: '12px',
                            background: p.gradient,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            mb: 2.5,
                            boxShadow: `0 4px 12px ${p.color}33`,
                          }}
                        >
                          <Typography sx={{ color: colors.white, fontWeight: 800, fontSize: '1.1rem' }}>
                            {p.title[0]}
                          </Typography>
                        </Box>
                        <Typography variant="h5" sx={{ fontWeight: 700, mb: 1.5, color: colors.text }}>
                          {p.title}
                        </Typography>
                        <Typography variant="body2" sx={{ color: colors.textSecondary, mb: 3, lineHeight: 1.7 }}>
                          {p.description}
                        </Typography>
                        <Stack spacing={1}>
                          {p.features.map((f) => (
                            <Stack key={f} direction="row" spacing={1} alignItems="center">
                              <CheckCircleOutlineIcon sx={{ fontSize: 18, color: p.color }} />
                              <Typography variant="body2" sx={{ color: colors.textSecondary, fontSize: '0.85rem' }}>
                                {f}
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

        {/* ── Equipment ── */}
        <Box sx={{ ...section, backgroundColor: colors.offWhite }}>
          <Container maxWidth="lg">
            <FadeInOnScroll>
              <Typography variant="overline" sx={sectionLabel}>Cobertura</Typography>
              <Typography variant="h2" sx={sectionTitle}>Equipos que Atendemos</Typography>
              <Typography variant="body1" sx={sectionSubtitle}>
                Damos servicio a una amplia variedad de equipos industriales y de laboratorio
              </Typography>
            </FadeInOnScroll>
            <FadeInOnScroll delay={0.15}>
              <Stack direction="row" spacing={1.5} flexWrap="wrap" useFlexGap justifyContent="center">
                {equipment.map((eq) => (
                  <Chip
                    key={eq}
                    label={eq}
                    sx={{
                      px: 2.5,
                      py: 2.5,
                      fontSize: '0.88rem',
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
