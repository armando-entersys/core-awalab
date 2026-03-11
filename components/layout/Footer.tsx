'use client';

import Link from 'next/link';
import { Box, Container, Grid, Typography, Stack, Divider } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { SITE_NAME, CERTIFICATIONS, WHATSAPP_NUMBER } from '@/lib/constants';

export function Footer() {
  return (
    <Box
      component="footer"
      sx={{ backgroundColor: '#1A1A2E', color: '#E5E7EB', pt: 8, pb: 4 }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={4}>
          {/* About */}
          <Grid xs={12} md={4}>
            <Typography
              variant="h5"
              sx={{ color: '#FFFFFF', fontFamily: '"Brother", sans-serif', mb: 2 }}
            >
              {SITE_NAME}
            </Typography>
            <Typography variant="body2" sx={{ mb: 2, lineHeight: 1.8 }}>
              Comercializadora industrial con mas de 25 anos de experiencia.
              Especialistas en equipo de laboratorio, seguridad industrial y
              tratamiento de agua.
            </Typography>
            <Stack direction="row" spacing={2}>
              {CERTIFICATIONS.map((cert) => (
                <Box
                  key={cert.name}
                  sx={{
                    px: 1.5,
                    py: 0.5,
                    border: '1px solid rgba(255,255,255,0.2)',
                    borderRadius: 1,
                    fontSize: '0.75rem',
                  }}
                >
                  {cert.name}
                </Box>
              ))}
            </Stack>
          </Grid>

          {/* Quick Links */}
          <Grid xs={6} md={2}>
            <Typography variant="h6" sx={{ color: '#FFFFFF', mb: 2, fontSize: '1rem' }}>
              Productos
            </Typography>
            <Stack spacing={1}>
              {[
                { label: 'Laboratorio', href: '/laboratorio' },
                { label: 'Seguridad Industrial', href: '/seguridad-industrial' },
                { label: 'Tratamiento de Agua', href: '/tratamiento-de-agua' },
                { label: 'Marcas', href: '/marcas' },
                { label: 'Catalogo', href: '/catalogo' },
              ].map((link) => (
                <Link key={link.href} href={link.href}>
                  <Typography
                    variant="body2"
                    sx={{ '&:hover': { color: '#0A87C6' }, transition: 'color 0.2s' }}
                  >
                    {link.label}
                  </Typography>
                </Link>
              ))}
            </Stack>
          </Grid>

          {/* Company */}
          <Grid xs={6} md={2}>
            <Typography variant="h6" sx={{ color: '#FFFFFF', mb: 2, fontSize: '1rem' }}>
              Empresa
            </Typography>
            <Stack spacing={1}>
              {[
                { label: 'Nosotros', href: '/nosotros' },
                { label: 'Servicios', href: '/servicios' },
                { label: 'Proyectos', href: '/proyectos' },
                { label: 'Blog', href: '/blog' },
                { label: 'Acreditaciones', href: '/nosotros/acreditaciones' },
              ].map((link) => (
                <Link key={link.href} href={link.href}>
                  <Typography
                    variant="body2"
                    sx={{ '&:hover': { color: '#0A87C6' }, transition: 'color 0.2s' }}
                  >
                    {link.label}
                  </Typography>
                </Link>
              ))}
            </Stack>
          </Grid>

          {/* Contact */}
          <Grid xs={12} md={4}>
            <Typography variant="h6" sx={{ color: '#FFFFFF', mb: 2, fontSize: '1rem' }}>
              Contacto
            </Typography>
            <Stack spacing={1.5}>
              <Stack direction="row" spacing={1} alignItems="center">
                <PhoneIcon sx={{ fontSize: 18, color: '#0A87C6' }} />
                <Typography variant="body2">{WHATSAPP_NUMBER}</Typography>
              </Stack>
              <Stack direction="row" spacing={1} alignItems="center">
                <EmailIcon sx={{ fontSize: 18, color: '#0A87C6' }} />
                <Typography variant="body2">ventas@awalabdemexico.com</Typography>
              </Stack>
              <Stack direction="row" spacing={1} alignItems="flex-start">
                <LocationOnIcon sx={{ fontSize: 18, color: '#0A87C6', mt: 0.3 }} />
                <Typography variant="body2">
                  Tula de Allende, Hidalgo, Mexico
                </Typography>
              </Stack>
            </Stack>
          </Grid>
        </Grid>

        <Divider sx={{ borderColor: 'rgba(255,255,255,0.1)', my: 4 }} />

        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          justifyContent="space-between"
          alignItems="center"
          spacing={1}
        >
          <Typography variant="body2" sx={{ color: '#9CA3AF', fontSize: '0.8rem' }}>
            &copy; {new Date().getFullYear()} {SITE_NAME}. Todos los derechos reservados.
          </Typography>
          <Stack direction="row" spacing={2}>
            <Link href="/privacidad">
              <Typography variant="body2" sx={{ color: '#9CA3AF', fontSize: '0.8rem', '&:hover': { color: '#0A87C6' } }}>
                Aviso de Privacidad
              </Typography>
            </Link>
            <Link href="/terminos">
              <Typography variant="body2" sx={{ color: '#9CA3AF', fontSize: '0.8rem', '&:hover': { color: '#0A87C6' } }}>
                Terminos y Condiciones
              </Typography>
            </Link>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
