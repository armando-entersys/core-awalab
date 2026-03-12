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
import ScienceIcon from '@mui/icons-material/Science';
import BiotechIcon from '@mui/icons-material/Biotech';
import ScaleIcon from '@mui/icons-material/Scale';
import OpacityIcon from '@mui/icons-material/Opacity';
import DeviceThermostatIcon from '@mui/icons-material/DeviceThermostat';
import BlurOnIcon from '@mui/icons-material/BlurOn';
import SettingsIcon from '@mui/icons-material/Settings';
import SpeedIcon from '@mui/icons-material/Speed';
import LocalDrinkIcon from '@mui/icons-material/LocalDrink';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { generatePageMetadata } from '@/lib/seo';
import { JsonLd } from '@/components/seo/JsonLd';
import { BUSINESS_LINES } from '@/lib/constants';

export const metadata: Metadata = generatePageMetadata({
  title: 'Equipo de Laboratorio en Mexico',
  description:
    'Distribuidor autorizado de equipo e insumos para laboratorio. Marcas: HACH, XYLEM, MERCK MILLIPORE, VELAB. ISO 9001, acreditacion EMA. Cotiza sin compromiso.',
  canonical: '/laboratorio',
  keywords: [
    'equipo de laboratorio mexico',
    'material de laboratorio',
    'proveedor equipo laboratorio',
    'reactivos laboratorio',
  ],
});

const labLine = BUSINESS_LINES.find((l) => l.id === 'laboratorio')!;

const categories = [
  {
    name: 'Turbidimetros',
    slug: 'turbidimetros',
    count: 25,
    icon: <OpacityIcon sx={{ fontSize: 40, color: '#0A87C6' }} />,
    description: 'Medicion precisa de turbidez para control de calidad de agua y procesos.',
  },
  {
    name: 'Medidores de pH',
    slug: 'ph-metros',
    count: 30,
    icon: <SpeedIcon sx={{ fontSize: 40, color: '#0A87C6' }} />,
    description: 'Equipos portatiles y de mesa para medicion electrometrica de pH.',
  },
  {
    name: 'Reactivos',
    slug: 'reactivos',
    count: 200,
    icon: <ScienceIcon sx={{ fontSize: 40, color: '#0A87C6' }} />,
    description: 'Reactivos analiticos de grado ACS, HPLC y alta pureza.',
  },
  {
    name: 'Balanzas',
    slug: 'balanzas',
    count: 40,
    icon: <ScaleIcon sx={{ fontSize: 40, color: '#0A87C6' }} />,
    description: 'Balanzas analiticas y de precision con calibracion certificada.',
  },
  {
    name: 'Microscopios',
    slug: 'microscopios',
    count: 15,
    icon: <BiotechIcon sx={{ fontSize: 40, color: '#0A87C6' }} />,
    description: 'Microscopios opticos, estereoscopicos y digitales de alta resolucion.',
  },
  {
    name: 'Estufas y Hornos',
    slug: 'estufas-hornos',
    count: 20,
    icon: <DeviceThermostatIcon sx={{ fontSize: 40, color: '#0A87C6' }} />,
    description: 'Estufas de secado, incubadoras y hornos de mufla para laboratorio.',
  },
  {
    name: 'Agitadores',
    slug: 'agitadores',
    count: 18,
    icon: <SettingsIcon sx={{ fontSize: 40, color: '#0A87C6' }} />,
    description: 'Agitadores magneticos, orbitales y vortex para mezcla y homogeneizacion.',
  },
  {
    name: 'Espectrofotometros',
    slug: 'espectrofotometros',
    count: 12,
    icon: <BlurOnIcon sx={{ fontSize: 40, color: '#0A87C6' }} />,
    description: 'Espectrofotometria UV-Vis para analisis cuantitativo de muestras.',
  },
  {
    name: 'Cristaleria',
    slug: 'cristaleria',
    count: 150,
    icon: <LocalDrinkIcon sx={{ fontSize: 40, color: '#0A87C6' }} />,
    description: 'Cristaleria volumetrica y general de borosilicato clase A.',
  },
];

export default function LaboratorioPage() {
  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'CollectionPage',
          name: 'Equipo de Laboratorio',
          description: 'Catalogo completo de equipo e insumos para laboratorio',
          url: 'https://awalabdemexico.entersys.mx/laboratorio',
        }}
      />

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
          src="/img/hero/hero-laboratorio.png"
          alt="Equipo de laboratorio profesional"
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(to right, rgba(30,74,113,0.92) 0%, rgba(10,135,198,0.7) 50%, rgba(30,74,113,0.85) 100%)',
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
            Equipo de Laboratorio
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
            {labLine.description}. Distribuidor autorizado de las mejores marcas mundiales con
            acreditacion EMA e ISO 9001.
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
          Explora nuestro catalogo completo de equipo e insumos para laboratorio.
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
            Marcas de laboratorio
          </Typography>
          <Typography variant="body1" sx={{ mb: 4, color: 'text.secondary' }}>
            Distribuidor autorizado de marcas lideres a nivel mundial.
          </Typography>
          <Stack direction="row" spacing={1.5} flexWrap="wrap" useFlexGap>
            {labLine.brands.map((b) => (
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
            ¿Buscas equipo especifico?
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: 'rgba(255,255,255,0.85)', mb: 4, maxWidth: 500, mx: 'auto' }}
          >
            Nuestros asesores te ayudan a encontrar el equipo ideal para tu laboratorio. Cotiza sin
            compromiso.
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
