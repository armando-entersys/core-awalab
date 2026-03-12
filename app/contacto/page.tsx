import { Metadata } from 'next';
import { Box, Container, Typography, Grid, Stack } from '@mui/material';
import Image from 'next/image';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import VerifiedIcon from '@mui/icons-material/Verified';
import { generatePageMetadata } from '@/lib/seo';
import { WHATSAPP_NUMBER, WHATSAPP_URL } from '@/lib/constants';
import { FadeInOnScroll } from '@/components/ui/FadeInOnScroll';
import { ContactForm } from '@/components/forms/ContactForm';

export const metadata: Metadata = generatePageMetadata({
  title: 'Contacto',
  description:
    'Contacta a Awalab de Mexico. WhatsApp, telefono, email o visita nuestras oficinas en Tula de Allende, Hidalgo.',
  canonical: '/contacto',
  keywords: ['contacto awalab', 'awalab telefono', 'awalab direccion'],
});

const CONTACT_INFO = [
  {
    icon: <WhatsAppIcon sx={{ fontSize: 24 }} />,
    label: 'WhatsApp',
    value: WHATSAPP_NUMBER,
    href: `${WHATSAPP_URL}?text=${encodeURIComponent('Hola, necesito informacion')}`,
    iconBg: '#25D366',
  },
  {
    icon: <PhoneIcon sx={{ fontSize: 24 }} />,
    label: 'Telefono',
    value: WHATSAPP_NUMBER,
    href: `tel:${WHATSAPP_NUMBER}`,
    iconBg: '#0A87C6',
  },
  {
    icon: <EmailIcon sx={{ fontSize: 24 }} />,
    label: 'Email',
    value: 'ventas@awalabdemexico.com',
    href: 'mailto:ventas@awalabdemexico.com',
    iconBg: '#1E4A71',
  },
  {
    icon: <LocationOnIcon sx={{ fontSize: 24 }} />,
    label: 'Direccion',
    value: 'Tula de Allende, Hidalgo, Mexico',
    iconBg: '#E91E63',
  },
  {
    icon: <AccessTimeIcon sx={{ fontSize: 24 }} />,
    label: 'Horario',
    value: 'Lunes a Viernes, 8:00 - 18:00',
    iconBg: '#FF9800',
  },
];

export default function ContactoPage() {
  return (
    <>
      {/* Hero */}
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          minHeight: { xs: '45vh', md: '50vh' },
          display: 'flex',
          alignItems: 'center',
          overflow: 'hidden',
        }}
      >
        <Image
          src="/img/hero/hero-servicios.png"
          alt="Contacto Awalab de Mexico"
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
              'linear-gradient(135deg, rgba(13,27,42,0.93) 0%, rgba(30,74,113,0.85) 50%, rgba(10,135,198,0.65) 100%)',
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
                Respuesta en menos de 24 horas
              </Typography>
            </Box>
            <Typography
              variant="h1"
              sx={{
                color: '#FFFFFF',
                fontSize: { xs: '2.25rem', sm: '3rem', md: '3.75rem' },
                fontWeight: 800,
                lineHeight: 1.1,
                mb: 2,
                letterSpacing: '-0.03em',
              }}
            >
              Contactanos
            </Typography>
            <Typography
              variant="h5"
              sx={{
                color: 'rgba(255,255,255,0.9)',
                fontWeight: 400,
                maxWidth: 550,
                lineHeight: 1.7,
                fontSize: { xs: '1rem', md: '1.2rem' },
              }}
            >
              Estamos listos para ayudarte a encontrar la solucion industrial perfecta para tu operacion.
            </Typography>
          </FadeInOnScroll>
        </Container>
      </Box>

      {/* Contact Form + Info */}
      <Box sx={{ py: { xs: 8, md: 14 }, background: 'linear-gradient(180deg, #FFFFFF 0%, #F0F7FF 100%)' }}>
        <Container maxWidth="lg">
          <Grid container spacing={6}>
            {/* Form */}
            <Grid xs={12} md={7}>
              <FadeInOnScroll direction="left">
                <Box
                  sx={{
                    p: { xs: 3, md: 5 },
                    borderRadius: '24px',
                    backgroundColor: '#FFFFFF',
                    boxShadow: '0 8px 40px rgba(0,0,0,0.06)',
                    border: '1px solid rgba(0,0,0,0.04)',
                  }}
                >
                  <Typography variant="h4" sx={{ fontWeight: 700, mb: 1, color: '#1A1A2E' }}>
                    Envianos un mensaje
                  </Typography>
                  <Typography variant="body1" color="text.secondary" sx={{ mb: 4, lineHeight: 1.7 }}>
                    Completa el formulario y nuestro equipo te contactara a la brevedad.
                  </Typography>
                  <ContactForm />
                </Box>
              </FadeInOnScroll>
            </Grid>

            {/* Contact Info */}
            <Grid xs={12} md={5}>
              <FadeInOnScroll direction="right">
                <Stack spacing={3}>
                  <Typography variant="h4" sx={{ fontWeight: 700, color: '#1A1A2E', mb: 1 }}>
                    Informacion de contacto
                  </Typography>
                  <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.7 }}>
                    Tambien puedes comunicarte directamente con nosotros por cualquiera de estos medios.
                  </Typography>

                  {CONTACT_INFO.map((item) => (
                    <Box
                      key={item.label}
                      component={item.href ? 'a' : 'div'}
                      href={item.href}
                      target={item.href?.startsWith('http') ? '_blank' : undefined}
                      rel={item.href?.startsWith('http') ? 'noopener noreferrer' : undefined}
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 2.5,
                        p: 2,
                        borderRadius: '16px',
                        textDecoration: 'none',
                        color: 'inherit',
                        backgroundColor: '#FFFFFF',
                        boxShadow: '0 2px 12px rgba(0,0,0,0.04)',
                        border: '1px solid rgba(0,0,0,0.04)',
                        transition: 'all 0.3s ease',
                        '&:hover': item.href
                          ? {
                              transform: 'translateX(8px)',
                              boxShadow: '0 8px 24px rgba(0,0,0,0.08)',
                              borderColor: 'rgba(10,135,198,0.2)',
                            }
                          : {},
                      }}
                    >
                      <Box
                        sx={{
                          width: 48,
                          height: 48,
                          borderRadius: '14px',
                          backgroundColor: item.iconBg,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: '#FFFFFF',
                          flexShrink: 0,
                        }}
                      >
                        {item.icon}
                      </Box>
                      <Box>
                        <Typography
                          variant="caption"
                          sx={{ color: 'text.secondary', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.05em' }}
                        >
                          {item.label}
                        </Typography>
                        <Typography variant="body1" sx={{ fontWeight: 600, color: '#1A1A2E', fontSize: '0.95rem' }}>
                          {item.value}
                        </Typography>
                      </Box>
                    </Box>
                  ))}

                  {/* Map placeholder */}
                  <Box
                    sx={{
                      mt: 2,
                      borderRadius: '20px',
                      overflow: 'hidden',
                      height: 200,
                      background: 'linear-gradient(135deg, #E3F2FD 0%, #BBDEFB 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      border: '1px solid rgba(10,135,198,0.1)',
                    }}
                  >
                    <Stack alignItems="center" spacing={1}>
                      <LocationOnIcon sx={{ fontSize: 40, color: '#0A87C6' }} />
                      <Typography variant="body2" sx={{ color: '#1E4A71', fontWeight: 600 }}>
                        Tula de Allende, Hidalgo
                      </Typography>
                    </Stack>
                  </Box>
                </Stack>
              </FadeInOnScroll>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}
