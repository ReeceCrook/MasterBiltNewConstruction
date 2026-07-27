import { getPhoto } from '../data/photos'
import Placeholder from './Placeholder'
import './ViewsSection.css'

export default function ViewsSection() {
  const viewUrl = getPhoto('view.jpg')

  return (
    <section className="section section--alt views">
      <div className="section__inner">
        <p className="eyebrow">The Views</p>
        <h2>360&deg; views to include Pikes Peak from the back patio.</h2>
        <p className="views__intro">
          Winsome offers access to approximately 145 acres of open space and trails, right outside your door.
        </p>
        {viewUrl ? (
          <a href={viewUrl} target="_blank" rel="noopener">
            <img
              src={viewUrl}
              alt="View from the homesite"
              className="views__image"
              width={2400}
              height={1800}
              loading="lazy"
            />
          </a>
        ) : (
          <Placeholder filename="view.jpg" aspectRatio="16 / 9" label="View from the homesite" className="views__image" />
        )}
      </div>
    </section>
  )
}
