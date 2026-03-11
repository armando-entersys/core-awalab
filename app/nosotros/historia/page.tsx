import { Metadata } from 'next';
import { Box, Container, Typography, Grid, Card, CardContent } from '@mui/material';
import HistoryIcon from '@mui/icons-material/History';
import { generatePageMetadata } from '@/lib/seo';

export const metadata: Metadata = generatePageMetadata({
  title: 'Nuestra Historia',
  description:
    'Conoce la trayectoria de Awalab de Mexico desde el ano 2000. Mas de dos decadas de crecimiento, certificaciones y compromiso con la industria mexicana.',
  canonical: '/nosotros/historia',
  keywords: ['historia awalab', 'awalab de mexico historia', 'trayectoria awalab'],
});

const MILESTONES = [
  {
    year: '2000',
    title: 'Fundacion',
    description:
      'Awalab de Mexico nace como comercializadora industrial en Tula de Allende, Hidalgo, con la mision de ofrecer soluciones de calidad a la industria mexicana.',
  },
  {
    year: '2005',
    title: 'Certificacion ISO 9001',
    description:
      'Obtenemos nuestra primera certificacion ISO 9001, estableciendo un Sistema de Gestion de Calidad que rige todos nuestros procesos hasta el dia de hoy.',
  },
  {
    year: '2010',
    title: 'Expansion en Laboratorio',
    description:
      'Ampliamos nuestra linea de equipo e insumos de laboratorio, incorporando marcas de clase mundial como HACH, XYLEM y MERCK MILLIPORE.',
  },
  {
    year: '2015',
    title: 'Acreditacion EMA',
    description:
      'La Entidad Mexicana de Acreditacion reconoce nuestras capacidades tecnicas, posicionandonos como referente en soluciones de laboratorio acreditadas.',
  },
  {
    year: '2018',
    title: 'Tratamiento de Agua',
    description:
      'Inauguramos la division de tratamiento de agua, ofreciendo sistemas PTAR, analisis y soluciones integrales para el manejo responsable del recurso hidrico.',
  },
  {
    year: '2020',
    title: 'Registro CONAGUA',
    description:
      'Obtenemos el registro ante la Comision Nacional del Agua, ampliando nuestra capacidad para ejecutar proyectos de tratamiento y distribucion de agua.',
  },
  {
    year: '2023',
    title: 'Transformacion Digital',
    description:
      'Iniciamos nuestro proceso de transformacion digital con AWALAB IA, integrando inteligencia artificial para optimizar la operacion y la experiencia del cliente.',
  },
];

export default function HistoriaPage() {
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
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
            <HistoryIcon sx={{ fontSize: 40 }} />
            <Typography variant="h1" sx={{ color: '#FFFFFF', fontSize: { xs: '2rem', md: '3rem' } }}>
              Nuestra Historia
            </Typography>
          </Box>
          <Typography variant="h5" sx={{ color: 'rgba(255,255,255,0.85)', fontWeight: 400, maxWidth: 700 }}>
            Mas de dos decadas construyendo soluciones industriales de clase mundial para Mexico.
          </Typography>
        </Container>
      </Box>

      {/* Timeline */}
      <Container maxWidth="lg" sx={{ py: { xs: 8, md: 12 } }}>
        {MILESTONES.map((milestone, index) => (
          <Grid container spacing={4} key={milestone.year} sx={{ mb: 6 }}>
            {/* Year - alternates side on desktop */}
            <Grid
              xs={12}
              md={6}
              sx={{
                order: { xs: 0, md: index % 2 === 0 ? 0 : 1 },
                display: 'flex',
                justifyContent: { xs: 'flex-start', md: index % 2 === 0 ? 'flex-end' : 'flex-start' },
                alignItems: 'center',
              }}
            >
              {index % 2 === 0 ? (
                <Card
                  sx={{
                    width: '100%',
                    maxWidth: 500,
                    borderLeft: '4px solid',
                    borderColor: 'primary.main',
                  }}
                >
                  <CardContent sx={{ p: 3 }}>
                    <Typography variant="h3" color="primary" sx={{ mb: 1, fontWeight: 700 }}>
                      {milestone.year}
                    </Typography>
                    <Typography variant="h5" sx={{ mb: 1 }}>
                      {milestone.title}
                    </Typography>
                    <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.8 }}>
                      {milestone.description}
                    </Typography>
                  </CardContent>
                </Card>
              ) : (
                <Box
                  sx={{
                    display: { xs: 'none', md: 'flex' },
                    width: 60,
                    height: 60,
                    borderRadius: '50%',
                    backgroundColor: 'primary.main',
                    color: '#FFFFFF',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 700,
                    fontSize: '1.1rem',
                  }}
                >
                  {milestone.year.slice(-2)}
                </Box>
              )}
            </Grid>

            <Grid
              xs={12}
              md={6}
              sx={{
                order: { xs: 1, md: index % 2 === 0 ? 1 : 0 },
                display: 'flex',
                justifyContent: { xs: 'flex-start', md: index % 2 === 0 ? 'flex-start' : 'flex-end' },
                alignItems: 'center',
              }}
            >
              {index % 2 === 0 ? (
                <Box
                  sx={{
                    display: { xs: 'none', md: 'flex' },
                    width: 60,
                    height: 60,
                    borderRadius: '50%',
                    backgroundColor: 'primary.main',
                    color: '#FFFFFF',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 700,
                    fontSize: '1.1rem',
                  }}
                >
                  {milestone.year.slice(-2)}
                </Box>
              ) : (
                <Card
                  sx={{
                    width: '100%',
                    maxWidth: 500,
                    borderRight: '4px solid',
                    borderColor: 'primary.main',
                  }}
                >
                  <CardContent sx={{ p: 3 }}>
                    <Typography variant="h3" color="primary" sx={{ mb: 1, fontWeight: 700 }}>
                      {milestone.year}
                    </Typography>
                    <Typography variant="h5" sx={{ mb: 1 }}>
                      {milestone.title}
                    </Typography>
                    <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.8 }}>
                      {milestone.description}
                    </Typography>
                  </CardContent>
                </Card>
              )}
            </Grid>
          </Grid>
        ))}
      </Container>
    </>
  );
}
