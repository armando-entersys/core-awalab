'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Box, Container, Grid, Typography, Stack, Divider, IconButton } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { WHATSAPP_NUMBER, WHATSAPP_URL } from '@/lib/constants';

const FOOTER_BG = '#0D1B2A';
const ACCENT = '#0A87C6';
const TEXT_LIGHT = '#CBD5E1';
const TEXT_MUTED = '#64748B';
const HEADING_COLOR = '#F1F5F9';
const DIVIDER_COLOR = 'rgba(255,255,255,0.08)';

const quickLinks = [
  { label: 'Nosotros', href: '/nosotros' },
  { label: 'Marcas', href: '/marcas' },
  { label: 'Blog', href: '/blog' },
  { label: 'Proyectos', href: '/proyectos' },
  { label: 'Catalogo', href: '/catalogo' },
];

const services = [
  { label: 'PTAR', href: '/servicios/ptar' },
  { label: 'Metrologia', href: '/servicios/metrologia' },
  { label: 'Mantenimiento', href: '/servicios/mantenimiento' },
  { label: 'Consultoria', href: '/servicios/consultoria' },
];

const certifications = [
  { name: 'ISO 9001:2015', src: '/img/certifications/iso9001.webp' },
  { name: 'EMA', src: '/img/certifications/ema.webp' },
  { name: 'CONAGUA', src: '/img/certifications/conagua.webp' },
];

const socialLinks = [
  { icon: <FacebookIcon />, href: 'https://www.facebook.com/AwalabMX', label: 'Facebook' },
  { icon: <LinkedInIcon />, href: 'https://www.linkedin.com/company/awalabmx', label: 'LinkedIn' },
  { icon: <InstagramIcon />, href: 'https://www.instagram.com/awalabdemexico', label: 'Instagram' },
];

const linkHoverSx = {
  color: TEXT_LIGHT,
  textDecoration: 'none',
  transition: 'color 0.25s ease, padding-left 0.25s ease',
  display: 'block',
  fontSize: '0.875rem',
  lineHeight: 2,
  '&:hover': {
    color: ACCENT,
    paddingLeft: '4px',
  },
} as const;

export function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: FOOTER_BG,
        color: TEXT_LIGHT,
        pt: { xs: 6, md: 8 },
        pb: 0,
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '3px',
          background: `linear-gradient(90deg, ${ACCENT}, #1E4A71, ${ACCENT})`,
        },
      }}
    >
      <Container maxWidth="lg" sx={{ px: { xs: 3, md: 4 } }}>
        {/* Main 4-column layout */}
        <Grid container spacing={4}>
          {/* Column 1: Logo + Description + Social */}
          <Grid xs={12} md={3}>
            <Box sx={{ mb: 2.5 }}>
              <Image
                src="/img/awalab_logo.png"
                width={180}
                height={56}
                alt="AWALab de Mexico"
                style={{ objectFit: 'contain', filter: 'brightness(1.1)' }}
              />
            </Box>
            <Typography
              variant="body2"
              sx={{
                color: TEXT_LIGHT,
                lineHeight: 1.85,
                mb: 3,
                fontSize: '0.85rem',
                maxWidth: 280,
              }}
            >
              Comercializadora industrial con mas de 25 anos de experiencia.
              Especialistas en equipo de laboratorio, seguridad industrial y
              tratamiento de agua.
            </Typography>

            {/* Social Media Icons */}
            <Stack direction="row" spacing={0.5}>
              {socialLinks.map((social) => (
                <IconButton
                  key={social.label}
                  component="a"
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  sx={{
                    color: TEXT_MUTED,
                    border: `1px solid ${DIVIDER_COLOR}`,
                    borderRadius: '8px',
                    width: 38,
                    height: 38,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      color: '#FFFFFF',
                      backgroundColor: ACCENT,
                      borderColor: ACCENT,
                      transform: 'translateY(-2px)',
                    },
                    '& .MuiSvgIcon-root': { fontSize: 18 },
                  }}
                >
                  {social.icon}
                </IconButton>
              ))}
            </Stack>
          </Grid>

          {/* Column 2: Quick Links */}
          <Grid xs={6} md={3}>
            <Typography
              variant="subtitle1"
              sx={{
                color: HEADING_COLOR,
                fontWeight: 700,
                mb: 2.5,
                fontSize: '0.95rem',
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
                position: 'relative',
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  bottom: -8,
                  left: 0,
                  width: 32,
                  height: 2,
                  backgroundColor: ACCENT,
                  borderRadius: 1,
                },
              }}
            >
              Enlaces
            </Typography>
            <Box sx={{ pt: 1.5 }}>
              {quickLinks.map((link) => (
                <Link key={link.href} href={link.href} style={{ textDecoration: 'none' }}>
                  <Typography component="span" sx={linkHoverSx}>
                    {link.label}
                  </Typography>
                </Link>
              ))}
            </Box>
          </Grid>

          {/* Column 3: Services */}
          <Grid xs={6} md={3}>
            <Typography
              variant="subtitle1"
              sx={{
                color: HEADING_COLOR,
                fontWeight: 700,
                mb: 2.5,
                fontSize: '0.95rem',
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
                position: 'relative',
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  bottom: -8,
                  left: 0,
                  width: 32,
                  height: 2,
                  backgroundColor: ACCENT,
                  borderRadius: 1,
                },
              }}
            >
              Servicios
            </Typography>
            <Box sx={{ pt: 1.5 }}>
              {services.map((link) => (
                <Link key={link.href} href={link.href} style={{ textDecoration: 'none' }}>
                  <Typography component="span" sx={linkHoverSx}>
                    {link.label}
                  </Typography>
                </Link>
              ))}
            </Box>
          </Grid>

          {/* Column 4: Contact */}
          <Grid xs={12} md={3}>
            <Typography
              variant="subtitle1"
              sx={{
                color: HEADING_COLOR,
                fontWeight: 700,
                mb: 2.5,
                fontSize: '0.95rem',
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
                position: 'relative',
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  bottom: -8,
                  left: 0,
                  width: 32,
                  height: 2,
                  backgroundColor: ACCENT,
                  borderRadius: 1,
                },
              }}
            >
              Contacto
            </Typography>
            <Stack spacing={2} sx={{ pt: 1.5 }}>
              {/* WhatsApp */}
              <Stack
                component="a"
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                direction="row"
                spacing={1.5}
                alignItems="center"
                sx={{
                  textDecoration: 'none',
                  color: TEXT_LIGHT,
                  transition: 'color 0.25s ease',
                  '&:hover': { color: '#25D366' },
                }}
              >
                <WhatsAppIcon sx={{ fontSize: 18, color: '#25D366' }} />
                <Typography variant="body2" sx={{ fontSize: '0.875rem' }}>
                  {WHATSAPP_NUMBER}
                </Typography>
              </Stack>

              {/* Phone */}
              <Stack direction="row" spacing={1.5} alignItems="center">
                <PhoneIcon sx={{ fontSize: 18, color: ACCENT }} />
                <Typography variant="body2" sx={{ fontSize: '0.875rem' }}>
                  +52 776 227 7069
                </Typography>
              </Stack>

              {/* Email */}
              <Stack
                component="a"
                href="mailto:ventas@awalabdemexico.com"
                direction="row"
                spacing={1.5}
                alignItems="center"
                sx={{
                  textDecoration: 'none',
                  color: TEXT_LIGHT,
                  transition: 'color 0.25s ease',
                  '&:hover': { color: ACCENT },
                }}
              >
                <EmailIcon sx={{ fontSize: 18, color: ACCENT }} />
                <Typography variant="body2" sx={{ fontSize: '0.875rem' }}>
                  ventas@awalabdemexico.com
                </Typography>
              </Stack>

              {/* Address */}
              <Stack direction="row" spacing={1.5} alignItems="flex-start">
                <LocationOnIcon sx={{ fontSize: 18, color: ACCENT, mt: 0.2 }} />
                <Typography variant="body2" sx={{ fontSize: '0.85rem', lineHeight: 1.6 }}>
                  Tula de Allende, Hidalgo, Mexico
                </Typography>
              </Stack>

              {/* Hours */}
              <Stack direction="row" spacing={1.5} alignItems="flex-start">
                <AccessTimeIcon sx={{ fontSize: 18, color: ACCENT, mt: 0.2 }} />
                <Typography variant="body2" sx={{ fontSize: '0.85rem', lineHeight: 1.6 }}>
                  Lun - Vie: 8:00 - 18:00
                  <br />
                  Sab: 9:00 - 14:00
                </Typography>
              </Stack>
            </Stack>
          </Grid>
        </Grid>

        {/* Certification Badges */}
        <Box sx={{ mt: 6, mb: 4 }}>
          <Stack
            direction="row"
            spacing={3}
            alignItems="center"
            justifyContent="center"
            flexWrap="wrap"
            useFlexGap
          >
            <Typography
              variant="caption"
              sx={{
                color: TEXT_MUTED,
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                fontSize: '0.7rem',
                mr: 1,
              }}
            >
              Certificaciones:
            </Typography>
            {certifications.map((cert) => (
              <Box
                key={cert.name}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1,
                  px: 2,
                  py: 0.8,
                  border: `1px solid ${DIVIDER_COLOR}`,
                  borderRadius: '6px',
                  backgroundColor: 'rgba(255,255,255,0.02)',
                  transition: 'border-color 0.3s ease',
                  '&:hover': {
                    borderColor: 'rgba(255,255,255,0.15)',
                  },
                }}
              >
                <Image
                  src={cert.src}
                  width={28}
                  height={28}
                  alt={cert.name}
                  style={{ objectFit: 'contain', opacity: 0.85 }}
                />
                <Typography
                  variant="caption"
                  sx={{ color: TEXT_MUTED, fontSize: '0.72rem', fontWeight: 500 }}
                >
                  {cert.name}
                </Typography>
              </Box>
            ))}
          </Stack>
        </Box>

        {/* Divider */}
        <Divider sx={{ borderColor: DIVIDER_COLOR }} />

        {/* Bottom bar: Copyright + Legal Links */}
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          justifyContent="space-between"
          alignItems="center"
          spacing={1.5}
          sx={{ py: 3 }}
        >
          <Typography
            variant="body2"
            sx={{ color: TEXT_MUTED, fontSize: '0.78rem' }}
          >
            &copy; 2026 Awalab de Mexico S.A. de C.V. Todos los derechos reservados.
          </Typography>
          <Stack direction="row" spacing={3}>
            <Link href="/privacidad" style={{ textDecoration: 'none' }}>
              <Typography
                component="span"
                variant="body2"
                sx={{
                  color: TEXT_MUTED,
                  fontSize: '0.78rem',
                  transition: 'color 0.25s ease',
                  '&:hover': { color: ACCENT },
                }}
              >
                Aviso de Privacidad
              </Typography>
            </Link>
            <Link href="/terminos" style={{ textDecoration: 'none' }}>
              <Typography
                component="span"
                variant="body2"
                sx={{
                  color: TEXT_MUTED,
                  fontSize: '0.78rem',
                  transition: 'color 0.25s ease',
                  '&:hover': { color: ACCENT },
                }}
              >
                Terminos y Condiciones
              </Typography>
            </Link>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
