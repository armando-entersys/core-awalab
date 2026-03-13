import { Metadata } from 'next';
import { Box, Container, Typography, Grid, CardContent, Button, Stack, Chip } from '@mui/material';
import Link from 'next/link';
import Image from 'next/image';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
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
  title: 'Catalogo de Productos',
  description:
    'Explora nuestro catalogo completo de productos industriales: equipo de laboratorio, seguridad industrial y tratamiento de agua. +100,000 productos disponibles.',
  canonical: '/catalogo',
  keywords: [
    'catalogo productos industriales',
    'equipo laboratorio catalogo',
    'catalogo seguridad industrial',
    'catalogo tratamiento agua',
  ],
});

const lineDetails = [
  {
    id: 'laboratorio',
    categories: [
      'Turbidimetros', 'Medidores de pH', 'Reactivos', 'Balanzas',
      'Microscopios', 'Estufas y Hornos', 'Agitadores', 'Espectrofotometros', 'Cristaleria',
    ],
    href: '/laboratorio',
    gradient: 'linear-gradient(135deg, #1E4A71 0%, #0A87C6 100%)',
    color: '#1E4A71',
  },
  {
    id: 'seguridad-industrial',
    categories: [
      'Cascos de seguridad', 'Guantes industriales', 'Calzado de seguridad',
      'Proteccion auditiva', 'Proteccion visual', 'Proteccion respiratoria',
      'Ropa de trabajo', 'Candados de bloqueo',
    ],
    href: '/seguridad-industrial',
    gradient: 'linear-gradient(135deg, #2E7D32 0%, #66BB6A 100%)',
    color: '#2E7D32',
  },
  {
    id: 'tratamiento-de-agua',
    categories: [
      'Bombas dosificadoras', 'Membranas de osmosis', 'Valvulas de control',
      'Filtros industriales', 'Sistemas de cloracion', 'Medidores de flujo', 'Plantas PTAR',
    ],
    href: '/tratamiento-de-agua',
    gradient: 'linear-gradient(135deg, #0277BD 0%, #4FC3F7 100%)',
    color: '#0277BD',
  },
];

export default function CatalogoPage() {
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
          alt="Catalogo de productos industriales Awalab"
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
              Mas de 100,000 productos
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
              Catalogo de Productos
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
              Tres lineas de negocio especializadas con las mejores marcas del mercado.
              Encuentra la solucion que tu industria necesita.
            </Typography>
          </FadeInOnScroll>
        </Container>
      </Box>

      {/* ── Stats bar ── */}
      <Box sx={{ backgroundColor: colors.navy, py: { xs: 4, md: 5 } }}>
        <Container maxWidth="lg">
          <Grid container spacing={3}>
            {[
              { value: 100, suffix: 'K+', label: 'Productos disponibles' },
              { value: 3, suffix: '', label: 'Lineas de negocio' },
              { value: 50, suffix: '+', label: 'Marcas premium' },
              { value: 500, suffix: '+', label: 'Clientes activos' },
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

      {/* ── Business Lines ── */}
      <Box sx={{ ...section, background: `linear-gradient(180deg, ${colors.white} 0%, ${colors.gray50} 100%)` }}>
        <Container maxWidth="lg">
          <FadeInOnScroll>
            <Typography variant="overline" sx={sectionLabel}>Explora</Typography>
            <Typography variant="h2" sx={sectionTitle}>Lineas de Negocio</Typography>
            <Typography variant="body1" sx={sectionSubtitle}>
              Selecciona una linea para explorar categorias de productos y marcas disponibles
            </Typography>
          </FadeInOnScroll>

          <Grid container spacing={4}>
            {lineDetails.map((detail, i) => {
              const line = BUSINESS_LINES.find((l) => l.id === detail.id)!;
              return (
                <Grid key={detail.id} xs={12} md={4}>
                  <FadeInOnScroll delay={i * 0.12} direction="up">
                    <GlowCard
                      glowColor={`${detail.color}10`}
                      sx={{
                        ...card,
                        height: '100%',
                        p: 0,
                        display: 'flex',
                        flexDirection: 'column',
                        overflow: 'hidden',
                      }}
                    >
                      <Box
                        sx={{
                          background: detail.gradient,
                          p: 3.5,
                        }}
                      >
                        <Typography variant="h5" sx={{ color: colors.white, fontWeight: 700, mb: 1 }}>
                          {line.name}
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.85)', lineHeight: 1.6 }}>
                          {line.description}
                        </Typography>
                      </Box>
                      <CardContent sx={{ p: 3.5, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                        <Typography
                          variant="caption"
                          sx={{
                            color: colors.accent,
                            fontWeight: 600,
                            letterSpacing: '0.08em',
                            textTransform: 'uppercase',
                            mb: 1.5,
                            fontSize: '0.72rem',
                          }}
                        >
                          Categorias principales
                        </Typography>
                        <Stack direction="row" flexWrap="wrap" gap={0.75} sx={{ mb: 3 }}>
                          {detail.categories.map((cat) => (
                            <Chip
                              key={cat}
                              label={cat}
                              size="small"
                              sx={{
                                backgroundColor: `${detail.color}08`,
                                color: detail.color,
                                fontWeight: 500,
                                fontSize: '0.72rem',
                                borderRadius: '6px',
                              }}
                            />
                          ))}
                        </Stack>
                        <Typography
                          variant="caption"
                          sx={{
                            color: colors.accent,
                            fontWeight: 600,
                            letterSpacing: '0.08em',
                            textTransform: 'uppercase',
                            mb: 1,
                            fontSize: '0.72rem',
                          }}
                        >
                          Marcas
                        </Typography>
                        <Typography variant="body2" sx={{ color: colors.textSecondary, mb: 3, lineHeight: 1.7 }}>
                          {line.brands.join(' · ')}
                        </Typography>
                        <Box sx={{ mt: 'auto' }}>
                          <Button
                            component={Link}
                            href={detail.href}
                            endIcon={<ArrowForwardIcon sx={{ transition: 'transform 0.3s ease' }} />}
                            sx={{
                              color: detail.color,
                              fontWeight: 600,
                              textTransform: 'none',
                              fontSize: '0.95rem',
                              px: 0,
                              '&:hover': {
                                backgroundColor: 'transparent',
                                '& .MuiSvgIcon-root': { transform: 'translateX(4px)' },
                              },
                            }}
                          >
                            Explorar {line.name}
                          </Button>
                        </Box>
                      </CardContent>
                    </GlowCard>
                  </FadeInOnScroll>
                </Grid>
              );
            })}
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
              ¿No encuentras lo que buscas?
            </Typography>
            <Typography
              sx={{ color: 'rgba(255,255,255,0.7)', mb: 5, fontSize: '1.05rem', lineHeight: 1.7 }}
            >
              Nuestro equipo de asesores puede ayudarte a encontrar el producto exacto que necesitas.
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
                Contactar un asesor
              </Button>
              <Button component={Link} href="/cotizacion" variant="outlined" size="large" sx={btnSecondaryOnDark}>
                Solicitar cotizacion
              </Button>
            </Stack>
          </FadeInOnScroll>
        </Container>
      </Box>
    </>
  );
}
