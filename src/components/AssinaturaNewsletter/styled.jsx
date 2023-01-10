import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  justify-content: space-around;

  aside {
    flex: 1;
  }
`

export const Main = styled.main`
  margin-top: 15rem;
  margin-bottom: 19.5rem;
  flex: 1;

  input {
    flex-grow: 1;
  }

  h1, p {
    max-width: 49rem;
  }

  p{
    margin: 2.4rem 0 3.4rem 0;
    line-height: 2.6rem;
  }
`