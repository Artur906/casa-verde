import styled from "styled-components"

export const Email = styled.div`
  display: flex;
  box-shadow: ${props => (props.showErrorMessage ? `1rem 1rem 3rem #ff0000a4` : `var(--default-box-shadow)`)};
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
    outline: none;
  }

  input[type="submit"] {
    flex: 1;
    flex-shrink: 0;
    min-width: fit-content;
    padding: 2.7rem 2.3rem;
    color: white;
    background-color: var(--light-orange);
    border: none;
    cursor: pointer;
  }

  button:hover {
    filter: contrast(1.1);
  }
`

export const ErrorMessage = styled.p`
  color: red;
  font-weight: bold;
`