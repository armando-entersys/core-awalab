import { Metadata } from 'next';
import { Box, Container, Typography, Grid, Card, CardContent, Button, Stack } from '@mui/material';
import Link from 'next/link';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { generatePageMetadata } from '@/lib/seo';
import { JsonLd } from '@/components/seo/JsonLd';

export const metadata: Metadata = generatePageMetadata({
  title: 'Plantas de Tratamiento de Agua (PTAR)',
  description: 'Diseno, instalacion y monitoreo de PTAR industriales. Cumplimiento NOM-001, NOM-002, NOM-003 SEMARNAT. Registro CONAGUA.',
  canonical: '/servicios/ptar',
  keywords: ['PTAR', 'planta tratamiento agua residual', 'tratamiento aguas industriales', 'NOM 001 SEMARNAT'],
});

const processSteps = [
  { step: 1, title: 'Diagnostico', description: 'Analisis de aguas, caudales y normatividad aplicable. Visita tecnica sin costo.' },
  { step: 2, title: 'Diseno', description: 'Ingenieria de detalle con seleccion de equipos y dimensionamiento.' },
  { step: 3, title: 'Instalacion', description: 'Montaje de equipos, tuberias, instrumentacion y sistemas de control.' },
  { step: 4, title: 'Puesta en marcha', description: 'Arranque, ajuste de parametros y capacitacion del personal operativo.' },
  { step: 5, title: 'Monitoreo', description: 'Seguimiento continuo de parametros, mantenimiento y reportes de cumplimiento.' },
];

export default function PTARPage() {
  return (
    <>
      <JsonLd data={{
        '@context': 'https://schema.org', '@type': 'Service',
        name: 'Plantas de Tratamiento de Agua Residual (PTAR)',
        provider: { '@type': 'Organization', name: 'Awalab de Mexico' },
        description: 'Diseno, instalacion y monitoreo de PTAR industriales.',
        areaServed: { '@type': 'Country', name: 'Mexico' },
      }} />

      <Box sx={{ background: 'linear-gradient(135deg, #1E4A71 0%, #0A87C6 100%)', color: '#FFFFFF', py: { xs: 8, md: 12 } }}>
        <Container maxWidth="lg">
          <Typography variant="h1" sx={{ color: '#FFFFFF', mb: 2, fontSize: { xs: '2rem', md: '3rem' } }}>
            Plantas de Tratamiento de Agua Residual
          </Typography>
          <Typography variant="h5" sx={{ color: 'rgba(255,255,255,0.85)', fontWeight: 400, maxWidth: 700 }}>
            Soluciones completas de tratamiento de agua: desde el diagnostico hasta el monitoreo continuo. Registro CONAGUA.
          </Typography>
        </Container>
      </Box>

      {/* Process */}
      <Container maxWidth="lg" sx={{ py: { xs: 8, md: 12 } }}>
        <Typography variant="h2" sx={{ textAlign: 'center', mb: 6 }}>Nuestro proceso</Typography>
        <Grid container spacing={3}>
          {processSteps.map((s) => (
            <Grid key={s.step} xs={12} sm={6} md={2.4}>
              <Box sx={{ textAlign: 'center' }}>
                <Box sx={{ width: 56, height: 56, borderRadius: '50%', backgroundColor: 'primary.main', color: '#FFF', display: 'flex', alignItems: 'center', justifyContent: 'center', mx: 'auto', mb: 2, fontSize: '1.25rem', fontWeight: 700 }}>
                  {s.step}
                </Box>
                <Typography variant="h6" sx={{ mb: 1 }}>{s.title}</Typography>
                <Typography variant="body2" color="text.secondary">{s.description}</Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Normatividad */}
      <Box sx={{ backgroundColor: '#F8FAFB', py: { xs: 6, md: 8 } }}>
        <Container maxWidth="lg">
          <Typography variant="h3" sx={{ mb: 4 }}>Cumplimiento normativo</Typography>
          <Grid container spacing={3}>
            {[
              { norm: 'NOM-001-SEMARNAT-2021', desc: 'Limites maximos permisibles de contaminantes en descargas de aguas residuales.' },
              { norm: 'NOM-002-SEMARNAT-1996', desc: 'Limites para descargas al alcantarillado urbano o municipal.' },
              { norm: 'NOM-003-SEMARNAT-1997', desc: 'Limites para aguas residuales tratadas que se reusen en servicios al publico.' },
            ].map((n) => (
              <Grid key={n.norm} xs={12} md={4}>
                <Card sx={{ height: '100%' }}>
                  <CardContent>
                    <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 1 }}>
                      <CheckCircleIcon sx={{ color: 'success.main' }} />
                      <Typography variant="h6">{n.norm}</Typography>
                    </Stack>
                    <Typography variant="body2" color="text.secondary">{n.desc}</Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Marcas */}
      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 8 } }}>
        <Typography variant="h3" sx={{ mb: 3 }}>Equipos y marcas</Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
          Trabajamos con las mejores marcas de la industria para garantizar rendimiento y durabilidad.
        </Typography>
        <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap>
          {['IWAKI', 'TRUWATER', 'CLACK', 'HYDRANAUTICS', 'HACH', 'XYLEM'].map((b) => (
            <Box key={b} sx={{ px: 3, py: 1.5, border: '1px solid', borderColor: 'grey.200', borderRadius: 2, fontWeight: 600, color: 'primary.main' }}>
              {b}
            </Box>
          ))}
        </Stack>
      </Container>

      {/* CTA */}
      <Box sx={{ background: 'linear-gradient(135deg, #0A87C6 0%, #1E4A71 100%)', py: 8, textAlign: 'center' }}>
        <Container maxWidth="md">
          <Typography variant="h3" sx={{ color: '#FFFFFF', mb: 2 }}>Solicita un diagnostico gratuito</Typography>
          <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.85)', mb: 4 }}>
            Nuestro equipo de ingenieros visitara tus instalaciones sin costo ni compromiso.
          </Typography>
          <Button component={Link} href="/contacto" variant="contained" size="large" sx={{ backgroundColor: '#FFFFFF', color: '#1E4A71', fontWeight: 700, '&:hover': { backgroundColor: '#F0F0F0' } }}>
            Agendar visita tecnica
          </Button>
        </Container>
      </Box>
    </>
  );
}
