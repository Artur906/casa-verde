import EmailField from "../EmailField";
import plantaImg from "../../assets/planta.png"

import Title from "../Title";
import { Container, Main } from "./styled";



export default function AssinaturaNewsletter() {
  return (
    <Container>
      <Main>
        <Title smallTitle={"Sua casa com as"} mainTitle={<h1>melhores plantas</h1>} />
        <p>
          Encontre aqui uma vasta seleção de plantas para decorar a sua casa e torná-lo uma pessoa mais feliz no seu dia a dia. Entre com seu e-mail e assine nossa newsletter para saber das novidades da marca.
        </p>
        <EmailField />
      </Main>
      <div className="aside">
        <img src={plantaImg} alt="imagem de um pé de caju, com as follhas bem verdinhas" />
      </div>
    </Container>
  )
}