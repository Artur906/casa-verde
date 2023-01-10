import { useState } from "react"
import { Email, ErrorMessage } from "./styled"

import mailIcon from "../../assets/icons/mail-icon.svg"



export default function EmailField() {
  const [email, setEmail] = useState("")
  const [isButtonActive, setIsButtonActive] = useState(false)
  const [showErrorMessage, setShowErrorMessage] = useState(false)

  const handleEmailValidation = (value) => {
    setEmail(email => value)

    const isEmailValid = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email);
    isEmailValid ? setIsButtonActive(true) : setIsButtonActive(false)
  }

  const handleSubscriptionButton = () => {
    if (!isButtonActive) {
      setShowErrorMessage(true)
      return
    }

    alert(`Obrigado pela sua assinatura, você receberá nossas novidades no e-mail ${email}`)
  }

  return (
    <>
      <Email showErrorMessage={showErrorMessage} >
        <div className="input-wrapper">
          <img src={mailIcon} alt="imagem de uma carta" />
          <input type="email" autoComplete="true" placeholder="Insira seu e-mail" onChange={e => {
            handleEmailValidation(e.target.value)
            setShowErrorMessage(false)
          }} />
        </div>

        <button onClick={handleSubscriptionButton}>Assinar newsletter</button>
      </Email>
      {showErrorMessage && <ErrorMessage>Informe um email válido</ErrorMessage>}
    </>
  )
}