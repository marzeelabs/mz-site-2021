import { useState } from 'react';
import Logo from './logo';
const Header = () => { 


  const [ isOpen, setIsOpen ] = useState(false);

  const handleClick = (event) => {
    event.preventDefault();
    setIsOpen(!isOpen);
    document.body.classList.toggle("has-menu-open");
  }

  return (
  <>
    <header className="header">
      <div className="header-content">

        <a className="mz-logo" href="/" title="homepage">
          <Logo/>
        </a>

        <ul className={isOpen ? 'header-menu is-visible' : 'header-menu'}>
          <li className="header-menu__item">
            <a className="header-menu__link" href="/about">About</a>
          </li>

          <li className="header-menu__item">
            <a className="header-menu__link" href="#">Services</a>
          </li>

          <li className="header-menu__item">
            <a className="header-menu__link" href="#">Case Studies</a>
          </li>

          <li className="header-menu__item">
            <a className="header-menu__link" href="#">Blog</a>
          </li>
        </ul>
      </div>

      <div className="header-toggle__wrapper">
        <button className={isOpen ? 'header-toggle is-open' : 'header-toggle'} type="button" aria-label="open menu" onClick={handleClick}>
          <span className="header-toggle__icon" aria-label="menu icon"></span>
        </button>
      </div>

    </header>
   
  </>
)};

export default Header;
