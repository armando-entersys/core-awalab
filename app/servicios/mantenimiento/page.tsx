import { Metadata } from 'next';
import { Box, Container, Typography, Grid, Card, CardContent, Button } from '@mui/material';
import Link from 'next/link';
import { generatePageMetadata } from '@/lib/seo';

export const metadata: Metadata = generatePageMetadata({
  title: 'Mantenimiento Preventivo y Correctivo',
  description: 'Mantenimiento preventivo, correctivo y predictivo para equipos de laboratorio, sistemas de agua y seguridad industrial.',
  canonical: '/servicios/mantenimiento',
  keywords: ['mantenimiento equipo laboratorio', 'mantenimiento preventivo industrial', 'mantenimiento correctivo'],
});

const plans = [
  { title: 'Preventivo', desc: 'Programas periodicos para evitar fallas. Incluye inspeccion, limpieza, ajuste y reemplazo de partes.', color: '#10B981' },
  { title: 'Correctivo', desc: 'Atencion de emergencia para equipos que presentan fallas. Respuesta rapida con refacciones disponibles.', color: '#F59E0B' },
  { title: 'Predictivo', desc: 'Monitoreo de condiciones para anticipar fallas antes de que ocurran. Sensores IoT y analisis de datos.', color: '#0A87C6' },
];

export default function MantenimientoPage() {
  return (
    <>
      <Box sx={{ background: 'linear-gradient(135deg, #1E4A71 0%, #153554 100%)', color: '#FFFFFF', py: { xs: 8, md: 12 } }}>
        <Container maxWidth="lg">
          <Typography variant="h1" sx={{ color: '#FFFFFF', mb: 2, fontSize: { xs: '2rem', md: '3rem' } }}>
            Mantenimiento Industrial
          </Typography>
          <Typography variant="h5" sx={{ color: 'rgba(255,255,255,0.85)', fontWeight: 400, maxWidth: 700 }}>
            Programas de mantenimiento para maximizar la vida util de tus equipos y minimizar tiempos muertos.
          </Typography>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ py: { xs: 8, md: 12 } }}>
        <Grid container spacing={4}>
          {plans.map((p) => (
            <Grid key={p.title} xs={12} md={4}>
              <Card sx={{ height: '100%', borderTop: `4px solid ${p.color}` }}>
                <CardContent sx={{ p: 3 }}>
                  <Typography variant="h4" sx={{ mb: 2 }}>{p.title}</Typography>
                  <Typography variant="body1" color="text.secondary">{p.desc}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      <Box sx={{ background: 'linear-gradient(135deg, #0A87C6 0%, #1E4A71 100%)', py: 8, textAlign: 'center' }}>
        <Container maxWidth="md">
          <Typography variant="h3" sx={{ color: '#FFFFFF', mb: 2 }}>Cotiza tu plan de mantenimiento</Typography>
          <Button component={Link} href="/contacto" variant="contained" size="large" sx={{ backgroundColor: '#FFFFFF', color: '#1E4A71', fontWeight: 700, '&:hover': { backgroundColor: '#F0F0F0' } }}>
            Solicitar cotizacion
          </Button>
        </Container>
      </Box>
    </>
  );
}
