import mailIcon from "../../assets/icons/mail-icon.svg"
import { Email } from "./styled"

export default function EmailField() {

  return (
    <Email>
      <div className="input-wrapper">
        <img src={mailIcon} alt="imagem de uma carta" />
        <input type="text" placeholder="Insira seu e-mail" />
      </div>
      <button>Assinar newsletter</button>
    </Email>
  )
}