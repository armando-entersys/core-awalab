import { Metadata } from 'next';
import OpacityOutlinedIcon from '@mui/icons-material/OpacityOutlined';
import SpeedOutlinedIcon from '@mui/icons-material/SpeedOutlined';
import ScienceOutlinedIcon from '@mui/icons-material/ScienceOutlined';
import ScaleOutlinedIcon from '@mui/icons-material/ScaleOutlined';
import BiotechOutlinedIcon from '@mui/icons-material/BiotechOutlined';
import DeviceThermostatOutlinedIcon from '@mui/icons-material/DeviceThermostatOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import BlurOnIcon from '@mui/icons-material/BlurOn';
import LocalDrinkOutlinedIcon from '@mui/icons-material/LocalDrinkOutlined';
import { generatePageMetadata } from '@/lib/seo';
import { JsonLd } from '@/components/seo/JsonLd';
import { BUSINESS_LINES } from '@/lib/constants';
import { BusinessLinePage } from '@/components/pages/BusinessLinePage';

export const metadata: Metadata = generatePageMetadata({
  title: 'Equipo de Laboratorio en Mexico',
  description:
    'Distribuidor autorizado de equipo e insumos para laboratorio. Marcas: HACH, XYLEM, MERCK MILLIPORE, VELAB. ISO 9001, acreditacion EMA. Cotiza sin compromiso.',
  canonical: '/laboratorio',
  keywords: [
    'equipo de laboratorio mexico',
    'material de laboratorio',
    'proveedor equipo laboratorio',
    'reactivos laboratorio',
  ],
});

const labLine = BUSINESS_LINES.find((l) => l.id === 'laboratorio')!;

const categories = [
  {
    name: 'Turbidimetros',
    slug: 'turbidimetros',
    count: 25,
    icon: <OpacityOutlinedIcon sx={{ fontSize: 24 }} />,
    description: 'Medicion precisa de turbidez para control de calidad de agua y procesos.',
  },
  {
    name: 'Medidores de pH',
    slug: 'ph-metros',
    count: 30,
    icon: <SpeedOutlinedIcon sx={{ fontSize: 24 }} />,
    description: 'Equipos portatiles y de mesa para medicion electrometrica de pH.',
  },
  {
    name: 'Reactivos',
    slug: 'reactivos',
    count: 200,
    icon: <ScienceOutlinedIcon sx={{ fontSize: 24 }} />,
    description: 'Reactivos analiticos de grado ACS, HPLC y alta pureza.',
  },
  {
    name: 'Balanzas',
    slug: 'balanzas',
    count: 40,
    icon: <ScaleOutlinedIcon sx={{ fontSize: 24 }} />,
    description: 'Balanzas analiticas y de precision con calibracion certificada.',
  },
  {
    name: 'Microscopios',
    slug: 'microscopios',
    count: 15,
    icon: <BiotechOutlinedIcon sx={{ fontSize: 24 }} />,
    description: 'Microscopios opticos, estereoscopicos y digitales de alta resolucion.',
  },
  {
    name: 'Estufas y Hornos',
    slug: 'estufas-hornos',
    count: 20,
    icon: <DeviceThermostatOutlinedIcon sx={{ fontSize: 24 }} />,
    description: 'Estufas de secado, incubadoras y hornos de mufla para laboratorio.',
  },
  {
    name: 'Agitadores',
    slug: 'agitadores',
    count: 18,
    icon: <SettingsOutlinedIcon sx={{ fontSize: 24 }} />,
    description: 'Agitadores magneticos, orbitales y vortex para mezcla y homogeneizacion.',
  },
  {
    name: 'Espectrofotometros',
    slug: 'espectrofotometros',
    count: 12,
    icon: <BlurOnIcon sx={{ fontSize: 24 }} />,
    description: 'Espectrofotometria UV-Vis para analisis cuantitativo de muestras.',
  },
  {
    name: 'Cristaleria',
    slug: 'cristaleria',
    count: 150,
    icon: <LocalDrinkOutlinedIcon sx={{ fontSize: 24 }} />,
    description: 'Cristaleria volumetrica y general de borosilicato clase A.',
  },
];

const stats = [
  { value: 9, suffix: '', label: 'Categorias' },
  { value: 500, suffix: '+', label: 'Productos' },
  { value: 9, suffix: '', label: 'Marcas lideres' },
  { value: 25, suffix: '+', label: 'Anos de experiencia' },
];

export default function LaboratorioPage() {
  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'CollectionPage',
          name: 'Equipo de Laboratorio',
          description: 'Catalogo completo de equipo e insumos para laboratorio',
          url: 'https://awalabdemexico.entersys.mx/laboratorio',
        }}
      />
      <BusinessLinePage
        title="Equipo de Laboratorio"
        subtitle={`${labLine.description}. Distribuidor autorizado con acreditacion EMA e ISO 9001.`}
        heroImage="/img/hero/hero-laboratorio.png"
        heroAlt="Equipo de laboratorio profesional"
        categories={categories}
        brands={labLine.brands}
        stats={stats}
        brandsTitle="Marcas de Laboratorio"
        brandsSubtitle="Distribuidor autorizado de marcas lideres a nivel mundial"
        ctaTitle="¿Buscas equipo especifico?"
        ctaDescription="Nuestros asesores te ayudan a encontrar el equipo ideal para tu laboratorio. Cotiza sin compromiso."
        ctaPrimaryHref="/cotizacion"
        ctaPrimaryLabel="Solicitar cotizacion"
        ctaSecondaryHref="/contacto"
        ctaSecondaryLabel="Contactanos"
      />
    </>
  );
}
