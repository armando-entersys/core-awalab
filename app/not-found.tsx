import { Box, Container, Typography, Button, Stack } from '@mui/material';
import Link from 'next/link';

export default function NotFound() {
  return (
    <Container maxWidth="sm" sx={{ textAlign: 'center', py: 16 }}>
      <Typography variant="h1" sx={{ fontSize: '6rem', color: 'primary.main', mb: 2 }}>
        404
      </Typography>
      <Typography variant="h4" sx={{ mb: 2 }}>
        Pagina no encontrada
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
        La pagina que buscas no existe o fue movida. Intenta navegar desde el inicio.
      </Typography>
      <Stack direction="row" spacing={2} justifyContent="center">
        <Button component={Link} href="/" variant="contained" color="primary">
          Ir al inicio
        </Button>
        <Button component={Link} href="/contacto" variant="outlined" color="primary">
          Contactanos
        </Button>
      </Stack>
    </Container>
  );
}
