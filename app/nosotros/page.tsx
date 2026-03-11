import { Metadata } from 'next';
import { Box, Container, Typography, Grid, Card, CardContent, Button, Stack } from '@mui/material';
import Link from 'next/link';
import VerifiedIcon from '@mui/icons-material/Verified';
import GroupsIcon from '@mui/icons-material/Groups';
import HistoryIcon from '@mui/icons-material/History';
import { generatePageMetadata } from '@/lib/seo';
import { CERTIFICATIONS, IMPACT_NUMBERS } from '@/lib/constants';

export const metadata: Metadata = generatePageMetadata({
  title: 'Nosotros',
  description:
    'Conoce a Awalab de Mexico: +25 anos de experiencia en soluciones industriales. Certificados ISO 9001:2015, EMA y CONAGUA.',
  canonical: '/nosotros',
  keywords: ['awalab de mexico', 'comercializadora industrial', 'equipo laboratorio mexico'],
});

export default function NosotrosPage() {
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
            Quienes somos
          </Typography>
          <Typography variant="h5" sx={{ color: 'rgba(255,255,255,0.85)', fontWeight: 400, maxWidth: 700 }}>
            Mas de 25 anos siendo el socio industrial de confianza para las empresas
            mas importantes de Mexico.
          </Typography>
        </Container>
      </Box>

      {/* Mission / Vision */}
      <Container maxWidth="lg" sx={{ py: { xs: 8, md: 12 } }}>
        <Grid container spacing={4}>
          <Grid xs={12} md={6}>
            <Typography variant="h3" sx={{ mb: 2 }}>
              Mision
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.8 }}>
              Proveer soluciones industriales integrales de la mas alta calidad,
              respaldadas por las mejores marcas del mundo, asesoria tecnica
              especializada y un compromiso inquebrantable con la satisfaccion
              del cliente.
            </Typography>
          </Grid>
          <Grid xs={12} md={6}>
            <Typography variant="h3" sx={{ mb: 2 }}>
              Vision
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.8 }}>
              Ser el socio estrategico preferido de la industria mexicana en
              soluciones de laboratorio, seguridad industrial y tratamiento de
              agua, reconocidos por nuestra excelencia, innovacion y compromiso
              con el desarrollo sostenible.
            </Typography>
          </Grid>
        </Grid>
      </Container>

      {/* Numbers */}
      <Box sx={{ backgroundColor: '#F8FAFB', py: { xs: 6, md: 8 } }}>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            {IMPACT_NUMBERS.map((item) => (
              <Grid key={item.label} xs={6} md={3}>
                <Box sx={{ textAlign: 'center' }}>
                  <Typography variant="h2" color="primary" sx={{ fontWeight: 700 }}>
                    {item.value}{item.suffix}
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    {item.label}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Sections */}
      <Container maxWidth="lg" sx={{ py: { xs: 8, md: 12 } }}>
        <Grid container spacing={4}>
          {[
            { icon: <HistoryIcon sx={{ fontSize: 40 }} />, title: 'Nuestra Historia', desc: 'Conoce nuestra trayectoria desde los inicios hasta hoy.', href: '/nosotros/historia' },
            { icon: <GroupsIcon sx={{ fontSize: 40 }} />, title: 'Nuestro Equipo', desc: '31 profesionales dedicados a servir a tu industria.', href: '/nosotros/equipo' },
            { icon: <VerifiedIcon sx={{ fontSize: 40 }} />, title: 'Acreditaciones', desc: 'ISO 9001:2015, EMA y CONAGUA respaldan nuestra calidad.', href: '/nosotros/acreditaciones' },
          ].map((section) => (
            <Grid key={section.title} xs={12} md={4}>
              <Card sx={{ height: '100%', textAlign: 'center', p: 3 }}>
                <CardContent>
                  <Box sx={{ color: 'primary.main', mb: 2 }}>{section.icon}</Box>
                  <Typography variant="h5" sx={{ mb: 1 }}>
                    {section.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                    {section.desc}
                  </Typography>
                  <Button component={Link} href={section.href} variant="outlined" color="primary">
                    Ver mas
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}
