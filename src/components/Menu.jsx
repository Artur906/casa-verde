import logo from '../assets/logo-casa-verde.svg'
import styled from 'styled-components'

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 0;
`

const Ul = styled.ul`
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

export default function Menu() {
  return (
    <Header>
      <img src={logo} alt="logo casa verde" />
      <nav>
        <Ul>
          <li>Como fazer</li>
          <li>Ofertas</li>
          <li>Depoimentos</li>
          <li>Videos</li>
          <li>Meu carrinho</li>
        </Ul>
      </nav>
    </Header>
  )
}