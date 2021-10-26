// import Logo from '../../../public/assets/mz_logo_horizontal.svg';

const Header = () => { 
  console.log("Yo");


  return (
  <>
    <header className="header">
      <div className="header-content">
        {/* <Logo /> */}
        <h2>Header Logo</h2>

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




    </header>
   
  </>
)};

export default Header;
