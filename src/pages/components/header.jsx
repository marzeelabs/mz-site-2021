import Logo from './logo';
const Header = () => { 

  if (typeof window !== "undefined") {
    window.addEventListener('load',function(){
      const mobileMenu = document.querySelectorAll(".header-toggle");
      const mobileDropdown = document.querySelectorAll(".header-menu");

      mobileMenu[0].addEventListener('click', function(e) {
        this.classList.toggle("is-open");
        mobileDropdown[0].classList.toggle("is-visible");
        document.body.classList.toggle("has-menu-open");
      });
    });
  }

  return (
  <>
    <header className="header">
      <div className="header-content">

        <a className="header-logo" href="/">
          <Logo/>
        </a>

        <ul className="header-menu">
          <li className="header-menu__item">
            <a className="header-menu__link" href="#">About</a>
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
        <button className="header-toggle" type="button" aria-label="open menu">
          <span className="header-toggle__icon" aria-label="menu icon"></span>
        </button>
      </div>

    </header>
   
  </>
)};

export default Header;
