import { CONTACT, SOCIAL } from '../data/content'
import { FacebookIcon } from './icons/SocialIcons'
import ContactForm from './ContactForm'
import './Contact.css'

export default function Contact() {
  return (
    <section className="section section--alt contact">
      <div className="section__inner contact__inner">
        <p className="eyebrow">Get In Touch</p>
        <h2>Contact {CONTACT.name} for more information</h2>
        <div className="contact__actions">
          <a href={CONTACT.phoneHref} className="contact__button">
            Call {CONTACT.phone}
          </a>
          <a
            href={SOCIAL.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="contact__button contact__button--secondary"
          >
            <FacebookIcon width={18} height={18} />
            Follow on Facebook
          </a>
        </div>
        <ContactForm />
      </div>
    </section>
  )
}
