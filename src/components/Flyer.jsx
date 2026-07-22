import { getPhoto } from '../data/photos'
import Placeholder from './Placeholder'
import './Flyer.css'

export default function Flyer() {
  const flyerUrl = getPhoto('flyer.jpg')

  return (
    <section className="section flyer">
      <div className="section__inner">
        <p className="eyebrow">The Flyer</p>
        <h2>Full property details</h2>
        {flyerUrl ? (
          <a href={flyerUrl} target="_blank" rel="noopener">
            <img src={flyerUrl} alt="Property flyer" className="flyer__image" />
          </a>
        ) : (
          <Placeholder filename="flyer.jpg" aspectRatio="8.5 / 11" label="Marketing flyer" className="flyer__image" />
        )}
      </div>
    </section>
  )
}
