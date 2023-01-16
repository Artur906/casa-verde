import { useEffect, useState } from 'react'
import logo from '../../assets/icons/logo-casa-verde.svg'
import { Header, Ul, ToggleMenuButton } from './styled'


export default function Menu() {
  const [windowWidth, setWindowWidth] = useState(0)
  const [menuActive, setMenuActive] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleToggleMenu = () => {
    setMenuActive(state => !state)
  }

  return (
    <Header>
      <img src={logo} alt="logo casa verde" />
      <nav>
        <Ul className={menuActive && windowWidth < 900 ? "actived-menu" : ""}>
          <li><a href='#'>Como fazer</a></li>
          <li><a href='#'>Ofertas</a></li>
          <li><a href='#'>Depoimentos</a></li>
          <li><a href='#'>Videos</a></li>
          <li><a href='#'>Meu carrinho</a></li>
        </Ul>
      </nav>
      <ToggleMenuButton className={menuActive ? 'active' : ''} onClick={handleToggleMenu} />
    </Header>
  )
}