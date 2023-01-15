import styled from "styled-components";

export const StyledModal = styled.div`
  position: relative;
  margin: auto;
  background-color: var(--body-bg-color);

  max-width: 50vw;

  box-shadow: var(--default-box-shadow);
  z-index: 100;

  padding: 3rem;
  text-align: center;

  transition: all .2s ease-in;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  button {
    position: absolute;
    right: 0;
    top: 0;

    font-size: 2rem;
    width: 4rem;
    height: 4rem;

    border: none;
    filter: brightness(0.9);
    cursor: pointer;


  }

  button:hover {
    filter: brightness(0.7);
  }

  p {
    max-width: 90%;
    font-weight: bold;
  }

  @media screen and (max-width: 700px) {
    & {
      max-width: 90vw;
    }
  }
`

export const BlurBackground = styled.div`
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #00000088;

  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;

  z-index: 100;
`