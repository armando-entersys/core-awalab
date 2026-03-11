import { Metadata } from 'next';
import { Box, Container, Typography, Grid, Card, CardContent, Chip, Stack } from '@mui/material';
import EngineeringIcon from '@mui/icons-material/Engineering';
import { generatePageMetadata } from '@/lib/seo';

export const metadata: Metadata = generatePageMetadata({
  title: 'Proyectos',
  description:
    'Casos de exito y proyectos realizados por Awalab de Mexico. Soluciones industriales para CocaCola, Kimberly Clark, Grupo Mexico y mas.',
  canonical: '/proyectos',
  keywords: ['proyectos awalab', 'casos de exito', 'ptar cocacola', 'laboratorio kimberly clark'],
});

const PROJECTS = [
  {
    title: 'Planta PTAR - CocaCola FEMSA',
    industry: 'Bebidas',
    industryColor: '#D32F2F',
    category: 'Tratamiento de Agua',
    description:
      'Diseno, instalacion y puesta en marcha de planta de tratamiento de aguas residuales para la embotelladora CocaCola FEMSA. Capacidad de 500 m3/dia con cumplimiento de NOM-001-SEMARNAT.',
    highlights: ['500 m3/dia de capacidad', 'Cumplimiento NOM-001', 'Operacion 24/7', 'Monitoreo remoto'],
  },
  {
    title: 'Laboratorio de Calidad - Kimberly Clark',
    industry: 'Papel y Celulosa',
    industryColor: '#1565C0',
    category: 'Laboratorio',
    description:
      'Equipamiento completo del laboratorio de control de calidad para planta de produccion. Incluye equipos HACH, XYLEM y MERCK MILLIPORE con capacitacion tecnica.',
    highlights: ['20+ equipos instalados', 'Capacitacion en sitio', 'Soporte tecnico 12 meses', 'Calibracion incluida'],
  },
  {
    title: 'Programa EPP Integral - Grupo Mexico',
    industry: 'Mineria',
    industryColor: '#FF6F00',
    category: 'Seguridad Industrial',
    description:
      'Programa integral de equipo de proteccion personal para operaciones mineras. Suministro recurrente de EPP certificado para +2,000 trabajadores.',
    highlights: ['2,000+ trabajadores', 'Suministro mensual', 'Certificacion NOM-017', 'Inventario en consignacion'],
  },
  {
    title: 'Monitoreo de Agua - BioPappel',
    industry: 'Papel y Celulosa',
    industryColor: '#1565C0',
    category: 'Tratamiento de Agua',
    description:
      'Implementacion de sistema de monitoreo continuo de calidad del agua en proceso de produccion. Sensores en linea con dashboard en tiempo real.',
    highlights: ['Monitoreo 24/7', 'Dashboard en tiempo real', 'Alertas automaticas', 'Reportes CONAGUA'],
  },
  {
    title: 'Laboratorio Ambiental - SGS Mexico',
    industry: 'Servicios Ambientales',
    industryColor: '#2E7D32',
    category: 'Laboratorio',
    description:
      'Suministro de reactivos y equipo analitico para laboratorio ambiental acreditado ante EMA. Incluye insumos MERCK y equipo de medicion HACH.',
    highlights: ['Proveedor acreditado EMA', 'Entrega programada', 'Trazabilidad completa', 'Asesoria tecnica'],
  },
  {
    title: 'PTAR Fase 2 - Philip Morris',
    industry: 'Tabaco',
    industryColor: '#5D4037',
    category: 'Tratamiento de Agua',
    description:
      'Ampliacion y modernizacion de la planta de tratamiento existente. Upgrade de sistemas de aireacion, dosificacion y desinfeccion UV.',
    highlights: ['Ampliacion a 300 m3/dia', 'Desinfeccion UV', 'Eficiencia energetica +30%', 'Cero descargas'],
  },
];

export default function ProyectosPage() {
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
            <EngineeringIcon sx={{ fontSize: 40 }} />
            <Typography variant="h1" sx={{ color: '#FFFFFF', fontSize: { xs: '2rem', md: '3rem' } }}>
              Proyectos
            </Typography>
          </Box>
          <Typography variant="h5" sx={{ color: 'rgba(255,255,255,0.85)', fontWeight: 400, maxWidth: 700 }}>
            Casos de exito que demuestran nuestra experiencia y compromiso con la industria mexicana.
          </Typography>
        </Container>
      </Box>

      {/* Projects Grid */}
      <Container maxWidth="lg" sx={{ py: { xs: 8, md: 12 } }}>
        <Grid container spacing={4}>
          {PROJECTS.map((project) => (
            <Grid key={project.title} xs={12} md={6}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'box-shadow 0.2s',
                  '&:hover': { boxShadow: 6 },
                }}
              >
                <CardContent sx={{ p: 4, flexGrow: 1 }}>
                  <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
                    <Chip
                      label={project.industry}
                      size="small"
                      sx={{ backgroundColor: project.industryColor, color: '#FFFFFF', fontWeight: 600 }}
                    />
                    <Chip label={project.category} size="small" variant="outlined" />
                  </Stack>

                  <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>
                    {project.title}
                  </Typography>

                  <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.8, mb: 3 }}>
                    {project.description}
                  </Typography>

                  <Stack direction="row" flexWrap="wrap" gap={1}>
                    {project.highlights.map((highlight) => (
                      <Chip
                        key={highlight}
                        label={highlight}
                        size="small"
                        variant="outlined"
                        sx={{ borderColor: 'primary.main', color: 'primary.main' }}
                      />
                    ))}
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}
