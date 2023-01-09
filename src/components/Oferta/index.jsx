import Title from "../Title";
import arrowIcon from "../../assets/icons/arrow-icon.svg"
import { OfertaStyled } from "./styled";

export default function Oferta(props) {
  return (
    <OfertaStyled>
      <aside>
        <img src={props.imgUrl} alt={props.imgDescription} />
      </aside>
      <main>
        <div>
          <Title mainTitle={<h3>{props.title}</h3>} />
          <span>R$ {props.price}</span>
        </div>
        <button>
          Comprar
          <img src={arrowIcon} />
        </button>
      </main>
    </OfertaStyled>
  )
}