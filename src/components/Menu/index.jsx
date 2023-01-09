import logo from '../../assets/logo-casa-verde.svg'
import { Header, Ul } from './styled'


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