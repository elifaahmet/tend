import React from 'react';
import styled from 'styled-components'
import { typography, color } from 'styled-system';
import { H1, H2, Paragraph, Image } from '@tend/ui';
import usePrefixedWithBasePath from '../../../hooks/usePrefixedWithBasePath';

import PullQuote from '../../modules/PullQuote';

const FlexLayout = styled.main`
  display: flex;
  flex-direction: column;
`;

const Headline = styled(H1)`
  ${typography};
  ${color};
  line-height: 110%;
  text-transform: uppercase;
  margin-block-start: 0;
  margin-block-end: 0;
  font-weight: bold;
  font-family: 'Pilat Condensed';
`;

const SubHeadline = styled(H2)<{fontSize: string[];}>`
  ${typography};
  ${color};
  display: block;
  line-height: 110%;
  text-transform: uppercase;
  margin-block-start: 0;
  margin-block-end: 0;
  padding-block-start: 5rem;
  font-weight: bold;
  font-family: 'Pilat Condensed';
  border-top: 5px solid #BDFC4C;
`;

const Signature = styled.div`
  margin-block-start: 6rem;
  margin-block-end: 6rem;
  text-align: center;

  img {
    max-width: 100%;
  }

  @media (min-width: 836px) {
    img {
      max-width: 22rem;
    }
  }
`;

const Article = styled.div`
  margin-block-end: 3.5rem;
`;

const Body = () => {
  const signatureImageUrl = usePrefixedWithBasePath('/images/james-signature.png');

  return (
    <FlexLayout>

      <Article>
        <Headline fontSize={['2.25rem']} color="white">Panorama</Headline>
        <Paragraph
          variant="b2"
          color="white">
          El objetivo principal del sector financiero es servir de intermediario entre solicitantes de préstamos y ahorradores, e históricamente ha establecido relaciones como asesor y proveedor de capital de manera descendente.
        </Paragraph>
      </Article>

      <Article>
        <PullQuote
          color="white"
          quote="Las finanzas son complejas, pero nosotros te mostraremos el camino.">
            <Paragraph
              variant="b2"
              color="white">
              En la actualidad, la dinámica tradicional está siendo afectada porque existe una desconexión entre el bienestar financiero de las personas y los factores de rentabilidad. Aproximadamente 80% de los estadounidenses viven al día y este es un fenómeno global. No todo el mundo tiene una cuenta bancaria, lo que dificulta la capacidad de ahorro e inversión. Al final, los problemas de la gente son también un problema para los resultados de los bancos convencionales. En consecuencia, estos ofrecen productos que las personas no necesitan (más deuda), se les insiste con comisiones y tipos de interés que pasan desapercibidos, y en general, ofrecen una experiencia poco satisfactoria en comparación con otros sectores. O simplemente no ofrecen nada a favor de las personas. El creciente distanciamiento entre los bancos y los ciudadanos es un síntoma de que el sistema financiero no está avanzando y se encuentra en una etapa bastante atrasada. Para progresar, hay que rediseñar la relación básica entre bancos y particulares.
            </Paragraph>
        </PullQuote>
      </Article>

      <Article>
        <Paragraph
          variant="b2"
          color="white">
          Por otro lado, el sistema se ha encontrado con la frontera de la tecnología financiera, donde la conciencia de los problemas sistémicos es alta, pero el optimismo por un futuro descentralizado y más democrático es mayor. El alcance y el ritmo de la innovación son estimulantes. Muchas de las herramientas que se están creando prometen solucionar grandes problemas y hemos descubierto cómo eliminar a los intermediarios del intercambio de valor a través de las criptomonedas. Hoy en día podemos obtener resultados precisos y personalizados gracias a la inteligencia artificial. Las nuevas tecnologías y los marcos jurídicos y normativos nos permiten conectar las mejores soluciones globales para resolver los problemas de la mejor manera.
        </Paragraph>
      </Article>

      <Article>
        <Paragraph
          variant="b2"
          color="white">
          Si bien esta nueva frontera ofrece un horizonte brillante, también conlleva nuevos riesgos que hay que gestionar y una facilidad de uso que hay que mejorar. La gente cada vez es más consciente de estas nuevas capacidades y su apreciación del valor subyacente es mayor. Sin embargo, su adopción sigue siendo limitada, ya que muchos productos construidos sobre sistemas heredados ofrecen confianza, comodidad y eficiencia. Esta situación cambiará a medida que los nuevos modelos ofrezcan una auténtica mejoría del bienestar financiero.
        </Paragraph>
      </Article>

      <Article>
        <SubHeadline fontSize={['2.25rem']} color="white">Nuestro propósito</SubHeadline>
        <Paragraph
          variant="b2"
          color="white">
          En medio de todo se encuentra Tend, el primer neobanco del mundo que funciona gracias al engranaje de sus miembros.
        </Paragraph>
      </Article>

      <Article>
        <PullQuote
          color="white"
          ruleColor="defaultMagenta"
          quote="Existimos para crear bienestar financiero juntos.">
          <Paragraph
          variant="b2"
          color="white">
            Más que crear otro concepto extremadamente centralizado y abusado por los bancos tradicionales y las grandes tecnologías, queremos activar una comunidad en la que la voz del individuo se amplifique para crear juntos el futuro. Es ahí hacia donde se dirige el mundo y nuestra intención es desempeñar un papel significativo. Nuestro modelo de membresía permite entablar una relación honesta en la que prosperamos brindando una experiencia que la gente valora y en la que contribuye. No hablamos por hablar. Hacemos preguntas en favor de construir un puente más firme con las posibilidades que conlleva la tecnología.
          </Paragraph>
        </PullQuote>
      </Article>

      <Article>
        <SubHeadline fontSize={['2.25rem']} color="white">The Green</SubHeadline>

        <Paragraph
          variant="b2"
          color="white">
          Nuestro fundamento es The Green, un foro que representa el propósito de la membresía Tend. The Green es un lugar donde la gente puede intercambiar ideas y contenidos sobre el dinero, hablar de sus prioridades para construir una mejor experiencia financiera o simplemente pasar el rato. Los foros temáticos, las salas de chat y (muy pronto) un mapa interactivo del producto no sólo estimulan la conversación, sino que garantizan que las voces de los miembros sean escuchadas. Descubre contenidos de finanzas personales divertidos y didácticos de Tend y, sobre todo, de otros miembros, que serán una herramienta útil en tu viaje hacia la cima. Al fin y al cabo, no hay mejor consejo que el de alguien que se ha topado con problemas similares y los ha superado. The Green es una ventana a la comunidad y a los canales públicos de mayor alcance en los que se producen conversaciones relevantes. Los miembros también recibirán contenido personalizado con la posibilidad de invertir según les convenga. Además, crearemos un mercado comunitario (marketplace) en el que la gente podrá aportar sus propias ideas ¡o adquirir una estupenda camiseta o una gorra en la tienda de los demás! Detrás de todo esto se encuentra nuestro compromiso de inspirar con nuevas ideas, dejando que los deseos de la comunidad establezcan el camino.
        </Paragraph>
      </Article>

      <Paragraph
        variant="b2"
        color="white">
        Esperamos que The Green nos haga responsables a través de un debate agradable e interesante, al mismo tiempo que nos ayuda a construir una mejor experiencia financiera y muestra un mejor camino hacia el futuro.
      </Paragraph>

      <Article>
        <Signature>
          <Image src={signatureImageUrl} />
        </Signature>
      </Article>

    </FlexLayout>
  );
};

export default Body;
