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
  title: 'Consultoria: Six Sigma y KAIZEN',
  description: 'Consultoria especializada en Six Sigma (DMAIC), KAIZEN y Lean Manufacturing para optimizar procesos industriales.',
  canonical: '/servicios/consultoria',
  keywords: ['consultoria six sigma mexico', 'kaizen industrial', 'lean manufacturing', 'mejora continua'],
});

const methodologies = [
  {
    title: 'Six Sigma (DMAIC)',
    description: 'Reduccion sistematica de variabilidad y defectos mediante el ciclo Definir, Medir, Analizar, Implementar y Controlar.',
    color: '#6366F1',
    gradient: 'linear-gradient(135deg, #6366F1 0%, #4338CA 100%)',
    benefits: ['Reduccion de defectos hasta 99.99966%', 'ROI medible por proyecto', 'Capacitacion Green/Black Belt'],
    tag: 'DMAIC',
  },
  {
    title: 'KAIZEN',
    description: 'Mejora continua incremental. Involucramiento de todo el personal en la identificacion y eliminacion de desperdicios.',
    color: '#10B981',
    gradient: 'linear-gradient(135deg, #10B981 0%, #059669 100%)',
    benefits: ['Cultura de mejora continua', 'Resultados rapidos y visibles', 'Bajo costo de implementacion'],
    tag: 'Mejora continua',
  },
  {
    title: 'Lean Manufacturing',
    description: 'Eliminacion sistematica de desperdicios (muda) en procesos de produccion. 5S, Value Stream Mapping, Kanban.',
    color: '#F59E0B',
    gradient: 'linear-gradient(135deg, #F59E0B 0%, #D97706 100%)',
    benefits: ['Reduccion de tiempos de entrega', 'Optimizacion de inventarios', 'Mayor productividad'],
    tag: '5S | VSM | Kanban',
  },
];

const industries = [
  'Farmaceutica', 'Alimentos y bebidas', 'Automotriz', 'Quimica',
  'Tratamiento de agua', 'Energia', 'Manufactura', 'Logistica',
];

export default function ConsultoriaPage() {
  return (
    <>
      <JsonLd data={{
        '@context': 'https://schema.org', '@type': 'Service',
        name: 'Consultoria Six Sigma y KAIZEN',
        provider: { '@type': 'Organization', name: 'Awalab de Mexico' },
        description: 'Consultoria especializada en Six Sigma, KAIZEN y Lean Manufacturing.',
        areaServed: { '@type': 'Country', name: 'Mexico' },
      }} />

      <ServiceDetailPage
        title="Consultoria Especializada"
        subtitle="Metodologias probadas para optimizar tus procesos: Six Sigma, KAIZEN y Lean Manufacturing. Resultados medibles desde el primer proyecto."
        heroImage="/img/hero/hero-consultoria.png"
        heroAlt="Consultoria Six Sigma y KAIZEN"
        badge="Six Sigma | KAIZEN | Lean"
        stats={[
          { value: 40, suffix: '+', label: 'Proyectos completados' },
          { value: 35, suffix: '%', label: 'Reduccion de costos promedio' },
          { value: 100, suffix: '+', label: 'Profesionales capacitados' },
          { value: 25, suffix: '+', label: 'Anos de experiencia' },
        ]}
        ctaTitle="Agenda una consulta inicial"
        ctaDescription="Evaluamos tu operacion sin costo y te presentamos un plan con ROI proyectado."
        ctaPrimaryHref="/contacto"
        ctaPrimaryLabel="Contactar consultor"
        ctaSecondaryHref="/cotizacion"
        ctaSecondaryLabel="Solicitar propuesta"
      >
        {/* ── Methodologies ── */}
        <Box sx={{ ...section, background: `linear-gradient(180deg, ${colors.white} 0%, ${colors.gray50} 100%)` }}>
          <Container maxWidth="lg">
            <FadeInOnScroll>
              <Typography variant="overline" sx={sectionLabel}>Metodologias</Typography>
              <Typography variant="h2" sx={sectionTitle}>Nuestro Enfoque</Typography>
              <Typography variant="body1" sx={sectionSubtitle}>
                Tres metodologias complementarias para transformar tu operacion industrial
              </Typography>
            </FadeInOnScroll>

            <Grid container spacing={3.5}>
              {methodologies.map((m, i) => (
                <Grid key={m.title} xs={12} md={4}>
                  <FadeInOnScroll delay={i * 0.12} direction="up">
                    <GlowCard
                      glowColor={`${m.color}15`}
                      sx={{ ...card, height: '100%', p: 0 }}
                    >
                      <CardContent sx={{ p: 3.5 }}>
                        <Stack direction="row" spacing={1.5} alignItems="center" sx={{ mb: 2.5 }}>
                          <Box
                            sx={{
                              width: 48,
                              height: 48,
                              borderRadius: '12px',
                              background: m.gradient,
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              boxShadow: `0 4px 12px ${m.color}33`,
                            }}
                          >
                            <Typography sx={{ color: colors.white, fontWeight: 800, fontSize: '1.1rem' }}>
                              {m.title[0]}
                            </Typography>
                          </Box>
                          <Chip
                            label={m.tag}
                            size="small"
                            sx={{
                              backgroundColor: `${m.color}12`,
                              color: m.color,
                              fontWeight: 600,
                              fontSize: '0.72rem',
                              borderRadius: '8px',
                            }}
                          />
                        </Stack>
                        <Typography variant="h5" sx={{ fontWeight: 700, mb: 1.5, color: colors.text }}>
                          {m.title}
                        </Typography>
                        <Typography variant="body2" sx={{ color: colors.textSecondary, mb: 3, lineHeight: 1.7 }}>
                          {m.description}
                        </Typography>
                        <Stack spacing={1}>
                          {m.benefits.map((b) => (
                            <Stack key={b} direction="row" spacing={1} alignItems="center">
                              <CheckCircleOutlineIcon sx={{ fontSize: 18, color: m.color }} />
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

        {/* ── Industries ── */}
        <Box sx={{ ...section, backgroundColor: colors.offWhite }}>
          <Container maxWidth="lg">
            <FadeInOnScroll>
              <Typography variant="overline" sx={sectionLabel}>Sectores</Typography>
              <Typography variant="h2" sx={sectionTitle}>Industrias que Atendemos</Typography>
              <Typography variant="body1" sx={sectionSubtitle}>
                Experiencia comprobada en los sectores mas exigentes de la industria mexicana
              </Typography>
            </FadeInOnScroll>
            <FadeInOnScroll delay={0.15}>
              <Stack direction="row" spacing={1.5} flexWrap="wrap" useFlexGap justifyContent="center">
                {industries.map((ind) => (
                  <Chip
                    key={ind}
                    label={ind}
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
