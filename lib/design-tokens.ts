/**
 * Design tokens for Awalab IA web — B2B industrial, professional tone.
 *
 * Principles:
 * - Restrained palette: navy + one accent, no rainbow
 * - Text-first hierarchy: headings do the work, icons are secondary
 * - High contrast buttons: always legible, no white-on-light
 * - Generous whitespace, tight type scale
 */

/* ── Colors ────────────────────────────────────────────── */

export const colors = {
  // Brand
  navy: '#1E4A71',
  navyDark: '#0D1B2A',
  navyDeep: '#153554',
  accent: '#0A87C6',
  accentLight: '#E8F4FD',

  // Neutrals
  white: '#FFFFFF',
  offWhite: '#F8FAFB',
  gray50: '#F1F5F9',
  gray100: '#E2E8F0',
  gray300: '#CBD5E1',
  gray500: '#64748B',
  gray700: '#334155',
  gray900: '#0F172A',

  // Semantic
  text: '#1A1A2E',
  textSecondary: '#475569',
  textMuted: '#94A3B8',
  border: 'rgba(0,0,0,0.06)',
  borderHover: 'rgba(0,0,0,0.12)',
} as const;

/* ── Buttons ───────────────────────────────────────────── */

/** Primary CTA — high contrast, always readable */
export const btnPrimary = {
  backgroundColor: colors.navy,
  color: colors.white,
  fontWeight: 600,
  fontSize: '0.95rem',
  px: 4,
  py: 1.5,
  borderRadius: '10px',
  textTransform: 'none' as const,
  letterSpacing: '0.01em',
  boxShadow: '0 2px 8px rgba(30,74,113,0.25)',
  '&:hover': {
    backgroundColor: colors.navyDeep,
    boxShadow: '0 4px 16px rgba(30,74,113,0.35)',
    transform: 'translateY(-1px)',
  },
  transition: 'all 0.25s ease',
} as const;

/** Primary CTA on dark backgrounds */
export const btnPrimaryOnDark = {
  backgroundColor: colors.white,
  color: colors.navy,
  fontWeight: 600,
  fontSize: '0.95rem',
  px: 4,
  py: 1.5,
  borderRadius: '10px',
  textTransform: 'none' as const,
  letterSpacing: '0.01em',
  boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
  '&:hover': {
    backgroundColor: colors.gray50,
    boxShadow: '0 4px 16px rgba(0,0,0,0.2)',
    transform: 'translateY(-1px)',
  },
  transition: 'all 0.25s ease',
} as const;

/** Secondary / ghost button */
export const btnSecondary = {
  borderColor: colors.gray300,
  borderWidth: 1.5,
  color: colors.navy,
  fontWeight: 600,
  fontSize: '0.95rem',
  px: 4,
  py: 1.4,
  borderRadius: '10px',
  textTransform: 'none' as const,
  letterSpacing: '0.01em',
  '&:hover': {
    borderColor: colors.navy,
    backgroundColor: 'rgba(30,74,113,0.04)',
    borderWidth: 1.5,
  },
  transition: 'all 0.25s ease',
} as const;

/** Secondary on dark backgrounds */
export const btnSecondaryOnDark = {
  borderColor: 'rgba(255,255,255,0.4)',
  borderWidth: 1.5,
  color: colors.white,
  fontWeight: 600,
  fontSize: '0.95rem',
  px: 4,
  py: 1.4,
  borderRadius: '10px',
  textTransform: 'none' as const,
  letterSpacing: '0.01em',
  '&:hover': {
    borderColor: 'rgba(255,255,255,0.7)',
    backgroundColor: 'rgba(255,255,255,0.08)',
    borderWidth: 1.5,
  },
  transition: 'all 0.25s ease',
} as const;

/* ── Cards ─────────────────────────────────────────────── */

export const card = {
  borderRadius: '16px',
  border: `1px solid ${colors.border}`,
  boxShadow: '0 1px 4px rgba(0,0,0,0.04)',
  transition: 'all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)',
  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: '0 12px 40px rgba(30,74,113,0.08)',
    borderColor: colors.borderHover,
  },
} as const;

/* ── Section spacing ───────────────────────────────────── */

export const section = {
  py: { xs: 8, md: 12 },
} as const;

export const sectionLabel = {
  display: 'block',
  textAlign: 'center' as const,
  color: colors.accent,
  fontWeight: 600,
  letterSpacing: '0.12em',
  mb: 1.5,
  fontSize: '0.78rem',
  textTransform: 'uppercase' as const,
} as const;

export const sectionTitle = {
  textAlign: 'center' as const,
  fontWeight: 700,
  mb: 2,
  fontSize: { xs: '1.6rem', md: '2.25rem' },
  color: colors.text,
  letterSpacing: '-0.02em',
} as const;

export const sectionSubtitle = {
  textAlign: 'center' as const,
  color: colors.textSecondary,
  mb: 7,
  maxWidth: 560,
  mx: 'auto',
  lineHeight: 1.7,
  fontSize: '0.95rem',
} as const;
