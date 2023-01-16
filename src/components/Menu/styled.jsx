import styled from 'styled-components'

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 2rem;

  @media screen and (max-width: 900px){
    & {
      position: fixed;
      top: 0;
      z-index: 100;
      background-color: var(--light-orange);
      width: 100%;
    }

    
  }
`

export const ToggleMenuButton = styled.button`
  display: none;
  z-index: 1000;

  width: 4rem;
  height: 2rem;
  background: none;
  border: none;
  position: relative;

  
  &.active::after, &.active::before, &::after, &::before {
    content: "";
    width: 100%;
    transition: all .3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    height: .5rem;
    background-color: black;
    display: block;
    position: absolute;
    border-radius: .8rem;
  }
  &::before {
    top: 0;
    right: 0;
  }
  &::after {
    width: 60%;
    bottom: 0;
    right: 0;
  }

  &.active::before {
    rotate: -135deg;
  }

  &.active::after {
    top: 0;
    rotate: 135deg;
  }

  @media screen and (max-width: 900px) {
    & {
      display: block;
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