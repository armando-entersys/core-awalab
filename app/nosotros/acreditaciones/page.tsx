import { Metadata } from 'next';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import VerifiedIcon from '@mui/icons-material/Verified';
import ScienceIcon from '@mui/icons-material/Science';
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { generatePageMetadata } from '@/lib/seo';

export const metadata: Metadata = generatePageMetadata({
  title: 'Acreditaciones y Certificaciones',
  description:
    'Awalab de Mexico cuenta con certificacion ISO 9001:2015, acreditacion EMA y registro CONAGUA. Calidad respaldada por las instituciones mas exigentes.',
  canonical: '/nosotros/acreditaciones',
  keywords: ['certificaciones awalab', 'iso 9001 awalab', 'ema acreditacion', 'conagua registro'],
});

const CERTIFICATIONS_DATA = [
  {
    name: 'ISO 9001:2015',
    subtitle: 'Sistema de Gestion de Calidad',
    icon: <VerifiedIcon sx={{ fontSize: 56 }} />,
    color: '#1E4A71',
    description:
      'La norma ISO 9001:2015 es el estandar internacional que certifica nuestro Sistema de Gestion de Calidad. Garantiza que todos nuestros procesos, desde la recepcion de pedidos hasta la entrega final, cumplen con los mas altos estandares de calidad.',
    benefits: [
      'Procesos estandarizados y documentados',
      'Mejora continua en todas las areas',
      'Trazabilidad completa de productos y servicios',
      'Satisfaccion del cliente como prioridad',
      'Auditorias periodicas de cumplimiento',
    ],
  },
  {
    name: 'EMA',
    subtitle: 'Entidad Mexicana de Acreditacion',
    icon: <ScienceIcon sx={{ fontSize: 56 }} />,
    color: '#0A87C6',
    description:
      'La acreditacion EMA reconoce nuestra competencia tecnica para comercializar y dar soporte a equipo de laboratorio. Esta acreditacion es otorgada por la Entidad Mexicana de Acreditacion, el organismo de evaluacion de la conformidad mas importante de Mexico.',
    benefits: [
      'Competencia tecnica reconocida oficialmente',
      'Personal capacitado y evaluado periodicamente',
      'Equipos con trazabilidad metrologica',
      'Reconocimiento nacional e internacional',
      'Confianza en la precision de nuestros productos',
    ],
  },
  {
    name: 'CONAGUA',
    subtitle: 'Comision Nacional del Agua',
    icon: <WaterDropIcon sx={{ fontSize: 56 }} />,
    color: '#2E7D32',
    description:
      'El registro ante CONAGUA nos habilita para ejecutar proyectos relacionados con el tratamiento, distribucion y analisis de agua. Esto incluye el diseno e implementacion de plantas de tratamiento de aguas residuales (PTAR) y sistemas de potabilizacion.',
    benefits: [
      'Habilitacion para proyectos de tratamiento de agua',
      'Cumplimiento con normatividad ambiental',
      'Diseno e instalacion de plantas PTAR',
      'Analisis de calidad del agua',
      'Compromiso con el cuidado del recurso hidrico',
    ],
  },
];

export default function AcreditacionesPage() {
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
            <VerifiedIcon sx={{ fontSize: 40 }} />
            <Typography variant="h1" sx={{ color: '#FFFFFF', fontSize: { xs: '2rem', md: '3rem' } }}>
              Acreditaciones y Certificaciones
            </Typography>
          </Box>
          <Typography variant="h5" sx={{ color: 'rgba(255,255,255,0.85)', fontWeight: 400, maxWidth: 700 }}>
            Nuestra calidad esta respaldada por las instituciones mas exigentes de Mexico.
          </Typography>
        </Container>
      </Box>

      {/* Certifications Detail */}
      <Container maxWidth="lg" sx={{ py: { xs: 8, md: 12 } }}>
        <Grid container spacing={4}>
          {CERTIFICATIONS_DATA.map((cert) => (
            <Grid key={cert.name} xs={12} md={4}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  borderTop: '4px solid',
                  borderColor: cert.color,
                }}
              >
                <CardContent sx={{ p: 4, flexGrow: 1 }}>
                  <Box sx={{ color: cert.color, mb: 2 }}>{cert.icon}</Box>
                  <Typography variant="h4" sx={{ mb: 0.5, fontWeight: 700 }}>
                    {cert.name}
                  </Typography>
                  <Typography variant="subtitle1" color="text.secondary" sx={{ mb: 3 }}>
                    {cert.subtitle}
                  </Typography>
                  <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.8, mb: 3 }}>
                    {cert.description}
                  </Typography>

                  <Typography variant="h6" sx={{ mb: 1 }}>
                    Beneficios
                  </Typography>
                  <List dense disablePadding>
                    {cert.benefits.map((benefit) => (
                      <ListItem key={benefit} disableGutters sx={{ py: 0.3 }}>
                        <ListItemIcon sx={{ minWidth: 32 }}>
                          <CheckCircleIcon sx={{ color: cert.color, fontSize: 20 }} />
                        </ListItemIcon>
                        <ListItemText
                          primary={benefit}
                          primaryTypographyProps={{ variant: 'body2', color: 'text.secondary' }}
                        />
                      </ListItem>
                    ))}
                  </List>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Why it matters */}
      <Box sx={{ backgroundColor: '#F8FAFB', py: { xs: 6, md: 8 } }}>
        <Container maxWidth="lg">
          <Typography variant="h3" sx={{ mb: 3, textAlign: 'center' }}>
            Por que importan nuestras acreditaciones
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ maxWidth: 800, mx: 'auto', textAlign: 'center', lineHeight: 1.8 }}
          >
            Las acreditaciones y certificaciones no son solo sellos: representan el compromiso
            de Awalab de Mexico con la excelencia. Cada certificacion implica auditorias
            periodicas, capacitacion continua del personal y la implementacion de mejores
            practicas internacionales. Para nuestros clientes, esto se traduce en confianza,
            precision y respaldo en cada producto y servicio que ofrecemos.
          </Typography>
        </Container>
      </Box>
    </>
  );
}
