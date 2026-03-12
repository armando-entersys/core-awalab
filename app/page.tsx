import { Box, Container, Typography, Button, Grid, Stack, CardContent } from '@mui/material';
import Link from 'next/link';
import Image from 'next/image';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined';
import EngineeringOutlinedIcon from '@mui/icons-material/EngineeringOutlined';
import HandshakeOutlinedIcon from '@mui/icons-material/HandshakeOutlined';
import ScienceOutlinedIcon from '@mui/icons-material/ScienceOutlined';
import HealthAndSafetyOutlinedIcon from '@mui/icons-material/HealthAndSafetyOutlined';
import WaterDropOutlinedIcon from '@mui/icons-material/WaterDropOutlined';
import { FadeInOnScroll } from '@/components/ui/FadeInOnScroll';
import { CountUp } from '@/components/ui/CountUp';
import { ParticleNetwork } from '@/components/ui/ParticleNetwork';
import { TypeWriter } from '@/components/ui/TypeWriter';
import { GlowCard } from '@/components/ui/GlowCard';
import { JsonLd } from '@/components/seo/JsonLd';
import {
  colors,
  btnPrimary,
  btnPrimaryOnDark,
  btnSecondaryOnDark,
  card,
  section,
  sectionLabel,
  sectionTitle,
  sectionSubtitle,
} from '@/lib/design-tokens';
import {
  SITE_NAME,
  SITE_URL,
  SITE_DESCRIPTION,
  BUSINESS_LINES,
  CERTIFICATIONS,
  IMPACT_NUMBERS,
} from '@/lib/constants';

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
    icon: <LocalShippingOutlinedIcon sx={{ fontSize: 28 }} />,
    title: 'Entregas Puntuales',
    description: 'Red de distribucion propia con cobertura nacional. Tu pedido llega cuando lo necesitas.',
  },
  {
    icon: <CategoryOutlinedIcon sx={{ fontSize: 28 }} />,
    title: '+100,000 Productos',
    description: 'El catalogo mas completo en laboratorio, seguridad industrial y tratamiento de agua.',
  },
  {
    icon: <EngineeringOutlinedIcon sx={{ fontSize: 28 }} />,
    title: 'Asesoria Especializada',
    description: 'Equipo tecnico con mas de 25 anos de experiencia para ayudarte a elegir la mejor solucion.',
  },
  {
    icon: <HandshakeOutlinedIcon sx={{ fontSize: 28 }} />,
    title: 'Alianza de Confianza',
    description: 'Relaciones a largo plazo con mas de 500 empresas que confian en nosotros como su proveedor.',
  },
];

const lineIcons: Record<string, React.ReactNode> = {
  laboratorio: <ScienceOutlinedIcon sx={{ fontSize: 28 }} />,
  'seguridad-industrial': <HealthAndSafetyOutlinedIcon sx={{ fontSize: 28 }} />,
  'tratamiento-de-agua': <WaterDropOutlinedIcon sx={{ fontSize: 28 }} />,
};

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
              'linear-gradient(160deg, rgba(13,27,42,0.94) 0%, rgba(30,74,113,0.85) 45%, rgba(21,53,84,0.9) 100%)',
            zIndex: 1,
          }}
        />
        <ParticleNetwork color="148, 163, 184" particleCount={35} connectionDistance={100} speed={0.2} />
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2, py: { xs: 12, md: 0 } }}>
          <Box sx={{ maxWidth: 680 }}>
            <Typography
              variant="caption"
              sx={{
                display: 'inline-block',
                color: colors.gray300,
                fontWeight: 500,
                letterSpacing: '0.12em',
                fontSize: '0.78rem',
                mb: 3,
                textTransform: 'uppercase',
                borderLeft: `3px solid ${colors.accent}`,
                pl: 1.5,
              }}
            >
              ISO 9001 · EMA · CONAGUA
            </Typography>
            <Typography
              variant="h1"
              sx={{
                color: colors.white,
                fontSize: { xs: '2.5rem', sm: '3.25rem', md: '3.75rem' },
                fontWeight: 700,
                lineHeight: 1.1,
                mb: 3,
                letterSpacing: '-0.03em',
              }}
            >
              Tu Aliado Industrial
              <br />
              de Confianza
            </Typography>
            <Typography
              sx={{
                color: 'rgba(255,255,255,0.85)',
                fontWeight: 400,
                mb: 2,
                lineHeight: 1.8,
                fontSize: { xs: '1rem', md: '1.1rem' },
                maxWidth: 540,
              }}
            >
              Mas de 25 anos distribuyendo las mejores marcas en laboratorio, seguridad industrial y
              tratamiento de agua. Entregas puntuales, asesoria especializada y +100,000 productos
              disponibles para tu operacion.
            </Typography>
            <Box sx={{ mb: 5, minHeight: 32 }}>
              <Typography
                component="span"
                sx={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.95rem' }}
              >
                Especialistas en{' '}
              </Typography>
              <TypeWriter
                words={['Equipo de Laboratorio', 'Seguridad Industrial', 'Tratamiento de Agua', 'Metrologia y Calibracion']}
                speed={70}
                deleteSpeed={35}
                pauseTime={2500}
                sx={{ color: 'rgba(255,255,255,0.85)', fontSize: '0.95rem', fontWeight: 500 }}
              />
            </Box>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
              <Button component={Link} href="/cotizacion" variant="contained" size="large" sx={btnPrimary}>
                Solicitar Cotizacion
              </Button>
              <Button component={Link} href="/nosotros" variant="outlined" size="large" sx={btnSecondaryOnDark}>
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
            display: { xs: 'none', md: 'block' },
          }}
        >
          <Box
            sx={{
              width: 1,
              height: 48,
              backgroundColor: 'rgba(255,255,255,0.2)',
              mx: 'auto',
              animation: 'scrollLine 2s ease-in-out infinite',
              '@keyframes scrollLine': {
                '0%, 100%': { opacity: 0.2, height: 48 },
                '50%': { opacity: 0.5, height: 64 },
              },
            }}
          />
        </Box>
      </Box>

      {/* ─── Trust Bar / Client Logos ─── */}
      <Box
        sx={{
          backgroundColor: colors.offWhite,
          py: { xs: 3, md: 4 },
          overflow: 'hidden',
          borderBottom: `1px solid ${colors.border}`,
        }}
      >
        <Container maxWidth="lg">
          <Typography
            variant="body2"
            sx={{
              textAlign: 'center',
              color: colors.textMuted,
              fontWeight: 500,
              textTransform: 'uppercase',
              letterSpacing: '0.12em',
              fontSize: '0.72rem',
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
                  opacity: 0.4,
                  transition: 'opacity 0.3s ease',
                  '&:hover': { opacity: 0.8 },
                  display: 'flex',
                  alignItems: 'center',
                  px: 1,
                }}
              >
                <Image
                  src={`/img/clientes/${client.file}`}
                  alt={client.name}
                  width={100}
                  height={36}
                  style={{ objectFit: 'contain', maxWidth: 100, maxHeight: 36, width: 'auto', height: 'auto' }}
                />
              </Box>
            ))}
          </Box>
        </Box>
      </Box>

      {/* ─── Value Propositions — text-first, no icon boxes ─── */}
      <Box sx={{ ...section, background: `linear-gradient(180deg, ${colors.white} 0%, ${colors.gray50} 100%)` }}>
        <Container maxWidth="lg">
          <FadeInOnScroll>
            <Typography variant="overline" sx={sectionLabel}>
              Por que elegirnos
            </Typography>
            <Typography variant="h2" sx={sectionTitle}>
              Lo que nos diferencia
            </Typography>
            <Typography variant="body1" sx={sectionSubtitle}>
              Pasion, Confianza y Capacidad — tres valores que nos definen como la comercializadora
              industrial preferida en Mexico
            </Typography>
          </FadeInOnScroll>
          <Grid container spacing={3}>
            {VALUE_PROPS.map((prop, index) => (
              <Grid key={prop.title} xs={12} sm={6} md={3}>
                <FadeInOnScroll delay={index * 0.1} direction="up">
                  <GlowCard glowColor="rgba(30,74,113,0.06)" sx={{ ...card, height: '100%', p: 3.5 }}>
                    <CardContent sx={{ p: 0 }}>
                      <Box
                        sx={{
                          width: 52,
                          height: 52,
                          borderRadius: '14px',
                          border: `1.5px solid ${colors.accent}`,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: colors.accent,
                          mb: 2,
                        }}
                      >
                        {prop.icon}
                      </Box>
                      <Typography
                        variant="h6"
                        sx={{ fontWeight: 700, mb: 1, color: colors.text, fontSize: '1rem' }}
                      >
                        {prop.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{ color: colors.textSecondary, lineHeight: 1.7, fontSize: '0.875rem' }}
                      >
                        {prop.description}
                      </Typography>
                    </CardContent>
                  </GlowCard>
                </FadeInOnScroll>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* ─── Business Lines — minimal, text-driven ─── */}
      <Box sx={{ ...section, backgroundColor: colors.white }}>
        <Container maxWidth="lg">
          <FadeInOnScroll>
            <Typography variant="overline" sx={sectionLabel}>
              Nuestras Soluciones
            </Typography>
            <Typography variant="h2" sx={sectionTitle}>
              Lineas de Negocio
            </Typography>
            <Typography variant="body1" sx={sectionSubtitle}>
              Distribuimos equipo, insumos y sistemas de las marcas lideres a nivel mundial
            </Typography>
          </FadeInOnScroll>
          <Grid container spacing={4}>
            {BUSINESS_LINES.map((line, index) => (
              <Grid key={line.id} xs={12} md={4}>
                <FadeInOnScroll delay={index * 0.12} direction="up">
                  <GlowCard
                    glowColor="rgba(30,74,113,0.06)"
                    sx={{
                      ...card,
                      height: '100%',
                      p: 0,
                      cursor: 'pointer',
                      textDecoration: 'none',
                      '&:hover .line-arrow': { transform: 'translateX(4px)' },
                    }}
                    component={Link}
                    href={line.slug}
                  >
                    <CardContent sx={{ p: 4 }}>
                      <Box
                        sx={{
                          width: 52,
                          height: 52,
                          borderRadius: '14px',
                          border: `1.5px solid ${colors.accent}`,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: colors.accent,
                          mb: 2,
                          transition: 'all 0.3s ease',
                        }}
                      >
                        {lineIcons[line.id]}
                      </Box>
                      <Typography variant="h5" sx={{ fontWeight: 700, mb: 1.5, color: colors.text, fontSize: '1.2rem' }}>
                        {line.name}
                      </Typography>
                      <Typography variant="body2" sx={{ color: colors.textSecondary, mb: 3, lineHeight: 1.7 }}>
                        {line.description}
                      </Typography>
                      <Stack direction="row" alignItems="center" spacing={0.5}>
                        <Typography sx={{ color: colors.accent, fontWeight: 600, fontSize: '0.875rem' }}>
                          Ver productos
                        </Typography>
                        <ArrowForwardIcon
                          className="line-arrow"
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

      {/* ─── Impact Numbers ─── */}
      <Box
        sx={{
          background: `linear-gradient(160deg, ${colors.navyDark} 0%, ${colors.navy} 50%, ${colors.navyDeep} 100%)`,
          ...section,
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <FadeInOnScroll>
            <Grid container spacing={4}>
              {IMPACT_NUMBERS.map((item, index) => (
                <Grid key={item.label} xs={6} md={3}>
                  <FadeInOnScroll delay={index * 0.08} direction="up">
                    <Box sx={{ textAlign: 'center', color: colors.white }}>
                      <Typography
                        variant="h2"
                        sx={{
                          fontWeight: 700,
                          fontSize: { xs: '2.5rem', md: '3.25rem' },
                          lineHeight: 1,
                          mb: 1,
                          color: colors.white,
                        }}
                      >
                        <CountUp end={item.value} suffix={item.suffix} />
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          opacity: 0.6,
                          fontWeight: 500,
                          fontSize: { xs: '0.8rem', md: '0.9rem' },
                          letterSpacing: '0.03em',
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
      <Box sx={{ ...section, background: `linear-gradient(180deg, ${colors.gray50} 0%, ${colors.white} 100%)` }}>
        <Container maxWidth="lg">
          <FadeInOnScroll>
            <Typography variant="overline" sx={sectionLabel}>
              Respaldo
            </Typography>
            <Typography variant="h2" sx={sectionTitle}>
              Certificaciones
            </Typography>
            <Typography variant="body1" sx={sectionSubtitle}>
              Nuestras acreditaciones avalan la calidad de cada producto y servicio que ofrecemos
            </Typography>
          </FadeInOnScroll>
          <Grid container spacing={4} justifyContent="center">
            {CERTIFICATIONS.map((cert, index) => {
              const certImage = CERT_IMAGES[cert.name];
              return (
                <Grid key={cert.name} xs={12} sm={4}>
                  <FadeInOnScroll delay={index * 0.1} direction="up">
                    <GlowCard glowColor="rgba(30,74,113,0.06)" sx={{ ...card, height: '100%', textAlign: 'center', p: 4 }}>
                      <CardContent sx={{ p: 0 }}>
                        {certImage && (
                          <Box sx={{ width: 72, height: 72, mx: 'auto', mb: 2.5, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <Image
                              src={`/img/certifications/${certImage.file}`}
                              alt={certImage.alt}
                              width={72}
                              height={72}
                              style={{ objectFit: 'contain' }}
                            />
                          </Box>
                        )}
                        <Typography variant="h6" sx={{ fontWeight: 700, mb: 0.5, color: colors.text, fontSize: '1rem' }}>
                          {cert.name}
                        </Typography>
                        <Typography variant="body2" sx={{ color: colors.textSecondary, lineHeight: 1.7 }}>
                          {cert.description}
                        </Typography>
                      </CardContent>
                    </GlowCard>
                  </FadeInOnScroll>
                </Grid>
              );
            })}
          </Grid>
        </Container>
      </Box>

      {/* ─── Final CTA ─── */}
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
              ¿Listo para optimizar tu operacion?
            </Typography>
            <Typography
              sx={{
                color: 'rgba(255,255,255,0.6)',
                mb: 5,
                fontSize: '1rem',
                lineHeight: 1.7,
              }}
            >
              Cotiza sin compromiso. Respuesta en menos de 24 horas.
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
