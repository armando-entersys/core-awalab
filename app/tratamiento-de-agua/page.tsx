import { Metadata } from 'next';
import CompressOutlinedIcon from '@mui/icons-material/CompressOutlined';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import WaterDropOutlinedIcon from '@mui/icons-material/WaterDropOutlined';
import WavesOutlinedIcon from '@mui/icons-material/WavesOutlined';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import SpeedOutlinedIcon from '@mui/icons-material/SpeedOutlined';
import { generatePageMetadata } from '@/lib/seo';
import { JsonLd } from '@/components/seo/JsonLd';
import { BUSINESS_LINES } from '@/lib/constants';
import { BusinessLinePage } from '@/components/pages/BusinessLinePage';

export const metadata: Metadata = generatePageMetadata({
  title: 'Tratamiento de Agua',
  description:
    'Sistemas de tratamiento de agua: PTAR, osmosis inversa, suavizadores, dosificadores. Marcas IWAKI, TRUWATER, CLACK, HYDRANAUTICS. Registro CONAGUA.',
  canonical: '/tratamiento-de-agua',
  keywords: [
    'tratamiento de agua',
    'PTAR industrial',
    'osmosis inversa industrial',
    'solucion tratamiento agua',
  ],
});

const aguaLine = BUSINESS_LINES.find((l) => l.id === 'tratamiento-de-agua')!;

const categories = [
  {
    name: 'Bombas dosificadoras',
    slug: 'bombas-dosificadoras',
    count: 20,
    icon: <CompressOutlinedIcon sx={{ fontSize: 24 }} />,
    description: 'Bombas de diafragma y peristalticas para dosificacion precisa de quimicos.',
  },
  {
    name: 'Osmosis inversa',
    slug: 'osmosis-inversa',
    count: 12,
    icon: <FilterAltOutlinedIcon sx={{ fontSize: 24 }} />,
    description: 'Sistemas RO industriales y comerciales con membranas de alta eficiencia.',
  },
  {
    name: 'Suavizadores',
    slug: 'suavizadores',
    count: 15,
    icon: <WaterDropOutlinedIcon sx={{ fontSize: 24 }} />,
    description: 'Suavizadores automaticos de agua con valvulas Clack y resinas de alta capacidad.',
  },
  {
    name: 'Filtros industriales',
    slug: 'filtros',
    count: 30,
    icon: <WavesOutlinedIcon sx={{ fontSize: 24 }} />,
    description: 'Filtros multimedia, carbon activado y cartuchos para remocion de solidos.',
  },
  {
    name: 'Sistemas UV',
    slug: 'uv',
    count: 10,
    icon: <WbSunnyOutlinedIcon sx={{ fontSize: 24 }} />,
    description: 'Desinfeccion ultravioleta para eliminacion de bacterias y virus sin quimicos.',
  },
  {
    name: 'Instrumentacion',
    slug: 'instrumentacion',
    count: 25,
    icon: <SpeedOutlinedIcon sx={{ fontSize: 24 }} />,
    description: 'Sensores, controladores y medidores en linea para monitoreo continuo de agua.',
  },
];

const stats = [
  { value: 6, suffix: '', label: 'Categorias' },
  { value: 112, suffix: '+', label: 'Productos' },
  { value: 4, suffix: '', label: 'Marcas especializadas' },
  { value: 25, suffix: '+', label: 'Anos con CONAGUA' },
];

export default function AguaPage() {
  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'CollectionPage',
          name: 'Tratamiento de Agua',
          description: 'Sistemas de tratamiento de agua industrial y municipal',
          url: 'https://awalabdemexico.entersys.mx/tratamiento-de-agua',
        }}
      />
      <BusinessLinePage
        title="Tratamiento de Agua"
        subtitle={`${aguaLine.description}. Soluciones integrales con registro CONAGUA para industria, municipios y comercio.`}
        heroImage="/img/hero/hero-agua.png"
        heroAlt="Sistemas de tratamiento de agua industrial"
        categories={categories}
        brands={aguaLine.brands}
        stats={stats}
        brandsTitle="Marcas de Tratamiento de Agua"
        brandsSubtitle="Equipos y componentes de los fabricantes mas reconocidos del sector hidrico"
        ctaTitle="¿Necesitas una solucion de agua?"
        ctaDescription="Disenamos, instalamos y damos mantenimiento a sistemas de tratamiento de agua."
        ctaPrimaryHref="/servicios/ptar"
        ctaPrimaryLabel="Ver servicio PTAR"
        ctaSecondaryHref="/cotizacion"
        ctaSecondaryLabel="Solicitar cotizacion"
      />
    </>
  );
}
