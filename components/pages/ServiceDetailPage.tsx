import {
  Box,
  Container,
  Typography,
  Grid,
  Button,
  Stack,
} from '@mui/material';
import Link from 'next/link';
import Image from 'next/image';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import VerifiedIcon from '@mui/icons-material/Verified';
import { FadeInOnScroll } from '@/components/ui/FadeInOnScroll';
import { CountUp } from '@/components/ui/CountUp';
import {
  colors,
  btnPrimaryOnDark,
  btnSecondaryOnDark,
} from '@/lib/design-tokens';

interface Stat {
  value: number;
  suffix: string;
  label: string;
}

interface ServiceDetailPageProps {
  title: string;
  subtitle: string;
  heroImage: string;
  heroAlt: string;
  badge?: string;
  stats: Stat[];
  ctaTitle: string;
  ctaDescription: string;
  ctaPrimaryHref: string;
  ctaPrimaryLabel: string;
  ctaSecondaryHref?: string;
  ctaSecondaryLabel?: string;
  children: React.ReactNode;
}

export function ServiceDetailPage({
  title,
  subtitle,
  heroImage,
  heroAlt,
  badge,
  stats,
  ctaTitle,
  ctaDescription,
  ctaPrimaryHref,
  ctaPrimaryLabel,
  ctaSecondaryHref,
  ctaSecondaryLabel,
  children,
}: ServiceDetailPageProps) {
  return (
    <>
      {/* ── Hero ── */}
      <Box
        sx={{
          position: 'relative',
          minHeight: { xs: 380, md: 480 },
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
            background:
              'linear-gradient(160deg, rgba(13,27,42,0.93) 0%, rgba(30,74,113,0.82) 50%, rgba(21,53,84,0.9) 100%)',
            zIndex: 1,
          }}
        />
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2, py: { xs: 8, md: 0 } }}>
          <FadeInOnScroll>
            <Box sx={{ maxWidth: 640 }}>
              {badge && (
                <Box
                  sx={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 1,
                    backgroundColor: 'rgba(10,135,198,0.2)',
                    backdropFilter: 'blur(8px)',
                    border: '1px solid rgba(10,135,198,0.3)',
                    borderRadius: '100px',
                    px: 2.5,
                    py: 0.75,
                    mb: 3,
                  }}
                >
                  <VerifiedIcon sx={{ fontSize: 16, color: '#4FC3F7' }} />
                  <Typography
                    variant="caption"
                    sx={{ color: '#B3E5FC', fontWeight: 600, letterSpacing: '0.05em', fontSize: '0.8rem' }}
                  >
                    {badge}
                  </Typography>
                </Box>
              )}
              <Typography
                variant="h1"
                sx={{
                  color: colors.white,
                  fontWeight: 800,
                  fontSize: { xs: '2.25rem', sm: '3rem', md: '3.5rem' },
                  mb: 2.5,
                  lineHeight: 1.1,
                  letterSpacing: '-0.03em',
                }}
              >
                {title}
              </Typography>
              <Typography
                sx={{
                  color: 'rgba(255,255,255,0.85)',
                  fontWeight: 400,
                  maxWidth: 560,
                  lineHeight: 1.7,
                  fontSize: { xs: '1rem', md: '1.15rem' },
                }}
              >
                {subtitle}
              </Typography>
            </Box>
          </FadeInOnScroll>
        </Container>
      </Box>

      {/* ── Stats bar ── */}
      <Box sx={{ backgroundColor: colors.navy, py: { xs: 4, md: 5 } }}>
        <Container maxWidth="lg">
          <Grid container spacing={3}>
            {stats.map((stat, i) => (
              <Grid key={stat.label} xs={6} md={12 / stats.length}>
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

      {/* ── Custom content ── */}
      {children}

      {/* ── CTA ── */}
      <Box
        sx={{
          background: `linear-gradient(160deg, ${colors.accent} 0%, ${colors.navy} 50%, ${colors.navyDark} 100%)`,
          py: { xs: 10, md: 14 },
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            background: 'radial-gradient(ellipse at 30% 50%, rgba(79,195,247,0.1) 0%, transparent 50%)',
          }}
        />
        <Container maxWidth="sm" sx={{ position: 'relative', zIndex: 1 }}>
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
                color: 'rgba(255,255,255,0.7)',
                mb: 5,
                fontSize: '1.05rem',
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
