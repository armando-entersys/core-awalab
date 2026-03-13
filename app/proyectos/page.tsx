import { Metadata } from 'next';
import { Box, Container, Typography, Grid, CardContent, Chip, Stack, Button } from '@mui/material';
import Link from 'next/link';
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
  title: 'Proyectos',
  description:
    'Casos de exito y proyectos realizados por Awalab de Mexico. Soluciones industriales para CocaCola, Kimberly Clark, Grupo Mexico y mas.',
  canonical: '/proyectos',
  keywords: ['proyectos awalab', 'casos de exito', 'ptar cocacola', 'laboratorio kimberly clark'],
});

const PROJECTS = [
  {
    title: 'Planta PTAR - CocaCola FEMSA',
    industry: 'Bebidas',
    category: 'Tratamiento de Agua',
    description:
      'Diseno, instalacion y puesta en marcha de planta de tratamiento de aguas residuales. Capacidad de 500 m3/dia con cumplimiento de NOM-001-SEMARNAT.',
    highlights: ['500 m3/dia', 'NOM-001', '24/7', 'Monitoreo remoto'],
  },
  {
    title: 'Laboratorio de Calidad - Kimberly Clark',
    industry: 'Papel y Celulosa',
    category: 'Laboratorio',
    description:
      'Equipamiento completo del laboratorio de control de calidad. Equipos HACH, XYLEM y MERCK MILLIPORE con capacitacion tecnica.',
    highlights: ['20+ equipos', 'Capacitacion', 'Soporte 12 meses', 'Calibracion'],
  },
  {
    title: 'Programa EPP Integral - Grupo Mexico',
    industry: 'Mineria',
    category: 'Seguridad Industrial',
    description:
      'Programa integral de equipo de proteccion personal para operaciones mineras. Suministro recurrente para +2,000 trabajadores.',
    highlights: ['2,000+ trabajadores', 'Mensual', 'NOM-017', 'Consignacion'],
  },
  {
    title: 'Monitoreo de Agua - BioPappel',
    industry: 'Papel y Celulosa',
    category: 'Tratamiento de Agua',
    description:
      'Sistema de monitoreo continuo de calidad del agua en produccion. Sensores en linea con dashboard en tiempo real.',
    highlights: ['24/7', 'Dashboard', 'Alertas', 'CONAGUA'],
  },
  {
    title: 'Laboratorio Ambiental - SGS Mexico',
    industry: 'Servicios Ambientales',
    category: 'Laboratorio',
    description:
      'Suministro de reactivos y equipo analitico para laboratorio ambiental acreditado ante EMA. Insumos MERCK y equipo HACH.',
    highlights: ['Acreditado EMA', 'Programado', 'Trazabilidad', 'Asesoria'],
  },
  {
    title: 'PTAR Fase 2 - Philip Morris',
    industry: 'Tabaco',
    category: 'Tratamiento de Agua',
    description:
      'Ampliacion y modernizacion de planta de tratamiento. Upgrade de aireacion, dosificacion y desinfeccion UV.',
    highlights: ['300 m3/dia', 'UV', '+30% eficiencia', 'Cero descargas'],
  },
];

export default function ProyectosPage() {
  return (
    <>
      {/* ── Hero ── */}
      <Box
        sx={{
          background: `linear-gradient(160deg, ${colors.navyDark} 0%, ${colors.navy} 50%, ${colors.navyDeep} 100%)`,
          py: { xs: 10, md: 14 },
        }}
      >
        <Container maxWidth="lg">
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
              Casos de exito
            </Typography>
            <Typography
              variant="h1"
              sx={{
                color: colors.white,
                fontWeight: 700,
                fontSize: { xs: '2.2rem', md: '3.25rem' },
                mb: 2.5,
                lineHeight: 1.1,
                letterSpacing: '-0.03em',
              }}
            >
              Proyectos
            </Typography>
            <Typography
              sx={{
                color: 'rgba(255,255,255,0.7)',
                maxWidth: 560,
                lineHeight: 1.7,
                fontSize: { xs: '1rem', md: '1.08rem' },
              }}
            >
              Casos de exito que demuestran nuestra experiencia y compromiso con la industria mexicana.
            </Typography>
          </FadeInOnScroll>
        </Container>
      </Box>

      {/* ── Stats ── */}
      <Box sx={{ backgroundColor: colors.navy, py: { xs: 4, md: 5 } }}>
        <Container maxWidth="lg">
          <Grid container spacing={3}>
            {[
              { value: 6, suffix: '+', label: 'Proyectos destacados' },
              { value: 500, suffix: '+', label: 'Clientes atendidos' },
              { value: 3, suffix: '', label: 'Lineas de solucion' },
              { value: 25, suffix: '+', label: 'Anos de experiencia' },
            ].map((stat, i) => (
              <Grid key={stat.label} xs={6} md={3}>
                <FadeInOnScroll delay={i * 0.08} direction="up">
                  <Box sx={{ textAlign: 'center' }}>
                    <Typography
                      sx={{ fontWeight: 700, fontSize: { xs: '2rem', md: '2.5rem' }, lineHeight: 1, mb: 0.5, color: colors.white }}
                    >
                      <CountUp end={stat.value} suffix={stat.suffix} />
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.55)', fontWeight: 500, fontSize: '0.8rem' }}>
                      {stat.label}
                    </Typography>
                  </Box>
                </FadeInOnScroll>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* ── Projects Grid ── */}
      <Box sx={{ ...section, background: `linear-gradient(180deg, ${colors.white} 0%, ${colors.gray50} 100%)` }}>
        <Container maxWidth="lg">
          <FadeInOnScroll>
            <Typography variant="overline" sx={sectionLabel}>
              Soluciones entregadas
            </Typography>
            <Typography variant="h2" sx={sectionTitle}>
              Nuestros Proyectos
            </Typography>
            <Typography variant="body1" sx={sectionSubtitle}>
              Cada proyecto refleja nuestro compromiso con la calidad y la satisfaccion del cliente
            </Typography>
          </FadeInOnScroll>

          <Grid container spacing={3.5}>
            {PROJECTS.map((project, index) => (
              <Grid key={project.title} xs={12} md={6}>
                <FadeInOnScroll delay={index * 0.1} direction="up">
                  <GlowCard glowColor="rgba(30,74,113,0.06)" sx={{ ...card, height: '100%', p: 0 }}>
                    {/* Number header */}
                    <Box
                      sx={{
                        height: 80,
                        background: `linear-gradient(135deg, ${colors.navy} 0%, ${colors.navyDeep} 100%)`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        px: 3.5,
                        borderRadius: '16px 16px 0 0',
                      }}
                    >
                      <Typography sx={{ color: 'rgba(255,255,255,0.12)', fontSize: '2.5rem', fontWeight: 800, lineHeight: 1 }}>
                        {String(index + 1).padStart(2, '0')}
                      </Typography>
                      <Stack direction="row" spacing={1}>
                        <Chip
                          label={project.industry}
                          size="small"
                          sx={{
                            fontWeight: 600,
                            fontSize: '0.72rem',
                            color: colors.white,
                            backgroundColor: 'rgba(255,255,255,0.15)',
                            borderRadius: '6px',
                          }}
                        />
                        <Chip
                          label={project.category}
                          size="small"
                          sx={{
                            fontWeight: 600,
                            fontSize: '0.72rem',
                            color: colors.accent,
                            backgroundColor: 'rgba(10,135,198,0.15)',
                            borderRadius: '6px',
                          }}
                        />
                      </Stack>
                    </Box>
                    <CardContent sx={{ p: 3.5 }}>
                      <Typography variant="h6" sx={{ fontWeight: 700, mb: 1, color: colors.text, fontSize: '1.05rem' }}>
                        {project.title}
                      </Typography>
                      <Typography variant="body2" sx={{ color: colors.textSecondary, mb: 2.5, lineHeight: 1.7, fontSize: '0.875rem' }}>
                        {project.description}
                      </Typography>
                      <Stack direction="row" flexWrap="wrap" gap={1}>
                        {project.highlights.map((h) => (
                          <Chip
                            key={h}
                            label={h}
                            size="small"
                            sx={{
                              fontWeight: 600,
                              fontSize: '0.72rem',
                              color: colors.navy,
                              backgroundColor: colors.gray50,
                              border: `1px solid ${colors.border}`,
                              borderRadius: '6px',
                            }}
                          />
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

      {/* ── CTA ── */}
      <Box
        sx={{
          background: `linear-gradient(160deg, ${colors.navy} 0%, ${colors.navyDark} 100%)`,
          py: { xs: 10, md: 14 },
          textAlign: 'center',
        }}
      >
        <Container maxWidth="sm">
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
              ¿Tienes un proyecto en mente?
            </Typography>
            <Typography sx={{ color: 'rgba(255,255,255,0.6)', mb: 5, fontSize: '1rem', lineHeight: 1.7 }}>
              Nuestro equipo de ingenieros esta listo para disenar la solucion que tu operacion necesita.
            </Typography>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="center">
              <Button component={Link} href="/cotizacion" variant="contained" size="large" sx={btnPrimaryOnDark}>
                Solicitar Cotizacion
              </Button>
              <Button component={Link} href="/contacto" variant="outlined" size="large" sx={btnSecondaryOnDark}>
                Contactanos
              </Button>
            </Stack>
          </FadeInOnScroll>
        </Container>
      </Box>
    </>
  );
}
