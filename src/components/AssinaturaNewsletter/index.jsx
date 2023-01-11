import EmailField from "../EmailField";
import Title from "../Title";
import { Section, Main } from "./styled";
import { createContext, useState } from "react";

import plantaImg from "../../assets/images/planta.png"
import Modal from "../Modal";

export const ModalContext = createContext()

export default function AssinaturaNewsletter() {
  const [showModal, setShowModal] = useState(false)
  const [userEmail, setUserEmail] = useState("")

  return (
    <ModalContext.Provider value={{ setUserEmail, setShowModal }} >
      <Section>
        <Main>
          <Title smallTitle={"Sua casa com as"} mainTitle={<h1>melhores plantas</h1>} />
          <p>
            Encontre aqui uma vasta seleção de plantas para decorar a sua casa e torná-lo uma pessoa mais feliz no seu dia a dia. Entre com seu e-mail e assine nossa newsletter para saber das novidades da marca.
          </p>
          <EmailField />
        </Main>
        <aside>
          <img src={plantaImg} alt="imagem de um pé de caju, com as follhas bem verdinhas" />
        </aside>
        {showModal && <Modal title="Muito Obrigado!" content={`Obrigado pela sua assinatura, você receberá nossas novidades no e-mail ${userEmail}`} />}
      </Section>
    </ModalContext.Provider >
  )
}