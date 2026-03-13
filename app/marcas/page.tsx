import { Metadata } from 'next';
import { Box, Container, Typography, Grid, CardContent, Chip, Stack, Button } from '@mui/material';
import Link from 'next/link';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ScienceOutlinedIcon from '@mui/icons-material/ScienceOutlined';
import HealthAndSafetyOutlinedIcon from '@mui/icons-material/HealthAndSafetyOutlined';
import WaterDropOutlinedIcon from '@mui/icons-material/WaterDropOutlined';
import { generatePageMetadata } from '@/lib/seo';
import { BUSINESS_LINES } from '@/lib/constants';
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
  title: 'Marcas que Distribuimos',
  description:
    'Distribuidor autorizado de +20 marcas de clase mundial: HACH, XYLEM, MERCK MILLIPORE, MAPA, IWAKI y mas.',
  canonical: '/marcas',
  keywords: ['marcas equipo laboratorio', 'distribuidor hach mexico', 'distribuidor xylem mexico'],
});

const lineIcons: Record<string, React.ReactNode> = {
  laboratorio: <ScienceOutlinedIcon sx={{ fontSize: 24 }} />,
  'seguridad-industrial': <HealthAndSafetyOutlinedIcon sx={{ fontSize: 24 }} />,
  'tratamiento-de-agua': <WaterDropOutlinedIcon sx={{ fontSize: 24 }} />,
};

export default function MarcasPage() {
  const totalBrands = BUSINESS_LINES.reduce((sum, l) => sum + l.brands.length, 0);

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
              Distribuidores autorizados
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
              Nuestras Marcas
            </Typography>
            <Typography
              sx={{
                color: 'rgba(255,255,255,0.7)',
                maxWidth: 560,
                lineHeight: 1.7,
                fontSize: { xs: '1rem', md: '1.08rem' },
              }}
            >
              Distribuidor autorizado de mas de {totalBrands} marcas de clase mundial en equipo de
              laboratorio, seguridad industrial y tratamiento de agua.
            </Typography>
          </FadeInOnScroll>
        </Container>
      </Box>

      {/* ── Stats ── */}
      <Box sx={{ backgroundColor: colors.navy, py: { xs: 4, md: 5 } }}>
        <Container maxWidth="lg">
          <Grid container spacing={3}>
            {[
              { value: totalBrands, suffix: '+', label: 'Marcas de clase mundial' },
              { value: 3, suffix: '', label: 'Lineas de negocio' },
              { value: 25, suffix: '+', label: 'Anos como distribuidores' },
              { value: 500, suffix: '+', label: 'Clientes que confian' },
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

      {/* ── By Business Line ── */}
      <Box sx={{ ...section, background: `linear-gradient(180deg, ${colors.white} 0%, ${colors.gray50} 100%)` }}>
        <Container maxWidth="lg">
          <FadeInOnScroll>
            <Typography variant="overline" sx={sectionLabel}>
              Catalogo de marcas
            </Typography>
            <Typography variant="h2" sx={sectionTitle}>
              Marcas por Linea de Negocio
            </Typography>
            <Typography variant="body1" sx={sectionSubtitle}>
              Trabajamos con fabricantes lideres en cada linea para ofrecerte las mejores soluciones
            </Typography>
          </FadeInOnScroll>

          <Grid container spacing={4}>
            {BUSINESS_LINES.map((line, index) => (
              <Grid key={line.id} xs={12} md={4}>
                <FadeInOnScroll delay={index * 0.12} direction="up">
                  <GlowCard
                    glowColor="rgba(30,74,113,0.06)"
                    sx={{
                      ...card,
                      height: '100%',
                      p: 0,
                      cursor: 'pointer',
                      textDecoration: 'none',
                      '&:hover .brand-arrow': { transform: 'translateX(4px)' },
                    }}
                    component={Link}
                    href={line.slug}
                  >
                    <CardContent sx={{ p: 4 }}>
                      <Box
                        sx={{
                          width: 48,
                          height: 48,
                          borderRadius: '12px',
                          border: `1.5px solid ${colors.accent}`,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: colors.accent,
                          mb: 2.5,
                        }}
                      >
                        {lineIcons[line.id]}
                      </Box>
                      <Typography variant="h5" sx={{ fontWeight: 700, mb: 1, color: colors.text, fontSize: '1.2rem' }}>
                        {line.name}
                      </Typography>
                      <Typography variant="body2" sx={{ color: colors.textSecondary, mb: 3, lineHeight: 1.7, fontSize: '0.875rem' }}>
                        {line.description}
                      </Typography>
                      <Stack direction="row" flexWrap="wrap" gap={1} sx={{ mb: 3 }}>
                        {line.brands.map((b) => (
                          <Chip
                            key={b}
                            label={b}
                            size="small"
                            sx={{
                              fontWeight: 600,
                              fontSize: '0.78rem',
                              color: colors.navy,
                              backgroundColor: colors.gray50,
                              border: `1px solid ${colors.border}`,
                              borderRadius: '8px',
                            }}
                          />
                        ))}
                      </Stack>
                      <Stack direction="row" alignItems="center" spacing={0.5}>
                        <Typography sx={{ color: colors.accent, fontWeight: 600, fontSize: '0.875rem' }}>
                          Ver productos
                        </Typography>
                        <ArrowForwardIcon
                          className="brand-arrow"
                          sx={{ fontSize: 16, color: colors.accent, transition: 'transform 0.25s ease' }}
                        />
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
                letterSpacing: '-0.02em',
              }}
            >
              ¿Buscas una marca especifica?
            </Typography>
            <Typography sx={{ color: 'rgba(255,255,255,0.6)', mb: 5, fontSize: '1rem', lineHeight: 1.7 }}>
              Si no encuentras lo que necesitas, contactanos. Tenemos acceso a cientos de marcas adicionales.
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
