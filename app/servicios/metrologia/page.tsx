import { Metadata } from 'next';
import { Box, Container, Typography, Grid, Card, CardContent, Button, Stack } from '@mui/material';
import Link from 'next/link';
import VerifiedIcon from '@mui/icons-material/Verified';
import { generatePageMetadata } from '@/lib/seo';

export const metadata: Metadata = generatePageMetadata({
  title: 'Metrologia y Calibracion — Acreditacion EMA',
  description: 'Servicios de calibracion acreditados EMA con trazabilidad CENAM. Instrumentos de laboratorio e industriales. Certificados oficiales.',
  canonical: '/servicios/metrologia',
  keywords: ['calibracion instrumentos', 'metrologia EMA', 'certificacion EMA laboratorio', 'calibracion mexico'],
});

export default function MetrologiaPage() {
  return (
    <>
      <Box sx={{ background: 'linear-gradient(135deg, #1E4A71 0%, #153554 100%)', color: '#FFFFFF', py: { xs: 8, md: 12 } }}>
        <Container maxWidth="lg">
          <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 2 }}>
            <Typography variant="h1" sx={{ color: '#FFFFFF', fontSize: { xs: '2rem', md: '3rem' } }}>
              Metrologia y Calibracion
            </Typography>
            <VerifiedIcon sx={{ fontSize: 40, color: '#10B981' }} />
          </Stack>
          <Typography variant="h5" sx={{ color: 'rgba(255,255,255,0.85)', fontWeight: 400, maxWidth: 700 }}>
            Servicios acreditados ante la EMA con trazabilidad al CENAM. Certificados reconocidos oficialmente.
          </Typography>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ py: { xs: 8, md: 12 } }}>
        <Grid container spacing={6}>
          <Grid xs={12} md={7}>
            <Typography variant="h3" sx={{ mb: 3 }}>¿Que es la acreditacion EMA?</Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 2, lineHeight: 1.8 }}>
              La Entidad Mexicana de Acreditacion (EMA) es el organismo nacional que reconoce la competencia tecnica de laboratorios de calibracion. Nuestra acreditacion garantiza que los resultados de calibracion son confiables, trazables y reconocidos internacionalmente.
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 3, lineHeight: 1.8 }}>
              Cada certificado que emitimos tiene trazabilidad al Centro Nacional de Metrologia (CENAM), cumpliendo con los requisitos de la norma NMX-EC-17025-IMNC.
            </Typography>
            <Typography variant="h4" sx={{ mb: 2 }}>Servicios que ofrecemos</Typography>
            {['Calibracion de instrumentos de medicion', 'Verificacion de equipos de laboratorio', 'Mantenimiento y ajuste de instrumentos', 'Emision de certificados con trazabilidad CENAM', 'Programas de calibracion periodica'].map((s) => (
              <Stack key={s} direction="row" spacing={1} alignItems="center" sx={{ mb: 1 }}>
                <VerifiedIcon sx={{ fontSize: 18, color: 'success.main' }} />
                <Typography variant="body1">{s}</Typography>
              </Stack>
            ))}
          </Grid>
          <Grid xs={12} md={5}>
            <Card sx={{ backgroundColor: '#F0F7FF', p: 3 }}>
              <CardContent>
                <Typography variant="h5" sx={{ mb: 2 }}>Proceso de calibracion</Typography>
                {[
                  { step: '1', text: 'Recepcion del instrumento' },
                  { step: '2', text: 'Inspeccion visual y funcional' },
                  { step: '3', text: 'Calibracion segun procedimiento acreditado' },
                  { step: '4', text: 'Emision de certificado' },
                  { step: '5', text: 'Entrega con recomendaciones' },
                ].map((p) => (
                  <Stack key={p.step} direction="row" spacing={2} alignItems="center" sx={{ mb: 2 }}>
                    <Box sx={{ width: 32, height: 32, borderRadius: '50%', backgroundColor: 'primary.main', color: '#FFF', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.85rem', fontWeight: 700, flexShrink: 0 }}>
                      {p.step}
                    </Box>
                    <Typography variant="body1">{p.text}</Typography>
                  </Stack>
                ))}
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>

      <Box sx={{ background: 'linear-gradient(135deg, #0A87C6 0%, #1E4A71 100%)', py: 8, textAlign: 'center' }}>
        <Container maxWidth="md">
          <Typography variant="h3" sx={{ color: '#FFFFFF', mb: 2 }}>Solicita servicio de calibracion</Typography>
          <Button component={Link} href="/contacto" variant="contained" size="large" sx={{ backgroundColor: '#FFFFFF', color: '#1E4A71', fontWeight: 700, '&:hover': { backgroundColor: '#F0F0F0' } }}>
            Solicitar calibracion
          </Button>
        </Container>
      </Box>
    </>
  );
}
