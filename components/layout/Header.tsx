'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  AppBar,
  Toolbar,
  Box,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Container,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { NAV_ITEMS, SITE_NAME } from '@/lib/constants';

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const muiTheme = useTheme();
  const isMobile = useMediaQuery(muiTheme.breakpoints.down('lg'));

  return (
    <AppBar position="sticky" elevation={0}>
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ justifyContent: 'space-between', minHeight: 72 }}>
          {/* Logo */}
          <Link href="/" style={{ display: 'flex', alignItems: 'center' }}>
            <Box
              component="span"
              sx={{
                fontFamily: '"Brother", sans-serif',
                fontWeight: 700,
                fontSize: '1.5rem',
                color: 'primary.main',
                letterSpacing: '-0.02em',
              }}
            >
              {SITE_NAME}
            </Box>
          </Link>

          {/* Desktop Navigation */}
          {!isMobile && (
            <Box component="nav" sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
              {NAV_ITEMS.map((item) => (
                <Button
                  key={item.href}
                  component={Link}
                  href={item.href}
                  sx={{
                    color: 'text.primary',
                    fontWeight: 500,
                    fontSize: '0.9rem',
                    '&:hover': { color: 'primary.main', backgroundColor: 'transparent' },
                  }}
                >
                  {item.label}
                </Button>
              ))}
              <Button
                component={Link}
                href="/cotizacion"
                variant="contained"
                color="primary"
                sx={{ ml: 2 }}
              >
                Solicitar Cotizacion
              </Button>
            </Box>
          )}

          {/* Mobile Menu Button */}
          {isMobile && (
            <IconButton
              onClick={() => setMobileOpen(true)}
              aria-label="Abrir menu"
              sx={{ color: 'primary.main' }}
            >
              <MenuIcon />
            </IconButton>
          )}

          {/* Mobile Drawer */}
          <Drawer
            anchor="right"
            open={mobileOpen}
            onClose={() => setMobileOpen(false)}
            PaperProps={{ sx: { width: '80%', maxWidth: 360 } }}
          >
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: 1 }}>
              <IconButton onClick={() => setMobileOpen(false)} aria-label="Cerrar menu">
                <CloseIcon />
              </IconButton>
            </Box>
            <List>
              {NAV_ITEMS.map((item) => (
                <ListItem key={item.href} disablePadding>
                  <ListItemButton
                    component={Link}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                  >
                    <ListItemText primary={item.label} />
                  </ListItemButton>
                </ListItem>
              ))}
              <ListItem sx={{ mt: 2, px: 2 }}>
                <Button
                  component={Link}
                  href="/cotizacion"
                  variant="contained"
                  color="primary"
                  fullWidth
                  onClick={() => setMobileOpen(false)}
                >
                  Solicitar Cotizacion
                </Button>
              </ListItem>
            </List>
          </Drawer>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
