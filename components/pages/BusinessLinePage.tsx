import {
  Box,
  Container,
  Typography,
  Grid,
  CardContent,
  Button,
  Stack,
  Chip,
} from '@mui/material';
import Link from 'next/link';
import Image from 'next/image';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { FadeInOnScroll } from '@/components/ui/FadeInOnScroll';
import { GlowCard } from '@/components/ui/GlowCard';
import { CountUp } from '@/components/ui/CountUp';
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

interface Category {
  name: string;
  slug: string;
  count: number;
  icon: React.ReactNode;
  description: string;
}

interface Stat {
  value: number;
  suffix: string;
  label: string;
}

interface BusinessLinePageProps {
  title: string;
  subtitle: string;
  heroImage: string;
  heroAlt: string;
  categories: Category[];
  brands: readonly string[];
  stats: Stat[];
  ctaTitle: string;
  ctaDescription: string;
  ctaPrimaryHref: string;
  ctaPrimaryLabel: string;
  ctaSecondaryHref?: string;
  ctaSecondaryLabel?: string;
  brandsTitle: string;
  brandsSubtitle: string;
}

export function BusinessLinePage({
  title,
  subtitle,
  heroImage,
  heroAlt,
  categories,
  brands,
  stats,
  ctaTitle,
  ctaDescription,
  ctaPrimaryHref,
  ctaPrimaryLabel,
  ctaSecondaryHref,
  ctaSecondaryLabel,
  brandsTitle,
  brandsSubtitle,
}: BusinessLinePageProps) {
  return (
    <>
      {/* ── Hero ── */}
      <Box
        sx={{
          position: 'relative',
          minHeight: { xs: 420, md: 520 },
          display: 'flex',
          alignItems: 'center',
          overflow: 'hidden',
        }}
      >
        <Image
          src={heroImage}
          alt={heroAlt}
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            background: `linear-gradient(160deg, rgba(13,27,42,0.93) 0%, rgba(30,74,113,0.82) 50%, rgba(21,53,84,0.9) 100%)`,
            zIndex: 1,
          }}
        />
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2, py: { xs: 8, md: 0 } }}>
          <Box sx={{ maxWidth: 640 }}>
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
              Awalab de Mexico
            </Typography>
            <Typography
              variant="h1"
              sx={{
                color: colors.white,
                fontWeight: 700,
                fontSize: { xs: '2.2rem', sm: '2.8rem', md: '3.25rem' },
                mb: 2.5,
                lineHeight: 1.1,
                letterSpacing: '-0.03em',
              }}
            >
              {title}
            </Typography>
            <Typography
              sx={{
                color: 'rgba(255,255,255,0.8)',
                fontWeight: 400,
                maxWidth: 540,
                lineHeight: 1.7,
                fontSize: { xs: '1rem', md: '1.08rem' },
                mb: 4,
              }}
            >
              {subtitle}
            </Typography>
            <Button
              component={Link}
              href="/cotizacion"
              variant="contained"
              size="large"
              sx={btnPrimaryOnDark}
            >
              Solicitar Cotizacion
            </Button>
          </Box>
        </Container>
      </Box>

      {/* ── Stats bar ── */}
      <Box
        sx={{
          backgroundColor: colors.navy,
          py: { xs: 4, md: 5 },
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={3}>
            {stats.map((stat, i) => (
              <Grid key={stat.label} xs={6} md={3}>
                <FadeInOnScroll delay={i * 0.08} direction="up">
                  <Box sx={{ textAlign: 'center' }}>
                    <Typography
                      sx={{
                        fontWeight: 700,
                        fontSize: { xs: '2rem', md: '2.5rem' },
                        lineHeight: 1,
                        mb: 0.5,
                        color: colors.white,
                      }}
                    >
                      <CountUp end={stat.value} suffix={stat.suffix} />
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: 'rgba(255,255,255,0.55)',
                        fontWeight: 500,
                        fontSize: '0.8rem',
                        letterSpacing: '0.03em',
                      }}
                    >
                      {stat.label}
                    </Typography>
                  </Box>
                </FadeInOnScroll>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* ── Categories ── */}
      <Box sx={{ ...section, background: `linear-gradient(180deg, ${colors.white} 0%, ${colors.gray50} 100%)` }}>
        <Container maxWidth="lg">
          <FadeInOnScroll>
            <Typography variant="overline" sx={sectionLabel}>
              Catalogo
            </Typography>
            <Typography variant="h2" sx={sectionTitle}>
              Categorias de Productos
            </Typography>
            <Typography variant="body1" sx={sectionSubtitle}>
              Explora nuestro catalogo completo con las mejores marcas del mercado
            </Typography>
          </FadeInOnScroll>

          <Grid container spacing={3.5}>
            {categories.map((cat, index) => (
              <Grid key={cat.slug} xs={12} sm={6} md={4}>
                <FadeInOnScroll delay={index * 0.08} direction="up">
                  <GlowCard
                    glowColor="rgba(30,74,113,0.06)"
                    sx={{ ...card, height: '100%', p: 0 }}
                  >
                    <CardContent sx={{ p: 3.5 }}>
                      <Box
                        sx={{
                          width: 48,
                          height: 48,
                          borderRadius: '12px',
                          border: `1.5px solid ${colors.accent}`,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: colors.accent,
                          mb: 2,
                        }}
                      >
                        {cat.icon}
                      </Box>
                      <Typography
                        variant="h6"
                        sx={{ fontWeight: 700, mb: 0.5, color: colors.text, fontSize: '1rem' }}
                      >
                        {cat.name}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{ color: colors.textSecondary, mb: 2, lineHeight: 1.7, fontSize: '0.875rem' }}
                      >
                        {cat.description}
                      </Typography>
                      <Typography
                        variant="caption"
                        sx={{ color: colors.accent, fontWeight: 600, fontSize: '0.8rem' }}
                      >
                        {cat.count} productos disponibles
                      </Typography>
                    </CardContent>
                  </GlowCard>
                </FadeInOnScroll>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* ── Brands ── */}
      <Box sx={{ ...section, backgroundColor: colors.offWhite }}>
        <Container maxWidth="lg">
          <FadeInOnScroll>
            <Typography variant="overline" sx={sectionLabel}>
              Distribuidores autorizados
            </Typography>
            <Typography variant="h2" sx={sectionTitle}>
              {brandsTitle}
            </Typography>
            <Typography variant="body1" sx={sectionSubtitle}>
              {brandsSubtitle}
            </Typography>
          </FadeInOnScroll>
          <FadeInOnScroll delay={0.15}>
            <Stack
              direction="row"
              spacing={1.5}
              flexWrap="wrap"
              useFlexGap
              justifyContent="center"
            >
              {brands.map((b) => (
                <Chip
                  key={b}
                  label={b}
                  sx={{
                    px: 2.5,
                    py: 2.5,
                    fontSize: '0.9rem',
                    fontWeight: 600,
                    color: colors.navy,
                    backgroundColor: colors.white,
                    border: `1.5px solid ${colors.border}`,
                    borderRadius: '10px',
                    boxShadow: '0 1px 4px rgba(0,0,0,0.04)',
                    transition: 'all 0.25s ease',
                    '&:hover': {
                      backgroundColor: colors.navy,
                      color: colors.white,
                      borderColor: colors.navy,
                      transform: 'translateY(-2px)',
                      boxShadow: '0 4px 12px rgba(30,74,113,0.2)',
                    },
                  }}
                />
              ))}
            </Stack>
          </FadeInOnScroll>
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
                letterSpacing: '-0.02em',
              }}
            >
              {ctaTitle}
            </Typography>
            <Typography
              sx={{
                color: 'rgba(255,255,255,0.6)',
                mb: 5,
                fontSize: '1rem',
                lineHeight: 1.7,
              }}
            >
              {ctaDescription}
            </Typography>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="center">
              <Button
                component={Link}
                href={ctaPrimaryHref}
                variant="contained"
                size="large"
                endIcon={<ArrowForwardIcon />}
                sx={btnPrimaryOnDark}
              >
                {ctaPrimaryLabel}
              </Button>
              {ctaSecondaryHref && ctaSecondaryLabel && (
                <Button
                  component={Link}
                  href={ctaSecondaryHref}
                  variant="outlined"
                  size="large"
                  sx={btnSecondaryOnDark}
                >
                  {ctaSecondaryLabel}
                </Button>
              )}
            </Stack>
          </FadeInOnScroll>
        </Container>
      </Box>
    </>
  );
}
