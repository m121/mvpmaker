import React from "react"
import styled from "styled-components"

import { Section, Container } from "../global"

const Privacidad = () => (
  <Section id="features">
      <StyledContainer>
     <SectionTitle>Política de privacidad</SectionTitle>
     <FeatureTitle>DECLARACIÓN DE PRIVACIDAD</FeatureTitle>
     
     <Subtitle>SECCIÓN 1 - ¿QUÉ HACEMOS CON TU INFORMACIÓN?</Subtitle>
     <FeatureText>
     Cuando un servicio de nuestra plataforma, como parte del proceso de compra venta, nosotros recolectamos la información personal que nos

das tales como nombre, celular y correo electrónico.

Cuando navegas en nuestra plataforma, también recibimos de manera automática la dirección de protocolo de internet de tu computadora (IP)

con el fin de proporcionarnos información que nos ayuda a conocer acerca de su navegador y sistema operativo.

Email marketing (Si es aplicable): Con tu permiso, podremos enviarte correos electrónicos acerca de nuestra plataforma, nuevos productos y otras actualizaciones.


<Subtitle>SECTION 2 - CONSENTIMIENTO</Subtitle>

<strong>¿Cómo obtienen mi consentimiento?</strong>

Cuando nos provees tu información personal para completar una transacción, verificar tu tarjeta de crédito, crear una órden,  hacer una devolución, implicamos que aceptas la recolección y uso por esa razón específica solamente.

Si te pedimos tu información personal por una razón secundaria, como marketing, te pediremos directame tu expreso consentimiento, o te daremos la oportunidad de negarte.

<strong>¿Cómo puedo anular mi consentimiento?</strong>

Si luego de haber aceptado cambias de opinión, puedes anular tu consentimiento para que te contactemos, por la recolección, uso o divulgación de tu información, en cualquier momento, contactándonos a mateo.perez.salazar@gmail.com o escribiéndonos a: MVP Maker Carrera 15 #134-21, Bogotá DC, DC, 110121, Colombia


<Subtitle>SECCIÓN 3 - DIVULGACIÓN</Subtitle>

Podemos divulgar tu información personal si se nos requiere por ley o si violas nuestros Términos de Servicio.



<Subtitle>SECCIÓN 4 - SEVICIOS DE TERCERAS PARTES</Subtitle>


En general, los proveedores de terceras partes utilizados por nosotros solo recopilarán, usarán y divulgarán tu información en la medida que sea necesaria para que les permita desempeñar los servicios que nos proveen.

Sin embargo, algunos proveedores de servicios de terceros, tales como pasarelas de pago y otros procesadores de transacciones de pago, tienen sus propias poliíticas de privacidad con respecto a la información que estamos obligados a proporcionarles para las transacciones relacionadas con las compras.

Para estos proveedores, te recomendamos que leas las políticas de privacidad para que puedas entender la manera en que tu información personal será manejada.

En particular, recuerda que algunos proveedores pueden estar ubicados o contar con instalaciones que se encuentran en una jurisdicción diferente a ti o nosotros.  Asique si deseas proceder con una transacción que involucra los servicios de un proveedor a terceros, tu información puede estar sujeta a las leyes de la jurisdicción (jurisdicciones) en que se encuentra el proveedor de servicios o sus instalaciones.

A modo de ejemplo, si te encuentras en Canadá y tu transacción es procesada por una pasarela de pago con sede en Estados Unidos, entonces tu información personal utilizada para completar la transacción puede ser sujeto de divulgación en virtud de la legislación de Estados Unidos, incluyendo la Ley Patriota.

Una vez que abandonas el sitio web de nuestra plataforma o te rediriges a un sitio o aplicación de terceros, ya no estás siendo regulados por la presente Política de Privacidad o los Términos de Servicio de nuestra página web.

<strong>Enlaces</strong>

Cuando haces clic en enlaces de nuestra plataforma, puede que seas redirigido fuera de nuestro sitio.  No somos reponsables por las prácticas de privacidad de otros sitios y te recomendamos leer sus normas de privacidad.


<Subtitle>SECCIÓN 5 - SEGURIDAD</Subtitle>

Para proteger tu información personal, tomamos precauciones razonables y seguimos las mejores prácticas de la industria para asegurarnos de que no haya pérdida de manera inapropiada, mal uso, acceso, divulgación, alteración o destrucción de la misma.

SI nos proporcionas la información de tu tarjeta de crédito, dicha información es encriptada mediante la tecnología Secure Socket Layer (SSL) y se almacena con un cifrado AES-256.  Aunque ningún método de transmisión a través de Internet o de almacenamiento electrónico es 100% seguro, seguimos todos los requisitos de PCI-DSS e implementamos normas adicionales aceptadas por la industria.




<Subtitle>SECCIÓN 6 - EDAD DE CONSENTIMIENTO</Subtitle>

Al utilizar este sitio, declaras que tienes al menos la mayoría de edad en tu estado o provincia de residencia, o que tienes la mayoría de edad en tu estado o provincia de residencia y que nos has dado tu consentimiento para permitir que cualquiera de tus dependientes menores use este sitio.


<Subtitle>SECCIÓN 7 - CAMBIOS A ESTA POLÍTICA DE PRIVACIDAD</Subtitle>

Nos reservamos el derecho de modificar esta política de privacidad en cualquier momento, asique por favor revísala frecuentemente.  Cambios y aclaraciones entrarán en vigencia inmediatamente después de su publicación en el sitio web.  Si hacemos cambios materiales a esta política, notificaremos aquí que ha sido actualizada, por lo que cual estás enterado de qué información recopilamos, cómo y bajo qué circunstancias, si las hubiere, la utilizamos y/o divulgamos.

Si nuestra plataforma es adquirida o fusionada con otra empresa, tu información puede ser transferida a los nuevos propietarios, para que podamos seguir vendiéndote productos.



<Subtitle>PREGUNTAS E INFORMACIÓN DE CONTACTO</Subtitle>

Si quieres: acceder, corregir, enmendar o borrar cualquier información personal que poseamos sobre ti, registrar una queja, o simplemente quieres más información contacta a nuestro Oficial de Cumplimiento de Privacidad mateo.perez.salazar@gmail.com o por correo postal a MVP Maker

[Re: Privacy Compliance Officer]

[Carrera 15 #134-21, Bogotá DC, DC, 110121, Colombia]
     </FeatureText>

</StyledContainer>
  </Section>
)

export default Privacidad

const StyledContainer = styled(Container)``

const SectionTitle = styled.h3`
  color: ${props => props.theme.color.primary};
  display: flex;
  justify-content: center;
  margin: 0 auto 40px;
  text-align: center;
`

const Subtitle = styled.h5`
  font-size: 16px;
  color: ${props => props.theme.color.accent};
  letter-spacing: 0px;
  margin-bottom: 12px;
  text-align: left;
`

const FeaturesGrid = styled.div`
  max-width: 670px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 0px auto;
  grid-column-gap: 40px;
  grid-row-gap: 35px;
  @media (max-width: ${props => props.theme.screen.sm}) {
    grid-template-columns: 1fr;
    padding: 0 64px;
  }
`

const FeatureItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const FeatureTitle = styled.h4`
  color: ${props => props.theme.color.primary};
  font-size: 16px;
  letter-spacing: 0px;
  margin-bottom: 12px;
  text-align: left;
`

const FeatureText = styled.p`
  text-align: left;
`
