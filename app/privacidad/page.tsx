import { Metadata } from 'next';
import { Box, Container, Typography } from '@mui/material';
import { generatePageMetadata } from '@/lib/seo';

export const metadata: Metadata = generatePageMetadata({
  title: 'Aviso de Privacidad',
  description:
    'Aviso de privacidad de Awalab de Mexico S.A. de C.V. conforme a la Ley Federal de Proteccion de Datos Personales en Posesion de los Particulares (LFPDPPP).',
  canonical: '/privacidad',
  noIndex: false,
});

const sectionStyle = { mb: 4 };
const headingStyle = { mb: 1.5, fontWeight: 600 };
const bodyStyle = { color: 'text.secondary', lineHeight: 1.8, mb: 2 };

export default function PrivacidadPage() {
  return (
    <>
      {/* Hero */}
      <Box
        sx={{
          background: 'linear-gradient(135deg, #1E4A71 0%, #153554 100%)',
          color: '#FFFFFF',
          py: { xs: 6, md: 8 },
        }}
      >
        <Container maxWidth="lg">
          <Typography variant="h1" sx={{ color: '#FFFFFF', mb: 1, fontSize: { xs: '1.75rem', md: '2.5rem' } }}>
            Aviso de Privacidad
          </Typography>
          <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.75)' }}>
            Ultima actualizacion: 11 de marzo de 2026
          </Typography>
        </Container>
      </Box>

      {/* Content */}
      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
        {/* Responsable */}
        <Box sx={sectionStyle}>
          <Typography variant="h4" sx={headingStyle}>
            1. Responsable del tratamiento de datos personales
          </Typography>
          <Typography variant="body1" sx={bodyStyle}>
            Awalab de Mexico S.A. de C.V. (en adelante &quot;Awalab&quot;), con domicilio en Tula de
            Allende, Hidalgo, Mexico, es responsable del tratamiento de sus datos personales
            conforme a la Ley Federal de Proteccion de Datos Personales en Posesion de los
            Particulares (LFPDPPP) y su Reglamento.
          </Typography>
        </Box>

        {/* Data Collected */}
        <Box sx={sectionStyle}>
          <Typography variant="h4" sx={headingStyle}>
            2. Datos personales que recabamos
          </Typography>
          <Typography variant="body1" sx={bodyStyle}>
            Para las finalidades descritas en este aviso de privacidad, podemos recabar las
            siguientes categorias de datos personales:
          </Typography>
          <Typography component="ul" variant="body1" sx={{ ...bodyStyle, pl: 3 }}>
            <li>Datos de identificacion: nombre completo, RFC, razon social.</li>
            <li>Datos de contacto: correo electronico, numero telefonico, direccion postal.</li>
            <li>Datos laborales: puesto, nombre de la empresa, area o departamento.</li>
            <li>Datos comerciales: historial de compras, cotizaciones solicitadas, productos de interes.</li>
            <li>Datos de navegacion: direccion IP, tipo de navegador, paginas visitadas, cookies.</li>
          </Typography>
          <Typography variant="body1" sx={bodyStyle}>
            Awalab no recaba datos personales sensibles (origen racial, estado de salud, creencias
            religiosas, orientacion sexual, datos biometricos u otros de naturaleza similar).
          </Typography>
        </Box>

        {/* Purposes */}
        <Box sx={sectionStyle}>
          <Typography variant="h4" sx={headingStyle}>
            3. Finalidades del tratamiento
          </Typography>
          <Typography variant="body1" sx={bodyStyle}>
            Sus datos personales seran utilizados para las siguientes finalidades primarias,
            necesarias para la relacion juridica con Awalab:
          </Typography>
          <Typography component="ul" variant="body1" sx={{ ...bodyStyle, pl: 3 }}>
            <li>Elaborar y dar seguimiento a cotizaciones y ordenes de compra.</li>
            <li>Facturacion y gestion de cobranza.</li>
            <li>Dar cumplimiento a obligaciones contractuales.</li>
            <li>Brindar soporte tecnico y servicio postventa.</li>
            <li>Atender solicitudes, quejas y sugerencias.</li>
          </Typography>
          <Typography variant="body1" sx={bodyStyle}>
            Adicionalmente, sus datos podran ser utilizados para las siguientes finalidades
            secundarias, las cuales no son necesarias pero nos permiten mejorar nuestro servicio:
          </Typography>
          <Typography component="ul" variant="body1" sx={{ ...bodyStyle, pl: 3 }}>
            <li>Envio de comunicaciones comerciales, promociones y boletines informativos.</li>
            <li>Realizacion de encuestas de satisfaccion.</li>
            <li>Estadisticas y analisis de mercado.</li>
          </Typography>
        </Box>

        {/* Legal Basis */}
        <Box sx={sectionStyle}>
          <Typography variant="h4" sx={headingStyle}>
            4. Fundamento legal
          </Typography>
          <Typography variant="body1" sx={bodyStyle}>
            El tratamiento de sus datos personales se realiza con fundamento en los articulos 6, 8,
            10, 11, 12, 13, 14, 15, 16, 17 y demas aplicables de la Ley Federal de Proteccion de
            Datos Personales en Posesion de los Particulares (LFPDPPP), publicada en el Diario
            Oficial de la Federacion el 5 de julio de 2010, asi como su Reglamento.
          </Typography>
        </Box>

        {/* ARCO Rights */}
        <Box sx={sectionStyle}>
          <Typography variant="h4" sx={headingStyle}>
            5. Derechos ARCO
          </Typography>
          <Typography variant="body1" sx={bodyStyle}>
            Usted tiene derecho a conocer que datos personales tenemos de usted, para que los
            utilizamos y las condiciones del uso que les damos (Acceso). Asimismo, es su derecho
            solicitar la correccion de su informacion personal en caso de que este desactualizada,
            sea inexacta o incompleta (Rectificacion); que la eliminemos de nuestros registros o
            bases de datos cuando considere que la misma no esta siendo utilizada adecuadamente
            (Cancelacion); asi como oponerse al uso de sus datos personales para fines especificos
            (Oposicion).
          </Typography>
          <Typography variant="body1" sx={bodyStyle}>
            Para ejercer cualquiera de los derechos ARCO, usted debera enviar su solicitud al
            correo electronico: <strong>privacidad@awalabdemexico.com</strong>, incluyendo:
          </Typography>
          <Typography component="ul" variant="body1" sx={{ ...bodyStyle, pl: 3 }}>
            <li>Nombre completo del titular y correo electronico para comunicar la respuesta.</li>
            <li>Descripcion clara y precisa de los datos personales respecto de los cuales se busca ejercer alguno de los derechos ARCO.</li>
            <li>Cualquier documento que facilite la localizacion de los datos personales.</li>
          </Typography>
          <Typography variant="body1" sx={bodyStyle}>
            Awalab respondera su solicitud en un plazo maximo de 20 dias habiles contados desde
            la fecha de recepcion de la solicitud, conforme a lo establecido en la LFPDPPP.
          </Typography>
        </Box>

        {/* Cookies */}
        <Box sx={sectionStyle}>
          <Typography variant="h4" sx={headingStyle}>
            6. Uso de cookies y tecnologias de rastreo
          </Typography>
          <Typography variant="body1" sx={bodyStyle}>
            Nuestro sitio web utiliza cookies y otras tecnologias de rastreo para mejorar su
            experiencia de navegacion, identificar sus preferencias y ofrecer contenido
            personalizado. Las cookies son archivos de texto que se almacenan en su dispositivo
            y nos permiten reconocerlo en visitas posteriores.
          </Typography>
          <Typography variant="body1" sx={bodyStyle}>
            Usted puede deshabilitar el uso de cookies a traves de la configuracion de su
            navegador. Sin embargo, esto podria afectar la funcionalidad de algunas secciones
            del sitio web.
          </Typography>
        </Box>

        {/* Changes */}
        <Box sx={sectionStyle}>
          <Typography variant="h4" sx={headingStyle}>
            7. Modificaciones al aviso de privacidad
          </Typography>
          <Typography variant="body1" sx={bodyStyle}>
            Awalab se reserva el derecho de efectuar en cualquier momento modificaciones o
            actualizaciones al presente aviso de privacidad, para la atencion de novedades
            legislativas, politicas internas o nuevos requerimientos para la prestacion de
            nuestros servicios. Dichas modificaciones seran publicadas en nuestro sitio web
            en la seccion de Aviso de Privacidad.
          </Typography>
        </Box>

        {/* Contact */}
        <Box sx={sectionStyle}>
          <Typography variant="h4" sx={headingStyle}>
            8. Contacto
          </Typography>
          <Typography variant="body1" sx={bodyStyle}>
            Si tiene alguna duda o comentario sobre este aviso de privacidad, puede comunicarse
            con nosotros a traves del correo electronico:{' '}
            <strong>privacidad@awalabdemexico.com</strong>.
          </Typography>
          <Typography variant="body1" sx={bodyStyle}>
            Awalab de Mexico S.A. de C.V.<br />
            Tula de Allende, Hidalgo, Mexico
          </Typography>
        </Box>
      </Container>
    </>
  );
}
