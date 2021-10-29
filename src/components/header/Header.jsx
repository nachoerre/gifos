//styles
import './Header.css'

//components
import Button from '../button/Button'

//context
import { AppContext } from '../../contexts/AppContext';

//dependencies
import React, { useContext } from 'react';

//assets
import darkLogo from '../../assets/logo-mobile-modo-noct.svg';
import lightLogo from '../../assets/logo-desktop.svg';

function Header() {
  const { isDark, setIsDark } = useContext(AppContext);

  return (
    <header className='header'>
      <div>
        {isDark ?
          <img src={darkLogo} alt="Logo de Gifos" className='logo' /> :
          <img src={lightLogo} alt="Logo de Gifos" className='logo' />
        }
      </div>
      <Button className={isDark ? 'dark' : 'light'} onClick={() => setIsDark(!isDark)}>
        MODO {isDark ? ' LIGHT' : ' DARK'}
      </Button>
    </header>

  )
}

export default Header;

