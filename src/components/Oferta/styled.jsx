import styled from "styled-components";

export const OfertaStyled = styled.div`
  text-align: left;
  display: flex;
  background-color: #fff;
  box-shadow: var(--default-box-shadow);
  width: 37.9rem;

  aside {
    flex: 1;
    img {
      bottom: 0;
      left: 0;
    }
  }

  main {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 2.4rem;
    padding: 2.7rem;
  }

  span, button {
    font-size: 1.6rem;
  }

  span {
    color: var(--text-gray);
    opacity: .5;
    display: block;
    margin-top: .8rem;
  }

  button {
    border: none;
    background-color: transparent;
    display: flex;
    align-items: center;
    gap: 2.5rem;
    color: var(--light-orange);
    cursor: pointer;
  }

  @media screen and (max-width: 500px) {
    & {
      width: fit-content;
    }
  }
`