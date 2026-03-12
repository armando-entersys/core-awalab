import { Metadata } from 'next';
import { Box, Container, Typography, Grid, Button, Stack, CardContent } from '@mui/material';
import Link from 'next/link';
import Image from 'next/image';
import VerifiedIcon from '@mui/icons-material/Verified';
import GroupsIcon from '@mui/icons-material/Groups';
import HistoryIcon from '@mui/icons-material/History';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import FavoriteIcon from '@mui/icons-material/Favorite';
import HandshakeIcon from '@mui/icons-material/Handshake';
import BoltIcon from '@mui/icons-material/Bolt';
import { generatePageMetadata } from '@/lib/seo';
import { CERTIFICATIONS, IMPACT_NUMBERS } from '@/lib/constants';
import { FadeInOnScroll } from '@/components/ui/FadeInOnScroll';
import { CountUp } from '@/components/ui/CountUp';
import { GlowCard } from '@/components/ui/GlowCard';

export const metadata: Metadata = generatePageMetadata({
  title: 'Nosotros',
  description:
    'Conoce a Awalab de Mexico: +25 anos de experiencia en soluciones industriales. Certificados ISO 9001:2015, EMA y CONAGUA.',
  canonical: '/nosotros',
  keywords: ['awalab de mexico', 'comercializadora industrial', 'equipo laboratorio mexico'],
});

const VALUES = [
  {
    icon: <FavoriteIcon sx={{ fontSize: 32, color: '#FFFFFF' }} />,
    title: 'Pasion',
    description: 'Amamos lo que hacemos. Cada proyecto es una oportunidad de demostrar nuestro compromiso con la excelencia.',
    gradient: 'linear-gradient(135deg, #E91E63 0%, #C2185B 100%)',
  },
  {
    icon: <HandshakeIcon sx={{ fontSize: 32, color: '#FFFFFF' }} />,
    title: 'Confianza',
    description: 'Relaciones a largo plazo construidas con transparencia, honestidad y resultados consistentes.',
    gradient: 'linear-gradient(135deg, #0A87C6 0%, #1E4A71 100%)',
  },
  {
    icon: <BoltIcon sx={{ fontSize: 32, color: '#FFFFFF' }} />,
    title: 'Capacidad',
    description: 'Equipo tecnico certificado, almacenes estrategicos y la red de distribucion mas completa del sector.',
    gradient: 'linear-gradient(135deg, #FF9800 0%, #E65100 100%)',
  },
];

const SECTIONS = [
  {
    icon: <HistoryIcon sx={{ fontSize: 36, color: '#0A87C6' }} />,
    title: 'Nuestra Historia',
    desc: 'Desde el 2000, una trayectoria de crecimiento, innovacion y compromiso con la industria mexicana.',
    href: '/nosotros/historia',
  },
  {
    icon: <GroupsIcon sx={{ fontSize: 36, color: '#0A87C6' }} />,
    title: 'Nuestro Equipo',
    desc: '31 profesionales apasionados por servir a tu industria con conocimiento y dedicacion.',
    href: '/nosotros/equipo',
  },
  {
    icon: <VerifiedIcon sx={{ fontSize: 36, color: '#0A87C6' }} />,
    title: 'Acreditaciones',
    desc: 'ISO 9001:2015, EMA y CONAGUA respaldan cada producto y servicio que ofrecemos.',
    href: '/nosotros/acreditaciones',
  },
];

export default function NosotrosPage() {
  return (
    <>
      {/* Hero */}
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          minHeight: { xs: '60vh', md: '70vh' },
          display: 'flex',
          alignItems: 'center',
          overflow: 'hidden',
        }}
      >
        <Image
          src="/img/hero/hero-nosotros.png"
          alt="Equipo Awalab de Mexico"
          fill
          priority
          style={{ objectFit: 'cover' }}
          quality={90}
        />
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(135deg, rgba(13,27,42,0.92) 0%, rgba(30,74,113,0.8) 50%, rgba(10,135,198,0.6) 100%)',
            zIndex: 1,
          }}
        />
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2, py: { xs: 10, md: 0 } }}>
          <FadeInOnScroll>
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
                Desde el ano 2000
              </Typography>
            </Box>
            <Typography
              variant="h1"
              sx={{
                color: '#FFFFFF',
                fontSize: { xs: '2.25rem', sm: '3rem', md: '3.75rem' },
                fontWeight: 800,
                lineHeight: 1.1,
                mb: 3,
                letterSpacing: '-0.03em',
                maxWidth: 700,
              }}
            >
              Tu socio industrial
              <br />
              de confianza
            </Typography>
            <Typography
              variant="h5"
              sx={{
                color: 'rgba(255,255,255,0.9)',
                fontWeight: 400,
                maxWidth: 600,
                lineHeight: 1.7,
                fontSize: { xs: '1rem', md: '1.2rem' },
              }}
            >
              Mas de 25 anos siendo el aliado estrategico de las empresas mas importantes de Mexico
              en laboratorio, seguridad industrial y tratamiento de agua.
            </Typography>
          </FadeInOnScroll>
        </Container>
      </Box>

      {/* Mission / Vision */}
      <Box sx={{ py: { xs: 10, md: 14 }, background: 'linear-gradient(180deg, #FFFFFF 0%, #F0F7FF 100%)' }}>
        <Container maxWidth="lg">
          <Grid container spacing={6}>
            <Grid xs={12} md={6}>
              <FadeInOnScroll direction="left">
                <Box
                  sx={{
                    p: 5,
                    borderRadius: '24px',
                    background: 'linear-gradient(135deg, rgba(10,135,198,0.04) 0%, rgba(30,74,113,0.08) 100%)',
                    border: '1px solid rgba(10,135,198,0.1)',
                    height: '100%',
                  }}
                >
                  <Typography
                    variant="overline"
                    sx={{ color: '#0A87C6', fontWeight: 700, letterSpacing: '0.15em', fontSize: '0.75rem' }}
                  >
                    Nuestra Mision
                  </Typography>
                  <Typography variant="h4" sx={{ fontWeight: 700, mb: 2, mt: 1, color: '#1A1A2E' }}>
                    Proveer soluciones integrales
                  </Typography>
                  <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.8, fontSize: '1.05rem' }}>
                    Garantizar la seguridad de los colaboradores, la calidad de los productos y la
                    eficiencia en el uso del agua de nuestros clientes, respaldados por las mejores
                    marcas del mundo, asesoria tecnica especializada y un compromiso inquebrantable
                    con la satisfaccion del cliente.
                  </Typography>
                </Box>
              </FadeInOnScroll>
            </Grid>
            <Grid xs={12} md={6}>
              <FadeInOnScroll direction="right">
                <Box
                  sx={{
                    p: 5,
                    borderRadius: '24px',
                    background: 'linear-gradient(135deg, rgba(30,74,113,0.08) 0%, rgba(10,135,198,0.04) 100%)',
                    border: '1px solid rgba(30,74,113,0.1)',
                    height: '100%',
                  }}
                >
                  <Typography
                    variant="overline"
                    sx={{ color: '#1E4A71', fontWeight: 700, letterSpacing: '0.15em', fontSize: '0.75rem' }}
                  >
                    Nuestra Vision
                  </Typography>
                  <Typography variant="h4" sx={{ fontWeight: 700, mb: 2, mt: 1, color: '#1A1A2E' }}>
                    Ser el socio estrategico preferido
                  </Typography>
                  <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.8, fontSize: '1.05rem' }}>
                    Ser reconocidos como el socio estrategico preferido de la industria mexicana en
                    soluciones de laboratorio, seguridad industrial y tratamiento de agua, destacando
                    por nuestra excelencia, innovacion y compromiso con el desarrollo sostenible.
                  </Typography>
                </Box>
              </FadeInOnScroll>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Values */}
      <Box sx={{ py: { xs: 10, md: 14 }, backgroundColor: '#FFFFFF' }}>
        <Container maxWidth="lg">
          <FadeInOnScroll>
            <Typography
              variant="overline"
              sx={{
                display: 'block',
                textAlign: 'center',
                color: '#0A87C6',
                fontWeight: 700,
                letterSpacing: '0.15em',
                mb: 1.5,
                fontSize: '0.8rem',
              }}
            >
              Lo que nos define
            </Typography>
            <Typography
              variant="h2"
              sx={{
                textAlign: 'center',
                fontWeight: 800,
                mb: 8,
                fontSize: { xs: '1.75rem', md: '2.5rem' },
                color: '#1A1A2E',
              }}
            >
              Nuestros Valores
            </Typography>
          </FadeInOnScroll>
          <Grid container spacing={4}>
            {VALUES.map((value, index) => (
              <Grid key={value.title} xs={12} md={4}>
                <FadeInOnScroll delay={index * 0.15} direction="up">
                  <GlowCard
                    sx={{
                      height: '100%',
                      p: 4,
                      textAlign: 'center',
                      borderRadius: '24px',
                      border: '1px solid rgba(0,0,0,0.04)',
                      boxShadow: '0 4px 24px rgba(0,0,0,0.04)',
                      transition: 'all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1)',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        boxShadow: '0 20px 60px rgba(30,74,113,0.12)',
                      },
                    }}
                  >
                    <CardContent>
                      <Box
                        sx={{
                          width: 72,
                          height: 72,
                          borderRadius: '20px',
                          background: value.gradient,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          mx: 'auto',
                          mb: 3,
                          boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
                        }}
                      >
                        {value.icon}
                      </Box>
                      <Typography variant="h5" sx={{ fontWeight: 700, mb: 1.5, color: '#1A1A2E' }}>
                        {value.title}
                      </Typography>
                      <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.7 }}>
                        {value.description}
                      </Typography>
                    </CardContent>
                  </GlowCard>
                </FadeInOnScroll>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Impact Numbers */}
      <Box
        sx={{
          background: 'linear-gradient(160deg, #0D1B2A 0%, #1E4A71 50%, #153554 100%)',
          py: { xs: 8, md: 12 },
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            width: 400,
            height: 400,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(10,135,198,0.1) 0%, transparent 70%)',
            top: -150,
            right: -100,
          }}
        />
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <FadeInOnScroll>
            <Grid container spacing={4}>
              {IMPACT_NUMBERS.map((item, index) => (
                <Grid key={item.label} xs={6} md={3}>
                  <FadeInOnScroll delay={index * 0.1} direction="up">
                    <Box sx={{ textAlign: 'center', color: '#FFFFFF' }}>
                      <Typography
                        variant="h2"
                        sx={{
                          fontWeight: 800,
                          fontSize: { xs: '2.5rem', md: '3.5rem' },
                          lineHeight: 1,
                          mb: 1,
                          background: 'linear-gradient(180deg, #FFFFFF 0%, rgba(79,195,247,0.9) 100%)',
                          backgroundClip: 'text',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                        }}
                      >
                        <CountUp end={item.value} suffix={item.suffix} />
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{ opacity: 0.7, fontWeight: 500, fontSize: { xs: '0.85rem', md: '1rem' } }}
                      >
                        {item.label}
                      </Typography>
                    </Box>
                  </FadeInOnScroll>
                </Grid>
              ))}
            </Grid>
          </FadeInOnScroll>
        </Container>
      </Box>

      {/* Sections */}
      <Box sx={{ py: { xs: 10, md: 14 }, background: 'linear-gradient(180deg, #F0F7FF 0%, #FFFFFF 100%)' }}>
        <Container maxWidth="lg">
          <FadeInOnScroll>
            <Typography
              variant="h2"
              sx={{
                textAlign: 'center',
                fontWeight: 800,
                mb: 8,
                fontSize: { xs: '1.75rem', md: '2.5rem' },
                color: '#1A1A2E',
              }}
            >
              Conoce mas sobre nosotros
            </Typography>
          </FadeInOnScroll>
          <Grid container spacing={4}>
            {SECTIONS.map((section, index) => (
              <Grid key={section.title} xs={12} md={4}>
                <FadeInOnScroll delay={index * 0.15} direction="up">
                  <Link href={section.href} style={{ textDecoration: 'none', display: 'block', height: '100%' }}>
                  <GlowCard
                    sx={{
                      height: '100%',
                      textAlign: 'center',
                      p: 4,
                      borderRadius: '24px',
                      border: '1px solid rgba(0,0,0,0.06)',
                      boxShadow: '0 4px 24px rgba(0,0,0,0.04)',
                      transition: 'all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1)',
                      cursor: 'pointer',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        boxShadow: '0 20px 60px rgba(30,74,113,0.12)',
                        '& .section-arrow': { transform: 'translateX(4px)' },
                      },
                    }}
                  >
                    <CardContent>
                      <Box
                        sx={{
                          width: 72,
                          height: 72,
                          borderRadius: '20px',
                          background: 'linear-gradient(135deg, rgba(10,135,198,0.08) 0%, rgba(30,74,113,0.08) 100%)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          mx: 'auto',
                          mb: 3,
                        }}
                      >
                        {section.icon}
                      </Box>
                      <Typography variant="h5" sx={{ fontWeight: 700, mb: 1.5, color: '#1A1A2E' }}>
                        {section.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ mb: 3, lineHeight: 1.7 }}>
                        {section.desc}
                      </Typography>
                      <Stack direction="row" alignItems="center" justifyContent="center" spacing={0.5}>
                        <Typography sx={{ color: '#0A87C6', fontWeight: 600, fontSize: '0.9rem' }}>
                          Explorar
                        </Typography>
                        <ArrowForwardIcon
                          className="section-arrow"
                          sx={{ fontSize: 18, color: '#0A87C6', transition: 'transform 0.3s ease' }}
                        />
                      </Stack>
                    </CardContent>
                  </GlowCard>
                  </Link>
                </FadeInOnScroll>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* CTA */}
      <Box
        sx={{
          background: 'linear-gradient(135deg, #0A87C6 0%, #1E4A71 50%, #0D1B2A 100%)',
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
            background:
              'radial-gradient(ellipse at 30% 50%, rgba(79,195,247,0.1) 0%, transparent 50%)',
          }}
        />
        <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1 }}>
          <FadeInOnScroll>
            <Typography
              variant="h3"
              sx={{
                color: '#FFFFFF',
                fontWeight: 800,
                mb: 2,
                fontSize: { xs: '1.5rem', md: '2.25rem' },
              }}
            >
              ¿Listo para trabajar juntos?
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: 'rgba(255,255,255,0.8)', mb: 5, fontSize: '1.1rem', lineHeight: 1.7 }}
            >
              Mas de 500 empresas ya confian en Awalab como su proveedor estrategico.
            </Typography>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="center">
              <Button
                component={Link}
                href="/cotizacion"
                variant="contained"
                size="large"
                sx={{
                  backgroundColor: '#FFFFFF',
                  color: '#1E4A71',
                  fontWeight: 700,
                  px: 5,
                  py: 1.75,
                  fontSize: '1.05rem',
                  borderRadius: '12px',
                  textTransform: 'none',
                  '&:hover': {
                    backgroundColor: '#F0F4F8',
                    transform: 'translateY(-2px)',
                    boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
                  },
                  transition: 'all 0.3s ease',
                }}
              >
                Solicitar Cotizacion
              </Button>
              <Button
                component={Link}
                href="/contacto"
                variant="outlined"
                size="large"
                sx={{
                  borderColor: '#FFFFFF',
                  borderWidth: 2,
                  color: '#FFFFFF',
                  fontWeight: 700,
                  px: 5,
                  py: 1.65,
                  borderRadius: '12px',
                  textTransform: 'none',
                  '&:hover': {
                    borderColor: '#FFFFFF',
                    borderWidth: 2,
                    backgroundColor: 'rgba(255,255,255,0.15)',
                  },
                  transition: 'all 0.3s ease',
                }}
              >
                Contactanos
              </Button>
            </Stack>
          </FadeInOnScroll>
        </Container>
      </Box>
    </>
  );
}
