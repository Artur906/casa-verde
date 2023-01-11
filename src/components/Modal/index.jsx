import { useContext } from "react";
import Title from "../Title";
import { BlurBackground, StyledModal } from "./styled";
import { ModalContext } from "../AssinaturaNewsletter";

export default function Modal(props) {
  const { setShowModal } = useContext(ModalContext)

  return (
    <BlurBackground>
      <StyledModal>
        <div>
          <Title mainTitle={<h2>{props.title}</h2>} />
          <button onClick={() => setShowModal(false)}>x</button>
        </div>
        <p>{props.content}</p>
      </StyledModal>
    </BlurBackground>
  )
}