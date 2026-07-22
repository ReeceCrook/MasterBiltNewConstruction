import { CONTACT } from '../data/content'
import './Contact.css'

export default function Contact() {
  return (
    <section className="section section--alt contact">
      <div className="section__inner contact__inner">
        <p className="eyebrow">Get In Touch</p>
        <h2>Contact {CONTACT.name} for more information</h2>
        <a href={CONTACT.phoneHref} className="contact__button">
          Call {CONTACT.phone}
        </a>
      </div>
    </section>
  )
}
