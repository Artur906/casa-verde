import Title from "../Title";
import sideImage from "../../assets/images/planta-section-como-fazer.png"
import { ContainerSection } from "./styled";

export default function ComoFazer() {

  return (
    <ContainerSection>
      <img src={sideImage} alt="planta bunita" />
      <article>
        <Title smallTitle="Como conseguir" mainTitle={<h2>minha planta</h2>} />
        <ul>
          <li>Escolha suas plantas</li>
          <li>Faça seu pedido</li>
          <li>Aguarde na sua casa</li>
        </ul>
      </article>
    </ContainerSection>
  )
}