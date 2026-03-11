'use client';

import { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Stepper,
  Step,
  StepLabel,
  Button,
  Card,
  CardContent,
  Grid,
  TextField,
  Stack,
} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const steps = [
  'Datos de contacto',
  'Productos / Servicios',
  'Detalles',
];

export default function CotizacionForm() {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => setActiveStep((prev) => Math.min(prev + 1, steps.length - 1));
  const handleBack = () => setActiveStep((prev) => Math.max(prev - 1, 0));

  return (
    <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
      <Card sx={{ p: { xs: 3, md: 5 } }}>
        <Stepper activeStep={activeStep} alternativeLabel sx={{ mb: 5 }}>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>

        <CardContent>
          {/* Step 1: Contact Details */}
          {activeStep === 0 && (
            <Grid container spacing={3}>
              <Grid xs={12} md={6}>
                <TextField fullWidth label="Nombre completo" placeholder="Tu nombre" />
              </Grid>
              <Grid xs={12} md={6}>
                <TextField fullWidth label="Empresa" placeholder="Nombre de la empresa" />
              </Grid>
              <Grid xs={12} md={6}>
                <TextField fullWidth label="Email" type="email" placeholder="correo@empresa.com" />
              </Grid>
              <Grid xs={12} md={6}>
                <TextField fullWidth label="Telefono" placeholder="+52 ..." />
              </Grid>
              <Grid xs={12}>
                <TextField fullWidth label="Puesto" placeholder="Tu cargo en la empresa" />
              </Grid>
            </Grid>
          )}

          {/* Step 2: Products / Services */}
          {activeStep === 1 && (
            <Box
              sx={{
                p: 4,
                border: '2px dashed',
                borderColor: 'grey.300',
                borderRadius: 2,
                textAlign: 'center',
                color: 'text.secondary',
                minHeight: 250,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Box>
                <ShoppingCartIcon sx={{ fontSize: 48, mb: 2, color: 'grey.400' }} />
                <Typography variant="body1">
                  Selector de productos y servicios — Fase 1 MVP
                </Typography>
                <Typography variant="body2" sx={{ mt: 1 }}>
                  Aqui podras seleccionar de nuestro catalogo de laboratorio,
                  seguridad industrial y tratamiento de agua.
                </Typography>
              </Box>
            </Box>
          )}

          {/* Step 3: Details */}
          {activeStep === 2 && (
            <Grid container spacing={3}>
              <Grid xs={12}>
                <TextField
                  fullWidth
                  multiline
                  rows={4}
                  label="Descripcion del requerimiento"
                  placeholder="Describe los productos o servicios que necesitas, cantidades, especificaciones, etc."
                />
              </Grid>
              <Grid xs={12} md={6}>
                <TextField fullWidth label="Fecha requerida de entrega" placeholder="DD/MM/AAAA" />
              </Grid>
              <Grid xs={12} md={6}>
                <TextField fullWidth label="Presupuesto estimado (opcional)" placeholder="$0.00 MXN" />
              </Grid>
              <Grid xs={12}>
                <TextField
                  fullWidth
                  multiline
                  rows={2}
                  label="Comentarios adicionales"
                  placeholder="Cualquier informacion adicional relevante"
                />
              </Grid>
            </Grid>
          )}

          {/* Navigation Buttons */}
          <Stack direction="row" justifyContent="space-between" sx={{ mt: 4 }}>
            <Button variant="outlined" onClick={handleBack} disabled={activeStep === 0}>
              Anterior
            </Button>
            <Button variant="contained" onClick={handleNext}>
              {activeStep === steps.length - 1 ? 'Enviar cotizacion' : 'Siguiente'}
            </Button>
          </Stack>
        </CardContent>
      </Card>
    </Container>
  );
}
