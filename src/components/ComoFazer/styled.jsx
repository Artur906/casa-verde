import styled from "styled-components";

export const Section = styled.section`
  margin-top: -6rem;
  display: flex;
  box-shadow: var(--default-box-shadow);


  aside {
    flex: 3;
  }

  aside img {
    height: 100%;
  }

  article {
    background-color: #fafafa;
    padding: 6rem 2.5rem;
    flex: 2;
  }

  ul *{
    list-style: none;
    font-size: 2.2rem;
    
  }

  ul {
    margin-top: 4.5rem;
    display: flex;
    flex-direction: column;
    gap: 3.2rem;
  }

  li {
    display: flex;
    align-items: center;
  }
  li::before {
    content: "";
    width: 5.2rem;
    height: 5.2rem;
    background-color: var(--light-orange);
    margin-right: 1.6rem;
    border-radius: 5rem ;
  }
`