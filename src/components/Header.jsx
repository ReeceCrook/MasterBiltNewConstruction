import Logo from './Logo'
import { CONTACT, STATUS_BADGE } from '../data/content'
import './Header.css'

export default function Header() {
  return (
    <header className="header">
      <div className="header__inner">
        <a href="#top" className="header__logo-link">
          <Logo />
        </a>
        <span className="header__badge">{STATUS_BADGE}</span>
        <a href={CONTACT.phoneHref} className="header__phone">
          {CONTACT.phone}
        </a>
      </div>
    </header>
  )
}
