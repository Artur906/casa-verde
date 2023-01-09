import { ComposeTitle, Span } from "./styled";

export default function Title(props) {

  return (
    <ComposeTitle>
      {props.smallTitle && <Span>{props.smallTitle}</Span>}
      {props.mainTitle}
    </ComposeTitle>
  )
}