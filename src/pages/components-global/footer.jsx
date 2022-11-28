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
        <a className="footer-social__link" title="Marzee Twitter" href="http://www.twitter.com/marzeelabs" target="_blank">
          <svg>
            <use xlinkHref="#twitter" />
          </svg>
        </a>
      </li>
      <li className="footer-social__item">
        <a className="footer-social__link" title="Marzee Linkedin" href="https://www.linkedin.com/company/marzee-labs" target="_blank">
          <svg>
            <use xlinkHref="#linkedin" />
          </svg>
        </a>
      </li>
      <li className="footer-social__item">
        <a className="footer-social__link" title="Marzee Facebook" href="https://www.facebook.com/marzeelabs" target="_blank">
          <svg>
            <use xlinkHref="#facebook" />
          </svg>
        </a>
      </li>
      <li className="footer-social__item">
        <a className="footer-social__link" title="Marzee Github" href="https://github.com/marzeelabs" target="_blank">
          <svg>
            <use xlinkHref="#github" />
          </svg>
        </a>
      </li>
      <li className="footer-social__item">
        <a className="footer-social__link" title="Marzee Medium" href="https://medium.com/marzeelabs" target="_blank">
          <svg>
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
