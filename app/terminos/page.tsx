import { Metadata } from 'next';
import { Box, Container, Typography } from '@mui/material';
import { generatePageMetadata } from '@/lib/seo';

export const metadata: Metadata = generatePageMetadata({
  title: 'Terminos y Condiciones',
  description:
    'Terminos y condiciones comerciales de Awalab de Mexico S.A. de C.V. para la venta de equipo de laboratorio, seguridad industrial y tratamiento de agua.',
  canonical: '/terminos',
  noIndex: false,
});

const sectionStyle = { mb: 4 };
const headingStyle = { mb: 1.5, fontWeight: 600 };
const bodyStyle = { color: 'text.secondary', lineHeight: 1.8, mb: 2 };

export default function TerminosPage() {
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
            Terminos y Condiciones
          </Typography>
          <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.75)' }}>
            Ultima actualizacion: 11 de marzo de 2026
          </Typography>
        </Container>
      </Box>

      {/* Content */}
      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
        {/* General */}
        <Box sx={sectionStyle}>
          <Typography variant="h4" sx={headingStyle}>
            1. Disposiciones generales
          </Typography>
          <Typography variant="body1" sx={bodyStyle}>
            Los presentes terminos y condiciones (en adelante &quot;Terminos&quot;) regulan la
            relacion comercial entre Awalab de Mexico S.A. de C.V. (en adelante &quot;Awalab&quot;),
            con domicilio en Tula de Allende, Hidalgo, Mexico, y cualquier persona fisica o moral
            (en adelante &quot;Cliente&quot;) que adquiera productos o servicios a traves de
            nuestros canales de venta.
          </Typography>
          <Typography variant="body1" sx={bodyStyle}>
            Al realizar un pedido o solicitar una cotizacion, el Cliente acepta integramente los
            presentes Terminos. Awalab se reserva el derecho de modificar estos Terminos en
            cualquier momento, siendo la version vigente la publicada en este sitio web.
          </Typography>
        </Box>

        {/* Orders */}
        <Box sx={sectionStyle}>
          <Typography variant="h4" sx={headingStyle}>
            2. Pedidos y cotizaciones
          </Typography>
          <Typography variant="body1" sx={bodyStyle}>
            Las cotizaciones emitidas por Awalab tienen una vigencia de 15 dias naturales a
            partir de su fecha de emision, salvo que se indique expresamente un periodo
            diferente. Los precios cotizados estan sujetos a disponibilidad de inventario y
            a la confirmacion por parte de nuestros proveedores.
          </Typography>
          <Typography variant="body1" sx={bodyStyle}>
            Un pedido se considerara confirmado unicamente cuando Awalab emita una orden de
            venta y el Cliente haya realizado el pago correspondiente o se haya acordado una
            linea de credito previamente autorizada.
          </Typography>
        </Box>

        {/* Pricing */}
        <Box sx={sectionStyle}>
          <Typography variant="h4" sx={headingStyle}>
            3. Precios y formas de pago
          </Typography>
          <Typography variant="body1" sx={bodyStyle}>
            Todos los precios estan expresados en pesos mexicanos (MXN) mas el Impuesto al
            Valor Agregado (IVA) vigente, salvo que se indique lo contrario en la cotizacion.
            Para productos importados, los precios pueden estar sujetos a variaciones en el
            tipo de cambio y aranceles aplicables.
          </Typography>
          <Typography variant="body1" sx={bodyStyle}>
            Las formas de pago aceptadas incluyen: transferencia bancaria, deposito en cuenta,
            cheque certificado y tarjeta de credito empresarial. Los pagos con cheque estan
            sujetos a verificacion y cobro efectivo. El credito comercial sera otorgado
            exclusivamente a clientes previa evaluacion y autorizacion por parte de Awalab.
          </Typography>
        </Box>

        {/* Shipping */}
        <Box sx={sectionStyle}>
          <Typography variant="h4" sx={headingStyle}>
            4. Envios y entregas
          </Typography>
          <Typography variant="body1" sx={bodyStyle}>
            Los tiempos de entrega son estimados y dependen de la disponibilidad del producto,
            la ubicacion del destino y las condiciones logisticas vigentes. Awalab hara su
            mejor esfuerzo por cumplir con los tiempos de entrega comprometidos, sin embargo,
            no sera responsable por retrasos causados por caso fortuito o fuerza mayor.
          </Typography>
          <Typography variant="body1" sx={bodyStyle}>
            Los gastos de envio corren por cuenta del Cliente, salvo acuerdo previo en
            contrario. El riesgo de perdida o dano de la mercancia se transfiere al Cliente
            al momento de la entrega al transportista. Para envios que requieran condiciones
            especiales de manejo (cadena de frio, materiales peligrosos, etc.), se aplicaran
            cargos adicionales.
          </Typography>
        </Box>

        {/* Returns */}
        <Box sx={sectionStyle}>
          <Typography variant="h4" sx={headingStyle}>
            5. Devoluciones y cancelaciones
          </Typography>
          <Typography variant="body1" sx={bodyStyle}>
            Las solicitudes de devolucion deberan realizarse dentro de los 5 dias habiles
            siguientes a la recepcion del producto. Solo se aceptaran devoluciones de productos
            que se encuentren en su empaque original, sin uso y en perfecto estado.
          </Typography>
          <Typography variant="body1" sx={bodyStyle}>
            No se aceptaran devoluciones de reactivos quimicos, productos perecederos, productos
            sobre pedido o fabricados a medida, ni productos cuyo empaque haya sido abierto o
            alterado. Las cancelaciones de pedidos confirmados podran generar un cargo por
            gastos administrativos de hasta el 15% del valor del pedido.
          </Typography>
        </Box>

        {/* Warranties */}
        <Box sx={sectionStyle}>
          <Typography variant="h4" sx={headingStyle}>
            6. Garantias
          </Typography>
          <Typography variant="body1" sx={bodyStyle}>
            Los productos comercializados por Awalab cuentan con la garantia otorgada por el
            fabricante. Los periodos de garantia varian segun el producto y la marca, y seran
            informados al momento de la venta. La garantia cubre exclusivamente defectos de
            fabricacion bajo condiciones normales de uso.
          </Typography>
          <Typography variant="body1" sx={bodyStyle}>
            La garantia no cubre danos causados por mal uso, negligencia, modificaciones no
            autorizadas, voltaje incorrecto, exposicion a condiciones ambientales inadecuadas
            o desgaste natural. Para hacer valida la garantia, el Cliente debera presentar su
            factura de compra y contactar a nuestro departamento de soporte tecnico.
          </Typography>
        </Box>

        {/* Limitation of Liability */}
        <Box sx={sectionStyle}>
          <Typography variant="h4" sx={headingStyle}>
            7. Limitacion de responsabilidad
          </Typography>
          <Typography variant="body1" sx={bodyStyle}>
            Awalab no sera responsable por danos indirectos, incidentales, especiales o
            consecuentes que resulten del uso o la imposibilidad de uso de los productos
            adquiridos, incluyendo pero no limitado a perdida de datos, interrupcion de
            operaciones, perdida de ganancias o danos a otros bienes.
          </Typography>
          <Typography variant="body1" sx={bodyStyle}>
            La responsabilidad maxima de Awalab ante cualquier reclamacion no excedera el monto
            total pagado por el Cliente por el producto o servicio objeto de la reclamacion.
            Las especificaciones tecnicas, imagenes y descripciones de productos son
            proporcionadas por los fabricantes y pueden estar sujetas a cambios sin previo aviso.
          </Typography>
        </Box>

        {/* Jurisdiction */}
        <Box sx={sectionStyle}>
          <Typography variant="h4" sx={headingStyle}>
            8. Jurisdiccion y ley aplicable
          </Typography>
          <Typography variant="body1" sx={bodyStyle}>
            Los presentes Terminos se rigen e interpretan conforme a las leyes vigentes de los
            Estados Unidos Mexicanos. Para la interpretacion, cumplimiento y ejecucion de los
            presentes Terminos, las partes se someten expresamente a la jurisdiccion de los
            tribunales competentes del Estado de Hidalgo, Mexico, renunciando a cualquier otro
            fuero que pudiera corresponderles por razon de su domicilio presente o futuro.
          </Typography>
        </Box>

        {/* Contact */}
        <Box sx={sectionStyle}>
          <Typography variant="h4" sx={headingStyle}>
            9. Contacto
          </Typography>
          <Typography variant="body1" sx={bodyStyle}>
            Para cualquier duda, aclaracion o reclamacion relacionada con estos Terminos y
            Condiciones, puede comunicarse con nosotros a traves de nuestros canales de atencion
            al cliente disponibles en la seccion de Contacto de este sitio web.
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
