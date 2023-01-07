import styled from "styled-components"

export default function Title(props) {

  const Span = styled.span`
    font-size: 2.2rem;
    opacity: 0.5;
  `

  return (
    <div className="title">
      <Span>
        {props.smallTitle}
      </Span>
      <h1>{props.mainTitle}</h1>
    </div>
  )
}