import { Metadata } from 'next';
import { Box, Container, Typography, Grid, Card, CardContent, Chip, Stack } from '@mui/material';
import ArticleIcon from '@mui/icons-material/Article';
import { generatePageMetadata } from '@/lib/seo';

export const metadata: Metadata = generatePageMetadata({
  title: 'Blog',
  description:
    'Articulos, guias y noticias sobre equipo de laboratorio, seguridad industrial y tratamiento de agua. Mantente informado con Awalab de Mexico.',
  canonical: '/blog',
  keywords: ['blog awalab', 'articulos laboratorio', 'noticias seguridad industrial', 'tratamiento de agua blog'],
  ogType: 'website',
});

const ARTICLES = [
  {
    title: 'Como elegir el equipo de laboratorio adecuado para tu industria',
    excerpt:
      'Guia completa para seleccionar instrumentos de medicion, reactivos y equipo de analisis segun el tipo de industria y normatividad aplicable.',
    category: 'Laboratorio',
    categoryColor: '#0A87C6',
    date: '15 Feb 2026',
    readTime: '8 min',
  },
  {
    title: 'Normatividad NOM-017-STPS: Equipo de proteccion personal',
    excerpt:
      'Todo lo que necesitas saber sobre la norma mexicana de seguridad en el trabajo y como cumplir con los requerimientos de EPP.',
    category: 'Seguridad Industrial',
    categoryColor: '#ED6C02',
    date: '02 Feb 2026',
    readTime: '6 min',
  },
  {
    title: 'Plantas PTAR: Guia completa de tratamiento de aguas residuales',
    excerpt:
      'Desde el diseno hasta la operacion, conoce todo sobre plantas de tratamiento de aguas residuales para la industria.',
    category: 'Tratamiento de Agua',
    categoryColor: '#2E7D32',
    date: '20 Ene 2026',
    readTime: '10 min',
  },
  {
    title: 'Metrologia industrial: importancia de la calibracion periodica',
    excerpt:
      'Descubre por que la calibracion periodica de instrumentos es crucial para mantener la precision y cumplir con auditorias de calidad.',
    category: 'Laboratorio',
    categoryColor: '#0A87C6',
    date: '10 Ene 2026',
    readTime: '5 min',
  },
  {
    title: 'Tendencias 2026 en seguridad industrial en Mexico',
    excerpt:
      'Las nuevas tecnologias, materiales y regulaciones que estan transformando la seguridad industrial en las plantas mexicanas.',
    category: 'Seguridad Industrial',
    categoryColor: '#ED6C02',
    date: '28 Dic 2025',
    readTime: '7 min',
  },
  {
    title: 'Analisis de calidad del agua: parametros esenciales segun CONAGUA',
    excerpt:
      'Los parametros fisicoquimicos y microbiologicos que debes monitorear para cumplir con la normatividad de CONAGUA.',
    category: 'Tratamiento de Agua',
    categoryColor: '#2E7D32',
    date: '15 Dic 2025',
    readTime: '9 min',
  },
];

export default function BlogPage() {
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
            <ArticleIcon sx={{ fontSize: 40 }} />
            <Typography variant="h1" sx={{ color: '#FFFFFF', fontSize: { xs: '2rem', md: '3rem' } }}>
              Blog
            </Typography>
          </Box>
          <Typography variant="h5" sx={{ color: 'rgba(255,255,255,0.85)', fontWeight: 400, maxWidth: 700 }}>
            Articulos, guias y noticias del mundo industrial. Mantente al dia con las
            ultimas tendencias y mejores practicas.
          </Typography>
        </Container>
      </Box>

      {/* Articles Grid */}
      <Container maxWidth="lg" sx={{ py: { xs: 8, md: 12 } }}>
        <Grid container spacing={4}>
          {ARTICLES.map((article) => (
            <Grid key={article.title} xs={12} md={6}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  cursor: 'pointer',
                  transition: 'box-shadow 0.2s',
                  '&:hover': { boxShadow: 6 },
                }}
              >
                {/* Placeholder image area */}
                <Box
                  sx={{
                    height: 200,
                    backgroundColor: 'grey.100',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <ArticleIcon sx={{ fontSize: 48, color: 'grey.300' }} />
                </Box>
                <CardContent sx={{ p: 3, flexGrow: 1 }}>
                  <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
                    <Chip
                      label={article.category}
                      size="small"
                      sx={{ backgroundColor: article.categoryColor, color: '#FFFFFF', fontWeight: 600 }}
                    />
                    <Chip label={article.readTime} size="small" variant="outlined" />
                  </Stack>
                  <Typography variant="h5" sx={{ mb: 1, fontWeight: 600 }}>
                    {article.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7, mb: 2 }}>
                    {article.excerpt}
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    {article.date}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}
