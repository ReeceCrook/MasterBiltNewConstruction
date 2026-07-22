import { BODY_PARAGRAPHS } from '../data/content'
import './Description.css'

export default function Description() {
  return (
    <section className="section description">
      <div className="section__inner description__inner">
        <p className="eyebrow">The Home</p>
        <h2>Understated mountain elegance</h2>
        {BODY_PARAGRAPHS.map((paragraph, i) => (
          <p key={i} className="description__paragraph">
            {paragraph}
          </p>
        ))}
      </div>
    </section>
  )
}
