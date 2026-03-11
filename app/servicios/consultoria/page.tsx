import { Metadata } from 'next';
import { Box, Container, Typography, Grid, Card, CardContent, Button } from '@mui/material';
import Link from 'next/link';
import { generatePageMetadata } from '@/lib/seo';

export const metadata: Metadata = generatePageMetadata({
  title: 'Consultoria: Six Sigma y KAIZEN',
  description: 'Consultoria especializada en Six Sigma (DMAIC), KAIZEN y Lean Manufacturing para optimizar procesos industriales.',
  canonical: '/servicios/consultoria',
  keywords: ['consultoria six sigma mexico', 'kaizen industrial', 'lean manufacturing', 'mejora continua'],
});

export default function ConsultoriaPage() {
  return (
    <>
      <Box sx={{ background: 'linear-gradient(135deg, #1E4A71 0%, #153554 100%)', color: '#FFFFFF', py: { xs: 8, md: 12 } }}>
        <Container maxWidth="lg">
          <Typography variant="h1" sx={{ color: '#FFFFFF', mb: 2, fontSize: { xs: '2rem', md: '3rem' } }}>
            Consultoria Especializada
          </Typography>
          <Typography variant="h5" sx={{ color: 'rgba(255,255,255,0.85)', fontWeight: 400, maxWidth: 700 }}>
            Metodologias probadas para optimizar tus procesos: Six Sigma, KAIZEN y Lean Manufacturing.
          </Typography>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ py: { xs: 8, md: 12 } }}>
        <Grid container spacing={4}>
          {[
            { title: 'Six Sigma (DMAIC)', desc: 'Definir, Medir, Analizar, Implementar, Controlar. Reduccion sistematica de variabilidad y defectos en procesos productivos.', benefits: ['Reduccion de defectos hasta 99.99966%', 'ROI medible por proyecto', 'Capacitacion Green/Black Belt'] },
            { title: 'KAIZEN', desc: 'Mejora continua incremental. Involucramiento de todo el personal en la identificacion y eliminacion de desperdicios.', benefits: ['Cultura de mejora continua', 'Resultados rapidos y visibles', 'Bajo costo de implementacion'] },
            { title: 'Lean Manufacturing', desc: 'Eliminacion sistematica de desperdicios (muda) en procesos de produccion. 5S, Value Stream Mapping, Kanban.', benefits: ['Reduccion de tiempos de entrega', 'Optimizacion de inventarios', 'Mayor productividad'] },
          ].map((m) => (
            <Grid key={m.title} xs={12} md={4}>
              <Card sx={{ height: '100%' }}>
                <CardContent sx={{ p: 3 }}>
                  <Typography variant="h4" sx={{ mb: 2 }}>{m.title}</Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>{m.desc}</Typography>
                  {m.benefits.map((b) => (
                    <Typography key={b} variant="body2" sx={{ mb: 0.5, pl: 2, borderLeft: '2px solid', borderColor: 'secondary.main' }}>
                      {b}
                    </Typography>
                  ))}
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      <Box sx={{ background: 'linear-gradient(135deg, #0A87C6 0%, #1E4A71 100%)', py: 8, textAlign: 'center' }}>
        <Container maxWidth="md">
          <Typography variant="h3" sx={{ color: '#FFFFFF', mb: 2 }}>Agenda una consulta inicial</Typography>
          <Button component={Link} href="/contacto" variant="contained" size="large" sx={{ backgroundColor: '#FFFFFF', color: '#1E4A71', fontWeight: 700, '&:hover': { backgroundColor: '#F0F0F0' } }}>
            Contactar consultor
          </Button>
        </Container>
      </Box>
    </>
  );
}
