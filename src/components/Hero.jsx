import { getPhoto } from '../data/photos'
import Placeholder from './Placeholder'
import { TAGLINE, PRICE, ADDRESS, CITY_STATE_ZIP } from '../data/content'
import './Hero.css'

const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${ADDRESS}, ${CITY_STATE_ZIP}`)}`

export default function Hero() {
  const heroUrl = getPhoto('hero-render.jpg')
  const badgeUrl = getPhoto('Virtual rendering for illustration only.png')

  return (
    <section id="top" className="hero">
      <div className="hero__media">
        {heroUrl ? (
          <a href={heroUrl} target="_blank" rel="noopener" className="hero__image-link">
            <img
              src={heroUrl}
              alt="Rendering of the exterior of the new home in Winsome"
              className="hero__image"
              width={2099}
              height={1182}
              fetchPriority="high"
            />
          </a>
        ) : (
          <Placeholder
            filename="hero-render.jpg"
            aspectRatio="16 / 10"
            label="Hero exterior render"
            className="hero__image"
          />
        )}
        {badgeUrl && (
          <img src={badgeUrl} alt="Virtual rendering for illustration only" className="hero__badge" />
        )}
      </div>
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
