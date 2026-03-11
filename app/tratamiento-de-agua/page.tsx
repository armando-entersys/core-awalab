import { Metadata } from 'next';
import { Box, Container, Typography, Grid, Card, CardContent, Button, Stack } from '@mui/material';
import Link from 'next/link';
import { generatePageMetadata } from '@/lib/seo';
import { BUSINESS_LINES } from '@/lib/constants';

export const metadata: Metadata = generatePageMetadata({
  title: 'Tratamiento de Agua',
  description: 'Sistemas de tratamiento de agua: PTAR, osmosis inversa, suavizadores, dosificadores. Marcas IWAKI, TRUWATER, CLACK, HYDRANAUTICS. Registro CONAGUA.',
  canonical: '/tratamiento-de-agua',
  keywords: ['tratamiento de agua', 'PTAR industrial', 'osmosis inversa industrial', 'solucion tratamiento agua'],
});

const aguaLine = BUSINESS_LINES.find((l) => l.id === 'tratamiento-de-agua')!;
const categories = [
  { name: 'Bombas dosificadoras', slug: 'bombas-dosificadoras', count: 20 },
  { name: 'Osmosis inversa', slug: 'osmosis-inversa', count: 12 },
  { name: 'Suavizadores', slug: 'suavizadores', count: 15 },
  { name: 'Filtros industriales', slug: 'filtros', count: 30 },
  { name: 'Sistemas UV', slug: 'uv', count: 10 },
  { name: 'Instrumentacion', slug: 'instrumentacion', count: 25 },
];

export default function AguaPage() {
  return (
    <>
      <Box sx={{ background: 'linear-gradient(135deg, #1E4A71 0%, #0A87C6 100%)', color: '#FFFFFF', py: { xs: 8, md: 12 } }}>
        <Container maxWidth="lg">
          <Typography variant="h1" sx={{ color: '#FFFFFF', mb: 2, fontSize: { xs: '2rem', md: '3rem' } }}>Tratamiento de Agua</Typography>
          <Typography variant="h5" sx={{ color: 'rgba(255,255,255,0.85)', fontWeight: 400, maxWidth: 700 }}>{aguaLine.description}. Registro CONAGUA.</Typography>
        </Container>
      </Box>
      <Container maxWidth="lg" sx={{ py: { xs: 8, md: 12 } }}>
        <Typography variant="h2" sx={{ mb: 4 }}>Categorias</Typography>
        <Grid container spacing={3}>
          {categories.map((cat) => (
            <Grid key={cat.slug} xs={6} sm={4} md={3}>
              <Card sx={{ textAlign: 'center', cursor: 'pointer' }}>
                <CardContent>
                  <Typography variant="h6" sx={{ mb: 0.5 }}>{cat.name}</Typography>
                  <Typography variant="body2" color="text.secondary">{cat.count} productos</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      <Box sx={{ backgroundColor: '#F8FAFB', py: { xs: 6, md: 8 } }}>
        <Container maxWidth="lg">
          <Typography variant="h3" sx={{ mb: 3 }}>Marcas</Typography>
          <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap>
            {aguaLine.brands.map((b) => (
              <Box key={b} sx={{ px: 3, py: 1.5, border: '1px solid', borderColor: 'grey.200', borderRadius: 2, fontWeight: 600, color: 'primary.main', backgroundColor: '#FFFFFF' }}>{b}</Box>
            ))}
          </Stack>
        </Container>
      </Box>
      <Box sx={{ background: 'linear-gradient(135deg, #0A87C6 0%, #1E4A71 100%)', py: 8, textAlign: 'center' }}>
        <Container maxWidth="md">
          <Typography variant="h3" sx={{ color: '#FFFFFF', mb: 2 }}>¿Necesitas una solucion de agua?</Typography>
          <Button component={Link} href="/servicios/ptar" variant="contained" size="large" sx={{ backgroundColor: '#FFFFFF', color: '#1E4A71', fontWeight: 700, '&:hover': { backgroundColor: '#F0F0F0' } }}>Ver servicio PTAR</Button>
        </Container>
      </Box>
    </>
  );
}
