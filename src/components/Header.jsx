import Logo from './Logo'
import { CONTACT, STATUS_BADGE } from '../data/content'
import './Header.css'

export default function Header() {
  return (
    <header className="header">
      <div className="header__inner">
        <a
          href="https://masterbilt.com"
          target="_blank"
          rel="noopener noreferrer"
          className="header__logo-link"
        >
          <Logo />
          <span className="header__logo-hint">
            <span className="header__logo-hint-text">Visit masterbilt.com</span>
            <svg
              className="header__logo-hint-icon"
              viewBox="0 0 16 16"
              width="12"
              height="12"
              aria-hidden="true"
            >
              <path
                fill="currentColor"
                d="M6 2h8v8h-1.5V4.56L4.06 13 3 11.94 11.44 3.5H6z"
              />
            </svg>
          </span>
        </a>
        <span className="header__badge">{STATUS_BADGE}</span>
        <a href={CONTACT.phoneHref} className="header__phone">
          {CONTACT.phone}
        </a>
      </div>
    </header>
  )
}
