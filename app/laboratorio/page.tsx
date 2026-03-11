import { Metadata } from 'next';
import { Box, Container, Typography, Grid, Card, CardContent, Button, Stack } from '@mui/material';
import Link from 'next/link';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { generatePageMetadata } from '@/lib/seo';
import { JsonLd } from '@/components/seo/JsonLd';
import { BUSINESS_LINES } from '@/lib/constants';

export const metadata: Metadata = generatePageMetadata({
  title: 'Equipo de Laboratorio en Mexico',
  description: 'Distribuidor autorizado de equipo e insumos para laboratorio. Marcas: HACH, XYLEM, MERCK MILLIPORE, VELAB. ISO 9001, acreditacion EMA. Cotiza sin compromiso.',
  canonical: '/laboratorio',
  keywords: ['equipo de laboratorio mexico', 'material de laboratorio', 'proveedor equipo laboratorio', 'reactivos laboratorio'],
});

const labLine = BUSINESS_LINES.find((l) => l.id === 'laboratorio')!;

const categories = [
  { name: 'Turbidimetros', slug: 'turbidimetros', count: 25 },
  { name: 'Medidores de pH', slug: 'ph-metros', count: 30 },
  { name: 'Reactivos', slug: 'reactivos', count: 200 },
  { name: 'Balanzas', slug: 'balanzas', count: 40 },
  { name: 'Microscopios', slug: 'microscopios', count: 15 },
  { name: 'Estufas y Hornos', slug: 'estufas-hornos', count: 20 },
  { name: 'Agitadores', slug: 'agitadores', count: 18 },
  { name: 'Espectrofotometros', slug: 'espectrofotometros', count: 12 },
  { name: 'Cristaleria', slug: 'cristaleria', count: 150 },
];

export default function LaboratorioPage() {
  return (
    <>
      <JsonLd data={{ '@context': 'https://schema.org', '@type': 'CollectionPage', name: 'Equipo de Laboratorio', description: 'Catalogo completo de equipo e insumos para laboratorio', url: 'https://awalabdemexico.entersys.mx/laboratorio' }} />

      <Box sx={{ background: 'linear-gradient(135deg, #1E4A71 0%, #0A87C6 100%)', color: '#FFFFFF', py: { xs: 8, md: 12 } }}>
        <Container maxWidth="lg">
          <Typography variant="h1" sx={{ color: '#FFFFFF', mb: 2, fontSize: { xs: '2rem', md: '3rem' } }}>
            Equipo de Laboratorio
          </Typography>
          <Typography variant="h5" sx={{ color: 'rgba(255,255,255,0.85)', fontWeight: 400, maxWidth: 700 }}>
            {labLine.description}. Distribuidor autorizado de las mejores marcas mundiales.
          </Typography>
        </Container>
      </Box>

      {/* Categories */}
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

      {/* Brands */}
      <Box sx={{ backgroundColor: '#F8FAFB', py: { xs: 6, md: 8 } }}>
        <Container maxWidth="lg">
          <Typography variant="h3" sx={{ mb: 3 }}>Marcas de laboratorio</Typography>
          <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap>
            {labLine.brands.map((b) => (
              <Box key={b} sx={{ px: 3, py: 1.5, border: '1px solid', borderColor: 'grey.200', borderRadius: 2, fontWeight: 600, color: 'primary.main', backgroundColor: '#FFFFFF' }}>
                {b}
              </Box>
            ))}
          </Stack>
        </Container>
      </Box>

      <Box sx={{ background: 'linear-gradient(135deg, #0A87C6 0%, #1E4A71 100%)', py: 8, textAlign: 'center' }}>
        <Container maxWidth="md">
          <Typography variant="h3" sx={{ color: '#FFFFFF', mb: 2 }}>¿Buscas equipo especifico?</Typography>
          <Button component={Link} href="/cotizacion" variant="contained" size="large" sx={{ backgroundColor: '#FFFFFF', color: '#1E4A71', fontWeight: 700, '&:hover': { backgroundColor: '#F0F0F0' } }}>
            Solicitar cotizacion
          </Button>
        </Container>
      </Box>
    </>
  );
}
