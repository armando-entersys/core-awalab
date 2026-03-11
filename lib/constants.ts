export const SITE_NAME = 'Awalab de Mexico';
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://awalabdemexico.entersys.mx';
export const SITE_DESCRIPTION =
  'Comercializadora industrial especializada en equipo de laboratorio, seguridad industrial y tratamiento de agua. ISO 9001:2015, EMA, CONAGUA.';

export const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '+527762277069';
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER.replace('+', '')}`;

export const COLORS = {
  primary: '#1E4A71',
  secondary: '#0A87C6',
  white: '#FFFFFF',
  textPrimary: '#1A1A2E',
  textSecondary: '#4A5568',
} as const;

export const BUSINESS_LINES = [
  {
    id: 'laboratorio',
    name: 'Laboratorio',
    slug: '/laboratorio',
    description: 'Equipo e insumos para laboratorio de las mejores marcas mundiales',
    icon: 'Science',
    brands: ['HACH', 'XYLEM', 'EISCO', 'MERCK MILLIPORE', 'VELAB', 'Felisa', 'Troemner', 'ATAGO', 'YSI'],
  },
  {
    id: 'seguridad-industrial',
    name: 'Seguridad Industrial',
    slug: '/seguridad-industrial',
    description: 'Equipos de proteccion personal y seguridad para tu industria',
    icon: 'Shield',
    brands: ['MAPA', 'GOLDEN EAGLE', 'BISLEY', 'JSP', 'ARMADA', 'ABUS', 'DERMACARE'],
  },
  {
    id: 'tratamiento-de-agua',
    name: 'Tratamiento de Agua',
    slug: '/tratamiento-de-agua',
    description: 'Sistemas de tratamiento, analisis y plantas PTAR',
    icon: 'Water',
    brands: ['IWAKI', 'TRUWATER', 'CLACK', 'HYDRANAUTICS'],
  },
] as const;

export const CERTIFICATIONS = [
  { name: 'ISO 9001:2015', description: 'Sistema de Gestion de Calidad' },
  { name: 'EMA', description: 'Entidad Mexicana de Acreditacion' },
  { name: 'CONAGUA', description: 'Registro ante la Comision Nacional del Agua' },
] as const;

export const CLIENTS = [
  'CocaCola', 'MercadoLibre', 'Herdez', 'Grupo Mexico', 'Kimberly Clark',
  'BioPappel', 'Grupo Modelo', 'Philip Morris', 'SGS', 'McCormick',
  'ICA', 'Geodis', 'ChemTreat',
] as const;

export const NAV_ITEMS = [
  { label: 'Inicio', href: '/' },
  {
    label: 'Nosotros',
    href: '/nosotros',
    children: [
      { label: 'Historia', href: '/nosotros/historia' },
      { label: 'Equipo', href: '/nosotros/equipo' },
      { label: 'Acreditaciones', href: '/nosotros/acreditaciones' },
    ],
  },
  { label: 'Laboratorio', href: '/laboratorio' },
  { label: 'Seguridad Industrial', href: '/seguridad-industrial' },
  { label: 'Tratamiento de Agua', href: '/tratamiento-de-agua' },
  {
    label: 'Servicios',
    href: '/servicios',
    children: [
      { label: 'PTAR', href: '/servicios/ptar' },
      { label: 'Metrologia', href: '/servicios/metrologia' },
      { label: 'Mantenimiento', href: '/servicios/mantenimiento' },
      { label: 'Consultoria', href: '/servicios/consultoria' },
    ],
  },
  { label: 'Blog', href: '/blog' },
  { label: 'Contacto', href: '/contacto' },
] as const;

export const IMPACT_NUMBERS = [
  { value: 25, suffix: '+', label: 'Anos de experiencia' },
  { value: 100, suffix: 'K+', label: 'Productos disponibles' },
  { value: 20, suffix: '+', label: 'Marcas de clase mundial' },
  { value: 500, suffix: '+', label: 'Clientes satisfechos' },
] as const;
