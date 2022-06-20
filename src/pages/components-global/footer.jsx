import { useEffect } from 'react';
import { useSanity } from '../../context/sanity-context';
import { urlFor } from '../../lib/client';
import Logo from './logo';
import SocialIcons from './social-icons';


const Footer = () => { 

  const socialData = useSanity('socials');
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
        {socialData.map(social => (
          <li className="footer-social__item">
              <a className="footer-social__link" title={social.title} href={social.link} target="_blank">
                <div className="footer-social__icon">
                  <img src={urlFor(social.icon)}/>
                </div> 
              </a>
            </li>
        ))}
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
