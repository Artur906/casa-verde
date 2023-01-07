import EmailField from "./EmailField";
import plantaImg from "../assets/planta.png"
import Title from "./Title";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-around;
`

const Main = styled.main`
  margin-top: 15rem;
  margin-bottom: 19.5rem;

  h1, p {
    max-width: 49rem;
  }

  p{
    margin: 2.4rem 0 3.4rem 0;
    line-height: 2.6rem;
  }
`


export default function AssinaturaNewsletter() {
  return (
    <Container>
      <Main>
        <Title smallTitle={"Sua casa com as"} mainTitle={"melhores plantas"} />
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