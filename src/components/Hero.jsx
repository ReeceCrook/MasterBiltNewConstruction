import { getPhoto } from '../data/photos'
import Placeholder from './Placeholder'
import { TAGLINE, PRICE, ADDRESS, CITY_STATE_ZIP } from '../data/content'
import './Hero.css'

const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${ADDRESS}, ${CITY_STATE_ZIP}`)}`

export default function Hero() {
  const heroUrl = getPhoto('Rendering-with-Banner.png')

  return (
    <section id="top" className="hero">
      {heroUrl ? (
        <a href={heroUrl} target="_blank" rel="noopener" className="hero__image-link">
          <img
            src={heroUrl}
            alt="Rendering of the exterior of the new home in Winsome"
            className="hero__image"
            width={2029}
            height={687}
            fetchPriority="high"
          />
        </a>
      ) : (
        <Placeholder
          filename="Rendering-with-Banner.png"
          aspectRatio="16 / 10"
          label="Hero exterior render"
          className="hero__image"
        />
      )}
      <div className="hero__panel hero__panel--dark">
        <div className="hero__panel-inner">
          <h1 className="hero__title">
            <a href={MAPS_URL} target="_blank" rel="noopener" className="hero__title-link">
              {ADDRESS}
            </a>
          </h1>
          <p className="hero__subtitle">{TAGLINE}</p>
        </div>
      </div>
      <div className="hero__panel hero__panel--light">
        <div className="hero__panel-inner">
          <p className="hero__price">{PRICE}</p>
        </div>
      </div>
    </section>
  )
}
