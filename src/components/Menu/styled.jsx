import styled from 'styled-components'

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 2rem;

  .toggle-menu-button {
    display: none;
  }

  @media screen and (max-width: 900px){
    & {
      position: fixed;
      top: 0;
      z-index: 100;
      background-color: var(--light-orange);
      width: 100%;
    }
    .toggle-menu-button {
      display: block;
      z-index: 1000;
      position: fixed;
      top: 2rem;
      right: 2rem;

      background-color: transparent;
      border: none;

      transition: all .5s ease-in ;
    }
  }
`

export const Ul = styled.ul`
  list-style: none;
  display: flex;
  gap: 1.3rem;
  font-weight: bold;

  li, a {
    text-decoration: none;
    font-size: 1.6rem;
    color: var(--text-gray);
  }
  
  li:not(:last-child)::after{
    content: '/';
    margin-left: 1.3rem;
  }

  @media screen and (max-width: 900px) {
    & {
      flex-direction: column;
      position: fixed;
      background-color: var(--light-orange);

      padding: 3rem;
      top: 0;
      right: -100vw;
      z-index: 100;

      height: 100vh;
      width: 90vw;

      align-items: center;
      justify-content: center;
      transition: all 0.5s ease-in-out;
    }

    li::after{
      display: none;
    }

    &.actived-menu {
      transition: all 0.5s ease-in-out;
      right: 0;
    }
    
  }
`