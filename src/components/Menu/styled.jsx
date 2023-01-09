import styled from 'styled-components'

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 0;
`

export const Ul = styled.ul`
  list-style: none;
  display: flex;
  gap: 1.3rem;
  font-weight: bold;

  li {
    font-size: 1.6rem;
  }
  
  li:not(:last-child)::after{
    content: '/';
    margin-left: 1.3rem;
  }
`