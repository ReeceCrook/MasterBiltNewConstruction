import Logo from './Logo'
import { CONTACT } from '../data/content'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <Logo />
        <a href={CONTACT.phoneHref} className="footer__phone">
          {CONTACT.phone}
        </a>
      </div>
    </footer>
  )
}
