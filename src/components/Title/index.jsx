import { Span } from "./styled";

export default function Title(props) {

  return (
    <div className="title">
      <Span>
        {props.smallTitle}
      </Span>
      <h1>{props.mainTitle}</h1>
    </div>
  )
}