import { Metadata } from 'next';
import PanToolOutlinedIcon from '@mui/icons-material/PanToolOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import HardwareOutlinedIcon from '@mui/icons-material/HardwareOutlined';
import DirectionsWalkOutlinedIcon from '@mui/icons-material/DirectionsWalkOutlined';
import AirOutlinedIcon from '@mui/icons-material/AirOutlined';
import HearingOutlinedIcon from '@mui/icons-material/HearingOutlined';
import CheckroomOutlinedIcon from '@mui/icons-material/CheckroomOutlined';
import HealthAndSafetyOutlinedIcon from '@mui/icons-material/HealthAndSafetyOutlined';
import { generatePageMetadata } from '@/lib/seo';
import { JsonLd } from '@/components/seo/JsonLd';
import { BUSINESS_LINES } from '@/lib/constants';
import { BusinessLinePage } from '@/components/pages/BusinessLinePage';

export const metadata: Metadata = generatePageMetadata({
  title: 'Equipo de Seguridad Industrial',
  description:
    'EPP y equipos de seguridad industrial. Marcas: MAPA, GOLDEN EAGLE, JSP, ARMADA, ABUS, DERMACARE. Cumplimiento NOM. Cotiza sin compromiso.',
  canonical: '/seguridad-industrial',
  keywords: [
    'equipo seguridad industrial',
    'epp seguridad industrial',
    'proveedores seguridad industrial',
  ],
});

const segLine = BUSINESS_LINES.find((l) => l.id === 'seguridad-industrial')!;

const categories = [
  {
    name: 'Guantes industriales',
    slug: 'guantes',
    count: 60,
    icon: <PanToolOutlinedIcon sx={{ fontSize: 24 }} />,
    description: 'Guantes de nitrilo, latex, neopreno y anticorte para toda aplicacion industrial.',
  },
  {
    name: 'Lentes de seguridad',
    slug: 'lentes',
    count: 35,
    icon: <VisibilityOutlinedIcon sx={{ fontSize: 24 }} />,
    description: 'Lentes y goggles con proteccion UV, antiempanante y resistencia a impacto.',
  },
  {
    name: 'Cascos',
    slug: 'cascos',
    count: 20,
    icon: <HardwareOutlinedIcon sx={{ fontSize: 24 }} />,
    description: 'Cascos industriales clase E y G con accesorios integrados NOM-115.',
  },
  {
    name: 'Calzado de seguridad',
    slug: 'calzado',
    count: 45,
    icon: <DirectionsWalkOutlinedIcon sx={{ fontSize: 24 }} />,
    description: 'Botas y zapatos dielectricos, antiderrapantes con casquillo de acero.',
  },
  {
    name: 'Proteccion respiratoria',
    slug: 'respiratoria',
    count: 25,
    icon: <AirOutlinedIcon sx={{ fontSize: 24 }} />,
    description: 'Mascarillas, respiradores de media y cara completa con filtros intercambiables.',
  },
  {
    name: 'Proteccion auditiva',
    slug: 'auditiva',
    count: 15,
    icon: <HearingOutlinedIcon sx={{ fontSize: 24 }} />,
    description: 'Tapones y orejeras con nivel de reduccion de ruido NRR certificado.',
  },
  {
    name: 'Ropa de trabajo',
    slug: 'ropa',
    count: 30,
    icon: <CheckroomOutlinedIcon sx={{ fontSize: 24 }} />,
    description: 'Uniformes, overoles y ropa ignifuga para ambientes de alto riesgo.',
  },
  {
    name: 'Arnes y lineas de vida',
    slug: 'altura',
    count: 18,
    icon: <HealthAndSafetyOutlinedIcon sx={{ fontSize: 24 }} />,
    description: 'Sistemas anticaida, arneses de cuerpo completo y lineas de vida retractiles.',
  },
];

const stats = [
  { value: 8, suffix: '', label: 'Categorias EPP' },
  { value: 248, suffix: '+', label: 'Productos' },
  { value: 7, suffix: '', label: 'Marcas certificadas' },
  { value: 100, suffix: '%', label: 'Cumplimiento NOM' },
];

export default function SeguridadPage() {
  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'CollectionPage',
          name: 'Seguridad Industrial',
          description: 'EPP y equipos de seguridad industrial certificados',
          url: 'https://awalabdemexico.entersys.mx/seguridad-industrial',
        }}
      />
      <BusinessLinePage
        title="Seguridad Industrial"
        subtitle={`${segLine.description}. Cumplimiento NOM y certificaciones internacionales para proteger a tu equipo de trabajo.`}
        heroImage="/img/hero/hero-seguridad.png"
        heroAlt="Equipo de seguridad industrial profesional"
        categories={categories}
        brands={segLine.brands}
        stats={stats}
        brandsTitle="Marcas de Seguridad"
        brandsSubtitle="Trabajamos con fabricantes certificados que cumplen las normas mas exigentes"
        ctaTitle="Cotiza tu EPP"
        ctaDescription="Protege a tu equipo con los mejores productos de seguridad industrial. Asesoramos en cumplimiento NOM."
        ctaPrimaryHref="/cotizacion"
        ctaPrimaryLabel="Solicitar cotizacion"
        ctaSecondaryHref="/contacto"
        ctaSecondaryLabel="Contactanos"
      />
    </>
  );
}
