import styled from "styled-components"

export const ComposeTitle = styled.div`
  h1, h2, h3 {
    font-family: 'Elsie Swash Caps', cursive;
    color: var(--text-gray);
  }

  h1 {
    font-size: 8.2rem;
  }

  h2 {
    font-size: 4.8rem;
  }

  h3 {
    font-size: 3.2rem;
  }

  @media screen and (max-width: 600px){
    h1{
      font-size: 6rem;
    }
  }
`

export const Span = styled.span`
  font-size: 2.2rem;
  opacity: 0.5;
`
