import { Metadata } from 'next';
import { Box, Container, Typography, Grid, Card, CardContent, Button } from '@mui/material';
import Link from 'next/link';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { generatePageMetadata } from '@/lib/seo';
import { BUSINESS_LINES } from '@/lib/constants';

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
      'Turbidimetros',
      'Medidores de pH',
      'Reactivos',
      'Balanzas',
      'Microscopios',
      'Estufas y Hornos',
      'Agitadores',
      'Espectrofotometros',
      'Cristaleria',
    ],
    href: '/laboratorio',
    gradient: 'linear-gradient(135deg, #1E4A71 0%, #0A87C6 100%)',
  },
  {
    id: 'seguridad-industrial',
    categories: [
      'Cascos de seguridad',
      'Guantes industriales',
      'Calzado de seguridad',
      'Proteccion auditiva',
      'Proteccion visual',
      'Proteccion respiratoria',
      'Ropa de trabajo',
      'Candados de bloqueo',
    ],
    href: '/seguridad-industrial',
    gradient: 'linear-gradient(135deg, #2E7D32 0%, #66BB6A 100%)',
  },
  {
    id: 'tratamiento-de-agua',
    categories: [
      'Bombas dosificadoras',
      'Membranas de osmosis',
      'Valvulas de control',
      'Filtros industriales',
      'Sistemas de cloracion',
      'Medidores de flujo',
      'Plantas PTAR',
    ],
    href: '/tratamiento-de-agua',
    gradient: 'linear-gradient(135deg, #0277BD 0%, #4FC3F7 100%)',
  },
];

export default function CatalogoPage() {
  return (
    <>
      {/* Hero */}
      <Box
        sx={{
          background: 'linear-gradient(135deg, #1E4A71 0%, #0A87C6 100%)',
          color: '#FFFFFF',
          py: { xs: 8, md: 12 },
        }}
      >
        <Container maxWidth="lg">
          <Typography variant="h1" sx={{ color: '#FFFFFF', mb: 2, fontSize: { xs: '2rem', md: '3rem' } }}>
            Catalogo de Productos
          </Typography>
          <Typography variant="h5" sx={{ color: 'rgba(255,255,255,0.85)', fontWeight: 400, maxWidth: 700 }}>
            Mas de 100,000 productos disponibles en tres lineas de negocio especializadas.
            Encuentra la solucion que tu industria necesita.
          </Typography>
        </Container>
      </Box>

      {/* Business Lines */}
      <Container maxWidth="lg" sx={{ py: { xs: 8, md: 12 } }}>
        <Typography variant="h2" sx={{ mb: 1 }}>
          Lineas de negocio
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 4, maxWidth: 600 }}>
          Selecciona una linea de negocio para explorar nuestras categorias de productos
          y las marcas disponibles.
        </Typography>
        <Grid container spacing={4}>
          {lineDetails.map((detail) => {
            const line = BUSINESS_LINES.find((l) => l.id === detail.id)!;
            return (
              <Grid key={detail.id} xs={12} md={4}>
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    overflow: 'hidden',
                    transition: 'transform 0.2s, box-shadow 0.2s',
                    '&:hover': { transform: 'translateY(-4px)', boxShadow: 6 },
                  }}
                >
                  <Box sx={{ background: detail.gradient, p: 3 }}>
                    <Typography variant="h4" sx={{ color: '#FFFFFF', fontWeight: 700 }}>
                      {line.name}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.85)', mt: 1 }}>
                      {line.description}
                    </Typography>
                  </Box>
                  <CardContent sx={{ flexGrow: 1, p: 3 }}>
                    <Typography variant="subtitle2" sx={{ mb: 1, textTransform: 'uppercase', color: 'text.secondary' }}>
                      Categorias principales
                    </Typography>
                    {detail.categories.map((cat) => (
                      <Typography key={cat} variant="body2" sx={{ py: 0.5, borderBottom: '1px solid', borderColor: 'grey.100' }}>
                        {cat}
                      </Typography>
                    ))}
                    <Typography variant="subtitle2" sx={{ mt: 2, mb: 1, textTransform: 'uppercase', color: 'text.secondary' }}>
                      Marcas
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {line.brands.join(' · ')}
                    </Typography>
                  </CardContent>
                  <Box sx={{ p: 3, pt: 0 }}>
                    <Button
                      component={Link}
                      href={detail.href}
                      variant="contained"
                      fullWidth
                      endIcon={<ArrowForwardIcon />}
                    >
                      Explorar {line.name}
                    </Button>
                  </Box>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Container>

      {/* CTA */}
      <Box sx={{ background: 'linear-gradient(135deg, #0A87C6 0%, #1E4A71 100%)', py: 8, textAlign: 'center' }}>
        <Container maxWidth="md">
          <Typography variant="h3" sx={{ color: '#FFFFFF', mb: 2 }}>
            ¿No encuentras lo que buscas?
          </Typography>
          <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.85)', mb: 3 }}>
            Nuestro equipo de asesores puede ayudarte a encontrar el producto exacto que necesitas.
          </Typography>
          <Button
            component={Link}
            href="/contacto"
            variant="contained"
            size="large"
            sx={{
              backgroundColor: '#FFFFFF',
              color: '#1E4A71',
              fontWeight: 700,
              '&:hover': { backgroundColor: '#F0F0F0' },
            }}
          >
            Contactar un asesor
          </Button>
        </Container>
      </Box>
    </>
  );
}
