import styled from "styled-components"
import mailIcon from "../assets/mail-icon.svg"

const Email = styled.div`
  display: flex;
  box-shadow: 0 .5rem 1.5rem #0000003e;
  min-width: max-content;

  * {
    font-size: 1.6rem;
  }

  .input-wrapper {
    flex: 2;
    padding: 2.7rem 2.3rem;
    background-color: white;
    
    display: flex;
    align-items: center;
    gap: 1.6rem;
  }

  .input-wrapper input {
    border: none;
  }

  button {
    flex: 1;
    flex-shrink: 0;
    min-width: fit-content;
    padding: 2.7rem 2.3rem;
    color: white;
    background-color: var(--light-orange);
    border: none;
  }
`

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