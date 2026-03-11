import { Metadata } from 'next';
import { Box, Container, Typography, Grid, Card, CardContent, TextField, Button } from '@mui/material';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import { generatePageMetadata } from '@/lib/seo';

export const metadata: Metadata = generatePageMetadata({
  title: 'Ofertas y Promociones',
  description:
    'Descubre las mejores ofertas y promociones en equipo de laboratorio, seguridad industrial y tratamiento de agua. Suscribete para recibir ofertas exclusivas.',
  canonical: '/ofertas',
  keywords: [
    'ofertas equipo laboratorio',
    'promociones seguridad industrial',
    'descuentos equipo industrial',
    'ofertas awalab',
  ],
});

export default function OfertasPage() {
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
            Ofertas y Promociones
          </Typography>
          <Typography variant="h5" sx={{ color: 'rgba(255,255,255,0.85)', fontWeight: 400, maxWidth: 700 }}>
            Aprovecha nuestras promociones especiales en equipo de laboratorio, seguridad industrial
            y tratamiento de agua.
          </Typography>
        </Container>
      </Box>

      {/* Coming Soon */}
      <Container maxWidth="lg" sx={{ py: { xs: 8, md: 12 } }}>
        <Box sx={{ textAlign: 'center', maxWidth: 600, mx: 'auto' }}>
          <LocalOfferIcon sx={{ fontSize: 80, color: 'primary.main', mb: 3 }} />
          <Typography variant="h2" sx={{ mb: 2 }}>
            Proximamente
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 1, lineHeight: 1.8 }}>
            Estamos preparando ofertas exclusivas para ti. Muy pronto podras encontrar aqui
            promociones especiales, descuentos por volumen y ofertas de temporada en todas
            nuestras lineas de negocio.
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.8 }}>
            Mientras tanto, contactanos directamente para solicitar una cotizacion personalizada
            con los mejores precios del mercado.
          </Typography>
        </Box>
      </Container>

      {/* Newsletter Signup */}
      <Box sx={{ backgroundColor: '#F8FAFB', py: { xs: 6, md: 8 } }}>
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid xs={12} md={6}>
              <NotificationsActiveIcon sx={{ fontSize: 48, color: 'primary.main', mb: 2 }} />
              <Typography variant="h3" sx={{ mb: 2 }}>
                Se el primero en enterarte
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.8 }}>
                Suscribete a nuestro boletin y recibe las ofertas y promociones directamente
                en tu correo electronico. Sin spam, solo las mejores oportunidades.
              </Typography>
            </Grid>
            <Grid xs={12} md={6}>
              <Card sx={{ p: 4 }}>
                <CardContent sx={{ p: 0 }}>
                  <Typography variant="h5" sx={{ mb: 3 }}>
                    Suscribete al boletin
                  </Typography>
                  <TextField
                    fullWidth
                    label="Nombre completo"
                    variant="outlined"
                    sx={{ mb: 2 }}
                    disabled
                  />
                  <TextField
                    fullWidth
                    label="Correo electronico"
                    variant="outlined"
                    type="email"
                    sx={{ mb: 2 }}
                    disabled
                  />
                  <TextField
                    fullWidth
                    label="Empresa"
                    variant="outlined"
                    sx={{ mb: 3 }}
                    disabled
                  />
                  <Button variant="contained" fullWidth size="large" disabled>
                    Suscribirme (proximamente)
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}
