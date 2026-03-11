import { Metadata } from 'next';
import { Box, Container, Typography, Grid, Card, CardContent, Chip } from '@mui/material';
import { generatePageMetadata } from '@/lib/seo';
import { BUSINESS_LINES } from '@/lib/constants';

export const metadata: Metadata = generatePageMetadata({
  title: 'Marcas que Distribuimos',
  description:
    'Distribuidor autorizado de +20 marcas de clase mundial: HACH, XYLEM, MERCK MILLIPORE, MAPA, IWAKI y mas. Equipo de laboratorio, seguridad industrial y tratamiento de agua.',
  canonical: '/marcas',
  keywords: [
    'marcas equipo laboratorio',
    'distribuidor hach mexico',
    'distribuidor xylem mexico',
    'marcas seguridad industrial',
    'marcas tratamiento agua',
  ],
});

const brands = [
  // Laboratorio
  { name: 'HACH', line: 'Laboratorio' },
  { name: 'XYLEM', line: 'Laboratorio' },
  { name: 'EISCO', line: 'Laboratorio' },
  { name: 'MERCK MILLIPORE', line: 'Laboratorio' },
  { name: 'VELAB', line: 'Laboratorio' },
  { name: 'Felisa', line: 'Laboratorio' },
  { name: 'Troemner', line: 'Laboratorio' },
  { name: 'ATAGO', line: 'Laboratorio' },
  { name: 'YSI', line: 'Laboratorio' },
  // Seguridad Industrial
  { name: 'MAPA', line: 'Seguridad Industrial' },
  { name: 'GOLDEN EAGLE', line: 'Seguridad Industrial' },
  { name: 'BISLEY', line: 'Seguridad Industrial' },
  { name: 'JSP', line: 'Seguridad Industrial' },
  { name: 'ARMADA', line: 'Seguridad Industrial' },
  { name: 'ABUS', line: 'Seguridad Industrial' },
  { name: 'DERMACARE', line: 'Seguridad Industrial' },
  // Tratamiento de Agua
  { name: 'IWAKI', line: 'Tratamiento de Agua' },
  { name: 'TRUWATER', line: 'Tratamiento de Agua' },
  { name: 'CLACK', line: 'Tratamiento de Agua' },
  { name: 'HYDRANAUTICS', line: 'Tratamiento de Agua' },
];

const lineColors: Record<string, 'primary' | 'success' | 'info'> = {
  Laboratorio: 'primary',
  'Seguridad Industrial': 'success',
  'Tratamiento de Agua': 'info',
};

export default function MarcasPage() {
  return (
    <>
      {/* Hero */}
      <Box
        sx={{
          background: 'linear-gradient(135deg, #1E4A71 0%, #153554 100%)',
          color: '#FFFFFF',
          py: { xs: 8, md: 12 },
        }}
      >
        <Container maxWidth="lg">
          <Typography variant="h1" sx={{ color: '#FFFFFF', mb: 2, fontSize: { xs: '2rem', md: '3rem' } }}>
            Nuestras Marcas
          </Typography>
          <Typography variant="h5" sx={{ color: 'rgba(255,255,255,0.85)', fontWeight: 400, maxWidth: 700 }}>
            Distribuidor autorizado de mas de 20 marcas de clase mundial en equipo de laboratorio,
            seguridad industrial y tratamiento de agua.
          </Typography>
        </Container>
      </Box>

      {/* Brands Grid */}
      <Container maxWidth="lg" sx={{ py: { xs: 8, md: 12 } }}>
        <Typography variant="h2" sx={{ mb: 1 }}>
          Marcas de clase mundial
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 4, maxWidth: 600 }}>
          Trabajamos con las marcas lideres en cada linea de negocio para ofrecerte las mejores
          soluciones industriales.
        </Typography>
        <Grid container spacing={3}>
          {brands.map((brand) => (
            <Grid key={brand.name} xs={6} sm={4} md={3}>
              <Card
                sx={{
                  height: '100%',
                  textAlign: 'center',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  transition: 'box-shadow 0.2s',
                  '&:hover': { boxShadow: 4 },
                }}
              >
                <CardContent>
                  <Typography variant="h6" sx={{ mb: 1.5, fontWeight: 700 }}>
                    {brand.name}
                  </Typography>
                  <Chip
                    label={brand.line}
                    color={lineColors[brand.line]}
                    size="small"
                    variant="outlined"
                  />
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* By Business Line */}
      <Box sx={{ backgroundColor: '#F8FAFB', py: { xs: 6, md: 8 } }}>
        <Container maxWidth="lg">
          <Typography variant="h3" sx={{ mb: 4 }}>
            Marcas por linea de negocio
          </Typography>
          <Grid container spacing={4}>
            {BUSINESS_LINES.map((line) => (
              <Grid key={line.id} xs={12} md={4}>
                <Card sx={{ height: '100%', p: 3 }}>
                  <CardContent>
                    <Typography variant="h5" sx={{ mb: 2 }}>
                      {line.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                      {line.description}
                    </Typography>
                    {line.brands.map((b) => (
                      <Chip
                        key={b}
                        label={b}
                        sx={{ mr: 1, mb: 1 }}
                        variant="outlined"
                        color={lineColors[line.name] || 'primary'}
                      />
                    ))}
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </>
  );
}
