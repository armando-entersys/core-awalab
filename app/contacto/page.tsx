import { Metadata } from 'next';
import { Box, Container, Typography, Grid } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { generatePageMetadata } from '@/lib/seo';
import { WHATSAPP_NUMBER, WHATSAPP_URL } from '@/lib/constants';

export const metadata: Metadata = generatePageMetadata({
  title: 'Contacto',
  description:
    'Contacta a Awalab de Mexico. WhatsApp, telefono, email o visita nuestras oficinas en Tula de Allende, Hidalgo.',
  canonical: '/contacto',
  keywords: ['contacto awalab', 'awalab telefono', 'awalab direccion'],
});

export default function ContactoPage() {
  return (
    <>
      {/* Hero */}
      <Box
        sx={{
          background: 'linear-gradient(135deg, #1E4A71 0%, #153554 100%)',
          color: '#FFFFFF',
          py: { xs: 8, md: 10 },
        }}
      >
        <Container maxWidth="lg">
          <Typography variant="h1" sx={{ color: '#FFFFFF', mb: 2, fontSize: { xs: '2rem', md: '3rem' } }}>
            Contacto
          </Typography>
          <Typography variant="h5" sx={{ color: 'rgba(255,255,255,0.85)', fontWeight: 400 }}>
            Estamos listos para ayudarte. Respondemos en menos de 24 horas.
          </Typography>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ py: { xs: 8, md: 12 } }}>
        <Grid container spacing={6}>
          {/* Contact Form Placeholder */}
          <Grid xs={12} md={7}>
            <Typography variant="h3" sx={{ mb: 3 }}>
              Envianos un mensaje
            </Typography>
            <Box
              sx={{
                p: 4,
                border: '2px dashed',
                borderColor: 'grey.300',
                borderRadius: 2,
                textAlign: 'center',
                color: 'text.secondary',
                minHeight: 300,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Typography variant="body1">
                Formulario de contacto — Fase 1 MVP
              </Typography>
            </Box>
          </Grid>

          {/* Contact Info */}
          <Grid xs={12} md={5}>
            <Typography variant="h3" sx={{ mb: 3 }}>
              Informacion de contacto
            </Typography>
            {[
              { icon: <WhatsAppIcon />, label: 'WhatsApp', value: WHATSAPP_NUMBER, href: `${WHATSAPP_URL}?text=${encodeURIComponent('Hola, necesito informacion')}` },
              { icon: <PhoneIcon />, label: 'Telefono', value: WHATSAPP_NUMBER, href: `tel:${WHATSAPP_NUMBER}` },
              { icon: <EmailIcon />, label: 'Email', value: 'ventas@awalabdemexico.com', href: 'mailto:ventas@awalabdemexico.com' },
              { icon: <LocationOnIcon />, label: 'Direccion', value: 'Tula de Allende, Hidalgo, Mexico' },
              { icon: <AccessTimeIcon />, label: 'Horario', value: 'Lunes a Viernes, 8:00 - 18:00' },
            ].map((item) => (
              <Box
                key={item.label}
                component={item.href ? 'a' : 'div'}
                href={item.href}
                target={item.href?.startsWith('http') ? '_blank' : undefined}
                rel={item.href?.startsWith('http') ? 'noopener noreferrer' : undefined}
                sx={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: 2,
                  mb: 3,
                  textDecoration: 'none',
                  color: 'inherit',
                  '&:hover': item.href ? { color: 'primary.main' } : {},
                }}
              >
                <Box sx={{ color: 'secondary.main', mt: 0.3 }}>{item.icon}</Box>
                <Box>
                  <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.8rem' }}>
                    {item.label}
                  </Typography>
                  <Typography variant="body1" sx={{ fontWeight: 500 }}>
                    {item.value}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
