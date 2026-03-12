'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
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
  Menu,
  MenuItem,
  Collapse,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { NAV_ITEMS } from '@/lib/constants';

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [anchorEls, setAnchorEls] = useState<Record<string, HTMLElement | null>>({});
  const [mobileExpanded, setMobileExpanded] = useState<Record<string, boolean>>({});
  const muiTheme = useTheme();
  const isMobile = useMediaQuery(muiTheme.breakpoints.down('lg'));

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDropdownOpen = (label: string, event: React.MouseEvent<HTMLElement>) => {
    setAnchorEls((prev) => ({ ...prev, [label]: event.currentTarget }));
  };

  const handleDropdownClose = (label: string) => {
    setAnchorEls((prev) => ({ ...prev, [label]: null }));
  };

  const toggleMobileExpanded = (label: string) => {
    setMobileExpanded((prev) => ({ ...prev, [label]: !prev[label] }));
  };

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        backgroundColor: scrolled ? 'rgba(255,255,255,0.92)' : 'rgba(255,255,255,0.98)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        boxShadow: scrolled
          ? '0 1px 3px rgba(0,0,0,0.06), 0 4px 12px rgba(0,0,0,0.04)'
          : 'none',
        transition: 'background-color 0.3s ease, box-shadow 0.3s ease',
        borderBottom: scrolled ? 'none' : '1px solid rgba(0,0,0,0.04)',
      }}
    >
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{
            justifyContent: 'space-between',
            minHeight: { xs: 64, lg: 76 },
          }}
        >
          {/* Logo */}
          <Link href="/" style={{ display: 'flex', alignItems: 'center', flexShrink: 0 }}>
            <Image
              src="/img/awalab_logo.png"
              width={160}
              height={50}
              alt="AWALab de Mexico"
              style={{ objectFit: 'contain' }}
              priority
            />
          </Link>

          {/* Desktop Navigation - Centered */}
          {!isMobile && (
            <Box
              component="nav"
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 0.5,
                position: 'absolute',
                left: '50%',
                transform: 'translateX(-50%)',
              }}
            >
              {NAV_ITEMS.map((item) => {
                const hasChildren = 'children' in item && item.children && item.children.length > 0;

                if (hasChildren) {
                  const isOpen = Boolean(anchorEls[item.label]);
                  return (
                    <Box key={item.href}>
                      <Button
                        onClick={(e) => handleDropdownOpen(item.label, e)}
                        endIcon={
                          <KeyboardArrowDownIcon
                            sx={{
                              fontSize: '1rem !important',
                              transition: 'transform 0.2s ease',
                              transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                            }}
                          />
                        }
                        sx={{
                          color: 'text.primary',
                          fontWeight: 500,
                          fontSize: '0.875rem',
                          textTransform: 'none',
                          letterSpacing: '0.01em',
                          px: 1.5,
                          py: 1,
                          position: 'relative',
                          '&::after': {
                            content: '""',
                            position: 'absolute',
                            bottom: 6,
                            left: '50%',
                            transform: 'translateX(-50%) scaleX(0)',
                            width: '60%',
                            height: '2px',
                            backgroundColor: 'primary.main',
                            transition: 'transform 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
                            transformOrigin: 'center',
                          },
                          '&:hover': {
                            backgroundColor: 'transparent',
                            color: 'primary.main',
                            '&::after': {
                              transform: 'translateX(-50%) scaleX(1)',
                            },
                          },
                        }}
                      >
                        {item.label}
                      </Button>
                      <Menu
                        anchorEl={anchorEls[item.label]}
                        open={isOpen}
                        onClose={() => handleDropdownClose(item.label)}
                        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                        transformOrigin={{ vertical: 'top', horizontal: 'center' }}
                        slotProps={{
                          paper: {
                            elevation: 0,
                            sx: {
                              mt: 1,
                              borderRadius: 2,
                              border: '1px solid rgba(0,0,0,0.06)',
                              boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                              minWidth: 200,
                              overflow: 'visible',
                              '&::before': {
                                content: '""',
                                display: 'block',
                                position: 'absolute',
                                top: 0,
                                left: '50%',
                                width: 10,
                                height: 10,
                                bgcolor: 'background.paper',
                                transform: 'translateX(-50%) translateY(-50%) rotate(45deg)',
                                borderLeft: '1px solid rgba(0,0,0,0.06)',
                                borderTop: '1px solid rgba(0,0,0,0.06)',
                                zIndex: 0,
                              },
                            },
                          },
                        }}
                      >
                        {/* Parent link */}
                        <MenuItem
                          component={Link}
                          href={item.href}
                          onClick={() => handleDropdownClose(item.label)}
                          sx={{
                            fontSize: '0.875rem',
                            fontWeight: 600,
                            color: 'primary.main',
                            py: 1,
                            px: 2.5,
                            '&:hover': { backgroundColor: 'rgba(30,74,113,0.04)' },
                          }}
                        >
                          Ver todo
                        </MenuItem>
                        {item.children!.map((child) => (
                          <MenuItem
                            key={child.href}
                            component={Link}
                            href={child.href}
                            onClick={() => handleDropdownClose(item.label)}
                            sx={{
                              fontSize: '0.875rem',
                              color: 'text.secondary',
                              py: 1,
                              px: 2.5,
                              transition: 'all 0.15s ease',
                              '&:hover': {
                                backgroundColor: 'rgba(30,74,113,0.04)',
                                color: 'primary.main',
                                pl: 3,
                              },
                            }}
                          >
                            {child.label}
                          </MenuItem>
                        ))}
                      </Menu>
                    </Box>
                  );
                }

                return (
                  <Button
                    key={item.href}
                    component={Link}
                    href={item.href}
                    sx={{
                      color: 'text.primary',
                      fontWeight: 500,
                      fontSize: '0.875rem',
                      textTransform: 'none',
                      letterSpacing: '0.01em',
                      px: 1.5,
                      py: 1,
                      position: 'relative',
                      '&::after': {
                        content: '""',
                        position: 'absolute',
                        bottom: 6,
                        left: '50%',
                        transform: 'translateX(-50%) scaleX(0)',
                        width: '60%',
                        height: '2px',
                        backgroundColor: 'primary.main',
                        transition: 'transform 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
                        transformOrigin: 'center',
                      },
                      '&:hover': {
                        backgroundColor: 'transparent',
                        color: 'primary.main',
                        '&::after': {
                          transform: 'translateX(-50%) scaleX(1)',
                        },
                      },
                    }}
                  >
                    {item.label}
                  </Button>
                );
              })}
            </Box>
          )}

          {/* Desktop CTA */}
          {!isMobile && (
            <Button
              component={Link}
              href="/cotizacion"
              variant="contained"
              disableElevation
              sx={{
                backgroundColor: 'primary.main',
                color: '#fff',
                fontWeight: 600,
                fontSize: '0.875rem',
                textTransform: 'none',
                borderRadius: '50px',
                px: 3,
                py: 1,
                letterSpacing: '0.02em',
                flexShrink: 0,
                transition: 'all 0.25s ease',
                '&:hover': {
                  backgroundColor: 'primary.dark',
                  transform: 'translateY(-1px)',
                  boxShadow: '0 4px 14px rgba(30,74,113,0.3)',
                },
              }}
            >
              Cotizacion
            </Button>
          )}

          {/* Mobile Menu Button */}
          {isMobile && (
            <IconButton
              onClick={() => setMobileOpen(true)}
              aria-label="Abrir menu"
              sx={{
                color: 'primary.main',
                border: '1px solid rgba(30,74,113,0.15)',
                borderRadius: 2,
                p: 0.8,
              }}
            >
              <MenuIcon />
            </IconButton>
          )}

          {/* Mobile Full-Screen Drawer */}
          <Drawer
            anchor="right"
            open={mobileOpen}
            onClose={() => setMobileOpen(false)}
            PaperProps={{
              sx: {
                width: '100%',
                maxWidth: '100%',
                backgroundColor: '#fff',
              },
            }}
          >
            {/* Drawer Header */}
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                px: 3,
                py: 2,
                borderBottom: '1px solid rgba(0,0,0,0.06)',
              }}
            >
              <Image
                src="/img/awalab_logo.png"
                width={130}
                height={40}
                alt="AWALab de Mexico"
                style={{ objectFit: 'contain' }}
              />
              <IconButton
                onClick={() => setMobileOpen(false)}
                aria-label="Cerrar menu"
                sx={{
                  color: 'text.secondary',
                  border: '1px solid rgba(0,0,0,0.08)',
                  borderRadius: 2,
                  p: 0.8,
                }}
              >
                <CloseIcon />
              </IconButton>
            </Box>

            {/* Drawer Nav Items */}
            <List sx={{ px: 1, pt: 2 }}>
              {NAV_ITEMS.map((item) => {
                const hasChildren = 'children' in item && item.children && item.children.length > 0;

                if (hasChildren) {
                  const isExpanded = Boolean(mobileExpanded[item.label]);
                  return (
                    <Box key={item.href}>
                      <ListItem disablePadding>
                        <ListItemButton
                          onClick={() => toggleMobileExpanded(item.label)}
                          sx={{
                            py: 1.5,
                            px: 2.5,
                            borderRadius: 2,
                            mx: 1,
                            '&:hover': { backgroundColor: 'rgba(30,74,113,0.04)' },
                          }}
                        >
                          <ListItemText
                            primary={item.label}
                            primaryTypographyProps={{
                              fontWeight: 500,
                              fontSize: '1rem',
                              color: 'text.primary',
                            }}
                          />
                          {isExpanded ? (
                            <ExpandLessIcon sx={{ color: 'text.secondary', fontSize: '1.2rem' }} />
                          ) : (
                            <ExpandMoreIcon sx={{ color: 'text.secondary', fontSize: '1.2rem' }} />
                          )}
                        </ListItemButton>
                      </ListItem>
                      <Collapse in={isExpanded} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                          <ListItem disablePadding>
                            <ListItemButton
                              component={Link}
                              href={item.href}
                              onClick={() => setMobileOpen(false)}
                              sx={{
                                py: 1,
                                pl: 5,
                                pr: 2.5,
                                mx: 1,
                                borderRadius: 1.5,
                                '&:hover': { backgroundColor: 'rgba(30,74,113,0.04)' },
                              }}
                            >
                              <ListItemText
                                primary="Ver todo"
                                primaryTypographyProps={{
                                  fontWeight: 600,
                                  fontSize: '0.875rem',
                                  color: 'primary.main',
                                }}
                              />
                            </ListItemButton>
                          </ListItem>
                          {item.children!.map((child) => (
                            <ListItem key={child.href} disablePadding>
                              <ListItemButton
                                component={Link}
                                href={child.href}
                                onClick={() => setMobileOpen(false)}
                                sx={{
                                  py: 1,
                                  pl: 5,
                                  pr: 2.5,
                                  mx: 1,
                                  borderRadius: 1.5,
                                  '&:hover': { backgroundColor: 'rgba(30,74,113,0.04)' },
                                }}
                              >
                                <ListItemText
                                  primary={child.label}
                                  primaryTypographyProps={{
                                    fontSize: '0.875rem',
                                    color: 'text.secondary',
                                  }}
                                />
                              </ListItemButton>
                            </ListItem>
                          ))}
                        </List>
                      </Collapse>
                    </Box>
                  );
                }

                return (
                  <ListItem key={item.href} disablePadding>
                    <ListItemButton
                      component={Link}
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      sx={{
                        py: 1.5,
                        px: 2.5,
                        borderRadius: 2,
                        mx: 1,
                        '&:hover': { backgroundColor: 'rgba(30,74,113,0.04)' },
                      }}
                    >
                      <ListItemText
                        primary={item.label}
                        primaryTypographyProps={{
                          fontWeight: 500,
                          fontSize: '1rem',
                          color: 'text.primary',
                        }}
                      />
                    </ListItemButton>
                  </ListItem>
                );
              })}

              {/* Mobile CTA */}
              <ListItem sx={{ mt: 3, px: 2.5 }}>
                <Button
                  component={Link}
                  href="/cotizacion"
                  variant="contained"
                  disableElevation
                  fullWidth
                  onClick={() => setMobileOpen(false)}
                  sx={{
                    backgroundColor: 'primary.main',
                    color: '#fff',
                    fontWeight: 600,
                    fontSize: '1rem',
                    textTransform: 'none',
                    borderRadius: '50px',
                    py: 1.5,
                    '&:hover': {
                      backgroundColor: 'primary.dark',
                    },
                  }}
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
