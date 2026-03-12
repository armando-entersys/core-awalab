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
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import WavesIcon from '@mui/icons-material/Waves';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import SpeedIcon from '@mui/icons-material/Speed';
import CompressIcon from '@mui/icons-material/Compress';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { generatePageMetadata } from '@/lib/seo';
import { BUSINESS_LINES } from '@/lib/constants';

export const metadata: Metadata = generatePageMetadata({
  title: 'Tratamiento de Agua',
  description:
    'Sistemas de tratamiento de agua: PTAR, osmosis inversa, suavizadores, dosificadores. Marcas IWAKI, TRUWATER, CLACK, HYDRANAUTICS. Registro CONAGUA.',
  canonical: '/tratamiento-de-agua',
  keywords: [
    'tratamiento de agua',
    'PTAR industrial',
    'osmosis inversa industrial',
    'solucion tratamiento agua',
  ],
});

const aguaLine = BUSINESS_LINES.find((l) => l.id === 'tratamiento-de-agua')!;

const categories = [
  {
    name: 'Bombas dosificadoras',
    slug: 'bombas-dosificadoras',
    count: 20,
    icon: <CompressIcon sx={{ fontSize: 40, color: '#0A87C6' }} />,
    description: 'Bombas de diafragma y peristalticas para dosificacion precisa de quimicos.',
  },
  {
    name: 'Osmosis inversa',
    slug: 'osmosis-inversa',
    count: 12,
    icon: <FilterAltIcon sx={{ fontSize: 40, color: '#0A87C6' }} />,
    description: 'Sistemas RO industriales y comerciales con membranas de alta eficiencia.',
  },
  {
    name: 'Suavizadores',
    slug: 'suavizadores',
    count: 15,
    icon: <WaterDropIcon sx={{ fontSize: 40, color: '#0A87C6' }} />,
    description: 'Suavizadores automaticos de agua con valvulas Clack y resinas de alta capacidad.',
  },
  {
    name: 'Filtros industriales',
    slug: 'filtros',
    count: 30,
    icon: <WavesIcon sx={{ fontSize: 40, color: '#0A87C6' }} />,
    description: 'Filtros multimedia, carbon activado y cartuchos para remocion de solidos.',
  },
  {
    name: 'Sistemas UV',
    slug: 'uv',
    count: 10,
    icon: <WbSunnyIcon sx={{ fontSize: 40, color: '#0A87C6' }} />,
    description: 'Desinfeccion ultravioleta para eliminacion de bacterias y virus sin quimicos.',
  },
  {
    name: 'Instrumentacion',
    slug: 'instrumentacion',
    count: 25,
    icon: <SpeedIcon sx={{ fontSize: 40, color: '#0A87C6' }} />,
    description: 'Sensores, controladores y medidores en linea para monitoreo continuo de agua.',
  },
];

export default function AguaPage() {
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
          src="/img/hero/hero-agua.png"
          alt="Sistemas de tratamiento de agua industrial"
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
            Tratamiento de Agua
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
            {aguaLine.description}. Soluciones integrales con registro CONAGUA para industria,
            municipios y comercio.
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
          Equipos y sistemas para cada etapa del tratamiento y analisis de agua.
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
            Marcas de tratamiento de agua
          </Typography>
          <Typography variant="body1" sx={{ mb: 4, color: 'text.secondary' }}>
            Equipos y componentes de los fabricantes mas reconocidos del sector hidrico.
          </Typography>
          <Stack direction="row" spacing={1.5} flexWrap="wrap" useFlexGap>
            {aguaLine.brands.map((b) => (
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
            ¿Necesitas una solucion de agua?
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: 'rgba(255,255,255,0.85)', mb: 4, maxWidth: 500, mx: 'auto' }}
          >
            Disenamos, instalamos y damos mantenimiento a sistemas de tratamiento de agua. Consulta
            nuestro servicio PTAR.
          </Typography>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="center">
            <Button
              component={Link}
              href="/servicios/ptar"
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
              Ver servicio PTAR
            </Button>
            <Button
              component={Link}
              href="/cotizacion"
              variant="outlined"
              size="large"
              sx={{
                color: '#FFFFFF',
                borderColor: 'rgba(255,255,255,0.5)',
                fontWeight: 700,
                px: 5,
                py: 1.5,
                fontSize: '1rem',
                borderRadius: 2,
                '&:hover': {
                  borderColor: '#FFFFFF',
                  backgroundColor: 'rgba(255,255,255,0.1)',
                  transform: 'translateY(-2px)',
                },
                transition: 'all 0.3s ease',
              }}
            >
              Solicitar cotizacion
            </Button>
          </Stack>
        </Container>
      </Box>
    </>
  );
}
