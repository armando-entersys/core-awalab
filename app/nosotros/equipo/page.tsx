import { Metadata } from 'next';
import { Box, Container, Typography, Grid, Card, CardContent, Avatar, Chip, Stack } from '@mui/material';
import GroupsIcon from '@mui/icons-material/Groups';
import { generatePageMetadata } from '@/lib/seo';

export const metadata: Metadata = generatePageMetadata({
  title: 'Nuestro Equipo',
  description:
    '31 profesionales dedicados a servir a la industria mexicana. Conoce al equipo de Awalab de Mexico.',
  canonical: '/nosotros/equipo',
  keywords: ['equipo awalab', 'equipo awalab de mexico', 'empleados awalab'],
});

interface TeamMember {
  initials: string;
  name: string;
  role: string;
  department: string;
  color: string;
}

const DEPARTMENTS: { name: string; count: number; color: string; roles: string[] }[] = [
  {
    name: 'Direccion',
    count: 2,
    color: '#1E4A71',
    roles: ['Dir. Operaciones Estrategicas', 'Dir. Ventas'],
  },
  {
    name: 'Ventas',
    count: 10,
    color: '#0A87C6',
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
    roles: ['CS Especialista 1', 'CS Especialista 2', 'CS Especialista 3', 'CS Especialista 4', 'CS Especialista 5'],
  },
  {
    name: 'Compras',
    count: 2,
    color: '#ED6C02',
    roles: ['Compras Senior', 'Compras Junior'],
  },
  {
    name: 'Finanzas',
    count: 3,
    color: '#9C27B0',
    roles: ['CxC Especialista 1', 'CxC Especialista 2', 'CxP Medio Tiempo'],
  },
  {
    name: 'Almacen',
    count: 3,
    color: '#795548',
    roles: ['Jefe Almacen 1', 'Jefe Almacen 2', 'Aux Almacen'],
  },
  {
    name: 'Logistica',
    count: 2,
    color: '#607D8B',
    roles: ['Chofer 1', 'Chofer 2'],
  },
  {
    name: 'Marketing',
    count: 1,
    color: '#E91E63',
    roles: ['Marketing Especialista'],
  },
  {
    name: 'RRHH',
    count: 1,
    color: '#FF9800',
    roles: ['Recursos Humanos'],
  },
  {
    name: 'Operaciones',
    count: 2,
    color: '#00BCD4',
    roles: ['KAM / Marketing + IA', 'Limpieza'],
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
      {/* Hero */}
      <Box
        sx={{
          background: 'linear-gradient(135deg, #1E4A71 0%, #153554 100%)',
          color: '#FFFFFF',
          py: { xs: 8, md: 12 },
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
            <GroupsIcon sx={{ fontSize: 40 }} />
            <Typography variant="h1" sx={{ color: '#FFFFFF', fontSize: { xs: '2rem', md: '3rem' } }}>
              Nuestro Equipo
            </Typography>
          </Box>
          <Typography variant="h5" sx={{ color: 'rgba(255,255,255,0.85)', fontWeight: 400, maxWidth: 700 }}>
            31 profesionales dedicados a servir a la industria mexicana con excelencia y compromiso.
          </Typography>
        </Container>
      </Box>

      {/* Department Summary */}
      <Box sx={{ backgroundColor: '#F8FAFB', py: { xs: 6, md: 8 } }}>
        <Container maxWidth="lg">
          <Typography variant="h3" sx={{ mb: 4, textAlign: 'center' }}>
            Departamentos
          </Typography>
          <Grid container spacing={2} sx={{ justifyContent: 'center' }}>
            {DEPARTMENTS.map((dept) => (
              <Grid key={dept.name} xs={6} md={3}>
                <Box sx={{ textAlign: 'center' }}>
                  <Typography variant="h2" sx={{ color: dept.color, fontWeight: 700 }}>
                    {dept.count}
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    {dept.name}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Team Members by Department */}
      <Container maxWidth="lg" sx={{ py: { xs: 8, md: 12 } }}>
        {DEPARTMENTS.map((dept) => (
          <Box key={dept.name} sx={{ mb: 8 }}>
            <Stack direction="row" alignItems="center" spacing={2} sx={{ mb: 3 }}>
              <Chip
                label={dept.name}
                sx={{ backgroundColor: dept.color, color: '#FFFFFF', fontWeight: 600, fontSize: '0.9rem' }}
              />
              <Typography variant="body2" color="text.secondary">
                {dept.count} {dept.count === 1 ? 'integrante' : 'integrantes'}
              </Typography>
            </Stack>
            <Grid container spacing={3}>
              {dept.roles.map((role) => (
                <Grid key={role} xs={12} md={6}>
                  <Card sx={{ display: 'flex', alignItems: 'center', p: 2 }}>
                    <Avatar
                      sx={{
                        bgcolor: dept.color,
                        width: 56,
                        height: 56,
                        mr: 2,
                        fontSize: '1.1rem',
                        fontWeight: 600,
                      }}
                    >
                      {getInitials(role)}
                    </Avatar>
                    <Box>
                      <Typography variant="body1" sx={{ fontWeight: 600 }}>
                        {role}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {dept.name}
                      </Typography>
                    </Box>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>
        ))}
      </Container>
    </>
  );
}
