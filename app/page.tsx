import { Box, Container, Typography, Button, Grid, Stack, Card, CardContent } from '@mui/material';
import Link from 'next/link';
import Image from 'next/image';
import ScienceIcon from '@mui/icons-material/Science';
import ShieldIcon from '@mui/icons-material/Shield';
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import VerifiedIcon from '@mui/icons-material/Verified';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import InventoryIcon from '@mui/icons-material/Inventory';
import HandshakeIcon from '@mui/icons-material/Handshake';
import { FadeInOnScroll } from '@/components/ui/FadeInOnScroll';
import { CountUp } from '@/components/ui/CountUp';
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
  EMA: { file: 'ema.webp', alt: 'Acreditacion EMA' },
  CONAGUA: { file: 'conagua.webp', alt: 'Registro CONAGUA' },
};

const VALUE_PROPS = [
  {
    icon: <LocalShippingIcon sx={{ fontSize: 36, color: '#FFFFFF' }} />,
    title: 'Entregas Puntuales',
    description: 'Red de distribucion propia con cobertura nacional. Tu pedido llega cuando lo necesitas.',
    gradient: 'linear-gradient(135deg, #0A87C6 0%, #1E4A71 100%)',
  },
  {
    icon: <InventoryIcon sx={{ fontSize: 36, color: '#FFFFFF' }} />,
    title: '+100,000 Productos',
    description: 'El catalogo mas completo en laboratorio, seguridad industrial y tratamiento de agua.',
    gradient: 'linear-gradient(135deg, #1E4A71 0%, #153554 100%)',
  },
  {
    icon: <SupportAgentIcon sx={{ fontSize: 36, color: '#FFFFFF' }} />,
    title: 'Asesoria Especializada',
    description: 'Equipo tecnico con mas de 25 anos de experiencia para ayudarte a elegir la mejor solucion.',
    gradient: 'linear-gradient(135deg, #0A87C6 0%, #0D6EAA 100%)',
  },
  {
    icon: <HandshakeIcon sx={{ fontSize: 36, color: '#FFFFFF' }} />,
    title: 'Alianza de Confianza',
    description: 'Relaciones a largo plazo con mas de 500 empresas que confian en nosotros como su proveedor.',
    gradient: 'linear-gradient(135deg, #153554 0%, #1E4A71 100%)',
  },
];

export default function HomePage() {
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
        <Image
          src="/img/hero/hero-home.png"
          alt="Awalab de Mexico - Tu Aliado Industrial"
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
              'linear-gradient(135deg, rgba(13,27,42,0.92) 0%, rgba(30,74,113,0.78) 40%, rgba(10,135,198,0.55) 70%, rgba(21,53,84,0.88) 100%)',
            zIndex: 1,
          }}
        />
        {/* Decorative mesh gradient */}
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            background:
              'radial-gradient(ellipse at 20% 80%, rgba(10,135,198,0.15) 0%, transparent 50%), radial-gradient(ellipse at 80% 20%, rgba(255,255,255,0.05) 0%, transparent 40%)',
            zIndex: 1,
          }}
        />
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2, py: { xs: 12, md: 0 } }}>
          <Box sx={{ maxWidth: 720 }}>
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
                ISO 9001 | EMA | CONAGUA
              </Typography>
            </Box>
            <Typography
              variant="h1"
              sx={{
                color: '#FFFFFF',
                fontSize: { xs: '2.5rem', sm: '3.25rem', md: '4rem' },
                fontWeight: 800,
                lineHeight: 1.08,
                mb: 3,
                letterSpacing: '-0.03em',
              }}
            >
              Tu Aliado Industrial
              <br />
              <Box
                component="span"
                sx={{
                  background: 'linear-gradient(90deg, #4FC3F7 0%, #81D4FA 50%, #B3E5FC 100%)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                de Confianza
              </Box>
            </Typography>
            <Typography
              variant="h5"
              sx={{
                color: 'rgba(255,255,255,0.85)',
                fontWeight: 400,
                mb: 5,
                lineHeight: 1.75,
                fontSize: { xs: '1.05rem', md: '1.25rem' },
                maxWidth: 580,
              }}
            >
              Mas de 25 anos distribuyendo las mejores marcas en laboratorio, seguridad industrial y
              tratamiento de agua. Entregas puntuales, asesoria especializada y +100,000 productos
              disponibles para tu operacion.
            </Typography>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
              <Button
                component={Link}
                href="/cotizacion"
                variant="contained"
                size="large"
                sx={{
                  background: 'linear-gradient(135deg, #FFFFFF 0%, #E3F2FD 100%)',
                  color: '#1E4A71',
                  fontWeight: 700,
                  px: 5,
                  py: 1.75,
                  fontSize: '1rem',
                  borderRadius: '12px',
                  textTransform: 'none',
                  boxShadow: '0 4px 24px rgba(10,135,198,0.25)',
                  animation: 'ctaPulse 3s ease-in-out infinite',
                  '@keyframes ctaPulse': {
                    '0%, 100%': { boxShadow: '0 4px 24px rgba(10,135,198,0.25)' },
                    '50%': { boxShadow: '0 8px 40px rgba(10,135,198,0.45)' },
                  },
                  '&:hover': {
                    background: 'linear-gradient(135deg, #FFFFFF 0%, #BBDEFB 100%)',
                    transform: 'translateY(-2px)',
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
                  borderColor: 'rgba(255,255,255,0.4)',
                  borderWidth: 2,
                  color: '#FFFFFF',
                  fontWeight: 600,
                  px: 5,
                  py: 1.65,
                  fontSize: '1rem',
                  borderRadius: '12px',
                  textTransform: 'none',
                  backdropFilter: 'blur(4px)',
                  '&:hover': {
                    borderColor: 'rgba(255,255,255,0.8)',
                    borderWidth: 2,
                    backgroundColor: 'rgba(255,255,255,0.08)',
                    transform: 'translateY(-2px)',
                  },
                  transition: 'all 0.3s ease',
                }}
              >
                Conoce Awalab
              </Button>
            </Stack>
          </Box>
        </Container>
        {/* Scroll indicator */}
        <Box
          sx={{
            position: 'absolute',
            bottom: 32,
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 2,
            display: { xs: 'none', md: 'flex' },
            flexDirection: 'column',
            alignItems: 'center',
            gap: 1,
          }}
        >
          <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.7rem', letterSpacing: '0.1em' }}>
            DESCUBRE MAS
          </Typography>
          <Box
            sx={{
              width: 24,
              height: 40,
              borderRadius: '12px',
              border: '2px solid rgba(255,255,255,0.3)',
              display: 'flex',
              justifyContent: 'center',
              pt: '8px',
            }}
          >
            <Box
              sx={{
                width: 3,
                height: 8,
                borderRadius: '2px',
                backgroundColor: 'rgba(255,255,255,0.6)',
                animation: 'scrollBounce 2s ease-in-out infinite',
                '@keyframes scrollBounce': {
                  '0%, 100%': { transform: 'translateY(0)', opacity: 1 },
                  '50%': { transform: 'translateY(12px)', opacity: 0.3 },
                },
              }}
            />
          </Box>
        </Box>
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
              '&:hover': { animationPlayState: 'paused' },
            }}
          >
            {marqueeLogos.map((client, index) => (
              <Box
                key={`${client.name}-${index}`}
                sx={{
                  flexShrink: 0,
                  opacity: 0.5,
                  transition: 'all 0.3s ease',
                  '&:hover': { opacity: 1, transform: 'scale(1.05)' },
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

      {/* ─── Value Propositions ─── */}
      <Box sx={{ py: { xs: 10, md: 14 }, background: 'linear-gradient(180deg, #FFFFFF 0%, #F0F7FF 100%)' }}>
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
              Tu Solucion Integral
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
              ¿Por que somos tu mejor aliado?
            </Typography>
            <Typography
              variant="body1"
              sx={{
                textAlign: 'center',
                color: 'text.secondary',
                mb: 8,
                maxWidth: 600,
                mx: 'auto',
                lineHeight: 1.7,
              }}
            >
              Pasion, Confianza y Capacidad. Tres valores que nos definen como la comercializadora
              industrial preferida en Mexico
            </Typography>
          </FadeInOnScroll>
          <Grid container spacing={3}>
            {VALUE_PROPS.map((prop, index) => (
              <Grid key={prop.title} xs={12} sm={6} md={3}>
                <FadeInOnScroll delay={index * 0.12} direction="up">
                  <Card
                    sx={{
                      height: '100%',
                      p: 3,
                      borderRadius: '20px',
                      border: '1px solid rgba(0,0,0,0.04)',
                      boxShadow: '0 4px 24px rgba(0,0,0,0.04)',
                      transition: 'all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1)',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        boxShadow: '0 20px 60px rgba(30,74,113,0.12)',
                      },
                    }}
                  >
                    <CardContent sx={{ p: 0 }}>
                      <Box
                        sx={{
                          width: 64,
                          height: 64,
                          borderRadius: '16px',
                          background: prop.gradient,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          mb: 2.5,
                          boxShadow: '0 4px 16px rgba(10,135,198,0.2)',
                        }}
                      >
                        {prop.icon}
                      </Box>
                      <Typography
                        variant="h6"
                        sx={{ fontWeight: 700, mb: 1, color: '#1A1A2E', fontSize: '1.05rem' }}
                      >
                        {prop.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{ color: 'text.secondary', lineHeight: 1.7, fontSize: '0.875rem' }}
                      >
                        {prop.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </FadeInOnScroll>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* ─── Business Lines ─── */}
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
                maxWidth: 620,
                mx: 'auto',
                lineHeight: 1.7,
              }}
            >
              Distribuimos equipo, insumos y sistemas de las marcas lideres a nivel mundial
            </Typography>
          </FadeInOnScroll>
          <Grid container spacing={4}>
            {BUSINESS_LINES.map((line, index) => (
              <Grid key={line.id} xs={12} md={4}>
                <FadeInOnScroll delay={index * 0.15} direction="up">
                  <Card
                    sx={{
                      height: '100%',
                      textAlign: 'center',
                      p: 3,
                      cursor: 'pointer',
                      textDecoration: 'none',
                      background: 'rgba(255, 255, 255, 0.85)',
                      backdropFilter: 'blur(10px)',
                      WebkitBackdropFilter: 'blur(10px)',
                      border: '1px solid rgba(0,0,0,0.06)',
                      boxShadow: '0 4px 24px rgba(0,0,0,0.04)',
                      borderRadius: '20px',
                      transition: 'all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1)',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        boxShadow: '0 20px 60px rgba(30,74,113,0.15)',
                        border: '1px solid rgba(10,135,198,0.2)',
                        '& .line-icon-wrapper': {
                          background: 'linear-gradient(135deg, #0A87C6 0%, #1E4A71 100%)',
                          '& .MuiSvgIcon-root': { color: '#FFFFFF !important' },
                        },
                      },
                    }}
                    component={Link}
                    href={line.slug}
                  >
                    <CardContent sx={{ py: 4 }}>
                      <Box
                        className="line-icon-wrapper"
                        sx={{
                          width: 88,
                          height: 88,
                          borderRadius: '24px',
                          background: 'linear-gradient(135deg, rgba(10,135,198,0.08) 0%, rgba(30,74,113,0.08) 100%)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          mx: 'auto',
                          mb: 3,
                          transition: 'all 0.4s ease',
                        }}
                      >
                        {lineIcons[line.id]}
                      </Box>
                      <Typography variant="h5" sx={{ fontWeight: 700, mb: 1.5, color: '#1A1A2E' }}>
                        {line.name}
                      </Typography>
                      <Typography variant="body2" sx={{ color: 'text.secondary', mb: 3, lineHeight: 1.7 }}>
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
                </FadeInOnScroll>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* ─── Impact Numbers (Animated) ─── */}
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
            width: 500,
            height: 500,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(10,135,198,0.12) 0%, transparent 70%)',
            top: -150,
            right: -100,
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            width: 350,
            height: 350,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(10,135,198,0.08) 0%, transparent 70%)',
            bottom: -100,
            left: -80,
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
                          fontSize: { xs: '2.75rem', md: '3.75rem' },
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
                        sx={{
                          opacity: 0.7,
                          fontWeight: 500,
                          fontSize: { xs: '0.85rem', md: '1rem' },
                          letterSpacing: '0.02em',
                        }}
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

      {/* ─── Certifications ─── */}
      <Box sx={{ py: { xs: 10, md: 14 }, background: 'linear-gradient(180deg, #F0F7FF 0%, #FFFFFF 100%)' }}>
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
              Certificaciones de Clase Mundial
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
              Nuestras certificaciones y acreditaciones avalan la calidad de cada producto que distribuimos
              y cada servicio que ofrecemos
            </Typography>
          </FadeInOnScroll>
          <Grid container spacing={4} justifyContent="center">
            {CERTIFICATIONS.map((cert, index) => {
              const certImage = CERT_IMAGES[cert.name];
              return (
                <Grid key={cert.name} xs={12} sm={4}>
                  <FadeInOnScroll delay={index * 0.15} direction="up">
                    <Card
                      sx={{
                        height: '100%',
                        textAlign: 'center',
                        p: 4,
                        borderRadius: '20px',
                        border: '1px solid rgba(0,0,0,0.06)',
                        boxShadow: '0 2px 16px rgba(0,0,0,0.04)',
                        transition: 'all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1)',
                        '&:hover': {
                          boxShadow: '0 16px 48px rgba(30,74,113,0.12)',
                          transform: 'translateY(-6px)',
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
                        <Typography variant="h5" sx={{ fontWeight: 700, mb: 1, color: '#1A1A2E' }}>
                          {cert.name}
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.7 }}>
                          {cert.description}
                        </Typography>
                      </CardContent>
                    </Card>
                  </FadeInOnScroll>
                </Grid>
              );
            })}
          </Grid>
        </Container>
      </Box>

      {/* ─── Final CTA Section ─── */}
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
              'radial-gradient(ellipse at 30% 50%, rgba(79,195,247,0.1) 0%, transparent 50%), radial-gradient(ellipse at 70% 50%, rgba(255,255,255,0.04) 0%, transparent 40%)',
          }}
        />
        <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1 }}>
          <FadeInOnScroll>
            <Box
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 1,
                backgroundColor: 'rgba(255,255,255,0.1)',
                backdropFilter: 'blur(8px)',
                borderRadius: '100px',
                px: 2.5,
                py: 0.75,
                mb: 3,
              }}
            >
              <VerifiedIcon sx={{ fontSize: 16, color: 'rgba(255,255,255,0.6)' }} />
              <Typography
                variant="caption"
                sx={{ color: 'rgba(255,255,255,0.8)', fontWeight: 600, fontSize: '0.8rem' }}
              >
                Respuesta en menos de 24 horas
              </Typography>
            </Box>
            <Typography
              variant="h2"
              sx={{
                color: '#FFFFFF',
                fontWeight: 800,
                mb: 2,
                fontSize: { xs: '1.75rem', md: '2.75rem' },
                lineHeight: 1.15,
              }}
            >
              ¿Listo para optimizar
              <br />
              tu operacion industrial?
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: 'rgba(255,255,255,0.75)',
                fontWeight: 400,
                mb: 5,
                lineHeight: 1.7,
                fontSize: { xs: '1rem', md: '1.15rem' },
              }}
            >
              Cotiza sin compromiso. Nuestro equipo tecnico esta listo para asesorarte.
            </Typography>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="center">
              <Button
                component={Link}
                href="/cotizacion"
                variant="contained"
                size="large"
                sx={{
                  background: 'linear-gradient(135deg, #FFFFFF 0%, #E3F2FD 100%)',
                  color: '#1E4A71',
                  fontWeight: 700,
                  px: 5,
                  py: 1.75,
                  fontSize: '1rem',
                  borderRadius: '12px',
                  textTransform: 'none',
                  boxShadow: '0 4px 24px rgba(0,0,0,0.2)',
                  '&:hover': {
                    background: 'linear-gradient(135deg, #FFFFFF 0%, #BBDEFB 100%)',
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
                  borderColor: 'rgba(255,255,255,0.35)',
                  borderWidth: 2,
                  color: '#FFFFFF',
                  fontWeight: 600,
                  px: 5,
                  py: 1.65,
                  fontSize: '1rem',
                  borderRadius: '12px',
                  textTransform: 'none',
                  backdropFilter: 'blur(4px)',
                  '&:hover': {
                    borderColor: 'rgba(255,255,255,0.7)',
                    borderWidth: 2,
                    backgroundColor: 'rgba(255,255,255,0.08)',
                    transform: 'translateY(-2px)',
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
