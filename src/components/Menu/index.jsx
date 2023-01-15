import { useEffect, useState } from 'react'
import logo from '../../assets/icons/logo-casa-verde.svg'
import { Header, Ul } from './styled'


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
      {menuActive ? (
        <button className='toggle-menu-button' onClick={handleToggleMenu}>
          <svg viewBox="0 0 100 80" width="40" height="40">
            <rect width="100" height="10"></rect>
            <rect y="30" width="100" height="10"></rect>
            <rect y="60" width="100" height="10"></rect>
          </svg>
        </button>
      ) : (
        <button className='toggle-menu-button' onClick={handleToggleMenu} >
          <svg viewBox="0 0 100 80" width="40" height="40">
            <rect width="100" height="10"></rect>
            <rect y="30" x="30" width="70" height="10"></rect>
            <rect y="60" x="60" width="40" height="10"></rect>
          </svg>
        </button>
      )}
    </Header>
  )
}