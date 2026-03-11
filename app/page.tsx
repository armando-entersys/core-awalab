import { Box, Container, Typography, Button, Grid, Stack, Card, CardContent } from '@mui/material';
import Link from 'next/link';
import ScienceIcon from '@mui/icons-material/Science';
import ShieldIcon from '@mui/icons-material/Shield';
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { JsonLd } from '@/components/seo/JsonLd';
import {
  SITE_NAME,
  SITE_URL,
  SITE_DESCRIPTION,
  BUSINESS_LINES,
  CERTIFICATIONS,
  CLIENTS,
  IMPACT_NUMBERS,
} from '@/lib/constants';

const lineIcons = {
  laboratorio: <ScienceIcon sx={{ fontSize: 48, color: 'primary.main' }} />,
  'seguridad-industrial': <ShieldIcon sx={{ fontSize: 48, color: 'primary.main' }} />,
  'tratamiento-de-agua': <WaterDropIcon sx={{ fontSize: 48, color: 'primary.main' }} />,
};

export default function HomePage() {
  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: SITE_NAME,
          url: SITE_URL,
          description: SITE_DESCRIPTION,
          foundingDate: '2000',
          numberOfEmployees: '31',
          address: {
            '@type': 'PostalAddress',
            addressLocality: 'Tula de Allende',
            addressRegion: 'Hidalgo',
            addressCountry: 'MX',
          },
          contactPoint: {
            '@type': 'ContactPoint',
            telephone: '+52-776-227-7069',
            contactType: 'sales',
            availableLanguage: 'Spanish',
          },
          hasCredential: CERTIFICATIONS.map((c) => ({
            '@type': 'EducationalOccupationalCredential',
            name: c.name,
          })),
        }}
      />

      {/* Hero */}
      <Box
        sx={{
          background: 'linear-gradient(135deg, #1E4A71 0%, #0A87C6 50%, #153554 100%)',
          color: '#FFFFFF',
          py: { xs: 10, md: 16 },
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ maxWidth: 700 }}>
            <Typography
              variant="h1"
              sx={{
                color: '#FFFFFF',
                fontSize: { xs: '2.25rem', md: '3.5rem' },
                mb: 3,
              }}
            >
              Soluciones industriales que transforman tu operacion
            </Typography>
            <Typography
              variant="h5"
              sx={{
                color: 'rgba(255,255,255,0.85)',
                fontWeight: 400,
                mb: 4,
                lineHeight: 1.6,
              }}
            >
              Equipo de laboratorio, seguridad industrial y tratamiento de agua
              con las mejores marcas del mundo. Certificados ISO 9001, EMA y CONAGUA.
            </Typography>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
              <Button
                component={Link}
                href="/cotizacion"
                variant="contained"
                size="large"
                sx={{
                  backgroundColor: '#FFFFFF',
                  color: '#1E4A71',
                  fontWeight: 700,
                  px: 4,
                  py: 1.5,
                  '&:hover': {
                    backgroundColor: '#F0F0F0',
                    boxShadow: '0 8px 24px rgba(0,0,0,0.2)',
                  },
                }}
              >
                Solicitar Cotizacion
              </Button>
              <Button
                component={Link}
                href="/nosotros"
                variant="outlined"
                size="large"
                sx={{
                  borderColor: 'rgba(255,255,255,0.5)',
                  color: '#FFFFFF',
                  px: 4,
                  py: 1.5,
                  '&:hover': {
                    borderColor: '#FFFFFF',
                    backgroundColor: 'rgba(255,255,255,0.1)',
                  },
                }}
              >
                Conoce Awalab
              </Button>
            </Stack>
          </Box>
        </Container>
      </Box>

      {/* Business Lines */}
      <Container maxWidth="lg" sx={{ py: { xs: 8, md: 12 } }}>
        <Typography
          variant="h2"
          sx={{ textAlign: 'center', mb: 2 }}
        >
          Nuestras Lineas de Negocio
        </Typography>
        <Typography
          variant="body1"
          sx={{ textAlign: 'center', color: 'text.secondary', mb: 6, maxWidth: 600, mx: 'auto' }}
        >
          Tres lineas especializadas para cubrir todas las necesidades de tu industria
        </Typography>
        <Grid container spacing={4}>
          {BUSINESS_LINES.map((line) => (
            <Grid key={line.id} xs={12} md={4}>
              <Card
                sx={{
                  height: '100%',
                  textAlign: 'center',
                  p: 2,
                  cursor: 'pointer',
                }}
                component={Link}
                href={line.slug}
              >
                <CardContent>
                  {lineIcons[line.id]}
                  <Typography variant="h4" sx={{ mt: 2, mb: 1 }}>
                    {line.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                    {line.description}
                  </Typography>
                  <Button endIcon={<ArrowForwardIcon />} color="primary">
                    Ver productos
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Impact Numbers */}
      <Box sx={{ backgroundColor: 'primary.main', py: { xs: 6, md: 8 } }}>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            {IMPACT_NUMBERS.map((item) => (
              <Grid key={item.label} xs={6} md={3}>
                <Box sx={{ textAlign: 'center', color: '#FFFFFF' }}>
                  <Typography
                    variant="h2"
                    sx={{ fontWeight: 700, fontSize: { xs: '2.5rem', md: '3.5rem' } }}
                  >
                    {item.value}
                    {item.suffix}
                  </Typography>
                  <Typography variant="body1" sx={{ opacity: 0.85 }}>
                    {item.label}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Why Awalab */}
      <Container maxWidth="lg" sx={{ py: { xs: 8, md: 12 } }}>
        <Typography variant="h2" sx={{ textAlign: 'center', mb: 6 }}>
          ¿Por que elegir Awalab?
        </Typography>
        <Grid container spacing={4}>
          {CERTIFICATIONS.map((cert) => (
            <Grid key={cert.name} xs={12} sm={4}>
              <Box sx={{ textAlign: 'center' }}>
                <Box
                  sx={{
                    width: 80,
                    height: 80,
                    borderRadius: '50%',
                    backgroundColor: 'primary.main',
                    color: '#FFFFFF',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mx: 'auto',
                    mb: 2,
                    fontSize: '0.75rem',
                    fontWeight: 700,
                  }}
                >
                  {cert.name}
                </Box>
                <Typography variant="h5" sx={{ mb: 1 }}>
                  {cert.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {cert.description}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Clients */}
      <Box sx={{ backgroundColor: '#F8FAFB', py: { xs: 6, md: 8 } }}>
        <Container maxWidth="lg">
          <Typography variant="h3" sx={{ textAlign: 'center', mb: 4 }}>
            Clientes que confian en nosotros
          </Typography>
          <Stack
            direction="row"
            flexWrap="wrap"
            justifyContent="center"
            gap={3}
          >
            {CLIENTS.map((client) => (
              <Box
                key={client}
                sx={{
                  px: 3,
                  py: 1.5,
                  backgroundColor: '#FFFFFF',
                  borderRadius: 2,
                  boxShadow: '0 1px 4px rgba(0,0,0,0.06)',
                  fontSize: '0.9rem',
                  fontWeight: 500,
                  color: 'text.secondary',
                }}
              >
                {client}
              </Box>
            ))}
          </Stack>
        </Container>
      </Box>

      {/* CTA */}
      <Box
        sx={{
          background: 'linear-gradient(135deg, #0A87C6 0%, #1E4A71 100%)',
          py: { xs: 8, md: 10 },
          textAlign: 'center',
        }}
      >
        <Container maxWidth="md">
          <Typography
            variant="h2"
            sx={{ color: '#FFFFFF', mb: 2 }}
          >
            ¿Necesitas una cotizacion?
          </Typography>
          <Typography
            variant="h6"
            sx={{ color: 'rgba(255,255,255,0.85)', fontWeight: 400, mb: 4 }}
          >
            Respondemos en menos de 24 horas. Sin compromiso.
          </Typography>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="center">
            <Button
              component={Link}
              href="/cotizacion"
              variant="contained"
              size="large"
              sx={{
                backgroundColor: '#FFFFFF',
                color: '#1E4A71',
                fontWeight: 700,
                px: 5,
                py: 1.5,
                '&:hover': { backgroundColor: '#F0F0F0' },
              }}
            >
              Solicitar Cotizacion
            </Button>
            <Button
              component={Link}
              href="/contacto"
              variant="outlined"
              size="large"
              sx={{
                borderColor: 'rgba(255,255,255,0.5)',
                color: '#FFFFFF',
                px: 5,
                py: 1.5,
                '&:hover': {
                  borderColor: '#FFFFFF',
                  backgroundColor: 'rgba(255,255,255,0.1)',
                },
              }}
            >
              Contactanos
            </Button>
          </Stack>
        </Container>
      </Box>
    </>
  );
}
