import { useEffect } from 'react';
import Logo from './logo';
import SocialIcons from './social-icons';


const Footer = () => { 

const date = new Date();
let year = date.getFullYear();
 useEffect(() => {
    document.getElementById("year").innerHTML = year;
  }, []);

  return (
  <>
  <footer className="footer">
    <a className="mz-logo" href="/" title="homepage">
      <Logo/>
    </a>

    <ul className="footer-social">
      <SocialIcons />
      <li className="footer-social__item">
        <a className="footer-social__link" href="">
          <svg viewBox="0 0 24 24">
            <use xlinkHref="#twitter" />
          </svg>
        </a>
      </li>
      <li className="footer-social__item">
        <a className="footer-social__link" href="">
          <svg viewBox="0 0 24 24">
            <use xlinkHref="#linkedin" />
          </svg>
        </a>
      </li>
      <li className="footer-social__item">
        <a className="footer-social__link" href="">
          <svg viewBox="0 0 24 24">
            <use xlinkHref="#facebook" />
          </svg>
        </a>
      </li>
      <li className="footer-social__item">
        <a className="footer-social__link" href="">
          <svg viewBox="0 0 24 24">
            <use xlinkHref="#github" />
          </svg>
        </a>
      </li>
      <li className="footer-social__item">
        <a className="footer-social__link" href="">
          <svg viewBox="0 0 24 24">
            <use xlinkHref="#medium" />
          </svg>
        </a>
      </li>
    </ul>

    <p className="footer-copyright">
      ©<span className="footer-copyright__year" id="year" /> - Marzee
      <span className="footer-copyright__spacer">|</span>
      All right reserved
    </p>
  </footer>

  </>
)};

export default Footer;
