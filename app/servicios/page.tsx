import { Metadata } from 'next';
import { Box, Container, Typography, Grid, Card, CardContent, Button } from '@mui/material';
import Link from 'next/link';
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import SpeedIcon from '@mui/icons-material/Speed';
import BuildIcon from '@mui/icons-material/Build';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { generatePageMetadata } from '@/lib/seo';

export const metadata: Metadata = generatePageMetadata({
  title: 'Servicios Especializados',
  description: 'Servicios industriales: PTAR, metrologia con acreditacion EMA, mantenimiento preventivo/correctivo y consultoria Six Sigma y KAIZEN.',
  canonical: '/servicios',
  keywords: ['servicios industriales', 'PTAR', 'metrologia EMA', 'mantenimiento industrial', 'consultoria six sigma'],
});

const services = [
  {
    icon: <WaterDropIcon sx={{ fontSize: 48 }} />,
    title: 'Plantas de Tratamiento (PTAR)',
    description: 'Diseno, instalacion y monitoreo de plantas de tratamiento de aguas residuales. Cumplimiento NOM-001, NOM-002 y NOM-003 SEMARNAT.',
    href: '/servicios/ptar',
    highlights: ['Diagnostico gratuito', 'Cumplimiento normativo', 'Monitoreo continuo'],
  },
  {
    icon: <SpeedIcon sx={{ fontSize: 48 }} />,
    title: 'Metrologia y Calibracion',
    description: 'Servicios de calibracion acreditados ante la EMA. Certificados con trazabilidad al CENAM para instrumentos de laboratorio e industriales.',
    href: '/servicios/metrologia',
    highlights: ['Acreditacion EMA', 'Trazabilidad CENAM', 'Certificados oficiales'],
  },
  {
    icon: <BuildIcon sx={{ fontSize: 48 }} />,
    title: 'Mantenimiento',
    description: 'Programas de mantenimiento preventivo, correctivo y predictivo para equipos de laboratorio, sistemas de agua y seguridad.',
    href: '/servicios/mantenimiento',
    highlights: ['Preventivo programado', 'Correctivo urgente', 'Predictivo con IoT'],
  },
  {
    icon: <TrendingUpIcon sx={{ fontSize: 48 }} />,
    title: 'Consultoria',
    description: 'Implementacion de metodologias Six Sigma (DMAIC) y KAIZEN para optimizar procesos industriales, reducir costos y mejorar calidad.',
    href: '/servicios/consultoria',
    highlights: ['Six Sigma DMAIC', 'KAIZEN', 'Lean Manufacturing'],
  },
];

export default function ServiciosPage() {
  return (
    <>
      <Box sx={{ background: 'linear-gradient(135deg, #1E4A71 0%, #153554 100%)', color: '#FFFFFF', py: { xs: 8, md: 12 } }}>
        <Container maxWidth="lg">
          <Typography variant="h1" sx={{ color: '#FFFFFF', mb: 2, fontSize: { xs: '2rem', md: '3rem' } }}>
            Servicios Especializados
          </Typography>
          <Typography variant="h5" sx={{ color: 'rgba(255,255,255,0.85)', fontWeight: 400, maxWidth: 700 }}>
            Soluciones integrales respaldadas por certificaciones ISO 9001:2015, EMA y CONAGUA.
          </Typography>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ py: { xs: 8, md: 12 } }}>
        <Grid container spacing={4}>
          {services.map((svc) => (
            <Grid key={svc.title} xs={12} md={6}>
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', p: 1 }}>
                <CardContent sx={{ flexGrow: 1 }}>
                  <Box sx={{ color: 'primary.main', mb: 2 }}>{svc.icon}</Box>
                  <Typography variant="h4" sx={{ mb: 1 }}>{svc.title}</Typography>
                  <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
                    {svc.description}
                  </Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 3 }}>
                    {svc.highlights.map((h) => (
                      <Box key={h} sx={{ px: 1.5, py: 0.5, backgroundColor: '#F0F7FF', borderRadius: 1, fontSize: '0.8rem', color: 'primary.main', fontWeight: 500 }}>
                        {h}
                      </Box>
                    ))}
                  </Box>
                  <Button component={Link} href={svc.href} variant="outlined" color="primary" endIcon={<ArrowForwardIcon />}>
                    Conocer mas
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* CTA */}
      <Box sx={{ background: 'linear-gradient(135deg, #0A87C6 0%, #1E4A71 100%)', py: 8, textAlign: 'center' }}>
        <Container maxWidth="md">
          <Typography variant="h3" sx={{ color: '#FFFFFF', mb: 2 }}>
            ¿Necesitas un servicio especializado?
          </Typography>
          <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.85)', mb: 4 }}>
            Nuestro equipo de ingenieros certificados esta listo para ayudarte.
          </Typography>
          <Button component={Link} href="/contacto" variant="contained" size="large" sx={{ backgroundColor: '#FFFFFF', color: '#1E4A71', fontWeight: 700, '&:hover': { backgroundColor: '#F0F0F0' } }}>
            Contactar equipo tecnico
          </Button>
        </Container>
      </Box>
    </>
  );
}
