import Title from "../Title";
import sideImage from "../../assets/images/planta-section-como-fazer.png"
import { Section } from "./styled";

export default function ComoFazer() {

  return (
    <Section>
      <aside>
        <img src={sideImage} alt="planta bunita" />
      </aside>
      <article>
        <Title smallTitle="Como conseguir" mainTitle={<h2>minha planta</h2>} />
        <ul>
          <li>Escolha suas plantas</li>
          <li>Faça seu pedido</li>
          <li>Aguarde na sua casa</li>
        </ul>
      </article>
    </Section>
  )
}