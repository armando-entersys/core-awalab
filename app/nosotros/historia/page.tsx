import { Metadata } from 'next';
import { Box, Container, Typography, Grid, CardContent, Button, Stack } from '@mui/material';
import Link from 'next/link';
import Image from 'next/image';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { generatePageMetadata } from '@/lib/seo';
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
          src="/img/hero/hero-nosotros.png"
          alt="Historia de Awalab de Mexico"
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
              Desde el ano 2000
            </Typography>
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
              Nuestra Historia
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
              Mas de dos decadas construyendo soluciones industriales de clase mundial para Mexico.
            </Typography>
          </FadeInOnScroll>
        </Container>
      </Box>

      {/* ── Stats bar ── */}
      <Box sx={{ backgroundColor: colors.navy, py: { xs: 4, md: 5 } }}>
        <Container maxWidth="lg">
          <Grid container spacing={3}>
            {[
              { value: 25, suffix: '+', label: 'Anos de experiencia' },
              { value: 7, suffix: '', label: 'Hitos clave' },
              { value: 3, suffix: '', label: 'Acreditaciones' },
              { value: 500, suffix: '+', label: 'Clientes atendidos' },
            ].map((stat, i) => (
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
                      sx={{ color: 'rgba(255,255,255,0.55)', fontWeight: 500, fontSize: '0.8rem' }}
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

      {/* ── Timeline ── */}
      <Box sx={{ ...section, background: `linear-gradient(180deg, ${colors.white} 0%, ${colors.gray50} 100%)` }}>
        <Container maxWidth="lg">
          <FadeInOnScroll>
            <Typography variant="overline" sx={sectionLabel}>Trayectoria</Typography>
            <Typography variant="h2" sx={sectionTitle}>Hitos que nos Definen</Typography>
            <Typography variant="body1" sx={sectionSubtitle}>
              Cada paso ha fortalecido nuestro compromiso con la industria mexicana
            </Typography>
          </FadeInOnScroll>

          <Box sx={{ position: 'relative' }}>
            {/* Vertical line */}
            <Box
              sx={{
                display: { xs: 'none', md: 'block' },
                position: 'absolute',
                left: '50%',
                top: 0,
                bottom: 0,
                width: 2,
                backgroundColor: colors.gray100,
                transform: 'translateX(-50%)',
              }}
            />

            {MILESTONES.map((milestone, index) => {
              const isLeft = index % 2 === 0;
              return (
                <FadeInOnScroll
                  key={milestone.year}
                  delay={index * 0.08}
                  direction={isLeft ? 'left' : 'right'}
                >
                  <Grid
                    container
                    spacing={4}
                    sx={{ mb: { xs: 3, md: 0 }, minHeight: { md: 160 }, alignItems: 'center' }}
                  >
                    <Grid
                      xs={12}
                      md={5}
                      sx={{
                        order: { xs: 0, md: isLeft ? 0 : 1 },
                        textAlign: { xs: 'left', md: isLeft ? 'right' : 'left' },
                      }}
                    >
                      {isLeft ? (
                        <GlowCard
                          glowColor="rgba(10,135,198,0.06)"
                          sx={{ ...card, p: 0, display: 'inline-block', width: '100%' }}
                        >
                          <CardContent sx={{ p: 3.5 }}>
                            <Typography
                              sx={{
                                fontWeight: 800,
                                fontSize: '2rem',
                                color: colors.accent,
                                lineHeight: 1,
                                mb: 1,
                              }}
                            >
                              {milestone.year}
                            </Typography>
                            <Typography variant="h6" sx={{ fontWeight: 700, mb: 1, color: colors.text }}>
                              {milestone.title}
                            </Typography>
                            <Typography variant="body2" sx={{ color: colors.textSecondary, lineHeight: 1.7 }}>
                              {milestone.description}
                            </Typography>
                          </CardContent>
                        </GlowCard>
                      ) : (
                        <Box sx={{ display: { xs: 'none', md: 'block' } }} />
                      )}
                    </Grid>

                    {/* Center dot */}
                    <Grid
                      xs={12}
                      md={2}
                      sx={{
                        display: { xs: 'none', md: 'flex' },
                        justifyContent: 'center',
                        alignItems: 'center',
                        order: { md: isLeft ? 1 : 1 },
                      }}
                    >
                      <Box
                        sx={{
                          width: 48,
                          height: 48,
                          borderRadius: '14px',
                          background: `linear-gradient(135deg, ${colors.accent} 0%, ${colors.navy} 100%)`,
                          color: colors.white,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontWeight: 700,
                          fontSize: '0.8rem',
                          boxShadow: '0 4px 16px rgba(10,135,198,0.25)',
                          zIndex: 2,
                        }}
                      >
                        {milestone.year.slice(-2)}
                      </Box>
                    </Grid>

                    <Grid
                      xs={12}
                      md={5}
                      sx={{
                        order: { xs: 1, md: isLeft ? 2 : 0 },
                        textAlign: { xs: 'left', md: isLeft ? 'left' : 'right' },
                      }}
                    >
                      {!isLeft ? (
                        <GlowCard
                          glowColor="rgba(10,135,198,0.06)"
                          sx={{ ...card, p: 0, display: 'inline-block', width: '100%' }}
                        >
                          <CardContent sx={{ p: 3.5 }}>
                            <Typography
                              sx={{
                                fontWeight: 800,
                                fontSize: '2rem',
                                color: colors.accent,
                                lineHeight: 1,
                                mb: 1,
                              }}
                            >
                              {milestone.year}
                            </Typography>
                            <Typography variant="h6" sx={{ fontWeight: 700, mb: 1, color: colors.text }}>
                              {milestone.title}
                            </Typography>
                            <Typography variant="body2" sx={{ color: colors.textSecondary, lineHeight: 1.7 }}>
                              {milestone.description}
                            </Typography>
                          </CardContent>
                        </GlowCard>
                      ) : (
                        <Box sx={{ display: { xs: 'none', md: 'block' } }} />
                      )}
                    </Grid>
                  </Grid>
                </FadeInOnScroll>
              );
            })}
          </Box>
        </Container>
      </Box>

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
              }}
            >
              Se parte de nuestra historia
            </Typography>
            <Typography
              sx={{ color: 'rgba(255,255,255,0.7)', mb: 5, fontSize: '1.05rem', lineHeight: 1.7 }}
            >
              Mas de 500 empresas ya confian en Awalab. Unete a quienes eligen excelencia.
            </Typography>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="center">
              <Button
                component={Link}
                href="/contacto"
                variant="contained"
                size="large"
                endIcon={<ArrowForwardIcon />}
                sx={btnPrimaryOnDark}
              >
                Contactanos
              </Button>
              <Button component={Link} href="/nosotros" variant="outlined" size="large" sx={btnSecondaryOnDark}>
                Volver a Nosotros
              </Button>
            </Stack>
          </FadeInOnScroll>
        </Container>
      </Box>
    </>
  );
}
