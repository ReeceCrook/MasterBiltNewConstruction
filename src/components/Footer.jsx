import Logo from './Logo'
import { CONTACT, SOCIAL } from '../data/content'
import facebookLogo from '../assets/icons8-facebook-48.png'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <Logo />
        <div className="footer__links">
          <a
            href={SOCIAL.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="footer__social"
            aria-label="MasterBilt Homes on Facebook"
          >
            <img src={facebookLogo} alt="" width={22} height={22} />
          </a>
          <a href={CONTACT.phoneHref} className="footer__phone">
            {CONTACT.phone}
          </a>
        </div>
      </div>
    </footer>
  )
}
