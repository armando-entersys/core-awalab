import { Metadata } from 'next';
import { Box, Container, Typography, Grid, CardContent, Chip, Stack, Button } from '@mui/material';
import Link from 'next/link';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { generatePageMetadata } from '@/lib/seo';
import { FadeInOnScroll } from '@/components/ui/FadeInOnScroll';
import { GlowCard } from '@/components/ui/GlowCard';
import {
  colors,
  card,
  section,
  sectionLabel,
  sectionTitle,
  sectionSubtitle,
  btnPrimaryOnDark,
  btnSecondaryOnDark,
} from '@/lib/design-tokens';

export const metadata: Metadata = generatePageMetadata({
  title: 'Blog',
  description:
    'Articulos, guias y noticias sobre equipo de laboratorio, seguridad industrial y tratamiento de agua.',
  canonical: '/blog',
  keywords: ['blog awalab', 'articulos laboratorio', 'noticias seguridad industrial'],
  ogType: 'website',
});

const ARTICLES = [
  {
    title: 'Como elegir el equipo de laboratorio adecuado para tu industria',
    excerpt:
      'Guia completa para seleccionar instrumentos de medicion, reactivos y equipo de analisis segun el tipo de industria y normatividad aplicable.',
    category: 'Laboratorio',
    date: '15 Feb 2026',
    readTime: '8 min',
  },
  {
    title: 'Normatividad NOM-017-STPS: Equipo de proteccion personal',
    excerpt:
      'Todo lo que necesitas saber sobre la norma mexicana de seguridad en el trabajo y como cumplir con los requerimientos de EPP.',
    category: 'Seguridad',
    date: '02 Feb 2026',
    readTime: '6 min',
  },
  {
    title: 'Plantas PTAR: Guia completa de tratamiento de aguas residuales',
    excerpt:
      'Desde el diseno hasta la operacion, conoce todo sobre plantas de tratamiento de aguas residuales para la industria.',
    category: 'Agua',
    date: '20 Ene 2026',
    readTime: '10 min',
  },
  {
    title: 'Metrologia industrial: importancia de la calibracion periodica',
    excerpt:
      'Descubre por que la calibracion periodica de instrumentos es crucial para mantener la precision y cumplir con auditorias de calidad.',
    category: 'Laboratorio',
    date: '10 Ene 2026',
    readTime: '5 min',
  },
  {
    title: 'Tendencias 2026 en seguridad industrial en Mexico',
    excerpt:
      'Las nuevas tecnologias, materiales y regulaciones que estan transformando la seguridad industrial en las plantas mexicanas.',
    category: 'Seguridad',
    date: '28 Dic 2025',
    readTime: '7 min',
  },
  {
    title: 'Analisis de calidad del agua: parametros esenciales segun CONAGUA',
    excerpt:
      'Los parametros fisicoquimicos y microbiologicos que debes monitorear para cumplir con la normatividad de CONAGUA.',
    category: 'Agua',
    date: '15 Dic 2025',
    readTime: '9 min',
  },
];

export default function BlogPage() {
  // Featured article is the first one
  const featured = ARTICLES[0];
  const rest = ARTICLES.slice(1);

  return (
    <>
      {/* ── Hero ── */}
      <Box
        sx={{
          background: `linear-gradient(160deg, ${colors.navyDark} 0%, ${colors.navy} 50%, ${colors.navyDeep} 100%)`,
          py: { xs: 10, md: 14 },
        }}
      >
        <Container maxWidth="lg">
          <FadeInOnScroll>
            <Typography
              variant="caption"
              sx={{
                display: 'inline-block',
                color: colors.gray300,
                fontWeight: 500,
                letterSpacing: '0.12em',
                fontSize: '0.78rem',
                mb: 2.5,
                textTransform: 'uppercase',
                borderLeft: `3px solid ${colors.accent}`,
                pl: 1.5,
              }}
            >
              Conocimiento industrial
            </Typography>
            <Typography
              variant="h1"
              sx={{
                color: colors.white,
                fontWeight: 700,
                fontSize: { xs: '2.2rem', md: '3.25rem' },
                mb: 2.5,
                lineHeight: 1.1,
                letterSpacing: '-0.03em',
              }}
            >
              Blog
            </Typography>
            <Typography
              sx={{
                color: 'rgba(255,255,255,0.7)',
                maxWidth: 560,
                lineHeight: 1.7,
                fontSize: { xs: '1rem', md: '1.08rem' },
              }}
            >
              Articulos, guias y noticias del mundo industrial. Mantente al dia con las ultimas
              tendencias y mejores practicas.
            </Typography>
          </FadeInOnScroll>
        </Container>
      </Box>

      {/* ── Featured Article ── */}
      <Box sx={{ ...section, background: `linear-gradient(180deg, ${colors.white} 0%, ${colors.gray50} 100%)` }}>
        <Container maxWidth="lg">
          <FadeInOnScroll>
            <GlowCard
              glowColor="rgba(30,74,113,0.06)"
              sx={{
                ...card,
                p: 0,
                mb: 8,
                cursor: 'pointer',
              }}
            >
              <Grid container>
                <Grid xs={12} md={5}>
                  <Box
                    sx={{
                      height: { xs: 220, md: '100%' },
                      minHeight: 280,
                      background: `linear-gradient(135deg, ${colors.navy} 0%, ${colors.accent} 100%)`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderRadius: { xs: '16px 16px 0 0', md: '16px 0 0 16px' },
                    }}
                  >
                    <Typography
                      sx={{
                        color: 'rgba(255,255,255,0.15)',
                        fontSize: '6rem',
                        fontWeight: 800,
                        lineHeight: 1,
                      }}
                    >
                      01
                    </Typography>
                  </Box>
                </Grid>
                <Grid xs={12} md={7}>
                  <CardContent sx={{ p: { xs: 3, md: 5 }, display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'center' }}>
                    <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
                      <Chip
                        label={featured.category}
                        size="small"
                        sx={{
                          fontWeight: 600,
                          fontSize: '0.75rem',
                          color: colors.accent,
                          backgroundColor: colors.accentLight,
                          borderRadius: '8px',
                        }}
                      />
                      <Chip
                        icon={<AccessTimeOutlinedIcon sx={{ fontSize: 14 }} />}
                        label={featured.readTime}
                        size="small"
                        variant="outlined"
                        sx={{ borderRadius: '8px', fontSize: '0.75rem', borderColor: colors.border }}
                      />
                    </Stack>
                    <Typography variant="h4" sx={{ fontWeight: 700, mb: 1.5, color: colors.text, fontSize: { xs: '1.3rem', md: '1.6rem' }, lineHeight: 1.3 }}>
                      {featured.title}
                    </Typography>
                    <Typography variant="body1" sx={{ color: colors.textSecondary, mb: 2.5, lineHeight: 1.7 }}>
                      {featured.excerpt}
                    </Typography>
                    <Typography variant="caption" sx={{ color: colors.textMuted }}>
                      {featured.date}
                    </Typography>
                  </CardContent>
                </Grid>
              </Grid>
            </GlowCard>
          </FadeInOnScroll>

          {/* ── Articles Grid ── */}
          <FadeInOnScroll>
            <Typography variant="overline" sx={sectionLabel}>
              Articulos recientes
            </Typography>
          </FadeInOnScroll>

          <Grid container spacing={3.5}>
            {rest.map((article, index) => (
              <Grid key={article.title} xs={12} sm={6} md={4}>
                <FadeInOnScroll delay={index * 0.08} direction="up">
                  <GlowCard
                    glowColor="rgba(30,74,113,0.06)"
                    sx={{
                      ...card,
                      height: '100%',
                      p: 0,
                      cursor: 'pointer',
                      '&:hover .blog-arrow': { transform: 'translateX(4px)' },
                    }}
                  >
                    {/* Number header */}
                    <Box
                      sx={{
                        height: 120,
                        background: `linear-gradient(135deg, ${colors.navy} 0%, ${colors.navyDeep} 100%)`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: '16px 16px 0 0',
                      }}
                    >
                      <Typography
                        sx={{
                          color: 'rgba(255,255,255,0.1)',
                          fontSize: '3.5rem',
                          fontWeight: 800,
                          lineHeight: 1,
                        }}
                      >
                        {String(index + 2).padStart(2, '0')}
                      </Typography>
                    </Box>
                    <CardContent sx={{ p: 3 }}>
                      <Stack direction="row" spacing={1} sx={{ mb: 1.5 }}>
                        <Chip
                          label={article.category}
                          size="small"
                          sx={{
                            fontWeight: 600,
                            fontSize: '0.72rem',
                            color: colors.accent,
                            backgroundColor: colors.accentLight,
                            borderRadius: '6px',
                          }}
                        />
                        <Typography variant="caption" sx={{ color: colors.textMuted, display: 'flex', alignItems: 'center', gap: 0.5 }}>
                          <AccessTimeOutlinedIcon sx={{ fontSize: 12 }} />
                          {article.readTime}
                        </Typography>
                      </Stack>
                      <Typography
                        variant="h6"
                        sx={{ fontWeight: 700, mb: 1, color: colors.text, fontSize: '0.95rem', lineHeight: 1.4 }}
                      >
                        {article.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{ color: colors.textSecondary, mb: 2, lineHeight: 1.7, fontSize: '0.85rem' }}
                      >
                        {article.excerpt}
                      </Typography>
                      <Stack direction="row" alignItems="center" justifyContent="space-between">
                        <Typography variant="caption" sx={{ color: colors.textMuted }}>
                          {article.date}
                        </Typography>
                        <ArrowForwardIcon
                          className="blog-arrow"
                          sx={{ fontSize: 16, color: colors.accent, transition: 'transform 0.25s ease' }}
                        />
                      </Stack>
                    </CardContent>
                  </GlowCard>
                </FadeInOnScroll>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* ── CTA ── */}
      <Box
        sx={{
          background: `linear-gradient(160deg, ${colors.navy} 0%, ${colors.navyDark} 100%)`,
          py: { xs: 10, md: 14 },
          textAlign: 'center',
        }}
      >
        <Container maxWidth="sm">
          <FadeInOnScroll>
            <Typography
              variant="h3"
              sx={{
                color: colors.white,
                fontWeight: 700,
                mb: 2,
                fontSize: { xs: '1.5rem', md: '2.25rem' },
                lineHeight: 1.2,
              }}
            >
              ¿Necesitas asesoria especializada?
            </Typography>
            <Typography sx={{ color: 'rgba(255,255,255,0.6)', mb: 5, fontSize: '1rem', lineHeight: 1.7 }}>
              Nuestro equipo tecnico puede resolver tus dudas y guiarte en la seleccion del equipo ideal.
            </Typography>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="center">
              <Button component={Link} href="/cotizacion" variant="contained" size="large" sx={btnPrimaryOnDark}>
                Solicitar Cotizacion
              </Button>
              <Button component={Link} href="/contacto" variant="outlined" size="large" sx={btnSecondaryOnDark}>
                Contactanos
              </Button>
            </Stack>
          </FadeInOnScroll>
        </Container>
      </Box>
    </>
  );
}
