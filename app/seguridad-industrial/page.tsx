import { Metadata } from 'next';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  Stack,
  Chip,
} from '@mui/material';
import Link from 'next/link';
import Image from 'next/image';
import PanToolIcon from '@mui/icons-material/PanTool';
import VisibilityIcon from '@mui/icons-material/Visibility';
import HardwareIcon from '@mui/icons-material/Hardware';
import DirectionsWalkIcon from '@mui/icons-material/DirectionsWalk';
import AirIcon from '@mui/icons-material/Air';
import HearingIcon from '@mui/icons-material/Hearing';
import CheckroomIcon from '@mui/icons-material/Checkroom';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { generatePageMetadata } from '@/lib/seo';
import { BUSINESS_LINES } from '@/lib/constants';

export const metadata: Metadata = generatePageMetadata({
  title: 'Equipo de Seguridad Industrial',
  description:
    'EPP y equipos de seguridad industrial. Marcas: MAPA, GOLDEN EAGLE, JSP, ARMADA, ABUS, DERMACARE. Cumplimiento NOM. Cotiza sin compromiso.',
  canonical: '/seguridad-industrial',
  keywords: [
    'equipo seguridad industrial',
    'epp seguridad industrial',
    'proveedores seguridad industrial',
  ],
});

const segLine = BUSINESS_LINES.find((l) => l.id === 'seguridad-industrial')!;

const categories = [
  {
    name: 'Guantes industriales',
    slug: 'guantes',
    count: 60,
    icon: <PanToolIcon sx={{ fontSize: 40, color: '#0A87C6' }} />,
    description: 'Guantes de nitrilo, latex, neopreno y anticorte para toda aplicacion industrial.',
  },
  {
    name: 'Lentes de seguridad',
    slug: 'lentes',
    count: 35,
    icon: <VisibilityIcon sx={{ fontSize: 40, color: '#0A87C6' }} />,
    description: 'Lentes y goggles con proteccion UV, antiempanante y resistencia a impacto.',
  },
  {
    name: 'Cascos',
    slug: 'cascos',
    count: 20,
    icon: <HardwareIcon sx={{ fontSize: 40, color: '#0A87C6' }} />,
    description: 'Cascos industriales clase E y G con accesorios integrados NOM-115.',
  },
  {
    name: 'Calzado de seguridad',
    slug: 'calzado',
    count: 45,
    icon: <DirectionsWalkIcon sx={{ fontSize: 40, color: '#0A87C6' }} />,
    description: 'Botas y zapatos dielectricos, antiderrapantes con casquillo de acero.',
  },
  {
    name: 'Proteccion respiratoria',
    slug: 'respiratoria',
    count: 25,
    icon: <AirIcon sx={{ fontSize: 40, color: '#0A87C6' }} />,
    description: 'Mascarillas, respiradores de media y cara completa con filtros intercambiables.',
  },
  {
    name: 'Proteccion auditiva',
    slug: 'auditiva',
    count: 15,
    icon: <HearingIcon sx={{ fontSize: 40, color: '#0A87C6' }} />,
    description: 'Tapones y orejeras con nivel de reduccion de ruido NRR certificado.',
  },
  {
    name: 'Ropa de trabajo',
    slug: 'ropa',
    count: 30,
    icon: <CheckroomIcon sx={{ fontSize: 40, color: '#0A87C6' }} />,
    description: 'Uniformes, overoles y ropa ignifuga para ambientes de alto riesgo.',
  },
  {
    name: 'Arnes y lineas de vida',
    slug: 'altura',
    count: 18,
    icon: <HealthAndSafetyIcon sx={{ fontSize: 40, color: '#0A87C6' }} />,
    description: 'Sistemas anticaida, arneses de cuerpo completo y lineas de vida retractiles.',
  },
];

export default function SeguridadPage() {
  return (
    <>
      {/* ── Hero Section ── */}
      <Box
        sx={{
          position: 'relative',
          height: { xs: 400, md: 500 },
          display: 'flex',
          alignItems: 'center',
          overflow: 'hidden',
        }}
      >
        <Image
          src="/img/hero/hero-seguridad.png"
          alt="Equipo de seguridad industrial profesional"
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(to right, rgba(30,74,113,0.92) 0%, rgba(21,53,84,0.75) 50%, rgba(30,74,113,0.88) 100%)',
            zIndex: 1,
          }}
        />
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
          <Typography
            variant="h1"
            sx={{
              color: '#FFFFFF',
              fontWeight: 800,
              fontSize: { xs: '2.2rem', md: '3.5rem' },
              mb: 2,
              textShadow: '0 2px 24px rgba(0,0,0,0.3)',
            }}
          >
            Seguridad Industrial
          </Typography>
          <Typography
            variant="h5"
            sx={{
              color: 'rgba(255,255,255,0.9)',
              fontWeight: 400,
              maxWidth: 680,
              lineHeight: 1.6,
              textShadow: '0 1px 8px rgba(0,0,0,0.2)',
            }}
          >
            {segLine.description}. Cumplimiento NOM y certificaciones internacionales para proteger
            a tu equipo de trabajo.
          </Typography>
        </Container>
      </Box>

      {/* ── Categories Grid ── */}
      <Container maxWidth="lg" sx={{ py: { xs: 8, md: 12 } }}>
        <Typography
          variant="h2"
          sx={{
            mb: 1,
            fontWeight: 700,
            fontSize: { xs: '1.8rem', md: '2.4rem' },
            color: '#1E4A71',
          }}
        >
          Categorias
        </Typography>
        <Typography variant="body1" sx={{ mb: 5, color: 'text.secondary', maxWidth: 600 }}>
          Equipos de proteccion personal y seguridad para cada area de tu industria.
        </Typography>

        <Grid container spacing={3}>
          {categories.map((cat) => (
            <Grid key={cat.slug} xs={12} sm={6} md={4}>
              <Card
                sx={{
                  height: '100%',
                  background: 'rgba(255,255,255,0.7)',
                  backdropFilter: 'blur(12px)',
                  WebkitBackdropFilter: 'blur(12px)',
                  border: '1px solid rgba(255,255,255,0.6)',
                  borderRadius: 3,
                  boxShadow: '0 4px 24px rgba(30,74,113,0.08)',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  cursor: 'pointer',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 12px 40px rgba(10,135,198,0.18)',
                  },
                }}
              >
                <CardContent sx={{ p: 3 }}>
                  <Box sx={{ mb: 2 }}>{cat.icon}</Box>
                  <Typography variant="h6" sx={{ fontWeight: 700, mb: 0.5, color: '#1E4A71' }}>
                    {cat.name}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary', mb: 1.5, lineHeight: 1.5 }}>
                    {cat.description}
                  </Typography>
                  <Typography variant="caption" sx={{ color: '#0A87C6', fontWeight: 600 }}>
                    {cat.count} productos
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* ── Brands Section ── */}
      <Box sx={{ backgroundColor: '#F8FAFB', py: { xs: 8, md: 10 } }}>
        <Container maxWidth="lg">
          <Typography
            variant="h3"
            sx={{
              mb: 1,
              fontWeight: 700,
              fontSize: { xs: '1.6rem', md: '2rem' },
              color: '#1E4A71',
            }}
          >
            Marcas de seguridad
          </Typography>
          <Typography variant="body1" sx={{ mb: 4, color: 'text.secondary' }}>
            Trabajamos con fabricantes certificados que cumplen las normas mas exigentes.
          </Typography>
          <Stack direction="row" spacing={1.5} flexWrap="wrap" useFlexGap>
            {segLine.brands.map((b) => (
              <Chip
                key={b}
                label={b}
                sx={{
                  px: 2,
                  py: 2.5,
                  fontSize: '0.95rem',
                  fontWeight: 700,
                  color: '#0A87C6',
                  backgroundColor: '#FFFFFF',
                  border: '1.5px solid',
                  borderColor: 'rgba(10,135,198,0.25)',
                  borderRadius: 2,
                  boxShadow: '0 2px 8px rgba(10,135,198,0.08)',
                  transition: 'all 0.2s ease',
                  '&:hover': {
                    backgroundColor: '#0A87C6',
                    color: '#FFFFFF',
                    borderColor: '#0A87C6',
                  },
                }}
              />
            ))}
          </Stack>
        </Container>
      </Box>

      {/* ── CTA Section ── */}
      <Box
        sx={{
          background: 'linear-gradient(135deg, #0A87C6 0%, #1E4A71 100%)',
          py: { xs: 8, md: 10 },
          textAlign: 'center',
        }}
      >
        <Container maxWidth="md">
          <Typography
            variant="h3"
            sx={{
              color: '#FFFFFF',
              mb: 2,
              fontWeight: 700,
              fontSize: { xs: '1.6rem', md: '2.2rem' },
            }}
          >
            Cotiza tu EPP
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: 'rgba(255,255,255,0.85)', mb: 4, maxWidth: 500, mx: 'auto' }}
          >
            Protege a tu equipo con los mejores productos de seguridad industrial. Asesoramos en
            cumplimiento NOM.
          </Typography>
          <Button
            component={Link}
            href="/cotizacion"
            variant="contained"
            size="large"
            endIcon={<ArrowForwardIcon />}
            sx={{
              backgroundColor: '#FFFFFF',
              color: '#1E4A71',
              fontWeight: 700,
              px: 5,
              py: 1.5,
              fontSize: '1rem',
              borderRadius: 2,
              boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
              '&:hover': {
                backgroundColor: '#F0F4F8',
                transform: 'translateY(-2px)',
                boxShadow: '0 6px 28px rgba(0,0,0,0.2)',
              },
              transition: 'all 0.3s ease',
            }}
          >
            Solicitar cotizacion
          </Button>
        </Container>
      </Box>
    </>
  );
}
