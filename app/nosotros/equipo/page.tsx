import { Metadata } from 'next';
import { Box, Container, Typography, Grid, Avatar, Chip, Stack, CardContent, Button } from '@mui/material';
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
  title: 'Nuestro Equipo',
  description:
    '31 profesionales dedicados a servir a la industria mexicana. Conoce al equipo de Awalab de Mexico.',
  canonical: '/nosotros/equipo',
  keywords: ['equipo awalab', 'equipo awalab de mexico', 'empleados awalab'],
});

const DEPARTMENTS = [
  {
    name: 'Direccion',
    count: 2,
    color: '#1E4A71',
    gradient: 'linear-gradient(135deg, #1E4A71 0%, #0D1B2A 100%)',
    roles: ['Dir. Operaciones Estrategicas', 'Dir. Ventas'],
  },
  {
    name: 'Ventas',
    count: 10,
    color: '#0A87C6',
    gradient: 'linear-gradient(135deg, #0A87C6 0%, #1565C0 100%)',
    roles: [
      'Lider Segmento A', 'Lider Segmento B', 'Lider Segmento C',
      'Vendedor 1', 'Vendedor 2', 'Vendedor 3',
      'Vendedor 4', 'Vendedor 5', 'Vendedor 6',
      'Hunter',
    ],
  },
  {
    name: 'Customer Service',
    count: 5,
    color: '#2E7D32',
    gradient: 'linear-gradient(135deg, #2E7D32 0%, #1B5E20 100%)',
    roles: ['CS Especialista 1', 'CS Especialista 2', 'CS Especialista 3', 'CS Especialista 4', 'CS Especialista 5'],
  },
  {
    name: 'Compras',
    count: 2,
    color: '#ED6C02',
    gradient: 'linear-gradient(135deg, #ED6C02 0%, #E65100 100%)',
    roles: ['Compras Senior', 'Compras Junior'],
  },
  {
    name: 'Finanzas',
    count: 3,
    color: '#7B1FA2',
    gradient: 'linear-gradient(135deg, #7B1FA2 0%, #4A148C 100%)',
    roles: ['CxC Especialista 1', 'CxC Especialista 2', 'CxP Medio Tiempo'],
  },
  {
    name: 'Almacen',
    count: 3,
    color: '#795548',
    gradient: 'linear-gradient(135deg, #795548 0%, #4E342E 100%)',
    roles: ['Jefe Almacen 1', 'Jefe Almacen 2', 'Aux Almacen'],
  },
  {
    name: 'Logistica',
    count: 2,
    color: '#607D8B',
    gradient: 'linear-gradient(135deg, #607D8B 0%, #37474F 100%)',
    roles: ['Chofer 1', 'Chofer 2'],
  },
  {
    name: 'Marketing + IA',
    count: 2,
    color: '#E91E63',
    gradient: 'linear-gradient(135deg, #E91E63 0%, #AD1457 100%)',
    roles: ['Marketing Especialista', 'KAM / Marketing + IA'],
  },
  {
    name: 'RRHH',
    count: 1,
    color: '#FF9800',
    gradient: 'linear-gradient(135deg, #FF9800 0%, #E65100 100%)',
    roles: ['Recursos Humanos'],
  },
  {
    name: 'Servicios',
    count: 1,
    color: '#00BCD4',
    gradient: 'linear-gradient(135deg, #00BCD4 0%, #00838F 100%)',
    roles: ['Limpieza'],
  },
];

function getInitials(role: string): string {
  return role
    .split(' ')
    .slice(0, 2)
    .map((w) => w[0])
    .join('')
    .toUpperCase();
}

export default function EquipoPage() {
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
          alt="Equipo de Awalab de Mexico"
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
              Quienes somos
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
              Nuestro Equipo
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
              31 profesionales dedicados a servir a la industria mexicana con excelencia y compromiso.
            </Typography>
          </FadeInOnScroll>
        </Container>
      </Box>

      {/* ── Stats bar ── */}
      <Box sx={{ backgroundColor: colors.navy, py: { xs: 4, md: 5 } }}>
        <Container maxWidth="lg">
          <Grid container spacing={3}>
            {[
              { value: 31, suffix: '', label: 'Colaboradores' },
              { value: 10, suffix: '', label: 'Departamentos' },
              { value: 25, suffix: '+', label: 'Anos de experiencia' },
              { value: 3, suffix: '', label: 'Lineas de negocio' },
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

      {/* ── Departments ── */}
      <Box sx={{ ...section, background: `linear-gradient(180deg, ${colors.white} 0%, ${colors.gray50} 100%)` }}>
        <Container maxWidth="lg">
          <FadeInOnScroll>
            <Typography variant="overline" sx={sectionLabel}>Organizacion</Typography>
            <Typography variant="h2" sx={sectionTitle}>Departamentos</Typography>
            <Typography variant="body1" sx={sectionSubtitle}>
              Un equipo multidisciplinario enfocado en dar el mejor servicio a cada cliente
            </Typography>
          </FadeInOnScroll>

          {DEPARTMENTS.map((dept, deptIndex) => (
            <FadeInOnScroll key={dept.name} delay={deptIndex * 0.05} direction="up">
              <Box sx={{ mb: 5 }}>
                <Stack direction="row" alignItems="center" spacing={2} sx={{ mb: 2.5 }}>
                  <Box
                    sx={{
                      width: 36,
                      height: 36,
                      borderRadius: '10px',
                      background: dept.gradient,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: `0 2px 8px ${dept.color}33`,
                    }}
                  >
                    <Typography sx={{ color: colors.white, fontWeight: 800, fontSize: '0.85rem' }}>
                      {dept.count}
                    </Typography>
                  </Box>
                  <Typography variant="h6" sx={{ fontWeight: 700, color: colors.text }}>
                    {dept.name}
                  </Typography>
                  <Chip
                    label={`${dept.count} ${dept.count === 1 ? 'integrante' : 'integrantes'}`}
                    size="small"
                    sx={{
                      backgroundColor: `${dept.color}12`,
                      color: dept.color,
                      fontWeight: 600,
                      fontSize: '0.72rem',
                    }}
                  />
                </Stack>
                <Grid container spacing={2}>
                  {dept.roles.map((role) => (
                    <Grid key={role} xs={12} sm={6} md={4}>
                      <GlowCard
                        glowColor={`${dept.color}10`}
                        sx={{
                          ...card,
                          p: 0,
                          display: 'flex',
                          alignItems: 'center',
                          '&:hover': { transform: 'translateY(-2px)', boxShadow: '0 8px 24px rgba(0,0,0,0.06)' },
                        }}
                      >
                        <CardContent sx={{ p: 2, display: 'flex', alignItems: 'center', gap: 2, width: '100%' }}>
                          <Avatar
                            sx={{
                              background: dept.gradient,
                              width: 44,
                              height: 44,
                              fontSize: '0.85rem',
                              fontWeight: 700,
                              flexShrink: 0,
                            }}
                          >
                            {getInitials(role)}
                          </Avatar>
                          <Box>
                            <Typography sx={{ fontWeight: 600, color: colors.text, fontSize: '0.9rem' }}>
                              {role}
                            </Typography>
                            <Typography variant="caption" sx={{ color: colors.textMuted, fontSize: '0.75rem' }}>
                              {dept.name}
                            </Typography>
                          </Box>
                        </CardContent>
                      </GlowCard>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </FadeInOnScroll>
          ))}
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
              ¿Quieres formar parte del equipo?
            </Typography>
            <Typography
              sx={{ color: 'rgba(255,255,255,0.7)', mb: 5, fontSize: '1.05rem', lineHeight: 1.7 }}
            >
              Estamos siempre en busqueda de talento que comparta nuestra pasion por la industria.
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
