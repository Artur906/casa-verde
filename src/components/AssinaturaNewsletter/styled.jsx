import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  justify-content: space-around;

  aside {
    flex: 1;
  }

  @media screen and (max-width: 800px) {
    aside {
      display: none;
    }

    & {
      display: block;
      min-width: 100%;
    }
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
    width: 49rem;
  }

  p{
    margin: 2.4rem 0 3.4rem 0;
    line-height: 2.6rem;
  }

  @media screen and (max-width: 600px) {
    p, h1 {
      will-change: contents;
      width: auto;
    }

    & {
      padding: 2rem;
      max-width: 100%;

      margin: auto;
      margin-top: 10rem;
    }
  }
`