import { Box, Container, Typography, Button, Grid, Stack, Card, CardContent } from '@mui/material';
import Link from 'next/link';
import Image from 'next/image';
import ScienceIcon from '@mui/icons-material/Science';
import ShieldIcon from '@mui/icons-material/Shield';
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import VerifiedIcon from '@mui/icons-material/Verified';
import { JsonLd } from '@/components/seo/JsonLd';
import {
  SITE_NAME,
  SITE_URL,
  SITE_DESCRIPTION,
  BUSINESS_LINES,
  CERTIFICATIONS,
  IMPACT_NUMBERS,
} from '@/lib/constants';

const lineIcons: Record<string, React.ReactNode> = {
  laboratorio: <ScienceIcon sx={{ fontSize: 52, color: '#0A87C6' }} />,
  'seguridad-industrial': <ShieldIcon sx={{ fontSize: 52, color: '#0A87C6' }} />,
  'tratamiento-de-agua': <WaterDropIcon sx={{ fontSize: 52, color: '#0A87C6' }} />,
};

const CLIENT_LOGOS = [
  { name: 'CocaCola', file: 'CocaCola.webp' },
  { name: 'MercadoLibre', file: 'MercadoLibre.webp' },
  { name: 'Herdez', file: 'Herdez.webp' },
  { name: 'Grupo Mexico', file: 'GrupoMexico.webp' },
  { name: 'Kimberly Clark', file: 'Kimberly.webp' },
  { name: 'BioPappel', file: 'BioPappel.webp' },
  { name: 'Grupo Modelo', file: 'Modelo.webp' },
  { name: 'Philip Morris', file: 'PhilipMorris.webp' },
  { name: 'SGS', file: 'SGS.webp' },
  { name: 'McCormick', file: 'MCcormick.webp' },
  { name: 'ICA', file: 'ICA.webp' },
  { name: 'Geodis', file: 'Geodis.webp' },
  { name: 'ChemTreat', file: 'ChemTrear.webp' },
  { name: 'Envases', file: 'Envases.webp' },
];

const CERT_IMAGES: Record<string, { file: string; alt: string }> = {
  'ISO 9001:2015': { file: 'iso9001.webp', alt: 'Certificacion ISO 9001:2015' },
  'EMA': { file: 'ema.webp', alt: 'Acreditacion EMA' },
  'CONAGUA': { file: 'conagua.webp', alt: 'Registro CONAGUA' },
};

export default function HomePage() {
  // Duplicate logos for seamless marquee
  const marqueeLogos = [...CLIENT_LOGOS, ...CLIENT_LOGOS];

  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: SITE_NAME,
          url: SITE_URL,
          description: SITE_DESCRIPTION,
          foundingDate: '2000',
          numberOfEmployees: '31',
          address: {
            '@type': 'PostalAddress',
            addressLocality: 'Tula de Allende',
            addressRegion: 'Hidalgo',
            addressCountry: 'MX',
          },
          contactPoint: {
            '@type': 'ContactPoint',
            telephone: '+52-776-227-7069',
            contactType: 'sales',
            availableLanguage: 'Spanish',
          },
          hasCredential: CERTIFICATIONS.map((c) => ({
            '@type': 'EducationalOccupationalCredential',
            name: c.name,
          })),
        }}
      />

      {/* ─── Hero Section ─── */}
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          overflow: 'hidden',
        }}
      >
        {/* Background image */}
        <Image
          src="/img/hero/hero-home.png"
          alt="Awalab de Mexico - Soluciones Industriales"
          fill
          priority
          style={{ objectFit: 'cover' }}
          quality={90}
        />
        {/* Dark overlay gradient */}
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(135deg, rgba(30,74,113,0.88) 0%, rgba(10,135,198,0.6) 60%, rgba(21,53,84,0.85) 100%)',
            zIndex: 1,
          }}
        />
        {/* Hero content */}
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2, py: { xs: 12, md: 0 } }}>
          <Box sx={{ maxWidth: 720 }}>
            <Typography
              variant="h1"
              sx={{
                color: '#FFFFFF',
                fontSize: { xs: '2.25rem', sm: '3rem', md: '3.75rem' },
                fontWeight: 800,
                lineHeight: 1.1,
                mb: 3,
                letterSpacing: '-0.02em',
              }}
            >
              Tu Aliado Industrial de Confianza
            </Typography>
            <Typography
              variant="h5"
              sx={{
                color: 'rgba(255,255,255,0.88)',
                fontWeight: 400,
                mb: 5,
                lineHeight: 1.7,
                fontSize: { xs: '1.05rem', md: '1.3rem' },
                maxWidth: 600,
              }}
            >
              Mas de 25 anos distribuyendo las mejores marcas en laboratorio, seguridad industrial
              y tratamiento de agua. Entregas puntuales, atencion personalizada y +100,000 productos
              disponibles para tu operacion.
            </Typography>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
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
                  fontSize: '1rem',
                  borderRadius: 2,
                  textTransform: 'none',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
                  animation: 'ctaPulse 2.5s ease-in-out infinite',
                  '@keyframes ctaPulse': {
                    '0%, 100%': { boxShadow: '0 4px 20px rgba(255,255,255,0.15)' },
                    '50%': { boxShadow: '0 4px 36px rgba(255,255,255,0.4)' },
                  },
                  '&:hover': {
                    backgroundColor: '#F0F4F8',
                    boxShadow: '0 8px 32px rgba(0,0,0,0.25)',
                    transform: 'translateY(-1px)',
                  },
                  transition: 'all 0.3s ease',
                }}
              >
                Solicitar Cotizacion
              </Button>
              <Button
                component={Link}
                href="/nosotros"
                variant="outlined"
                size="large"
                sx={{
                  borderColor: 'rgba(255,255,255,0.6)',
                  borderWidth: 2,
                  color: '#FFFFFF',
                  fontWeight: 600,
                  px: 5,
                  py: 1.65,
                  fontSize: '1rem',
                  borderRadius: 2,
                  textTransform: 'none',
                  '&:hover': {
                    borderColor: '#FFFFFF',
                    borderWidth: 2,
                    backgroundColor: 'rgba(255,255,255,0.1)',
                    transform: 'translateY(-1px)',
                  },
                  transition: 'all 0.3s ease',
                }}
              >
                Conoce Awalab
              </Button>
            </Stack>
          </Box>
        </Container>
      </Box>

      {/* ─── Trust Bar / Client Logos Marquee ─── */}
      <Box
        sx={{
          backgroundColor: '#F8FAFB',
          py: { xs: 3, md: 4 },
          overflow: 'hidden',
          borderBottom: '1px solid rgba(0,0,0,0.04)',
        }}
      >
        <Container maxWidth="lg">
          <Typography
            variant="body2"
            sx={{
              textAlign: 'center',
              color: 'text.secondary',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              fontSize: '0.75rem',
              mb: 2.5,
            }}
          >
            Confian en nosotros
          </Typography>
        </Container>
        <Box
          sx={{
            display: 'flex',
            overflow: 'hidden',
            width: '100%',
            maskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: { xs: 4, md: 6 },
              animation: 'marqueeScroll 30s linear infinite',
              '@keyframes marqueeScroll': {
                '0%': { transform: 'translateX(0)' },
                '100%': { transform: 'translateX(-50%)' },
              },
              '&:hover': {
                animationPlayState: 'paused',
              },
            }}
          >
            {marqueeLogos.map((client, index) => (
              <Box
                key={`${client.name}-${index}`}
                sx={{
                  flexShrink: 0,
                  opacity: 0.55,
                  transition: 'opacity 0.3s ease',
                  '&:hover': { opacity: 1 },
                  display: 'flex',
                  alignItems: 'center',
                  px: 1,
                }}
              >
                <Image
                  src={`/img/clientes/${client.file}`}
                  alt={client.name}
                  width={120}
                  height={48}
                  style={{ objectFit: 'contain', width: 120, height: 48 }}
                />
              </Box>
            ))}
          </Box>
        </Box>
      </Box>

      {/* ─── Business Lines ─── */}
      <Box sx={{ py: { xs: 10, md: 14 }, backgroundColor: '#FFFFFF' }}>
        <Container maxWidth="lg">
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
            Nuestras Soluciones
          </Typography>
          <Typography
            variant="h2"
            sx={{
              textAlign: 'center',
              fontWeight: 800,
              mb: 2,
              fontSize: { xs: '1.75rem', md: '2.5rem' },
              color: '#1A1A2E',
            }}
          >
            Lineas de Negocio
          </Typography>
          <Typography
            variant="body1"
            sx={{
              textAlign: 'center',
              color: 'text.secondary',
              mb: 8,
              maxWidth: 560,
              mx: 'auto',
              lineHeight: 1.7,
            }}
          >
            Somos tu solucion integral: distribuimos equipo, insumos y sistemas de las marcas lideres a nivel mundial
          </Typography>
          <Grid container spacing={4}>
            {BUSINESS_LINES.map((line) => (
              <Grid key={line.id} xs={12} md={4}>
                <Card
                  sx={{
                    height: '100%',
                    textAlign: 'center',
                    p: 3,
                    cursor: 'pointer',
                    textDecoration: 'none',
                    background: 'rgba(255, 255, 255, 0.7)',
                    backdropFilter: 'blur(10px)',
                    WebkitBackdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255,255,255,0.8)',
                    boxShadow: '0 4px 24px rgba(0,0,0,0.06)',
                    borderRadius: 4,
                    transition: 'all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1)',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: '0 20px 60px rgba(30,74,113,0.15)',
                      border: '1px solid rgba(10,135,198,0.2)',
                    },
                  }}
                  component={Link}
                  href={line.slug}
                >
                  <CardContent sx={{ py: 4 }}>
                    <Box
                      sx={{
                        width: 80,
                        height: 80,
                        borderRadius: '50%',
                        background: 'linear-gradient(135deg, rgba(10,135,198,0.08) 0%, rgba(30,74,113,0.08) 100%)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mx: 'auto',
                        mb: 3,
                      }}
                    >
                      {lineIcons[line.id]}
                    </Box>
                    <Typography
                      variant="h5"
                      sx={{ fontWeight: 700, mb: 1.5, color: '#1A1A2E' }}
                    >
                      {line.name}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: 'text.secondary', mb: 3, lineHeight: 1.7 }}
                    >
                      {line.description}
                    </Typography>
                    <Button
                      endIcon={<ArrowForwardIcon />}
                      sx={{
                        color: '#0A87C6',
                        fontWeight: 600,
                        textTransform: 'none',
                        '&:hover': { backgroundColor: 'rgba(10,135,198,0.06)' },
                      }}
                    >
                      Ver productos
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* ─── Impact Numbers ─── */}
      <Box
        sx={{
          background: 'linear-gradient(160deg, #1E4A71 0%, #153554 100%)',
          py: { xs: 8, md: 10 },
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Subtle decorative circles */}
        <Box
          sx={{
            position: 'absolute',
            width: 400,
            height: 400,
            borderRadius: '50%',
            background: 'rgba(10,135,198,0.08)',
            top: -100,
            right: -100,
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            width: 300,
            height: 300,
            borderRadius: '50%',
            background: 'rgba(10,135,198,0.06)',
            bottom: -80,
            left: -60,
          }}
        />
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <Grid container spacing={4}>
            {IMPACT_NUMBERS.map((item) => (
              <Grid key={item.label} xs={6} md={3}>
                <Box sx={{ textAlign: 'center', color: '#FFFFFF' }}>
                  <Typography
                    variant="h2"
                    sx={{
                      fontWeight: 800,
                      fontSize: { xs: '2.75rem', md: '3.75rem' },
                      lineHeight: 1,
                      mb: 1,
                      background: 'linear-gradient(180deg, #FFFFFF 0%, rgba(255,255,255,0.8) 100%)',
                      backgroundClip: 'text',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                    }}
                  >
                    {item.value}
                    {item.suffix}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      opacity: 0.75,
                      fontWeight: 500,
                      fontSize: { xs: '0.85rem', md: '1rem' },
                      letterSpacing: '0.02em',
                    }}
                  >
                    {item.label}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* ─── Why Awalab / Certifications ─── */}
      <Box sx={{ py: { xs: 10, md: 14 }, backgroundColor: '#FFFFFF' }}>
        <Container maxWidth="lg">
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
            Respaldo y Confianza
          </Typography>
          <Typography
            variant="h2"
            sx={{
              textAlign: 'center',
              fontWeight: 800,
              mb: 2,
              fontSize: { xs: '1.75rem', md: '2.5rem' },
              color: '#1A1A2E',
            }}
          >
            ¿Por que elegir Awalab?
          </Typography>
          <Typography
            variant="body1"
            sx={{
              textAlign: 'center',
              color: 'text.secondary',
              mb: 8,
              maxWidth: 620,
              mx: 'auto',
              lineHeight: 1.7,
            }}
          >
            Pasion, Confianza y Capacidad. Somos la comercializadora que respalda tu operacion con
            certificaciones de clase mundial y un compromiso real con tu industria
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            {CERTIFICATIONS.map((cert) => {
              const certImage = CERT_IMAGES[cert.name];
              return (
                <Grid key={cert.name} xs={12} sm={4}>
                  <Card
                    sx={{
                      height: '100%',
                      textAlign: 'center',
                      p: 4,
                      borderRadius: 4,
                      border: '1px solid rgba(0,0,0,0.06)',
                      boxShadow: '0 2px 16px rgba(0,0,0,0.04)',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        boxShadow: '0 8px 32px rgba(30,74,113,0.1)',
                        transform: 'translateY(-4px)',
                      },
                    }}
                  >
                    <CardContent>
                      {certImage && (
                        <Box
                          sx={{
                            width: 100,
                            height: 100,
                            mx: 'auto',
                            mb: 3,
                            position: 'relative',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}
                        >
                          <Image
                            src={`/img/certifications/${certImage.file}`}
                            alt={certImage.alt}
                            width={100}
                            height={100}
                            style={{ objectFit: 'contain' }}
                          />
                        </Box>
                      )}
                      <Typography
                        variant="h5"
                        sx={{ fontWeight: 700, mb: 1, color: '#1A1A2E' }}
                      >
                        {cert.name}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{ color: 'text.secondary', lineHeight: 1.7 }}
                      >
                        {cert.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              );
            })}
          </Grid>
        </Container>
      </Box>

      {/* ─── Final CTA Section ─── */}
      <Box
        sx={{
          background: 'linear-gradient(135deg, #0A87C6 0%, #1E4A71 50%, #153554 100%)',
          py: { xs: 10, md: 12 },
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            width: 500,
            height: 500,
            borderRadius: '50%',
            background: 'rgba(255,255,255,0.03)',
            top: -200,
            left: -100,
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            width: 350,
            height: 350,
            borderRadius: '50%',
            background: 'rgba(255,255,255,0.03)',
            bottom: -150,
            right: -50,
          }}
        />
        <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1 }}>
          <VerifiedIcon sx={{ fontSize: 48, color: 'rgba(255,255,255,0.3)', mb: 3 }} />
          <Typography
            variant="h2"
            sx={{
              color: '#FFFFFF',
              fontWeight: 800,
              mb: 2,
              fontSize: { xs: '1.75rem', md: '2.5rem' },
            }}
          >
            ¿Necesitas una cotizacion?
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: 'rgba(255,255,255,0.8)',
              fontWeight: 400,
              mb: 5,
              lineHeight: 1.7,
              fontSize: { xs: '1rem', md: '1.15rem' },
            }}
          >
            Respondemos en menos de 24 horas. Sin compromiso.
          </Typography>
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={2}
            justifyContent="center"
          >
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
                fontSize: '1rem',
                borderRadius: 2,
                textTransform: 'none',
                boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
                '&:hover': {
                  backgroundColor: '#F0F4F8',
                  boxShadow: '0 8px 32px rgba(0,0,0,0.25)',
                  transform: 'translateY(-2px)',
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
                borderColor: 'rgba(255,255,255,0.5)',
                borderWidth: 2,
                color: '#FFFFFF',
                fontWeight: 600,
                px: 5,
                py: 1.65,
                fontSize: '1rem',
                borderRadius: 2,
                textTransform: 'none',
                '&:hover': {
                  borderColor: '#FFFFFF',
                  borderWidth: 2,
                  backgroundColor: 'rgba(255,255,255,0.1)',
                  transform: 'translateY(-2px)',
                },
                transition: 'all 0.3s ease',
              }}
            >
              Contactanos
            </Button>
          </Stack>
        </Container>
      </Box>
    </>
  );
}
